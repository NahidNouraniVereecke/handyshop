
<template>
  <div class="container">
    <div>
      <div v-if="showDismissibleAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ alertMessage }}
      </div>
    </div>
    <div class="container">
      <div class="login-form">
        <TitleAtom :text="'Login'"></TitleAtom>
        <form @submit.prevent="submit">
          <div class="container-fluid">
            <div class="form-field">
              <label class="small mb-1" for="username">Username / E-mail</label>
              <input class="form-control" type="text" id="username" placeholder="Enter your username"
                v-model="form.values.username" @blur="validate('username')">
              <div class="error-message" v-if="!!form.errors.username">{{ form.errors.username }}</div>
            </div>
            <div class="form-field">
              <label class="small mb-1" for="password">Password</label>
              <input class="form-control" type="password" id="password" placeholder="Enter your password"
                v-model="form.values.password" @blur="validate('password')">
              <div class="error-message" v-if="!!form.errors.password">{{ form.errors.password }}></div>
            </div>
            <div>
              <ButtonAtom type="submit">Login</ButtonAtom>
            </div>
            <div>
              <LinkAtom to="/register">New here? Register here!</LinkAtom>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
import axios from 'axios';
import { object, string } from 'yup';
import LinkAtom from '@/components/atoms/LinkAtom.vue';
import TitleAtom from '@/components/atoms/TitleAtom.vue';
import { useUserStore } from '@/store/user.js';

const loginSchema = object().shape({
  username: string().required(),
  password: string().required(),
});

export default {
  name: 'LoginView',
  components: {
    TitleAtom,
    ButtonAtom,
    LinkAtom,
  },
  data() {
    return {
      store: useUserStore(),
      form: {
        values: {
          username: '',
          password: '',
        },
        errors: {
          username: '',
          password: '',
        },
      },
      showDismissibleAlert: false,
      alertMessage: '',
    };
  },
  methods: {
    dismissAlert() {
      this.showDismissibleAlert = false;
    },
    validate(field) {
      loginSchema
        .validateAt(field, this.form.values)
        .then(() => {
          this.form.errors[field] = '';
        })
        .catch((err) => {
          this.form.errors[field] = err.message;
        });
    },
    async submit() {
      try {
        await loginSchema.validate(this.form.values, { abortEarly: false });

        this.form.errors = {
          username: '',
          password: '',
        };

        const backendUrl = 'http://localhost:8081/auth/token/email';

        const response = await axios.post(backendUrl, {
          username: this.form.values.username,
          password: this.form.values.password,
        });
        
        const token = response.data.token;

        console.log('Login erfolgreich. Token:', token);

        localStorage.setItem('access_token', token);
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken);

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(emailRegex.test(this.form.values.username)){
          const backendUrl2 = 'http://localhost:8081/users/email/';
        try{
          const response = await axios.get(`${backendUrl2}${this.form.values.username}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          const user = response.data;

          console.log(user.status)
          if(!user.status){
            localStorage.clear;
            localStorage.setItem('username', 'inaktiv');
            throw new Error("This User is deaktiveted please contact customer service for help.")
          }
         
          localStorage.setItem('username', user.username);
          const username = localStorage.getItem('username');
          console.log(username);

          console.log('Benutzer:', user);

          localStorage.setItem('role',user.role);
          const userRoleL = localStorage.getItem('role');
          console.log(userRoleL);

          this.store.setUserInfo(user);

      
        }catch (err){
          console.error('Login nicht erfolgreich:', err);

          this.alertMessage = 'Es gab ein internes Problem versuchen Sie es später nochmal.';
          this.showDismissibleAlert = true;
        }
        }else{
          const backendUrl2 = 'http://localhost:8081/users/username/';
        try {
          const response = await axios.get(`${backendUrl2}${this.form.values.username}`, {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          });

          const user = response.data;

          console.log(user.status)
          if(!user.status){
            localStorage.clear;
            localStorage.setItem('username', 'inaktiv');
            throw new Error("This User is deaktiveted please contact customer service for help.")
          }
         
          localStorage.setItem('username', user.username);
          const username = localStorage.getItem('username');
          console.log(username);

          console.log('Benutzer:', user);

          localStorage.setItem('role', user.role);
          const userRoleL = localStorage.getItem('role');
          console.log(userRoleL);

          this.store.setUserInfo(user);




      
        } catch (err) {
          console.error('Login nicht erfolgreich:', err);

          this.alertMessage = 'Es gab ein internes Problem versuchen Sie es später nochmal.';
          this.showDismissibleAlert = true;
        }
        }

        

      
        this.showDismissibleAlert = false; // Verberge die Alert-Box, falls sie vorher sichtbar war
        this.alertMessage = ''; // Setze die Meldung zurück

       
        if(localStorage.getItem('username') == 'inaktiv'){
          localStorage.clear;
          this.store.clearUserInfo;
          this.alertMessage = 'This User is deaktiveted please contact customer service for help.';
          this.showDismissibleAlert = true;
          throw new Error("This User is deaktiveted please contact customer service for help.");
          
        }


        this.$router.push({ name: 'home' });

      } catch (err) {
        console.error('Login nicht erfolgreich:', err);

        if(!this.showDismissibleAlert){
          this.alertMessage = 'Login nicht erfolgreich. Überprüfe deine Anmeldedaten.';
        this.showDismissibleAlert = true;
        }
        
       


        if (err.inner) {
          err.inner.forEach((error) => {
            this.form.errors[error.path] = error.message;
          });
        }
      }
      
    },
  },
};
</script>

<style scoped>
.container {
  width: 500px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
}

.error-message {
  color: red;
  margin-top: 5px;
}
</style>