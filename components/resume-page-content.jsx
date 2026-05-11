"use client"

import Link from "next/link"
import { ArrowLeft, ExternalLink, Mail } from "lucide-react"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { useLocale } from "@/components/locale-provider"
import { localizedCollections } from "@/lib/portfolio-localized-data"
import { profile, siteUrl, timeline } from "@/lib/portfolio-data"

export function ResumePageContent() {
  const { copy, locale } = useLocale()
  const localized = localizedCollections[locale] ?? localizedCollections.en
  const localizedTimeline = timeline.map((item, index) => ({
    ...item,
    title: localized.timeline[index]?.title ?? item.title,
    summary: localized.timeline[index]?.summary ?? item.summary,
  }))
  const education = localizedTimeline.filter((item) => item.org.includes("University") || item.title.includes("Diploma"))
  const experience = localizedTimeline.filter((item) => !education.includes(item))

  return (
    <main className="container mx-auto max-w-5xl px-4 py-12">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
          <ArrowLeft className="h-4 w-4" />
          {copy.resume.back}
        </Link>
        <LocaleSwitcher />
      </div>

      <section className="mt-8 rounded-3xl border border-border/50 bg-card/40 p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">{profile.name}</h1>
            <p className="mt-3 max-w-2xl text-muted-foreground">{copy.about.summary}</p>
          </div>
          <div className="space-y-2 text-sm">
            <p>{profile.location}</p>
            <p>{profile.timezone}</p>
            <a className="block hover:text-primary" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="block hover:text-primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
            </a>
            <a className="block hover:text-primary" href={profile.links.github} target="_blank" rel="noreferrer">
              GitHub <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
            </a>
            <a className="block hover:text-primary" href={siteUrl} target="_blank" rel="noreferrer">
              Portfolio <ExternalLink className="ml-1 inline h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
            <h2 className="text-2xl font-semibold">{copy.resume.experience}</h2>
            <div className="mt-5 space-y-5">
              {experience.map((item) => (
                <article key={`${item.title}-${item.org}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
            <h2 className="text-2xl font-semibold">{copy.resume.education}</h2>
            <div className="mt-5 space-y-5">
              {education.map((item) => (
                <article key={`${item.title}-${item.org}`}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
            <h2 className="text-2xl font-semibold">{copy.resume.technical}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {localized.technicalSkills.map((item) => (
                <li key={item.name} className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-4 py-3">
                  <span>{item.name}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
            <h2 className="text-2xl font-semibold">{copy.resume.languages}</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {localized.languagesList.map((item) => (
                <li key={item.name} className="flex items-center justify-between rounded-2xl border border-border/50 bg-background/70 px-4 py-3">
                  <span>{item.name}</span>
                  <span className="text-muted-foreground">{item.level}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
            <h2 className="text-2xl font-semibold">{copy.resume.style}</h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {localized.softSkills.map((skill) => (
                <span key={skill} className="rounded-full border border-border/50 bg-background/70 px-3 py-2 text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="mr-2 h-4 w-4" />
            {copy.resume.contact}
          </a>
        </div>
      </section>
    </main>
  )
}
