<script lang="ts">
  export let active: boolean
  export let borders: boolean
  let blink = false

  setInterval(() => {
    blink = true
    setTimeout(() => {
      blink = false
    }, 100)
  }, 2500)
</script>

{#if blink || active}
  <g id="eyes_active">
    <path
      id="Vector_8"
      d="M112.5 236.5C112.5 240.6 115.9 241 120 241L135 241C139.1 241 142.5 240.6 142.5 236.5C142.5 232.4 139.1 232 135 232L120 232C115.9 232 112.5 232.4 112.5 236.5Z"
      fill={borders ? 'black' : '#3d2920'}
    />
    <path
      id="Vector_9"
      d="M231.5 236.5C231.5 240.6 234.9 241 239 241L254 241C258.1 241 261.5 240.6 261.5 236.5C261.5 232.4 258.1 232 254 232L239 232C234.9 232 231.5 232.4 231.5 236.5Z"
      fill={borders ? 'black' : '#3d2920'}
    />
  </g>
{:else}
  <g id="eyes">
    <path
      id="Vector_10"
      d="M239 229V244C239 248.1 242.4 251.5 246.5 251.5C250.6 251.5 254 248.1 254 244V229C254 224.9 250.6 221.5 246.5 221.5C242.4 221.5 239 224.9 239 229Z"
      fill={borders ? 'black' : '#3d2920'}
    />
    <path
      id="Vector_11"
      d="M127.5 221.5C123.4 221.5 120 224.9 120 229V244C120 248.1 123.4 251.5 127.5 251.5C131.6 251.5 135 248.1 135 244V229C135 224.9 131.6 221.5 127.5 221.5Z"
      fill={borders ? 'black' : '#3d2920'}
    />
  </g>
{/if}
