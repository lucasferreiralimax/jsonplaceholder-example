import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'

import pkg from '../package.json';

import App from './App.vue'

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(App)
  })

  it('renders component App', () => {
    expect(wrapper).toBeDefined();
  })

  it('validation version App', () => {
    expect(wrapper.vm.version).toEqual(pkg.version);
  })

  it('validation logo Winprovit', () => {
    expect(wrapper.find('.log.winprovit')).toBeDefined();
    expect(wrapper.find('[alt="Winprovit logo"]')).toBeDefined();
    expect(wrapper.find('[src="./assets/winprovit.png"]')).toBeDefined();
  })

  it('validation logo Vue', () => {
    expect(wrapper.find('.log.vue')).toBeDefined();
    expect(wrapper.find('[alt="Vue logo"]')).toBeDefined();
    expect(wrapper.find('[src="./assets/logo.svg"]')).toBeDefined();
  })

  it('validation component Winprovit', () => {
    expect(wrapper.find('[data-testId="winprovit"]')).toBeDefined();
  })

  it('validation Author Lucas Ferreira de Lima', () => {
    expect(wrapper.find('[href="https://github.com/lucasferreiralimax"]')).toBeDefined();
    expect(wrapper.find('.author').text()).toEqual('Brasil @lucasferreiralimax');
  })
})
