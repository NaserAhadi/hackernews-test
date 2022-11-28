import {shallowMount} from '@vue/test-utils'
import ProgressBar from '../ProgressBar'

describe('ProgressBar.vue', () => {
    test('is hidden on initial render', () => {
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.classes()).toContain('hidden')
    })

    test('initilizes with 0% width', () => {
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.element.style.width).toBe('0%')
    })
})