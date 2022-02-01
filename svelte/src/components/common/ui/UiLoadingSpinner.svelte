<div class="UiLoadingSpinner relative w-full h-full flex flex-col items-center justify-center animate-fade-in-tooltip">
  <div class="loader ease-linear rounded-full border-2 border-t-2 h-20 w-20" />
  <h2 class="font-semibold mt-2 absolute bottom-12 text-md">
  Loading...
  </h2>
  <small>Please wait</small>
</div>

<style lang="scss">
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .UiLoadingSpinner {
    .loader {
      @apply border-blue-200 border-t-blue-500;
      -webkit-animation: spinner 1s linear infinite;
      animation: spinner 1s linear infinite;
    }
  }
</style>