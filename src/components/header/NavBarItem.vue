<script setup>
const props = defineProps(['title', 'route'])
</script>

<template>
  <li>
    <router-link
      :to="props.route"
      class="hover:text-tileset-blue block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
      aria-current="page"
      >{{props.title}}</router-link
    >
  </li>
</template>

<style scoped></style>
