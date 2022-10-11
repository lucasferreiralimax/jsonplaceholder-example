<script setup>
import { reactive, ref, watch  } from 'vue'
import mergeUserPost from '@/utils/mergeUserPost'
import { getUserList, getPostList } from "@/services/Winprovit"

import ErrorHandler from './ErrorHandler.vue';
import ArticlePost from './ArticlePost.vue';

let usersData = ref([]);
let postsData = ref([]);

let postsResult = ref([]);
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
    postsResult.value = mergeUserPost(postsData.value, usersData.value);
  }
});
</script>

<template>
  <ErrorHandler :errors="resultError" />
  <ArticlePost v-for="post of postsResult" :post="post" />
</template>
