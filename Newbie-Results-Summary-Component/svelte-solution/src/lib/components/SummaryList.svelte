<script>
	import { IconMemory, IconReaction, IconVerbal, IconVisual } from '$lib/assets/images';
	export let data;
	console.log(data);
</script>

{#each data as item}
	<div class="flex justify-between p-4 {item.bgcolor} rounded-xl">
		<div class="flex gap-3">
			<img src={item.icon} alt="" />
			<p class={item.textcolor}>{item.title}</p>
		</div>
		<p class="text-coolGray400">
			<span class="text-blueGray700">{item.score}</span> / <span>100</span>
		</p>
	</div>
{/each}
