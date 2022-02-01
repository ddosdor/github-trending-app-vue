<script lang="ts">
import RouterView from './RouterView.svelte';
import AppHeader from '@/components/common/AppHeader.svelte';
import UiMainContent from '@/components/common/ui/UiMainContent.svelte';
import UiLoadingContentWrapper from './components/common/ui/UiLoadingContentWrapper.svelte';
</script>

<AppHeader />
<div class="relative bottom-28 h-auto">
  <UiMainContent>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <UiLoadingContentWrapper isLoading={false}>
      <RouterView />
    </UiLoadingContentWrapper>
  </UiMainContent>
</div>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    html, body {
      @apply bg-gray-200 text-gray-700 h-full;    
    }
  }
</style>