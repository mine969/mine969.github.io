"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, FileText, Mail } from "lucide-react"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { useLocale } from "@/components/locale-provider"
import { localizedCollections } from "@/lib/portfolio-localized-data"
import {
  certifications,
  getCvLink,
  notes,
  profile,
  projects,
  siteUrl,
  timeline,
} from "@/lib/portfolio-data"

function sectionId(label) {
  return label.toLowerCase().replace(/\s+/g, "-")
}

export function BetaHomePage() {
  const { copy, locale } = useLocale()
  const localized = localizedCollections[locale] ?? localizedCollections.en

  const localizedProjects = projects.map((project, index) => ({
    ...project,
    title: localized.projects[index]?.title ?? project.title,
    description: copy.projects[index]?.description ?? project.description,
    result: copy.projects[index]?.result ?? project.result,
    demoText: copy.projects[index]?.demoText,
  }))

  const localizedCertificates = certifications.map((item, index) => ({
    ...item,
    name: localized.certifications[index]?.name ?? item.name,
    issuer: copy.certifications[index]?.issuer ?? item.issuer,
    status: copy.certifications[index]?.status ?? item.status,
  }))

  const localizedTimeline = timeline.map((item, index) => ({
    ...item,
    title: localized.timeline[index]?.title ?? item.title,
    summary: localized.timeline[index]?.summary ?? item.summary,
  }))

  const localizedNotes = notes.map((item, index) => ({
    ...item,
    title: localized.notes[index]?.title ?? item.title,
    summary: copy.notes[index]?.summary ?? item.summary,
  }))

  const sections = [
    copy.nav.about,
    copy.nav.experience,
    copy.nav.projects,
    copy.proof.title,
    copy.nav.contact,
  ]

  const aboutId = sectionId(copy.nav.about)
  const experienceId = sectionId(copy.nav.experience)
  const projectsId = sectionId(copy.nav.projects)
  const proofId = sectionId(copy.proof.title)
  const contactId = sectionId(copy.nav.contact)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/92 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-muted-foreground">BETA</p>
            <h1 className="text-sm font-medium">{profile.name}</h1>
          </div>

          <nav aria-label="Beta sections" className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${sectionId(item)}`}
                className="rounded-full px-1 py-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <nav aria-label="Beta mobile sections" className="border-t border-border/50 lg:hidden">
          <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3">
            {sections.map((item) => (
              <a
                key={item}
                href={`#${sectionId(item)}`}
                className="shrink-0 rounded-full border border-border/60 bg-background px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <section aria-labelledby="beta-hero-title" className="grid gap-6 rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-5 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {copy.hero.availabilityBadge}
            </div>

            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">{profile.title}</p>
              <h2 id="beta-hero-title" className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                {copy.hero.heroTitle}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {copy.hero.heroSubtitle}
              </p>
            </div>

            <div className="grid gap-3 text-sm sm:grid-cols-3">
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.hero.basedIn}</p>
                <p className="mt-2 font-medium">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.hero.timezone}</p>
                <p className="mt-2 font-medium">{profile.timezone}</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.hero.openFor}</p>
                <p className="mt-2 font-medium">{copy.hero.availabilityText}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={getCvLink(locale)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${copy.hero.ctaCv} (${locale === "ja" ? "Japanese CV" : "Default CV"})`}
              >
                <FileText className="mr-2 h-4 w-4" />
                {copy.hero.ctaCv}
              </a>
              <a
                href={`#${projectsId}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border/60 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {copy.hero.ctaProjects}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border/60 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="mr-2 h-4 w-4" />
                {copy.contact.email}
              </a>
            </div>
          </div>

          <div className="order-1 mx-auto flex w-full max-w-sm justify-center lg:order-2">
            <div className="overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-sm">
              <Image
                src={profile.socialImage}
                alt={profile.name}
                width={560}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section id={aboutId} aria-labelledby="beta-about-title" className="grid gap-6 pt-8 sm:pt-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.about}</p>
            <h3 id="beta-about-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.about.heading}</h3>
            <p className="mt-5 text-base leading-7 text-muted-foreground">{copy.about.summary}</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{copy.about.body}</p>
          </div>

          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.about.roleFit}</p>
            <div className="mt-5 grid gap-3">
              {localized.preferredRoles.map((role) => (
                <div key={role} className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm font-medium">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id={experienceId} aria-labelledby="beta-experience-title" className="pt-8 sm:pt-10">
          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.experience}</p>
            <h3 id="beta-experience-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.experienceSection.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{copy.experienceSection.intro}</p>

            <div className="mt-8 rounded-2xl border border-border/50 bg-background/70 p-5">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.experienceSection.technicalTitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {localized.technicalSkills.map((item) => (
                  <span key={item.name} className="rounded-full border border-border/50 px-3 py-2 text-sm font-medium">
                    {item.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {localizedTimeline.map((item) => (
                <article key={`${item.title}-${item.period}`} className="rounded-2xl border border-border/50 bg-background/70 p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={projectsId} aria-labelledby="beta-projects-title" className="pt-8 sm:pt-10">
          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.projects}</p>
            <h3 id="beta-projects-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.projectsSection.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{copy.projectsSection.intro}</p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {localizedProjects.map((project) => (
                <article key={project.title} className="rounded-2xl border border-border/50 bg-background/70 p-5">
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border/50 px-2.5 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h4 className="mt-4 text-xl font-semibold">{project.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground/85">{project.result}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                        {copy.projectsSection.code}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    ) : null}
                    {project.demo ? (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                        {project.demoText ?? copy.projectsSection.liveDemo}
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={proofId} aria-labelledby="beta-proof-title" className="grid gap-6 pt-8 sm:pt-10 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.proof.title}</p>
            <h3 id="beta-proof-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.proof.howHelpTitle}</h3>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{copy.proof.howHelpIntro}</p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3" role="list" aria-label="Key highlights">
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-sm font-medium">{copy.highlights[0].label}</p>
                <p className="mt-2 text-2xl font-semibold">{copy.highlights[0].value}</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-sm font-medium">{copy.highlights[1].label}</p>
                <p className="mt-2 text-2xl font-semibold">{copy.highlights[1].value}</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-sm font-medium">{copy.highlights[2].label}</p>
                <p className="mt-2 text-2xl font-semibold">{copy.highlights[2].value}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Certificates</p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">{copy.proof.title}</h3>
              </div>
              <a href={profile.links.documents} target="_blank" rel="noreferrer" className="rounded-md text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                {copy.proof.documents}
              </a>
            </div>

            <div className="mt-8 space-y-3">
              {localizedCertificates.map((item) => (
                <a
                  key={item.name}
                  href={profile.links.documents}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-border/50 bg-background/70 p-4 transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.18em] text-primary">{item.status}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="beta-notes-title" className="pt-8 sm:pt-10">
          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Notes</p>
            <h3 id="beta-notes-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.notesSection.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{copy.notesSection.intro}</p>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {localizedNotes.map((note) => (
                <article key={note.title} className="rounded-2xl border border-border/50 bg-background/70 p-5">
                  <h4 className="text-lg font-semibold">{note.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{note.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id={contactId} aria-labelledby="beta-contact-title" className="pt-8 sm:pt-10">
          <div className="rounded-[2rem] border border-border/60 bg-card/40 p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.contact}</p>
            <h3 id="beta-contact-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.contact.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{copy.contact.intro}</p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <a
                href={getCvLink(locale)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <FileText className="mr-2 h-4 w-4" />
                {copy.contact.cv}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border/60 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="mr-2 h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.links.documents}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border/60 px-6 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                {copy.contact.documents}
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <a href={`mailto:${profile.email}`} className="rounded-2xl border border-border/50 bg-background/70 p-4 transition-colors hover:border-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</p>
                <p className="mt-2 text-sm font-medium">{profile.email}</p>
              </a>
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.contact.location}</p>
                <p className="mt-2 text-sm font-medium">{profile.location}</p>
              </div>
              <div className="rounded-2xl border border-border/50 bg-background/70 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.contact.timezone}</p>
                <p className="mt-2 text-sm font-medium">{profile.timezone}</p>
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/[0.06] p-4 sm:col-span-2 lg:col-span-1">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.contact.profiles}</p>
                <div className="mt-3 grid gap-3">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between rounded-xl border border-border/50 bg-background px-4 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span>LinkedIn</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between rounded-xl border border-border/50 bg-background px-4 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span>GitHub</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-10">
          <Link href="/classic" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border/60 px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
            Back to previous version
          </Link>
        </div>
      </main>
    </div>
  )
}
