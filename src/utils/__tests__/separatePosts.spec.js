import { describe, it, expect } from 'vitest'

import separatePosts from '../separatePosts.js'

const mockArray = ['test', 'test', 'test', 'test']

describe('separatePosts', () => {
  it('renders separatePosts function', () => {
    expect(separatePosts(mockArray, 2)).toBeDefined();
  })

  it('separatePosts return validation one', () => {
    expect(separatePosts(mockArray, 1)).toEqual([['test'], ['test'], ['test'], ['test']]);
  })

  it('separatePosts return validation two', () => {
    expect(separatePosts(mockArray, 2)).toEqual([['test', 'test'], ['test', 'test']]);
  })

})
