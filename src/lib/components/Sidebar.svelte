<script lang="ts">
  import texts from "../texts.json"
  import { lang } from "$lib/stores";

  let active = false
  const toggleMenu = () => (active = !active)
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
  on:click={toggleMenu}
  class="
		icon-align-left 
		fixed top-4 left-4 cursor-pointer z-20
		text-[2rem]	text-primary hover:text-secondary
		transition-colors duration-200
	"
/>
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={toggleMenu}
  class={`fixed z-50 w-screen h-screen top-0 opacity-0 ${active ? 'left-0' : '-left-full'}`}
/>
<nav
  class={`
		z-50 w-[30vw] min-w-[200px] h-screen fixed
		bg-dark-color text-white
		top-0 ${active ? 'left-0' : '-left-full'}
		flex justify-center
		transition-all duration-500 ease-out
	`}
>
  <ul class="h-full w-4/5 mx-auto">
    <li class="mb-[11vh]">
      <!-- svelte-ignore a11y-no-static-element-interactions -->
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => (active = !active)}
        class="icon-x-circle relative top-8 text-[2rem] ml-2 cursor-pointer"
      />
    </li>
    <li class="mb-[11vh]">
      <a
        on:click={() => active = false}
        href="/"
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
      >
        <span class="icon-home" /> <span class="ml-4">{texts[$lang]?.sidebar.home}</span>
      </a>
    </li>
    <li class="mb-[11vh]">
      <a
        on:click={() => active = false}
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
        target="_blank"
        href="./Juan_Castro_Arancibia_CVes.pdf"
      >
        <span class="icon-user" /><span class="ml-4">{texts[$lang]?.sidebar.download_cv}</span>
      </a>
    </li>
    <li class="mb-[11vh]">
      <a
        on:click={() => active = false}
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
        href="/mywork"
      >
        <span class="icon-paperclip" /><span class="ml-4">{texts[$lang]?.sidebar.my_work}</span>
      </a>
    </li>
    <li class="mb-[11vh]">
      <a
        on:click={() => active = false}
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
        href="/contact"
      >
        <span class="icon-message-circle" /><span class="ml-4">{texts[$lang]?.sidebar.contact}</span>
      </a>
    </li>
  </ul>
</nav>

<style>
  a {
    font-family: 'Ubuntu', sans-serif;
  }
</style>
