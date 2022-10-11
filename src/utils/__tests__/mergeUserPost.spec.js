import { describe, it, expect } from 'vitest'

import mergeUserPost from '../mergeUserPost.js'

import { users, posts } from '../__mocks__/ServicesWinprovit';

const mockPosts = mergeUserPost(posts, users);

describe('mergeUserPost', () => {
  it('renders mergeUserPost function', () => {
    expect(mergeUserPost(posts, users)).toBeDefined();
  })

  it('renders mergeUserPost equal mock', () => {
    expect(mergeUserPost(posts, users)).toEqual(mockPosts);
  })
})
