<template>
    <div class="faq" @click="toggleAnswer">
      <h3>{{ question }}</h3>
      <transition name="fade">
        <p v-if="showAnswer">{{ answer }}</p>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showAnswer: false,
      };
    },
    props: {
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
    },
    methods: {
      toggleAnswer() {
        this.showAnswer = !this.showAnswer;
      },
    },
  };
  </script>
  
  <style scoped>
  .faq {
    margin-bottom: 15px;
    cursor: pointer;
  }
  
  h3 {
    margin-bottom: 5px;
    color:green;
  }
  
  p {
    color: #333;
    font-size: 18px;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  
  