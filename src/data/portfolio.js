export const personal = {
  name: "Gbolahan Alaba",
  title: "Tech Lead · ICT Lead · Software Engineer",
  email: "thegbolahanalaba@gmail.com",
  github: "https://github.com/GbolahanAlaba",
  linkedin: "https://www.linkedin.com/in/thegbolahanalaba/",
  // Digits only, with country code (wa.me format)
  whatsapp: "2349092320874",
  instagram: "https://www.instagram.com/thegbolahanalaba/",
  cv: "/Gbolahan-Alaba-CV.pdf",
  location: "Lagos, Nigeria",
  available: true,
  lookingFor: ["Tech Lead", "ICT Lead", "Backend Developer", "Software Engineer", "Head of Technology", "Engineering Manager"],
};

export const stats = [
  { value: "8", label: "Products shipped" },
  { value: "10", label: "Organisations served" },
  { value: "10+", label: "Third-party APIs integrated" },
  { value: "3,000+", label: "Commits since 2024" },
];

// Shown in the "built for" strip
export const organisations = ["Expedier", "Synchgate", "Titaar", "Ajiroba", "Holdbodi", "Entacrest", "SkyTrack ICT", "AMIS", "SoftAmos Global", "Nigerian Breweries"];

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
    text: "Five payment providers behind one API at Synchgate, plus KYC, gift cards, SMS, email and statement generation, and lending software for multi-branch organisations.",
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
    title: "Titaar",
    domain: "Creator commerce",
    role: "Lead engineer",
    year: null,
    description:
      "A sales engine for creators and businesses to sell books, courses, services, digital downloads and physical goods, with personal storefronts, a discovery marketplace, cross-border checkout and an affiliate program. I was the lead engineer on the team that built it.",
    tech: [],
    live: "https://titaar.com",
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
    title: "Holdbodi",
    domain: "Nonprofit",
    role: "Lead engineer",
    year: "2026",
    description:
      "A community support platform that brings individuals, brands and volunteers together to fight food insecurity. Donors give to initiatives through Paystack, volunteers and partners sign up online, and live impact numbers show where the help goes. I built the API and the website.",
    tech: ["Django", "Celery", "React", "TypeScript", "Paystack"],
    live: "https://holdbodi.com",
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
    period: "2021 – now",
    points: [
      "Led technology for Synchgate, Titaar, Ajiroba, Holdbodi, EMS and SkyTrack ICT, from planning with business owners to launch and ongoing support.",
      "Chose and integrated vendors and providers across payments, content and hosting.",
    ],
  },
  {
    role: "Member",
    org: "ForbesBLK",
    period: "2023 – now",
    points: [
      "Member of ForbesBLK, the Forbes community for Black entrepreneurs, professionals and leaders.",
    ],
  },
  {
    role: "Backend Software Engineer",
    org: "Expedier (Fintech)",
    period: "Oct 2024 – May 2026",
    points: [
      "Part of the team that built the B2B web platform.",
      "Supported and maintained the B2C Expedier Global Money app for cross-border payments.",
      "Worked with cross-functional teams on secure financial features aligned with fintech regulations.",
    ],
  },
  {
    role: "Backend Software Engineer",
    org: "Entacrest",
    period: "Jan 2024 – Aug 2024",
    points: [
      "Led a team of 5 engineers to build an internal tool that automated data processing, cutting manual effort by 35%.",
      "Moved deployments onto Docker and Kubernetes, making releases 25% faster and scaling easier.",
      "Found and fixed crash-prone bugs, improving application performance by 15%.",
    ],
  },
  {
    role: "Backend Software Engineer",
    org: "AMIS",
    period: "May 2023 – Dec 2023",
    points: [
      "Built authentication, API services and data models in Python and Django.",
      "Worked in Agile sprints with unit testing and code reviews.",
    ],
  },
  {
    role: "Backend Software Engineer",
    org: "SoftAmos Global",
    period: "Jan 2022 – Mar 2023",
    points: [
      "Introduced code review, unit testing and continuous integration practices that sped up delivery.",
      "Ran backend storage and hosting on AWS (EC2, S3).",
    ],
  },
  {
    role: "IT Support Specialist (Internship)",
    org: "Nigerian Breweries Plc",
    period: "2015 · 7 mos",
    points: [
      "Installed, configured and maintained hardware, software, networks, printers and scanners across the company.",
      "Gave in-person and phone support, set up accounts for new users, and repaired or replaced equipment.",
      "Tested new technology before it was rolled out.",
    ],
  },
];

export const education = [
  { title: "BSc Statistics", org: "University of Ibadan" },
  { title: "OND Electrical/Electronic Engineering", org: "Ronik Polytechnic, Lagos" },
  { title: "Microsoft Certified: Azure Fundamentals", org: "Certification" },
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
    category: "Integrations",
    items: ["Paystack", "Flutterwave", "Paga", "Nomba", "PayPal", "Sumsub (KYC)", "Suregifts (gift cards)", "Termii (SMS)", "Mailgun (email)", "PDFMonkey (statements & documents)"],
  },
  {
    category: "Platforms & Tools",
    items: ["AWS", "Docker", "Vercel", "Electron", "Contentful", "Claude API"],
  },
];

// Headline roles for the hero badge and contact section, e.g. "Tech Lead, ICT Lead & Software Engineer"
const headlineRoles = personal.lookingFor.slice(0, 4);
export const openToRoles = `${headlineRoles.slice(0, -1).join(", ")} & ${headlineRoles.at(-1)}`;

export const whatsappLink = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(
  "Hi Gbolahan, I found your portfolio and would like to chat."
)}`;
