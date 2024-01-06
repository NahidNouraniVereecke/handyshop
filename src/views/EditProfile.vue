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
                    <option value="OTHER">OTHER</option>
                    <!-- Dynamic option for OTHER based on user's selection -->
                    <option v-if="store.salutation === 'OTHER'" :value="store.otherinfo" :selected="store.salutation === 'OTHER'">{{ store.otherinfo }}</option>
                    <!-- Dynamic option for custom salutation based on user's selection -->
                    <option v-if="store.salutation !== 'OTHER' && store.salutation !== 'MR' && store.salutation !== 'MRS'" :value="store.salutation" :selected="store.salutation !== 'OTHER'">{{ store.salutation }}</option>
                  </select>
                </div>

                <div v-if="store.salutation === 'OTHER'" class="form-field">
              <label class="small mb-1" for="inputOtherDetails">Enter your personal salutation (max 30 characters)</label>
              <input
                class="form-control"
                id="inputOtherDetails"
                type="text"
                placeholder="Salutation"
                v-model="store.otherinfo"
                maxlength="30"
                />
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
                <div>
              <label class="small mb-1" for="inpputCountry">Country</label>
              <select class="form-control" id="inputCountry" v-model="store.countryCode">
                <option value="" selected disabled hidden>Choose Country</option>
                <option value="DE" :selected="store.countryCode === 'DE'">Germany</option>
                <option value="AT" :selected="store.countryCode === 'AT'">Austria</option>
                <option value="CH" :selected="store.countryCode === 'CH'">Switzerland</option>
                <option value="AF" :selected="store.countryCode === 'AF'">Afghanistan</option>
                <option value="AX" :selected="store.countryCode === 'AX'">Åland Islands</option>
                <option value="AL" :selected="store.countryCode === 'AL'">Albania</option>
                <option value="DZ" :selected="store.countryCode === 'DZ'">Algeria</option>
                <option value="AS" :selected="store.countryCode === 'AS'">American Samoa</option>
                <option value="AD" :selected="store.countryCode === 'AD'">Andorra</option>
                <option value="AO" :selected="store.countryCode === 'AO'">Angola</option>
                <option value="AI" :selected="store.countryCode === 'AI'">Anguilla</option>
                <option value="AQ" :selected="store.countryCode === 'AQ'">Antarctica</option>
                <option value="AG" :selected="store.countryCode === 'AG'">Antigua and Barbuda</option>
                <option value="AR" :selected="store.countryCode === 'AR'">Argentina</option>
                <option value="AM" :selected="store.countryCode === 'AM'">Armenia</option>
                <option value="AW" :selected="store.countryCode === 'AW'">Aruba</option>
                <option value="AU" :selected="store.countryCode === 'AU'">Australia</option>
                <option value="AZ" :selected="store.countryCode === 'AZ'">Azerbaijan</option>
                <option value="BS" :selected="store.countryCode === 'BS'">Bahamas</option>
                <option value="BH" :selected="store.countryCode === 'BH'">Bahrain</option>
                <option value="BD" :selected="store.countryCode === 'BD'">Bangladesh</option>
                <option value="BB" :selected="store.countryCode === 'BB'">Barbados</option>
                <option value="BY" :selected="store.countryCode === 'BY'">Belarus</option>
                <option value="BE" :selected="store.countryCode === 'BE'">Belgium</option>
                <option value="BZ" :selected="store.countryCode === 'BZ'">Belize</option>
                <option value="BJ" :selected="store.countryCode === 'BJ'">Benin</option>
                <option value="BM" :selected="store.countryCode === 'BM'">Bermuda</option>
                <option value="BT" :selected="store.countryCode === 'BT'">Bhutan</option>
                <option value="BO" :selected="store.countryCode === 'BO'">Bolivia, Plurinational State of</option>
                <option value="BQ" :selected="store.countryCode === 'BQ'">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA" :selected="store.countryCode === 'BA'">Bosnia and Herzegovina</option>
                <option value="BW" :selected="store.countryCode === 'BW'">Botswana</option>
                <option value="BV" :selected="store.countryCode === 'BV'">Bouvet Island</option>
                <option value="BR" :selected="store.countryCode === 'BR'">Brazil</option>
                <option value="IO" :selected="store.countryCode === 'IO'">British Indian Ocean Territory</option>
                <option value="BN" :selected="store.countryCode === 'BN'">Brunei Darussalam</option>
                <option value="BG" :selected="store.countryCode === 'BG'">Bulgaria</option>
                <option value="BF" :selected="store.countryCode === 'BF'">Burkina Faso</option>
                <option value="BI" :selected="store.countryCode === 'BI'">Burundi</option>
                <option value="KH" :selected="store.countryCode === 'KH'">Cambodia</option>
                <option value="CM" :selected="store.countryCode === 'CM'">Cameroon</option>
                <option value="CA" :selected="store.countryCode === 'CA'">Canada</option>
                <option value="CV" :selected="store.countryCode === 'CV'">Cape Verde</option>
                <option value="KY" :selected="store.countryCode === 'KY'">Cayman Islands</option>
                <option value="CF" :selected="store.countryCode === 'CF'">Central African Republic</option>
                <option value="TD" :selected="store.countryCode === 'TD'">Chad</option>
                <option value="CL" :selected="store.countryCode === 'CL'">Chile</option>
                <option value="CN" :selected="store.countryCode === 'CN'">China</option>
                <option value="CX" :selected="store.countryCode === 'CX'">Christmas Island</option>
                <option value="CC" :selected="store.countryCode === 'CC'">Cocos (Keeling) Islands</option>
                <option value="CO" :selected="store.countryCode === 'CO'">Colombia</option>
                <option value="KM" :selected="store.countryCode === 'KM'">Comoros</option>
                <option value="CG" :selected="store.countryCode === 'CG'">Congo</option>
                <option value="CD" :selected="store.countryCode === 'CD'">Congo, the Democratic Republic of the</option>
                <option value="CK" :selected="store.countryCode === 'CK'">Cook Islands</option>
                <option value="CR" :selected="store.countryCode === 'CR'">Costa Rica</option>
                <option value="CI" :selected="store.countryCode === 'CI'">Côte d'Ivoire</option>
                <option value="HR" :selected="store.countryCode === 'HR'">Croatia</option>
                <option value="CU" :selected="store.countryCode === 'CU'">Cuba</option>
                <option value="CW" :selected="store.countryCode === 'CW'">Curaçao</option>
                <option value="CY" :selected="store.countryCode === 'CY'">Cyprus</option>
                <option value="CZ" :selected="store.countryCode === 'CZ'">Czech Republic</option>
                <option value="DK" :selected="store.countryCode === 'DK'">Denmark</option>
                <option value="DJ" :selected="store.countryCode === 'DJ'">Djibouti</option>
                <option value="DM" :selected="store.countryCode === 'DM'">Dominica</option>
                <option value="DO" :selected="store.countryCode === 'DO'">Dominican Republic</option>
                <option value="EC" :selected="store.countryCode === 'EC'">Ecuador</option>
                <option value="EG" :selected="store.countryCode === 'EG'">Egypt</option>
                <option value="SV" :selected="store.countryCode === 'SV'">El Salvador</option>
                <option value="GQ" :selected="store.countryCode === 'GQ'">Equatorial Guinea</option>
                <option value="ER" :selected="store.countryCode === 'ER'">Eritrea</option>
                <option value="EE" :selected="store.countryCode === 'EE'">Estonia</option>
                <option value="ET" :selected="store.countryCode === 'ET'">Ethiopia</option>
                <option value="FK" :selected="store.countryCode === 'FK'">Falkland Islands (Malvinas)</option>
                <option value="FO" :selected="store.countryCode === 'FO'">Faroe Islands</option>
                <option value="FJ" :selected="store.countryCode === 'FJ'">Fiji</option>
                <option value="FI" :selected="store.countryCode === 'FI'">Finland</option>
                <option value="FR" :selected="store.countryCode === 'FR'">France</option>
                <option value="GF" :selected="store.countryCode === 'GF'">French Guiana</option>
                <option value="PF" :selected="store.countryCode === 'PF'">French Polynesia</option>
                <option value="TF" :selected="store.countryCode === 'TF'">French Southern Territories</option>
                <option value="GA" :selected="store.countryCode === 'GA'">Gabon</option>
                <option value="GM" :selected="store.countryCode === 'GM'">Gambia</option>
                <option value="GE" :selected="store.countryCode === 'GE'">Georgia</option>
                <option value="GH" :selected="store.countryCode === 'GH'">Ghana</option>
                <option value="GI" :selected="store.countryCode === 'GI'">Gibraltar</option>
                <option value="GR" :selected="store.countryCode === 'GR'">Greece</option>
                <option value="GL" :selected="store.countryCode === 'GL'">Greenland</option>
                <option value="GD" :selected="store.countryCode === 'GD'">Grenada</option>
                <option value="GP" :selected="store.countryCode === 'GP'">Guadeloupe</option>
                <option value="GU" :selected="store.countryCode === 'GU'">Guam</option>
                <option value="GT" :selected="store.countryCode === 'GT'">Guatemala</option>
                <option value="GG" :selected="store.countryCode === 'GG'">Guernsey</option>
                <option value="GN" :selected="store.countryCode === 'GN'">Guinea</option>
                <option value="GW" :selected="store.countryCode === 'GW'">Guinea-Bissau</option>
                <option value="GY" :selected="store.countryCode === 'GY'">Guyana</option>
                <option value="HT" :selected="store.countryCode === 'HT'">Haiti</option>
                <option value="HM" :selected="store.countryCode === 'HM'">Heard Island and McDonald Islands</option>
                <option value="VA" :selected="store.countryCode === 'VA'">Holy See (Vatican City State)</option>
                <option value="HN" :selected="store.countryCode === 'HN'">Honduras</option>
                <option value="HK" :selected="store.countryCode === 'HK'">Hong Kong</option>
                <option value="HU" :selected="store.countryCode === 'HU'">Hungary</option>
                <option value="IS" :selected="store.countryCode === 'IS'">Iceland</option>
                <option value="IN" :selected="store.countryCode === 'IN'">India</option>
                <option value="ID" :selected="store.countryCode === 'ID'">Indonesia</option>
                <option value="IR" :selected="store.countryCode === 'IR'">Iran, Islamic Republic of</option>
                <option value="IQ" :selected="store.countryCode === 'IQ'">Iraq</option>
                <option value="IE" :selected="store.countryCode === 'IE'">Ireland</option>
                <option value="IM" :selected="store.countryCode === 'IM'">Isle of Man</option>
                <option value="IL" :selected="store.countryCode === 'IL'">Israel</option>
                <option value="IT" :selected="store.countryCode === 'IT'">Italy</option>
                <option value="JM" :selected="store.countryCode === 'JM'">Jamaica</option>
                <option value="JP" :selected="store.countryCode === 'JP'">Japan</option>
                <option value="JE" :selected="store.countryCode === 'JE'">Jersey</option>
                <option value="JO" :selected="store.countryCode === 'JO'">Jordan</option>
                <option value="KZ" :selected="store.countryCode === 'KZ'">Kazakhstan</option>
                <option value="KE" :selected="store.countryCode === 'KE'">Kenya</option>
                <option value="KI" :selected="store.countryCode === 'KI'">Kiribati</option>
                <option value="KP" :selected="store.countryCode === 'KP'">Korea, Democratic People's Republic of</option>
                <option value="KR" :selected="store.countryCode === 'KR'">Korea, Republic of</option>
                <option value="KW" :selected="store.countryCode === 'KW'">Kuwait</option>
                <option value="KG" :selected="store.countryCode === 'KG'">Kyrgyzstan</option>
                <option value="LA" :selected="store.countryCode === 'LA'">Lao People's Democratic Republic</option>
                <option value="LV" :selected="store.countryCode === 'LV'">Latvia</option>
                <option value="LB" :selected="store.countryCode === 'LB'">Lebanon</option>
                <option value="LS" :selected="store.countryCode === 'LS'">Lesotho</option>
                <option value="LR" :selected="store.countryCode === 'LR'">Liberia</option>
                <option value="LY" :selected="store.countryCode === 'LY'">Libya</option>
                <option value="LI" :selected="store.countryCode === 'LI'">Liechtenstein</option>
                <option value="LT" :selected="store.countryCode === 'LT'">Lithuania</option>
                <option value="LU" :selected="store.countryCode === 'LU'">Luxembourg</option>
                <option value="MO" :selected="store.countryCode === 'MO'">Macao</option>
                <option value="MK" :selected="store.countryCode === 'MK'">Macedonia, the former Yugoslav Republic of</option>
                <option value="MG" :selected="store.countryCode === 'MG'">Madagascar</option>
                <option value="MW" :selected="store.countryCode === 'MW'">Malawi</option>
                <option value="MY" :selected="store.countryCode === 'MY'">Malaysia</option>
                <option value="MV" :selected="store.countryCode === 'MV'">Maldives</option>
                <option value="ML" :selected="store.countryCode === 'ML'">Mali</option>
                <option value="MT" :selected="store.countryCode === 'MT'">Malta</option>
                <option value="MH" :selected="store.countryCode === 'MH'">Marshall Islands</option>
                <option value="MQ" :selected="store.countryCode === 'MQ'">Martinique</option>
                <option value="MR" :selected="store.countryCode === 'MR'">Mauritania</option>
                <option value="MU" :selected="store.countryCode === 'MU'">Mauritius</option>
                <option value="YT" :selected="store.countryCode === 'YT'">Mayotte</option>
                <option value="MX" :selected="store.countryCode === 'MX'">Mexico</option>
                <option value="FM" :selected="store.countryCode === 'FM'">Micronesia, Federated States of</option>
                <option value="MD" :selected="store.countryCode === 'MD'">Moldova, Republic of</option>
                <option value="MC" :selected="store.countryCode === 'MC'">Monaco</option>
                <option value="MN" :selected="store.countryCode === 'MN'">Mongolia</option>
                <option value="ME" :selected="store.countryCode === 'ME'">Montenegro</option>
                <option value="MS" :selected="store.countryCode === 'MS'">Montserrat</option>
                <option value="MA" :selected="store.countryCode === 'MA'">Morocco</option>
                <option value="MZ" :selected="store.countryCode === 'MZ'">Mozambique</option>
                <option value="MM" :selected="store.countryCode === 'MM'">Myanmar</option>
                <option value="NA" :selected="store.countryCode === 'NA'">Namibia</option>
                <option value="NR" :selected="store.countryCode === 'NR'">Nauru</option>
                <option value="NP" :selected="store.countryCode === 'NP'">Nepal</option>
                <option value="NL" :selected="store.countryCode === 'NL'">Netherlands</option>
                <option value="NC" :selected="store.countryCode === 'NC'">New Caledonia</option>
                <option value="NZ" :selected="store.countryCode === 'NZ'">New Zealand</option>
                <option value="NI" :selected="store.countryCode === 'NI'">Nicaragua</option>
                <option value="NE" :selected="store.countryCode === 'NE'">Niger</option>
                <option value="NG" :selected="store.countryCode === 'NG'">Nigeria</option>
                <option value="NU" :selected="store.countryCode === 'NU'">Niue</option>
                <option value="NF" :selected="store.countryCode === 'NF'">Norfolk Island</option>
                <option value="MP" :selected="store.countryCode === 'MP'">Northern Mariana Islands</option>
                <option value="NO" :selected="store.countryCode === 'NO'">Norway</option>
                <option value="OM" :selected="store.countryCode === 'OM'">Oman</option>
                <option value="PK" :selected="store.countryCode === 'PK'">Pakistan</option>
                <option value="PW" :selected="store.countryCode === 'PW'">Palau</option>
                <option value="PS" :selected="store.countryCode === 'PS'">Palestinian Territory, Occupied</option>
                <option value="PA" :selected="store.countryCode === 'PA'">Panama</option>
                <option value="PG" :selected="store.countryCode === 'PG'">Papua New Guinea</option>
                <option value="PY" :selected="store.countryCode === 'PY'">Paraguay</option>
                <option value="PE" :selected="store.countryCode === 'PE'">Peru</option>
                <option value="PH" :selected="store.countryCode === 'PH'">Philippines</option>
                <option value="PN" :selected="store.countryCode === 'PN'">Pitcairn</option>
                <option value="PL" :selected="store.countryCode === 'PL'">Poland</option>
                <option value="PT" :selected="store.countryCode === 'PT'">Portugal</option>
                <option value="PR" :selected="store.countryCode === 'PR'">Puerto Rico</option>
                <option value="QA" :selected="store.countryCode === 'QA'">Qatar</option>
                <option value="RE" :selected="store.countryCode === 'RE'">R�union</option>
                <option value="RO" :selected="store.countryCode === 'RO'">Romania</option>
                <option value="RU" :selected="store.countryCode === 'RU'">Russian Federation</option>
                <option value="RW" :selected="store.countryCode === 'RW'">Rwanda</option>
                <option value="BL" :selected="store.countryCode === 'BL'">Saint Barth�lemy</option>
                <option value="SH" :selected="store.countryCode === 'SH'">Saint Helena, Ascension and Tristan da Cunha</option>
                <option value="KN" :selected="store.countryCode === 'KN'">Saint Kitts and Nevis</option>
                <option value="LC" :selected="store.countryCode === 'LC'">Saint Lucia</option>
                <option value="MF" :selected="store.countryCode === 'MF'">Saint Martin (French part)</option>
                <option value="PM" :selected="store.countryCode === 'PM'">Saint Pierre and Miquelon</option>
                <option value="VC" :selected="store.countryCode === 'VC'">Saint Vincent and the Grenadines</option>
                <option value="WS" :selected="store.countryCode === 'WS'">Samoa</option>
                <option value="SM" :selected="store.countryCode === 'SM'">San Marino</option>
                <option value="ST" :selected="store.countryCode === 'ST'">Sao Tome and Principe</option>
                <option value="SA" :selected="store.countryCode === 'SA'">Saudi Arabia</option>
                <option value="SN" :selected="store.countryCode === 'SN'">Senegal</option>
                <option value="RS" :selected="store.countryCode === 'RS'">Serbia</option>
                <option value="SC" :selected="store.countryCode === 'SC'">Seychelles</option>
                <option value="SL" :selected="store.countryCode === 'SL'">Sierra Leone</option>
                <option value="SG" :selected="store.countryCode === 'SG'">Singapore</option>
                <option value="SX" :selected="store.countryCode === 'SX'">Sint Maarten (Dutch part)</option>
                <option value="SK" :selected="store.countryCode === 'SK'">Slovakia</option>
                <option value="SI" :selected="store.countryCode === 'SI'">Slovenia</option>
                <option value="SB" :selected="store.countryCode === 'SB'">Solomon Islands</option>
                <option value="SO" :selected="store.countryCode === 'SO'">Somalia</option>
                <option value="ZA" :selected="store.countryCode === 'ZA'">South Africa</option>
                <option value="GS" :selected="store.countryCode === 'GS'">South Georgia and the South Sandwich Islands</option>
                <option value="SS" :selected="store.countryCode === 'SS'">South Sudan</option>
                <option value="ES" :selected="store.countryCode === 'ES'">Spain</option>
                <option value="LK" :selected="store.countryCode === 'LK'">Sri Lanka</option>
                <option value="SD" :selected="store.countryCode === 'SD'">Sudan</option>
                <option value="SR" :selected="store.countryCode === 'SR'">Suriname</option>
                <option value="SJ" :selected="store.countryCode === 'SJ'">Svalbard and Jan Mayen</option>
                <option value="SZ" :selected="store.countryCode === 'SZ'">Swaziland</option>
                <option value="SE" :selected="store.countryCode === 'SE'">Sweden</option>
                <option value="SY" :selected="store.countryCode === 'SY'">Syrian Arab Republic</option>
                <option value="TW" :selected="store.countryCode === 'TW'">Taiwan, Province of China</option>
                <option value="TJ" :selected="store.countryCode === 'TJ'">Tajikistan</option>
                <option value="TZ" :selected="store.countryCode === 'TZ'">Tanzania, United Republic of</option>
                <option value="TH" :selected="store.countryCode === 'TH'">Thailand</option>
                <option value="TL" :selected="store.countryCode === 'TL'">Timor-Leste</option>
                <option value="TG" :selected="store.countryCode === 'TG'">Togo</option>
                <option value="TK" :selected="store.countryCode === 'TK'">Tokelau</option>
                <option value="TO" :selected="store.countryCode === 'TO'">Tonga</option>
                <option value="TT" :selected="store.countryCode === 'TT'">Trinidad and Tobago</option>
                <option value="TN" :selected="store.countryCode === 'TN'">Tunisia</option>
                <option value="TR" :selected="store.countryCode === 'TR'">Turkey</option>
                <option value="TM" :selected="store.countryCode === 'TM'">Turkmenistan</option>
                <option value="TC" :selected="store.countryCode === 'TC'">Turks and Caicos Islands</option>
                <option value="TV" :selected="store.countryCode === 'TV'">Tuvalu</option>
                <option value="UG" :selected="store.countryCode === 'UG'">Uganda</option>
                <option value="UA" :selected="store.countryCode === 'UA'">Ukraine</option>
                <option value="AE" :selected="store.countryCode === 'AE'">United Arab Emirates</option>
                <option value="GB" :selected="store.countryCode === 'GB'">United Kingdom</option>
                <option value="US" :selected="store.countryCode === 'US'">United States</option>
                <option value="UM" :selected="store.countryCode === 'UM'">United States Minor Outlying Islands</option>
                <option value="UY" :selected="store.countryCode === 'UY'">Uruguay</option>
                <option value="UZ" :selected="store.countryCode === 'UZ'">Uzbekistan</option>
                <option value="VU" :selected="store.countryCode === 'VU'">Vanuatu</option>
                <option value="VE" :selected="store.countryCode === 'VE'">Venezuela, Bolivarian Republic of</option>
                <option value="VN" :selected="store.countryCode === 'VN'">Viet Nam</option>
                <option value="VG" :selected="store.countryCode === 'VG'">Virgin Islands, British</option>
                <option value="VI" :selected="store.countryCode === 'VI'">Virgin Islands, U.S.</option>
                <option value="WF" :selected="store.countryCode === 'WF'">Wallis and Futuna</option>
                <option value="EH" :selected="store.countryCode === 'EH'">Western Sahara</option>
                <option value="YE" :selected="store.countryCode === 'YE'">Yemen</option>
                <option value="ZM" :selected="store.countryCode === 'ZM'">Zambia</option>
                <option value="ZW" :selected="store.countryCode === 'ZW'">Zimbabwe</option>
              </select>
            </div>
                <!-- Form Group (Streetname) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputStreet">Streetname</label>
                  <input class="form-control" id="inputStreet" type="text" placeholder="Enter your Streetname" v-model="store.street">
                </div>
                <!-- Form Group (House Number) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputHouseNumber">House Number</label>
                  <input class="form-control" id="inputHouseNumber" type="text" placeholder="Enter your House Number" v-model="store.houseNumber">
                </div>
                <!-- Form Group (City) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputCity">City</label>
                  <input class="form-control" id="inputCity" type="text" placeholder="Enter your City" v-model="store.city">
                </div>
                <!-- Form Group (Postalcode) -->
                <div class="col-md-2">
                  <label class="small mb-1" for="inputPostalcode">Postalcode</label>
                  <input class="form-control" id="inputPostalcode" type="text" placeholder="Enter your Postalcode" v-model="store.postalCode">
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
        countryCode: store.countryCode,
        street: store.street,
        houseNumber: store.houseNumber,
        postalCode: store.postalCode,
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
        countryCode: store.countryCode,
        street: store.street,
        houseNumber: store.houseNumber,
        city: store.city,
        postalCode: store.postalCode,
      };

      if (newPassword !== '') {
        submit(userInput, initialUsername.value);
      }

      
    };

    const submit = async (userData, oldUsername) => {

      if(store.salutation === 'OTHER'){
          userData.salutation = store.otherinfo;
        }
      try {
        const backendUrl = `http://localhost:8081/updateUser/${oldUsername}?password=${userData.password}&role=${store.userRole}&firstname=${userData.firstname}&lastname=${userData.lastname}&salutation=${userData.salutation}&email=${userData.email}&countryCode=${userData.countryCode}&status=${true}&profilePicture=${null}&street=${userData.street}&houseNumber=${userData.houseNumber}&city=${userData.city}&postalCode=${userData.postalCode}&username=${userData.username}`;
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