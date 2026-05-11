"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectCard({ title, description, result, tags, github, demo, index, buttonLabels }) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 50 }}
      whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-colors group">
        <CardHeader>
          <CardTitle className="flex justify-between items-start">
            <span className="text-xl font-bold group-hover:text-primary transition-colors">{title}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="mb-4 line-clamp-3 text-muted-foreground">{description}</p>
          {result ? <p className="mb-4 text-sm text-foreground/80">{result}</p> : null}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-secondary/50">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="gap-2 pt-4 border-t border-border/50">
          {demo && (
            <Button variant="secondary" size="sm" className="w-full" asChild>
              <a href={demo} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo for ${title}`}>
                <ExternalLink className="w-4 h-4 mr-2" />
                {buttonLabels.liveDemo}
              </a>
            </Button>
          )}

          {github && (
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`Open source code for ${title}`}>
                <Github className="w-4 h-4 mr-2" />
                {buttonLabels.code}
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
