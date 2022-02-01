<script lang="ts" context="module">
import router from 'page';

import Home from '@/views/Home.svelte';
import About from '@/views/About.svelte';
</script>

<script lang=ts>
let page = Home;

router('/', () => page = Home);
router('/about', () => page = About);

router.start();
</script>

<svelte:component this={page} />
