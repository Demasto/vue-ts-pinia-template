<template>
  <button type="button" class="link">
    <slot/>
  </button>
</template>

<style lang="sass">
//@use "@/assets/sass/vars"
button
  display: flex
  justify-content: center
  align-items: center
  padding: 5px
  border-radius: 100px !important

</style>
