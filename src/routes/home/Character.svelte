<script>
  import Bulb from './character/Bulb.svelte'
  import Smile from './character/Smile.svelte'
  import Body from './character/Body.svelte'
  import Eyes from './character/Eyes.svelte'
  let active = false

  let borders = true
</script>

<svg
  class="
    z-30 sm:z-10
    object-contain bg-white cursor-pointer
    rounded-full shadow-md
    w-40 h-40 sm:w-48 sm:h-48 lg:w-60 lg:h-60 
    mb-4 sm:mb-0 -mt-4"
  viewBox="0 0 373 512"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  on:mouseenter={() => (active = true)}
  on:mouseleave={() => (active = false)}
>
  <Body {borders} />
  <Eyes {active} {borders} />
  {#if active}
    <Bulb {active} {borders} />
  {/if}
  <!-- <Smile {active} {borders} /> -->
</svg>
