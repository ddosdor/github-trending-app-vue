<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <h1 class="text-2xl">
    <span class="text-red-500">Hello Svelte</span>
  </h1>
  <Counter />
</main>

<style global lang="scss">
@import 'src/assets/theme/index.scss';  
</style>