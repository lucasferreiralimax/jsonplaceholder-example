import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'

import ErrorHandler from '../ErrorHandler.vue'

describe('ErrorHandler', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(ErrorHandler, {
      propsData: { errors: ['Error get post list - Test unit', 'Error get users list - Test unit'] }
    })
  })

  it('renders component ErrorHandler', () => {
    expect(wrapper.find('.ërror')).toBeDefined();
  })

  it('renders errors', () => {
    expect(wrapper.findAll('.ërror p').length).toEqual(2);
    expect(wrapper.findAll('.ërror p')[0].text()).toEqual('Error get post list - Test unit');
    expect(wrapper.findAll('.ërror p')[1].text()).toEqual('Error get users list - Test unit');
  })
})
