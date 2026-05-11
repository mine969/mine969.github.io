"use client"

import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { LocaleSwitcher } from "@/components/locale-switcher"
import { useLocale } from "@/components/locale-provider"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Home, User, Briefcase, Code, Mail } from "lucide-react"

export function Navbar() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { copy } = useLocale()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setScrolled(latest > 50)
  })

  const navItems = [
    { name: copy.nav.home, href: "#home", icon: Home },
    { name: copy.nav.about, href: "#about", icon: User },
    { name: copy.nav.experience, href: "#experience", icon: Briefcase },
    { name: copy.nav.projects, href: "#projects", icon: Code },
    { name: copy.nav.contact, href: "#contact", icon: Mail },
  ]

  return (
    <motion.nav
      aria-label="Primary"
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex justify-center pt-4 px-4 pointer-events-none",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex items-center gap-2 px-4 py-2 rounded-full border border-border/40 bg-background/60 backdrop-blur-xl shadow-lg transition-all duration-300",
          scrolled ? "scale-100" : "scale-105 mt-2"
        )}
      >
        <div className="flex items-center gap-1 mr-2">
           {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-accent/50 group"
            >
              <span className="hidden sm:inline">{item.name}</span>
              <span className="sm:hidden">
                <item.icon className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        <div className="h-6 w-px bg-border/50 mx-1" />
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
