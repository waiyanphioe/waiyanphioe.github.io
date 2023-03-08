import { c as create_ssr_component, d as escape, v as validate_component } from "../../chunks/index.js";
import { i as info } from "../../chunks/info.js";
import { H as Head } from "../../chunks/head.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<section class="${"w-full h-screen flex flex-1 flex-col justify-center text-center items-center"}"><p class="${"dark:text-light mt-[117px]"}">Hey, I’m</p>
	<h1 class="${"text-6xl sm:text-8xl main-heading"}">${escape(name)}</h1></section>`;
});
const Project = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><h2>HHH</h2>
	<p>ok</p></div>`;
});
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section class="${"w-full h-screen flex flex-1 flex-col justify-center text-center items-center"}">${validate_component(Project, "Project").$$render($$result, {}, {}, {})}</section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Head, "Head").$$render($$result, { name: "Wai Yan Phioe" }, {}, {})}

${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}
${validate_component(Hero, "Hero").$$render($$result, { name: info.name }, {}, {})}`;
});
export {
  Page as default
};
