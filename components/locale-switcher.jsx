"use client"

import { ChevronDown } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

const localeMeta = {
  en: { label: "EN" },
  th: { label: "TH" },
  ja: { label: "JP" },
  my: { label: "MY" },
}

export function LocaleSwitcher() {
  const { locale, setLocale, locales } = useLocale()

  return (
    <label className="relative">
      <span className="sr-only">Select language</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
        className="min-w-0 appearance-none rounded-full border border-border/50 bg-background/70 px-3 py-1.5 pr-7 text-[11px] font-medium text-foreground outline-none transition-colors hover:border-primary/50 sm:pr-8 sm:text-xs"
        aria-label="Select language"
      >
        {locales.map((item) => {
          const meta = localeMeta[item] ?? { label: item.toUpperCase() }

          return (
            <option key={item} value={item}>
              {meta.label}
            </option>
          )
        })}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-2 inline-flex items-center text-muted-foreground sm:right-3">
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </label>
  )
}
