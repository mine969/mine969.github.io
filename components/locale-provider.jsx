"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { defaultLocale, locales, portfolioCopy } from "@/lib/portfolio-copy"

const LocaleContext = createContext(null)

function detectInitialLocale() {
  const browserLanguages = navigator.languages ?? [navigator.language]
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  if (browserLanguages.some((item) => item?.toLowerCase().startsWith("ja")) || timeZone === "Asia/Tokyo") {
    return "ja"
  }

  if (browserLanguages.some((item) => item?.toLowerCase().startsWith("th")) || timeZone === "Asia/Bangkok") {
    return "th"
  }

  return defaultLocale
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("portfolio-locale")
    if (storedLocale && locales.includes(storedLocale)) {
      setLocale(storedLocale)
      document.documentElement.lang = storedLocale === "ja" ? "ja" : storedLocale
      return
    }

    const detectedLocale = detectInitialLocale()
    setLocale(detectedLocale)
    document.documentElement.lang = detectedLocale === "ja" ? "ja" : detectedLocale
  }, [])

  useEffect(() => {
    window.localStorage.setItem("portfolio-locale", locale)
    document.documentElement.lang = locale === "ja" ? "ja" : locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      copy: portfolioCopy[locale],
      locales,
    }),
    [locale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider")
  }

  return context
}
