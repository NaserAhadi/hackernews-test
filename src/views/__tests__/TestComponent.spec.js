import {shallowMount} from '@vue/test-utils'
import TestComponent from '../TestComponent'
import ChildComponent from '../../components/ChildComponent'

describe('TestComponent', () => {
    test('render child component', () => {
        const wrapper = shallowMount(TestComponent)
        expect(wrapper.findAllComponents(ChildComponent)).toHaveLength(1)
    })

    test('check ChildComponent receive correct prop', () => {
        const wrapper = shallowMount(TestComponent)
        // find was deprecated, instead of that use findComponent
        expect(wrapper.findComponent(ChildComponent).props().testProp).toBe('some-value')
    })
})