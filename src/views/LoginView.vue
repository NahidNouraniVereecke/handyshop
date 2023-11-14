
<template>
  <div id="app">
    <main>
      <div class="container">
        <div class="login-form">
          <TitleAtom :text="'Login'" />
          <div class="container-fluid">
            <FormField
              fieldId="username"
              fieldType="text"
              fieldLabel="Benutzername:"
              fieldValue=""
              fieldPlaceholder="Geben Sie Ihren Benutzernamen ein"
            />
        
          
            <FormField
              fieldId="password"
              fieldType="password"
              fieldLabel="Passwort:"
              fieldValue=""
              fieldPlaceholder="Geben Sie Ihr Passwort ein"
            />
            <CheckboxField :id="rememberMeId" :label="'Anmeldedaten merken'" />
          <div>
            <ButtonAtom @click="handleLogin">Anmelden</ButtonAtom>
            </div>
            <div>
                  <LinkAtom href="#">Passwort vergessen?</LinkAtom>
                </div>
                
                <div>
                  <LinkAtom href="/register">Neu hier? Hier registrieren!</LinkAtom>
                </div>
                </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import FormField from '@/components/molecules/FormField';
import ButtonAtom from '@/components/atoms/ButtonAtom';
import LinkAtom from '@/components/atoms/LinkAtom';
import CheckboxField from '@/components/molecules/CheckboxField';
import TitleAtom from '@/components/atoms/TitleAtom.vue';


export default {
  components: {
    FormField,
    ButtonAtom,
    LinkAtom,
    CheckboxField,
    TitleAtom
  },
  methods: {
    handleLogin() {
      const username = this.$refs.username.fieldValue;
      const password = this.$refs.password.fieldValue;

      console.log('Attempting login with username:', username, 'and password:', password);
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


</style>
