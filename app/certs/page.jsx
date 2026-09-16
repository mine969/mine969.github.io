import { CertsPageContent } from "@/components/certs-page-content"

export const metadata = {
  title: "Certification Roadmap",
  description:
    "A technical-only cybersecurity certification roadmap — hands-on credentials across pentest, SOC, forensics, cloud, and more, sourced and credited from PHK Knowledge Sharing's dataset.",
  alternates: {
    canonical: "/certs",
  },
  // Personal planning reference, not a portfolio piece: keep it out of search
  // so a name search surfaces actual work rather than a list of certifications
  // he has not earned yet.
  robots: { index: false, follow: true },
}

export default function CertsPage() {
  return <CertsPageContent />
}
