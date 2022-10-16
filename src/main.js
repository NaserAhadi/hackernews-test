import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import { fetchListData } from './api/api'

Vue.config.productionTip = false

function getTopItems () {
  return fetchListData('top')
    .then(items => items)
}
// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')

getTopItems().then((items) => {
  window.items = items
  new Vue({
    el: '#app',
    render: h => h(App)
  })
})
