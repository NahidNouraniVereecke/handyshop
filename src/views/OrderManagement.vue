<template>
    <div id="app" class="container">
      <header class="header text-center">
        <h1>Order Management</h1>
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
                <h5 class="card-title">Order by: {{ order.user.username }}</h5>
                <p class="card-text">
                  <strong>Phones:</strong>
                  <ul>
                    <li v-for="phone in order.phones" :key="phone.id">
                      {{ phone.name }} - Price: {{ formatPrice(phone.price) }}€
                    </li>
                  </ul>
                  <strong>Total Amount:</strong> {{ formatPrice(calculateTotalAmount(order.phones)) }}€<br>
                  <strong>Created On:</strong> {{ formatDateTime(order.createdOn) }}<br>
                  <strong>Created By:</strong> {{ order.user.username }}
                </p>
                <button @click="editOrder(order)" class="btn btn-primary btn-sm">Details</button>
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
          const response = await axios.get('http://localhost:8081/orders', {
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
        // Triggered when the search term changes
      },
      editOrder(order) {
        console.log('Editing order:', order);
        localStorage.setItem('orderId', order.id);
        this.$router.push({ name: 'editOrderAdmin' });
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
  