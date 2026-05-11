"use client"

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"

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
      className="relative w-full max-w-md aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1"
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

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl motion-safe:animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-[30rem] w-[30rem] rounded-full bg-accent/20 blur-3xl motion-safe:animate-pulse motion-safe:delay-1000" />
      </div>

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, x: -50 }}
          animate={reducedMotion ? undefined : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 motion-safe:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {copy.availabilityBadge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            {profile.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            {copy.heroTitle}
          </p>

          <p className="max-w-xl text-muted-foreground leading-relaxed">
            {copy.heroSubtitle}
          </p>

          <div className="grid gap-3 rounded-3xl border border-border/50 bg-card/50 p-5 sm:grid-cols-3">
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
              <p className="mt-2 font-medium">{copy.availabilityText}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full group" asChild>
              <a href="#projects">
                {copy.ctaProjects}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="/resume">
                {copy.ctaResume}
                <Download className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">{copy.bestFit}</p>

          <div className="flex gap-4 pt-8 text-muted-foreground">
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
          className="flex justify-center lg:justify-end perspective-1000"
        >
          <Card3D reducedMotion={reducedMotion} />
        </motion.div>
      </div>
    </section>
  )
}
