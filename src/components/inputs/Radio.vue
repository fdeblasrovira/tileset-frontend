<script setup>
const props = defineProps(["label", "name"]);
</script>

<template>
  <div class="flex items-center">
    <input
      :id="props.name"
      :name="props.name"
      type="radio"
      class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
    />
    <label
    :for="props.name"
      class="ml-3 block text-sm font-medium text-gray-700"
      >{{ props.label }}</label
    >
  </div>
</template>

<style scoped></style>
