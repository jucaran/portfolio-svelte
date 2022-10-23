<script lang="ts">
  import Topbar from '$lib/components/Topbar.svelte'
  import Sidebar from '$lib/components/Sidebar.svelte'
  import '../app.css'
</script>

<Sidebar />
<Topbar />
<slot />
