<script setup lang="ts">
import type { PropType } from "vue";

const show = defineModel({
  type: Boolean
})
const props = defineProps({
  options: {
    type: Object as PropType<any[]>,
    required: false,
    default: []
  },
  text: String,
  delay: Boolean
})
</script>

<template>
  <v-menu
    v-model="show"
    transition="slide-y-transition"
    location-strategy="static"
    open-delay="100"
    close-delay="10ms"
    scroll-strategy="none"
    contained
    width="100%"
    :close-on-content-click="false"
    style="position: relative"
  >
    <div class="card mt_10">
      <label v-if="text && text.length <= 2">Нужно больше информации для поиска</label>
      <label v-else-if="delay">Обновляем данные...</label>
      <div v-else-if="options.length">
        <label>Выберете вариант или продолжите ввод</label>
        <div
          v-for="item in options"
          class="flex-col dadata-item dadata-item-padding"
        >
          {{item}}
        </div>
      </div>
      <div v-else>
        <div class="dadata-item-padding"><label>По вашему запросу ничего не найдено</label></div>
      </div>
    </div>

  </v-menu>
</template>

<style scoped lang="sass">

</style>
