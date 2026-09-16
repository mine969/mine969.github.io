import { GeistSans } from "geist/font/sans"
import { Suspense } from "react"
import "./globals.css"
import { LocaleProvider } from "@/components/locale-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { profile, siteUrl } from "@/lib/portfolio-data"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} | ${profile.title}`,
    template: `%s | ${profile.name}`,
  },
  description:
    "Hein Htet Zaw — incoming IT Security Engineer (Pentester) at Snoopbees, Bangkok. B.Sc. Digital Innovation, First Class Honors (GPA 3.79), Rangsit University. Co-author of a D3QN autonomous web-vulnerability paper accepted at InCIT 2026.",
  keywords: [
    "Hein Htet Zaw",
    "Cybersecurity",
    "Cloud Computing",
    "AWS",
    "AWS Certified Cloud Practitioner",
    "AI Engineer",
    "Backend Developer",
    "DevOps",
    "Penetration Testing",
    "Pentester",
    "Offensive Security",
    "Deep Reinforcement Learning",
    "D3QN",
    "InCIT 2026",
    "Rangsit University",
    "Technical Portfolio",
    "Portfolio",
    "Bangkok",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | Cybersecurity · Cloud · AI · DevOps`,
    description:
      "Incoming IT Security Engineer (Pentester) at Snoopbees, Bangkok. D3QN web-vulnerability research accepted at InCIT 2026. Cybersecurity · AWS · AI · DevOps.",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    images: [
      {
        url: "/images/og-card.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name} — Cybersecurity, Cloud & AI Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | Cybersecurity · Cloud · AI · DevOps`,
    description:
      "Incoming IT Security Engineer (Pentester) at Snoopbees, Bangkok. D3QN research accepted at InCIT 2026. Cybersecurity · AWS CLF-C02 · AI · DevOps.",
    images: ["/images/og-card.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable}`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <LocaleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Suspense fallback={null}>{children}</Suspense>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
