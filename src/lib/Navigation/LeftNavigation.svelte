<script lang="ts">
	import { drawerStore } from '@skeletonlabs/skeleton';
	import { LL } from '$lib/i18n/i18n-svelte';
	import { page } from '$app/stores';

	function drawerClose(): void {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>{$LL.navigation.homepage()}</a></li>
		<li><a href="/about" on:click={drawerClose}>{$LL.navigation.about()}</a></li>
		{#if $page.data.session?.user}
			<li><a href="/blog" on:click={drawerClose}>Blog</a></li>
			<li><a href="/contact" on:click={drawerClose}>Contact</a></li>
		{/if}
	</ul>
</nav>
