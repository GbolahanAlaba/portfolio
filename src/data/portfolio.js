export const personal = {
  name: "Gbolahan Alaba",
  title: "Full-Stack Software Engineer",
  // TODO: replace with your real contact email before deploying
  email: "gbolahan@example.com",
  github: "https://github.com/GbolahanAlaba",
  linkedin: "https://linkedin.com/in/gbolahanAlaba",
  twitter: "https://twitter.com/gbolahanAlaba",
  location: "Lagos, Nigeria",
  available: true,
  bio: [
    "I'm a software engineer who builds the systems businesses run on: payment rails, lending and cooperative software, commerce platforms and media products, mostly for African markets.",
    "Most of my work lives in the backend (Django, DRF, Celery, real-time channels, payment provider integrations), and I take it all the way to the screen with React, Next.js and TypeScript, including installable PWAs and desktop apps.",
    "I believe technology is a catalyst for positive change. Tools that help a cooperative track its members' savings, or let a small merchant get paid reliably, move us closer to the UN Sustainable Development Goals. That's the work I want to keep doing.",
  ],
};

export const stats = [
  { value: "7", label: "Products shipped" },
  { value: "5", label: "Payment providers integrated" },
  { value: "3,000+", label: "Commits since 2024" },
  { value: "4", label: "Platforms: API, web, PWA, desktop" },
];

export const skills = [
  { category: "Backend", items: ["Python", "Django", "Django REST Framework", "Celery", "Django Channels", "Node.js"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack Query", "PWAs"] },
  { category: "Payments", items: ["Paystack", "Flutterwave", "Paga", "Nomba", "PayPal"] },
  { category: "Data", items: ["PostgreSQL", "SQLite", "Supabase", "Contentful"] },
  { category: "Infra & Tools", items: ["Docker", "AWS", "Vercel", "Electron", "Claude API", "Git"] },
];

export const projects = [
  {
    title: "Synchgate",
    domain: "Payments",
    role: "Backend + frontend",
    year: "2026",
    description:
      "\"The gateway to gateways\": one API over Paystack, Flutterwave, Paga, Nomba and PayPal, with provider routing, a billing engine, invoicing, payroll, POS and compliance modules. I also built the invoicing web app on top of it.",
    tech: ["Django", "DRF", "Celery", "Docker", "AWS", "React", "TypeScript"],
    live: "https://www.synchgate.com",
    featured: true,
  },
  {
    title: "Ajiroba",
    domain: "Commerce",
    role: "Backend",
    year: "2024 – now",
    description:
      "An e-commerce platform with live product auctions, bidding and raffle draws on top of a regular storefront. Real-time bids run over WebSockets, scheduled draws on Celery, and checkout on Paystack.",
    tech: ["Django", "DRF", "Channels", "Celery", "Paystack", "Docker"],
    live: "https://www.ajiroba.com",
    featured: true,
  },
  {
    title: "iGospel",
    domain: "Media",
    role: "Full-stack",
    year: "2025 – now",
    description:
      "A gospel music and media platform: music catalogue and charts, artist and ministry pages, a blog and an in-app wallet. A Django API serves a Next.js frontend, with AI-assisted post writing on Claude and SEO built in.",
    tech: ["Django", "DRF", "Celery", "Next.js", "TypeScript", "Claude API"],
    live: "https://igospel.ng",
    featured: true,
  },
  {
    title: "EMS",
    domain: "Fintech",
    role: "Full-stack",
    year: "2026",
    description:
      "Cooperative, thrift and loan management for multi-branch lenders. A back office for head office and branches, an offline-first PWA for field officers, and a Windows desktop installer, all from one codebase.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "SQLite", "Electron"],
    live: null,
    featured: false,
  },
  {
    title: "SkyTrack ICT",
    domain: "Web",
    role: "Frontend",
    year: "2026",
    description:
      "Rebuilt skytrackict.com.ng off WordPress as a fast React app covering testing centre services, exam-prep training, coworking and room bookings, with Paystack checkout and Contentful as the content store.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Contentful", "Paystack"],
    live: "https://www.skytrackict.com.ng",
    featured: false,
  },
  {
    title: "Expedier",
    domain: "Fintech",
    role: "Backend Engineer",
    year: "1.5 years",
    description:
      "Worked as a backend engineer at Expedier for a year and a half. I was on the team that built the company's B2B web platform, and I supported maintenance of its B2C mobile app platform.",
    tech: [],
    live: "https://expedier.co",
    featured: false,
  },
];

export const timeline = [
  {
    year: "2024",
    title: "Started Ajiroba",
    text: "Took on the backend for an auctions-and-commerce platform. Still shipping to it today, with 2,000+ commits so far.",
  },
  {
    year: "2025",
    title: "Built iGospel end to end",
    text: "Designed the Django API and co-built the Next.js frontend for a gospel music and media platform.",
  },
  {
    year: "2026",
    title: "Went deep on payments and fintech",
    text: "Built Synchgate's multi-provider payment gateway and its invoicing app, then EMS for cooperatives and lenders.",
  },
];
