<script lang="ts">
  import Topbar from '$lib/components/Topbar.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import '../app.css'
  import Bubbles from './home/Bubbles.svelte'
</script>

<Bubbles />
<Sidebar />
<Topbar />
<slot />
