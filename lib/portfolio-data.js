export const siteUrl = "https://mine969.github.io"

export const profile = {
  name: "Hein Htet Zaw",
  title: "Penetration Testing · Security Research · Backend, DevOps & Cloud",
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
    cv: "/HeinHtetZaw_CV.pdf",
    cvJapan: "/certificates/Rirekisho_HeinHtetZaw.pdf",
    documents: "https://drive.google.com/drive/folders/1_Q9t6AAIMJTmGiWRfmfcT0XEXGSJ66lb?usp=sharing",
    line: "https://line.me/ti/p/~hhz_sam",
    linktree: "https://linktr.ee/mine969",
  },
  socialImage: "/images/profile-main.jpg",
}

// A self-hosted PDF (served from this site) can be force-downloaded with the
// `download` attribute; an external link ignores it, so we only set it for ours.
export function isSelfHostedCv(href) {
  return typeof href === "string" && href.startsWith("/")
}

export function getCvLink(locale) {
  return locale === "ja" ? profile.links.cvJapan : profile.links.cv
}

export const projects = [
  {
    title: "DRL Web Vulnerability Scanner",
    description:
      "Co-authored research (accepted at InCIT 2026, Nov 12\u201314, Bangkok) designing and training a Double Dueling Deep Q-Network (D3QN) agent for autonomous SQLi and XSS discovery in a custom test environment, Web-Security-Gym.",
    result:
      "Modeled the penetration-testing workflow as a Markov Decision Process with phase-based learning, from reconnaissance through exploitation. Accepted for presentation and publication at InCIT 2026.",
    tags: ["Deep Reinforcement Learning", "Cybersecurity", "D3QN", "Research"],
    demo: "https://github.com/mine969/DRL-Agent-vul",
    demoText: "Research Code",
  },
  {
    title: "Ethical Hacking University (EHU)",
    description:
      "A complete browser-based cybersecurity curriculum covering offensive security, defensive thinking, cloud security, red team operations, vulnerability research, and malware analysis — packaged as a single static HTML app.",
    result:
      "306 chapters across 24 parts in a single HTML file, with full-text search, progress tracking, and bookmarks that work with no server and no connection. Content compiled with AI assistance; the platform and offline architecture are my own.",
    tags: ["Cybersecurity", "Education", "HTML", "Ethical Hacking"],
    github: "https://github.com/mine969/ehu-course",
    demo: "https://mine969.github.io/ehu-course/",
    demoText: "Live Site",
  },
  {
    title: "Offline-First Learning Platforms",
    description:
      "Three self-contained study platforms \u2014 IT certification prep, Japanese from hiragana through JLPT N1 (with an IT Japanese track), and beginner digital literacy \u2014 each a single HTML file with full-text search, progress tracking, and bookmarks.",
    result:
      "Built for classrooms and learners with unreliable internet: no install, no backend, no build step, state persisted locally in the browser. Content compiled with AI assistance; the platform, search index, and offline architecture are my own.",
    tags: ["Offline-First", "Static Web", "Education", "HTML"],
    github: "https://github.com/mine969/cert-prep",
    demo: "https://mine969.github.io/cert-prep/",
    demoText: "Live Site",
  },
  {
    title: "Healthcare LINE OA Automation",
    description:
      "Internal healthcare workflow tooling for message scheduling, campaign operations, and reporting support for marketing teams.",
    result:
      "Delivered end-to-end system architecture, workflow diagrams, and flowcharts covering message scheduling cycles, campaign operations, and reporting pipelines for the healthcare marketing team.",
    tags: ["Automation", "Analytics", "LINE OA", "Marketing Ops"],
  },
  {
    title: "Burger POS & Delivery System",
    description:
      "End-to-end ordering and POS backend hosted on AWS Cloud, covering order flow, kitchen, and delivery stages for an operations-heavy product.",
    result:
      "Positioned as a reliability-first system with clear service boundaries between ordering, kitchen, and delivery stages.",
    tags: ["Backend", "DevOps", "POS", "System Design"],
    github: "https://github.com/mine969/A-Burgar-POS-delivery-system",
  },
  {
    title: "Secure Portfolio Platform",
    description:
      "Static Next.js portfolio engineered for GitHub Pages with accessibility, predictable deploys, and repo maintenance in mind.",
    result:
      "Hardened for root-path GitHub Pages deployment with workflow validation and leaner maintenance overhead.",
    tags: ["Next.js", "Accessibility", "CI/CD", "SEO"],
    github: "https://github.com/mine969/mine969.github.io",
    demo: "https://mine969.github.io",
    demoText: "Live Site",
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
    name: "AWS Certified Cloud Practitioner (CLF-C02) Specialization",
    issuer: "Coursera",
    status: "Completed",
    url: "https://coursera.org/verify/specialization/ZLRUTY6PES80",
    localPdf: "/certificates/Coursera_ZLRUTY6PES80.pdf",
  },
  {
    name: "Bachelor's Degree Certificate of Completion (English)",
    issuer: "Rangsit University",
    status: "Completed",
    localPdf: "/certificates/Rangsit_Certificate_EN.pdf",
  },
  {
    name: "Official Academic Transcript",
    issuer: "Rangsit University",
    status: "Completed",
    localPdf: "/certificates/Rangsit_Transcript.pdf",
  },
  {
    name: "Bachelor's Degree Certificate of Completion (Thai)",
    issuer: "Rangsit University",
    status: "Completed",
    localPdf: "/certificates/Rangsit_Certificate_TH.pdf",
  },
  {
    name: "EnglishScore Core Skills (CEFR B2)",
    issuer: "British Council",
    status: "Verified",
    url: "https://englishscore.com/verify",
    verifyCode: "3f52c0398ae5",
    localPdf: "/certificates/EnglishScore_Certificate.pdf",
  },
  {
    name: "Cyber Security 101",
    issuer: "TryHackMe",
    status: "Completed",
  },
]

