<script setup>
import { ref } from "vue";
const props = defineProps(["label", "pureColor"]);

const pureColor = ref(props.pureColor)
</script>

<template>
  <div>
    <label class="block font-medium"
      >{{ props.label }}
    </label>
    <color-picker
        v-model:pureColor="pureColor"
        pickerType="chrome"
        disableHistory="false"
        disableAlpha="true"
        @change="$emit('update:pureColor', pureColor)"
      />
  </div>
</template>

<style scoped></style>
