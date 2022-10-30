import ItemComponent from '../ItemComponent.vue'
import Vue from "vue";

describe('ItemComponent.vue', () => {
    test('renders "item"', () => {
        const Ctor = Vue.extend(ItemComponent)          // create a new Vue constructor with the ItemComponent options
        const vm = new Ctor().$mount()                  // create a new Vue instance, and mounts the Vue instance
        expect(vm.$el.textContent).toContain('item')  // access the DOM element, and checks the text content
    })
})

// above test fail because el option is undefined
// solve above problem with installing jest with vue cli and change name of directory __test__ to __tests__