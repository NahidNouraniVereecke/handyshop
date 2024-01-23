<template>
  <div id="app" class="container">
    <header class="header text-center">
      <TitleAtom text="Phone Management"></TitleAtom>
    </header>
    <main>
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <input v-model="searchTerm" @input="searchPhones" class="form-control" type="text"
            placeholder="Search for phone">
        </div>
      </div>
      <div class="row">
        <div v-for="phone in filteredPhones" :key="phone.id" class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ phone.name }}</h5>
              <p class="card-text">
                <strong>Price:</strong> {{ phone.price }}<br>
                <strong>Brand:</strong> {{ phone.brand.name }}<br>
                <strong>Created on:</strong> {{ formatDateTime(phone.createdOn) }}<br>
                <strong>Last updated on:</strong> {{ formatDateTime(phone.lastUpdatedOn) }}<br>
                <strong>Created by:</strong> {{ phone.createdBy.username }}
              </p>
              <ButtonAtom @click="editPhone(phone)" class="btn btn-primary btn-sm">Edit</ButtonAtom>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import ButtonAtom from "@/components/atoms/ButtonAtom.vue";
import TitleAtom from "@/components/atoms/TitleAtom.vue";


export default {
  components: {
        ButtonAtom,
        TitleAtom
    },
  data() {
    return {
      phones: [],
      searchTerm: '',
    };
  },
  created() {
    this.fetchPhones();
  },
  computed: {
    filteredPhones() {
      return this.phones.filter(phone =>
        Object.values(phone).some(value =>
          String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
        ) ||
        (phone.brand && phone.brand.name.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        (phone.createdBy && phone.createdBy.username.toLowerCase().includes(this.searchTerm.toLowerCase()))
      );
    },
  },
  methods: {
    async fetchPhones() {
      try {
        const response = await axios.get('http://localhost:8081/phones', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        this.phones = response.data;
      } catch (error) {
        console.error('Error fetching phones:', error);
      }
    },
    searchPhones() {
      // Triggered when the search term changes
    },
    editPhone(phone) {
      this.$router.push({ name: 'Editproduct', params: { id: phone.id } });
    },

    formatDateTime(dateTime) {
      return new Date(dateTime).toLocaleString();
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
