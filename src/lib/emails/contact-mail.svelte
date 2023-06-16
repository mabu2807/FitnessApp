<script lang="ts">
	import { Container, Head, Html, Preview } from 'svelte-email';
	export let text: string;
</script>

<Html lang="de">
	<Head />
	<Preview preview="Beschwerde an Hagen" />
	<Container>
		<p>{text}</p>
    </Container>
</Html>