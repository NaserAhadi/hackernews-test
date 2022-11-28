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

    test('check the href of link to be "https://google.com"', () => {
        const wrapper = shallowMount(TestComponent)
        expect(wrapper.find('a').attributes('href')).toBe('https://google.com')
    })

    test('check the p tag has red color in the inline style', () => {
        const wrapper = shallowMount(TestComponent)
        expect(wrapper.find('p').element.style.color).toBe('red')
    })
})