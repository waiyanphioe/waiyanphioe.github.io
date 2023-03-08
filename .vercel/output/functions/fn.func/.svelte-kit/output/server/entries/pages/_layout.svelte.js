import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/index.js";
import { n as navLinks } from "../../chunks/info.js";
const app = "";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer></footer>`;
});
const profile = "/_app/immutable/assets/profile.93768560.jpg";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `

<header class="${"w-full h-auto mt-[2rem] lg:mt-3 px-4 fixed top-0 left-0 right-0"}"><nav${add_attribute(
    "class",
    `max-w-4xl h-[3.5rem] flex m-auto items-center rounded-[3.5rem] transition backdrop-blur-xl ${"bg-[hsla(0, 0%, 7%, 0)] "}`,
    0
  )}><ul class="${"w-full h-full list-none flex justify-between px-[12px] py-[10px] m-0 items-center"}"><li class="${"w-[2rem] h-[2rem] p-0 text-center items-center"}"><a href="${"/"}"><img${add_attribute("src", profile, 0)} alt="${"logo"}" class="${"max-w-[2rem] aspect-square object-contain rounded-full"}" loading="${"lazy"}"></a></li>
			<li class="${"w-auto"}"><ul class="${"list-none flex w-auto gap-2 py-[10px] px-[12px] lg:hidden items-center"}">${each(navLinks, (navLink, index) => {
    return `<li${add_attribute("class", `font-poppins font-medium capitalize text-[16px] text-light040 transition hover:text-light`, 0)}><a${add_attribute("href", navLink.path, 0)} class="${"p-3"}">${escape(navLink.title)}</a>
						</li>`;
  })}</ul></li>
			<li class="${"w-auto"}"><ul class="${"list-none flex flex-row mr-0 gap-2 items-center"}"><li><button class="${"p-2 border-none rounded-full bg-light005 "}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 dark:hidden"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}"></path></svg>

							<svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6 hidden"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"}"></path></svg></button></li>
					<li class="${"md:hidden block"}"><a href="${"https://google.com"}" target="${"_blank"}"${add_attribute(
    "class",
    `w-auto block py-2 px-6 font-medium transition text-base rounded-3xl border-none text-white ${"bg-light020 hover:bg-light010"}`,
    0
  )} rel="${"noopener noreferrer"}">Download CV</a></li>
					<li class="${"hidden md:block"}"><button class="${"p-2 border-none rounded-full bg-light005"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke-width="${"1.5"}" stroke="${"currentColor"}" class="${"w-6 h-6"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}"></path></svg></button></li></ul></li></ul></nav>
	<div${add_attribute("class", `max-w-4xl p-0 m-0 ${"hidden"} minmd:hidden`, 0)}><div${add_attribute("class", `p-6 absolute top-1 right-0 mx-4 my-2 min-w-[140px] rounded-2xl transition backdrop-blur-xl bg-[rgba(31,32,35,.8)] `, 0)}>jjijo
		</div></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"max-w-6xl my-0 mx-auto"}">${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	<main>${slots.default ? slots.default({}) : ``}</main>
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
