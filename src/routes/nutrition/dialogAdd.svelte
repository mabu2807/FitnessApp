<script lang="ts">
	export let dialogAdd: HTMLDialogElement;

	const closeClick = () => {
		dialogAdd.close();
	};
</script>

<dialog bind:this={dialogAdd} on:close>
	<p>Neue Mahlzeit hinzufügen</p>
	<button on:click={closeClick}>Close</button>
</dialog>
