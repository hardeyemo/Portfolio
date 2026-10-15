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
  shots: [
    { label: "Home", src: "/projects/ra-homes/home.png", alt: "RA Homes & Properties home page" },
  ],
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
    description:
      "A full-stack online marketplace for Nigeria, built around a searchable product catalogue and a complete order flow. Customers can browse product variants, manage a cart and wishlist, check out with Paystack, and follow order updates.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Paystack"],
    image: "/projects/drishop/storefront.png",
    gallery: [
      { src: "/projects/drishop/laptop.webp", alt: "Laptop product from the Drishop catalogue" },
      { src: "/projects/drishop/kettle.webp", alt: "Electric kettle product from the Drishop catalogue" },
      { src: "/projects/drishop/serum.webp", alt: "Vitamin C serum product from the Drishop catalogue" },
      { src: "/projects/drishop/rice.webp", alt: "Rice product from the Drishop catalogue" },
    ],
    highlights: [
      "Catalogue search, category and price filters, sorting, pagination, and product variants.",
      "Supabase Auth, customer profiles, wishlists, and protected account and admin routes.",
      "Server-priced checkout with stock reservation, discounts, shipping rules, and Paystack payment verification.",
      "Order status updates and customer email notifications; admin order fulfillment and catalogue visibility controls.",
    ],
    statusNote:
      "The cart currently persists in browser storage. Admin product editing and analytics are future work.",
    url: "https://drishop.vercel.app",
    repo: "https://github.com/hardeyemo/Drishop",
  },
  {
    name: "Shorturl",
    description:
      "A URL shortener interface for turning long links into short links, with an option to create QR codes.",
    stack: [],
    image: "/projects/shorturl-home.png",
    url: "https://bitly.com/",
    repo: "https://github.com/hardeyemo/Shorturl..git",
  },
  {
    name: "Real Est",
    description:
      "A real estate website for browsing property listings, saving bookmarks, and searching for homes to rent or buy.",
    stack: ["TypeScript", "Next.js"],
    image: "/projects/real-est-home.png",
    url: "https://real-est-azure.vercel.app/",
    repo: "https://github.com/hardeyemo/Real_Est",
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
