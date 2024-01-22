<template>
  <div class="container">
    <div class="registeration-form">
      <TitleAtom :text="'Registrieren'" />
      <form @submit.prevent="submitForm">
        <div class="container-fluid">
      
          
          <FormField :fieldId="'vorname'" :fieldLabel="'Vorname'" :fieldType="'text'" :value="formData.vorname" @input="formData.vorname = $event" :fieldPlaceholder="'Jane'" :isRequired="true" />

          <FormField :fieldId="'nachname'" :fieldLabel="'Nachname'" :fieldType="'text'" :value="formData.nachname" @input="formData.nachname = $event" :fieldPlaceholder="'Smith'" :isRequired="true" />

          <FormField :fieldId="'username'" :fieldLabel="'Username'" :fieldType="'text'" :value="formData.username" @input="formData.username = $event" :fieldPlaceholder="'exampleUser123'" :isRequired="true" />

          <FormField :fieldId="'email'" :fieldLabel="'E-Mail'" :fieldType="'email'" :value="formData.email" @input="formData.email = $event" :fieldPlaceholder="'example@mail.com'" :isRequired="true" />

          <FormField :fieldId="'password'" :fieldLabel="'Passwort'" :fieldType="'password'" :value="formData.password" @input="formData.password = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'passwordRepeat'" :fieldLabel="'Passwort wiederholen'" :fieldType="'password'" :value="formData.passwordRepeat" @input="formData.passwordRepeat = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'adresse'" :fieldLabel="'Adresse'" :fieldType="'text'" :value="formData.adresse" @input="formData.adresse = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'plz'" :fieldLabel="'Postleitzahl'" :fieldType="'text'" :value="formData.plz" @input="formData.plz = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'ort'" :fieldLabel="'Ort'" :fieldType="'text'" :value="formData.ort" @input="formData.ort = $event" :fieldPlaceholder="''" :isRequired="true" />

          <CheckboxField :id="'agree'" :label="'Ich akzeptiere die Nutzungsbedingungen.'" :value="formData.agree" @input="formData.agree = $event" :required="true" />

          <div>
          <ButtonAtom>Registrieren</ButtonAtom>
          </div>
          <div>
          <LinkAtom url="/login">Schon registriert?Hier geht es zur Login!</LinkAtom>
      </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CheckboxField from "@/components/molecules/CheckboxField.vue";
import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
import FormField from "@/components/molecules/FormField.vue";
import LinkAtom from "@/components/atoms/LinkAtom.vue";
import TitleAtom from "@/components/atoms/TitleAtom.vue";

export default {
  components: {
    CheckboxField,
    ButtonAtom,
    FormField,
    LinkAtom,
    TitleAtom,
  },
  data() {
    return {
      formData: {
        vorname: "",
        nachname: "",
        username: "",
        email: "",
        password: "",
        passwordRepeat: "",
        adresse: "",
        plz: "",
        ort: "",
        agree: false,
      },
    };
  },
  methods: {
    async submitForm() {
      try {
        // HTTP-Anfrage an den Spring Boot-Backend-Endpunkt senden
        const response = await axios.post('http://localhost:8081/register', this.formData);

        // Antwort auswerten, hier könntest du weiterleiten oder Erfolgsmeldungen anzeigen
        console.log('Erfolgreich registriert:', response.data);
      } catch (error) {
        // Fehler behandeln, hier könntest du Fehlermeldungen anzeigen
        console.error('Fehler beim Registrieren:', error);
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

.registeration-form {
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