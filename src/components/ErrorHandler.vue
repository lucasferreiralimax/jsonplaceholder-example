<script setup>
defineProps({
  errors: Array
})
</script>

<template>
  <div class="error">
    <p v-for="error in errors">{{ error }}</p>
  </div>
</template>

<style lang="scss">
.error {
  text-align: center;
  p { color: red; }
}
</style>
