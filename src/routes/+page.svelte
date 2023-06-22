<script>
  import Character from './home/Character.svelte'
  import texts from "$lib/texts.json"
  import { lang } from '$lib/stores';
</script>

<svelte:head>
  <title>Juan Castro Arancibia | Software Engineer UX/UI Designer</title>
</svelte:head>

<!-- Home content -->
<section
  class="
  w-screen h-screen
  flex sm:justify-center 
  flex-col sm:flex-row 
  items:center sm:items-start
  pt-[10vh]
  "
>
  <div class="sm:ml-10 lg:ml-0 flex justify-center bg-opacity-0">
    <div
      class="
      absolute bg-secondary top-0 h-screen
      sm:z-0 w-32 sm:w-40"
    />
    <Character />
  </div>
  <header
    class="w-screen flex flex-col text-center justify-center sm:text-left sm:block sm:w-[600px] sm:ml-[5vw]"
  >
    <div class="ubuntu text-shadow text-white selection:bg-secondary selection:text-gray-700">
      <div
        class="
        absolute bg-primary w-screen left-0
        h-[8.5rem] sm:h-36 lg:h-48"
      />
      <h1
        class="
        relative z-10 font-bold
        text-[3rem] sm:text-[4rem] lg:text-[6rem]
        leading-[3.25rem] sm:leading-[4.6rem] lg:leading-[7rem] "
      >
        Juan
      </h1>
      <h2
        class="
        relative font-bold z-10
        mb-2 sm:mb-1 sm:-mt-2 lg:mb-0 lg:-mt-4 
        text-[2rem] lg:text-[3rem] 
        leading-[2.25rem] lg:leading-[3.25rem]
        "
      >
        Castro Arancibia
      </h2>
      <h3
        class="
        relative z-10 
        sm:text-[1rem] lg:text-[1.5rem]
        mb-4 sm:mb-8
        "
      >
        UX/UI Designer | Full-stack developer
      </h3>
    </div>
    <p
      class="
          dark:text-white
          hidden sm:block sm:w-[50vw] lg:w-full space-mono mb-8 leading-8
          selection:text-white selection:bg-primary
        "
    >
      {texts[$lang]?.home.about}
    </p>
    <a target="_blank" href="./Juan_Castro_Arancibia_CVes.pdf">
      <button
        class="
          cta ubuntu font-bold
          cursor-pointer relative 
          bg-primary text-sm text-white
          my-4 sm:my-0 p-[8px] sm:mr-4 rounded-[5px]
          border-[1px]
          border-primary-dark sm:border-transparent hover:border-white
        "
      >
        {texts[$lang]?.home.cv_cta}
      </button>
    </a>
    <a href="mywork.html">
      <button
        class="
          cta-2 ubuntu font-bold
          cursor-pointer relative 
          bg-secondary text-sm text-white
          my-4 sm:my-0 p-[8px] sm:mr-4 rounded-[5px]
          border-[1px]
          border-secondary-dark sm:border-transparent hover:border-white
        "
      >
        {texts[$lang]?.home.work_cta}
      </button>
    </a>
  </header>
</section>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

  .ubuntu {
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  .space-mono {
    font-family: 'Space mono', monospace;
  }

  .text-shadow {
    text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  }

  .cta {
    box-shadow: 2px 2px 0 #ad414c;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  }

  .cta-2 {
    box-shadow: 2px 2px 0 #6fa9a7;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
  }
</style>
