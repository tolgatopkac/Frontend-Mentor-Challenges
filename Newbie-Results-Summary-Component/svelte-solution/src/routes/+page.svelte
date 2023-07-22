<script>
	import { IconMemory, IconReaction, IconVerbal, IconVisual } from '$lib/assets/images';
	import { summaryList } from '$lib/assets/data/summary-list.js';
	import SummaryList from '../lib/components/SummaryList.svelte';
</script>

<section class="bg-indigo-50 h-screen flex md:items-center justify-center">
	<div
		class="grid md:grid-cols-2 grid-cols-1 rounded-r-[2rem] rounded-l-[2rem] bg-white md:mx-4 lg:mx-36 xl:w-1/2"
	>
		<div
			class="gradient-bg px-14 py-10 flex flex-col items-center justify-center rounded-b-[2rem] md:rounded-[2rem]"
			id="results"
		>
			<p class="text-2xl text-indigo-200 mb-9">Your Result</p>
			<div
				class="flex flex-col items-center justify-center px-14 pt-14 pb-10 result-gradient-bg rounded-full"
			>
				<span class="text-6xl text-white">76</span>
				<span class="text-indigo-200 text-lg">of 100</span>
			</div>
			<div class="mt-7 flex flex-col items-center justify-center">
				<p class="text-white text-3xl">Great</p>
				<p class=" text-center mt-3 text-indigo-200">
					Your performance exceed 65% of the people conducting the test here!
				</p>
			</div>
		</div>
		<div id="summary">
			<div class=" px-10 py-10">
				<p class="text-2xl text-blueGray700 mb-9 rounded-full">Summary</p>

				<div class="flex flex-col gap-4 mb-10" id="summarylist">
					<!-- Reaction -->

					<SummaryList data={summaryList} />
				</div>

				<button class="gradient-bg w-full py-4 rounded-[8rem] hover:gradient-bg-2 text-white"
					>Contine</button
				>
			</div>
		</div>
	</div>
</section>
