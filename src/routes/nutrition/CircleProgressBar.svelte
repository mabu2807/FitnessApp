<script>
	export let progress;
	const angle = 360 * progress;

	const background = `radial-gradient(white 50%, transparent 51%),
    conic-gradient(transparent 0deg ${angle}deg, gainsboro ${angle}deg 360deg),
    conic-gradient(lightblue 0deg, blue 90deg, darkblue 180deg, green);`;

	$: cssVarStyles = `--background:${background}`;
</script>

<div id="progress-circle" style={cssVarStyles} />

<style>
	#progress-circle {
		background: var(--background);
		border-radius: 50%;
		width: 150px;
		height: 150px;
		transition: all 500ms ease-in;
		will-change: transform;
	}
</style>
