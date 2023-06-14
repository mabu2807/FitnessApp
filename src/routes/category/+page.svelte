<script lang="ts">
	import Head from '../../components/Head.svelte';
	import { type ModalComponent, type ModalSettings, modalStore } from '@skeletonlabs/skeleton';
	import AddCategoryModal from '../../components/AddCategoryModal.svelte';
	import {categoryData} from '../getStarted/Data'

	

	const modalAddCategory: ModalComponent = {
	ref: AddCategoryModal,
};

function addCategory(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: modalAddCategory,
		};
		modalStore.trigger(modal);
	}
</script>

<Head />


<div class="mt-24">
	<section class="flex flex-col items-center p-5 bg-gray-300 font-bold text-center font-sans">
		<h1 class="text-3xl">Deine Trainingspläne</h1>
		<p class="font-sans text-lg mb-1 text-center text-gray-600">Bleib dran und zieh durch!</p>
	</section>


	<div class="card flex flex-wrap justify-center gap-3 mt-5">
		{#each $categoryData as item}
		{#if item.picked}
			<a href={item.link} class="flex flex-col items-center justify-center w-64 h-80 bg-white rounded-md shadow-xl no-underline text-gray-400 mt-3 hover:w-72 transition-all duration-900 ease-in ">
				<div class="w-full h-full rounded-md">
					<img class="w-full h-full object-cover rounded-tl-md rounded-tr-md" src={item.imageSrc} alt="" />
				</div>
				<div class="p-3 text-center">
					<h2 class="font-sans text-lg mt-1 mb-3 text-black font-semibold">{item.title}</h2>
					<p class="font-sans text-sm mt-0 text-gray-400 overflow-ellipsis">{item.description}</p>
				</div>
			</a>
			{/if}
		{/each}
	</div>

	<div class="bg-gray-300 p-5 text-center mt-12">
		<h2 class="text-2xl mb-3 ">Weitere Trainingspläne abonnieren</h2>
		<p class="text-base mb-5">
			Erhalte Zugriff auf eine Vielzahl von zusätzlichen Trainingsplänen, um dein Fitnessziel zu
			erreichen.
		</p>
		<div class="flex items-center justify-center">
			<button class="flex items-center justify-center text-lg pt-3 pb-5 mb-5 transition-all duration-900 ease-in text-gray-800 bg-gray-200 rounded-md border-2 border-solid border-gray-700
			hover:text-white hover:bg-gray-700" on:click={addCategory}>
		
				<div class="subscribe-container-text">
					<p class="text-lg ml-4 font-semibold">Jetzt Abonnieren</p>
				</div>
				<div class="ml-5 ">
					<span class="inline-block w-5 h-5 bg-gray-700 text-white rounded-full relative -translate-x-2/4 ml-2">+</span>
				</div>
			</button>
		</div>
	</div>

	<!-- <Dialog
		bind:open
		aria-labelledby="large-scroll-title"
		aria-describedby="large-scroll-content"
		surface$style="width: 1050px; max-width: calc(100vw - 32px);"
	>
		<Title id="large-scroll-title">{'Erweitere dein Training'}</Title>
		<Content id="large-scroll-content">
			<hr />
			<h2>Füge neue Sportarten hinzu</h2> -->
			<!-- .icon-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 130px;
		height: 130px;
		background-color: #fff;
		border: none;
		/* border-radius: 8px; */
		overflow: hidden;
		/* outline-style: solid;
    outline-color: black; */
		/* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out; */
		text-decoration: none;
		color: inherit;
		margin: 10px;
		cursor: pointer;
	} -->
			<!-- <div class="flex items-center">
				{#each { length: availableData.length } as _, i}
					<div>
						<button
							style={availableData[i].selected
								? 'box-shadow: 0 0 10px black; border-radius: 8px; transition: .5s ease all;'
								: 'outline-style: none;'}
							class="lex flex-col items-center justify-center w-40 h-40 bg-gray-200 rounded-lg border-none overflow-hidden text-decoration-none text-gray-700 m-5 cursor-pointer hover:shadow-xl transition-all duration-200 ease-in"
							on:click={() => {
								availableData[i].selected = !availableData[i].selected;
								buttonAddDisabled();
							}}
						>
							<img
								class="w-full h-full overflow-hidden object-cover"
								src={availableData[i].imageSrc}
								alt={availableData[i].imageSrc}
							/>
							<div class=" mt-5 text-center text-xs mb-5">{availableData[i].title}</div>
						</button>
					</div>
				{/each}
			</div>
			<hr />
			<h2>Lösche ausgewählte Sportarten</h2>
			<div class="flex items-center">
				{#each { length: selectedData.length } as _, i}
					<div>
						<button
							style={selectedData[i].selected
								? 'box-shadow: 0 0 10px black; border-radius: 8px; transition: .5s ease all;'
								: 'outline-style: none;'}
							class=" flex flex-col items-center justify-center w-40 h-40 bg-gray-200 rounded-lg border-none overflow-hidden text-decoration-none text-gray-700 m-5 cursor-pointer hover:shadow-xl transition-all duration-200 ease-in"
							on:click={() => {
								selectedData[i].selected = !selectedData[i].selected;
								buttonRemoveDisabled();
							}}
						>
							<img
								class="w-full h-full overflow-hidden object-cover"
								src={selectedData[i].imageSrc}
								alt={selectedData[i].imageSrc}
							/>
							<div class="mt-5 text-center text-xs mb-5">{selectedData[i].title}</div>
						</button>
					</div>
				{/each}
			</div>
		</Content>
		<Actions>
			<Button on:click={remove} disabled={removeDisabled}>
				<Label>Remove</Label>
			</Button>
			<Button on:click={add} disabled={addDisabled}>
				<Label>Add</Label>
			</Button>
		</Actions>
	</Dialog> -->
</div>


<!-- <style>
	.icon-container {
		display: flex;
		align-items: center;
	}

	.icon-title {
		margin-top: 5px;
		text-align: center;
		font-size: 12px;
	}

	.category {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 20px;
		background-color: #f5f5f5;
		font-weight: bold;

		text-align: center;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.category-title {
		font-size: 28px;
	}

	.category-description {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 18px;
		margin-bottom: 5px;
		text-align: center;
		color: rgb(144, 144, 144);
	}

	.button-cards {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 10px;
		margin-top: 20px;
	}

	.button-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 250px;
		height: 300px;
		background-color: #fff;
		border-radius: 8px;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		transition: box-shadow 0.3s ease-in-out;
		text-decoration: none;
		color: inherit;
		margin: 10px;
	}

	

	.icon-card:hover {
		border-radius: 8px;
		transform: scale(1.1);
		transition: 0.5s ease all;
	}

	.button-card:hover {
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.518);
		width: 255px;
		/* height: 305px; */
		transition: all ease 0.2s;
	}

	.image-container {
		width: 100%;
		height: 180px;
		overflow: hidden;
		object-fit: cover;
	}

	.image-container img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.card-details {
		padding: 10px;
		text-align: center;
	}

	h2 {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 18px;
		margin: 0;
		margin: 5px 0 10px 0;
	}

	.description {
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-size: 14px;
		margin-top: 0;
		color: rgb(144, 144, 144);
		text-overflow: ellipsis;
	}

	.info-container {
		background-color: #f5f5f5;
		padding: 20px;
		border-radius: 8px;
		text-align: center;
		margin-top: 50px;
	}

	.info-title {
		font-size: 24px;
		margin-bottom: 10px;
	}

	.info-text {
		font-size: 16px;
		margin-bottom: 20px;
	}
	.button-container {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.subscribe-button {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 18px;
		padding: 10px 20px;
		border: none;
		background-color: #fffdfd;
		color: #393e46;
		border-radius: 7px;
		cursor: pointer;
		border: 2px solid #393e46;
		overflow: hidden;
		margin-bottom: 20px;
		transition: background-color 0.3s ease;
		animation: shadow-animation 2s infinite linear;
	}

	@keyframes shadow-animation {
		0% {
			box-shadow: 0 4px 10px rgba(157, 157, 157, 0.518);
		}
		25% {
			box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.341);
		}
		50% {
			box-shadow: 4px 18px 25px rgba(0, 0, 0, 0.518);
		}
		75% {
			box-shadow: 6px 10px 20px rgba(0, 0, 0, 0.341);
		}
		100% {
			box-shadow: 0px 4px 10px rgba(157, 157, 157, 0.518);
		}
	}

	.subscribe-button:hover {
		background-color: #393e46;
		color: white;
	}
	.subscribe-button:hover .plus-icon {
		background-color: white;
		color: #393e46;
		transition: all 0.2s ease;
	}

	.subscribe-container-plus {
		margin-left: 20px;
		color: #393e46;
	}

	.subscribe-text {
		font-size: 18px;
		font-family: 'Lato', sans-serif;
	}

	.plus-icon {
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #393e46;
		color: white;

		border-radius: 50%;
		position: relative;
		margin-left: 5px;
		transform: translateX(-50%);
		animation: plus-icon-animation 2s infinite alternate;
	}

	@keyframes plus-icon-animation {
		0% {
			transform: translateX(-50%) scale(1);
		}
		50% {
			transform: translateX(-50%) scale(1.2);
		}
		100% {
			transform: translateX(-50%) scale(1);
		}
	}

	.footer {
		background-color: #393e46;
		color: #ffffff;
		padding: 44px;
		position: relative;
		bottom: 0;
	}

	.footer-content {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.footer-text {
		font-size: 14px;
		margin: 0;
	}
</style> -->
