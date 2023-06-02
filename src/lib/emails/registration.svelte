<script lang="ts">
	import { Container, Head, Html, Preview, Section, Text } from 'svelte-email';

	export let firstName = 'Thomas';

	const fontFamily =
		'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

	const main = {
		backgroundColor: '#ffffff'
	};

	const container = {
		margin: '0 auto',
		padding: '20px 0 48px'
	};

	const paragraph = {
		fontFamily,
		fontSize: '16px',
		lineHeight: '26px'
	};
</script>

<Html lang="en">
	<Head />
	<Preview preview="Welcome to FitnessHub" />
	<Section style={main}>
		<Container style={container}>
			<Text style={paragraph}>Hi {firstName}, welcome to FitnessHub!</Text>
			<Text style={paragraph}>Please click on the following button to verify your email:</Text>
			<a href="https://www.google.com">
				<button>Verify Email</button>
			</a>
		</Container>
	</Section>
</Html>
