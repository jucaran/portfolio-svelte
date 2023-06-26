<script lang="ts">
  import { blur } from 'svelte/transition'
  import WorkLogo from './WorkLogo.svelte'
  import type { WorkItem } from './works'
  import { lang } from '$lib/stores'
  import Skill from './Skill.svelte'
  import texts from '$lib/texts.json'

  export let work: WorkItem
  export let active: boolean
  export let toggle: () => void
  let width = ''

  const close = () => {
    setTimeout(toggle, 100)
  }

  $: {
    if (!active) {
      width = 'w-72'
    } else {
      setTimeout(() => {
        width = 'sm:w-[800px] w-full'
      }, 300)
    }
  }

  console.log(work.skills)
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
  on:click={active ? null : () => toggle()}
  transition:blur={{ duration: 300, amount: 20 }}
  on:mouseenter={() => !active && (width = 'w-80')}
  on:mouseleave={() => !active && (width = 'w-72')}
  class={`
    px-4 py-8 shadow backdrop-blur-sm rounded-3xl
    text-light-color  bg-light-black 
    bg-opacity-60 dark:bg-opacity-90 dark:border-2 dark:border-light-color
    flex flex-col justify-center items-center gap-2
    transition-all duration-300
    ${width} ${active ? '' : 'cursor-pointer'}
  `}
>
  {#if active}
    <button class="icon-x-circle self-end text-[2rem] mr-2" on:click|stopPropagation={close} />
  {/if}
  <WorkLogo {work} />
  <h2 class="ubuntu text-3xl px-4 sm:text-3xl font-bold text-light-color text-center">
    {work.title}
  </h2>
  {#if active}
    <p in:blur={{ duration: 300, delay: 250, amount: 20 }} class="px-2 sm:px-6 text-center sm:text-start">
      {work.description[$lang]}
    </p>
    {#if work.url}
      <a
        href={work.url}
        in:blur={{ duration: 300, delay: 250, amount: 20 }}
        target="_blank"
        class="
        mt-2 px-4 py-2 hover:px-5 hover:py-3 hover:border-light-color hover:border-4
        transition-all duration-300
        bg-primary-light rounded-lg font-bold uppercase
      "
      >
        {texts[$lang].work.url}
      </a>
    {/if}
    <section in:blur={{ duration: 300, delay: 250, amount: 20 }} class="flex gap-2 mt-2">
      {#each work.skills as skill}
        <Skill kind={skill} />
      {/each}
    </section>
  {:else}
    <section class="sm:flex gap-2 mt-2 hidden">
      {#each work.skills ?? [] as skill}
        <Skill kind={skill} />
      {/each}
    </section>
  {/if}
</article>
