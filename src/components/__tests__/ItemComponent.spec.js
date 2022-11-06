import { shallowMount } from "@vue/test-utils"
import ItemComponent from '../ItemComponent.vue'

describe('ItemComponent.vue', () => {
    test('renders item.url', () => {
        const item = {
            url: "10",
        }
        const wrapper = shallowMount(ItemComponent, {
            propsData: { item }
        })
        console.log('here', wrapper.text())
        expect(wrapper.text()).toContain(item.url)
    })
})
