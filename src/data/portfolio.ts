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
    "I build full-stack web applications, from responsive interfaces to reliable backends.",
  about: [
    "I build and ship web products end to end, with a focus on clear interfaces, reliable systems, and maintainable code.",
    "Based in Ilorin, Nigeria. I hold a Bachelor of Engineering (B.Eng), Second Class Upper Division.",
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
    "A live property platform built for a real estate brokerage.",
  highlights: [
    "Property search, agent profiles, saved listings, and submissions.",
    "Next.js, TypeScript, Prisma, and MongoDB, with Auth.js, Cloudinary, and Resend.",
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
      note: "Responsive search, agent profiles, and saved listings.",
    },
    {
      name: "Validation",
      tech: "Zod",
      note: "Validates forms before data reaches the backend.",
    },
    {
      name: "Authentication",
      tech: "NextAuth/Auth.js",
      note: "Sign-in for saved properties and listing submissions.",
    },
    {
      name: "Data",
      tech: "Prisma · MongoDB",
      note: "Stores listings, agent profiles, and user data.",
    },
    {
      name: "Services",
      tech: "Cloudinary · Resend",
      note: "Property images and inquiry emails.",
    },
  ],
};

export const otherProjects = [
  {
    name: "Drishop",
    kind: "Full-stack e-commerce storefront",
    description:
      "A Nigerian e-commerce storefront for browsing products, deals, and everyday essentials.",
    highlights: [
      "Product categories, search, wishlist, account, and cart.",
      "Promotions and weekly deals with naira pricing.",
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
      "A mobile-first Ilorin delivery marketplace for food, groceries, and parcels.",
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
      "An education donation platform with a guided giving flow and Paystack payments.",
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
      "Built and shipped full-stack apps with React, Next.js, TypeScript, and Tailwind CSS.",
      "Developed REST APIs and data models with Node.js, Express, MongoDB, and Prisma.",
      "Added authentication, third-party integrations, and interface motion.",
    ],
  },
  {
    role: "Frontend and Backend Web Development",
    points: [
      "Created responsive interfaces and reusable components with React, Next.js, and Tailwind CSS.",
      "Connected frontends to REST APIs, MongoDB, and external services.",
    ],
  },
];

export const education = {
  school: "University of Ilorin",
  degree: "Bachelor of Engineering (B.Eng)",
  detail: "Second Class Upper Division",
};
