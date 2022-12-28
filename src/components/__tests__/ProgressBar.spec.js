import {shallowMount} from '@vue/test-utils'
import Vue from 'vue'
import ProgressBar from '../ProgressBar'

describe('ProgressBar.vue', () => {
    // beforeEach(() => {
    //     jest.useFakeTimers()
    // })

    test('is hidden on initial render', async () => {
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.classes()).toContain('hidden')
        wrapper.vm.start()
        await Vue.nextTick()
        expect(wrapper.classes()).not.toContain('hidden')
    })

    test('initilizes with 0% width', () => {
        const wrapper = shallowMount(ProgressBar)
        expect(wrapper.element.style.width).toBe('0%')
    })

    test('sets bar width to 100% when the finish is called', async () => {
        const wrapper = shallowMount(ProgressBar)
        wrapper.vm.start()
        wrapper.vm.finish()
        await Vue.nextTick()
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

    test('increases width by 1% every 100ms after start call', async () => {
        jest.useFakeTimers()

        const wrapper = shallowMount(ProgressBar)
        wrapper.vm.start()
        await Vue.nextTick()
        jest.advanceTimersByTime(100)
        expect(wrapper.element.style.width).toBe('1%')
        // jest.advanceTimersByTime(900)
        // expect(wrapper.element.style.width).toBe('10%')
        // jest.advanceTimersByTime(4000)
        // expect(wrapper.element.style.width).toBe('50%')
    })

    test('clears timer when finish is called', () => {
        jest.useFakeTimers()
        jest.spyOn(window, 'clearInterval')
        setInterval.mockReturnValue(123)
        const wrapper = shallowMount(ProgressBar)
        wrapper.vm.start()
        wrapper.vm.finish()
        expect(window.clearInterval).toHaveBeenCalledWith(123)
    })
})