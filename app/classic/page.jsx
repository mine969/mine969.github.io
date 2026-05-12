import { HomePage } from "@/components/home-page"

export const metadata = {
  title: "Classic Version",
  description: "Previous portfolio homepage kept as a backup while the beta version is under review.",
  alternates: {
    canonical: "/classic",
  },
}

export default function ClassicVersionPage() {
  return <HomePage />
}
