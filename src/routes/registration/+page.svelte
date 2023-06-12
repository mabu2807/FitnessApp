<script lang="ts">
	import { Step, Stepper } from "@skeletonlabs/skeleton";
    import Size from "../../components/Size.svelte";
    import Weight from "../../components/Weight.svelte";
	import Goal from "../../components/Goal.svelte";
	import Birth from "../../components/Birth.svelte";
	import Gender from "../../components/Gender.svelte";
	import Level from "../../components/Level.svelte";
	import Register from "../../components/Register.svelte";
	import Overview from "../../components/Overview.svelte";

    function onNextHandler(e: CustomEvent): void {
		console.log('event:next', e.detail);
	};
	function onBackHandler(e: CustomEvent): void {
		console.log('event:prev', e.detail);
	};
	function onStepHandler(e: CustomEvent): void {
		console.log('event:step', e.detail);
	};
	function onCompleteHandler(e: CustomEvent): void {
		console.log('event:complete', e.detail);
		alert('Complete!');
	};


</script>

<section class="flex justify-center">
    <div class="card w-3/4 m-10 shadow-xl sm:p-8 p-4 items-center bottom-gradient">
    <Stepper buttonNext="btn variant-filled transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500" on:next={onNextHandler} on:step={onStepHandler} on:back={onBackHandler} on:complete={onCompleteHandler}>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Wähle zunächst dein Ziel aus!</h3></svelte:fragment>
            <Goal/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Wähle deine Körpergröße aus!</h3></svelte:fragment>
            <Size/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Wähle dein Gewicht aus!</h3></svelte:fragment>
            <Weight/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Wähle deinen Geburtstag aus!</h3></svelte:fragment>
            <Birth/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Wähle dein Geschlecht aus!</h3></svelte:fragment>
            <Gender/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Wähle dein Aktivitätslevel aus!</h3></svelte:fragment>
            <Level/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Überprüfe deine Angaben!</h3></svelte:fragment>
            <Overview/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header"><h3 class="h3 mt-10">Registrierung</h3></svelte:fragment>
            <Register/> 
        </Step>
    </Stepper>
</div>

</section>

<style>
    .bottom-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
</style>


