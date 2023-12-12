import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
    state(){
        return{
            username: '',
            userRole: '',

        }
    },
    actions:{
        setUserInfo(username, userRole){
            this.username = username;
            this.userRole = userRole;
        },
        clearUserInfo(){
            this.username = '';
            this.userRole = '';
        }
    },
    getters:{
        isLoggedIn(){
            return this.username !== '' && this.userrole !== '';
        }
    }
})