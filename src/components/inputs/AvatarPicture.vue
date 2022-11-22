<script setup>
import { ref } from "vue";
const props = defineProps(["label"]);

const image = ref("");

function previewFiles(event) {
  console.log(event.target.files);
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    image.value = reader.result;
    console.log(image.value);
    
    /* document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`; */
  });
  reader.readAsDataURL(event.target.files[0]);
}
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700">{{
      props.label
    }}</label>
    <div class="mt-1 flex items-center">
      <span :style="{ 'backgroundImage': 'url(' + image + ')'}"
        class="inline-flex h-12 w-12 overflow-hidden rounded-full bg-tileset-grey-2 bg-contain"
      >
        <svg v-if="image.length <= 0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="flex w-6 h-6 m-auto self-center"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </span>
      <input
        @change="previewFiles"
        type="file"
        id="image-input"
        class="grow ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 shadow-sm"
      />
    </div>
  </div>
</template>

<style scoped></style>
