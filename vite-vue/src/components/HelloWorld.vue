<template>
  <div class="HelloWorld"
       @click="ello"
  >
    Component HelloWorld
  </div>
</template>

<script setup lang="ts">
function ello(dupa) {
  console.log('Elooo');
  const cos = dupa;
}

ello('jakis napis');
</script>

<style lang="sass" scoped>
.HelloWorld
  // component style
</style>
