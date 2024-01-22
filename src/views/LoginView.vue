
<template>
  <div id="app">
    
  <div>
    <div v-if="showDismissibleAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
      {{ alertMessage }}
      <button type="button" class="close" @click="dismissAlert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
    

    <main>
      <div class="container">
        <div class="login-form">
          <TitleAtom :text="'Login'" />
          <div class="container-fluid">
            <form @submit.prevent="submit">
              <div>
                <div>
                  <label for="username">Username or Email</label>
                </div>
                <div>
                  <input type="text" id="username" v-model="form.values.username" @blur="validate('username')" />
                </div>
                <p class="error-message" v-if="!!form.errors.username">{{ form.errors.username }}</p>
              </div>
              <div>
                <div>
                  <label for="password">Password</label>
                </div>
                <div>
                  <input type="password" id="password" v-model="form.values.password" @blur="validate('password')" />
                </div>
                <p class="error-message" v-if="!!form.errors.password">{{ form.errors.password }}</p>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary">Login</button>
              </div>
              <div>
                <LinkAtom href="/register">New here? Register here!</LinkAtom>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>

  </div>
</template>

<script>
import axios from 'axios';
import { object, string } from 'yup';
import LinkAtom from '@/components/atoms/LinkAtom';
import TitleAtom from '@/components/atoms/TitleAtom.vue';
import {useUserStore} from '@/store/user.js';

const loginSchema = object().shape({
  username: string().min(5, 'Username must be at least 5 characters.').required(),
  password: string().min(8, 'Password must have at least 8 characters').required(),
});

export default {
  name: 'LoginView',
  components: {
    LinkAtom,
    TitleAtom,
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
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
}

.container {
  margin-top: 150px;
  display: flex;
  justify-content: center;
}



.login-form {
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-field {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  
}


.error-message {
  color: red;
  margin-top: 5px;
}
</style>