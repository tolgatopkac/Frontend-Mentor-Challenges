<script>
  import {
    IconClock,
    IconEthereum,
    IconView,
    ImageAvatar,
    ImageEquilibrium,
  } from "$lib/images"

  let hovering = false
  function handleMouseEnter() {
    hovering = true
  }

  function handleMouseLeave() {
    hovering = false
  }
</script>

<div
  class="bg-mainDarkBlue font-Outfit flex items-center justify-center h-screen"
>
  <!-- Card -->
  <div
    class=" bg-cardDarkBlue text-white mx-4 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 rounded-lg shadow-md flex flex-col gap-4"
  >
    <div class="relative">
      <img
        class="w-full rounded-lg shadow-md"
        src={ImageEquilibrium}
        alt=""
        on:mouseenter={handleMouseEnter}
        on:mouseleave={handleMouseLeave}
      />
      {#if hovering}
        <div
          class="absolute top-0 left-0 w-full h-full bg-cyan bg-opacity-50 cursor-pointer rounded-lg"
        >
          <img
            class=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={IconView}
            alt=""
          />
        </div>
      {/if}
    </div>
    <div class="space-y-3">
      <h1 class="font-semibold text-lg hover:text-cyan cursor-pointer">
        Equilibrium #3429
      </h1>
      <p class="font-thin text-base text-softBlue">
        Our Equilibrium collection promotes balance and calm.
      </p>

      <div class="flex justify-between">
        <div class="flex gap-2 items-center">
          <img src={IconEthereum} alt="" />
          <p class="text-cyan text-sm">0.041 ETH</p>
        </div>
        <div class="flex items-center gap-2">
          <img src={IconClock} alt="" />
          <p class="font-thin text-base text-softBlue">3 days left</p>
        </div>
      </div>

      <div class="border-[1px] border-lineDarkBlue" />

      <div class="flex items-center gap-3">
        <img class="w-6 border-2 rounded-full" src={ImageAvatar} alt="" />

        <p class="text-softBlue text-sm">
          Creation of <span class="text-white hover:text-cyan cursor-pointer"
            >Jules Wyvern</span
          >
        </p>
      </div>
    </div>
  </div>
</div>
