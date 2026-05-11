"use client"

import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

function BentoCard({ className, children, delay = 0, reducedMotion }) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-colors overflow-hidden relative group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </motion.div>
  )
}

function SkillBar({ name, level, reducedMotion }) {
  return (
    <div className="mb-3 last:mb-0">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          initial={reducedMotion ? false : { width: 0 }}
          whileInView={reducedMotion ? undefined : { width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={reducedMotion ? { width: `${level}%` } : undefined}
          className="bg-primary h-2 rounded-full"
        />
      </div>
    </div>
  )
}

export function BentoGrid({ education, languages, technicalSkills, softSkills, experience, labels }) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
      <BentoCard className="md:col-span-2 md:row-span-2" reducedMotion={reducedMotion}>
        <h3 className="text-2xl font-bold mb-2 text-primary">{labels.educationTitle}</h3>
        <div className="space-y-6 mt-4">
          {education.map((item, index) => (
            <div key={item.title} className={index > 0 ? "border-t border-border/50 pt-4" : undefined}>
              <div className="flex justify-between items-start gap-4">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
              <p className="text-accent font-medium">{item.org}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard delay={0.1} className="md:row-span-2" reducedMotion={reducedMotion}>
        <h3 className="text-lg font-semibold mb-4">{labels.languagesTitle}</h3>
        <div className="space-y-3">
          {languages.map((item) => (
            <div key={item.name} className="flex justify-between items-center">
              <span>{item.name}</span>
              <Badge variant="outline">{item.level}</Badge>
            </div>
          ))}
        </div>
      </BentoCard>

      <BentoCard delay={0.2} className="md:col-span-2" reducedMotion={reducedMotion}>
        <h3 className="text-lg font-semibold mb-4 text-primary">{labels.technicalTitle}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {technicalSkills.map((skill) => (
            <SkillBar key={skill.name} {...skill} reducedMotion={reducedMotion} />
          ))}
        </div>
      </BentoCard>

      <BentoCard delay={0.3} reducedMotion={reducedMotion}>
        <h3 className="text-lg font-semibold mb-4">{labels.softSkillsTitle}</h3>
        <div className="flex flex-wrap gap-2">
          {softSkills.map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </BentoCard>

      <BentoCard delay={0.4} className="md:col-span-3" reducedMotion={reducedMotion}>
        <h3 className="text-lg font-semibold mb-2 text-primary">{labels.latestExperienceTitle}</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {experience.map((item) => (
            <div key={`${item.title}-${item.org}`}>
              <h4 className="text-xl font-bold">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.org} • {item.period}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.summary}</p>
            </div>
          ))}
        </div>
      </BentoCard>
    </div>
  )
}
