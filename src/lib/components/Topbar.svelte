<script lang="ts">
  import { browser } from '$app/environment'
  import languageIcon from '$lib/assets/language.svg'
  import { theme, lang } from '../stores'
  import texts from '$lib/texts.json'

  // let theme: 'dark' | 'light' | null
  if (browser) {
    theme.set(localStorage?.theme)
  }
  if (browser) {
    lang.set(localStorage?.lang ?? 'en')
  }

  const toggleTheme = () => {
    if ($theme == 'dark') {
      document.documentElement.classList.remove('dark')
      theme.set('light')
      if (browser) {
        localStorage?.setItem('theme', 'light')
      }
    } else {
      document.documentElement.classList.add('dark')
      theme.set('dark')
      if (browser) {
        localStorage?.setItem('theme', 'dark')
      }
    }
  }

  const toggleLanguage = () => {
    const newLang = $lang == 'en' ? 'es' : 'en'
    lang.set(newLang)
    if (browser) {
      localStorage?.setItem('lang', newLang)
    }
  }
</script>

<nav class="fixed top-5 right-3 sm:right-5 flex items-center sm:gap-5 z-20 text-[2rem] sm:text-2xl">
  <button aria-label="Language toggle" on:click={toggleLanguage}>
    <img class="h-7 sm:h-6 cursor-pointer" src={languageIcon} alt="Change language" />
  </button>
  <button
    aria-label="Theme toggle"
    on:click={toggleTheme}
    class="ml-2 sm:ml-0 text-primary hover:text-secondary flex transition-all duration-300"
  >
    {#if $theme == 'dark'}
      <span class="icon-sun light_icon" />
    {:else}
      <span class="icon-moon dark_icon" />
    {/if}
  </button>
  <a
    id="contact_btn"
    aria-label="Contact"
    class="ml-1 sm:ml-0 text-primary hover:text-secondary flex items-center transition-all duration-300"
    href="/contact"
  >
    <span aria-label="Contact" class="hidden sm:block text-sm">{texts[$lang]?.topbar.contact}</span>
    <span class="icon-message-circle" />
  </a>
</nav>

<style>
  span {
    font-family: 'Space mono', monospace;
  }
</style>
