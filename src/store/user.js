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
            street: '',
            hauseNumber: '',
            flatNumber: '',
            city:'',
            postalcode:'',
            country:'',
            profilPicture:''

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
                        this.street = user.street;
                        this.hauseNumber = user.hauseNumber;
                        this.flatNumber = user.flatNumber;
                        this.city = user.city;
                        this.postalcode = user.postalcode;
                        this.country = user.country;
                        this.profilPicture = user.profilPicture;
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
            this.street = user.street;
            this.hauseNumber = user.hauseNumber;
            this.flatNumber = user.flatNumber;
            this.city = user.city;
            this.postalcode = user.postalcode;
            this.country = user.country;
            this.profilPicture = user.profilPicture;

        },
        clearUserInfo(){
            this.username = '';
            this.userRole = '';
            this.firstname = '';
            this.lastname = '';
            this.salutation = '';
            this.email = '';
            this.street = '';
            this.hauseNumber = '';
            this.flatNumber = '';
            this.city = '';
            this.postalcode = '';
            this.country = '';
            this.profilPicture = '';
        }
    },
    getters:{
        isLoggedIn(){
            return this.username !== '' && this.userrole !== '';
        }
    }
})