import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'

import separatePosts from '../separatePosts.js'

const mockArray = ['test', 'test', 'test', 'test']

describe('separatePosts', () => {
  it('renders separatePosts function', () => {
    expect(separatePosts(mockArray, 2)).toBeDefined();
  })

  it('separatePosts return validation', () => {
    expect(separatePosts(mockArray, 2)).toEqual([['test', 'test'], ['test', 'test']]);
  })
})
