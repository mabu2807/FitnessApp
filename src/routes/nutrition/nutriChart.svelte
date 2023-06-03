<script lang="ts">
	import { Bar } from 'svelte-chartjs';

	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

	export let value;
	export let chartdata;

	let data = chartdata;
</script>

<canvas id="myChart" />

<Bar {data} options={{ responsive: true }} />
