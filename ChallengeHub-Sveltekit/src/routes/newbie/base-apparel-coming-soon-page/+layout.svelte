<script lang="ts">
	import './app.css';
	import { BGPattern, Logo, HeroMobile, HeroDesktop } from '$lib/img/index';
	import Icon from '@iconify/svelte';

	let email = $state('');
	let isValid = $state(false);
	let errorText = $state('');

	function validateEmail(email: string) {
		console.log(email);
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (emailRegex.test(email)) {
			isValid = false;
			errorText = '';
		} else {
			isValid = true;
			errorText = 'Please provide a valid email';
		}
	}
</script>

<div class="w-screen h-screen overflow-y-hidden">
	<div
		style="background-image: url('{BGPattern}');
	background-size: cover;
	background-repeat: no-repeat;"
		class="font-josefin-sans w-full h-full flex flex-col"
	>
		<nav class="py-6 px-7 bg-white lg:hidden">
			<img class="h-6 object-cover" src={Logo} alt="" />
		</nav>
		<div class="flex h-full flex-col lg:flex-row lg:flex-row-reverse gap-10">
			<div class="lg:h-full lg:w-2/5">
				<img class="w-full block lg:hidden" src={HeroMobile} alt="Hero" />
				<img class="w-full h-full hidden lg:block" src={HeroDesktop} alt="Hero" />
			</div>
			<div
				class="flex flex-col lg:gap-24 items-center justify-center lg:items-start lg:justify-start gap-4 px-8 lg:pt-12 lg:pl-24 lg:w-3/5"
			>
				<div class="hidden lg:block">
					<img class="h-6 object-cover" src={Logo} alt="" />
				</div>
				<div class="flex flex-col lg:flex-col gap-4">
					<h1 class="uppercase text-center lg:text-start text-4xl tracking-widest lg:text-7xl">
						<span class="block text-desaturated-red font-light">we're</span>
						<span class="block font-medium text-dark-grayish-red">coming</span>
						<span class="block font-medium text-dark-grayish-red">soon</span>
					</h1>

					<p
						class="text-center lg:text-start lg:text-sm font-normal text-xs text-desaturated-red lg:max-w-xs"
					>
						Hello fellow shoppers! We're currently building our new fashion store. Add your email
						below to stay up-to-date with announcements and our launch deals.
					</p>

					<div class="w-full relative">
						<input
							bind:value={email}
							placeholder="Email Address"
							class="px-3 py-1.5 w-full text-sm rounded-2xl border border-desaturated-red focus:outline-none focus:border-desaturated-red transition-colors duration-300 ease-in-out placeholder:text-desaturated-red"
							type="text"
						/>
						{#if isValid}
							<p class="absolute -bottom-6 left-0 text-desaturated-red text-xs">
								{errorText}
							</p>
						{/if}
						<button
							onclick={() => validateEmail(email)}
							class="absolute -right-0.5 -top-0.5 text-white gradient-light-red rounded-3xl px-4 py-2 shadow-md focus:outline-none transition-colors duration-300 ease-in-out hover:gradient-dark-red cursor-pointer"
						>
							<Icon icon="ri:arrow-right-s-line" class="text-xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
