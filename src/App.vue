<script setup>
import NavBar from "./components/header/NavBar.vue";
</script>

<template>
  <div class="flex min-w-full min-h-screen flex-col">
    <header class="flex min-h-min sticky top-0 z-10">
      <NavBar />
    </header>
    <main class="flex justify-center grow overflow-y-scroll">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
