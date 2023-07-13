<script lang="ts">
    import type { ActionData } from './$types';
    import type { PageData } from './$types';
    import { Toast, toastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
    import Head
    from '../../components/Head.svelte';

     export let form: ActionData;
    export let value: string | null;
    export let data: PageData;
    import { onMount } from 'svelte';
    
    let initalGoal = data.userDetails?.goal??"";
    let initalHeight = data.userDetails?.height ?? 0
    let initialWeight = data.userDetails?.weight??0;
    let initialDob = data.userDetails?.dob?? new Date();
    let initialGender = data.userDetails?.gender??"";
    let initialActivityLevel = data.userDetails?.activityLevel.toString() ?? "0";

    let dob = data.userDetails?.dob ?? new Date;
	let dateString: String;

    function formMessage() {
		if (form?.message == 'successful') {
			return 'Persönliche Daten wurden erfolgreich geändert!';
		} else {
			return 'Fehler Aufgetreten';
		}
	}

	function throwToast() {
		if (formMessage() !== null || formMessage() !== undefined) {
			const t: ToastSettings = {
				message: formMessage(),
				timeout: 3000
			};
			toastStore.trigger(t);
		}
	}
	
	onMount(()=> {
        if (form?.message != null || form?.message !== undefined) {
			throwToast();
		};
        let month = '' + (dob.getMonth() + 1),
        day = '' + dob.getDate(),
        year = dob.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

        dateString = [year, month, day].join('-');
	})
    
</script>


<Head />
<Toast background="variant-filled-error" />
<section class="flex items-center justify-center mt-32 mb-40">
    <div class="card lg:w-2/3 xl:w-1/2 w-3/4 m-10 py-10 sm:px-12 px-8 shadow-xl bg-success-400">
        <h3 class="h3 font-bold mb-10">Persönliche Daten</h3>
        <form method="post">
            <label class="label mb-5">
                <span>Fitness Ziel</span>
                <select name ="goal" bind:value={initalGoal} class="select bg-secondary-100 dark:bg-surface-500">
                    <option value="Loose Weight">Loose Weight</option>
                    <option value="Gain Muscle">Gain Muscle</option>
                    <option value="Stay Fit">Stay Fit</option><option class="text-black dark:text-white" value="Magerquark">Magerquark</option>
                    <option class="text-black dark:text-white" value="Stets bemüht">Stets bemüht</option>
                    <option class="text-black dark:text-white" value="Solide">Solide</option>
                    <option class="text-black dark:text-white" value="ADHS">ADHS</option>
                    <option class="text-black dark:text-white" value="Erlege Bären mit der bloßen Hand"
                        >Erlege Bären mit der bloßen Hand</option>
                </select>
            </label>
            <label class="label mb-5">
                <!-- Hier validieren, ob Eingabe passt -->
                <span>Größe in cm</span>
                <input
                name="height"
                class="input py-1 px-3 dark:placeholder-white placeholder-black bg-secondary-100 dark:bg-surface-500"
                type="number"
                bind:value={initalHeight}
                />
            </label>
            <label class="label mb-5">
                <!-- Hier validieren, ob Eingabe passt -->
                <span>Gewicht in kg</span>
                <input
                name="weight"
                type="number"
                class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500"
                bind:value={initialWeight}
                />
            </label>
            <label class="label mb-5">
                <span>Geburtstag</span>
                <input type="date"
                name="dob"
                class="input py-1 px-3 bg-secondary-100 dark:bg-surface-500"
                bind:value={dateString}
                >
            </label>
            <label class="label mb-5">
                <span>Geschlecht</span>
                <select name="gender" bind:value={initialGender} class="select bg-secondary-100 dark:bg-surface-500">
                    <option value="female">weiblich</option>
                    <option value="male">männlich</option>
                    <option value="divers">divers</option>
                </select>
            </label>
            <label class="label mb-10">
                <span>Aktivitätslevel</span>
                <select name="activityLevel" bind:value={initialActivityLevel} class="select bg-secondary-100 dark:bg-surface-500" >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button class="btn variant-filled md:px-7 px-5 py-2 hover:bg-tertiary-500 dark:hover:bg-primary-500"
                    type="submit">
                    Persönliche Daten ändern
            </button>
        </form>
    </div>
</section>