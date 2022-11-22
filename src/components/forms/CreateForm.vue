<script setup>
import Input from "../inputs/Input.vue";
import Textarea from "../inputs/Textarea.vue";
import AvatarPicture from "../inputs/AvatarPicture.vue";
import Radio from "../inputs/Radio.vue";
import Checkbox from "../inputs/Checkbox.vue";
import Select from "../inputs/Select.vue";
import FullButton from "../buttons/FullButton.vue";
</script>

<template>
  <div class="flex grow flex-col justify-between">
    <div
      class=" sm:overflow-hidden sm:rounded-md bg-tileset-full-white flex flex-start flex-col grow"
    >
      <div class="border rounded-md border-tileset-grey-2 space-y-6 px-4 py-5 sm:p-6">
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
          <label class="block">Visibility</label>

          <Radio label="Public" name="general-info-visibility" id="visibility" />
          <Radio label="Private" name="general-info-visibility" id="no-visibility" />
        </div>
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
      </div>
    </div>
    <FullButton
      @click="goToNext"
      text="Next"
      color="bg-tileset-green"
      hover="hover:bg-tileset-green-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        class="w-6 h-6 stroke-tileset-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </FullButton>
  </div>
</template>

<style scoped>
</style>
