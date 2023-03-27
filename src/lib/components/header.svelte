<script>
	import { info } from '$lib/utils/info';
	import profile from '$lib/images/profile.jpg';
	import { browser } from '$app/environment';

	let show;
	let menu;
	let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true;
	const handler = () => {
		window.scrollY > 100 ? (show = true) : (show = false);
	};

	function disableTransitionsTemporarily() {
		document.documentElement.classList.add('[&_*]:!transition-none');
		window.setTimeout(() => {
			document.documentElement.classList.remove('[&_*]:!transition-none');
		}, 0);
	}
</script>

<svelte:window on:scroll={handler} />

<header class="w-full h-auto mt-[2rem] lg:mt-3 px-4 fixed z-30 top-0 left-0 right-0">
	<nav
		class={`max-w-4xl h-[3.5rem] flex m-auto items-center rounded-[3.5rem] transition backdrop-saturate-50 backdrop-blur ${
			show ? ' bg-light060 shadow-md dark:bg-darkBg ' : ' bg-dark-transparent'
		}`}
	>
		<ul class="w-full h-full list-none flex justify-between px-[12px] py-[10px] m-0 items-center">
			<li class="w-[2rem] h-[2rem] p-0 text-center items-center">
				<a href="/">
					<img
						src={profile}
						alt="logo"
						class="max-w-[2rem] aspect-square object-contain rounded-full"
					/>
				</a>
			</li>
			<li class="w-auto">
				<ul class="list-none flex w-auto gap-2 py-[10px] px-[12px] md:hidden items-center">
					{#each info.navLinks as navLink}
						<li
							class="font-poppins font-medium capitalize text-[16px] transition-colors text-zinc-600 dark:text-light040 dark:hover:text-white hover:text-dark"
						>
							<a href={navLink.path} class="p-3">{navLink.title}</a>
						</li>
					{/each}
				</ul>
			</li>
			<li class="w-auto">
				<ul class="list-none flex flex-row mr-0 gap-2 items-center">
					<li>
						<button
							type="button"
							role="switch"
							aria-label="Toggle Dark Mode"
							aria-checked={isDarkMode}
							class="p-2 border-none rounded-full bg-slate-200 text-zinc-600 hover:text-dark dark:bg-light005 dark:text-light040 hover:dark:text-light "
							on:click={() => {
								isDarkMode = !isDarkMode;
								localStorage.setItem('isDarkMode', isDarkMode.toString());

								disableTransitionsTemporarily();

								if (isDarkMode) {
									document.documentElement.classList.add('dark');
								} else {
									document.documentElement.classList.remove('dark');
								}
							}}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 dark:block hidden"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
								/>
							</svg>

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6 dark:hidden block"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
								/>
							</svg>
						</button>
					</li>
					<li class="md:hidden block">
						<a
							href="https://google.com"
							target="_blank"
							class={`block py-2 px-6 font-medium transition text-base rounded-3xl border-none text-dark dark:text-light ${
								show
									? 'dark:bg-blue dark:hover:bg-blueDark'
									: 'dark:bg-light020 dark:hover:bg-light010'
							}`}
							rel="noopener noreferrer">Resume</a
						>
					</li>
					<li class="hidden md:block">
						<button
							class="p-2 border-none rounded-full bg-slate-200 text-zinc-600 hover:text-dark dark:bg-light005 dark:text-light040 dark:hover:text-light"
							on:click={() => (menu = !menu)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class={`w-6 h-6 ${menu ? 'hidden' : ''}`}
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
								/>
							</svg>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class={`w-6 h-6 ${menu ? '' : 'hidden'}`}
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</button>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
	<div class={`max-w-4xl p-0 m-0 ${menu ? 'relative' : 'hidden'} minmd:hidden`}>
		<div
			class={`p-6 absolute top-1 right-0 mx-4 my-2 min-w-[140px] rounded-2xl transition backdrop-saturate-50 backdrop-blur bg-light060 dark:shadow dark:bg-darkBg `}
		>
			<ul class="list-none flex flex-col w-auto gap-2 py-[10px] px-[12px] items-center">
				{#each info.navLinks as navLink}
					<li
						class="font-poppins font-medium capitalize text-[16px] transition-colors text-zinc-600 dark:text-light040 dark:hover:text-white hover:text-dark"
					>
						<a href={navLink.path} class="p-3">{navLink.title}</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</header>
