import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import mergeUserPost from '@/utils/mergeUserPost';
import { setupServer } from "msw/node";
import { rest } from "msw";

import Winprovit from '../Winprovit.vue';
import { users, posts } from '../__mocks__/ServicesWinprovit';

const mockPosts = mergeUserPost(posts, users);

async function sleep(durée){
  return new Promise((r) => setTimeout(r, durée));
}

const mockedServer = setupServer(
  rest.get(
    "https://jsonplaceholder.typicode.com/users",
    (req, res, ctx) => res(ctx.json(users))
  ),
  rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    (req, res, ctx) => res(ctx.json(posts))
  )
);


describe('Winprovit', () => {
  let wrapper;

  beforeAll(async () => {
    mockedServer.listen()
    wrapper = mount(Winprovit)
    await sleep(2000);
    await flushPromises();
  })

  afterAll(() => mockedServer.close())

  it('renders component list posts', async () => {
    expect(wrapper.find('.posts')).toBeDefined();
    expect(wrapper.findAll('.post')).toBeDefined();
    expect(wrapper.findAll('.post').length).toEqual(100);
  })

  it('renders virtual data list posts', async () => {
    expect(wrapper.vm.postsResult.length).toEqual(100);
    expect(wrapper.vm.postsResult).toEqual(mockPosts);
  })

  for(let [index, post] of mockPosts.entries()) {
    it('render content post', async () => {
      expect(wrapper.vm.postsResult[index].title).toEqual(post.title);
      expect(wrapper.vm.postsResult[index].name).toEqual(post.name);
      expect(wrapper.vm.postsResult[index].email).toEqual(post.email);
      expect(wrapper.vm.postsResult[index].company.name).toEqual(post.company.name);
      expect(wrapper.vm.postsResult[index].body).toEqual(post.body);
    })
  }
})
