<script>
	import { IconMemory, IconReaction, IconVerbal, IconVisual } from '$lib/assets/images';
	export let data;
	console.log(data);
</script>

{#each data as item}
	<div class="flex justify-between p-4 bg-red-50 rounded-xl">
		<div class="flex gap-3">
			<img src={item.icon} alt="" />
			<p class="text-red-500">Reaction</p>
		</div>
		<p class="text-coolGray400">
			<span class="text-blueGray700">90</span> / <span>100</span>
		</p>
	</div>
{/each}
