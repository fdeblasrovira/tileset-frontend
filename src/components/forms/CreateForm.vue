<script setup>
import { reactive } from "vue";
import Input from "../inputs/Input.vue";
import Textarea from "../inputs/Textarea.vue";
import AvatarPicture from "../inputs/AvatarPicture.vue";
import Radio from "../inputs/Radio.vue";
import Range from "../inputs/Range.vue";
import Checkbox from "../inputs/Checkbox.vue";
import Select from "../inputs/Select.vue";
import FullButton from "../buttons/FullButton.vue";
import { useCreateTabulation } from "@/stores/createTabulation";

const tabData = useCreateTabulation();
const formData = reactive({
  generalInfo: {},
  attributes: [],
  questions: [],
  results: [],
});

function addAttribute() {
  const defaultAttribute = {
    min: "-10",
    max: "10",
    defaultValue: "0",
    leftColor: "#1d3557",
    leftLabel: "Boring",
    rightColor: "#f4f3ee",
    rightLabel: "Amazing",
  };
  formData.attributes.push(defaultAttribute);
}
function saveContents() {}
</script>

<template>
  <div class="flex grow flex-col justify-between">
    <div
      class="sm:overflow-hidden sm:rounded-md bg-tileset-full-white flex flex-start flex-col grow"
    >
      <!-- General info tab contents -->
      <div
        v-if="tabData.currentTab == 1"
        class="border rounded-md border-tileset-grey-2 space-y-6 px-4 py-5 sm:p-6"
      >
        <Input
          label="Form name"
          name="form-name"
          type="text"
          placeholder="This is my form's name"
        />
        <Textarea
          label="Form description"
          name="form-description"
          placeholder="Description of the form"
        />
        <AvatarPicture label="Form picture" />
        <div class="block text-sm font-medium mt-3">
          <label class="block text-base font-medium">Visibility</label>

          <Radio
            label="Public"
            name="general-info-visibility"
            id="visibility"
          />
          <Radio
            label="Private"
            name="general-info-visibility"
            id="no-visibility"
          />
        </div>
      </div>
      <div
        v-if="tabData.currentTab == 2"
        class="border rounded-md border-tileset-grey-2 space-y-6 px-4 py-5 sm:p-6"
      >
        <label class="w-full text-left font-medium">Attributes</label>
        <template v-for="attribute in formData.attributes">
          <div
            class="border rounded-md border-tileset-grey-2 space-y-6 px-4 py-5 sm:p-6"
          >
            <Range
              :min="attribute.min"
              :max="attribute.max"
              :defaultValue="attribute.defaultValue"
              :leftColor="attribute.leftColor"
              :leftLabel="attribute.leftLabel"
              :rightColor="attribute.rightColor"
              :rightLabel="attribute.rightLabel"
            >
            </Range>
            <div class="flex justify-between">
              <FullButton
                @click="deleteAttribute"
                text="Delete"
                color="bg-tileset-red"
                hover="hover:bg-tileset-red-1"
                class="mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 stroke-tileset-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </FullButton>
              <FullButton
                @click="editAttribute"
                text="Edit"
                color="bg-tileset-green"
                hover="hover:bg-tileset-green-1"
                class="mx-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="w-6 h-6 stroke-tileset-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </FullButton>
            </div>
          </div>
        </template>

        <FullButton
          @click="addAttribute"
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
      <FullButton
        @click="saveContents"
        text="Save"
        color="bg-tileset-green"
        hover="hover:bg-tileset-green-1"
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
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </FullButton>
    </div>
  </div>
</template>

<!-- <div class="block text-sm font-medium mt-3">
          <label class="block">Select one </label>

          <Checkbox label="This is a test 1" name="checkbox-1" id="checkbox1" />
          <Checkbox
            label="This is a test 1234567"
            name="checkbox-1"
            id="checkbox2"
          />
          <Checkbox label="This" name="checkbox-1" id="checkbox3" />
        </div>
        <Select label="Select option" id="select3">
          <option value="1">Japan</option>
          <option value="2">Spain</option>
          <option value="3">China</option>
        </Select> -->

<style scoped></style>
