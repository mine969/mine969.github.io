import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { ProjectCard } from "@/components/project-card"

export default function Portfolio() {
  const projects = [
    {
      title: "Burger POS & Delivery System",
      description:
        "A comprehensive Point of Sale and online ordering system featuring backend architecture, system design, and DevOps automation pipelines.",
      tags: ["Backend", "DevOps", "POS", "System Design"],
      github: "https://github.com/mine969/A-Burgar-POS-delivery-system.git",
    },
    {
      title: "Healthcare LINE OA Automation",
      description:
        "Built internal tools for healthcare marketing teams to streamline messaging workflows, content scheduling, and performance tracking.",
      tags: ["Automation", "Analytics", "LINE OA", "Marketing Ops"],
      github: "https://github.com/mine969",
    },
    {
      title: "Secure Portfolio Platform",
      description:
        "A modern, accessible portfolio optimized for static deployment, performance budgets, and security best practices.",
      tags: ["Next.js", "Accessibility", "UI/UX", "SEO"],
      github: "https://github.com/mine969/Mine-Porfolio-Website",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Navbar />
      
      <main className="container mx-auto px-4 space-y-24 pb-24">
        <Hero />

        <section id="about" className="scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a final-year Digital Innovative Technology student at{" "}
              <span className="text-primary font-medium">Rangsit University</span> with a passion for
              building secure, scalable, and user-friendly applications. My journey spans across
              Thailand, Japan, and Myanmar, giving me a unique multicultural perspective that I
              bring to every project.
            </p>
          </div>
        </section>

        <section aria-label="Highlights" className="scroll-mt-24">
          <div className="grid gap-6 md:grid-cols-3 text-center">
            {[
              { label: "Projects shipped", value: "15+" },
              { label: "Years of cross-cultural experience", value: "8" },
              { label: "Focus areas", value: "Cybersecurity • DevOps • UI" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border/50 bg-card/40 px-6 py-8 shadow-sm"
              >
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Experience & Skills</h2>
          <BentoGrid />
        </section>

        <section id="projects" className="scroll-mt-24">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </section>

        <section aria-label="What I deliver" className="scroll-mt-24">
          <div className="rounded-3xl border border-border/50 bg-card/40 px-6 py-10">
            <h2 className="text-3xl font-bold tracking-tight text-center">How I can help</h2>
            <p className="mt-3 text-center text-muted-foreground">
              I focus on the outcomes teams need before launch, during release, and after deployment.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Security-first build",
                  details:
                    "Threat modeling, secure coding checklists, and validation workflows baked into delivery.",
                },
                {
                  title: "Release-ready delivery",
                  details:
                    "Performance budgets, Lighthouse-friendly layouts, and automated deployment steps.",
                },
                {
                  title: "Human-centered UX",
                  details:
                    "Accessibility, content hierarchy, and clear calls-to-action that convert visitors.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border/40 bg-background/60 p-6"
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 py-12 bg-accent/5 rounded-3xl border border-border/50">
          <div className="text-center max-w-2xl mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to collaborate?</h2>
            <p className="text-muted-foreground mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want
              to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:minehhz69@gmail.com"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8"
              >
                Say Hello
              </a>
              <a
                href="https://www.linkedin.com/in/mine969/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-border/60 hover:border-primary/60 h-11 px-8"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
        <p>© 2025 Hein Htet Zaw. Built with Next.js, Tailwind & Framer Motion.</p>
      </footer>
    </div>
  )
}
