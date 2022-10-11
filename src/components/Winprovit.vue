<script setup>
import { ref, watch  } from 'vue'
import { getUserList, getPostList } from "@/services/Winprovit"

let usersData = ref([]);
let postsData = ref([]);

let postsResult = ref([]);

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
    console.log(postsResponse)
    postsData.value = postsResponse;
  })
  .catch((error) => {
    console.log("error get post list", error);
  });

getUserList()
  .then((usersResponse) => {
    usersData.value = usersResponse;
  })
  .catch((error) => {
    console.log("error get user list", error);
  });

watch([usersData, postsData], () => {
  if (usersData.value.length > 0 && postsData.value.length > 0) {
    mergeUserPost(postsData.value, usersData.value);
  }
});
</script>

<template>
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
  margin: 2rem;
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
