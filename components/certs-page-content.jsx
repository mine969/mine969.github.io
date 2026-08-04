"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Award,
  BadgeCheck,
  Clock,
  DollarSign,
  ExternalLink,
  FileText,
  Filter,
  Github,
  GraduationCap,
  RefreshCw,
  Search,
  Star,
  Timer,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { profile } from "@/lib/portfolio-data"
import {
  certSourceCredit,
  certifications,
  domainBand,
  domainLabels,
  domainOrder,
  ehuAcademy,
  ehuLearningPaths,
  freeLearningResources,
} from "@/lib/certs-data"

function tierForLevel(level) {
  if (level == null) return "Unrated"
  if (level >= 80) return "Master"
  if (level >= 60) return "Expert"
  if (level >= 40) return "Professional"
  if (level >= 25) return "Associate"
  return "Entry"
}

const tierOrder = ["Master", "Expert", "Professional", "Associate", "Entry", "Unrated"]

const tierColor = {
  Master: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30",
  Expert: "bg-orange-500/15 text-orange-600 dark:text-orange-400 border-orange-500/30",
  Professional: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30",
  Associate: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  Entry: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/30",
  Unrated: "bg-muted text-muted-foreground border-border",
}

const tierDot = {
  Master: "bg-red-500",
  Expert: "bg-orange-500",
  Professional: "bg-amber-500",
  Associate: "bg-emerald-500",
  Entry: "bg-sky-500",
  Unrated: "bg-muted-foreground",
}

const tierStars = {
  Master: 5,
  Expert: 4,
  Professional: 3,
  Associate: 2,
  Entry: 1,
  Unrated: 0,
}

const bandDot = {
  offensive: "bg-red-500",
  defensive: "bg-blue-500",
  platform: "bg-purple-500",
  specialist: "bg-amber-500",
}

const bandLabel = {
  offensive: "Offensive",
  defensive: "Defensive",
  platform: "Platform & Build",
  specialist: "Specialist",
}

