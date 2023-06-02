<script>
	export let dialog;

	const closeClick = () => {
		dialog.close();
	};

	function saveChanges() {
		console.log('saved');
	}
</script>

<dialog bind:this={dialog} on:close>
	<p>Hier können die Mahlzeiten geändert werden</p>
	<form method="#">
		<label for="meal">Mahlzeit</label>
		<input type="text" id="meal" placeholder="altes Meal" /><br /><br />
		<label for="calories">Kalorien</label>
		<input type="number" id="calories" placeholder="alte Kalorien" /><br /><br />
		<div>
			<button on:click={closeClick}>Close</button>
			<button type="submit" on:click={saveChanges} on:click={closeClick}>Save</button>
		</div>
	</form>
</dialog>
