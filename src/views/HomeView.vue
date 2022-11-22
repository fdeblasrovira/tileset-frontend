<script setup>
import List from "../components/list/List.vue";
</script>

<template>
  <div class="flex grow flex-col justify-center content-center">
    <div class="flex justify-center">
      <div
        class="relative flex grow flex-col max-w-[90%] xl:max-w-[1024px] 2xl:max-w-[1024px] h-[100%] bg-tileset-full-white shadow-2xl p-6 rounded-lg"
      >
        <List />
      </div>
    </div>
  </div>
</template>
