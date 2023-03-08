import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { H as Head } from "../../../chunks/head.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Head, "Head").$$render($$result, { name: "Blog" }, {}, {})}

<section><article><h1 class="${"text-white"}">hh</h1></article></section>`;
});
export {
  Page as default
};
