<script lang="ts">
  import Alterra from '$lib/assets/alterra_logo.svg'
  import Vanta from '$lib/assets/vanta.png'
  import NaranjaX from '$lib/assets/naranjax.svg'
  import Buildware from '$lib/assets/buildware.svg'
  import Ineco from '$lib/assets/ineco.svg'
  import Jucaran from '$lib/assets/jucaran.svg'
  import Pranapp from '$lib/assets/pranapp.svg'
  import type { WorkItem } from './works'

  const logos: { [key: string]: { type: 'png' | 'svg'; logo: string } } = {
    alterra: {
      type: 'svg',
      logo: Alterra
    },
    vanta: {
      type: 'png',
      logo: Vanta
    },
    naranjax: {
      type: 'svg',
      logo: NaranjaX
    },
    buildware: {
      type: 'svg',
      logo: Buildware
    },
    ineco: {
      type: 'svg',
      logo: Ineco
    },
    jucaran: {
      type: 'svg',
      logo: Jucaran
    },
    pranapp: {
      type: 'svg',
      logo: Pranapp
    }
  }

  export let work: WorkItem
</script>

<div class="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] flex justify-center items-center bg-light-color rounded-full">
  {#if logos[work.work].type === 'png'}
    <img alt={`${work.title} Logo`} src={logos[work.work].logo ?? ''} />
  {:else}
    <img alt={`${work.title} Logo`} class="h-[60px] sm:h-[100px] w-[60px] sm:w-[100px]" src={logos[work.work].logo ?? ''} />
  {/if}
</div>
