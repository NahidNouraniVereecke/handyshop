<template>
    <div class="help-page">
      <header>
        <h1>Help Page</h1>
      </header>
      <main>
        <section>
          <h2>Häufig gestellte Fragen</h2>
          <TitleAtom :text="'Rückgabe und Erstattung'" />
          <faq-component question="Kann ich meine Retoure auch bei einer beliebigen HandyShop-Filiale abgeben?" answer="Natürlich gibt es auch die Möglichkeit, die Retouren bei einer unseree Filialen abzugeben." />
          <faq-component question="Wohin sende ich einen Artikel, wenn mir dieser nicht gefällt?" answer="Gerne können Sie den Artikeln innerhalb der 14 Tage ab Rechnungsdatum an uns retournieren." />
          <TitleAtom :text="'Service und Reparaturen'" />
          <faq-component question="Wohin schicke ich meine Reperatur?" answer="Auch Reperaturen können Sie gerne an uns schicken, hierzu füllen Sie bitte unser Reperatuformular vollständig aus.." />
          <faq-component question="Kann ich auch ein Gerät mit Kaputten Display einschicken?" answer="Natürlich." />
          
        </section>
      </main>
    </div>
  </template>
  
  <script>
  // Hier kannst du die Molekül- und Atomkomponenten importieren
  import TitleAtom from '@/components/atoms/TitleAtom.vue';
import FaqComponent from '@/components/molecules/FaqComponent.vue'

  
  export default {
    name: 'HelpPage',
    components: {
    "faq-component": FaqComponent,
    TitleAtom
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
  