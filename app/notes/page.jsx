import { NotesPageContent } from "@/components/notes-page-content"

export const metadata = {
  title: "Notes",
  description: "Technical notes on deployment, security habits, and writing stronger engineering case studies.",
  alternates: {
    canonical: "/notes",
  },
}

export default function NotesPage() {
  return <NotesPageContent />
}
