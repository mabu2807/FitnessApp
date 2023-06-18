<script lang="ts">
	import { Step, Stepper } from '@skeletonlabs/skeleton';
	import Size from '../../components/Size.svelte';
	import Weight from '../../components/Weight.svelte';
	import Goal from '../../components/Goal.svelte';
	import Birth from '../../components/Birth.svelte';
	import Gender from '../../components/Gender.svelte';
	import Level from '../../components/Level.svelte';
	import Overview from '../../components/Overview.svelte';
	import { lockedGoal, lockedGender } from '../../stores/Data';
</script>

<section class="flex justify-center mt-32 mb-20">
	<div class="card w-3/4 m-10 shadow-xl sm:p-8 p-4 items-center bottom-gradient">
		<Stepper
			buttonBack="btn variant-ghost hover:bg-tertiary-400 dark:hover:bg-primary-400"
			buttonNext="btn variant-filled hover:bg-tertiary-500 dark:hover:bg-primary-500"
			on:complete={() => (location.href = '/register')}
		>
			<Step locked={$lockedGoal} class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle zunächst dein Ziel aus!</h3></svelte:fragment
				>
				<Goal />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle deine Körpergröße aus!</h3></svelte:fragment
				>
				<Size />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle dein Gewicht aus!</h3></svelte:fragment
				>
				<Weight />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle deinen Geburtstag aus!</h3></svelte:fragment
				>
				<Birth />
			</Step>
			<Step locked={$lockedGender} class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle dein Geschlecht aus!</h3></svelte:fragment
				>
				<Gender />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Wähle dein Aktivitätslevel aus!</h3></svelte:fragment
				>
				<Level />
			</Step>
			<Step class="text-center">
				<svelte:fragment slot="header"
					><h3 class="h3 mt-10">Überprüfe deine Angaben!</h3></svelte:fragment
				>
				<Overview />
			</Step>
		</Stepper>
	</div>
</section>

<style>
	.bottom-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-secondary-500) / 0.23) 0px,
				transparent 70%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-success-400) / 0.19) 0px, transparent 30%);
	}
</style>
