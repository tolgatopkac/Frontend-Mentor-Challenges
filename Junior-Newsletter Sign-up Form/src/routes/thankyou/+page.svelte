<script>
	import { IconList, IconSuccess, IllustrationDesktop, IllustrationMobile } from '$lib/images';
	import { email } from '$lib/store/store.js';
</script>

<div class="flex h-screen items-center justify-center text-blueGray800">
	<div
		class="flex flex-col justify-between md:gap-8 bg-white py-12 px-16 md:rounded-lg h-screen md:h-auto w-full md:w-auto rounded-none"
	>
		<div class="flex flex-col gap-8">
			<img class="w-1/6" src={IconSuccess} alt="" />
			<h1 class="text-[3.5rem] font-bold">Thanks for <br /> subscribing!</h1>
			<p>
				A confirmation email has been sent to <br />
				<span class="font-bold">{$email}</span>
				Please open it and click
				<br /> the button inside to confirm your subscription.
			</p>
		</div>
		<a
			data-sveltekit-reload
			href="/"
			class="bg-blueGray800 flex items-center justify-center py-4 px-[4.5rem] text-white rounded-lg hover:bg-tomato hover:shadow-secondaryShadow"
			>Dismiss message</a
		>
	</div>
</div>
