"use client"

import { useLocale } from "@/components/locale-provider"
import { cn } from "@/lib/utils"

const localeMeta = {
  en: { label: "EN", flag: "🇬🇧" },
  th: { label: "TH", flag: "🇹🇭" },
  ja: { label: "JP", flag: "🇯🇵" },
  my: { label: "MY", flag: "🇲🇲" },
}

export function LocaleSwitcher() {
  const { locale, setLocale, locales } = useLocale()

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/70 p-1">
      {locales.map((item) => {
        const meta = localeMeta[item] ?? { label: item.toUpperCase(), flag: item.toUpperCase() }

        return (
          <button
            key={item}
            type="button"
            onClick={() => setLocale(item)}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
              locale === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )}
            aria-pressed={locale === item}
            aria-label={`Switch language to ${meta.label}`}
          >
            <span className="inline-flex items-center gap-1.5">
              <span aria-hidden="true">{meta.flag}</span>
              <span>{meta.label}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
