<script setup lang="ts">

import Iconloupe from "@/components/icons/Iconloupe.vue";
import InputTypeText from "@/components/input/InputTypeText.vue";

const searchText = defineModel({
  type: String,
  required: true
})
const emit = defineEmits(['focus', 'enter'])


</script>

<template>
  <div>
    <InputTypeText
      v-model="searchText"
      placeholder="Введите ИНН, ОГРН, название компании"
      width="950px"
      @focus="emit('focus')"
      @enter="emit('enter')"
    >
      <template #append>
        <Iconloupe @click="emit('enter')"/>
      </template>
    </InputTypeText>
  </div>
</template>

<style scoped>

</style>
