<script lang="ts">
	import { Bar } from 'svelte-chartjs';

	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

	export let chartdata;

	let data = chartdata;
</script>

<Bar {data} options={{ responsive: true }} />
