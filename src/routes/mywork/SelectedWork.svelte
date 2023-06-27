<script lang="ts">
  import { blur } from 'svelte/transition'
  import WorkLogo from './WorkLogo.svelte'
  import { skillDisplayName, type WorkItem } from './works'
  import { lang } from '$lib/stores'
  import Skill from './Skill.svelte'
  import texts from '$lib/texts.json'
  import { onMount } from 'svelte'
  import Tooltip from '$lib/components/Tooltip.svelte'

  export let work: WorkItem
  export let close: () => void
  let showSkill = work.skills.map(() => false)

  onMount(() => {
    work.skills.forEach((_, i) => {
      setTimeout(() => (showSkill[i] = true), 600 + 300 * i)
    })
  })
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<article
  transition:blur={{ duration: 400, amount: 20 }}
  class={`
    px-4 py-8 shadow backdrop-blur-lg dark:backdrop-blur-sm rounded-3xl
    text-light-color  bg-light-black 
    bg-opacity-60 dark:bg-opacity-90 dark:border-2 dark:border-light-color
    flex flex-col justify-center items-center gap-2
    transition-all duration-300
    sm:w-[800px] w-full 
  `}
>
  <button class="icon-x-circle self-end text-[2rem] mr-2" on:click|stopPropagation={close} />
  <div in:blur={{ duration: 500, delay: 150, amount: 20 }} class="flex flex-col items-center gap-2">
    <WorkLogo {work} />
    <h2 class="ubuntu text-3xl px-4 sm:text-3xl font-bold text-light-color text-center">
      {work.title}
    </h2>
  </div>
  <div
    class="flex flex-col gap-4 items-center justify-center"
    in:blur={{ duration: 500, delay: 300, amount: 20 }}
  >
    <p class="px-2 sm:px-6 sm:text-lg text-center sm:text-start">
      {work.description[$lang]}
    </p>
    {#if work.url}
      <a
        href={work.url}
        target="_blank"
        class="
            px-4 py-2 hover:px-5 hover:py-3 hover:border-light-color hover:border-4
            transition-all duration-300
            bg-primary-light rounded-lg font-bold uppercase
          "
      >
        {texts[$lang].work.url}
      </a>
    {/if}
  </div>
  <section class="flex gap-2 mt-4">
    {#each work.skills as skill, i}
      <span class="w-[50px] h-[50px]">
        {#if showSkill[i]}
          <span in:blur={{ duration: 300, amount: 30 }}>
            <Tooltip text={skillDisplayName[skill]} >
              <Skill kind={skill} />
            </Tooltip>
          </span>
        {/if}
      </span>
    {/each}
  </section>
</article>
