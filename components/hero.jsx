"use client"

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getCvLink, profile } from "@/lib/portfolio-data"
import { useLocale } from "@/components/locale-provider"

function Card3D({ reducedMotion }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
    if (reducedMotion) {
      return
    }

    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY: reducedMotion ? 0 : rotateY,
        rotateX: reducedMotion ? 0 : rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative aspect-square w-full max-w-[18rem] rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1 sm:max-w-md"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-1 rounded-xl bg-card/80 backdrop-blur-xl border border-border/50 shadow-2xl flex items-center justify-center overflow-hidden"
      >
        <div className="relative w-full h-full">
          <Image src={profile.socialImage} alt={profile.name} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export function Hero({ copy }) {
  const reducedMotion = useReducedMotion()
  const { locale } = useLocale()

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20 pb-8 sm:pt-24 sm:pb-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl motion-safe:animate-pulse motion-safe:delay-1000" />
      </div>

      <div className="container mx-auto grid items-center gap-8 px-4 sm:gap-10 lg:grid-cols-2 lg:gap-12">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -50 }}
          animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-emerald-500/30 bg-emerald-500/12 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 lg:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {copy.availabilityBadge}
          </div>

          <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-balance text-transparent sm:text-5xl md:text-7xl">
            {profile.name}
          </h1>
          <p className="text-lg font-light text-muted-foreground sm:text-xl md:text-2xl">
            {copy.heroTitle}
          </p>

          <p className="mx-auto max-w-xl leading-relaxed text-muted-foreground lg:mx-0">
            {copy.heroSubtitle}
          </p>

          <div className="grid gap-3 rounded-3xl border border-border/50 bg-card/50 p-4 text-left sm:grid-cols-3 sm:p-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{copy.basedIn}</p>
              <p className="mt-2 font-medium">{profile.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{copy.timezone}</p>
              <p className="mt-2 font-medium">{profile.timezone}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{copy.openFor}</p>
              <p className="mt-2 text-sm font-medium sm:text-base">{copy.availabilityText}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:gap-4 sm:pt-4">
            <Button size="lg" className="w-full rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 sm:w-auto" asChild>
              <a href={getCvLink(locale)} target="_blank" rel="noreferrer">
                {copy.ctaCv}
                <Download className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" className="group w-full rounded-full sm:w-auto" asChild>
              <a href="#projects">
                {copy.ctaProjects}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="w-full rounded-full sm:w-auto" asChild>
              <a href="/resume">
                {copy.ctaResume}
                <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">{copy.bestFit}</p>

          <div className="flex justify-center gap-4 pt-4 text-muted-foreground lg:justify-start lg:pt-8">
            <a
              href={profile.links.github}
              className="transition-colors hover:text-primary focus-visible:text-primary"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
            >
                <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={profile.links.linkedin}
              className="transition-colors hover:text-primary focus-visible:text-primary"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
            >
                <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="transition-colors hover:text-primary focus-visible:text-primary"
              aria-label="Send an email"
            >
                <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
          animate={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="perspective-1000 order-first flex justify-center lg:order-none lg:justify-end"
        >
          <Card3D reducedMotion={reducedMotion} />
        </motion.div>
      </div>
    </section>
  )
}
