<script setup>
import { ref } from "vue";
const props = defineProps(["data", "position"]);

const openState = ref(false);
function openListItem(e) {
  let clickedElement = e.target.closest(".list-item-container");
  console.log(clickedElement);
}
</script>

<template>
  <div
    @click="openListItem"
    class="flex flex-col container min-w-full mx-auto items-center justify-center hover:bg-tileset-grey-2 bg-tileset-grey-1 dark:bg-gray-800 shadow list-item-container"
  >
    <ul class="flex flex-col divide-y w-full">
      <li class="flex flex-row">
        <div
          class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4"
        >
          <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
            <a href="#" class="block relative">
              <img
                alt="profil"
                :src="props.data.formImage"
                class="mx-auto object-cover rounded-full h-10 w-10"
              />
            </a>
          </div>
          <div class="flex-1 pl-1">
            <div class="font-medium dark:text-white">
              {{ props.data.formName }}
            </div>
            <div class="text-gray-600 dark:text-gray-200 text-sm">
              {{ props.data.formDescription }}
            </div>
          </div>

          <div class="flex flex-col justify-center ml-4 invisible sm:visible">
            <div class="flex pl-1">
              <div class="flex text-gray-600 dark:text-gray-200 text-sm">
                {{ props.data.views }}
              </div>

              <div class="flex ml-2 flex-row justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="w-5 h-5 flex"
                >
                  <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                  <path
                    fill-rule="evenodd"
                    d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
          <button class="w-10 text-right flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
