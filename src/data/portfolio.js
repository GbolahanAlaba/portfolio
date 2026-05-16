export const personal = {
  name: "Gbolahan Alaba",
  title: "Software Engineer",
  tagline: "Technology as a Catalyst for Positive Change",
  email: "gbolahan@example.com",
  github: "https://github.com/gbolahanAlaba",
  linkedin: "https://linkedin.com/in/gbolahanAlaba",
  twitter: "https://twitter.com/gbolahanAlaba",
  location: "Lagos, Nigeria",
  available: true,
  bio: [
    "I'm a passionate Software Engineer dedicated to leveraging technology as a catalyst for positive change. With a firm belief in the power of innovation, I'm committed to driving progress towards the Sustainable Development Goals (SDGs) set forth by the United Nations.",
    "Throughout my career, I've had the privilege of working at the intersection of technology and social impact, where I've witnessed firsthand the transformative potential we possess to address some of the world's most pressing challenges.",
    "My journey is fueled by a desire to create meaningful solutions that not only solve technical problems but also contribute to a more sustainable and equitable future for all.",
  ],
};

export const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "Django", "GraphQL"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Git", "Linux"] },
  { category: "Impact", items: ["SDGs", "Civic Tech", "EdTech", "HealthTech", "FinTech"] },
];

export const experiences = [
  {
    company: "TechForGood Labs",
    role: "Senior Software Engineer",
    period: "2022 – Present",
    location: "Lagos, Nigeria (Remote)",
    description:
      "Leading development of platforms that connect NGOs with volunteers and donors. Architected a real-time data dashboard used by 30+ organizations tracking SDG progress.",
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Andela",
    role: "Software Engineer",
    period: "2020 – 2022",
    location: "Lagos, Nigeria",
    description:
      "Built scalable APIs and microservices for fintech clients across Africa. Contributed to open-source projects that improved financial inclusion for underserved communities.",
    tech: ["Python", "Django", "Docker", "Redis"],
  },
  {
    company: "Farmcrowdy",
    role: "Frontend Developer",
    period: "2019 – 2020",
    location: "Lagos, Nigeria",
    description:
      "Developed the investor portal and mobile-responsive dashboard for Africa's first digital agriculture platform, helping smallholder farmers access funding.",
    tech: ["Vue.js", "Firebase", "REST APIs"],
  },
];

export const projects = [
  {
    title: "SDG Tracker",
    description:
      "An open-source dashboard enabling governments and NGOs to visualize, track, and report on the 17 United Nations Sustainable Development Goals with real-time data.",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    sdg: "SDG 17 — Partnerships",
    featured: true,
  },
  {
    title: "EduBridge",
    description:
      "A peer-to-peer mentorship platform connecting students in rural Africa with tech professionals globally, bridging the digital divide through accessible education.",
    tech: ["Next.js", "GraphQL", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    live: "https://example.com",
    sdg: "SDG 4 — Quality Education",
    featured: true,
  },
  {
    title: "CleanAir Monitor",
    description:
      "IoT-powered air quality monitoring network for urban communities in Lagos, providing real-time pollution data and health advisories via a public API and mobile app.",
    tech: ["Python", "FastAPI", "React Native", "InfluxDB"],
    github: "https://github.com",
    live: "https://example.com",
    sdg: "SDG 11 — Sustainable Cities",
    featured: true,
  },
  {
    title: "HealthChain",
    description:
      "A blockchain-based medical records system ensuring data privacy and interoperability for patients across healthcare providers in West Africa.",
    tech: ["Solidity", "React", "Node.js", "IPFS"],
    github: "https://github.com",
    live: null,
    sdg: "SDG 3 — Good Health",
    featured: false,
  },
  {
    title: "FarmData API",
    description:
      "RESTful API aggregating satellite imagery, weather data, and soil reports to help smallholder farmers make data-driven planting decisions.",
    tech: ["Python", "Django", "PostGIS", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    sdg: "SDG 2 — Zero Hunger",
    featured: false,
  },
  {
    title: "CivicVoice",
    description:
      "A community engagement platform allowing citizens to report infrastructure issues, track government responsiveness, and hold institutions accountable.",
    tech: ["React", "Node.js", "MySQL", "Mapbox"],
    github: "https://github.com",
    live: "https://example.com",
    sdg: "SDG 16 — Peace & Justice",
    featured: false,
  },
];

export const sdgGoals = [
  { number: 2, name: "Zero Hunger", color: "#DDA63A" },
  { number: 3, name: "Good Health", color: "#4C9F38" },
  { number: 4, name: "Quality Education", color: "#C5192D" },
  { number: 11, name: "Sustainable Cities", color: "#FD9D24" },
  { number: 16, name: "Peace & Justice", color: "#00689D" },
  { number: 17, name: "Partnerships", color: "#19486A" },
];
