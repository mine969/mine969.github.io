"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLocale } from "@/components/locale-provider"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { localizedCollections } from "@/lib/portfolio-localized-data"
import { notes } from "@/lib/portfolio-data"

export function NotesPageContent() {
  const { copy, locale } = useLocale()
  const localized = localizedCollections[locale] ?? localizedCollections.en

  const localizedNotes = notes.map((item, index) => ({
    ...item,
    title: localized.notes[index]?.title ?? item.title,
    summary: copy.notes[index]?.summary ?? item.summary,
    audience: copy.notes[index]?.audience ?? item.audience,
  }))

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          {copy.notesPage.back}
        </Link>
        <LocaleSwitcher />
      </div>

      <section className="mt-8 rounded-3xl border border-border/50 bg-card/40 p-8">
        <h1 className="text-4xl font-bold tracking-tight">{copy.notesPage.title}</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">{copy.notesPage.intro}</p>
      </section>

      <section className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {localizedNotes.map((note) => (
          <article key={note.title} className="rounded-3xl border border-border/50 bg-card/40 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-primary">{note.audience}</p>
            <h2 className="mt-3 text-xl font-semibold">{note.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{note.summary}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
