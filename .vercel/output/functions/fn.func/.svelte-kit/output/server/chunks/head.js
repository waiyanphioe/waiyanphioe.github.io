import { c as create_ssr_component, d as escape } from "./index.js";
const Head = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `${$$result.head += `<!-- HEAD_svelte-1sv3h_START -->${$$result.title = `<title>${escape(name)}</title>`, ""}<!-- HEAD_svelte-1sv3h_END -->`, ""}`;
});
export {
  Head as H
};
