<template>
  
  <div class="container-xl px-4 mt-4">
      <div v-if="showDismissibleAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ alertMessage }}
        <b-button variant="danger" type="button" class="close" @click="dismissAlert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </b-button>
      </div>
      <div v-if="showSuccessAlert" class="alert alert-success alert-dismissible fade show" role="alert">
        {{ successAlertMessage }}
        <b-button variant="success" type="button" class="close" @click="dismissSuccessAlert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </b-button>
      </div>
  
    <div class="container">
      <div class="registration-form">
        <h2>Registrieren</h2>
        <form @submit.prevent="saveChanges">
          <div class="container-fluid">
            <div>
                <select class="form-control" id="inputSalutation" v-model="store.salutation">
                    <option value="MR" :selected="store.salutation === 'MR'">MR</option>
                    <option value="MRS" :selected="store.salutation === 'MRS'">MRS</option>
                    <option value="OTHER" :selected="store.salutation === 'OTHER'">OTHER</option>
                  </select>
            </div>
            
            <div class="form-field">
                <label class="small mb-1" for="inputFirstName">Firstname</label>
                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your firstname" v-model="store.firstname">
            </div>
            
            <div class="form-field">
                <label class="small mb-1" for="inputLastName">Lastname</label>
                  <input class="form-control" id="inputLastName" type="text" placeholder="Enter your lastname" v-model="store.lastname">
            </div>
            
            <div class="form-field">
                <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" v-model="store.username">
            </div>
            
            <!-- Other form fields -->
  
            <div class="form-field">
                <label class="small mb-1" for="inputEmail">E-Mail</label>
                <input class="form-control" id="inputEmail" type="text" placeholder="Enter your E-Mail" v-model="store.email">
            </div>
  
            <div class="form-field">
                <label class="small mb-1" for="inputPassword">Password</label>
                  <input class="form-control" id="inputPassword" type="password" placeholder="Enter your new Password">
            </div>
  
            <div class="form-field">
                <label class="small mb-1" for="inputPasswordAgain">Password again</label>
                  <input class="form-control" id="inputPasswordAgain" type="password" placeholder="Enter your new Password again">
            </div>
  
            <div class="form-field">
              
              <label class="small mb-1" for="inputStreet">Street</label>
                  <input class="form-control" id="inputStreet" type="text" placeholder="Enter your Street name" v-model="store.street">
            </div>
            <div>
                <label class="small mb-1" for="inputHauseNumber">Hause Number</label>
                  <input class="form-control" id="inputHauseNumber" type="text" placeholder="Enter your Hause Number" v-model="store.hauseNumber">
            </div>
            <div>
                <label class="small mb-1" for="inputFlatNumber">Flat Number</label>
                  <input class="form-control" id="inputFlatNumber" type="text" placeholder="Enter your Flat Number" v-model="store.flatNumber">
            </div>
  
            <div class="form-field">
                <label class="small mb-1" for="inputPostalcode">Postalcode</label>
                  <input class="form-control" id="inputPostalcode" type="text" placeholder="Enter your Postalcode" v-model="store.postalcode">
            </div>
  
            <div class="form-field">
                <label class="small mb-1" for="inputCity">City</label>
                  <input class="form-control" id="inputCity" type="text" placeholder="Enter your City" v-model="store.city">
            </div>
            <div>
                <label class="small mb-1" for="inputCountry">Country</label>
                <input class="form-control" id="inputCountry" type="text" placeholder="Enter your Country" v-model="store.country">
            </div>
            <div>
                <button class="btn btn-primary" type="button" @click="saveChanges">Register</button>
            </div>
            <div>
              <router-link to="/login">Schon registriert? Hier geht es zur Anmeldung!</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
  </template>
 <script>
 import { useUserStore } from '@/store/user.js';
 import { ref } from 'vue';
 import axios from 'axios';
 
 export default {
  setup() {
    const store = useUserStore();
    const showDismissibleAlert = ref(false);
    const alertMessage = ref('');
    const showSuccessAlert = ref('');
    const successAlertMessage = ref('');

    const saveChanges = async () => {
      const inputPassword = document.getElementById('inputPassword').value;
      const inputPasswordAgain = document.getElementById('inputPasswordAgain').value;

      if (inputPassword === inputPasswordAgain && inputPassword !== '' && inputPasswordAgain !== '') {
        const userInput = {
          username: store.username,
          salutation: store.salutation,
          firstname: store.firstname,
          lastname: store.lastname,
          email: store.email,
          password: inputPassword,
          country: store.country,
          street: store.street,
          houseNumber: store.hauseNumber,
          flatNumber: store.flatNumber,
          city: store.city,
          postalcode: store.postalcode,
        };

        try {
  const registrationUrl = `http://localhost:8081/register?username=${userInput.username}&password=${userInput.password}&role=ROLE_user&firstname=${userInput.firstname}&lastname=${userInput.lastname}&salutation=${userInput.salutation}&email=${userInput.email}&country=${userInput.country}&status=true&profilePicture=null&street=${userInput.street}&hauseNumber=${userInput.houseNumber}&flatNumber=${userInput.flatNumber}&postalcode=${userInput.postalcode}&city=${userInput.city}`;

  const response = await axios.post(registrationUrl, userInput);

  
  if (response.status === 200) {
    console.log(response.status);
    console.log('Registration successful. Data saved in the database:', response.data);
    successAlertMessage.value = 'Registration successful';
    showSuccessAlert.value = true;
    //window.location.reload();
  } else {
    console.error('Registration not successful:', response.data);
    alertMessage.value = 'Registration not successful';
    showDismissibleAlert.value = true;
  }
} catch (err) {
  console.error('Registration not successful:', err);
  console.log('Full response:', err.response); 

  alertMessage.value = 'Registration not successful';
  showDismissibleAlert.value = true;
}


      } else {
        alertMessage.value = 'Passwords don\'t match';
        showDismissibleAlert.value = true;
      }
    };

    const dismissAlert = () => {
      showDismissibleAlert.value = false;
    };

    const dismissSuccessAlert = () => {
      showSuccessAlert.value = false;
    };

    return {
      store,
      saveChanges,
      showDismissibleAlert,
      alertMessage,
      dismissAlert,
      showSuccessAlert,
      successAlertMessage,
      dismissSuccessAlert,
    };
  },
};
</script>
  
  
  <style scoped>
  .product-view {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 50px;
  }
  

  .header {
    text-align: center;
  }
  </style>