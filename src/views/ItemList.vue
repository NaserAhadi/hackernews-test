<template>
  <main>
    <div v-for="element of displayItems" :key="element.id">
      <Item :item="element"/>
    </div>
  </main>
  </template>
  
  <script>
  import Item from '../components/ItemComponent.vue'
//   import api from '../api/api'
  
  export default {
    components: {
      Item
    },
    data(){
      return {
        displayItems: window.items
      }
    }
  }
  </script>
  