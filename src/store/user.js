import {defineStore} from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
    state(){
        return{
            username: '',
            userRole: '',
            firstname: '',
            lastname: '',
            salutation: '',
            email: '',
            countryCode: '',
            postalCode: '',
            city: '',
            street: '',
            houseNumber: '',
            profilPicture:'',
            otherinfo: ''

        }
    },
    actions:{
        async fetchData(URL){

            if(localStorage.getItem('access_token')){
                const accessToken = localStorage.getItem('access_token');
                try{
                    const response = await axios.get(URL, {
                        headers: {
                          'Authorization': `Bearer ${accessToken}`,
                        },
                      });
                     
    
                    if(response.data){
                        const user = response.data;
                        this.username = user.username;
                        this.userRole = user.role;
                        this.firstname = user.firstname;
                        this.lastname = user.lastname;
                        this.salutation = user.salutation;
                        this.email = user.email;
                        this.countryCode = user.countryCode;
                        this.postalCode = user.postalCode;
                        this.street = user.street;
                        this.city = user.city;
                        this.street = user.street;
                        this.houseNumber = user.houseNumber;
                        this.profilPicture = user.profilPicture;
                        this.otherinfo = user.otherinfo;
                        
                    }else{
                        console.error('Ungültiges Datenformat in der API-Antwort.');
                    }
                }catch(error){
                    console.error('Fehler beim Abrufen der User Daten:', error);
            // Hier können Sie geeignete Maßnahmen für Fehlerbehandlung ergreifen
                }
            }
            
        },
        setUserInfo(user){
            this.username = user.username;
            this.userRole = user.role;
            this.firstname = user.firstname;
            this.lastname = user.lastname;
            this.salutation = user.salutation;
            this.email = user.email;
            this.countryCode = user.countryCode;
            this.postalCode = user.postalCode;
            this.street = user.street;
            this.city = user.city;
            this.street = user.street;
            this.houseNumber = user.houseNumber;
            this.profilPicture = user.profilPicture;
            this.otherinfo = user.otherinfo;

        },
        clearUserInfo(){
            this.username = '';
            this.userRole = '';
            this.firstname = '';
            this.lastname = '';
            this.salutation = '';
            this.email = '';
            this.countryCode = '';
            this.postalCode = '';
            this.street = '';
            this.city = '';
            this.street = '';
            this.houseNumber = '';
            this.profilPicture = '';
            this.otherinfo = '';
        }
    },
    getters:{
        isLoggedIn(){
            return this.username !== '' && this.userrole !== '';
        }
    }
})