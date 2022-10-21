<script>
  let active = false
  const toggleMenu = () => {}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<span
  on:click={() => (active = !active)}
  class="
		icon-align-left 
		fixed top-4 left-4 cursor-pointer z-20
		text-[2rem]	text-primary hover:text-secondary
		transition-colors duration-200
	"
/>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => (active = !active)}
  class={`fixed z-10 w-screen h-screen top-0 opacity-0 ${active ? 'left-0' : '-left-full'}`}
/>
<nav
  class={`
		z-20 w-[30vw] min-w-[200px] h-screen fixed
		bg-dark-color text-white
		top-0 ${active ? 'left-0' : '-left-full'}
		flex justify-center
		transition-all duration-300 ease-out
	`}
>
  <ul class="h-full w-4/5 mx-auto">
    <li class="mb-[11vh]">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <span
        on:click={() => (active = !active)}
        class="icon-x-circle relative top-8 text-[2rem] ml-2 cursor-pointer"
      />
    </li>
    <li class="mb-[11vh]">
      <a
        href="index.html"
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
      >
        <span class="icon-home" /><span class="ml-4">Inicio</span>
      </a>
    </li>
    <li class="mb-[11vh]">
      <a
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
        target="_blank"
        href="./Juan_Castro_Arancibia_CVes.pdf"
      >
        <span class="icon-user" /><span class="ml-4">Descargar CV</span>
      </a>
    </li>
    <li class="mb-[11vh]">
      <a
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
        href="mywork.html"
      >
        <span class="icon-paperclip" /><span class="ml-4">Mi trabajo</span>
      </a>
    </li>
    <li class="mb-[11vh]">
      <a
        class="block w-full whitespace-nowrap p-4 rounded-md text-white hover:bg-primary"
        href="contact.html"
      >
        <span class="icon-message-circle" /><span class="ml-4">Contactame!</span>
      </a>
    </li>
  </ul>
</nav>

<style>
  a {
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
