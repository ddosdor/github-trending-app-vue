<script lang="ts">
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <h1 class="test-sass">
    <span class="test-sass__text">Hello Svelte</span>
  </h1>
  <Counter />
</main>

<style lang="scss">
.test-sass {
  font-size: 28px;

  &__text {
    color: red;
  }
}
</style>
