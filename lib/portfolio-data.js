export const siteUrl = "https://mine969.github.io"

export const profile = {
  name: "Hein Htet Zaw",
  title: "Cybersecurity, AI, DevOps, and Web Engineering Portfolio",
  location: "Bangkok, Thailand",
  timezone: "ICT (UTC+7)",
  email: "minehhz69@gmail.com",
  phones: {
    thailand: "+66825266477",
    japan: "+819011641513",
  },
  lineId: "hhz_sam",
  links: {
    github: "https://github.com/mine969",
    linkedin: "https://www.linkedin.com/in/mine969/",
    portfolioRepo: "https://github.com/mine969/mine969.github.io",
    cv: "https://drive.google.com/file/d/1dHQF0DrH3ZePVkID6MzT0SGVRxwy6XKc/view?usp=sharing",
    cvJapan: "https://drive.google.com/file/d/1S7RpnVzJKmauAdxEJZvOzU23X7JSIgHo/view?usp=sharing",
    documents: "https://drive.google.com/drive/folders/1_Q9t6AAIMJTmGiWRfmfcT0XEXGSJ66lb?usp=sharing",
    line: "https://line.me/ti/p/~hhz_sam",
  },
  socialImage: "/images/profile-main.jpg",
}

export function getCvLink(locale) {
  return locale === "ja" ? profile.links.cvJapan : profile.links.cv
}

export const projects = [
  {
    title: "Burger POS & Delivery System",
    description:
      "End-to-end ordering and POS concept covering backend structure, transaction flow, and release planning for an operations-heavy product.",
    result:
      "Positioned as a reliability-first system with clear service boundaries and deployment thinking from the start.",
    tags: ["Backend", "DevOps", "POS", "System Design"],
    github: "https://github.com/mine969/A-Burgar-POS-delivery-system.git",
  },
  {
    title: "Healthcare LINE OA Automation",
    description:
      "Internal healthcare workflow tooling for message scheduling, campaign operations, and reporting support for marketing teams.",
    result:
      "Reduced manual coordination pressure by centering repeatable operations and dashboard visibility.",
    tags: ["Automation", "Analytics", "LINE OA", "Marketing Ops"],
    github: "https://github.com/mine969",
  },
  {
    title: "Secure Portfolio Platform",
    description:
      "Static Next.js portfolio engineered for GitHub Pages with accessibility, predictable deploys, and repo maintenance in mind.",
    result:
      "Hardened for root-path GitHub Pages deployment with workflow validation and leaner maintenance overhead.",
    tags: ["Next.js", "Accessibility", "CI/CD", "SEO"],
    github: "https://github.com/mine969/mine969.github.io",
  },
  {
    title: "DRL Web Vulnerability Scanner",
    description:
      "Research project applying an Extended D3QN agent to autonomous web vulnerability discovery across multi-vulnerability benchmark applications.",
    result:
      "Formalized web exploitation as an MDP, built WebSecurityGym, and evaluated adaptive detection of SQLi, XSS, CSRF, IDOR, and related attack paths.",
    tags: ["Deep Reinforcement Learning", "Cybersecurity", "D3QN", "Research"],
    demo: "https://drive.google.com/file/d/1B76Px4Q7UkWqgSRLVGGs1bvkE9D3o8j1/view?usp=sharing",
  },
]

export const services = [
  {
    title: "Release-ready delivery",
    details:
      "I help teams move from working prototype to dependable deployment with build checks, clean repo structure, and stable handoff.",
  },
  {
    title: "Security-first implementation",
    details:
      "I focus on safer defaults, clear validation paths, and engineering choices that reduce deployment and maintenance risk.",
  },
  {
    title: "Backend and product delivery support",
    details:
      "I help connect product needs with reliable backend logic, practical workflows, and clear full-stack support.",
  },
]

export const certifications = [
  {
    name: "Cyber Security 101",
    issuer: "TryHackMe",
    status: "Completed",
  },
  {
    name: "Fundamentals of Cybersecurity Skill Path",
    issuer: "Codecademy",
    status: "Completed",
  },
  {
    name: "Scan Systems with Nmap Skill Path",
    issuer: "Codecademy",
    status: "Completed",
  },
  {
    name: "Linux Course",
    issuer: "Codecademy",
    status: "Completed",
  },
  {
    name: "Bash scripting",
    issuer: "Codecademy",
    status: "Completed",
  },
  {
    name: "Intro to Cloud Computing Course",
    issuer: "Codecademy",
    status: "Completed",
  },
]

