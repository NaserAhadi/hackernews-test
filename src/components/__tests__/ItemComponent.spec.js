import { shallowMount } from "@vue/test-utils"
import ItemComponent from '../ItemComponent.vue'

describe('ItemComponent.vue', () => {
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

    test('renders link with item.title as a text', () => {
        const item = {
            title: 'something'
        }
        const wrapper = shallowMount(ItemComponent, {
            propsData: { item }
        })

        expect(wrapper.find('a').text()).toContain(item.title)
    })

    test('renders a link with item.url href and item.title as text', () => {
        const item = {
            title: 'some title',
            url: 'http://some-url.com'
        }
        const wrapper = shallowMount(ItemComponent, {
            propsData: { item }
        })

        const a = wrapper.find('a')
        expect(a.text()).toBe(item.title)
        expect(a.attributes().href).toBe(item.url)
    })
})
