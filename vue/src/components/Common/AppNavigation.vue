<template>
  <nav class="flex">
    <router-link to="/"
                 custom
                 v-slot="{ isActive, href, navigate }"
                 data-testid="AppNavigation__link-to-repository"
    >
      <a class="w-full text-center font-semibold py-2 px-3 rounded-l-lg border transition-colors duration-200"
         :class="[isActive ? 'bg-blue-700 border-blue-700 text-white' : 'bg-white border-gray-300 border-r-white hover:bg-gray-100 focus:bg-gray-200']"
         :href="href"
         @click="navigate"
      >
        Repositories
      </a>
    </router-link>
    <router-link to="/developers"
                 custom
                 v-slot="{ isActive, href, navigate }"
                 data-testid="AppNavigation__link-to-developers"
    >
      <a class="w-full text-center font-semibold py-2 px-3 rounded-r-lg border transition-colors duration-200"
         :class="[isActive ? 'bg-blue-700 border-blue-700 text-white' : 'bg-white border-gray-300 border-l-white hover:bg-gray-100 focus:bg-gray-200']"
         :href="href"
         @click="navigate"
      >
        Developers
      </a>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppNavigation',
});
</script>
