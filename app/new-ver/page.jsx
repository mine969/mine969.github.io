import { BetaHomePage } from "@/components/beta-home-page"

export const metadata = {
  title: "Beta Version",
  description: "Minimal beta version of the portfolio for review before replacing the current homepage.",
  alternates: {
    canonical: "/new-ver",
  },
}

export default function BetaVersionPage() {
  return <BetaHomePage isBeta />
}
