<script>
	import { page } from "$app/stores";

    
</script>

<main class="dark:bg-surface-800 h-screen">
    <div class="flex justify-center items-center flex-col h-full align-middle">
        <h1 class="h1">{$page.status}</h1>
        <p>{$page.error?.message}</p>

    </div>

</main>