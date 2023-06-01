<script>
	import { Bar } from 'svelte-chartjs';
	import { data } from './data';
	import allCalories from './+page.svelte';
	import { onMount } from 'svelte';

	import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

	Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

	export let value;

	var colorChange = value;
	var red = 'rgb(255, 99, 132)';

	var dataset = data.datasets[0];
	let userdata = dataset.data;

	for (let i = 0; i < userdata.length; i++) {
		if (userdata[i] > Number(colorChange)) {
			dataset.backgroundColor[i] = red;
		}
	}
</script>

<canvas id="myChart" />

<Bar {data} options={{ responsive: true }} />
