import { BetaHomePage } from "@/components/beta-home-page"

export const metadata = {
  title: "Beta Version",
  robots: { index: false, follow: false },
}

export default function BetaVersionPage() {
  return <BetaHomePage isBeta />
}