export const timeline = [
  {
    title: "Marketing LINE OA Intern",
    org: "Thonburi Bamrungmuang Hospital",
    period: "2025",
    summary:
      "Built internal LINE Official Account workflows and dashboard support for healthcare marketing operations.",
  },
  {
    title: "Bachelor of Science (Digital Innovation and Artificial Intelligence)",
    org: "Rangsit University",
    period: "2023 - 2026",
    summary:
      "Graduated with full credit completed. Focused on cybersecurity, AI, DevOps, software delivery, and product-oriented development, and now awaiting the graduation ceremony.",
  },
  {
    title: "Shop Manager",
    org: "Tokyo Soteria (NPO)",
    period: "2021 - 2023",
    summary:
      "Managed operations, campaigns, and day-to-day execution in a multilingual environment.",
  },
  {
    title: "Pearson HND IT Diploma",
    org: "Gusto International College",
    period: "2016 - 2018",
    summary:
      "Built early foundations in IT systems, software practice, and technical communication.",
  },
]

export const leadershipCommunity = {
  title: "Leadership & Community",
  intro:
    "A compact view of event leadership work that shows coordination, teamwork, logistics support, and calm execution in large student settings.",
  events: [
    {
      title: "RSUnival DIT Thingyan Festival Organizer",
      shortEvent: "RSUnival DIT Thingyan",
      org: "Rangsit University",
      date: "2026 Apr 7",
      location: "Rangsit University",
      description:
        "Helped organize a university-wide student event by supporting team coordination, logistics, scheduling, and on-site operations.",
      bullets: [
        "Coordinated student volunteers across multiple activity teams",
        "Assisted with event logistics, communication, and scheduling",
        "Supported on-site operations for students, staff, and guests",
      ],
    },
    {
      title: "RSU Thingyan Festival Organizer",
      shortEvent: "RSU Thingyan",
      org: "Rangsit University",
      date: "2024 Apr 5",
      location: "Bangkok, Thailand",
      description:
        "Helped organize and coordinate Rangsit University’s Thingyan Festival across multiple years, supporting volunteer coordination, event logistics, activity planning, and on-site execution.",
      bullets: [
        "Rejoined the organizing team for consecutive annual events",
        "Coordinated volunteers and activity teams",
        "Assisted with event flow, logistics, and communication",
        "Supported event operations for a large student audience",
      ],
    },
  ],
  photos: [
    {
      src: "/community/rsunival-team-coordination.jpeg",
      alt: "RSUnival DIT Thingyan Festival team coordination moment",
      caption: "Team Coordination",
      event: "RSUnival DIT Thingyan",
    },
    {
      src: "/community/rsunival-event-operations.jpeg",
      alt: "RSUnival DIT Thingyan Festival event operations moment",
      caption: "Event Operations",
      event: "RSUnival DIT Thingyan",
    },
    {
      src: "/community/rsunival-organizer-team.jpeg",
      alt: "RSUnival DIT Thingyan Festival organizer team moment",
      caption: "Organizer Team",
      event: "RSUnival DIT Thingyan",
    },
    {
      src: "/community/rsu-cultural-activities.png",
      alt: "RSU Thingyan Festival cultural activities moment",
      caption: "Cultural Activities",
      event: "RSU Thingyan",
    },
    {
      src: "/community/rsu-volunteer-support.jpg",
      alt: "RSU Thingyan Festival volunteer support moment",
      caption: "Volunteer Support",
      event: "RSU Thingyan",
    },
    {
      src: "/community/rsu-stage-crowd-moment.jpg",
      alt: "RSU Thingyan Festival stage and crowd moment",
      caption: "Stage / Crowd Moment",
      event: "RSU Thingyan",
    },
    {
      src: "/community/rsu-behind-the-scenes.jpg",
      alt: "RSU Thingyan Festival behind the scenes organizer moment",
      caption: "Behind the Scenes",
      event: "RSU Thingyan",
    },
  ],
}

export const notes = [
  {
    title: "What makes a static deployment production-safe",
    summary:
      "A short breakdown of the checks, path assumptions, and artifact rules that matter when deploying to GitHub Pages.",
    audience: "Backend and platform teams",
  },
  {
    title: "Security habits I bring to student and client work",
    summary:
      "The practical guardrails I apply before release: validation, dependency awareness, access boundaries, and build visibility.",
    audience: "Hiring managers and collaborators",
  },
  {
    title: "Designing portfolio content for technical roles",
    summary:
      "How to write project summaries that explain decisions, outcomes, and engineering responsibility instead of just listing tools.",
    audience: "Students and junior engineers",
  },
]
