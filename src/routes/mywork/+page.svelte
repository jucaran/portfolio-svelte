<script lang="ts">
  import texts from '$lib/texts.json'
  import { lang } from '$lib/stores'
  import Columns from '$lib/components/Columns.svelte'
  import works from './works'
  import WorkItem from './WorkItem.svelte'
  import SelectedWork from './SelectedWork.svelte'
  import { sleep } from '$lib/utils'

  let isActive = works.map(() => false)
  let selected: number | false = false
  let showWorks: boolean = true

  const toggle = async (i?: number) => {
    if (selected !== false) {
      selected = false
      await sleep(500)
      showWorks = true
    } else {
      showWorks = false
      await sleep(500)
      selected = i ?? false
    }
  }
</script>

<svelte:head>
  <title>Juan Castro Arancibia | {texts[$lang]?.work.title}</title>
  <meta name="description" content={texts[$lang]?.work.description}>
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
      sm:p-10 p-4 sm:pb-4 pb-10 sm:pt-16 pt-20
    "
  >
    {#each works as work, i}
      {#if isActive.every(e => !e) || isActive[i]}
        <WorkItem {work} toggle={() => toggle(i)} show={showWorks} />
      {/if}
    {/each}
    {#if selected !== false}
      <SelectedWork close={toggle} work={works[selected]} />
    {/if}
  </section>
</main>

<style>
  .ubuntu {
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
