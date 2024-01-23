<template>
    <div id="app" class="container">
      <header class="header text-center">
        <h1>Your Orders</h1>
      </header>
      <main>
        <div class="row mt-4">
          <div class="col-md-6 mb-3">
            <input v-model="searchTerm" @input="searchOrders" class="form-control" type="text" placeholder="Search for order">
          </div>
        </div>
        <div class="row">
          <div v-for="order in filteredOrders" :key="order.id" class="col-md-4 mb-3">
            <div class="card">
              <div class="card-body">
                <strong>Order from:</strong> {{ formatDateTime(order.createdOn) }}<br>
                <p class="card-text">
                  <strong>Phones:</strong>
                  <ul>
                    <li v-for="phone in order.phones" :key="phone.id">
                      {{ phone.name }} - Price: {{ formatPrice(phone.price) }}€
                    </li>
                  </ul>
                  <strong>Total Amount:</strong> {{ formatPrice(calculateTotalAmount(order.phones)) }}€<br>
                </p>
                <button @click="editOrder(order)" class="btn btn-primary btn-sm">Detail</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        orders: [],
        searchTerm: '',
      };
    },
    created() {
      this.fetchOrders();
    },
    computed: {
      filteredOrders() {
      return this.orders.filter(order =>
        Object.values(order).some(value =>
          String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
        ) ||
        order.user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        order.phones.some(phone =>
          phone.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    },
    },
    methods: {
      async fetchOrders() {
        try {
            const backendUrl = 'http://localhost:8081/orders/' + localStorage.getItem('username');
          const response = await axios.get(backendUrl, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          this.orders = response.data;
        } catch (error) {
          console.error('Error fetching orders:', error);
        }
      },
      searchOrders() {
        
      },
      editOrder(order) {
        localStorage.setItem('orderId', order.id);
        this.$router.push({ name: 'editOrder' });
      },
      formatDateTime(dateTime) {
        return new Date(dateTime).toLocaleString();
      },
      formatPrice(price) {
        return Number(price).toFixed(2);
      },
      calculateTotalAmount(phones) {
        return phones.reduce((total, phone) => total + phone.price, 0);
      },
    },
  };
  </script>
  
  <style scoped>
  .header {
    margin-top: 30px;
  }
  
  .card {
    width: 100%;
  }
  </style>
  