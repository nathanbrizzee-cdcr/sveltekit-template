<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<div class=" mx-auto flex flex-col items-center px-4">
	<div class="flex flex-grow items-center">
		<img src="images/EIS.png" alt="Company Logo" class="mr-2 h-8 w-8" />
		<span class="text-sm font-semibold">Enterprise Information Services</span>
	</div>
	<div class="mx-4 mb-1 lg:m-0 lg:px-1">
		<LightSwitch />
	</div>
	<div class="flex flex-grow items-center justify-end">
		<p class="pt-2 text-sm">
			<span class="hidden md:inline">
				© {new Date().getFullYear()}
				California Department of Corrections and Rehabilitation</span
			><span class="inline md:hidden">CDCR</span>
		</p>
	</div>
</div>
