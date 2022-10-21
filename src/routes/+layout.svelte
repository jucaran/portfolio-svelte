<script lang="ts">
  import Topbar from './Topbar.svelte'
  import Sidebar from './Sidebar.svelte'
  import '../app.css'
</script>

<body class="bg-white dark:bg-light-black transition-all duration-200">
  <Sidebar />
  <Topbar />
  <slot />
</body>
