import {shallowMount} from '@vue/test-utils'
import ItemList from '../ItemList'
import Item from '../../components/ItemComponent'


describe('ItemList.vue', () => {
    test('renders Item component for each item object in window.items', () => {
        window.items = [{}, {}, {}]
        const wrapper = shallowMount(ItemList)
        expect(wrapper.findAllComponents(Item)).toHaveLength(window.items.length)
    })
})