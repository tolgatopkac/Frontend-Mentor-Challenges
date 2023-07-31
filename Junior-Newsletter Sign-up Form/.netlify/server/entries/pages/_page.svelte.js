import { c as create_ssr_component, a as subscribe, b as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import { e as email } from "../../chunks/store.js";
const IconList = "/_app/immutable/assets/icon-list.6857b62e.svg";
const IllustrationDesktop = "/_app/immutable/assets/illustration-sign-up-desktop.e07b7486.svg";
const IllustrationMobile = "/_app/immutable/assets/illustration-sign-up-mobile.228553d5.svg";
const Content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $email, $$unsubscribe_email;
  $$unsubscribe_email = subscribe(email, (value) => $email = value);
  $$unsubscribe_email();
  return `<section class="px-6 md:px-0 flex justify-center flex-col gap-10 pb-10 md:pb-0"><div class="flex flex-col gap-6 text-blueGray800" data-svelte-h="svelte-ugnlr7"><h1 class="font-bold text-[3.5rem]">Stay updated!</h1> <p>Join 60,000+ product managers receiving monthly updates on:</p> <ul class="flex flex-col gap-[0.62rem]"><li class="flex gap-4"><img${add_attribute("src", IconList, 0)} alt=""> <p>Product discovery and building what matters</p></li> <li class="flex gap-4"><img${add_attribute("src", IconList, 0)} alt=""> <p>Measuring to ensure updates are a success</p></li> <li class="flex gap-4"><img${add_attribute("src", IconList, 0)} alt=""> <p>And much more!</p></li></ul></div> <div class="flex flex-col gap-6"><div class="flex flex-col gap-2"><div class="flex justify-between"><p class="text-blueGray800 font-bold text-[0.75rem]" data-svelte-h="svelte-1ufc0j3">Email address</p> ${``}</div> <input type="text" placeholder="email@company.com" class="${"w-full px-6 py-4 border border-gray-300 rounded-lg outline-0 focus:outline-none focus:border-blueGray800 " + escape("", true)}"${add_attribute("value", $email, 0)}></div> <button class="bg-blueGray800 py-4 px-[4.5rem] text-white rounded-lg hover:bg-tomato hover:shadow-secondaryShadow" data-svelte-h="svelte-xrprpw">Subscribe to monthly newsletter</button></div> </section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex h-screen items-center justify-center"><div class="flex flex-col-reverse md:flex-row gap-10 md:gap-16 justify-center my-auto bg-white rounded-[2.25rem] md:pl-16 md:pr-6 md:py-6 shadow-primaryShadow">${validate_component(Content, "Content").$$render($$result, {}, {}, {})} <div class="" data-svelte-h="svelte-1psz14v"><img class="hidden md:block"${add_attribute("src", IllustrationDesktop, 0)} alt=""> <img class="md:hidden w-full"${add_attribute("src", IllustrationMobile, 0)} alt=""></div></div></div>`;
});
export {
  Page as default
};
