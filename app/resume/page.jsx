import { ResumePageContent } from "@/components/resume-page-content"

export const metadata = {
  title: "Resume Snapshot",
  description: "Resume-style overview of Hein Htet Zaw's education, experience, skills, and contact details.",
  alternates: {
    canonical: "/resume",
  },
}

export default function ResumePage() {
  return <ResumePageContent />
}
