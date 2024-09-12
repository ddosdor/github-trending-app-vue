<script lang="ts">
import UiLoadingSpinner from './UiLoadingSpinner.svelte';

export let isLoading = false;
</script>

<div class="UiLoadingContentWrapper relative">
  {#if isLoading}
  <div class="absolute top-14 w-full animate-fade-in-down">
    <UiLoadingSpinner data-testid="ui-loading-spinner" />
  </div>
  {:else}
  <div>
    <slot />
  </div>
  {/if}
</div>
