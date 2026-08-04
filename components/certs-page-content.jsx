"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  Award,
  Clock,
  DollarSign,
  ExternalLink,
  Filter,
  Github,
  RefreshCw,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { profile } from "@/lib/portfolio-data"
import { certSourceCredit, certifications, domainLabels, domainOrder } from "@/lib/certs-data"

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
  Master: "bg-red-500/15 text-red-600 dark:text-red-400",
  Expert: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  Professional: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
  Associate: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
  Entry: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  Unrated: "bg-muted text-muted-foreground",
}

function formatCost(cost) {
  if (!cost || cost.amount == null) return "Price N/A"
  return `$${cost.amount.toLocaleString()}`
}

export function CertsPageContent() {
  const [query, setQuery] = useState("")
  const [domainFilter, setDomainFilter] = useState("all")
  const [vendorFilter, setVendorFilter] = useState("all")

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

  const grouped = useMemo(() => {
    const byTier = {}
    for (const c of filtered) {
      const tier = tierForLevel(c.level)
      if (!byTier[tier]) byTier[tier] = []
      byTier[tier].push(c)
    }
    for (const tier of Object.keys(byTier)) {
      byTier[tier].sort((a, b) => (b.level ?? 0) - (a.level ?? 0))
    }
    return byTier
  }, [filtered])

  return (
    <main className="container mx-auto max-w-7xl px-4 py-12">
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

      <section className="mt-8 rounded-3xl border border-border/50 bg-card/40 p-8">
        <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-muted-foreground">
          <Award className="h-4 w-4 text-primary" />
          Certification Roadmap
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Technical Security Certification Roadmap
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Hands-on, technical-only cybersecurity certifications — positioned by the depth they
          actually demand, not by marketing tier. No CISSP, CISM, audit, or paperwork-heavy
          credentials here. Filter by domain or issuing body, or search a specific cert below.
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
      </section>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-muted-foreground">
          <Filter className="mx-auto mb-3 h-6 w-6" />
          No certifications match those filters.
        </p>
      ) : (
        <div className="mt-8 space-y-10">
          {tierOrder
            .filter((tier) => grouped[tier]?.length)
            .map((tier) => (
              <section key={tier}>
                <div className="mb-4 flex items-center gap-3">
                  <Badge className={`${tierColor[tier]} border-0 px-3 py-1 text-sm font-semibold`}>
                    {tier}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {grouped[tier].length} certification{grouped[tier].length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {grouped[tier].map((cert) => (
                    <a
                      key={cert.id}
                      href={cert.vendorUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex flex-col justify-between rounded-2xl border border-border/50 bg-card/40 p-5 backdrop-blur-sm transition-colors hover:border-primary/40"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-semibold group-hover:text-primary">
                              {cert.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">{cert.vendor}</p>
                          </div>
                          <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                        </div>
                        <p className="mt-2 text-xs leading-snug text-muted-foreground">
                          {cert.fullName}
                        </p>
                        {cert.status !== "active" ? (
                          <Badge variant="outline" className="mt-2 text-[10px] capitalize">
                            {cert.status}
                          </Badge>
                        ) : null}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          {formatCost(cert.cost)}
                        </span>
                        {cert.renewalYears ? (
                          <span className="inline-flex items-center gap-1">
                            <RefreshCw className="h-3 w-3" />
                            {cert.renewalYears}yr renewal
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            No expiry
                          </span>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </section>
            ))}
        </div>
      )}

      <section className="mt-12 rounded-3xl border border-border/50 bg-card/40 p-8 text-center">
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
    </main>
  )
}
