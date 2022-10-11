import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { mount, flushPromises } from '@vue/test-utils';
import mergeUserPost from '@/utils/mergeUserPost';
import separatePosts from '@/utils/separatePosts'
import { setupServer } from "msw/node";
import { rest } from "msw";

import Winprovit from '../Winprovit.vue';
import { users, posts } from '../__mocks__/ServicesWinprovit';

const mockPosts = mergeUserPost(posts, users);
const mockPostsSeparate = separatePosts(mockPosts, 10);

async function sleep(time){
  return new Promise((r) => setTimeout(r, time));
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
    expect(wrapper.findAll('.post').length).toEqual(10);
  })

  it('renders virtual data list posts', async () => {
    expect(wrapper.vm.postsResult.length).toEqual(10);
    expect(wrapper.vm.postsResult).toEqual(mockPostsSeparate);
  })

  for(let index = 0; index < mockPostsSeparate.length; index++) {
    it('render content post', async () => {
      expect(wrapper.vm.postsResult[0][index].title).toEqual(mockPostsSeparate[0][index].title);
      expect(wrapper.vm.postsResult[0][index].name).toEqual(mockPostsSeparate[0][index].name);
      expect(wrapper.vm.postsResult[0][index].email).toEqual(mockPostsSeparate[0][index].email);
      expect(wrapper.vm.postsResult[0][index].company.name).toEqual(mockPostsSeparate[0][index].company.name);
      expect(wrapper.vm.postsResult[0][index].body).toEqual(mockPostsSeparate[0][index].body);
    })
  }
})
