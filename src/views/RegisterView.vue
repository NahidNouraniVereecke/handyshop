<template>
  <div class="container">
    <div class="registration-form">
      <TitleAtom :text="'Registrieren'" />
      <form @submit.prevent="submitForm">
        <div class="container-fluid">
          
          <FormField :fieldId="'vorname'" :fieldLabel="'Vorname'" :fieldType="'text'" :value="formData.vorname" @input="updateFormData('vorname', $event)" :fieldPlaceholder="'Jane'" :isRequired="true" />
          <FehlerMeldungAtom :error="vornameErrorMessage" />
          
          <FormField :fieldId="'nachname'" :fieldLabel="'Nachname'" :fieldType="'text'" :value="formData.nachname" @input="updateFormData('nachname', $event)" :fieldPlaceholder="'Smith'" :isRequired="true" />
          <FehlerMeldungAtom :error="nachnameErrorMessage" />
          
          <FormField :fieldId="'username'" :fieldLabel="'Username'" :fieldType="'text'" :value="formData.username" @input="updateFormData('username', $event)" :fieldPlaceholder="'exampleUser123'" :isRequired="true" />
          <FehlerMeldungAtom :errorMessage="usernameErrorMessage" />
          
          <FormField :fieldId="'email'" :fieldLabel="'E-Mail'" :fieldType="'email'" :value="formData.email" @input="formData.email = $event" :fieldPlaceholder="'example@mail.com'" :isRequired="true" />

          <FormField :fieldId="'password'" :fieldLabel="'Passwort'" :fieldType="'password'" :value="formData.password" @input="formData.password = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'passwordRepeat'" :fieldLabel="'Passwort wiederholen'" :fieldType="'password'" :value="formData.passwordRepeat" @input="formData.passwordRepeat = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'adresse'" :fieldLabel="'Adresse'" :fieldType="'text'" :value="formData.adresse" @input="formData.adresse = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'plz'" :fieldLabel="'Postleitzahl'" :fieldType="'text'" :value="formData.plz" @input="formData.plz = $event" :fieldPlaceholder="''" :isRequired="true" />

          <FormField :fieldId="'ort'" :fieldLabel="'Ort'" :fieldType="'text'" :value="formData.ort" @input="formData.ort = $event" :fieldPlaceholder="''" :isRequired="true" />

          <CheckboxField :id="'agree'" :label="'Ich akzeptiere die Nutzungsbedingungen.'" :value="formData.agree" @input="formData.agree = $event" :required="true" />

          <div>
            <ButtonAtom @click="submitForm">Registrieren</ButtonAtom>
          </div>
          <div>
            <LinkAtom url="/login">Schon registriert? Hier geht es zur Login!</LinkAtom>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import CheckboxField from "@/components/molecules/CheckboxField.vue";
import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
import FormField from "@/components/molecules/FormField.vue";
import LinkAtom from "@/components/atoms/LinkAtom.vue";
import TitleAtom from "@/components/atoms/TitleAtom.vue";
import FehlerMeldungAtom from "@/components/atoms/FehlerMeldungAtom.vue";

export default {
  components: {
    CheckboxField,
    ButtonAtom,
    FormField,
    LinkAtom,
    TitleAtom,
    FehlerMeldungAtom
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
      vornameErrorMessage: null,
      nachnameErrorMessage: null,
      usernameErrorMessage: null,
    };
  },
  methods: {
    validateField(fieldName, errorMessageProp) {
  const value = this.formData[fieldName];
  if (!value) {
    this[errorMessageProp] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} darf nicht leer sein.`;
    console.log(`Error message for ${fieldName}:`, this[errorMessageProp]); // Add this line
    return false;
  } else {
    this[errorMessageProp] = null;
    return true;
  }
},


    validateVorname() {
      return this.validateField('vorname', 'vornameErrorMessage');
    },

    validateNachname() {
      return this.validateField('nachname', 'nachnameErrorMessage');
    },

    validateUsername() {
      return this.validateField('username', 'usernameErrorMessage');
    },

    // ... (other validation methods)

    submitForm() {
      if (
        this.validateVorname() &&
        this.validateNachname() &&
        this.validateUsername() &&
        // ... (call other field validations)
        true
      ) {
        console.log("Form data submitted:", this.formData);
        // Now you can proceed with your form submission logic
      } else {
        // Validation failed, handle accordingly
      }
    },
    // ... (other methods)
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