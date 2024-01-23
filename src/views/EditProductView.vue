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
                <TitleAtom text="Update phone"></TitleAtom>
                <form @submit.prevent="submitForm">
                    <div class="container-fluid">
                        <label class="small mb-1" for="inputBrand">Marke</label>
                        <div class="form-control" id="inputBrand">
                            {{ brand }}
                        </div>
                        <div v-if="errors.brand" class="error">{{ errors.brand }}</div>
                        <div class="form-field">
                            <label class="small mb-1" for="inputname">Model</label>
                            <input class="form-control" id="inputname" type="text" v-model="formData.name"
                                :placeholder="formData.name ? formData.name : 'Enter the model'">
                            <div v-if="errors.name" class="error">{{ errors.name }}</div>
                        </div>
                        <div class="form-field">
                            <label class="small mb-1" for="inputDescription">Description</label>
                            <input class="form-control" id="inputDescription" type="text" v-model="formData.description"
                                :placeholder="formData.description ? formData.description : 'Enter the description'">
                            <div v-if="errors.description" class="error">{{ errors.description }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputDisplaySize">Displaysize</label>
                            <input class="form-control" id="inputDisplaySize" type="text" v-model="formData.displaySize"
                                :placeholder="formData.displaySize ? formData.displaySize : 'Enter the displaysize'">
                            <div v-if="errors.displaySize" class="error">{{ errors.displaySize }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputMemory">Memory</label>
                            <input class="form-control" id="inputMemory" type="text" v-model="formData.memory"
                                :placeholder="formData.memory ? formData.memory : 'Enter the memory'">
                            <div v-if="errors.memory" class="error">{{ errors.memory }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputBattery">Battery</label>
                            <input class="form-control" id="inputBattery" type="text" v-model="formData.battery"
                                :placeholder="formData.battery ? formData.battery : 'Enter the battery'">
                            <div v-if="errors.battery" class="error">{{ errors.battery }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputPrice">Price</label>
                            <input class="form-control" id="inputPrice" type="text" v-model="formData.price"
                                :placeholder="formData.price ? formData.price : 'Enter the price'">
                            <div v-if="errors.price" class="error">{{ errors.price }}</div>
                        </div>
                        <div class="input-field">
                            <label for="imageUpload" class="form-label">Upload Image</label>
                            <input class="form-control" type="file" id="imageUpload">
                        </div>

                        <ButtonAtom class="btn btn-primary" type="button" @click="submitForm">Update</ButtonAtom>
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
        TitleAtom
    },
    data() {
        return {
            formData: {
                name: '',
                description: '',
                displaySize: '',
                memory: '',
                battery: '',
                price: '',
                phoneImage: null,
            },
            errors: {},
            brand: '',
            brands: [],
            isAddingNewBrand: false,
            newBrandName: '',
            newBrandImage: null,
            successMessage: '',
            errorMessage: '',

        };
    },
    created() {
        this.loadPhoneData();
        
    },
    methods: {
        validationSchema() {
            return yup.object().shape({
                name: yup.string().required('Name is required'),
                displaySize: yup.string().required('Display size is required').test('is-number', 'Display size must be a number', (value) => !value || !isNaN(value)),
                memory: yup.string().required('Memory is required').test('is-number', 'Memory must be a number', (value) => !value || !isNaN(value)),
                battery: yup.string().required('Battery is required').test('is-number', 'Battery must be a number', (value) => !value || !isNaN(value)),
                price: yup.string().required('Price is required').test('is-number', 'Price must be a number', (value) => !value || !isNaN(value)),
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
                return false;
            }
        },
        async loadPhoneData() {
            const phoneId = this.$route.params.id;
            try {
                const token = localStorage.getItem('access_token'); // Token aus dem lokalen Speicher holen
                const response = await axios.get(`http://localhost:8081/phone/${phoneId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                this.formData = response.data;
                this.brand = response.data.brand.name;
            } catch (error) {
                console.error('Fehler beim Laden der Telefondaten:', error);
                // Behandlung für den Fehler, z.B. Anzeige einer Fehlermeldung
            }
        },
       
        async submitForm() {
            console.log('submitForm aufgerufen');
            const isValid = await this.validateFormData();
            if (!isValid) {
                console.log('Formulardaten sind nicht gültig:', this.errors);
                return;
            }

            const phoneId = this.$route.params.id;
            const token = localStorage.getItem('access_token');

            // Telefon aktualisieren
            try {
               
                const updatePhoneUrl = `http://localhost:8081/updatePhone/${phoneId}`;
                const response = await axios.put(updatePhoneUrl, this.formData, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                });
                console.log('Telefon aktualisiert:', response);
                this.successMessage = 'Telefon erfolgreich aktualisiert!';
                setTimeout(() => this.successMessage = '', 3000);
            } catch (error) {
                console.error('Fehler beim Aktualisieren des Telefons:', error);
                this.errorMessage = 'Fehler beim Aktualisieren des Telefons.';
                setTimeout(() => this.errorMessage = '', 3000);
            }
        }
    }
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
</style>