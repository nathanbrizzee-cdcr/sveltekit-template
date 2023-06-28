<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { ProgressBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { seo } from '$lib/stores/SeoStore';
	import { base } from '$app/paths';

	const loginLL = $LL.pages.root.login;

	let loading = false;
	let enableButton = false;

	seo.set({
		title: $LL.seo.title(),
		description: $LL.seo.description(),
	});
</script>

<div class="fixed left-0 top-48 flex w-full items-center justify-center">
	{#if $page.data.session}
		<p class="my-4 text-center">Nothing to see here</p>
		<a href="{base}/create" class="btn variant-filled-secondary" data-sveltekit-preload-data="hover"
			>{$LL.buttons.create()}</a>
	{:else}
		<div class="relative w-1/2">
			<img src="images/CDCR-seal.svg" alt="State Seal" class="mx-auto w-1/2 opacity-10" />
			<div class="translate-x absolute w-full -translate-y-36 transform space-y-6 text-center">
				<h2 class="text-2xl font-semibold">{loginLL.headline}</h2>
				<p class="text-left text-sm md:text-base">
					{loginLL.body()}
				</p>
				<label class="flex items-center space-x-2">
					<input class="bg-surface checkbox" type="checkbox" bind:checked={enableButton} />
					<p class="text-sm md:text-base">{loginLL.acknowledgement()}</p>
				</label>
				<button
					type="button"
					on:click|once={function loginClick() {
						loading = true;
						signIn('keycloak');
					}}
					class="btn-sm variant-ghost-surface w-full disabled:variant-soft-surface md:btn disabled:cursor-not-allowed disabled:opacity-5"
					disabled={!enableButton}>
					{#if enableButton}
						{#if loading}
							{$LL.messages.pleaseWait()}
						{:else}
							{loginLL.loginBtn()} {$LL.seo.title()}
						{/if}
					{:else}
						{loginLL.disabledBtn()}
					{/if}
				</button>
				<ProgressBar
					class={loading ? 'block' : 'hidden'}
					label="Loading Bar"
					meter="bg-surface-900-50-token" />
			</div>
		</div>
	{/if}
</div>

<!-- <div class="hero-container mx-auto flex max-w-sm flex-col items-center justify-center p-4">
	{#if $page.data.session}
		<p class="my-4 text-center">Nothing to see here</p>
		<a href="{base}/create" class="btn variant-filled-secondary" data-sveltekit-preload-data="hover"
			>{$LL.buttons.create()}</a>
	{:else}
		<p class="my-4 text-center">{$LL.pages.root.messages.tagline()}</p>
		<button
			on:click|once={function loginClick() {
				loading = true;
				signIn('keycloak');
			}}
			disabled={loading}
			class="btn variant-filled-primary cursor-pointer">
			{#if loading}
				{$LL.messages.pleaseWait()} <ProgressRadial class="ml-2 h-6 w-6" stroke={100} />
			{:else}
				{$LL.buttons.logIn()}
			{/if}
		</button>
	{/if}
</div> -->

<!-- <style>
	wrapText {
		word-wrap: balance;
	}
</style> -->
