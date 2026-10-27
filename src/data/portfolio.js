export const personal = {
  name: "Gbolahan Alaba",
  title: "Tech Lead · ICT Lead · Software Engineer",
  email: "thegbolahanalaba@gmail.com",
  github: "https://github.com/GbolahanAlaba",
  linkedin: "https://linkedin.com/in/gbolahanAlaba",
  twitter: "https://twitter.com/gbolahanAlaba",
  location: "Lagos, Nigeria",
  available: true,
  lookingFor: ["Tech Lead", "ICT Lead", "Backend Developer", "Software Engineer", "Head of Technology", "Engineering Manager"],
};

export const stats = [
  { value: "7", label: "Products shipped" },
  { value: "6", label: "Organisations served" },
  { value: "5", label: "Payment providers integrated" },
  { value: "3,000+", label: "Commits since 2024" },
];

// Shown in the "built for" strip
export const organisations = ["Expedier", "Synchgate", "Ajiroba", "iGospel", "Entacrest", "SkyTrack ICT"];

export const strengths = [
  {
    title: "Technology leadership",
    text: "I set the technical direction, turn business goals into a plan the team can deliver, and stay accountable from the first meeting to launch and beyond.",
    size: "large",
  },
  {
    title: "ICT strategy & digital transformation",
    text: "Moving organisations off tools that hold them back. SkyTrack ICT went from WordPress to a fast site that takes payments and bookings online.",
  },
  {
    title: "The bridge between business and tech",
    text: "I speak both languages, so founders, operations and engineers agree on what's being built and why.",
  },
  {
    title: "Payments & fintech systems",
    text: "Five payment providers behind one API at Synchgate, plus lending and cooperative software for multi-branch organisations.",
  },
  {
    title: "Delivery across every platform",
    text: "Web, installable mobile apps, desktop software and APIs, planned and shipped as one coherent product.",
  },
  {
    title: "Still hands-on",
    text: "I write production code in Django, React and Next.js, which means my plans are grounded in what's actually buildable.",
    size: "wide",
  },
];

export const approach = [
  { title: "Understand the business", text: "Start with the goal, the users and the constraints, not the tech." },
  { title: "Plan & choose wisely", text: "Scope the work, pick tools and vendors, and agree on milestones everyone can see." },
  { title: "Build with the team", text: "Ship in small, visible steps, unblock people, and keep quality high." },
  { title: "Launch & support", text: "Go live, watch how it's used, and keep improving after day one." },
];

export const projects = [
  {
    title: "Synchgate",
    domain: "Payments",
    role: "Lead engineer",
    year: "2026",
    description:
      "\"The gateway to gateways\": one platform that connects businesses to Paystack, Flutterwave, Paga, Nomba and PayPal, with billing, invoicing, payroll, POS and compliance built in. I built the platform and its invoicing web app.",
    tech: ["Django", "Celery", "AWS", "React", "TypeScript"],
    live: "https://www.synchgate.com",
    featured: true,
  },
  {
    title: "Ajiroba",
    domain: "Commerce",
    role: "Lead backend engineer",
    year: "2024 – now",
    description:
      "An online marketplace with live auctions, bidding and raffle draws alongside a regular storefront, with real-time bidding and Paystack checkout. I've owned the backend since 2024.",
    tech: ["Django", "Channels", "Celery", "Paystack"],
    live: "https://www.ajiroba.com",
    featured: true,
  },
  {
    title: "iGospel",
    domain: "Media",
    role: "Technical lead",
    year: "2025 – now",
    description:
      "A gospel music and media platform with a music catalogue and charts, ministry pages, a blog and an in-app wallet. I designed the API and co-built the web app, including AI-assisted publishing and search visibility.",
    tech: ["Django", "Next.js", "TypeScript", "Claude API"],
    live: "https://igospel.ng",
    featured: true,
  },
  {
    title: "Expedier",
    domain: "Fintech",
    role: "Backend engineer",
    year: "1.5 years",
    description:
      "I was on the team that built Expedier's B2B web platform, and I supported maintenance of its B2C mobile app platform.",
    tech: [],
    live: "https://expedier.co",
    featured: false,
  },
  {
    title: "EMS",
    domain: "Fintech",
    role: "Lead engineer",
    year: "2026",
    description:
      "Cooperative, thrift and loan management for multi-branch lenders: a back office for head office and branches, an offline app for field officers, and a desktop installer, all from one product.",
    tech: ["React", "TypeScript", "Node.js", "Electron"],
    live: null,
    featured: false,
  },
  {
    title: "SkyTrack ICT",
    domain: "Digital transformation",
    role: "Lead developer",
    year: "2026",
    description:
      "Took skytrackict.com.ng off WordPress and onto a fast modern site covering testing centre services, training, coworking and room bookings, with online payments and easy content editing.",
    tech: ["React", "TypeScript", "Contentful", "Paystack"],
    live: "https://www.skytrackict.com.ng",
    featured: false,
  },
];

export const experience = [
  {
    role: "Lead Engineer & Technology Partner",
    org: "Client and product work",
    period: "2024 – now",
    points: [
      "Led technology for Synchgate, Ajiroba, iGospel, EMS and SkyTrack ICT, from planning with business owners to launch and ongoing support.",
      "Chose and integrated vendors and providers across payments, content and hosting.",
    ],
  },
  {
    role: "Backend Engineer",
    org: "Expedier",
    period: "1 yr 6 mos",
    points: [
      "Part of the team that built the B2B web platform.",
      "Supported maintenance of the B2C mobile app platform.",
    ],
  },
];

export const skills = [
  {
    category: "Leadership",
    items: ["Technical leadership", "ICT strategy", "Digital transformation", "Project delivery", "Stakeholder communication", "Vendor & integration management"],
  },
  {
    category: "Engineering",
    items: ["Python", "Django", "Celery", "Node.js", "React", "Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    category: "Platforms & Tools",
    items: ["Paystack", "Flutterwave", "Paga", "AWS", "Docker", "Vercel", "Electron", "Claude API"],
  },
];

// Headline roles for the hero badge and contact section, e.g. "Tech Lead, ICT Lead & Software Engineer"
const headlineRoles = personal.lookingFor.slice(0, 4);
export const openToRoles = `${headlineRoles.slice(0, -1).join(", ")} & ${headlineRoles.at(-1)}`;
