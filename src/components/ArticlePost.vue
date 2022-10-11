<script setup>
defineProps({
  post: Object
})
</script>

<template>
  <article class="post" v-if="post">
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
