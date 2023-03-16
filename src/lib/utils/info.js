import hoobank from '$lib/images/hoobank.png';

export const info = {
	baseUrl: 'https://waiyanphioe.vercel.app',
	name: 'Wai Yan Phioe',
	jobDescription: 'Full-Stack Web Developer',
	about: `I'm a Full-Stack Web Developer based in Meiktila, Myanmar.
   I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
   I have been working for 3 year, with a demonstrated history of working in the Computer Software industry. Skilled in Front-end Development.
   I have 3 years of experience in HTML, CSS, SCSS, JavaScript, Bootstrap, tailwind CSS, StyledComponent, React JS and Next JS. Hence,
   I have successfully completed several web projects from scratch. 
   Yet, I learn continuously and never stop exploring new technologies.
   So, I have also gained knowledge of Node JS, Express JS, Mongo DB, Python,
   firebase and React Native with time.
  `,
	navLinks: [
		{
			path: '../',
			title: 'Home'
		},
		{
			path: '../about',
			title: 'About'
		},
		{
			path: '../articles',
			title: 'Articles'
		},
		{
			path: '../projects',
			title: 'Projects'
		},
		{
			path: '../uses',
			title: 'Uses'
		}
	],
	experience: [
		{
			name: 'InterNative Labs, LLC',
			location: 'Karāchi, Sindh, Pakistan',
			startDate: 'Apr 2022',
			endDate: 'Present',
			description: [
				'- Developing screens and UI components for the web application using React and Tailwind.',
				'- Fixing UI issues and integrating backend APIs with Redux Saga.'
			]
		},

		{
			name: 'Coupon Approve (Remote)',
			location: 'Amsterdam, North Holland, Netherlands',
			startDate: 'Nov 2020',
			endDate: 'Apr 2022',
			description: [
				'✓ Developing code in accordance with appropriate design and architectural rules',
				'✓ Documenting, testing, deployment, maintenance, support of platforms, applications, databases and solutions',
				'✓ Help and training of other colleagues',
				'✓ Others tasks connected to the nature of the job',
				'✓ Code Improvements and Refactoring ',
				'✓ Best Practices and Rules Maintainer'
			]
		},

		{
			name: 'Interns Pakistan',
			location: 'Pakistan',
			startDate: 'Oct 2020',
			endDate: 'Nov 2020',
			description: [
				"An Immersive Internship Program that prepares me for the world's most in-demand career. A six weeks program completely based on learning and challenges.",
				'The internship track is built by an industry expert that let develop the skills in the areas most important '
			]
		}
	],

	education: [
		{
			name: 'Meta',
			location: 'Online',
			startDate: '2022',
			endDate: '2023',
			description: ['Profi Certificate,  Front-End and Back-End']
		},
		{
			name: 'University of the People',
			location: 'Unite State',
			startDate: '2022',
			endDate: 'Present',
			description: ['B.Sc, Computer Science']
		},
		{
			name: 'Meiktila University',
			location: 'Meiktila, Mandalay, Myanmar.',
			startDate: '2018',
			endDate: 'Present',
			description: ['B.Sc,  Math']
		}
	],

	socialMedia: {
		facebook: 'https://www.facebook.com/waiyanphioe',
		twitter: 'https://twitter.com/waiyanphioe',
		github: 'https://github.com/waiyanphioe',
		email: 'waiyanphioe@gmail.com',
		linkedin: 'https://www.linkedin.com/in/waiyanphioe'
	},

	projects: [
		{
			title: 'HooBank',
			isFeatured: true,
			thumbnail: hoobank,
			githubUrl: 'https://github.com/waiyanphioe/hoobank',
			liveUrl: 'https://hoobank-wyp.vercel.app/'
		},
		{
			title: 'HooBank',
			isFeatured: true,
			thumbnail: hoobank,
			githubUrl: 'https://github.com/uzzii-21/astro-portfolio',
			liveUrl: 'https://astro-portfolio-uzair.vercel.app/'
		}
	]
};
