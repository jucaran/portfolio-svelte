<script lang="ts">
  import texts from '$lib/texts.json'
  import { lang } from '$lib/stores'
  import Columns from '$lib/components/Columns.svelte'
  import works from './works'
  import WorkItem from './WorkItem.svelte'

  let isActive = works.map(() => false)
  const toggle = (i: number) => {
    if (isActive[i]) isActive = isActive.map(() => false)
    else isActive = isActive.map((_, idx) => idx === i)
  }
</script>

<svelte:head>
  <title>Juan Castro Arancibia | {texts[$lang]?.work.title}</title>
</svelte:head>

<Columns />
<main
  class="
    ubuntu w-screen
    selection:bg-secondary selection:text-light-black
  "
>
  <section
    class="
      min-h-screen flex flex-row flex-wrap gap-10 justify-center content-center items-center
      sm:p-10 p-4 sm:pb-4 pb-10 sm:pt-12 pt-20
    "
  >
    {#each works as work, i}
      {#if isActive.every(e => !e) || isActive[i]}
        <WorkItem {work} active={isActive[i]} toggle={() => toggle(i)} />
      {/if}
    {/each}
  </section>
</main>

<style>
  .ubuntu {
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
