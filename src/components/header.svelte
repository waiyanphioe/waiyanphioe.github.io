<script>
	import { createLogo } from '../utils';
	import menu from '$lib/images/menu.svg';
	import close from '$lib/images/close.svg';
	export let links;
	export let name;
	let toggle = false;
	const handleToggle = () => {
		if (toggle) {
			toggle = false;
		} else {
			toggle = true;
		}
	};
</script>

<header class="container flex items-center justify-between h-[80px] sm:h-[123px]">
	<a class="text-2xl dark:text-light font-semibold dark:font-semibold font-outfit" href="/"
		>{createLogo(name)}.
	</a>

	<ul class=" list-none sm:flex hidden justify-end items-center flex-1">
		{#each links as link, index}
			<li
				key={index}
				class={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
					index === links.length - 1 ? 'mr-0' : 'mr-10'
				}`}
			>
				<a href={`#${link.id}`} class="tester">
					{link.title}
				</a>
			</li>
		{/each}
	</ul>
	<div class="sm:hidden flex flex-1 justify-end items-center">
		<button on:click={handleToggle} aria-label="Increase the counter by one">
			<img
				src={toggle ? close : menu}
				alt="menu"
				class="w-[28px] h-[28px] object-contain cursor-pointer"
			/>
		</button>

		<div
			class={`${
				toggle ? 'flex' : 'hidden'
			} p-6 bg-black-gradient bg-slate-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
		>
			<ul class=" list-none flex flex-col justify-end items-center flex-1">
				{#each links as link, index}
					<li
						key={index}
						class={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
							index === links.length - 1 ? 'mr-0' : 'mb-4'
						}`}
					>
						<a href={`#${link.id}`} class="tester">
							{link.title}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</header>
