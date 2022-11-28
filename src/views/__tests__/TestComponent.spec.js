import {shallowMount} from '@vue/test-utils'
import TestComponent from '../TestComponent'
import ChildComponent from '../../components/ChildComponent'

describe('TestComponent', () => {
    test('render child component', () => {
        const wrapper = shallowMount(TestComponent)
        expect(wrapper.findAllComponents(ChildComponent)).toHaveLength(1)
    })
})