<script lang="ts">
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'

  let canvas: HTMLCanvasElement

  onMount(() => {
    if (browser) {
      const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

      canvas.width = vw
      canvas.height = vh
      canvas.style.zIndex = '-10'

      const ctx = canvas.getContext('2d')

      const pinkBuble = {
        x: 150,
        y: 200,
        size: 100,
        dx: Math.min(canvas.width / 250, 5),
        dy: Math.min(canvas.width / 300, 4)
      }

      const blueBubble = {
        x: canvas.width - 150,
        y: canvas.height - 200,
        size: canvas.height / 15,
        dx: Math.max((canvas.width / 250) * -1, -5),
        dy: Math.max((canvas.width / 300) * -1, -4)
      }

      function drawBubbles() {
        ctx?.beginPath()
        ctx?.arc(pinkBuble.x, pinkBuble.y, pinkBuble.size, 0, Math.PI * 2)
        if (ctx) {
          ctx.fillStyle = '#e36571'
        }
        ctx?.fill()
        ctx?.beginPath()
        ctx?.arc(blueBubble.x, blueBubble.y, blueBubble.size, 0, Math.PI * 2)
        if (ctx) {
          ctx.fillStyle = '#8edbd8'
        }
        ctx?.fill()
      }

      function update() {
        ctx?.clearRect(0, 0, canvas.width, canvas.height)

        drawBubbles()

        // change position
        pinkBuble.x += pinkBuble.dx
        pinkBuble.y += pinkBuble.dy
        blueBubble.x += blueBubble.dx
        blueBubble.y += blueBubble.dy

        // Detect side walls for each circle
        if (pinkBuble.x + pinkBuble.size > canvas.width || pinkBuble.x - pinkBuble.size < 0) {
          pinkBuble.dx *= -1
        }
        if (blueBubble.x + blueBubble.size > canvas.width || blueBubble.x - blueBubble.size < 0) {
          blueBubble.dx *= -1
        }

        // Detect top and bottom walls for each circle
        if (pinkBuble.y + pinkBuble.size > canvas.height || pinkBuble.y - pinkBuble.size < 0) {
          pinkBuble.dy *= -1
        }
        if (blueBubble.y + blueBubble.size > canvas.height || blueBubble.y - blueBubble.size < 0) {
          blueBubble.dy *= -1
        }

        requestAnimationFrame(update)
      }

      update()
    }
  })
</script>

<canvas
  class="bg-white dark:bg-light-black transition-all duration-300 fixed top-0 left-0 w-screen h-screen pointer-events-none"
  id="canvas"
  bind:this={canvas}
/>
