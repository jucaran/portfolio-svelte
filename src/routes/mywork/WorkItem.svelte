<script lang="ts">
  import { blur } from 'svelte/transition'
  import WorkLogo from './WorkLogo.svelte'
  import type { WorkItem } from './works'
  import Skill from './Skill.svelte'

  export let toggle: () => void
  export let work: WorkItem
  export let show: boolean
  let width = 'w-72'

  const close = () => {
    width = 'w-72'
    toggle()
  }
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if show}
  <article
    on:click={close}
    transition:blur={{ duration: 400, amount: 20 }}
    on:mouseenter={() => (width = 'w-80')}
    on:mouseleave={() => (width = 'w-72')}
    class={`
    px-4 py-8 shadow backdrop-blur-sm rounded-3xl
    text-light-color  bg-light-black 
    bg-opacity-60 dark:bg-opacity-90 dark:border-2 dark:border-light-color
    flex flex-col justify-center items-center gap-2
    transition-all duration-300
    ${width} cursor-pointer
  `}
  >
    <WorkLogo {work} />
    <h2 class="ubuntu text-3xl px-4 sm:text-3xl font-bold text-light-color text-center">
      {work.title}
    </h2>
    <section class="sm:flex gap-2 hidden">
      {#each work.skills ?? [] as skill}
        <span class="h-[35px] w-[35px] p-0.5 bg-light-color rounded-full dark:bg-dark-color">
          <Skill kind={skill} />
        </span>
      {/each}
    </section>
  </article>
{/if}