function StarRating({ tier, className = "h-3.5 w-3.5" }) {
  const filled = tierStars[tier] ?? 0
  return (
    <span className="inline-flex items-center gap-0.5" aria-label={`${filled} of 5 difficulty stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`${className} ${i < filled ? "fill-amber-400 text-amber-400" : "fill-none text-muted-foreground/30"}`}
        />
      ))}
    </span>
  )
}

function formatCost(cost) {
  if (!cost || cost.amount == null) return "Price N/A"
  return `$${cost.amount.toLocaleString()}`
}

function formatExamFormat(format) {
  if (!format) return "Not published"
  return format
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join(" ")
}

export function CertsPageContent() {
  const [query, setQuery] = useState("")
  const [domainFilter, setDomainFilter] = useState("all")
  const [vendorFilter, setVendorFilter] = useState("all")
  const [activeCert, setActiveCert] = useState(null)

  const vendors = useMemo(
    () => Array.from(new Set(certifications.map((c) => c.vendor))).sort(),
    []
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return certifications.filter((c) => {
      if (domainFilter !== "all" && c.domain !== domainFilter) return false
      if (vendorFilter !== "all" && c.vendor !== vendorFilter) return false
      if (!q) return true
      return (
        c.name.toLowerCase().includes(q) ||
        c.fullName.toLowerCase().includes(q) ||
        c.vendor.toLowerCase().includes(q)
      )
    })
  }, [query, domainFilter, vendorFilter])

  const visibleDomains = domainFilter === "all" ? domainOrder : [domainFilter]

  // roadmap[domain][tier] = certs, sorted by level desc
  const roadmap = useMemo(() => {
    const map = {}
    for (const domain of visibleDomains) map[domain] = {}
    for (const c of filtered) {
      if (!map[c.domain]) continue
      const tier = tierForLevel(c.level)
      if (!map[c.domain][tier]) map[c.domain][tier] = []
      map[c.domain][tier].push(c)
    }
    for (const domain of Object.keys(map)) {
      for (const tier of Object.keys(map[domain])) {
        map[domain][tier].sort((a, b) => (b.level ?? 0) - (a.level ?? 0))
      }
    }
    return map
  }, [filtered, visibleDomains])

  const activeTierDomains = visibleDomains.filter((d) =>
    Object.values(roadmap[d] ?? {}).some((arr) => arr.length)
  )

  return (
    <main className="container mx-auto max-w-[1600px] px-4 py-12">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/hub"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Collection Hub
        </Link>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{certifications.length} certifications shown</span>
          <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
          <span>{vendors.length} issuing bodies</span>
        </div>
      </div>

      <section className="mt-8 rounded-3xl border border-border/50 bg-card/40 p-5 sm:p-8">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <Award className="h-4 w-4 text-primary" />
          Certification Roadmap
        </p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Technical Security Certification Roadmap
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Hands-on, technical-only cybersecurity certifications — positioned by the depth they
          actually demand, not by marketing tier. Domains run left to right, difficulty tier runs
          top to bottom. Click any certification for its full exam details.
        </p>

        <div className="mt-6 rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <p className="text-sm text-foreground">
            {certSourceCredit.label}{" "}
            <a
              href={certSourceCredit.url}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary hover:underline"
            >
              {certSourceCredit.name}
            </a>
            .
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            This page reproduces a subset of their{" "}
            <a
              href={certSourceCredit.projectUrl}
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              {certSourceCredit.projectName}
            </a>{" "}
            dataset (144 of 225 certifications, 11 of 25 issuing bodies) in my own layout for
            quick personal reference. Difficulty scores, cost research, and taxonomy are their
            original work. For the full 225-certification interactive roadmap, badge tracking,
            and the raw dataset, see the original project and its{" "}
            <a
              href={certSourceCredit.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub repo
            </a>
            .
          </p>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search certifications..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="h-11 rounded-full border-border/50 bg-background/70 pl-9"
            />
          </div>
          <select
            value={domainFilter}
            onChange={(event) => setDomainFilter(event.target.value)}
            className="h-11 rounded-full border border-border/50 bg-background/70 px-4 text-sm text-foreground"
          >
            <option value="all">All domains</option>
            {domainOrder.map((d) => (
              <option key={d} value={d}>
                {domainLabels[d]}
              </option>
            ))}
          </select>
          <select
            value={vendorFilter}
            onChange={(event) => setVendorFilter(event.target.value)}
            className="h-11 rounded-full border border-border/50 bg-background/70 px-4 text-sm text-foreground"
          >
            <option value="all">All issuing bodies</option>
            {vendors.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {tierOrder
            .filter((t) => t !== "Unrated")
            .map((tier) => (
              <span key={tier} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={`h-2.5 w-2.5 rounded-full ${tierDot[tier]}`} />
                {tier}
              </span>
            ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-3 border-t border-border/40 pt-3">
          {Object.entries(bandLabel).map(([band, label]) => (
            <span key={band} className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className={`h-2.5 w-2.5 rounded-full ${bandDot[band]}`} />
              {label}
            </span>
          ))}
        </div>
      </section>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          <Filter className="mx-auto mb-3 h-6 w-6" />
          No certifications match those filters.
        </p>
      ) : (
        <div className="mt-8">
          {activeTierDomains.length > 1 ? (
            <p className="mb-2 text-center text-xs text-muted-foreground lg:hidden">
              ← Swipe to browse all domains, or pick one from the domain filter above →
            </p>
          ) : null}
          <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-4 pb-4 sm:mx-0 sm:px-0">
            {activeTierDomains.map((domain) => (
              <div
                key={domain}
                className={`w-[78vw] shrink-0 snap-start rounded-2xl border-t-2 border-border/50 bg-card/30 p-3 xs:w-[240px] sm:w-[220px] md:w-[210px] ${
                  activeTierDomains.length === 1 ? "sm:w-full md:w-full" : ""
                } ${domainBand[domain] ? bandDot[domainBand[domain]].replace("bg-", "border-t-") : ""}`}
              >
                <p className="mb-1 flex items-center justify-center gap-1.5 truncate text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${bandDot[domainBand[domain]] ?? "bg-muted-foreground"}`} />
                  {domainLabels[domain]}
                </p>
                <p className="mb-3 text-center text-[10px] text-muted-foreground/70">
                  {bandLabel[domainBand[domain]]}
                </p>
                <div className="space-y-4">
                  {tierOrder
                    .filter((tier) => roadmap[domain]?.[tier]?.length)
                    .map((tier) => (
                      <div key={tier}>
                        <div className="mb-1.5 flex items-center gap-1.5">
                          <span className={`h-1.5 w-1.5 rounded-full ${tierDot[tier]}`} />
                          <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                            {tier}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          {roadmap[domain][tier].map((cert) => (
                            <button
                              key={cert.id}
                              type="button"
                              onClick={() => setActiveCert(cert)}
                              className={`w-full rounded-lg border px-2.5 py-1.5 text-left text-xs font-medium transition-colors hover:border-primary/60 hover:bg-primary/10 ${tierColor[tier]}`}
                            >
                              {cert.name}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <section className="mt-12 rounded-3xl border border-border/50 bg-card/40 p-5 text-center sm:p-8">
        <p className="text-sm text-muted-foreground">
          Data curated for {profile.name}&rsquo;s personal reference. Spotted an error, or want a
          domain expanded? Reach out.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          {profile.email}
        </a>
        <p className="mt-4 text-xs text-muted-foreground">
          {certSourceCredit.label}{" "}
          <a
            href={certSourceCredit.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary hover:underline"
          >
            {certSourceCredit.name}
          </a>
        </p>
      </section>

      <Dialog open={!!activeCert} onOpenChange={(open) => !open && setActiveCert(null)}>
        <DialogContent className="max-w-lg">
          {activeCert ? (
            <>
              <DialogHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge className={`${tierColor[tierForLevel(activeCert.level)]} border`}>
                    <span
                      className={`mr-1.5 inline-block h-2 w-2 rounded-full ${
                        bandDot[domainBand[activeCert.domain]] ?? "bg-muted-foreground"
                      }`}
                    />
                    {tierForLevel(activeCert.level)}
                  </Badge>
                  <StarRating tier={tierForLevel(activeCert.level)} />
                  {activeCert.status !== "active" ? (
                    <Badge variant="outline" className="capitalize">
                      {activeCert.status}
                    </Badge>
                  ) : null}
                </div>
                <DialogTitle className="text-2xl">{activeCert.name}</DialogTitle>
                <DialogDescription>{activeCert.fullName}</DialogDescription>
              </DialogHeader>

              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-border/50 bg-background/60 p-3">
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Issuing body
                  </p>
                  <p className="mt-1 font-medium">{activeCert.vendor}</p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/60 p-3">
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                    <FileText className="h-3.5 w-3.5" />
                    Domain
                  </p>
                  <p className="mt-1 font-medium">{domainLabels[activeCert.domain]}</p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/60 p-3">
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                    <DollarSign className="h-3.5 w-3.5" />
                    Cost
                  </p>
                  <p className="mt-1 font-medium">{formatCost(activeCert.cost)}</p>
                  {activeCert.cost?.note ? (
                    <p className="mt-1 text-xs text-muted-foreground">{activeCert.cost.note}</p>
                  ) : null}
                </div>
                <div className="rounded-xl border border-border/50 bg-background/60 p-3">
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                    <Timer className="h-3.5 w-3.5" />
                    Exam format
                  </p>
                  <p className="mt-1 font-medium">{formatExamFormat(activeCert.examFormat)}</p>
                  {activeCert.examHours ? (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {activeCert.examHours} hour{activeCert.examHours === 1 ? "" : "s"}
                    </p>
                  ) : null}
                </div>
                <div className="rounded-xl border border-border/50 bg-background/60 p-3 sm:col-span-2">
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                    <RefreshCw className="h-3.5 w-3.5" />
                    Renewal
                  </p>
                  <p className="mt-1 font-medium">
                    {activeCert.renewalYears
                      ? `Every ${activeCert.renewalYears} year${activeCert.renewalYears === 1 ? "" : "s"}`
                      : "Does not expire"}
                  </p>
                </div>
                {ehuLearningPaths[activeCert.domain] ? (
                  <div className="rounded-xl border border-primary/30 bg-primary/5 p-3 sm:col-span-2">
                    <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Study it on {ehuAcademy.name}
                    </p>
                    <a
                      href={ehuAcademy.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-medium text-primary hover:underline"
                    >
                      Part {ehuLearningPaths[activeCert.domain].part} ·{" "}
                      {ehuLearningPaths[activeCert.domain].label}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                ) : null}
                {freeLearningResources[activeCert.domain]?.length ? (
                  <div className="rounded-xl border border-border/50 bg-background/60 p-3 sm:col-span-2">
                    <p className="flex items-center gap-1.5 text-xs uppercase tracking-wide text-muted-foreground">
                      <GraduationCap className="h-3.5 w-3.5" />
                      Free training that covers this
                    </p>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      {freeLearningResources[activeCert.domain].map((res) => (
                        <a
                          key={res.name}
                          href={res.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs font-medium transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          {res.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <div className="flex flex-col gap-2 pt-2 sm:flex-row">
                <a
                  href={activeCert.vendorUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Visit official certification page
                </a>
                {ehuLearningPaths[activeCert.domain] ? (
                  <a
                    href={ehuAcademy.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/40 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                  >
                    <GraduationCap className="h-4 w-4" />
                    Learn on {ehuAcademy.name}
                  </a>
                ) : null}
                {activeCert.source && activeCert.source !== activeCert.vendorUrl ? (
                  <a
                    href={activeCert.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-4 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    Source
                  </a>
                ) : null}
              </div>

              <p className="text-center text-[11px] text-muted-foreground">
                Data via{" "}
                <a
                  href={certSourceCredit.url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-primary"
                >
                  {certSourceCredit.name}
                </a>
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </main>
  )
}
