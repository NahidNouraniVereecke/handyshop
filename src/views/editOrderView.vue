<template>
    <div class="container mt-4">
        <div v-if="showDismissibleAlert" class="alert alert-danger alert-dismissible fade show" role="alert">
        {{ alertMessage }}
        <b-button variant="danger" type="button" class="close" @click="dismissAlert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </b-button>
      </div>
      <div v-if="order">
        <div class="row mb-3">
          <div class="col-md-6">
            <h4><strong>Ordered On:</strong> {{ formatDateTime(order.createdOn) }}</h4>
          </div>
        </div>
  
        <div v-if="order.phones && order.phones.length > 0">
          <h2>Phones:</h2>
          <ul class="list-group">
            <li v-for="phone in order.phones" :key="phone.id" class="list-group-item">
              <div class="row">
                <div class="col-md-6">
                  <p><strong>Name:</strong> {{ phone.name }}</p>
                  <p><strong>Price:</strong> {{ formatPrice(phone.price) }}€</p>
                  <p><strong>Description:</strong> {{ phone.description }}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>Brand:</strong> {{ phone.brand.name }}</p>
                  <p><strong>Picture Path:</strong> {{ phone.picturePath || 'N/A' }}</p>
                  <ImageAtom :src="phone.picturePath" @click="goToProductPage" />
                </div>
              </div>
            </li>
          </ul>
        </div>
  
        <div class="row mt-3">
          <div class="col-md-6">
            <h4><strong>Total Amount:</strong> {{ order.phones ? formatPrice(calculateTotalAmount(order.phones)) : 'N/A' }}€</h4>
          </div>
          <div class="col-md-6 text-right">
            <b-button @click="deleteOrder(order)" variant="danger">Cancel Order</b-button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <script>
import axios from 'axios';
import ImageAtom from "@/components/atoms/ImageAtom.vue";

  export default {
    components: {
    ImageAtom,
  },
    data() {
      return {
        order: [],
        showDismissibleAlert: false,
        alertMessage: '',
      };
    },
    created() {
      
      this.fetchOrderDetails();
    },
    methods: {
      async fetchOrderDetails() {
       const orderId = localStorage.getItem('orderId');
        try {
            const backendUrl = 'http://localhost:8081/order/' + orderId;
          const response = await axios.get(backendUrl, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
          });
          this.order = response.data;
          console.log('Order:'+this.order);
        } catch (error) {
          console.error('Error fetching orders:', error);
          this.alertMessage = 'Error finding your order. Please contact customer service.';
        this.showDismissibleAlert = true;
        }
      },
      formatDateTime(dateTime) {
      return new Date(dateTime).toLocaleString();
    },
    formatPrice(price) {
      return Number(price).toFixed(2);
    },
    calculateTotalAmount(phones) {
        if (phones && phones.length > 0) {
    return phones.reduce((total, phone) => total + phone.price, 0);
  } else {
    return 0;
  }
    },
    dismissAlert() {
      this.showDismissibleAlert = false;
    },
    deleteOrder(order){
        const deleteUrl = 'http://localhost:8081/deleteOrder/'+order.id;
        const accessToken = localStorage.getItem('access_token');
     
      
        axios.delete(deleteUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    })
    .then(response => {
      console.log('Deleted successfully:', response.data);
      //delete orderId from local storage
      localStorage.removeItem('orderId');
      this.$router.push({ name: 'orderView' });
        
      
    })
    .catch(error => {
        console.error('Error deleting:', error);
        this.alertMessage = 'Delete not successful, contact customer help.';
        this.showDismissibleAlert = true;
    });
    }
    },
  };
  </script>
  
  <style scoped>
  </style>