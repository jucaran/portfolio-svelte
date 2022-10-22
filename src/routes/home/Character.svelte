<script>
  import { fly } from 'svelte/transition'
  import Bulb from './character/Bulb.svelte'
  import Smile from './character/Smile.svelte'
  import Body from './character/Body.svelte'
  import Eyes from './character/Eyes.svelte'
  let active = false
  let showEyes = false

  let borders = true
</script>

<svg
  class="w-60 h-60 object-contain -mt-4 shadow-md bg-white cursor-pointer z-10 rounded-full"
  viewBox="0 0 373 512"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  on:mouseenter={() => (active = true)}
  on:mouseleave={() => (active = false)}
>
  <Body {borders} />
  <Eyes eyes={showEyes} {active} />
  {#if active}
    <Bulb {active} {borders} />
  {/if}
  <Smile active={true} {borders} />
</svg>

<style>
  .picture #light_bulb {
    opacity: 0;
    transition: 0.3s ease-out;
    position: relative;
  }

  .picture #eyes_active {
    opacity: 0;
    animation: blink 3s linear infinite normal forwards;
  }
  .picture #eyes {
    opacity: 0;
    animation: blink_close 3s linear infinite normal forwards;
  }

  .picture:hover #eyes {
    opacity: 0;
    animation: none;
  }

  .picture:hover #eyes_active {
    animation: none;
    opacity: 1;
  }

  .picture:hover #light_bulb {
    opacity: 1;
    transform: translateY(-50px);
  }

  .profile_img .picture #smile {
    opacity: 0;
    transform: translateY(-10px);
    transition: 0.3s ease;
  }

  .profile_img .picture:hover #smile {
    opacity: 1;
    transform: scale(1);
  }
</style>
