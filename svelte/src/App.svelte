<script lang="ts">
import AppHeader from '@/components/common/AppHeader.svelte';
import UiMainContent from '@/components/common/ui/UiMainContent.svelte';
</script>

<AppHeader />
<div class="relative bottom-28 h-auto">
  <UiMainContent>
    Eloo
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