<template>
  <div class="container-xl px-4 mt-4">
    <div>
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
    </div>
    

    <!-- Account page navigation -->
    <h1>Edit your User Information</h1>
    <hr class="mt-0 mb-4">
        <!-- Account details card -->
        <div class="card mb-4">
          <div class="card-header">Account Details</div>
          <div class="card-body">
            <form>
              <!-- Form Group (username) -->
              <div class="mb-3">
                <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                <input class="form-control" id="inputUsername" type="text" placeholder="Enter your username" v-model="store.username">
              </div>
              <!-- Form Row -->
              <div class="row gx-3 mb-3">
                <!-- Form Group (salutation) -->
                <div class="col-md-4">
                  <label class="small mb-1" for="inputSalutation">Salutation</label>
                  <select class="form-control" id="inputSalutation" v-model="store.salutation">
                    <option value="MR" :selected="store.salutation === 'MR'">MR</option>
                    <option value="MRS" :selected="store.salutation === 'MRS'">MRS</option>
                    <option value="OTHER" :selected="store.salutation === 'OTHER'">OTHER</option>
                  </select>
                </div>
                <!-- Form Group (first name) -->
                <div class="col-md-4">
                  <label class="small mb-1" for="inputFirstName">First name</label>
                  <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" v-model="store.firstname">
                </div>
                <!-- Form Group (last name) -->
                <div class="col-md-4">
                  <label class="small mb-1" for="inputLastName">Last name</label>
                  <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" v-model="store.lastname">
                </div>
              </div>
              <!-- Form Group (E-Mail) -->
              <div class="mb-3">
                <label class="small mb-1" for="inputEmail">E-Mail</label>
                <input class="form-control" id="inputEmail" type="text" placeholder="Enter your E-Mail" v-model="store.email">
              </div>
              <!-- Password-->
              <div class="row gx-3 mb-3">
                <!-- Form Group (Password) -->
                <div class="col-md-6">
                  <label class="small mb-1" for="inputPassword">Password</label>
                  <input class="form-control" id="inputPassword" type="password" placeholder="Enter your new Password">
                </div>
                <!-- Form Group (Password Again) -->
                <div class="col-md-6">
                  <label class="small mb-1" for="inputPasswordAgain">Password again</label>
                  <input class="form-control" id="inputPasswordAgain" type="password" placeholder="Enter your new Password again">
                </div>
              </div>
              

              <!-- ADRESS BLOCK-->
              <div class="row gx-3 mb-3">
                <!-- Form Group (Country) -->
              <div class="col-md-2">
                <label class="small mb-1" for="inputCountry">Country</label>
                <input class="form-control" id="inputCountry" type="text" placeholder="Enter your Country" v-model="store.country">
              </div>
                <!-- Form Group (Streetname) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputStreet">Streetname</label>
                  <input class="form-control" id="inputStreet" type="text" placeholder="Enter your Streetname" v-model="store.street">
                </div>
                <!-- Form Group (House Number) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputHouseNumber">House Number</label>
                  <input class="form-control" id="inputHouseNumber" type="text" placeholder="Enter your House Number" v-model="store.hauseNumber">
                </div>
                <!-- Form Group (Flat Number) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputFlatNumber">Flat Number</label>
                  <input class="form-control" id="inputFlatNumber" type="text" placeholder="Enter your Flat Number" v-model="store.flatNumber">
                </div>
                <!-- Form Group (City) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputCity">City</label>
                  <input class="form-control" id="inputCity" type="text" placeholder="Enter your City" v-model="store.city">
                </div>
                <!-- Form Group (Postalcode) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputPostalcode">Postalcode</label>
                  <input class="form-control" id="inputPostalcode" type="text" placeholder="Enter your Postalcode" v-model="store.postalcode">
                </div>             
              </div>
              <!-- Save changes button -->
              <button class="btn btn-primary" type="button" @click="saveChanges">Save changes</button>
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
    const initialUsername = ref(store.username);
    const showDismissibleAlert = ref(false);
    const alertMessage = ref('');
    const showSuccessAlert = ref(false);
    const successAlertMessage = ref('');
    const items = [
      {
        username: store.username,
        first_name: store.firstname,
        last_name: store.lastname,
        salutation: store.salutation,
        email: store.email,
        country: store.country,
        street: store.street,
        hausNumber: store.hauseNumber,
        flatNumber: store.flatNumber,
        postalcode: store.postalcode,
        city: store.city,
        password: store.password,
      },
    ];

    const saveChanges = () => {
      const inputPassword = document.getElementById('inputPassword').value;
      const inputPasswordAgain = document.getElementById('inputPasswordAgain').value;
      let newPassword = '';

      if (inputPassword === inputPasswordAgain && inputPassword !== '' && inputPasswordAgain !== '') {
        newPassword = inputPassword;
      } else {
        alertMessage.value = 'Passwords don\'t match';
        showDismissibleAlert.value = true;
        return;
      }

      const userInput = {
        username: store.username,
        salutation: store.salutation,
        firstname: store.firstname,
        lastname: store.lastname,
        email: store.email,
        password: newPassword,
        country: store.country,
        street: store.street,
        houseNumber: store.hauseNumber,
        flatNumber: store.flatNumber,
        city: store.city,
        postalcode: store.postalcode,
      };

      if (newPassword !== '') {
        submit(userInput, initialUsername.value);
      }
    };

    const submit = async (userData, oldUsername) => {
      try {
        const backendUrl = `http://localhost:8081/updateUser/${oldUsername}?password=${userData.password}&role=${store.userRole}&firstname=${userData.firstname}&lastname=${userData.lastname}&salutation=${userData.salutation}&email=${userData.email}&country=${userData.country}&status=${true}&profilePicture=${null}&street=${userData.street}&hauseNumber=${userData.houseNumber}&flatNumber=${userData.flatNumber}&city=${userData.city}&postalcode=${userData.postalcode}&username=${userData.username}`;
        const accessToken = localStorage.getItem('access_token');

        console.log(accessToken);
        console.log(oldUsername);
        console.log('Backend URL:', backendUrl);

        const response = await axios.put(backendUrl, null, {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        });
        console.log('Update Message:', response.data);

        //Token Update
        try {
          const backendUrlToken = 'http://localhost:8081/auth/token';

          const responseToken = await axios.post(backendUrlToken, {
            username: userData.username,
            password: userData.password,
          });

          const token = responseToken.data.token;

          localStorage.setItem('access_token', token);
          const accessTokenNew = localStorage.getItem('access_token');
          console.log('Token successful: ', accessTokenNew)
        } catch (err) {
        console.error('Token not successful:', err);
      }
        

        successAlertMessage.value = response.data;
        showSuccessAlert.value = true;
      } catch (err) {
        console.error('Update not successful:', err);
        alertMessage.value = 'Update not successful';
        showDismissibleAlert.value = true;
      }
    };



    return {
      store,
      items,
      saveChanges,
      showDismissibleAlert,
      alertMessage,
      submit,
      showSuccessAlert,
      successAlertMessage,
    };
  },
  methods: {
    dismissAlert() {
      this.showDismissibleAlert = false;
    },
    dismissSuccessAlert() {
      this.showSuccessAlert = false;
    },
  }
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