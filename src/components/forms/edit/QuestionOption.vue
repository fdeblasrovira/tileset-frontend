<script setup>
const props = defineProps(["data", "open", "close"]);
const emit = defineEmits(["listOptionClicked"]);

function openListItem() {
  emit("listOptionClicked", props.data.formId);
}

function deleteOption() {}
</script>

<template>
  <div
    @click="openListItem"
    class="flex flex-col container min-w-full mx-auto items-center justify-center hover:bg-tileset-grey-2 bg-tileset-grey-1 shadow"
  >
    <ul class="flex flex-col w-full">
      <li class="flex flex-row">
        <div class="select-none cursor-pointer flex flex-1 items-center p-1">
          <button class="w-10 text-right flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 h-4 transition-all ml-1"
              :class="[props.open && !props.close ? '-rotate-90' : 'rotate-90']"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div class="text-left w-full">{{ props.data.text }}</div>
          <button
            type="submit"
            class="bg-tileset-red p-1 ml-2 text-sm font-medium text-white rounded hover:bg-tileset-red-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-4 h-4 text-tileset-full-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </div>
      </li>
    </ul>
  </div>
  <div
    v-bind:class="[
      props.open ? 'visible' : 'hidden',
      props.close ? 'hidden' : '',
    ]"
    class="bg-tileset-white w-full border-none"
  >
    <div
      class="flex flex-row justify-between items-center h-full overflow-hidden flex-wrap p-2"
    >
      <div class="flex grow-0">
        <button
          type="submit"
          class="bg-tileset-red p-1 text-sm font-medium text-white rounded hover:bg-tileset-red-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4 text-tileset-full-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
      <div class="flex grow mx-2 justify-between">
        <p class="text-left">aaaaa</p>
        <p class="text-center">0</p>
        <p class="text-right">bbbb</p>
      </div>
      <div class="flex grow-0">
        <button
          type="submit"
          class="bg-tileset-red p-1 text-sm font-medium text-white rounded hover:bg-tileset-red-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-4 h-4 text-tileset-full-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>