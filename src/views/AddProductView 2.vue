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
                <TitleAtom text="Add new product"></TitleAtom>
                <form @submit.prevent="submitForm">
                    <div class="container-fluid">
                        <div>
                            <label class="small mb-1" for="inputBrand">Marke</label>
                            <select class="form-control" id="inputBrand" v-model="brand" @change="handleBrandSelection">
                                <option value="" disabled selected>Marke auswählen</option>
                                <option v-for="brand in brands" :value="brand.name" :key="brand.id">
                                    {{ brand.name }}
                                </option>
                                <option value="new">+ add new brand</option>
                            </select>
                            <div v-if="errors.brand" class="error">{{ errors.brand }}</div>
                            <div v-if="isAddingNewBrand">
                                <label class="small mb-1" for="inputBrandName">Brand name</label>
                                <input class="form-control" type="text" v-model="newBrandName"
                                    placeholder="Neue Markenname" />
                                <div v-if="errors.newBrandName" class="error">{{ errors.newBrandName }}</div>
                                <label class="small mb-1" for="inputBrandName">Brand picture</label>
                                <input class="form-control" type="file" @change="handleFileChange" />
                            </div>
                        </div>
                        <div class="form-field">
                            <label class="small mb-1" for="inputname">Model</label>
                            <input class="form-control" id="inputname" type="text" v-model="formData.name"
                                placeholder="Enter the model">
                            <div v-if="errors.name" class="error">{{ errors.name }}</div>
                        </div>
                        <div class="form-field">
                            <label class="small mb-1" for="inputDescription">Description</label>
                            <input class="form-control" id="inputDescription" type="text" v-model="formData.description"
                                placeholder="Enter the description">
                            <div v-if="errors.description" class="error">{{ errors.description }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputDisplaySize">Displaysize</label>
                            <input class="form-control" id="inputDisplaySize" type="text" v-model="formData.displaySize"
                                placeholder="Enter the displaysize">
                            <div v-if="errors.displaySize" class="error">{{ errors.displaySize }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputMemory">Memory</label>
                            <input class="form-control" id="inputMemory" type="text" v-model="formData.memory"
                                placeholder="Enter the Memory">
                            <div v-if="errors.memory" class="error">{{ errors.memory }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputBattery">Battery</label>
                            <input class="form-control" id="inputBattery" type="text" v-model="formData.battery"
                                placeholder="Enter the battery">
                            <div v-if="errors.battery" class="error">{{ errors.battery }}</div>
                        </div>

                        <div class="form-field">
                            <label class="small mb-1" for="inputPrice">Price</label>
                            <input class="form-control" id="inputPrice" type="text" v-model="formData.price"
                                placeholder="Enter the Price">
                            <div v-if="errors.price" class="error">{{ errors.price }}</div>
                        </div>
                        <div class="input-field">
                            <label for="imageUpload" class="form-label">Upload Image</label>
                            <input class="form-control" type="file" id="imageUpload">
                        </div>

                        <ButtonAtom class="btn btn-primary" type="button" @click="submitForm">Add</ButtonAtom>
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
        this.fetchBrands();
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

        async fetchBrands() {
            try {
                const response = await axios.get('http://localhost:8081/brands', {

                });
                this.brands = response.data;
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        },
        handleBrandSelection(event) {
            this.isAddingNewBrand = event.target.value === 'new';
        },

        async submitForm() {
            console.log('submitForm aufgerufen'); // Überprüfen, ob diese Methode aufgerufen wird
            const isValid = await this.validateFormData();
            if (!isValid) {
                console.log('Formulardaten sind nicht gültig:', this.errors);
                return; // Stoppen, wenn Validierungsfehler vorhanden sind
            }
            const username = localStorage.getItem('username');
            const token = localStorage.getItem('access_token');
            let brandName = this.brand; // Standardmäßig wird der bereits ausgewählte Markenname verwendet

            // Wenn es sich um eine neue Marke handelt, fügen Sie diese zuerst hinzu
            if (this.isAddingNewBrand && this.newBrandName) {
                const addBrandUrl = `http://localhost:8081/addbrand/${username}?name=${this.newBrandName}&picturePath=null`;
                console.log("Versuch, neue Marke hinzuzufügen mit URL:", addBrandUrl); // Loggen der URL

                try {
                    await axios.post(addBrandUrl, null, {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    brandName = this.newBrandName;
                    // Verwenden Sie den neuen Markennamen für das Hinzufügen des Telefons
                } catch (error) {
                    if (error.response && error.response.data) {
                        // Wenn die Antwort eine Liste von Fehlermeldungen ist
                        if (Array.isArray(error.response.data)) {
                            // Anzeigen der ersten Fehlermeldung aus der Liste
                            this.errorMessage = error.response.data[0];
                        } else {
                            // Anzeigen der Antwort, wenn es kein Array ist
                            this.errorMessage = error.response.data;
                        }
                    } else {
                        this.errorMessage = 'Fehler beim Hinzufügen der Marke';
                    }
                    setTimeout(() => {
                        this.errorMessage = '';
                    }, 3000);
                    return false;
                }
            }

            // Fügen Sie das Telefon hinzu
            const addPhoneUrl = `http://localhost:8081/addPhone/${username}/${brandName}`;
            axios.post(addPhoneUrl, this.formData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(response => {
                    console.log('Telefon hinzugefügt:', response);
                    this.successMessage = 'Produkt erfolgreich hinzugefügt!';
                    setTimeout(() => {
                        this.successMessage = '';
                    }, 3000);
                    this.errorMessage = ''; // Fehlermeldung zurück
                })
                .catch(error => {
                    console.error('Fehler beim Hinzufügen des Telefons:', error);
                    this.errorMessage = 'Fehler beim Hinzufügen des Produkts.';
                    setTimeout(() => {
                        this.errorMessage = '';
                    }, 3000);
                    this.successMessage = '';
                });
        }

    },
};
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