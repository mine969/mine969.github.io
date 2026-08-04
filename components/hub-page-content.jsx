"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  Award,
  AlertTriangle,
  ArrowLeft,
  BookMarked,
  BookOpen,
  ClipboardList,
  ExternalLink,
  FileText,
  Flag,
  FlaskConical,
  FolderOpen,
  GraduationCap,
  KeyRound,
  LayoutGrid,
  Mail,
  Network,
  Newspaper,
  Puzzle,
  Radar,
  Rss,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Wrench,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/lib/portfolio-data"
import { featuredResources, hubCategories, hubMeta, hubStats } from "@/lib/hub-data"

const iconMap = {
  AlertTriangle,
  Rss,
  Wrench,
  ShieldCheck,
  KeyRound,
  Flag,
  GraduationCap,
  BookOpen,
  ShieldAlert,
  FlaskConical,
  Trophy,
  Award,
  Search,
  Network,
  LayoutGrid,
  ClipboardList,
  FileText,
  Newspaper,
  Mail,
  Puzzle,
  Radar,
  BookMarked,
  FolderOpen,
}

export function HubPageContent() {
  const [query, setQuery] = useState("")

  const normalizedQuery = query.trim().toLowerCase()

  const filteredCategories = useMemo(() => {
    if (!normalizedQuery) return hubCategories
    return hubCategories
      .map((category) => {
        const categoryMatches = category.title.toLowerCase().includes(normalizedQuery)
        const links = categoryMatches
          ? category.links
          : category.links.filter((link) => link.name.toLowerCase().includes(normalizedQuery))
        return { ...category, links }
      })
      .filter((category) => category.links.length > 0)
  }, [normalizedQuery])

  const resultCount = filteredCategories.reduce((sum, c) => sum + c.links.length, 0)

  return (
    <main className="container mx-auto max-w-7xl px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{hubStats.categories} categories</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{hubStats.links}+ links</span>
        </div>
      </div>

      <section className="mt-8 rounded-3xl border border-border/50 bg-card/40 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              {hubMeta.subtitle}
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{hubMeta.title}</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground">{hubMeta.description}</p>
          </div>

          <div className="w-full max-w-sm">
            <label htmlFor="hub-search" className="sr-only">
              Search the collection
            </label>
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="hub-search"
                type="search"
                placeholder="Search tools, blogs, cheatsheets..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="h-11 rounded-full border-border/50 bg-background/70 pl-9"
              />
            </div>
            {normalizedQuery ? (
              <p className="mt-2 text-xs text-muted-foreground">
                {resultCount} result{resultCount === 1 ? "" : "s"} for &ldquo;{query}&rdquo;
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {featuredResources.length > 0 && !normalizedQuery ? (
        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          {featuredResources.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col justify-between rounded-2xl border border-primary/30 bg-primary/5 p-6 transition-colors hover:border-primary/60"
            >
              <a href={item.url} target="_blank" rel="noreferrer">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="gap-1 bg-primary/15 text-primary">
                    <Star className="h-3 w-3" />
                    {item.tag}
                  </Badge>
                  <ExternalLink className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <h3 className="mt-3 text-lg font-semibold group-hover:text-primary">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </a>
              {item.creditName ? (
                <p className="mt-4 text-xs text-muted-foreground">
                  Source:{" "}
                  <a
                    href={item.creditUrl ?? item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    {item.creditName}
                  </a>
                </p>
              ) : null}
            </div>
          ))}
        </section>
      ) : null}

      {filteredCategories.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          Nothing matches &ldquo;{query}&rdquo;. Try a different keyword.
        </p>
      ) : (
        <section className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-4 [&>*]:break-inside-avoid">
          {filteredCategories.map((category) => {
            const Icon = iconMap[category.icon] ?? FolderOpen
            return (
              <div
                key={category.title}
                className="rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="mb-3 flex items-center gap-2">
                  <Icon className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-semibold uppercase tracking-wide">{category.title}</h2>
                  <span className="ml-auto text-xs text-muted-foreground">{category.links.length}</span>
                </div>
                <ul className="space-y-1.5">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-start gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50 group-hover:bg-primary" />
                        <span className="leading-snug">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </section>
      )}

      <section className="mt-12 rounded-3xl border border-border/50 bg-card/40 p-8 text-center">
        <p className="text-sm text-muted-foreground">
          Built and maintained by {profile.name}. Found something broken or have a resource I should add?
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </a>
        {hubMeta.sourceCredit ? (
          <p className="mt-4 text-xs text-muted-foreground">
            {hubMeta.sourceCredit.label}{" "}
            <a
              href={hubMeta.sourceCredit.url}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-primary hover:underline"
            >
              {hubMeta.sourceCredit.name}
            </a>
          </p>
        ) : null}
      </section>
    </main>
  )
}
