<script setup>
import Input from "../inputs/Input.vue";
import Textarea from "../inputs/Textarea.vue";
import AvatarPicture from "../inputs/AvatarPicture.vue";
import Radio from "../inputs/Radio.vue";
import Range from "../inputs/Range.vue";
import Checkbox from "../inputs/Checkbox.vue";
import Select from "../inputs/Select.vue";
import FullButton from "../buttons/FullButton.vue";
import { useCreateTabulation } from "@/stores/createTabulation";

function saveContents(){

}

const tabData = useCreateTabulation();
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
        <label class="w-full text-left text-sm font-medium">Attributes</label>
        <Range
          min="0"
          max="10"
          defaultValue="2"
          leftColor="#1d3557"
          leftLabel="Evil"
          rightColor="#f4f3ee"
          rightLabel="Pure"
        >
        </Range>
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
