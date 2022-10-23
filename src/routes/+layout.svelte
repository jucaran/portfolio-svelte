<script lang="ts">
  import Topbar from './Topbar.svelte'
  import Sidebar from './Sidebar.svelte'
  import '../app.css'
</script>

<Sidebar />
<Topbar />
<slot />
