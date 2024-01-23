<template>
    <div class="container">
        <div v-if="errorMessage" class="alert alert-danger alert-dismissible fade show" role="alert">
            {{ errorMessage }}
        </div>
        <div v-if="successMessage" class="alert alert-success alert-dismissible fade show" role="alert">
            {{ successMessage }}
        </div>
        <div class="container">
            <div class="registration-form">
                <TitleAtom text="Update user profile"></TitleAtom>
                <form @submit.prevent="submitForm">
                    <div class="container-fluid">
                        <div>
                            <label class="small mb-1" for="inputSalutation">Salutation</label>
                            <select class="form-control" id="inputSalutation" v-model="formData.salutation">
                                <option value="" selected disabled hidden>Choose Salutation</option>
                                <option value="MR">MR</option>
                                <option value="MRS">MRS</option>
                                <option value="OTHER">OTHER</option>
                            </select>
                            <div v-if="errors.salutation" class="error">{{ errors.salutation }}</div>
                        </div>

                        <div v-if="formData.salutation === 'OTHER'" class="form-field">
                            <label class="small mb-1" for="inputOtherDetails">Enter your personal salutation (max 30
                                characters)</label>
                            <input class="form-control" id="inputOtherDetails" type="text" placeholder="Salutation"
                                v-model="formData.otherSalutation" maxlength="30" />
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputFirstName">Firstname</label>
                            <input class="form-control" id="inputFirstName" type="text"
                                :placeholder="formData.firstname ? formData.firstname : 'Enter your firstname'"
                                v-model="formData.firstname">
                            <div v-if="errors.firstname" class="error">{{ errors.firstname }}</div>

                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputLastName">Lastname</label>
                            <input class="form-control" id="inputLastName" type="text"
                                :placeholder="formData.lastname ? formData.lastname : 'Enter your lastname'"
                                v-model="formData.lastname">
                            <div v-if="errors.lastname" class="error">{{ errors.lastname }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users
                                on the
                                site)</label>
                            <input class="form-control" id="inputUsername" type="text"
                                :placeholder="formData.username ? formData.username : 'Enter your username'"
                                v-model="formData.username">
                            <div v-if="errors.username" class="error">{{ errors.username }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputEmail">E-Mail</label>
                            <input class="form-control" id="inputEmail" type="text"
                                :placeholder="formData.email ? formData.email : 'Enter your email'"
                                v-model="formData.email">
                            <div v-if="errors.email" class="error">{{ errors.email }}</div>
                        </div>



                        <div class="form-field">
                            <label class="small mb-1" for="inputStreet">Street</label>
                            <input class="form-control" id="inputStreet" type="text"
                                :placeholder="formData.street ? formData.street : 'Enter your street'"
                                v-model="formData.street">
                            <div v-if="errors.street" class="error">{{ errors.street }}</div>
                        </div>
                        <div>
                            <label class="small mb-1" for="inputHouseNumber">Housenumber</label>
                            <input class="form-control" id="inputHouseNumber" type="text"
                                :placeholder="formData.houseNumbe ? formData.houseNumbe : 'Enter your housnumber'"
                                v-model="formData.houseNumber">
                            <div v-if="errors.houseNumber" class="error">{{ errors.houseNumber }}</div>
                        </div>


                        <div class="form-field">
                            <label class="small mb-1" for="inputPostalcode">Postalcode</label>
                            <input class="form-control" id="inputPostalcode" type="text"
                                :placeholder="formData.postalCode ? formData.postalCode : 'Enter your postalcode'"
                                v-model="formData.postalCode">
                            <div v-if="errors.postalCode" class="error">{{ errors.postalCode }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputCity">City</label>
                            <input class="form-control" id="inputCity" type="text"
                                :placeholder="formData.city ? formData.city : 'Enter your city'" v-model="formData.city">
                            <div v-if="errors.city" class="error">{{ errors.city }}</div>
                        </div>

                        <div>
                            <label class="small mb-1" for="inputCountry">Country</label>
                            <select class="form-control" id="inputCountry" v-model="formData.countryCode">
                                <option value="" selected disabled hidden>Choose Country</option>
                                <option value="DE">Germany</option>
                                <option value="AT">Austria</option>
                                <option value="CH">Switzerland</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AX">Åland Islands</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia, Plurinational State of</option>
                                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                <option value="BA">Bosnia and Herzegovina</option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">British Indian Ocean Territory</option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">Central African Republic</option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China</option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">Cocos (Keeling) Islands</option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">Congo, the Democratic Republic of the</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Côte d'Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CW">Curaçao</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="FK">Falkland Islands (Malvinas)</option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">French Southern Territories</option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GG">Guernsey</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">Heard Island and McDonald Islands</option>
                                <option value="VA">Holy See (Vatican City State)</option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">Iran, Islamic Republic of</option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IM">Isle of Man</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JE">Jersey</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">Korea, Democratic People's Republic of</option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Lao People's Democratic Republic</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">Libya</option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macao</option>
                                <option value="MK">Macedonia, the former Yugoslav Republic of
                                </option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">Micronesia, Federated States of</option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">Northern Mariana Islands</option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PS">Palestinian Territory, Occupied</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">R�union</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="BL">Saint Barth�lemy</option>
                                <option value="SH">Saint Helena, Ascension and Tristan da Cunha
                                </option>
                                <option value="KN">Saint Kitts and Nevis</option>
                                <option value="LC">Saint Lucia</option>
                                <option value="MF">Saint Martin (French part)</option>
                                <option value="PM">Saint Pierre and Miquelon</option>
                                <option value="VC">Saint Vincent and the Grenadines</option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">Sao Tome and Principe</option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SX">Sint Maarten (Dutch part)</option>
                                <option value="SK">Slovakia</option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">South Georgia and the South Sandwich Islands
                                </option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">Svalbard and Jan Mayen</option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan, Province of China</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">Tanzania, United Republic of</option>
                                <option value="TH">Thailand</option>
                                <option value="TL">Timor-Leste</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TR">Turkey</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">Turks and Caicos Islands</option>
                                <option value="TV">Tuvalu</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="US">United States</option>
                                <option value="UM">United States Minor Outlying Islands</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela, Bolivarian Republic of</option>
                                <option value="VN">Viet Nam</option>
                                <option value="VG">Virgin Islands, British</option>
                                <option value="VI">Virgin Islands, U.S.</option>
                                <option value="WF">Wallis and Futuna</option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                            </select>
                            <div v-if="errors.country" class="error">{{ errors.country }}</div>
                        </div>
                        <ButtonAtom c type="submit" @click="submitForm">Update</ButtonAtom>
                        <ButtonAtom @click="toggleUserStatus">{{ formData.status ? 'Deaktivieren'
                            : 'Aktivieren' }}</ButtonAtom>
                        <ButtonAtom type="submit" @click="deleteUser">Delete</ButtonAtom>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
   
<script>
import axios from 'axios';
import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
import TitleAtom from "@/components/atoms/TitleAtom.vue";
import * as yup from 'yup';

export default {
    components: {
        ButtonAtom,
        TitleAtom,
    },
    data() {
        return {
            formData: {
                salutation: '',
                otherSalutation: '',
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                email: '',
                street: '',
                houseNumber: '',
                postalCode: '',
                city: '',
                countryCode: '',
                status: '',
            },
            errors: {},
            successMessage: '',
            errorMessage: '',

        }
    },
    created() {
        this.loadUserData();
    },
    methods: {
        validationSchema() {
            return yup.object().shape({
                salutation: yup.string().required('Salutation is required'),
                firstname: yup.string().required('Firstname is required'),
                lastname: yup.string().required('Lastname is required'),
                email: yup.string().email('Invalid email format').required('Email is required'),
                username: yup.string()
                    .min(5, 'Username must be at least 5 characters long')
                    .test('has-letter', 'Username must contain at least one letter', function (value) {
                        return /[a-zA-Z]/.test(value);
                    })
                    .required('Username is required'),
                street: yup.string().required('Street is required'),
                houseNumber: yup.string()
          .matches(/^[0-9A-Za-z/]+$/, 'House number must be numbers, letters, or slashes')
          .required('House number is required'),
        postalCode: yup.string()
          .required('Postal code is required')
          .matches(/^\d+$/, 'Postal code must consist of numbers only')
          .min(4, 'Postal code must be at least 4 digits long'),
                city: yup.string().required('City is required'),
                country: yup.string().required('Country is required'),

            });
        },
        async validateFormData() {
            try {
                await this.validationSchema().validate(this.formData, { abortEarly: false });
                this.errors = {};
                return true;
            } catch (err) {
                this.errors = err.inner.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                console.log('Form validation errors:', this.errors); // Protokolliere die Fehlermeldungen in der Konsole
                return false;
            }
        },
        async loadUserData() {

            const userId = this.$route.params.id;
            try {
                const token = localStorage.getItem('access_token'); // Token aus dem lokalen Speicher holen
                const response = await axios.get(`http://localhost:8081/users/userid/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.formData = response.data;
                this.formData.status = response.data.status;
                this.formData.country = response.data.countryCode;
                console.log(this.formData);
            } catch (error) {
                console.error('Fehler beim Laden der Telefondaten:', error);
            }
        }, async submitForm() {
            
            this.formData.country = this.formData.countryCode;
            const isFormDataValid = await this.validateFormData();

            if (isFormDataValid) {

                try {
                    const url = `http://localhost:8081/updateUser/${this.formData.username}?username=${this.formData.username}&password=${this.formData.password}&role=${this.formData.role}&firstname=${this.formData.firstname}&lastname=${this.formData.lastname}&salutation=${this.formData.salutation}&email=${this.formData.email}&countryCode=${this.formData.country}&status=${this.formData.status}&profilePicture=${this.formData.profilePicture || 'null'}&street=${this.formData.street}&houseNumber=${this.formData.houseNumber}&city=${this.formData.city}&postalCode=${this.formData.postalCode}`;

                    await axios.put(url, null, {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        }
                    });

                    this.successMessage = 'User data updated successfully';
                    setTimeout(() => {
                        this.successMessage = '';
                    }, 3000);
                    this.errorMessage = '';
                } catch (error) {
                    this.errorMessage = 'Error updating user data';
                    console.error('Error updating user data:', error);
                    setTimeout(() => {
                        this.errorMessage = '';
                    }, 3000);
                }
            } else {
                // Die Validierung ist fehlgeschlagen, handle das entsprechend
                console.error('Form data validation failed');
            }
        },
        async toggleUserStatus() {
            try {
                const newStatus = this.formData.status === 1 ? 0 : 1;
                await axios.put(`http://localhost:8081/${this.formData.id}/status`, null, {
                    params: {
                        newStatus: newStatus
                    },
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    },
                });
                this.formData.status = newStatus; // Aktualisieren Sie den Status im Frontend
                this.successMessage = 'Status wurde erfolgreich geändert.';
                console.log(newStatus);
            } catch (error) {
                this.errorMessage = 'Fehler beim Ändern des Status.';
                console.error('Fehler beim Ändern des Status:', error);
            }
        }, async deleteUser() {
            const userId = this.$route.params.id;
            try {
                const token = localStorage.getItem('access_token');
                await axios.delete(`http://localhost:8081/deleteUser/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                console.log('User wurde gelöscht');
                this.$router.push('/userMang'); // Weiterleitung nach dem Löschen
            } catch (error) {
                console.error('Fehler beim Löschen des Benutzers:', error);
            }
        }

    },
}

</script>
<style scoped>
.container {
    width: 500px;
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
}

.error {
    color: red;
}

.checkbox {
    margin-top: 10px;
}
</style>