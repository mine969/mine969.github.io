import Image from "next/image"
import { leadershipCommunity } from "@/lib/portfolio-data"

export function LeadershipCommunitySection() {
  return (
    <section aria-labelledby="leadership-community-title" className="pt-8 sm:pt-10">
      <div className="beta-panel p-5 sm:p-8">
        <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">Leadership & Community</p>
        <h3 id="leadership-community-title" className="mt-3 text-3xl font-semibold tracking-tight">
          {leadershipCommunity.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
          {leadershipCommunity.intro}
        </p>

        <div className="mt-8 grid gap-5">
          {leadershipCommunity.events.map((event) => {
            const eventPhotos = leadershipCommunity.photos.filter((photo) => photo.event === event.shortEvent)

            return (
            <article key={event.title} className="beta-card p-4 sm:p-5">
              <div className="flex flex-col gap-2 border-b border-border/20 pb-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="beta-accent-label text-xs uppercase tracking-[0.18em]">{event.org}</p>
                  <h4 className="mt-1.5 text-lg font-semibold leading-snug sm:text-xl">{event.title}</h4>
                </div>
                <div className="text-left text-xs text-muted-foreground sm:text-right sm:text-sm">
                  <p>{event.date}</p>
                  <p>{event.location}</p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">{event.description}</p>

              <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                {event.bullets.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-12">
                {eventPhotos.map((photo, index) => {
                  const layoutClass =
                    eventPhotos.length === 3
                      ? index === 0
                        ? "sm:col-span-2 lg:col-span-7"
                        : "lg:col-span-5"
                      : index === 0
                        ? "sm:col-span-2 lg:col-span-7"
                        : index === 1
                          ? "lg:col-span-5"
                          : "lg:col-span-6"

                  return (
                    <figure key={photo.src} className={`beta-card group relative overflow-hidden ${layoutClass}`}>
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/15 to-transparent" />
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.02),rgba(34,211,238,0.08))] opacity-70" />
                        <figcaption className="absolute inset-x-0 bottom-0 p-4">
                          <p className="text-[11px] uppercase tracking-[0.18em] text-primary/90">{photo.event}</p>
                          <p className="mt-1 text-sm font-semibold text-foreground">{photo.caption}</p>
                        </figcaption>
                      </div>
                    </figure>
                  )
                })}
              </div>
            </article>
          )})}
        </div>
      </div>
    </section>
  )
}
