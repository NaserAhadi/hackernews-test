import {shallowMount} from '@vue/test-utils'
import ProgressBar from '../ProgressBar'

describe('ProgressBar.vue', () => {
    test('is hidden on initial render', () => {
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.classes()).toContain('hidden')
        // it doesn't work, doesn't read method!! but why?
        wrapper.vm.start()
        expect(wrapper.classes()).not.toContain('hidden')
    })

    test('initilizes with 0% width', () => {
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.element.style.width).toBe('0%')
    })

    test('sets bar width to 100% when the finish is called', () => {
        const wrapper = shallowMount(ProgressBar)
        // methods work(add a log to method and see), but they can not change styles or classes in template
        wrapper.vm.start()
        wrapper.vm.finish()
        expect(wrapper.element.style.width).toBe('100%')
    })

    test('hide bar when finish is called', () => {
        const wrapper = shallowMount(ProgressBar)
        wrapper.vm.start()
        wrapper.vm.finish()
        expect(wrapper.classes()).toContain('hidden')
    })

    test('reset bar width to 0 when start is called', () => {
        const wrapper = shallowMount(ProgressBar)
        wrapper.vm.finish()
        wrapper.vm.start()
        expect(wrapper.element.style.width).toBe('0%')
    })
})