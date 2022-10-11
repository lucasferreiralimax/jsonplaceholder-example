<script setup>
import Winprovit from './components/Winprovit.vue'
import pkg from '../package.json';
</script>

<template>
  <header>
    <img alt="Winprovit logo" class="logo winprovit" src="./assets/winprovit.png" width="150" height="70" />
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    Version {{ pkg.version }}
  </header>

  <main>
    <Winprovit />
  </main>

  <footer>
    <a href="https://github.com/lucasferreiralimax" target="_blank">Brasil @lucasferreiralimax</a>
  </footer>
</template>

<style scoped>
.logo {
  display: block;
  margin: 2rem auto 0;
}
@media (prefers-color-scheme: light) {
  .winprovit {
    filter: invert(1);
  }
}

header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  line-height: 1.5;
}

footer {
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
}
</style>
