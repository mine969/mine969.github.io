"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function ProjectCard({ title, description, tags, github, demo, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
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
          <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
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
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}

          {github && (
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  )
}
