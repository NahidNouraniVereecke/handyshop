<template>
  <div id="app">
    <header class="header">
      <HeaderAtom type="h1">Hier können Sie in der Zukunft ihr Profil bearbeiten.</HeaderAtom>
    </header>
    <main>
      <div>
        <b-table striped hover :items="items"></b-table>
      </div>
    </main>
  </div>
</template>

<script>
import { useUserStore } from '@/store/user.js';

export default {
  setup() {
    const store = useUserStore();

    console.log(store.lastname);

    const items = [
     {
        username: store.username,
        first_name: store.firstname,
        last_name: store.lastname,
        salutation: store.salutation,
        email: store.email,
        country: store.country,
        street: store.street,
        hausNumber: store.hauseNumber,
        flatNumber: store.flatNumber,
        postalcode: store.postalcode,
        city: store.city,
      },
    ];

    return { store, items };
  },
};


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
}
</style>