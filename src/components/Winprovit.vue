<script setup>
import { reactive, ref, watch  } from 'vue'
import { getUserList, getPostList } from "@/services/Winprovit"
import ErrorHandler from './ErrorHandler.vue';

let usersData = ref([]);
let postsData = ref([]);

let postsResult = ref([]);
let resultError = reactive([]);

const mergeUserPost = (posts, users) => {
  const arrayMerge = [];

  posts.map((post) => {
    const haveEqualId = (user) => user.id === post.userId
    const userWithEqualId= users.find(haveEqualId)

    arrayMerge.push(Object.assign({}, post, userWithEqualId));
  })

  console.log('result', arrayMerge);
  postsResult.value = arrayMerge;
}

getPostList()
  .then((postsResponse) => {
    postsData.value = postsResponse;
  })
  .catch((error) => {
    resultError.push(`Error get post list - ${error.message}`)
    console.log("Error get post list", error);
  });

getUserList()
  .then((usersResponse) => {
    usersData.value = usersResponse;
  })
  .catch((error) => {
    resultError.push(`Error get user list - ${error.message}`)
    console.log("Error get user list", error);
  });

watch([usersData, postsData], () => {
  if (usersData.value.length > 0 && postsData.value.length > 0) {
    mergeUserPost(postsData.value, usersData.value);
  }
});
</script>

<template>
  <ErrorHandler :errors="resultError" />
  <article class="post" v-for="post in postsResult">
    <h2 class="title">Title: {{ post.title }}</h2>
    <div class="info">
      <p><b>Author:</b> {{ post.name }}</p>
      <p><b>Email:</b> {{ post.email }}</p>
      <p><b>Company:</b> {{ post.company.name }}</p>
    </div>
    <p class="content">{{ post.body }}</p>
  </article>
</template>

<style lang="scss">
.post {
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid var(--color-border);
  border-radius: 10px;
  .title { text-transform: capitalize; }
  .info {
    display: flex;
    flex-direction: row;
    margin-bottom: 1rem;
    @media (max-width: 1024px) {
      flex-direction: column;
    }
    b {
      font-weight: bold;
      color: hsla(160, 100%, 37%, 1);
    }
    p { margin-right: 1rem; }
  }
  .content {
    background: var(--color-border);
    padding: 1rem;
    border-radius: 10px;
  }
}
</style>
