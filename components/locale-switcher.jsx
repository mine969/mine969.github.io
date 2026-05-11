"use client"

import { ChevronDown } from "lucide-react"
import Image from "next/image"
import { useLocale } from "@/components/locale-provider"

const localeMeta = {
  en: { label: "EN", flag: "/flags/en.svg" },
  th: { label: "TH", flag: "/flags/th.svg" },
  ja: { label: "JP", flag: "/flags/ja.svg" },
  my: { label: "MY", flag: "/flags/my.svg" },
}

export function LocaleSwitcher() {
  const { locale, setLocale, locales } = useLocale()
  const activeLocale = localeMeta[locale] ?? { label: locale.toUpperCase(), flag: null }

  return (
    <label className="relative">
      <span className="sr-only">Select language</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value)}
        className="min-w-0 appearance-none rounded-full border border-border/50 bg-background/70 py-1.5 pr-7 pl-8 text-[11px] font-medium text-foreground outline-none transition-colors hover:border-primary/50 sm:pr-8 sm:text-xs"
        aria-label="Select language"
      >
        {locales.map((item) => {
          const meta = localeMeta[item] ?? { label: item.toUpperCase(), flag: null }

          return (
            <option key={item} value={item}>
              {meta.label}
            </option>
          )
        })}
      </select>
      <span className="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center gap-1.5 text-xs font-medium text-foreground">
        {activeLocale.flag ? (
          <Image src={activeLocale.flag} alt="" aria-hidden="true" width={14} height={14} className="rounded-full" />
        ) : null}
      </span>
      <span className="pointer-events-none absolute inset-y-0 right-2 inline-flex items-center text-muted-foreground sm:right-3">
        <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </label>
  )
}
