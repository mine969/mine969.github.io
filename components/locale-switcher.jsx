"use client"

import { useLocale } from "@/components/locale-provider"
import { cn } from "@/lib/utils"

export function LocaleSwitcher() {
  const { locale, setLocale, locales } = useLocale()

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/70 p-1">
      {locales.map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => setLocale(item)}
          className={cn(
            "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
            locale === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
          )}
          aria-pressed={locale === item}
          aria-label={`Switch language to ${item}`}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
