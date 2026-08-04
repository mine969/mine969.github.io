import { HubPageContent } from "@/components/hub-page-content"

export const metadata = {
  title: "Collection Hub",
  description:
    "A curated collection of cybersecurity, IT, and DFIR/OSINT tools, trackers, sandboxes, cheatsheets, and reading lists — Hein Htet Zaw's personal bookmark hub.",
  alternates: {
    canonical: "/hub",
  },
}

export default function HubPage() {
  return <HubPageContent />
}
