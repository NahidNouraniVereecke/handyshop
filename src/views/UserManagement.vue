<template>
  <div id="app" class="container">
    <header class="header text-center">
      <TitleAtom text="User Management"></TitleAtom>
    </header>
    <main>
      <div class="row mt-4">
        <div class="col-md-6 mb-3">
          <input v-model="searchTerm" @input="searchUsers" class="form-control" type="text" placeholder="Search for user">
        </div>
      </div>
      <div class="row">
        <div v-for="user in filteredUsers" :key="user.id" class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ user.username }}</h5>
              <p class="card-text">
                <strong>E-Mail:</strong> {{ user.email }}<br>
                <strong>Role:</strong> {{ user.role }}<br>
                <strong>Status:</strong> {{ user.status ? 'Aktiv' : 'Inaktiv' }}<br>
                <strong>Created on:</strong> {{ formatDateTime(user.createdOn) }}<br>
                <strong>Last updated on:</strong> {{ formatDateTime(user.lastUpdatedOn) }}
              </p>
              <ButtonAtom @click="editUser(user)" class="btn btn-primary btn-sm">Edit</ButtonAtom>
              
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
      users: [],
      searchTerm: '',
    };
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        Object.values(user).some(value =>
          String(value).toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    },
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('http://localhost:8081/users', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    searchUsers() {
      // Triggered when the search term changes
    },
    editUser(user) {
      this.$router.push({ name: 'EditUserAdmin', params: { id: user.id } });
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
