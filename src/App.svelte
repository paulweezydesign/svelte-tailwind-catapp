<script>
import Router from 'svelte-spa-router';
import NavBar from './lib/NavBar.svelte';
  import routes from './routes';

  
</script>
<svelte:head>
  <title>svelte+tailwind</title>
  <link href="https://cdn.jsdelivr.net/npm/daisyui@1.25.4/dist/full.css" rel="stylesheet" type="text/css" />
</svelte:head>
<header>
<NavBar />
  
</header>

<main>
 <Router {routes} />
</main>

<style>

</style>
