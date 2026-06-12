"use client"

import Image from "next/image"
import { Star, ChevronRight } from "lucide-react"
import type { Serie } from "@/lib/series-data"
import { shelves, getSerieById } from "@/lib/series-data"
import { useSerieFlow } from "@/components/serie-flow-context"

function ShelfCard({ serie }: { serie: Serie }) {
  const { openSerie } = useSerieFlow()

  return (
    <button
      type="button"
      onClick={() => openSerie(serie)}
      className="group relative aspect-[2/3] w-[160px] shrink-0 snap-start overflow-hidden rounded-lg border border-border bg-card text-left transition active:scale-[0.98]"
    >
      <Image
        src={serie.img || "/placeholder.svg"}
        alt={serie.title}
        fill
        sizes="160px"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/10" />

      {/* Badge de gênero */}
      <span className="absolute left-2.5 top-2.5 rounded-full bg-black/55 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur">
        {serie.genre}
      </span>

      {/* Nota */}
      <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-black/55 px-1.5 py-0.5 text-[10px] font-bold text-white backdrop-blur">
        <Star className="h-2.5 w-2.5 fill-[#e0b15f] text-[#e0b15f]" />
        {serie.rating.toFixed(1)}
      </span>

      {/* Texto sobre a imagem */}
      <div className="absolute inset-x-0 bottom-0 p-3">
        <h3 className="text-pretty text-sm font-bold leading-tight text-white">
          {serie.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-white/70">
          {serie.hook}
        </p>
        <div className="mt-2 flex items-center gap-1 text-[10px] text-white/60">
          <Star className="h-2.5 w-2.5 fill-[#e0b15f] text-[#e0b15f]" />
          <span className="font-semibold text-white/90">{serie.rating.toFixed(1)}</span>
          <span aria-hidden>·</span>
          <span>{serie.views} aval.</span>
        </div>
      </div>
    </button>
  )
}

export function SerieShelves() {
  return (
    <div className="mt-8 flex flex-col gap-8 pb-4">
      {shelves.map((shelf) => {
        const items = shelf.serieIds
          .map((id) => getSerieById(id))
          .filter((s): s is Serie => Boolean(s))

        if (items.length === 0) return null

        return (
          <section key={shelf.id} aria-label={shelf.title}>
            <div className="flex items-center justify-between px-5">
              <h2 className="text-balance text-lg font-bold text-foreground">
                {shelf.title}
              </h2>
              <button
                type="button"
                className="flex items-center gap-0.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Ver tudo
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="mt-3 flex snap-x scroll-px-5 gap-3 overflow-x-auto px-5 pb-1 no-scrollbar">
              {items.map((serie) => (
                <ShelfCard key={`${shelf.id}-${serie.id}`} serie={serie} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
