<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	// https://www.skeleton.dev/docs/get-started#themes
	import '@skeletonlabs/skeleton/themes/theme-hamlindigo.css';
	// Your custom Skeleton theme.  If you use a built in, comment this out and use the above theme
	// import '../theme.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import { setLocale } from '$lib/i18n/i18n-svelte.js';
	// import { page } from '$app/stores';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { seo } from '$lib/stores/SeoStore';
	import {
		AppBar,
		AppShell,
		Drawer,
		drawerStore,
		storePopup,
		type DrawerSettings,
	} from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import LeftNavigation from '$/lib/Navigation/LeftNavigation.svelte';
	import TopNavigation from '$lib/Navigation/TopNavigation.svelte';
	import NavTrail from '$/lib/Navigation/NavTrail.svelte';
	// import { onDestroy } from 'svelte';
	import Seo from './SEO.svelte';

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data;

	// let rightDrawerSettings: DrawerSettings = { id: 'right-drawer' };
	// function drawerRightOpen(): void {
	// 	drawerStore.open(rightDrawerSettings);
	// }

	const leftDrawerSettings: DrawerSettings = { id: 'left-drawer' };
	function drawerLeftOpen(): void {
		drawerStore.open(leftDrawerSettings);
	}

	// let rightDrawerState: DrawerSettings = rightDrawerSettings;
	// let leftDrawerState: DrawerSettings = leftDrawerSettings;
	// const unsubscribe = drawerStore.subscribe((value) => {
	// 	// if (value.id === 'right-drawer') {
	// 	// 	rightDrawerState = value;
	// 	// }
	// 	// if (value.id === 'left-drawer') {
	// 	// 	leftDrawerState = value;
	// 	// }
	// });

	function drawerClose(): void {
		drawerStore.close();
	}

	setLocale(data.locale);
	// onDestroy(unsubscribe);
</script>

<Seo title={$seo.title} description={$seo.description} />

<Drawer>
	{#if $drawerStore.id === 'left-drawer'}
		<div class="flex items-center">
			<button class="btn btn-sm mr-4 lg:hidden" on:click={drawerClose}>
				<span>
					<iconify-icon icon="mdi:arrow-left-bold" width="32" height="32" />
				</span>
			</button>
			<h2 class="p-4">{$LL.navigation.title()}</h2>
		</div>
		<hr />
		<LeftNavigation />
	{/if}
</Drawer>

<AppShell slotSidebarLeft="bg-surface-500/5 w-0 lg:w-64">
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<div class="flex items-center">
					<button class="btn btn-sm mr-4 lg:hidden" on:click={drawerLeftOpen}>
						<span>
							<svg viewBox="0 0 100 80" class="h-4 w-4 fill-token">
								<rect width="100" height="20" />
								<rect y="30" width="100" height="20" />
								<rect y="60" width="100" height="20" />
							</svg>
						</span>
					</button>
					<strong class="text-xl uppercase">{$LL.seo.title()}</strong>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<TopNavigation />
				<NavTrail />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<!-- <LeftNavigation /> -->
	</svelte:fragment>
	<!-- <svelte:fragment slot="sidebarRight">Sidebar Right goes here</svelte:fragment> -->
	<!-- <svelte:fragment slot="pageHeader">Page Header</svelte:fragment> -->
	<div class="w-full px-2 pt-2 md:px-4 lg:px-8">
		<slot />
	</div>
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
	<!-- <svelte:fragment slot="footer">Footer</svelte:fragment> -->
</AppShell>
