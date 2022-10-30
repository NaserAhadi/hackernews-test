import { shallowMount } from "@vue/test-utils"
import ItemComponent from '../ItemComponent.vue'

describe('ItemComponent.vue', () => {
    test('renders "item"', () => {
        const wrapper = shallowMount(ItemComponent)
        expect(wrapper.text()).toContain('item')
    })
})
