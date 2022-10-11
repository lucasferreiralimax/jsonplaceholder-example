import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'

import ArticlePost from '../ArticlePost.vue'

describe('ArticlePost', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = mount(ArticlePost, {
      propsData: {
        post: {
          "userId": 1,
          "id": 1,
          "title": "Desenvolvedor front especialista",
          "body": "Desenvolvedor front, react, vue, angular e javascript",
          "name": "Lucas Ferreira de Lima",
          "username": "Bret",
          "email": "lucasferreiralimax@gmail.com",
          "address": {
              "street": "Kulas Light",
              "suite": "Apt. 556",
              "city": "Gwenborough",
              "zipcode": "92998-3874",
              "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
              }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
              "name": "Github",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
          }
        }
      }
    })
  })

  it('renders component ArticlePost', () => {
    expect(wrapper.find('.post')).toBeDefined();
  })

  it('renders "post"', () => {
    expect(wrapper.vm.post.title).toEqual('Desenvolvedor front especialista');
    expect(wrapper.vm.post.name).toEqual('Lucas Ferreira de Lima');
    expect(wrapper.vm.post.email).toEqual('lucasferreiralimax@gmail.com');
    expect(wrapper.vm.post.company.name).toEqual('Github');
    expect(wrapper.vm.post.body).toEqual('Desenvolvedor front, react, vue, angular e javascript');
  })
})
