import { CertsPageContent } from "@/components/certs-page-content"

export const metadata = {
  title: "Certification Roadmap",
  description:
    "A technical-only cybersecurity certification roadmap — hands-on credentials across pentest, SOC, forensics, cloud, and more, sourced and credited from PHK Knowledge Sharing's dataset.",
  alternates: {
    canonical: "/certs",
  },
}

export default function CertsPage() {
  return <CertsPageContent />
}
