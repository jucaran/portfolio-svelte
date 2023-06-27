<script lang="ts">
  import { browser } from '$app/environment'
  import { onMount } from 'svelte'

  let canvas: HTMLCanvasElement

  onMount(() => {
    if (browser) {
      const vw =
        document.getElementById('canvas')?.scrollWidth ||
        Math.min(document.documentElement.scrollWidth, window.innerWidth)
      const vh =
        document.getElementById('canvas')?.scrollHeight ||
        Math.min(document.documentElement.scrollHeight, window.innerHeight)
      const mobile = vw < 600

      canvas.width = vw
      canvas.height = vh
      canvas.style.zIndex = '-10'

      const ctx = canvas.getContext('2d')

      const pinkBubble = {
        x: 150,
        y: 200,
        size: 100,
        dx: mobile ? canvas.height / 350 : 5,
        dy: mobile ? canvas.height / 400 : 4
      }

      const blueBubble = {
        x: canvas.width - 150,
        y: canvas.height - 200,
        size: canvas.height / 15,
        dx: mobile ? (canvas.height / 350) * -1 : -5,
        dy: mobile ? (canvas.height / 400) * -1 : -4
      }

      function drawBubbles() {
        ctx?.beginPath()
        ctx?.arc(pinkBubble.x, pinkBubble.y, pinkBubble.size, 0, Math.PI * 2)
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
        pinkBubble.x += pinkBubble.dx
        pinkBubble.y += pinkBubble.dy
        blueBubble.x += blueBubble.dx
        blueBubble.y += blueBubble.dy

        // Detect side walls for each circle
        if (pinkBubble.x + pinkBubble.size > canvas.width || pinkBubble.x - pinkBubble.size < 0) {
          pinkBubble.dx *= -1
        }
        if (blueBubble.x + blueBubble.size > canvas.width || blueBubble.x - blueBubble.size < 0) {
          blueBubble.dx *= -1
        }

        // Detect top and bottom walls for each circle
        if (pinkBubble.y + pinkBubble.size > canvas.height || pinkBubble.y - pinkBubble.size < 0) {
          pinkBubble.dy *= -1
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
