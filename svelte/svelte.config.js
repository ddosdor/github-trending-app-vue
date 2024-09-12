import sveltePreprocess from 'svelte-preprocess';
import * as sass from 'sass';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default {
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },    
    sass: {
      renderSync: true,
      implementation: sass,
    },
  }),
};
