"use client"

import Link from "next/link"
import { ArrowRight, ExternalLink, FileText, Mail } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { ProjectCard } from "@/components/project-card"
import { useLocale } from "@/components/locale-provider"
import { localizedCollections } from "@/lib/portfolio-localized-data"
import {
  certifications,
  notes,
  profile,
  projects,
  services,
  siteUrl,
  timeline,
} from "@/lib/portfolio-data"

export function HomePage() {
  const { copy, locale } = useLocale()
  const localized = localizedCollections[locale] ?? localizedCollections.en

  const localizedProjects = projects.map((project, index) => ({
    ...project,
    title: localized.projects[index]?.title ?? project.title,
    description: copy.projects[index]?.description ?? project.description,
    result: copy.projects[index]?.result ?? project.result,
    demoText: copy.projects[index]?.demoText,
  }))

  const localizedServices = services.map((service, index) => ({
    ...service,
    title: copy.services[index]?.title ?? service.title,
    details: copy.services[index]?.details ?? service.details,
  }))

  const localizedCertifications = certifications.map((item, index) => ({
    ...item,
    name: localized.certifications[index]?.name ?? item.name,
    issuer: copy.certifications[index]?.issuer ?? item.issuer,
    status: copy.certifications[index]?.status ?? item.status,
  }))

  const localizedNotes = notes.map((item, index) => ({
    ...item,
    title: localized.notes[index]?.title ?? item.title,
    summary: copy.notes[index]?.summary ?? item.summary,
    audience: copy.notes[index]?.audience ?? item.audience,
  }))

  const localizedTimeline = timeline.map((item, index) => ({
    ...item,
    title: localized.timeline[index]?.title ?? item.title,
    summary: localized.timeline[index]?.summary ?? item.summary,
  }))

  const localizedEducation = localizedTimeline.filter((item) => item.org.includes("University") || item.title.includes("Diploma"))
  const localizedExperience = localizedTimeline.filter((item) => !localizedEducation.includes(item)).slice(0, 3)

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    email: `mailto:${profile.email}`,
    image: `${siteUrl}${profile.socialImage}`,
    jobTitle: profile.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location,
    },
    alumniOf: "Rangsit University",
    sameAs: [profile.links.github, profile.links.linkedin, profile.links.portfolioRepo],
    knowsAbout: ["Cybersecurity", "DevOps", "Next.js", "Frontend Engineering", "Automation"],
  }

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />

      <Navbar />

      <main id="main-content" className="container mx-auto space-y-24 px-4 pb-24">
        <Hero copy={copy.hero} />

        <section id="about" className="scroll-mt-24" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div className="space-y-6">
              <h2 id="about-title" className="text-3xl font-bold tracking-tight">
                {copy.about.heading}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">{copy.about.summary}</p>
              <p className="text-muted-foreground">{copy.about.body}</p>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card/40 p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {copy.about.roleFit}
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground/90">
                {localized.preferredRoles.map((role) => (
                  <li key={role} className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3">
                    {role}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-label="Highlights" className="scroll-mt-24">
          <div className="grid gap-6 text-center md:grid-cols-3">
            {copy.highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/50 bg-card/40 px-6 py-8 shadow-sm"
              >
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24" aria-labelledby="experience-title">
          <div className="mb-8 text-center">
            <h2 id="experience-title" className="text-3xl font-bold tracking-tight">
              {copy.experienceSection.title}
            </h2>
            <p className="mt-3 text-muted-foreground">{copy.experienceSection.intro}</p>
          </div>

          <BentoGrid
            education={localizedEducation}
            languages={localized.languagesList}
            technicalSkills={localized.technicalSkills}
            softSkills={localized.softSkills}
            experience={localizedExperience}
            labels={copy.experienceSection}
          />
        </section>

        <section id="projects" className="scroll-mt-24" aria-labelledby="projects-title">
          <div className="mb-8 flex flex-col gap-3 text-center">
            <h2 id="projects-title" className="text-3xl font-bold tracking-tight">
              {copy.projectsSection.title}
            </h2>
            <p className="text-muted-foreground">{copy.projectsSection.intro}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {localizedProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                {...project}
                index={index}
                buttonLabels={copy.projectsSection}
              />
            ))}
          </div>
        </section>

        <section className="scroll-mt-24" aria-labelledby="proof-title">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
              <h2 id="proof-title" className="text-3xl font-bold tracking-tight">
                {copy.proof.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{copy.proof.intro}</p>
              <a
                href={profile.links.documents}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
              >
                {copy.proof.documents}
                <ExternalLink className="h-4 w-4" />
              </a>
              <div className="mt-6 space-y-3">
                {localizedCertifications.map((item) => (
                  <a
                    key={item.name}
                    href={profile.links.documents}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-2xl border border-border/50 bg-background/70 p-4 transition-colors hover:border-primary/50"
                  >
                    <p className="font-medium">{item.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary">{item.status}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
              <h2 className="text-3xl font-bold tracking-tight">{copy.proof.howHelpTitle}</h2>
              <p className="mt-3 text-muted-foreground">{copy.proof.howHelpIntro}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {localizedServices.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border/40 bg-background/60 p-6">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24" aria-labelledby="focus-title">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
              <h2 id="focus-title" className="text-3xl font-bold tracking-tight">
                {copy.focus.title}
              </h2>
              <p className="mt-3 text-muted-foreground">{copy.hero.availabilityText}</p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {copy.workPreferences.map((item) => (
                  <li key={item} className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-foreground/90">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border/50 bg-card/40 p-6">
              <h2 className="text-3xl font-bold tracking-tight">{copy.focus.timelineTitle}</h2>
              <div className="mt-6 space-y-4">
                {localizedTimeline.map((item) => (
                  <div key={`${item.title}-${item.period}`} className="rounded-2xl border border-border/50 bg-background/70 p-4">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.org}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.period}</p>
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{item.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="scroll-mt-24" aria-labelledby="notes-title">
          <div className="rounded-3xl border border-border/50 bg-card/40 p-6 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 id="notes-title" className="text-3xl font-bold tracking-tight">
                  {copy.notesSection.title}
                </h2>
                <p className="mt-3 max-w-2xl text-muted-foreground">{copy.notesSection.intro}</p>
              </div>
              <Link
                href="/notes"
                className="inline-flex items-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
              >
                {copy.notesSection.viewAll}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {localizedNotes.map((note) => (
                <article key={note.title} className="rounded-2xl border border-border/50 bg-background/70 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary">{note.audience}</p>
                  <h3 className="mt-3 text-lg font-semibold">{note.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{note.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24">
          <div className="rounded-3xl border border-border/50 bg-accent/5 px-6 py-12">
            <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">{copy.contact.title}</h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">{copy.contact.intro}</p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    {copy.contact.email}
                  </a>
                  <Link
                    href="/resume"
                    className="inline-flex items-center justify-center rounded-full border border-border/60 px-8 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    {copy.contact.resume}
                  </Link>
                  <a
                    href={profile.links.documents}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-border/60 px-8 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    {copy.contact.documents}
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-border/50 bg-background/70 p-6">
                <h3 className="text-lg font-semibold">{copy.contact.quickDetails}</h3>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Email</dt>
                    <dd className="mt-1">
                      <a className="hover:text-primary" href={`mailto:${profile.email}`}>
                        {profile.email}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{copy.contact.location}</dt>
                    <dd className="mt-1">{profile.location}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{copy.contact.timezone}</dt>
                    <dd className="mt-1">{profile.timezone}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">{copy.contact.profiles}</dt>
                    <dd className="mt-2 flex flex-wrap gap-3">
                      <a className="hover:text-primary" href={profile.links.linkedin} target="_blank" rel="noreferrer">
                        LinkedIn
                      </a>
                      <a className="hover:text-primary" href={profile.links.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                      <a className="hover:text-primary" href={profile.links.documents} target="_blank" rel="noreferrer">
                        Docs
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>{localized.footer}</p>
      </footer>
    </div>
  )
}
