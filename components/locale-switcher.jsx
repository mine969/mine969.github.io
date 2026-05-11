"use client"

import Image from "next/image"
import { useLocale } from "@/components/locale-provider"
import { cn } from "@/lib/utils"

const localeMeta = {
  en: { label: "EN", flag: "/flags/en.svg" },
  th: { label: "TH", flag: "/flags/th.svg" },
  ja: { label: "JP", flag: "/flags/ja.svg" },
  my: { label: "MY", flag: "/flags/my.svg" },
}

export function LocaleSwitcher() {
  const { locale, setLocale, locales } = useLocale()

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/50 bg-background/70 p-1">
      {locales.map((item) => {
        const meta = localeMeta[item] ?? { label: item.toUpperCase(), flag: null }

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
              {meta.flag ? (
                <Image
                  src={meta.flag}
                  alt=""
                  aria-hidden="true"
                  width={14}
                  height={14}
                  className="rounded-full"
                />
              ) : null}
              <span>{meta.label}</span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
