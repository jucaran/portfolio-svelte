<script lang="ts">
  import { browser } from '$app/environment'
  import languageIcon from '$lib/media/language.svg'

  let theme: 'dark' | 'light' | null
  if (browser) {
    theme = localStorage?.theme
  }
  const toggleMode = () => {
    if (theme == 'dark') {
      document.documentElement.classList.remove('dark')
      theme = 'light'
      if (browser) {
        localStorage?.setItem('theme', 'light')
      }
    } else {
      document.documentElement.classList.add('dark')
      theme = 'dark'
      if (browser) {
        localStorage?.setItem('theme', 'dark')
      }
    }
  }
</script>

<nav class="fixed top-5 right-5 flex items-center gap-5 z-10 text-2xl">
  <img class="h-[1.5rem] cursor-pointer" src={languageIcon} alt="Change language" />
  <button
    on:click={toggleMode}
    class="text-primary hover:text-secondary flex transition-all duration-300"
  >
    {#if theme == 'dark'}
      <span class="icon-sun light_icon" />
    {:else}
      <span class="icon-moon dark_icon" />
    {/if}
  </button>
  <a
    id="contact_btn"
    class="text-primary hover:text-secondary transition-all duration-300 flex gap-1 items-center"
    href="/contact"
  >
    <span class="text-sm">Escríbeme!</span>
    <span class="icon-message-circle" />
  </a>
</nav>

<style>
  span {
    font-family: "Space mono", monospace;
  }
</style>
