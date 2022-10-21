<script lang="ts">
  import languageIcon from '$lib/media/language.svg'

  let theme: 'dark' | 'light' = localStorage?.theme
  const toggleMode = () => {
    if (theme == 'dark') {
      document.documentElement.classList.remove('dark')
      localStorage?.setItem('theme', 'light')
    } else {
      document.documentElement.classList.add('dark')
      localStorage?.setItem('theme', 'dark')
    }
  }
</script>

<!-- Right Nav -->
<nav class="fixed top-1 right-1 flex align-center z-10">
  <span>
    <img
      class="relative top-[.2rem] h-[1.5rem] cursor-pointer"
      src={languageIcon}
      alt="Change language"
    />
  </span>
  <!-- svelte-ignore a11y-invalid-attribute -->
  <button on:click={toggleMode} class="right_item" href="#">
    {#if theme == 'dark'}
      <span class="material-symbols-outlined"> dark_mode </span>
    {:else}
      <span class="material-symbols-outlined"> light_mode </span>
    {/if}
  </button>
  <a id="contact_btn" class="right_item" href="contact.html">
    <span class="btn_text">Escríbeme!</span>
    <span class="material-symbols-outlined"> maps_ugc </span>
  </a>
</nav>

<style>
  .right_item {
    font-size: 1.5rem;
    color: var(--primary-color);
    cursor: pointer;
    transition: color 200ms;
    z-index: 8;
    display: flex;
    align-items: center;
    margin-left: 1rem;
  }

  .right_item .btn_text {
    font-family: 'Space mono', monospace;
    font-size: 0.8rem;
  }
  .right_item:hover {
    color: var(--secondary-color);
  }
</style>
