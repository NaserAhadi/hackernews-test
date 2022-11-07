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
        expect(wrapper.text()).toContain(item.url)
    })

    test('renders author of item (item.by)', () => {
        const item = {
            by: 'something'
        }
        const wrapper = shallowMount(ItemComponent, {
            propsData: {item}
        })
        expect(wrapper.text()).toContain(item.by)
    })

    test('renders item.score', () => {
        const item = {
            score: 'something'
        }
        const wrapper = shallowMount(ItemComponent,{
            propsData: {item}
        })
        expect(wrapper.text()).toContain(item.score)
    })
})
