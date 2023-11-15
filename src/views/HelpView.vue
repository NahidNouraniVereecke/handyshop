<template>
    <div class="help-page">
      <header>
        <HeaderAtom type="h1">Help Page - FAQ</HeaderAtom>
      </header>
      <main>
        <section>
          <TitleAtom :text="'Return and Refund'" />
          <faq-component question="Can I also hand in my return on site at any HandyShop store?" answer="Of course, there is also the option of handing in the returns on site at one of our stores." />
          <faq-component question="Where do I send an item if I would like to return it?" answer="You can return the item to us within 14 days of the invoice date." />
          <TitleAtom :text="'Service and Repairs'" />
          <faq-component question="Where do I send my cell phone for repairs?" answer="You are also welcome to send repairs to us, please fill out our repair form completely. After you send as the form we will send you a filled out return label and the estimated price. " />
          <faq-component question="Can I also send in a device with a broken display?" answer="Yes, of course" />
          
        </section>
      </main>
    </div>
  </template>
  
  <script>
import TitleAtom from '@/components/atoms/TitleAtom.vue';
import FaqComponent from '@/components/molecules/FaqComponent.vue'
import HeaderAtom from '@/components/atoms/headerAtom.vue';

  
  export default {
    name: 'HelpPage',
    components: {
    "faq-component": FaqComponent,
    TitleAtom,
    HeaderAtom
},
    
  }
  </script>
  
  <style scoped>
  
  .help-page {
    text-align: center;
    padding: 20px;
  }
  
  header {
    text-align: center;
 
  }
  
  main {
    margin-top: 20px;
  }
  
  section {
    margin-bottom: 30px;
  }
  
  h2 {
    margin-bottom: 10px;
  }
  </style>
  