"use client"

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

function Card3D({ children }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
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
        rotateY,
        rotateX,
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
             <Image
                src="/images/design-mode/channels4_profile.jpg"
                alt="Hein Htet Zaw"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Hein Htet Zaw
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Digital Innovation Developer crafting <span className="text-primary font-medium">immersive</span> web experiences.
          </p>
          
          <p className="max-w-lg text-muted-foreground leading-relaxed">
            Specializing in Cybersecurity, DevOps, and modern web development. 
            Turning complex problems into elegant, secure solutions.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full group" asChild>
              <a href="#projects">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          <div className="flex gap-4 pt-8 text-muted-foreground">
            <a
              href="https://github.com/mine969"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit GitHub profile"
            >
                <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/mine969/"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit LinkedIn profile"
            >
                <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a
              href="mailto:minehhz69@gmail.com"
              className="hover:text-primary transition-colors"
              aria-label="Send an email"
            >
                <Mail className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end perspective-1000"
        >
          <Card3D />
        </motion.div>
      </div>
    </section>
  )
}
