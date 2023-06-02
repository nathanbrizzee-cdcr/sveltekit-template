<script lang="ts">
	// import { AppShell, AppBar, popup, drawerStore, TabGroup, Tab } from '@skeletonlabs/skeleton';
	// import type { DrawerSettings, PopupSettings } from '@skeletonlabs/skeleton';

	// export const loggedIn = false;

	// /*      ///////////////  Drawers \\\\\\\\\\\\\\\\     */
	// // Drawer Settings
	// const drawerSettingsLeft: DrawerSettings = {
	// 	id: 'left',
	// 	position: 'left',
	// 	width: 'w-1/2 lg:w-1/4',
	// 	bgDrawer: 'bg-white dark:bg-surface-50-900-token',
	// 	bgBackdrop: 'backdrop-opacity-85',
	// 	blur: 'backdrop-blur-md'
	// };

	// const drawerSettingsRight: DrawerSettings = {
	// 	id: 'right',
	// 	position: 'right',
	// 	width: 'w-1/2 lg:w-1/4',
	// 	bgDrawer: 'bg-white dark:bg-surface-50-900-token',
	// 	bgBackdrop: 'backdrop-opacity-85',
	// 	blur: 'backdrop-blur-md'
	// };

	// // Drawer Toggles

	// //TODO: Consolidate these into one function with drawer parameter
	// const toggleRightDrawer = () => toggleDrawer(drawerSettingsRight);
	// const toggleLeftDrawer = () => toggleDrawer(drawerSettingsLeft);

	// //FIXME:  This is causing a 'void is not assignable to type mouseeventhandler' error when trying to add parameter
	// const toggleDrawer = (drawer: DrawerSettings) => drawerStore.open(drawer);

	// /*      ///////////////  End Drawers \\\\\\\\\\\\\\\\     */

	/*      ///////////////  Popup Setting \\\\\\\\\\\\\\\\     */

	// const appmenuPopup: PopupSettings = {
	// 	// Represents the type of event that opens/closed the popup
	// 	event: 'click',
	// 	// Matches the data-popup value on your popup element
	// 	target: 'appmenuPopup',
	// 	// Defines which side of your trigger the popup will appear
	// 	placement: 'bottom'
	// };

	// let showPopupMenu = false;
	// const appbarMenuToggle = () => (showPopupMenu = !showPopupMenu);

	/*      ///////////////  End Popup  \\\\\\\\\\\\\\\\     */
</script>

<!-- <header
	class="flex justify-between bg-white dark:bg-surface-50-900-token fixed top-0 left-0 right-0"
> -->

<!-- <div class="flex items-center">
	<button type="button" class="p-2" on:click={toggleLeftDrawer}>
		<iconify-icon icon="mdi:menu-open" rotate="180deg" width="24" height="24" />
	</button>
	<div class="flex items-center">
		<a href="/" class="flex items-center">
			<img src="/images/siteLogo.svg" alt="Logo" class="w-8 h-8 ml-4 inline" />
			<span class="text-xl font-semibold ml-2" aria-label="Site Title">Site Title</span>
		</a>
	</div>
</div> -->
<!-- <div class="flex items-center">
	<div class="relative">
		<button class="btn py-2 px-4 rounded" use:popup={appmenuPopup}>
			<iconify-icon icon="mdi:menu" width="24" height="24" />
			<span class="hidden md:inline">Menu</span>
		</button>
		<div
			data-popup="appmenuPopup"
			class="bg-white dark:bg-surface-50-900-token border border-gray-300 dark:border-surface-100-800-token"
		>
			<ul class="py-2">
				<li><a href="#" class="px-4 py-2 block">Home</a></li>
				<li><a href="#" class="px-4 py-2 block">About</a></li>
				<li><a href="#" class="px-4 py-2 block">Contact</a></li>
			</ul>
		</div>
	</div>
	<div class="md:flex items-center ml-4">
		{#if loggedIn}
			<button class="btn btn-blue-100 py-2 px-4 rounded flex items-center">
				<iconify-icon icon="mdi:lock-open" width="20" height="20" />
				<span class="hidden md:inline">Logout</span>
			</button>
		{:else}
			<button class="btn btn-blue-100 py-2 px-4 rounded flex items-center">
				<iconify-icon icon="mdi:lock" width="20" height="20" />
				<span class="hidden md:inline">Login</span>
			</button>
		{/if}
	</div>
	<button class=" md:ml-4 p-2" on:click={toggleRightDrawer}>
		<iconify-icon icon="mdi:menu-open" rotate="180" width="24" height="24" />
	</button>
</div> -->
<!-- </header> -->
