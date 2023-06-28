<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';
	import { base } from '$app/paths';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="{base}/" on:click={drawerClose}>{$LL.navigation.homepage()}</a></li>
		<li><a href="{base}/about" on:click={drawerClose}>{$LL.navigation.about()}</a></li>
		{#if $page.data.session?.user}
			<li><a href="{base}/blog" on:click={drawerClose}>Blog</a></li>
			<li><a href="{base}/contact" on:click={drawerClose}>Contact</a></li>
		{/if}
	</ul>
</nav>
