<script>
	import { IconList, IconSuccess, IllustrationDesktop, IllustrationMobile } from '$lib/images';
	import { email } from '$lib/store/store.js';
	import { goto } from '$app/navigation';

	let isError = false;
	function validateEmail(email) {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

		if (email.trim() === '') {
			// Handle empty email address
			isError = true;
		} else if (!emailRegex.test(email)) {
			// Handle invalid email address
			isError = true;
		} else {
			// Email is valid, perform necessary actions (e.g., navigate to '/thankyou')
			goto('/thankyou');
		}
	}
</script>

<section class="px-6 md:px-0 flex justify-center flex-col gap-10 pb-10 md:pb-0">
	<div class="flex flex-col gap-6 text-blueGray800">
		<h1 class=" font-bold text-[3.5rem]">Stay updated!</h1>
		<p>Join 60,000+ product managers receiving monthly updates on:</p>

		<ul class="flex flex-col gap-[0.62rem]">
			<li class="flex gap-4">
				<img src={IconList} alt="" />
				<p>Product discovery and building what matters</p>
			</li>
			<li class="flex gap-4">
				<img src={IconList} alt="" />
				<p>Measuring to ensure updates are a success</p>
			</li>
			<li class="flex gap-4">
				<img src={IconList} alt="" />
				<p>And much more!</p>
			</li>
		</ul>
	</div>

	<div class="flex flex-col gap-6">
		<div class="flex flex-col gap-2">
			<div class="flex justify-between">
				<p class="text-blueGray800 font-bold text-[0.75rem]">Email address</p>
				{#if isError}
					<p class="text-tomato text-[0.75rem] font-bold">Valid email required</p>
				{/if}
			</div>
			<input
				type="text"
				placeholder="email@company.com"
				class="w-full px-6 py-4 border border-gray-300 rounded-lg outline-0 focus:outline-none focus:border-blueGray800 {isError
					? 'bg-rose-100 border-tomato'
					: ''}"
				bind:value={$email}
				on:input={() => (isError = false)}
				on:blur={() => (isError = !validateEmail($email))}
			/>
		</div>
		<button
			on:click={validateEmail($email)}
			class="bg-blueGray800 py-4 px-[4.5rem] text-white rounded-lg hover:bg-tomato hover:shadow-secondaryShadow"
			>Subscribe to monthly newsletter</button
		>
	</div>
</section>

<style>
</style>
