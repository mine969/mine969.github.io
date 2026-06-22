"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock3, ExternalLink, FileText, Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { LeadershipCommunitySection } from "@/components/leadership-community-section"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLocale } from "@/components/locale-provider"
import { localizedCollections } from "@/lib/portfolio-localized-data"
import {
  certifications,
  getCvLink,
  profile,
  projects,
  siteUrl,
  timeline,
} from "@/lib/portfolio-data"

function sectionId(label) {
  return label.toLowerCase().replace(/\s+/g, "-")
}

export function BetaHomePage({ isBeta = false }) {
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

  const aboutId = sectionId(copy.nav.about)
  const experienceId = sectionId(copy.nav.experience)
  const projectsId = sectionId(copy.nav.projects)
  const proofId = sectionId(copy.proof.title)
  const contactId = sectionId(copy.nav.contact)

  const sections = [
    { label: copy.nav.about, href: `#${aboutId}` },
    { label: copy.nav.experience, href: `#${experienceId}` },
    { label: copy.nav.projects, href: `#${projectsId}` },
    { label: copy.nav.activities, href: "#activities" },
    { label: copy.nav.contact, href: `#${contactId}` },
  ]

  const contactDetails = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: `${copy.contact.phone} (TH)`,
      value: profile.phones.thailand,
      href: `tel:${profile.phones.thailand}`,
      icon: Phone,
    },
    {
      label: `${copy.contact.phone} (JP)`,
      value: profile.phones.japan,
      href: `tel:${profile.phones.japan}`,
      icon: Phone,
    },
    {
      label: copy.contact.line,
      value: profile.lineId,
      href: profile.links.line,
      icon: MessageCircle,
    },
    {
      label: copy.contact.location,
      value: profile.location,
      icon: MapPin,
    },
    {
      label: copy.contact.timezone,
      value: profile.timezone,
      icon: Clock3,
    },
  ]

  function handleContactSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = String(formData.get("name") ?? "").trim()
    const email = String(formData.get("email") ?? "").trim()
    const message = String(formData.get("message") ?? "").trim()
    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "Website visitor"}`)
    const body = encodeURIComponent([
      `Name: ${name || "-"}`,
      `Email: ${email || "-"}`,
      "",
      message,
    ].join("\n"))

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <div className="beta-shell min-h-screen text-foreground">
      <header className="sticky top-0 z-40 border-b bg-background/88 backdrop-blur-md" style={{ borderColor: "color-mix(in oklab, var(--color-border) 35%, transparent)" }}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div>
            <p className="text-sm font-semibold tracking-[0.16em] text-muted-foreground">
              {isBeta ? "BETA" : "PORTFOLIO"}
            </p>
            <h1 className="text-sm font-medium">{profile.name}</h1>
          </div>

          <nav aria-label="Primary sections" className="hidden items-center gap-5 text-sm text-muted-foreground lg:flex">
            {sections.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-1 py-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>

        <nav aria-label="Mobile sections" className="border-t lg:hidden" style={{ borderColor: "color-mix(in oklab, var(--color-border) 28%, transparent)" }}>
          <div className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-3">
            {sections.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="shrink-0 rounded-full border bg-background/80 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ borderColor: "color-mix(in oklab, var(--color-border) 32%, transparent)" }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10">
        <section aria-labelledby="beta-hero-title" className="beta-panel beta-glow grid gap-6 p-5 sm:gap-8 sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="relative z-10 order-2 space-y-5 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              {copy.hero.availabilityBadge}
            </div>

            <div className="space-y-3">
              <p className="beta-accent-label text-sm uppercase tracking-[0.22em]">{profile.title}</p>
              <h2 id="beta-hero-title" className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                {copy.hero.heroTitle}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                {copy.hero.heroSubtitle}
              </p>
            </div>

            <div className="grid gap-3 text-sm sm:grid-cols-3">
              <div className="beta-card p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.hero.basedIn}</p>
                <p className="mt-2 font-medium">{profile.location}</p>
              </div>
              <div className="beta-card p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.hero.timezone}</p>
                <p className="mt-2 font-medium">{profile.timezone}</p>
              </div>
              <div className="beta-card p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{copy.hero.openFor}</p>
                <p className="mt-2 font-medium">{copy.hero.availabilityText}</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={getCvLink(locale)}
                target="_blank"
                rel="noreferrer"
                className="beta-primary-button inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`${copy.hero.ctaCv} (${locale === "ja" ? "Japanese CV" : "Default CV"})`}
              >
                <FileText className="mr-2 h-4 w-4" />
                {copy.hero.ctaCv}
              </a>
              <a
                href={`#${projectsId}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ borderColor: "color-mix(in oklab, var(--color-border) 32%, transparent)" }}
              >
                {copy.hero.ctaProjects}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ borderColor: "color-mix(in oklab, var(--color-border) 32%, transparent)" }}
              >
                <Mail className="mr-2 h-4 w-4" />
                {copy.contact.email}
              </a>
            </div>
          </div>

          <div className="order-1 mx-auto flex w-full max-w-sm justify-center lg:order-2">
            <div className="relative overflow-hidden rounded-[2rem] border bg-background shadow-sm" style={{ borderColor: "color-mix(in oklab, var(--color-border) 26%, transparent)", boxShadow: "0 18px 42px color-mix(in oklab, black 18%, transparent)" }}>
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_38%)]" />
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
          <div className="beta-panel p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.about}</p>
            <h3 id="beta-about-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.about.heading}</h3>
            <p className="mt-5 text-base leading-7 text-muted-foreground">{copy.about.summary}</p>
            <p className="mt-4 text-base leading-7 text-muted-foreground">{copy.about.body}</p>
          </div>

          <div className="beta-panel p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.about.roleFit}</p>
            <div className="mt-5 grid gap-3">
              {localized.preferredRoles.map((role) => (
                  <div key={role} className="beta-card px-4 py-3 text-sm font-medium">
                    {role}
                  </div>
              ))}
            </div>
          </div>
        </section>

        <section id={experienceId} aria-labelledby="beta-experience-title" className="pt-8 sm:pt-10">
          <div className="beta-panel p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.experience}</p>
            <h3 id="beta-experience-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.experienceSection.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{copy.experienceSection.intro}</p>

            <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
              <div className="beta-card p-5">
                <p className="beta-accent-label text-sm uppercase tracking-[0.18em]">{copy.experienceSection.technicalTitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {localized.technicalSkills.map((item) => (
                    <span key={item.name} className="rounded-full border px-3 py-2 text-sm font-medium" style={{ borderColor: "color-mix(in oklab, var(--color-chart-4) 22%, var(--color-border))" }}>
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="beta-card p-5">
                <p className="beta-accent-label text-sm uppercase tracking-[0.18em]">{copy.experienceSection.softSkillsTitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {localized.softSkills.map((skill) => (
                    <span key={skill} className="rounded-full border px-3 py-2 text-sm font-medium" style={{ borderColor: "color-mix(in oklab, var(--color-primary) 18%, var(--color-border))" }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="beta-card p-5">
                <p className="beta-accent-label text-sm uppercase tracking-[0.18em]">{copy.experienceSection.languagesTitle}</p>
                <div className="mt-4 space-y-3">
                  {localized.languagesList.map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-xl border px-4 py-3 text-sm" style={{ borderColor: "color-mix(in oklab, var(--color-border) 30%, transparent)" }}>
                      <span className="font-medium">{item.name}</span>
                      <span className="text-muted-foreground">{item.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {localizedTimeline.map((item) => (
                <article key={`${item.title}-${item.period}`} className="beta-card p-5">
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
          <div className="beta-panel p-5 sm:p-8">
            <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.projects}</p>
            <h3 id="beta-projects-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.projectsSection.title}</h3>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">{copy.projectsSection.intro}</p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {localizedProjects.map((project) => (
                <article key={project.title} className="beta-card p-5">
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border px-2.5 py-1" style={{ borderColor: "color-mix(in oklab, var(--color-chart-4) 18%, var(--color-border))" }}>
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

        <section id={proofId} aria-labelledby="beta-proof-title" className="pt-8 sm:pt-10">
          <div className="beta-panel p-5 sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.proof.title}</p>
                <h3 id="beta-proof-title" className="mt-3 text-3xl font-semibold tracking-tight">{copy.proof.howHelpTitle}</h3>
                <p className="mt-4 text-base leading-7 text-muted-foreground">{copy.proof.howHelpIntro}</p>
              </div>
              <a
                href={profile.links.documents}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border px-4 py-2 text-sm font-medium hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ borderColor: "color-mix(in oklab, var(--color-border) 32%, transparent)" }}
              >
                {copy.proof.documents}
              </a>
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3" role="list" aria-label="Key highlights">
                <div className="beta-card p-4">
                  <p className="text-sm font-medium">{copy.highlights[0].label}</p>
                  <p className="mt-2 text-2xl font-semibold">{copy.highlights[0].value}</p>
                </div>
                <div className="beta-card p-4">
                  <p className="text-sm font-medium">{copy.highlights[1].label}</p>
                  <p className="mt-2 text-2xl font-semibold">{copy.highlights[1].value}</p>
                </div>
                <div className="beta-card p-4">
                  <p className="text-sm font-medium">{copy.highlights[2].label}</p>
                  <p className="mt-2 text-2xl font-semibold">{copy.highlights[2].value}</p>
                </div>
              </div>

              <div className="beta-card p-4 sm:p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Certificates</p>
                    <h4 className="mt-2 text-lg font-semibold">Verified learning and practice</h4>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {localizedCertificates.map((item) => (
                    <a
                      key={item.name}
                      href={profile.links.documents}
                      target="_blank"
                      rel="noreferrer"
                      className="beta-card block p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <p className="font-medium leading-6">{item.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-primary">{item.status}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <LeadershipCommunitySection />

        <section id={contactId} aria-labelledby="beta-contact-title" className="pt-8 sm:pt-10">
          <div className="beta-panel p-5 sm:p-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">{copy.nav.contact}</p>
              <h3 id="beta-contact-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {copy.contact.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-muted-foreground">{copy.contact.intro}</p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="beta-card p-5 sm:p-7">
                <h4 className="text-xl font-semibold">{copy.contact.detailsTitle}</h4>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy.contact.detailsIntro}</p>

                <div className="mt-6 space-y-3">
                  {contactDetails.map((item) => {
                    const Icon = item.icon

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/75 p-4 transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</span>
                          <span className="mt-2 block text-sm font-medium text-foreground">{item.value}</span>
                        </span>
                      </a>
                    ) : (
                      <div key={item.label} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/75 p-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">{item.label}</span>
                          <span className="mt-2 block text-sm font-medium text-foreground">{item.value}</span>
                        </span>
                      </div>
                    )
                  })}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between rounded-2xl border border-border/50 bg-background/75 px-4 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between rounded-2xl border border-border/50 bg-background/75 px-4 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="inline-flex items-center gap-3">
                      <Github className="h-4 w-4" />
                      GitHub
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={getCvLink(locale)}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between rounded-2xl border border-border/50 bg-background/75 px-4 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="inline-flex items-center gap-3">
                      <FileText className="h-4 w-4" />
                      {copy.contact.cv}
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a
                    href={profile.links.documents}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-12 items-center justify-between rounded-2xl border border-border/50 bg-background/75 px-4 py-3 text-sm font-semibold transition-colors hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="inline-flex items-center gap-3">
                      <ExternalLink className="h-4 w-4" />
                      {copy.contact.documents}
                    </span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="beta-card p-5 sm:p-7">
                <h4 className="text-xl font-semibold">{copy.contact.messageTitle}</h4>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{copy.contact.messageIntro}</p>

                <form className="mt-6 space-y-5" onSubmit={handleContactSubmit}>
                  <div>
                    <label htmlFor="contact-name" className="text-sm font-medium text-foreground">
                      {copy.contact.nameLabel}
                    </label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder={copy.contact.namePlaceholder}
                      className="mt-2 h-12 rounded-2xl border-border/50 bg-background/75 px-4"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="text-sm font-medium text-foreground">
                      {copy.contact.emailLabel}
                    </label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder={copy.contact.emailPlaceholder}
                      className="mt-2 h-12 rounded-2xl border-border/50 bg-background/75 px-4"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground">
                      {copy.contact.messageLabel}
                    </label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={6}
                      placeholder={copy.contact.messagePlaceholder}
                      className="mt-2 min-h-36 rounded-2xl border-border/50 bg-background/75 px-4 py-3"
                    />
                  </div>

                  <button
                    type="submit"
                    className="beta-primary-button inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {copy.contact.send}
                  </button>
                </form>

                <p className="mt-4 text-sm text-muted-foreground">{copy.contact.formNote}</p>
              </div>
            </div>
          </div>
        </section>

        {isBeta ? (
          <div className="flex justify-center pt-10">
            <Link href="/classic" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border/60 px-5 py-3 text-sm font-medium transition-colors hover:border-primary/60 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              Back to previous version
            </Link>
          </div>
        ) : null}
      </main>
    </div>
  )
}
