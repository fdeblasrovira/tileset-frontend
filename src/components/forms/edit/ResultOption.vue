<script setup>
import Input from "../../inputs/Input.vue";
import Textarea from "../../inputs/Textarea.vue";
const props = defineProps(["data", "index", "open", "close"]);
const emit = defineEmits(["resultClicked"]);

function openListItem(e) {
  console.log("resultClicked");
  emit("resultClicked", props.data.id);
}
</script>

<template>
  <div
    @click="openListItem"
    class="flex flex-col container min-w-full mx-auto items-center justify-center hover:bg-tileset-grey-2 bg-tileset-grey-1 dark:bg-gray-800 shadow list-item-container"
  >
    <ul class="flex flex-col w-full">
      <li class="flex flex-row">
        <div
          class="select-none cursor-pointer hover:bg-gray-50 flex flex-1 items-center p-4"
        >
          <div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
            <a href="#" class="block relative">
              <img
                alt="profil"
                :src="props.data.picture"
                class="mx-auto object-cover rounded-full h-10 w-10"
              />
            </a>
          </div>
          <div class="flex-1 pl-1">
            <div class="font-medium dark:text-white">
              {{ props.data.name }}
            </div>
            <div class="text-gray-600 dark:text-gray-200 text-sm">
              {{ props.data.description }}
            </div>
          </div>

          <button class="w-10 text-right flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 transition-all"
              :class="[props.open && !props.close ? '-rotate-90' : 'rotate-90']"
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
  <div
    v-bind:class="[
      props.open ? 'itemListOpen' : '',
      props.close ? 'itemListClose' : '',
    ]"
    class="flex bg-tileset-white w-full border-none h-0 overflow-hidden"
  >
    <div
      class="flex grow flex-row h-full overflow-hidden p-4"
    >
        <Input v-model="props.data.name" label="Name" type="text" />
    </div>
  </div>
</template>

<style scoped>
@media screen and (max-width: 407px) {
  @keyframes expand {
    from {
      height: 0px;
    }
    to {
      height: 228px;
    }
  }

  @keyframes collapse {
    from {
      height: 228px;
    }
    to {
      height: 0px;
    }
  }
  .itemListOpen {
    margin-top: 0 !important;
    height: 228px;
    animation-name: expand;
    animation-duration: 0.3s;
  }
  .itemListClose {
    height: 0px;
    animation-name: collapse;
    animation-duration: 0.3s;
  }
}
@media screen and (min-width: 408px) {
  @keyframes expand {
    from {
      height: 0px;
    }
    to {
      height: 152px;
    }
  }

  @keyframes collapse {
    from {
      height: 152px;
    }
    to {
      height: 0px;
    }
  }
  .itemListOpen {
    margin-top: 0 !important;
    height: 152px;
    animation-name: expand;
    animation-duration: 0.3s;
  }
  .itemListClose {
    height: 0px;
    animation-name: collapse;
    animation-duration: 0.3s;
  }
}
@media screen and (min-width: 703px) {
  @keyframes expand {
    from {
      height: 0px;
    }
    to {
      height: 76px;
    }
  }

  @keyframes collapse {
    from {
      height: 76px;
    }
    to {
      height: 0px;
    }
  }
  .itemListOpen {
    margin-top: 0 !important;
    height: 76px;
    animation-name: expand;
    animation-duration: 0.3s;
  }
  .itemListClose {
    height: 0px;
    animation-name: collapse;
    animation-duration: 0.3s;
  }
}
</style>
