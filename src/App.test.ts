import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App.vue', () => {
  it('renders h1 with "Hello!" text', () => {
    const wrapper = mount(App)
    const h1 = wrapper.find('h1')
    expect(h1.text()).toBe('Hello!')
  })
})
