<script setup>
import Example from './components/Example.vue'
import pkg from '../package.json';

const version = pkg.version;
</script>

<template>
  <header>
    <a class="logo-link" href="https://github.com/lucasferreiralimax" target="_blank">
      <img alt="Vue logo" class="logo vue" src="./assets/logo.svg" width="125" height="125" />
    </a>
    Version {{ version }}
  </header>

  <main>
    <Example data-testid="example" />
  </main>

  <footer>
    <a class="author" href="https://github.com/lucasferreiralimax" target="_blank">Brasil @lucasferreiralimax</a>
  </footer>
</template>

<style lang="scss" scoped>
.logo {
  display: block;
  margin: 2rem auto 0;
  transition: .3s all;
  &:hover {
    transform: scale(1.2);
  }
}

.logo-link {
  background: transparent;
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
