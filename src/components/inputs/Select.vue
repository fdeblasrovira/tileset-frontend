<script setup>
const props = defineProps(["label", "name", "id"]);
</script>

<template>
  <label :for="props.id" class="block font-medium"
    >Country
    <select
      :id="props.id"
      :name="props.name"
      class="mt-1 block w-full rounded-md font-normal border bg-tileset-full-white py-2 px-3 shadow-sm focus:border-tileset-blue focus:ring-tileset-blue focus:outline-none sm:text-sm"
    >
      <slot></slot></select
  ></label>
</template>

<style scoped></style>
