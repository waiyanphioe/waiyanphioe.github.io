const info = {
  baseUrl: "https://waiyanphioe.vercel.app",
  name: "Wai Yan Phioe",
  jobDescription: "Full-Stack Web Developer",
  about: `I'm a software engineer based in Karachi, Pakistan.
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
      id: "home",
      title: "Home"
    },
    {
      id: "features",
      title: "Features"
    },
    {
      id: "product",
      title: "Product"
    },
    {
      id: "clients",
      title: "Clients"
    }
  ],
  experience: [
    {
      name: "InterNative Labs, LLC",
      location: "Karāchi, Sindh, Pakistan",
      startDate: "Apr 2022",
      endDate: "Present",
      description: [
        "- Developing screens and UI components for the web application using React and Tailwind.",
        "- Fixing UI issues and integrating backend APIs with Redux Saga."
      ]
    },
    {
      name: "Coupon Approve (Remote)",
      location: "Amsterdam, North Holland, Netherlands",
      startDate: "Nov 2020",
      endDate: "Apr 2022",
      description: [
        "✓ Developing code in accordance with appropriate design and architectural rules",
        "✓ Documenting, testing, deployment, maintenance, support of platforms, applications, databases and solutions",
        "✓ Help and training of other colleagues",
        "✓ Others tasks connected to the nature of the job",
        "✓ Code Improvements and Refactoring ",
        "✓ Best Practices and Rules Maintainer"
      ]
    },
    {
      name: "Interns Pakistan",
      location: "Pakistan",
      startDate: "Oct 2020",
      endDate: "Nov 2020",
      description: [
        "An Immersive Internship Program that prepares me for the world's most in-demand career. A six weeks program completely based on learning and challenges.",
        "The internship track is built by an industry expert that let develop the skills in the areas most important "
      ]
    }
  ],
  education: [
    {
      name: "Pakistan Institute of Professional Science & Technology (PIPS-TECH)",
      location: "Karāchi, Sindh, Pakistan",
      startDate: "2019",
      endDate: "2022",
      description: ["Diploma of Associate Engineering,  Computer Information Technology (CIT)"]
    },
    {
      name: "Govt. Degree Boys College Buffer Zone",
      location: "Karāchi, Sindh, Pakistan",
      startDate: "2018",
      endDate: "2020",
      description: ["Intermediate, Pre-Engineering"]
    },
    {
      name: "Meiktila University",
      location: "Meiktila, Mandalay, Myanmar.",
      startDate: "2018",
      endDate: "Present",
      description: ["B,  Computer Science"]
    }
  ],
  socialMedia: {
    facebook: "https://www.facebook.com/waiyanphioe",
    twitter: "https://twitter.com/waiyanphioe",
    github: "https://github.com/waiyanphioe",
    email: "waiyanphioe@gmail.com",
    linkedin: "https://www.linkedin.com/in/waiyanphioe"
  },
  projects: [
    {
      title: "Astro Portfolio",
      isFeatured: true,
      thumbnail: "/assets/images/astro-portfolio.png",
      githubUrl: "https://github.com/uzzii-21/astro-portfolio",
      liveUrl: "https://astro-portfolio-uzair.vercel.app/"
    }
  ]
};
const navLinks = [
  {
    path: "#home",
    title: "Home"
  },
  {
    path: "#",
    title: "Features"
  },
  {
    path: "./blogs",
    title: "Product"
  },
  {
    path: "#",
    title: "Clients"
  }
];
export {
  info as i,
  navLinks as n
};
