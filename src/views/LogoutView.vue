<template>
    <div id="app">
      <header class="header">
        <HeaderAtom type="h1">Hier können Sie sich in der Zukunft ausloggen</HeaderAtom>
        <button @click="logout" class="logout-button">Logout</button>
      </header>
      <main>
        <!-- Dein Hauptinhalt hier -->
      </main>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {

        console.log("Role:");
        console.log(localStorage.getItem('role'));
        console.log("Token:")
        console.log(localStorage.getItem('access_token'));
        console.log("Username:")
        console.log(localStorage.getItem('username'));

        // Lösche die im localStorage gespeicherten Daten
        localStorage.removeItem('role');
        localStorage.removeItem('access_token');
        localStorage.removeItem('username');

        console.log("Role:");
        console.log(localStorage.getItem('role'));
        console.log("Token:")
        console.log(localStorage.getItem('access_token'));
        console.log("Username:")
        console.log(localStorage.getItem('username'));
        

    
        this.$router.push({ name: 'home' });
      }
    }
  }
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
    margin-bottom: 20px;
  }
  
  .logout-button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  </style>
  