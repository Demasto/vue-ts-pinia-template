<script setup lang="ts">
const props = defineProps({
  placeholder: String,
  padding: {
    type: String,
    default: '15px 40px 15px 15px'
  },
  width: {
    type: String,
    default: 'max-content'
  },
  max: {
    type: Number,
    default: 100
  }
})

const text = defineModel({
  type: String,
  required: true
})

const emit = defineEmits(['focus', 'enter'])

function onblur(ev: Event) {
  const el = ev.currentTarget as HTMLInputElement
  if (!el) return
  el.value = el.value.trim()
}

let prev = ''
function oninput(event: Event) {
  if (!event.target) return

  let el = event.target as HTMLInputElement
  if (el.value.length > props.max) {
    el.value = prev
    return
  }
  const val = el.value.trim()
  text.value = val
  prev = val
}

</script>

<template>
  <div class="input-text">
    <input
      type="text"
      @blur="onblur"
      @input="oninput"
      @focus="emit('focus')"
      @keydown.enter="emit('enter')"
      :placeholder="placeholder"
    >
    <div class="append">
      <slot name="append"/>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.input-text
  position: relative
  width: v-bind(width)

input
  padding: v-bind(padding)
  width: 100%

.append
  position: absolute
  top: calc(50% - 15px)
  right: 10px

</style>
