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

<nav class="fixed top-5 right-3 sm:right-5 flex items-center sm:gap-5 z-20 text-[2rem] sm:text-2xl">
  <img class="h-7 sm:h-6 cursor-pointer" src={languageIcon} alt="Change language" />
  <button
    on:click={toggleMode}
    class="ml-2 sm:ml-0 text-primary hover:text-secondary flex transition-all duration-300"
  >
    {#if theme == 'dark'}
      <span class="icon-sun light_icon" />
    {:else}
      <span class="icon-moon dark_icon" />
    {/if}
  </button>
  <a
    id="contact_btn"
    class="ml-1 sm:ml-0 text-primary hover:text-secondary flex items-center transition-all duration-300"
    href="/contact"
  >
    <span class="hidden sm:block text-sm">Escríbeme!</span>
    <span class="icon-message-circle" />
  </a>
</nav>

<style>
  span {
    font-family: "Space mono", monospace;
  }
</style>
