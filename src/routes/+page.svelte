<script>
    let users;

    async function showUsers() {
        const response = await fetch('/');
        users = await response.json();
    }
    users = showUsers()
    console.log(users);
</script>


<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
