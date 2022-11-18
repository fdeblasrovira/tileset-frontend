<script setup>
import NavBar from "./components/header/NavBar.vue";
</script>

<template>
  <div class="flex min-w-full min-h-screen flex-col">
    <header class="flex min-h-min sticky top-0 z-10">
      <NavBar />
    </header>
    <main class="flex justify-center grow"><router-view></router-view></main>
  </div>
</template>

<style scoped></style>
