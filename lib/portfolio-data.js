export const siteUrl = "https://mine969.github.io"

export const profile = {
  name: "Hein Htet Zaw",
  title: "Cybersecurity & Cloud Engineer · AI · DevOps · Backend",
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
    cv: "https://drive.google.com/file/d/1n7XDjeKim3p2pf9G44n4MKkXkg-4JPHl/view?usp=sharing",
    cvJapan: "/certificates/Rirekisho_HeinHtetZaw.pdf",
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
      "End-to-end ordering and POS backend hosted on AWS Cloud, covering order flow, kitchen, and delivery stages for an operations-heavy product.",
    result:
      "Positioned as a reliability-first system with clear service boundaries between ordering, kitchen, and delivery stages.",
    tags: ["Backend", "DevOps", "POS", "System Design"],
    github: "https://github.com/mine969/A-Burgar-POS-delivery-system",
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
  {
    title: "DRL Web Vulnerability Scanner",
    description:
      "Co-authored research (submitted to INCIT 2026) designing and training a Double Dueling Deep Q-Network (D3QN) agent for autonomous SQLi and XSS discovery in a custom test environment, Web-Security-Gym.",
    result:
      "Modeled the penetration-testing workflow as a Markov Decision Process with phase-based learning, from reconnaissance through exploitation.",
    tags: ["Deep Reinforcement Learning", "Cybersecurity", "D3QN", "Research"],
    demo: `${siteUrl}/resume`,
    demoText: "Research Paper",
  },
  {
    title: "IT Certification Study Library",
    description:
      "A standalone self-study library for building an IT career path, covering 9 certification tracks including AWS CLF-C02, CompTIA Security+, CKA, and eJPT — packaged as a single offline-ready HTML app.",
    result:
      "405 chapters across 9 tracks, strategically ordered from Thailand-first cloud basics to Japan-ready Kubernetes and security depth, with built-in progress tracking and course search.",
    tags: ["Education", "HTML", "IT Certifications", "Static Site"],
    github: "https://github.com/mine969/cert-prep",
    demo: "https://mine969.github.io/cert-prep/",
    demoText: "Live Site",
  },
  {
    title: "Japanese LMS (Nihongo Daigaku)",
    description:
      "A self-contained Japanese learning web app covering pre-JLPT foundations through JLPT N1, including a dedicated IT Professional Japanese track — all in a single offline-ready HTML file.",
    result:
      "Covers hiragana through N1 with 8 guided learning paths, progress tracking, bookmarks, and IT vocabulary for code review, DevOps, and cloud roles in Japan.",
    tags: ["Education", "HTML", "Language Learning", "Japanese"],
    github: "https://github.com/mine969/japanese-lms",
    demo: "https://mine969.github.io/japanese-lms/",
    demoText: "Live Site",
  },
  {
    title: "Ethical Hacking University (EHU)",
    description:
      "A complete browser-based cybersecurity curriculum covering offensive security, defensive thinking, cloud security, red team operations, vulnerability research, and malware analysis — packaged as a single static HTML app.",
    result:
      "306 chapters across 24 parts, from beginner networking and Linux to advanced Active Directory attacks, malware analysis, and MITRE ATT&CK red team operations.",
    tags: ["Cybersecurity", "Education", "HTML", "Ethical Hacking"],
    github: "https://github.com/mine969/ehu-course",
    demo: "https://mine969.github.io/ehu-course/",
    demoText: "Live Site",
  },
  {
    title: "Basic Computer LMS",
    description:
      "A beginner-friendly digital literacy course for first-time and low-confidence computer learners, covering keyboard basics, file management, browser safety, and email awareness — all in a single offline HTML file.",
    result:
      "4 core chapters with 8 guided learning paths, designed for community training and offline classrooms with no server or install required.",
    tags: ["Education", "HTML", "Digital Literacy", "Beginner"],
    github: "https://github.com/mine969/basic-computer-lms",
    demo: "https://mine969.github.io/basic-computer-lms/",
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
    title: "Shop Manager",
    org: "Tokyo Soteria (NPO)",
    period: "2021 - 2023",
    summary:
      "Full-time role, 8 hours daily on a 9-to-5 shift, managing operations, campaigns, and day-to-day execution in a multilingual environment.",
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
