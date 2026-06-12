"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Play, Star, Send, Heart } from "lucide-react"
import { BottomSheet } from "@/components/bottom-sheet"
import { useSaved } from "@/components/saved-context"
import { series, getSynopsis, type Serie } from "@/lib/series-data"

export function SerieDetailSheet({
  serie,
  onClose,
  onWatch,
}: {
  serie: Serie | null
  onClose: () => void
  onWatch: (serie: Serie) => void
}) {
  const { isSaved, toggle } = useSaved()
  const [expanded, setExpanded] = useState(false)

  if (!serie) return null

  const saved = isSaved(serie.id)
  const synopsis = getSynopsis(serie)
  const cast = series.filter((s) => s.id !== serie.id).slice(0, 6)

  return (
    <BottomSheet open={!!serie} onClose={onClose} labelledBy="serie-detail-title">
      {/* Capa */}
      <div className="relative aspect-[4/5] w-full shrink-0">
        <Image
          src={serie.img || "/placeholder.svg"}
          alt={serie.title}
          fill
          className="object-cover"
          priority
        />
        {/* Fade forte na base para a imagem sumir suavemente no fundo */}
        <div className="absolute inset-0 bg-gradient-to-t from-background from-25% via-background/90 via-45% to-transparent to-70%" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition active:scale-90"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Play central */}
        <button
          type="button"
          onClick={() => onWatch(serie)}
          aria-label={`Assistir ${serie.title}`}
          className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-md transition active:scale-90"
        >
          <Play className="h-7 w-7 fill-current" />
        </button>
      </div>

      {/* Corpo */}
      <div className="relative z-10 -mt-12 px-5 pb-32">
        <div className="text-center">
          <h2
            id="serie-detail-title"
            className="inline-flex items-center gap-2 text-balance font-serif text-3xl font-bold leading-tight text-foreground"
          >
            {serie.title}
            <span className="rounded-full bg-secondary px-2 py-0.5 text-[11px] font-semibold text-muted-foreground">
              16+
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-[20rem] text-pretty text-sm italic text-muted-foreground">
            {serie.hook}
          </p>
        </div>

        {/* Pills + ações */}
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
              {serie.genre}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground">
              16+
            </span>
            <span className="flex items-center gap-1 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-foreground">
              <Star className="h-3.5 w-3.5 fill-gold text-gold" />
              {serie.rating}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Compartilhar"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition active:scale-90"
            >
              <Send className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => toggle(serie.id)}
              aria-label={saved ? "Remover dos salvos" : "Salvar série"}
              aria-pressed={saved}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition active:scale-90"
            >
              <Heart className={`h-4 w-4 ${saved ? "fill-primary text-primary" : ""}`} />
            </button>
          </div>
        </div>

        {/* Sinopse */}
        <h3 className="mt-6 text-base font-bold text-foreground">Sinopse</h3>
        <p
          className={`mt-2 text-pretty text-sm leading-relaxed text-muted-foreground ${
            expanded ? "" : "line-clamp-3"
          }`}
        >
          {synopsis}
        </p>
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-1 text-sm font-medium text-primary"
        >
          {expanded ? "Mostrar menos" : "Mostrar mais"}
        </button>

        {/* Elenco */}
        <h3 className="mt-6 text-base font-bold text-foreground">Elenco</h3>
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto">
          {cast.map((c) => (
            <div key={c.id} className="w-20 shrink-0">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                <Image src={c.img || "/placeholder.svg"} alt={c.title} fill className="object-cover" />
              </div>
              <p className="mt-1.5 truncate text-center text-[11px] text-muted-foreground">
                {c.title.split(" ")[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA fixo */}
      <div className="sticky bottom-0 z-20 border-t border-border bg-background px-5 py-4">
        <button
          type="button"
          onClick={() => onWatch(serie)}
          className="gradient-rose flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition active:scale-[0.99]"
        >
          <Play className="h-5 w-5 fill-current" />
          Assistir capítulo 1
        </button>
      </div>
    </BottomSheet>
  )
}
