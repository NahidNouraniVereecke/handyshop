<template>
    <div class="help-page">
      <header>
        <h1>Help Page</h1>
      </header>
      <main>
        <section>
          <h2>Häufig gestellte Fragen</h2>
          <!-- Hier kannst du Molekülkomponenten für FAQs einfügen -->
          <faq-component question="Frage 1" answer="Antwort 1" />
          <faq-component question="Frage 2" answer="Antwort 2" />
          <!-- Füge weitere FAQs hinzu, wie benötigt -->
        </section>
      </main>
    </div>
  </template>
  
  <script>
  // Hier kannst du die Molekül- und Atomkomponenten importieren
  import FaqComponent from '@/components/molecules/FaqComponent.vue'

  
  export default {
    name: 'HelpPage',
    components: {
      'faq-component': FaqComponent,

      // Füge hier weitere importierte Komponenten hinzu
    },
    
  }
  </script>
  
  <style scoped>
  /* Hier kannst du das Seiten-Styling hinzufügen */
  .help-page {
    text-align: center;
    padding: 20px;
  }
  
  header {
    background-color: #41b883;
    padding: 20px;
    text-align: center;
    color: white;
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
  