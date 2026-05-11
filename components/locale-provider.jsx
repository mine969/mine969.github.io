"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { defaultLocale, locales, portfolioCopy } from "@/lib/portfolio-copy"

const LocaleContext = createContext(null)

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(defaultLocale)

  useEffect(() => {
    const storedLocale = window.localStorage.getItem("portfolio-locale")
    if (storedLocale && locales.includes(storedLocale)) {
      setLocale(storedLocale)
      document.documentElement.lang = storedLocale === "ja" ? "ja" : storedLocale
      return
    }

    document.documentElement.lang = defaultLocale
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
