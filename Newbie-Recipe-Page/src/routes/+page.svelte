<script lang="ts">
	import Omelette from '$lib/img/omelette.jpeg';
</script>

<main class="lg:p-12 text-base flex flex-col gap-6 text-dark-charcoal font-outfit mb-12">
	<div>
		<img class="lg:rounded-lg" src={Omelette} alt="" />
	</div>

	<div class="px-8 flex flex-col gap-4">
		<h1 class="font-young text-3xl">Simple Omelette Recipe</h1>
		<p class="font-outfit font-normal text-sm">
			An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs
			cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
		</p>
	</div>

	<div class="flex flex-col px-8">
		<div class="bg-rose-white rounded-lg p-4 flex flex-col gap-2">
			<p class="text-dark-raspberry font-outfit font-semibold">Preparation Time</p>
			<ul class="flex flex-col gap-2 list-disc px-4 marker:text-dark-raspberry text-xs">
				<li>
					<span class="font-semibold">Total: </span> Approximately 10 minutes
				</li>
				<li>
					<span class="font-semibold">Preparation: </span> 5 minutes
				</li>
				<li>
					<span class="font-semibold">Cooking: </span> 5 minutes
				</li>
			</ul>
		</div>
	</div>

	<div class="px-8 flex flex-col gap-4">
		<h2 class="text-2xl font-young text-nutmeg">Ingredients</h2>
		<ul class="flex flex-col gap-2 list-disc px-4 marker:text-nutmeg text-xs">
			<li>2-3 large eggs</li>
			<li>Salt, to taste</li>
			<li>Pepper, to taste</li>
			<li>1 tablespoon of butter or oil</li>
			<li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
		</ul>
	</div>

	<div class="px-8">
		<div class="border-b border-b-light-grey"></div>
	</div>

	<div class="px-8 flex flex-col gap-4">
		<h2 class="text-2xl font-young text-nutmeg">Instructions</h2>

		<ol
			class="flex flex-col gap-2 list-decimal text-sm px-4 marker:text-nutmeg marker:font-semibold"
		>
			<li class="pl-2">
				<span class="font-semibold">Beat the eggs:</span>
				In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add
				a tablespoon of water or milk for a fluffier texture.
			</li>
			<li>
				<span class="font-semibold">Heat the pan:</span>
				Place a non-stick frying pan over medium heat and add butter or oil.
			</li>
			<li>
				<span class="font-semibold">Cook the omelette:</span>
				Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
				coat the surface.
			</li>
			<li>
				<span class="font-semibold">Add fillings (optional):</span>
				When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle
				your chosen fillings over one half of the omelette.
			</li>
			<li>
				<span class="font-semibold">Fold and serve:</span>
				As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let
				it cook for another minute, then slide it onto a plate.
			</li>
			<li>
				<span class="font-semibold">Enjoy:</span>
				Serve hot, with additional salt and pepper if needed.
			</li>
		</ol>
	</div>

	<div class="px-8">
		<div class="border-b border-b-light-grey"></div>
	</div>

	<div class="px-8 flex flex-col gap-4">
		<h2 class="text-2xl font-young text-nutmeg">Nutrition</h2>
		<p>The table below shows nutritional values per serving without the additional fillings.</p>

		<table class="w-full table-auto">
			<tbody class="divide-double divide-dark-charcoal">
				<tr class="border-b border-b-light-grey">
					<td class="py-2">Calories</td>
					<td class="text-nutmeg font-medium">277kcal</td>
				</tr>
				<tr class="border-b border-b-light-grey">
					<td class="py-2">Carbs</td>
					<td class="text-nutmeg font-medium">0g</td>
				</tr>
				<tr class="border-b border-b-light-grey">
					<td class="py-2">Protein</td>
					<td class="text-nutmeg font-medium">20g</td>
				</tr>
				<tr class="border-b border-b-light-grey">
					<td class="py-2">Fat</td>
					<td class="text-nutmeg font-medium">22g</td>
				</tr>
			</tbody>
		</table>
	</div>
</main>

<style>
	li {
		padding-left: 0.5rem;
	}
</style>