export const timeline = [
  {
    title: "IT Security Engineer (Pentester)",
    org: "Snoopbees Co., Ltd.",
    period: "Incoming 2026",
    summary:
      "Offer accepted August 2026. Joining the security team to work on penetration testing and application security; start pending work-permit processing.",
  },
  {
    title: "Marketing LINE OA Intern",
    org: "Thonburi Bamrungmuang Hospital",
    period: "2025",
    summary:
      "Completed a 300-hour internship building internal LINE Official Account workflows and dashboard support for healthcare marketing operations.",
  },
  {
    title: "Bachelor of Science (Digital Innovation), First Class Honors",
    org: "Rangsit University",
    period: "2023 - 2026",
    summary:
      "Graduated with First Class Honors, 126 credits completed (cumulative GPA 3.79), officially conferred by Rangsit University in May 2026. Focused on cybersecurity, AI, DevOps, software delivery, and product-oriented development.",
  },
  {
    title: "Social Firm Staff (Part-time)",
    org: "Tokyo Soteria (NPO)",
    period: "Feb 2021 - May 2023",
    summary:
      "Part-time role on a 9-to-5 weekday shift in a social-enterprise food operation \u2014 baking, salad and bento preparation, and counter service \u2014 working alongside staff and members with disabilities in a fully Japanese-language workplace.",
  },
  {
    title: "Data Entry",
    org: "Picturesque Myanmar Tourism",
    period: "2018 - 2021",
    summary:
      "Full-time role, 8 hours daily on a 9-to-5 shift, handling data entry, records management, and administrative operations for a Myanmar-based tourism company.",
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
      src: "/community/rsunival-team-coordination.jpg",
      alt: "RSUnival DIT Thingyan Festival team coordination moment",
      caption: "Team Coordination",
      event: "RSUnival DIT Thingyan",
    },
    {
      src: "/community/rsunival-event-operations.jpg",
      alt: "RSUnival DIT Thingyan Festival event operations moment",
      caption: "Event Operations",
      event: "RSUnival DIT Thingyan",
    },
    {
      src: "/community/rsunival-organizer-team.jpg",
      alt: "RSUnival DIT Thingyan Festival organizer team moment",
      caption: "Organizer Team",
      event: "RSUnival DIT Thingyan",
    },
    {
      src: "/community/rsu-cultural-activities.jpg",
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
