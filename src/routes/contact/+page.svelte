<script>
  // @ts-nocheck

  import Loading from '$lib/components/Loading.svelte'
  import { enhance } from '$app/forms'

  let name = ''
  let email = ''
  let message = ''
  let isLoading = false
  let mailSent = false
  let mailError = false

  const handleSubmit = () => {
    isLoading = true
    return ({ result }) => {
      console.log('result', result)
      if (result.error) {
        mailError = true
      } else {
        mailSent = true
      }
      isLoading = false
    }
  }
</script>

<svelte:head>
  <title>Juan Castro Arancibia | Contacto</title>
</svelte:head>

<main
  class="
    ubuntu transition-all duration-300
    w-screen h-screen 
    bg-white dark:bg-light-black
     selection:bg-secondary selection:text-light-black"
>
  <div
    class="
      bg-secondary
      absolute
      top-[20vh]
      w-screen
      h-[30vw] sm:h-[25vh]
      sm:min-w-[450px]
  "
  />
  <div
    class="
      bg-primary absolute
      -translate-x-1/2
      h-screen
      w-[30vw] sm:w-[30vh]
      left-1/3 sm:left-[10%] lg:left-1/4
    "
  />
  <div
    class="
      backdrop-blur-sm
      absolute text-light-color shadow
      bg-light-black bg-opacity-40
      dark:bg-opacity-80 dark:border-2 dark:border-light-color
      w-[95vw] sm:w-[70vw] max-w-lg min-w-[300px]
      h-[80vh] sm:h-[90vh] max-h-[700px]
      rounded-3xl
      left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      flex flex-col
    "
  >
    {#if isLoading}
      <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 class="ubuntu text-3xl sm:text-5xl font-bold text-light-color text-center">
          Tu mensaje esta siendo enviado!
        </h2>
        <Loading />
      </div>
    {:else if mailError}
      <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2
          id="api_response"
          class="ubuntu text-3xl sm:text-5xl font-bold text-light-color text-center"
        >
          Hubo un error al enviar el mail :(
        </h2>
      </div>
    {:else if mailSent}
      <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2
          id="api_response"
          class="ubuntu text-3xl sm:text-5xl font-bold text-light-color text-center"
        >
          Gracias! Tu mensaje fue enviado correctamente
        </h2>
      </div>
    {:else}
      <section>
        <form
          method="POST"
          use:enhance={handleSubmit}
          class="
            absolute text-light-color
            w-[90vw] sm:w-[70vw] max-w-lg
            h-[70vh] sm:h-[85vh] max-h-[600px]
            rounded-3xl
            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            flex flex-col justify-around items-center
            sm:min-w-[450px]
          "
        >
          <h2 class="ubuntu text-3xl sm:text-5xl font-bold text-light-color text-center">
            Pongamonos en contacto!
          </h2>
          <div class="flex flex-col items-start w-11/12 sm:w-4/5">
            <label for="name">Nombre:</label>
            <input
              bind:value={name}
              class="
                mt-2 p-3 w-full text-gray-600
                bg-light-color focus:bg-white
                transition-all duration-300
                shadow-md outline-none rounded-md
                border-2 border-transparent focus:border-secondary
              "
              name="name"
              placeholder="Su nombre..."
              type="text"
            />
          </div>
          <div class="flex flex-col items-start w-11/12 sm:w-4/5">
            <label for="email">Email:</label>
            <input
              bind:value={email}
              class="
                mt-2 p-3 w-full text-gray-600
                bg-light-color focus:bg-white
                transition-all duration-300
                shadow-md outline-none rounded-md
                border-2 border-transparent focus:border-secondary
              "
              name="email"
              type="email"
              placeholder="Su email..."
            />
          </div>
          <div class="flex flex-col items-start w-11/12 sm:w-4/5">
            <label for="message">Mensaje:</label>
            <textarea
              bind:value={message}
              class="
                mt-2 p-3 w-full text-gray-600
                bg-light-color focus:bg-white
                transition-all duration-300
                shadow-md outline-none rounded-md
                border-2 border-transparent focus:border-secondary
              "
              name="message"
              placeholder="Su mensaje..."
              rows="5"
              cols="15"
            />
          </div>
          <button
            class="
              space-mono
              p-4 mt-2 w-4/5 text-lg text-light-color
              bg-primary hover:bg-primary-light focus:bg-primary-dark
              rounded-md shadow-md hover:shadow-lg
              transition-all duration-200
              font-bold tracking-wide
            "
            type="submit"
          >
            ENVIAR
          </button>
        </form>
      </section>
    {/if}
  </div>
</main>

<style>
  .ubuntu {
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
