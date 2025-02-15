<script setup lang="ts">
import { ref, watch, type PropType } from "vue";
import { executeLastDelay } from "@/assets/ts/delay";

import SearchInput from "@/components/search/SearchInput.vue";
import SearchOverlay from "@/components/search/SearchOverlay.vue";
import { notify } from "@kyvg/vue3-notification";
import { notifyError } from "@/assets/ts/error/handlers";

const props = defineProps({
  onSearch: {
    type: Function as PropType<(val: string) => Promise<string[]>>,
    required: false,
    default: () => {}
  }
})

const show = ref(false)
const delay = ref(false)
const searchText = ref('')
const options = ref([] as string[])

function onKeydownEnter() {
  if(searchText.value.length <= 2) {
    alert('Недостаточно букв для поиска. Минимум 3')
    return
  }
  alert('go search?')
}

function onfocus() {
  if(searchText.value != '')
    show.value = true
}

watch(() => searchText.value, (val) => {
  if(val == '')
    show.value = false
  else
    delay.value = true

  executeLastDelay(async () => {
    delay.value = false
    if(val == '') return

    try {
      options.value = await props.onSearch(val)
      show.value = true
    } catch (e) {
      notifyError(e)
    }
  })
})
</script>

<template>
  <div>
    <SearchInput v-model="searchText" @focus="onfocus" @enter="onKeydownEnter"/>
    <SearchOverlay v-model="show" :options="options" :delay="delay" :text="searchText"/>
  </div>
</template>

<style scoped lang="sass">

</style>
