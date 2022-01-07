<template>
  <AppHeader />
  <AppMain>
    <RouterView />
  </AppMain>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from '@shared/components/layout/AppHeader.vue';
import AppMain from '@shared/components/layout/AppMain.vue';
import AppFooter from '@shared/components/layout/AppFooter.vue';
</script>
