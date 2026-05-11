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
        "pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4",
      )}
    >
      <div
        className={cn(
          "pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border/40 bg-background/70 px-2 py-2 backdrop-blur-xl shadow-lg transition-all duration-300 sm:gap-2 sm:px-4",
          scrolled ? "scale-100" : "scale-105 mt-2"
        )}
      >
        <div className="mr-1 flex items-center gap-0.5 sm:mr-2 sm:gap-1">
            {navItems.map((item) => (
             <a
               key={item.name}
               href={item.href}
               className="group relative rounded-full px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground sm:px-3"
             >
               <span className="hidden sm:inline">{item.name}</span>
               <span className="sm:hidden">
                 <item.icon className="w-4 h-4" aria-hidden="true" />
              </span>
              <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
        <div className="mx-1 h-6 w-px shrink-0 bg-border/50" />
        <LocaleSwitcher />
        <ThemeToggle />
      </div>
    </motion.nav>
  )
}
