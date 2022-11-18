<script setup>
const props = defineProps(['title', 'route'])
</script>

<template>
  <li>
    <router-link
      :to="props.route"
      class="block py-2 px-4 text-sm text-gray-700 hover:bg-tileset-light-blue dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
      aria-current="page"
      >{{props.title}}</router-link
    >
  </li>
</template>

<style scoped></style>
