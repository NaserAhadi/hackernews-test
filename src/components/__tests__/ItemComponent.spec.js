import {mount} from "@vue/test-utils"
import ItemComponent from '../ItemComponent.vue'

describe('ItemComponent.vue', () => {
    test('renders "item"', () => {
        const wrapper = mount(ItemComponent)
        expect(wrapper.text()).toContain('item')
    })
})
