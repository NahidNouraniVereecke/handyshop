<template>
    <div class="container">
      <div class="registeration-form">
        <h1>Registrieren</h1>
        <form @submit.prevent="submitForm">
          <div class="container-fluid">
        
            
            <SelectField :id="'anrede'" :label="'Anrede'" :options="anredeOptions" v-model="formData.anrede" :required="true" />
  
            
            <FormField :fieldId="'vorname'" :fieldLabel="'Vorname'" :fieldType="'text'" v-model="formData.vorname" :fieldPlaceholder="'Jane'" :isRequired="true" />
  
            
            <FormField :fieldId="'nachname'" :fieldLabel="'Nachname'" :fieldType="'text'" v-model="formData.nachname" :fieldPlaceholder="'Smith'" :isRequired="true" />
  
            
            <FormField :fieldId="'username'" :fieldLabel="'Username'" :fieldType="'text'" v-model="formData.username" :fieldPlaceholder="'exampleUser123'" :isRequired="true" />
  
            
            <FormField :fieldId="'email'" :fieldLabel="'E-Mail'" :fieldType="'email'" v-model="formData.email" :fieldPlaceholder="'example@mail.com'" :isRequired="true" />
  
            
            <FormField :fieldId="'password'" :fieldLabel="'Passwort'" :fieldType="'password'" v-model="formData.password" :fieldPlaceholder="''" :isRequired="true" />
  
            
            <FormField :fieldId="'passwordRepeat'" :fieldLabel="'Passwort wiederholen'" :fieldType="'password'" v-model="formData.passwordRepeat" :fieldPlaceholder="''" :isRequired="true" />
  
            
            <FormField :fieldId="'adresse'" :fieldLabel="'Adresse'" :fieldType="'text'" v-model="formData.adresse" :fieldPlaceholder="''" :isRequired="true" />
  
            
            <FormField :fieldId="'plz'" :fieldLabel="'Postleitzahl'" :fieldType="'text'" v-model="formData.plz" :fieldPlaceholder="''" :isRequired="true" />
  
            
            <FormField :fieldId="'ort'" :fieldLabel="'Ort'" :fieldType="'text'" v-model="formData.ort" :fieldPlaceholder="''" :isRequired="true" />
  
            
            <CheckboxAtom :id="'agree'" :label="'Ich akzeptiere die Nutzungsbedingungen.'" v-model="formData.agree" :required="true" />
  
            
            <div  id="button-field">
            <ButtonAtom @click="handleLogin">Registrieren</ButtonAtom>
            </div>
            <div>
            <LinkAtom url="/login">Noch nicht registriert? Hier geht es zur Registrierung!</LinkAtom>
        </div>
            
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import SelectField from "@/components/molecules/SelectField.vue";
  import CheckboxAtom from "@/components/atoms/CheckboxAtom.vue";
  import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
  import FormField from "@/components/molecules/FormField.vue";
  import LinkAtom from "@/components/atoms/LinkAtom.vue";

  
  export default {
    components: {
      SelectField,
      CheckboxAtom,
      ButtonAtom,
      FormField,
      LinkAtom

    },
    data() {
      return {
        formData: {
          anrede: "keine Angabe",
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
        anredeOptions: ["Herr", "Frau", "keine Angabe"],
      };
    },
    methods: {
      submitForm() {
        
        console.log("Form data submitted:", this.formData);
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
#button-field{
  align-items: center;
}
  </style>
  