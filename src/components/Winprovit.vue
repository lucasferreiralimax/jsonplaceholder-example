<script setup>
import { reactive, ref, watch  } from 'vue'
import mergeUserPost from '@/utils/mergeUserPost'
import separatePosts from '@/utils/separatePosts'
import { getUserList, getPostList } from "@/services/Winprovit"

import ErrorHandler from './ErrorHandler.vue';
import ArticlePost from './ArticlePost.vue';

let usersData = ref([]);
let postsData = ref([]);

let postsIndex = ref(0);
let postsResult = ref([]);
let postsShow = reactive([]);
let resultError = reactive([]);

getPostList()
  .then((postsResponse) => {
    postsData.value = postsResponse;
  })
  .catch((error) => {
    resultError.push(`Error get post list - ${error.message}`);
    console.log("Error get post list", error);
  });

getUserList()
  .then((usersResponse) => {
    usersData.value = usersResponse;
  })
  .catch((error) => {
    resultError.push(`Error get user list - ${error.message}`);
    console.log("Error get user list", error);
  });

watch([usersData, postsData], () => {
  if (usersData.value.length > 0 && postsData.value.length > 0) {
    const postMerge = mergeUserPost(postsData.value, usersData.value);

    console.info("Result Post: ", postMerge);
    console.info("Separate Post: ", separatePosts(postMerge, 10));

    postsResult.value = separatePosts(postMerge, 10);
    postsShow.push(...postsResult.value[0])
  }
});

const morePost = () => {
  postsIndex.value++
  postsShow.push(...postsResult.value[postsIndex.value])
}
</script>

<template>
  <ErrorHandler :errors="resultError" />
  <ArticlePost v-for="post of postsShow" :post="post" />
  <button
    class="btn w-full"
    v-on:click="morePost()"
    v-if="!(postsIndex == postsResult.length - 1) && postsShow.length > 0"
  >
    More posts
  </button>
</template>
