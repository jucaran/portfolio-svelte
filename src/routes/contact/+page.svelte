<script>
  // @ts-nocheck

  import Loading from '$lib/components/Loading.svelte'
  import { enhance } from '$app/forms'
  import texts from '$lib/texts.json'
  import { lang } from '$lib/stores'

  let name = ''
  let email = ''
  let message = ''
  let isLoading = false
  let mailSent = false
  let mailError = false

  let inputsErrors = {
    name: false,
    email: false,
    message: false
  }

  const handleSubmit = ({ form, data, action, cancel }) => {
    const mailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    isLoading = true
    const errors = {}

    if (data.get('email') == '' || !mailRegex.test(data.get('email'))) errors.email = true
    else errors.email = false

    if (data.get('name') == '') errors.name = true
    else errors.name = false

    if (data.get('message') == '') errors.message = true
    else errors.message = false

    if (Object.keys(errors).some((x) => errors[x])) {
      inputsErrors = { ...inputsErrors, ...errors }
      isLoading = false
      cancel()
    }

    return ({ result }) => {
      if (result.error) mailError = true
      else mailSent = true
      isLoading = false
    }
  }
</script>

<svelte:head>
  <title>Juan Castro Arancibia | {texts[$lang]?.contact.meta.title}</title>
  <meta name="description" content={texts[$lang]?.contact.meta.description}>
</svelte:head>

<main
  class="
    ubuntu transition-all duration-300
    w-screen h-screen 
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
      left-1/2 -translate-x-1/2
      top-[4.5rem] md:top-1/2 md:-translate-y-1/2
      flex flex-col
    "
  >
    {#if isLoading}
      <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 class="ubuntu text-3xl px-4 sm:text-5xl font-bold text-light-color text-center">
          {texts[$lang]?.contact.sending}
        </h2>
        <Loading />
      </div>
    {:else if mailError}
      <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 class="ubuntu mb-4 px-5 text-3xl sm:text-5xl font-bold text-light-color text-center">
          {texts[$lang]?.contact.error}
        </h2>
        <button
          class="
          p-4 mt-2 w-4/5 text-lg text-light-color
          bg-primary hover:bg-primary-light focus:bg-primary-dark
          rounded-md shadow-md hover:shadow-lg
          transition-all duration-200
          font-bold tracking-wide
        "
          on:click={() => (mailError = false)}
        >
          {texts[$lang]?.contact.try}
        </button>
      </div>
    {:else if mailSent}
      <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2
          id="api_response"
          class="ubuntu text-3xl px-4 sm:text-5xl font-bold text-light-color text-center"
        >
          {texts[$lang]?.contact.success}
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
            flex flex-col justify-around items-center gap-1
            sm:min-w-[450px]
          "
        >
          <h2 class="ubuntu text-3xl sm:text-5xl font-bold text-light-color text-center">
            {texts[$lang]?.contact.title}
          </h2>
          <div class="flex flex-col items-start w-11/12 sm:w-4/5">
            <label for="name">{texts[$lang]?.contact.inputs.name.label}</label>
            <input
              bind:value={name}
              class={`
                mt-2 p-3 w-full text-gray-600
                bg-light-color focus:bg-white
                transition-all duration-300
                shadow-md outline-none rounded-md
                border-2 ${
                  inputsErrors.name ? 'border-red-400' : 'border-transparent'
                } focus:border-secondary
              `}
              name="name"
              placeholder={texts[$lang]?.contact.inputs.name.placeholder}
              type="text"
            />
            {#if inputsErrors.name}
              <span class="text-red-400 p-1">{texts[$lang]?.contact.inputs.name.error}</span>
            {/if}
          </div>
          <div class="flex flex-col items-start w-11/12 sm:w-4/5">
            <label for="email">{texts[$lang]?.contact.inputs.email.label}</label>
            <input
              bind:value={email}
              class={`
                mt-2 p-3 w-full text-gray-600
                bg-light-color focus:bg-white
                transition-all duration-300
                shadow-md outline-none rounded-md
                border-2 ${
                  inputsErrors.email ? 'border-red-400' : 'border-transparent'
                } focus:border-secondary
              `}
              name="email"
              type="email"
              placeholder={texts[$lang]?.contact.inputs.email.placeholder}
            />
            {#if inputsErrors.email}
              <span class="text-red-400 p-1">{texts[$lang]?.contact.inputs.email.error}</span>
            {/if}
          </div>
          <div class="flex flex-col items-start w-11/12 sm:w-4/5">
            <label for="message">{texts[$lang]?.contact.inputs.message.label}</label>
            <textarea
              bind:value={message}
              class={`
                mt-2 p-3 w-full text-gray-600
                bg-light-color focus:bg-white
                transition-all duration-300
                shadow-md outline-none rounded-md
                border-2 ${
                  inputsErrors.message ? 'border-red-400' : 'border-transparent'
                } focus:border-secondary
              `}
              name="message"
              placeholder={texts[$lang]?.contact.inputs.message.placeholder}
              rows="5"
              cols="15"
            />
            {#if inputsErrors.message}
              <span class="text-red-400 p-1">{texts[$lang]?.contact.inputs.message.error}</span>
            {/if}
          </div>
          <button
            class="
              p-4 mt-2 w-4/5 text-lg text-light-color
              bg-primary hover:bg-primary-light focus:bg-primary-dark
              rounded-md shadow-md hover:shadow-lg
              transition-all duration-200
              font-bold tracking-wide
            "
            type="submit"
          >
            {texts[$lang]?.contact.submit}
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
