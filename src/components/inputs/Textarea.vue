<script setup>
const props = defineProps(['label', 'name', 'placeholder'])

</script>

<template>
  <label :for="props.name" class="block text-sm font-medium"
    >{{props.label}}
    <textarea
    :name="props.name"
    :id="props.name"
    :autocomplete="props.name"
    :placeholder="props.placeholder"
    rows="3"
    class="mt-1 block w-full rounded-md border font-normal shadow-sm focus:border-tileset-blue focus:ring-tileset-blue sm:text-sm"
  ></textarea>
  </label
  >
  
</template>

<style scoped></style>
