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
      console.log(inputsErrors)
      isLoading = false
      cancel()
    }

    return ({ result }) => {
      console.log('result', result)
      if (result.error) mailError = true
      else mailSent = true
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
    <div class="block relative text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 class="ubuntu text-3xl px-6 sm:text-3xl font-bold text-light-color text-center">
        {texts[$lang]?.work.building}
      </h2>
    </div>
  </div>
</main>

<style>
  .ubuntu {
    font-family: 'Ubuntu', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
      Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
