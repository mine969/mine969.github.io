import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Hein Htet Zaw - Digital Innovation Developer",
  description:
    "Final-year Digital Innovative Technology student with expertise in Python, cybersecurity, DevOps, and project management.",
  keywords: [
    "Hein Htet Zaw",
    "Digital Innovation",
    "Cybersecurity",
    "DevOps",
    "Web Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "Hein Htet Zaw - Digital Innovation Developer",
    description:
      "Secure, scalable web experiences with a focus on cybersecurity, DevOps, and modern UI.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hein Htet Zaw - Digital Innovation Developer",
    description:
      "Secure, scalable web experiences with a focus on cybersecurity, DevOps, and modern UI.",
  },
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
