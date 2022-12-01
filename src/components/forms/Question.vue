<script setup>
import { ref, computed } from "vue";
const props = defineProps([
  "type",
  "question",
  "options",
  "leftColor",
  "leftLabel",
  "rightColor",
  "rightLabel",
]);

const currentValue = ref(props.defaultValue);

const background = computed(
  () =>
    `background: linear-gradient(90deg, ${props.leftColor} 0%, ${props.rightColor}); height:25px; border-radius: 5px;`
);
</script>

<template>
  <div class="relative">
    <div class="flex">
      <p class="w-full text-left text-sm font-medium">{{ props.leftLabel }}</p>
      <p class="w-full text-right text-sm font-medium">
        {{ props.rightLabel }}
      </p>
    </div>

    <div
      class="flex justify-between relative w-full mt-[-22px] top-9 left-0 px-3 pointer-events-none z-0"
    >
      <div></div>

      <div v-for="n in (props.max - props.min - 1)" class="range-space"></div>
      <div></div>
    </div>
    <input
      type="range"
      :value="props.defaultValue"
      :min="props.min"
      :max="props.max"
      class="w-full z-10 absolute"
      :style="background"
      disabled
    />
    <div class="flex mt-10">
      <p class="w-full text-left text-sm font-medium">{{ props.min }}</p>
      <p class="w-full text-center text-sm font-medium">{{ props.defaultValue }}</p>
      <p class="w-full text-right text-sm font-medium">
        {{ props.max }}
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
