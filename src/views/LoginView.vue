
<template>
  <div id="app">
    <main>
      <div class="container">
        <div class="login-form">
          <TitleAtom :text="'Login'" />
          <div class="container-fluid">
            <form @submit.prevent="submit">
              <div>
                <div>
                  <label for="username">Username</label>
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
              <div>
                <CheckboxField :id="rememberMeId" :label="'Remember login information'" />
              </div>
              <div>
                <button type="submit">Login</button>
              </div>
              <div>
                <LinkAtom href="#">Forgot your Password?</LinkAtom>
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
import CheckboxField from '@/components/molecules/CheckboxField';
import TitleAtom from '@/components/atoms/TitleAtom.vue';

const loginSchema = object().shape({
  username: string().max(20, 'Username must be at most 20 characters.').matches(/^[a-zA-Z0-9]+$/, 'Username can only contain letters and numbers.').required(),
  password: string().min(8, 'Password must have at least 8 characters').required(),
});

export default {
  name: 'LoginView',
  components: {
    LinkAtom,
    CheckboxField,
    TitleAtom,
  },
  data() {
    return {
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
    };
  },
  methods: {
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

        const backendUrl = 'http://localhost:8081/auth/token';

        const response = await axios.post(backendUrl, {
          username: this.form.values.username,
          password: this.form.values.password,
        });

        const token = response.data.token;

        console.log('Login erfolgreich. Token:', token);

        // Hier kannst du den Token speichern oder für weitere Anfragen verwenden
        localStorage.setItem('access_token', token);
        const accessToken = localStorage.getItem('access_token');
        console.log(accessToken);

      } catch (err) {
        console.error('Login nicht erfolgreich:', err);

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
  margin-top: 200px;
  display: flex;
  justify-content: center;
}



.login-form {
  width: 500px;
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