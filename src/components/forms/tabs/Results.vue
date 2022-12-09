<script setup>
import { watch, ref } from "vue";
import Input from "../../inputs/Input.vue";
import Textarea from "../../inputs/Textarea.vue";
import Date from "../../inputs/Date.vue";
import Radio from "../../inputs/Radio.vue";
import Checkbox from "../../inputs/Checkbox.vue";
import Select from "../../inputs/Select.vue";
import QuestionOption from "../../forms/edit/QuestionOption.vue";
import FullButton from "../../buttons/FullButton.vue";
import DefaultValues from "../../../config/defaultValues";
import Modal from "../../overlays/Modal.vue";
import { v4 as uuidv4 } from "uuid";
import ResultOption from "../edit/ResultOption.vue";

const props = defineProps(["results", "attributes"]);
const emits = defineEmits(["onResultsChange"]);

const results = ref(props.results);
const attributes = ref(props.attributes);

// After any change to the questions, we tell the parent component to update the value
watch(results, (newResults) => {
  emit(onResultsChange(newResults));
});

// Toggle for the delete modal
const showResultDeleteModal = ref(false);

const openedResult = ref(-1);
const lastOpenedResult = ref(-1);

function onResultClicked(index) {
    lastOpenedResult.value =
    openedResult.value == lastOpenedResult.value ? 0 : openedResult.value;
    openedResult.value = index;
}

// It keeps a reference to the selected item by the user
const selectedResult = ref(null);

// Toggle delete modal
function displayResultDeleteModal(display, index) {
  showResultDeleteModal.value = display;
  selectedResult.value = index;
}

function deleteResult() {
  showResultDeleteModal.value = false;

  // Remove result in the specified index
  results.value.splice(selectedResult.value, 1);
}

// Adds an item to the result list
function addResult() {
  let result = DefaultValues.defaultResult();

  //Generate a unique ID for this specific result
  result.id = uuidv4();

  results.value.push({ ...result });
  console.log(results.value);
}
</script>

<template>
  <div
    class="border rounded-md border-tileset-grey-2 space-y-3 px-4 py-5 sm:p-6"
  >
    <label class="w-full text-left font-medium">Results</label>
    <div
      v-if="results.length <= 0"
      class="w-full h-10 text-center items-center m-auto font-light italic"
    >
      There are no results yet
    </div>
    <ResultOption
        v-for="(result, index) in results"
        @result-clicked="onResultClicked"
        :data="result"
        :key="result.id"
        :index="index"
        :open="openedResult == result.id"
        :close="lastOpenedResult == result.id"
      />
    <FullButton
      @click="addResult()"
      text="Add"
      color="bg-tileset-blue"
      hover="hover:bg-tileset-blue-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3.5"
        stroke="currentColor"
        class="w-6 h-6 stroke-tileset-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 6v12m6-6H6"
        />
      </svg>
    </FullButton>
  </div>
  <!-- Result delete modal -->
  <Modal
    :open="showResultDeleteModal"
    title="Delete question"
    description="Are you sure you want to delete this question?"
    svgBackgroundColor="bg-tileset-red"
  >
    <template #svg>
      <svg
        class="h-6 w-6 stroke-tileset-white -mt-1"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 10.5v3.75m-9.303 3.376C1.83 19.126 2.914 21 4.645 21h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 4.88c-.866-1.501-3.032-1.501-3.898 0L2.697 17.626zM12 17.25h.007v.008H12v-.008z"
        />
      </svg>
    </template>
    <template #buttons>
      <div class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          @click="deleteResult()"
          type="button"
          class="inline-flex w-full justify-center rounded-md border border-transparent bg-tileset-red px-4 py-2 text-base font-medium text-tileset-full-white shadow-sm hover:bg-tileset-red-1 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
        >
          Delete
        </button>
        <button
          @click="showResultDeleteModal = false"
          type="button"
          class="mt-3 inline-flex w-full justify-center rounded-md border border-tileset-grey-5 px-4 py-2 text-base font-medium shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        >
          Cancel
        </button>
      </div>
    </template>
  </Modal>
</template>

<style scoped></style>
