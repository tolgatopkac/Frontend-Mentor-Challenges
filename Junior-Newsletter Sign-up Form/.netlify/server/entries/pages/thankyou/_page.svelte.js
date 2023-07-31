import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape } from "../../../chunks/ssr.js";
import { e as email } from "../../../chunks/store.js";
const IconSuccess = "/_app/immutable/assets/icon-success.8cd8eb62.svg";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $email, $$unsubscribe_email;
  $$unsubscribe_email = subscribe(email, (value) => $email = value);
  $$unsubscribe_email();
  return `<div class="flex h-screen items-center justify-center text-blueGray800"><div class="flex flex-col justify-between md:gap-8 bg-white py-12 px-16 md:rounded-lg h-screen md:h-auto w-full md:w-auto rounded-none"><div class="flex flex-col gap-8"><img class="w-1/6"${add_attribute("src", IconSuccess, 0)} alt=""> <h1 class="text-[3.5rem] font-bold" data-svelte-h="svelte-9cqhrt">Thanks for <br> subscribing!</h1> <p>A confirmation email has been sent to <br> <span class="font-bold">${escape($email)}</span>
				Please open it and click
				<br> the button inside to confirm your subscription.</p></div> <a data-sveltekit-reload href="/" class="bg-blueGray800 flex items-center justify-center py-4 px-[4.5rem] text-white rounded-lg hover:bg-tomato hover:shadow-secondaryShadow" data-svelte-h="svelte-px3b16">Dismiss message</a></div></div>`;
});
export {
  Page as default
};
