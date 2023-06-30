<script lang="ts">
	import { Container, Head, Html, Img, Preview } from 'svelte-email';
	import Footer from '../../components/Footer.svelte';
	export let name: string;
	export let token: string;
</script>

<Html lang="de">
	<Head />
	<Preview preview="Willkommen bei FitnessHub!" />
	<Container>
		<Img src="Logo.jpg" alt="Fitnesshub Logo" width="200" height="200" />
		<p>Willkommen bei FitnessHub {name}!</p>
		<p>Bitte bestätige deine E-Mail indem du auf den folgenden Knopf drückst:</p>
		<a href="https://fitness-app-seven-nu.vercel.app/verify-email-token={token}">
			<button>E-Mail bestätigen</button>
		</a>
		<p>
			<br />
			Mit sportlichen Grüßen<br />
			<br />
			Justin-Thomas vom Fitnesshub Team
		</p>
	</Container>
	<Footer />
</Html>
