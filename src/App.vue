<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Notifications } from "@kyvg/vue3-notification";
</script>

<template>
  <header>
    <nav class="flex-row align-center justify-center ga-4">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>

  <RouterView />
  <Notifications classes="notification" :duration="8000"/>

</template>

<style lang="sass" scoped>
@use '@/assets/sass/vars'

header
  background: vars.$color-card
  height: vars.$header-height

nav
  height: 100%

</style>
