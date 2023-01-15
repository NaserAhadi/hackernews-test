<template>
  <main>
    <div v-for="element of displayItems" :key="element.id">
      <Item :item="element"/>
    </div>
  </main>
</template>
  
<script>
import Item from '../components/ItemComponent.vue'
import { fetchListData } from '../api/api'
  
export default {
  components: {
    Item
  },
  data(){
    return {
      displayItems: []
    }
  },
  beforeMount(){
    this.loadItems()
  },
  methods:{
    loadItems(){
      this.$bar.start()
      fetchListData('top')
      .then(items => {
        this.displayItems = items
        this.$bar.finish()
      })
      .catch(() => this.$bar.fail())
    }
  }
}
</script>
  