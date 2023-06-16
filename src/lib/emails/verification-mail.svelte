<script lang="ts">
	import { Container, Head, Html, Img, Preview } from 'svelte-email';

	export let name: string;
</script>

<Html lang="de">
	<Head />
	<Preview preview="Willkommen bei FitnessHub!" />
	<Container>
		<Img src="src/assets/Logo.jpg" alt="Fitnesshub Logo" width="200" height="200"/>
		<p>Willkommen bei FitnessHub {name}!</p>
		<p>Bitte bestätige deine E-Mail indem du auf den folgenden Knopf drückst:</p>
		<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
			<button>E-Mail bestätigen</button>
		</a>
		<p>	<br>
			Mit sportlichen Grüßen<br>
			<br>
			Justin-Thomas vom Fitnesshub Team
		</p>
	</Container>
	<footer class="footer">
		<div class="footer-content">
			<p class="footer-text">&copy; 2023 Fitness Tracker. All rights reserved.</p>
			<a class="linkFooter" href="https://www.youtube.com/@RoswitaRuhl"
				><i class="fa-brands fa-youtube fa-2x" /></a
			>
			<a class="linkFooter" href="https://www.instagram.com/ksvlangen/"
				><i class="fa-brands fa-instagram fa-2x" /></a
			>
			<a class="linkFooter" href="https://twitter.com/mibi61?s=21&t=O8Ege5KSxyYHHBAtUfSaJQ"
				><i class="fa-brands fa-square-twitter fa-2x" /></a
			>
			<a class="linkFooter" href="https://www.linkedin.com/in/luca-chmielarski?original_referer="
				><i class="fa-brands fa-linkedin fa-2x" /></a
			>
		</div>
	</footer>
</Html>