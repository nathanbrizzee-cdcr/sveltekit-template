<script lang="ts">
	import { signIn } from '@auth/sveltekit/client';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { seo } from '$lib/stores/SeoStore';

	let loading = false;

	seo.set({
		title: $LL.seo.title(),
		description: $LL.seo.description(),
	});
</script>

<div class="hero-container mx-auto flex max-w-sm flex-col items-center justify-center p-4">
	{#if $page.data.session}
		<p class="my-4 text-center">Nothing to see here</p>
		<a href="/create" class="btn variant-filled-secondary" data-sveltekit-preload-data="hover"
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
</div>
