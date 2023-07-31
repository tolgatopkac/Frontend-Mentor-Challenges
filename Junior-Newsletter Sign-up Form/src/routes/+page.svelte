<script>
	import { IconList, IconSuccess, IllustrationDesktop, IllustrationMobile } from '$lib/images';
	import Content from '$lib/components/Content.svelte';
</script>

<div class="flex h-screen items-center justify-center">
	<div
		class=" flex flex-col-reverse md:flex-row gap-10 md:gap-16 justify-center my-auto bg-white rounded-[2.25rem] md:pl-16 md:pr-6 md:py-6 shadow-primaryShadow"
	>
		<Content />
		<div class="">
			<img class="hidden md:block" src={IllustrationDesktop} alt="" />
			<img class="md:hidden w-full" src={IllustrationMobile} alt="" />
		</div>
	</div>
</div>
