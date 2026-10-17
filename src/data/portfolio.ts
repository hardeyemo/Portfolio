// Single source of truth for all portfolio content.
// Everything here comes from your resume. Edit this file, not the components.

export const profile = {
  name: "Adebiyi Idris",
  title: "Full-Stack Developer",
  location: "Ilorin, Nigeria",
  email: "adebiyiidris30@gmail.com",
  github: "https://github.com/hardeyemo",
  linkedin: "https://linkedin.com/in/hardeyemo",
  resume: "/Adebiyi_Idris_Resume.pdf",
  tagline:
    "I build production web apps end to end, from animated interfaces to the database behind them.",
  about: [
    "I'm a full-stack developer who builds dependable, production-grade web applications: responsive, animated interfaces on the front, well-structured services and databases behind them.",
    "I'm comfortable owning a feature from architecture through deployment, with a focus on clean code, data integrity, and systems that hold up under real usage rather than just in the demo.",
    "I studied Agricultural Engineering at the University of Ilorin, and I'm drawn to teams that value long-term reliability and craftsmanship over quick, disposable builds.",
  ],
};

export const nav = [
  { id: "about", label: "About" },
  { id: "featured", label: "Featured project" },
  { id: "projects", label: "More work" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const featured = {
  name: "RA Homes & Properties",
  kind: "Real estate platform",
  url: "https://www.rahomesproperties.com",
  urlLabel: "www.rahomesproperties.com",
  // Add your repository URL here to show the GitHub button. Leave empty to hide it.
  repo: "https://github.com/hardeyemo/ra-homes",
  summary:
    "A full-stack property listing platform I built and shipped for a real estate brokerage. It's live in production.",
  highlights: [
    "Public listings search, agent profiles, saved properties, and a property-submission flow.",
    "Next.js, React, TypeScript and Tailwind CSS on the front end; MongoDB modeled and queried through Prisma.",
    "Authentication with NextAuth/Auth.js, with forms and inputs validated by Zod schemas.",
    "Property images uploaded and delivered through Cloudinary.",
    "Resend sends transactional email for viewing requests and listing inquiries.",
  ],
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Framer Motion",
    "GSAP",
    "Prisma",
    "MongoDB",
    "Auth.js",
    "Zod",
    "Cloudinary",
    "Resend",
  ],
  screenshot: {
    src: "/projects/ra-homes/home.png",
    alt: "RA Homes & Properties homepage featuring its Ilorin real estate listings",
  },
  layers: [
    {
      name: "Interface",
      tech: "Next.js · React · TypeScript · Tailwind CSS",
      note: "Responsive pages for search, agent profiles, and saved properties.",
    },
    {
      name: "Validation",
      tech: "Zod",
      note: "Forms and inputs are checked against schemas before they reach the data layer.",
    },
    {
      name: "Authentication",
      tech: "NextAuth/Auth.js",
      note: "Secure sign-in for users who save properties and submit listings.",
    },
    {
      name: "Data",
      tech: "Prisma · MongoDB",
      note: "Prisma models and queries the listing, agent and user data.",
    },
    {
      name: "Services",
      tech: "Cloudinary · Resend",
      note: "Cloudinary handles property images. Resend delivers viewing-request and inquiry emails.",
    },
  ],
};

export const otherProjects = [
  {
    name: "Drishop",
    kind: "Full-stack e-commerce storefront",
    description:
      "A responsive Nigerian e-commerce storefront with department and category navigation, product discovery, promotional deals, and clear naira pricing. The storefront presents search, wishlist, account, cart, and delivery entry points.",
    highlights: [
      "Browse a broad product catalog across phones, home, fashion, beauty, groceries, and other departments.",
      "Discover popular finds, discounted products, and scheduled weekly deals.",
      "Storefront interface includes product search, wishlist, account, cart, and delivery messaging.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    url: "https://drishop.vercel.app",
    repo: "https://github.com/hardeyemo/Drishop",
    screenshot: {
      src: "/projects/drishop/storefront.png",
      alt: "Drishop storefront showing product discovery, weekly deals, and product cards",
    },
  },
  {
    name: "Drovana",
    kind: "Mobile-first delivery marketplace",
    description:
      "A mobile-first delivery marketplace for Ilorin, Kwara State, connecting customers with local delivery services for food, groceries, local finds, and parcels.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS v4", "Supabase Auth", "PostgreSQL", "Zod", "Paystack"],
    url: "https://drovana-five.vercel.app/",
    repo: "https://github.com/hardeyemo/Drovana",
    screenshot: {
      src: "/projects/drovana/homepage.png",
      alt: "Drovana homepage featuring its local delivery service in Ilorin",
    },
  },
  {
    name: "Education Donation Platform",
    description:
      "A donation website supporting access to quality education for children. Animation guides donors through the giving flow and builds trust at each step. Paystack handles payments end to end.",
    stack: ["React", "Tailwind CSS", "Paystack"],
    url: "",
    repo: "",
  },
];

export const stackGroups = [
  { group: "Languages", items: ["JavaScript", "TypeScript"] },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "shadcn/ui",
      "HTML5",
      "CSS3",
      "Responsive design",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Authentication", "Third-party API integration"],
  },
  { group: "Databases and ORM", items: ["MongoDB", "Mongoose", "Prisma"] },
  { group: "Auth, validation, media", items: ["NextAuth/Auth.js", "Zod", "Cloudinary"] },
  { group: "Tooling and platforms", items: ["Git", "GitHub", "Firebase", "Vercel", "Resend"] },
];

// Your resume lists these roles without employers or dates, so none are shown.
// Add `org` and `period` to an entry when you want them displayed.
export const experience: {
  role: string;
  org?: string;
  period?: string;
  points: string[];
}[] = [
  {
    role: "Full-Stack Web Development",
    points: [
      "Designed and built full-stack web applications end to end with React.js, Next.js, JavaScript/TypeScript and Tailwind CSS, taking each feature from planning through deployment.",
      "Built and maintained backend services and REST APIs with Node.js and Express.js, structuring data models in MongoDB and Prisma for reliability and easy long-term maintenance.",
      "Implemented authentication flows, third-party API integrations, and UI motion with Framer Motion and GSAP to improve usability without compromising load times.",
    ],
  },
  {
    role: "Frontend and Backend Web Development",
    points: [
      "Built responsive, accessible interfaces with React.js, Next.js, Tailwind CSS and shadcn/ui, plus reusable component libraries that kept codebases maintainable as products grew.",
      "Designed backend architecture and REST APIs with Node.js and Express.js, connecting frontends to MongoDB and external services for dependable data flow.",
    ],
  },
];

export const education = {
  school: "University of Ilorin",
  degree: "B.Eng, Agricultural Engineering",
  detail: "Second Class Upper Division",
};
