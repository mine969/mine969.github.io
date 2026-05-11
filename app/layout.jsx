import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
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
    "Security-minded portfolio for Hein Htet Zaw featuring frontend delivery, DevOps workflow thinking, cybersecurity focus, and technical writing.",
  keywords: [
    "Hein Htet Zaw",
    "Cybersecurity",
    "DevOps",
    "Frontend Engineer",
    "GitHub Pages",
    "Technical Portfolio",
    "Portfolio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${profile.name} | ${profile.title}`,
    description:
      "Portfolio featuring secure delivery thinking, frontend implementation, DevOps-minded workflow improvements, and technical notes.",
    url: siteUrl,
    siteName: `${profile.name} Portfolio`,
    type: "website",
    images: [
      {
        url: profile.socialImage,
        width: 1200,
        height: 1200,
        alt: profile.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} | ${profile.title}`,
    description:
      "Security-minded portfolio featuring frontend delivery, DevOps workflow thinking, and technical notes.",
    images: [profile.socialImage],
  },
  icons: {
    icon: "/favicon.svg",
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
            <Analytics />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  )
}
