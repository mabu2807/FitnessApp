<div class="flex flex-col">
	<section class="flex items-center justify-center mt-32 mb-40">
		<!-- class first-wrapper -->
		<div class="card top-gradient lg:w-2/3 xl:w-1/2 w-3/4 m-10 py-10 sm:px-12 px-8 shadow-xl">
			<div class="text-center mb-8">
				<h2 class="h2 font-medium">Willkommen bei FitnessHub!</h2>
				<!-- <img src="Logo.jpg" alt="logo" /> -->
			</div>

			<p class="text-sm mb-16">
				Hier kannst du deine Ziele festlegen und deine Fortschritte verfolgen. Bist du bereits
				registriert? Klicke auf den Button unten, um auf dein Konto zuzugreifen. Wenn nicht, melde
				dich jetzt an und starte deine Fitnessreise mit uns. Zusammen erreichen wir deine Ziele!
			</p>
			<p class="mb-2 sm:ml-0 ml-2 w-1/2 text-sm text-surface-400 dark:text-surface-300">
				Du hast bereits einen Account?
			</p>

			<div class="flex justify-between">
				<a href="/login"
					><span
						class="btn variant-filled px-3 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500"
						>Melde dich an!</span
					></a
				>
				<a href="/registration"
					><span
						class="btn variant-filled px-3 py-2 transition duration-400 hover:bg-tertiary-500 dark:hover:bg-primary-500"
						>Registrierung</span
					></a
				>
			</div>
		</div>
	</section>
</div>
<div class="flex-grow" />

<style>
	.top-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 98% 1%, rgba(var(--color-secondary-200) / 0.33) 0px, transparent 50%);
	}
</style>
