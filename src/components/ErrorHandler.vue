<script setup>
defineProps({
  errors: Array
})
</script>

<template>
  <div class="ërror" v-if="errors">
    <p v-for="error in errors">{{ error }}</p>
  </div>
</template>

<style lang="scss">
.ërror {
  text-align: center;
  p { color: red; }
}
</style>
