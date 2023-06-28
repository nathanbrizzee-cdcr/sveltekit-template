<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// import '@skeletonlabs/skeleton/themes/theme-modern.css';
	import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/js/all.js';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { signOut, signIn } from '@auth/sveltekit/client';

	/// Structure
	// import Header from '$lib/Layout/Header.svelte';
	import Footer from '$lib/Layout/Footer.svelte';
	// import RightAside from '$lib/Layout/RightAside.svelte';
	// import LeftAside from '$lib/Layout/LeftAside.svelte';
	// import { onMount } from 'svelte';

	// Skeleton Stuff
	import {
		AppShell,
		AppBar,
		Drawer,
		drawerStore,
		storePopup,
		type DrawerSettings,
		type PopupSettings,
		popup,
	} from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { setLocale, LL } from '$lib/i18n/i18n-svelte';
	// import { page } from '$app/stores';
	import { seo } from '$lib/stores/SeoStore';
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	import Seo from './SEO.svelte';

	//
	// Begin App Code
	//

	export let data;

	storePopup.set({
		computePosition,
		autoUpdate,
		offset,
		shift,
		flip,
		arrow,
	});

	export let isLoading = false;

	/*      ///////////////  Drawers \\\\\\\\\\\\\\\\     */
	// Drawer Settings
	const drawerSettingsLeft: DrawerSettings = {
		id: 'left',
		position: 'left',
		width: 'w-1/2 lg:w-1/4',
		bgDrawer: 'bg-white dark:bg-surface-50-900-token',
		bgBackdrop: 'backdrop-opacity-85',
		blur: 'backdrop-blur-md',
	};

	const drawerSettingsRight: DrawerSettings = {
		id: 'right',
		position: 'right',
		width: 'w-1/2 lg:w-1/4',
		bgDrawer: 'bg-white dark:bg-surface-50-900-token',
		bgBackdrop: 'backdrop-opacity-85',
		blur: 'backdrop-blur-md',
	};

	// FIXME:  This is causing a 'void is not assignable to type mouseeventhandler' error when trying to add parameter
	const toggleDrawer = (drawer: DrawerSettings) => drawerStore.open(drawer);

	// TODO: Consolidate these into one function with drawer parameter
	const toggleRightDrawer = () => toggleDrawer(drawerSettingsRight);
	const toggleLeftDrawer = () => toggleDrawer(drawerSettingsLeft);

	setLocale(data.locale);
	// onDestroy(unsubscribe);

	const appmenuPopup: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'appmenuPopup',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom',
	};

	let loading = false;

	const signOutClick = () => {
		loading = true;
		signOut();
	};

	const signInClick = () => {
		loading = true;
		signIn('keycloak');
	};
</script>

<Seo title={$seo.title} description={$seo.description} />

<AppShell>
	<div class="fixed left-0 top-0 h-full">
		<button
			class="btn-sm absolute left-0 top-1/3 flex h-14 w-2 items-center justify-center rounded border-b-2 border-r-2 border-t border-surface-300 border-t-slate-300 bg-white pl-4 shadow-lg dark:border-surface-400 dark:bg-surface-700"
			on:click={toggleLeftDrawer}>
			<i class="fa-solid fa-angles-right" />
		</button>
	</div>

	<div class="fixed right-0 top-0 h-full">
		<button
			class="btn-sm absolute right-0 top-24 flex h-14 w-2 items-center justify-center rounded border-b-2 border-l-2 border-t border-surface-300 border-t-slate-300 bg-white pl-4 shadow-lg dark:border-surface-400 dark:bg-surface-700"
			on:click={toggleRightDrawer}>
			<i class="fa-solid fa-angles-left" />
		</button>
	</div>
	<svelte:fragment slot="header">
		<AppBar background="bg-white dark:bg-surface-50-900-token">
			<svelte:fragment slot="lead"
				><button type="button" class="p-2" on:click={toggleLeftDrawer}>
					<i class="fa-solid fa-angles-right" />
				</button>
				<div class="flex items-center">
					<a href="{base}/" class="flex items-center">
						<img src="images/CDCR-seal.svg" alt="Logo" class="ml-4 inline h-12 w-12" />
						<span class="ml-2 text-2xl font-bold" aria-label="Site Title">{$LL.seo.title()}</span>
					</a>
				</div>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<div class="flex items-center">
					<div class="relative">
						<button
							class="md:variant-ringed-surface btn rounded px-4 py-2 md:mr-2"
							use:popup={appmenuPopup}>
							<i class="fa-solid fa-bars" />
							<span class="hidden md:inline md:pl-1">Menu</span>
							<i class="fa-solid fa-caret-down" />
						</button>
						<div
							data-popup="appmenuPopup"
							class="border border-gray-300 bg-white dark:bg-surface-50-900-token dark:border-surface-100-800-token">
							<ul class="py-2">
								<!-- TODO remove a11y comments -->
								<!-- svelte-ignore a11y-invalid-attribute -->
								<li><a href="#" class="block px-4 py-2">Home</a></li>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<li><a href="#" class="block px-4 py-2">About</a></li>
								<!-- svelte-ignore a11y-invalid-attribute -->
								<li><a href="#" class="block px-4 py-2">Contact</a></li>
							</ul>
						</div>
					</div>
					<div class="items-center md:flex">
						{#if $page.data.session?.user}
							<button
								on:click|once={signOutClick}
								class="md:variant-ringed-surface btn flex items-center rounded px-4 py-2"
								disabled={loading}>
								<i class="fa-solid fa-lock-open" />
								<span class="hidden md:inline">
									{#if loading}
										{$LL.messages.pleaseWait()} <ProgressRadial class="ml-2 h-6 w-6" stroke={100} />
									{:else}
										{$LL.buttons.logOut()}
									{/if}
								</span>
							</button>
						{:else}
							<button
								on:click|once={signInClick}
								class="md:variant-ringed-surface btn flex items-center rounded px-4 py-2"
								disabled={loading}>
								<i class="fa-solid fa-lock" />
								<span class="hidden md:inline">{$LL.buttons.logIn()}</span>
							</button>
						{/if}
					</div>
					<button class="p-2 md:ml-4" on:click={toggleRightDrawer}>
						<i class="fa-solid fa-angles-left" />
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarLeft">bar left</svelte:fragment> -->
	<!-- <svelte:fragment slot="sidebarRight">bar Right</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<!-- Router Slot -->
	<div class="container">
		{#if isLoading}
			<span>Loading...</span>
		{:else}
			<slot />
		{/if}
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>

	<Drawer id="right" />
	<Drawer id="left" />
</AppShell>

<!-- <AppShell>
	<AppBar>
		<Header />
	</AppBar>
	<main id="main-content" class="container max-h-full max-w-full h-full mt-4">
		<div class="flex flex-col lg:flex-row py-4 px-3">
			<div class="lg:w-1/4 order-2 lg:order-1">
				<LeftAside />
			</div>
			<div class="w-full h-full lg:w-3/4 order-1 lg:order-2 p-6">
				{#if isLoading}
					<span>Loading...</span>
				{:else}
					<slot />
				{/if}
			</div>
			<div class="w-full lg:w-1/4 static order-3 lg:order-3">
				<RightAside />
			</div>
		</div>
	</main>

	<Footer />
	<Drawer id="right" />
	<span class="z-999">
		<Drawer id="left" />
	</span>
</AppShell> -->
