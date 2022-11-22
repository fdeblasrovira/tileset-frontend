<script setup>
const props = defineProps(['label', 'name', 'type'])

</script>

<template>
  <label for="{{props.name}}" class="block text-sm font-medium"
    >{{props.label}}</label
  >
  <input
    type="{{props.type}}"
    name="{{props.name}}"
    id="{{props.name}}"
    autocomplete="{{props.type}}"
    class="mt-1 block w-full h-10 rounded-md border border-tileset-grey-5 shadow-sm focus:border-tileset-blue focus:ring-tileset-blue sm:text-sm"
  />
</template>

<style scoped></style>
