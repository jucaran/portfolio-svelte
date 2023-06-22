<script>
  import texts from '$lib/texts.json'
  import { lang } from '$lib/stores'
</script>

<svelte:head>
  <title>Juan Castro Arancibia | {texts[$lang]?.work.title}</title>
</svelte:head>

<main
  class="
    ubuntu transition-all duration-300
    w-screen h-screen 
    selection:bg-secondary selection:text-light-black"
>
  <div
    class="
      bg-secondary
      absolute
      top-[20vh]
      w-screen
      h-[30vw] sm:h-[25vh]
      sm:min-w-[450px]
  "
  />
  <div
    class="
      bg-primary absolute
      -translate-x-1/2
      h-screen
      w-[30vw] sm:w-[30vh]
      left-1/3 sm:left-[10%] lg:left-1/4
    "
  />
  <div
    class="
      backdrop-blur-sm
      absolute text-light-color shadow
      bg-light-black bg-opacity-40
      dark:bg-opacity-80 dark:border-2 dark:border-light-color
      w-[95vw] sm:w-[70vw] max-w-lg min-w-[300px]
      h-[80vh] sm:h-[90vh] max-h-[700px]
      rounded-3xl
      left-1/2 -translate-x-1/2
      top-[4.5rem] md:top-1/2 md:-translate-y-1/2
      flex flex-col
    "
  >
    <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 class="ubuntu text-3xl px-6 sm:text-3xl font-bold text-light-color text-center">
        {texts[$lang]?.work.building}
      </h2>
    </div>
  </div>
</main>

<style>
  .ubuntu {
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
