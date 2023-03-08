<script>
	export let name;
	export let about;
</script>

<section class="min-h-screen p-4">
	<p class="dark:text-light mt-[10rem]">Hey, I’m</p>
	<h1 class="main-heading text-[6rem] lg:text-[5rem] md:text-[4rem] sm:text-[3rem]">{name}</h1>
	<p class="dark:text-light text-lg">
		{about}
	</p>
</section>
