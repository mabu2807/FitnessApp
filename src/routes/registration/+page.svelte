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
    <div class="card w-3/4 m-10 shadow-xl p-8 items-center">
    <Stepper on:next={onNextHandler} on:step={onStepHandler} on:back={onBackHandler} on:complete={onCompleteHandler}>
        <Step class="text-center">
            <svelte:fragment slot="header">Wähle zunächst dein Ziel aus!</svelte:fragment>
            <Goal/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header">Wähle deine Körpergröße aus!</svelte:fragment>
            <Size/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header">Wähle dein Gewicht aus!</svelte:fragment>
            <Weight/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header">Wähle deinen Geburtstag aus!</svelte:fragment>
            <Birth/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header">Wähle dein Geschlecht aus!</svelte:fragment>
            <Gender/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header">Wähle dein Aktivitätslevel aus!</svelte:fragment>
            <Level/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header">Bitte überprüfe deine Angaben!</svelte:fragment>
            <Overview/>
        </Step>
        <Step class="text-center">
            <svelte:fragment slot="header">Registrierung</svelte:fragment>
            finale Registrierung
            <!-- <Register/> -->
        </Step>
    </Stepper>
</div>

</section>
