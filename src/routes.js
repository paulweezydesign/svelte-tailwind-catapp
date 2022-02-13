import Home from '/src/routes/Home.svelte';
import About from '/src/routes/About.svelte';
import Kittens from '/src/routes/Kittens.svelte';
import Pancake from '/src/routes/Pancake.svelte';
import Contact from '/src/routes/Contact.svelte';


export default {
    '/': Home,
	'/about': About,
	'/kittens': Kittens,
    '/pancake': Pancake,
    
    '/contact': Contact
    // The catch-all route must always be last
  
};
