import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
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
    "Portfolio of Hein Htet Zaw — cybersecurity, cloud computing (AWS CLF-C02), AI, DevOps, and backend development. Open to entry to mid-level and full-time roles in Thailand, Myanmar, and Japan.",
  keywords: [
    "Hein Htet Zaw",
    "Cybersecurity",
    "Cloud Computing",
    "AWS",
    "AWS Certified Cloud Practitioner",
    "AI Engineer",
    "Backend Developer",
    "DevOps",
    "GitHub Pages",
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
      "Portfolio of Hein Htet Zaw — cybersecurity, AWS cloud (CLF-C02), AI, DevOps, and backend development. Based in Bangkok, open to entry to mid-level and full-time opportunities.",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    images: [
      {
        url: profile.socialImage,
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
      "Portfolio of Hein Htet Zaw — cybersecurity, AWS CLF-C02, AI, DevOps, and backend development. Based in Bangkok.",
    images: [profile.socialImage],
  },
  icons: {
    icon: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
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
