<script>
	export let name;
</script>

<section class="min-h-screen">
	<div class="min-h-screen flex flex-col justify-start md:justify-center items-center flex-wrap">
		<div class="w-full flex justify-center items-center flex-wrap">
			<div>
				<p class="dark:text-light mt-[10rem] sm:mt-[6rem] text-[1rem]">Hi, I'm</p>
				<h1
					class="main-heading font-outfit text-[6rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem]"
				>
					<span>{name}.</span><br />
					<span>I build things for the web.</span>
				</h1>
				<p class="dark:text-light text-lg">
					A Software engineer with a passion for solving problems and learning new things.
				</p>
			</div>
		</div>

		<div class="text-center absolute bottom-5">
			<a
				href="/#about"
				class="animate-bounce md:hidden left-1/2 transform -translate-x-1/2 flex items-center flex-col text-dark dark:text-light"
			>
				<p>Scroll Down</p>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<path
						d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"
					/>
					<path d="M11 6h2v6h-2z" />
				</svg>
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
					<path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
				</svg>
			</a>
		</div>
	</div>
</section>
