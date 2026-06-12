"use client"

import Image from "next/image"
import { Star, Clock, Flame, Heart } from "lucide-react"
import type { Serie } from "@/lib/series-data"
import { useSaved } from "@/components/saved-context"
import { useSerieFlow } from "@/components/serie-flow-context"

export function SerieCard({ serie }: { serie: Serie }) {
  const { isSaved, toggle } = useSaved()
  const { openSerie } = useSerieFlow()
  const saved = isSaved(serie.id)

  return (
    <article
      onClick={() => openSerie(serie)}
      className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition active:scale-[0.98]"
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={serie.img || "/placeholder.svg"}
          alt={serie.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {serie.badge && (
          <span
            className={`absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold ${
              serie.badge === "HOT"
                ? "gradient-rose text-primary-foreground"
                : "bg-background/80 text-foreground backdrop-blur"
            }`}
          >
            {serie.badge === "HOT" && <Flame className="h-3 w-3 fill-current" />}
            {serie.badge}
          </span>
        )}

        <span className="absolute right-2.5 top-2.5 flex items-center gap-1 rounded-full bg-background/80 px-2 py-1 text-[10px] font-bold text-foreground backdrop-blur">
          <Star className="h-3 w-3 fill-gold text-gold" />
          {serie.rating}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            toggle(serie.id)
          }}
          aria-label={saved ? "Remover dos salvos" : "Salvar série"}
          aria-pressed={saved}
          className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-background/70 text-foreground backdrop-blur transition active:scale-90"
        >
          <Heart
            className={`h-4 w-4 transition ${saved ? "fill-primary text-primary" : "text-foreground"}`}
          />
        </button>
      </div>

      <div className="p-3">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          {serie.genre}
        </span>
        <h3 className="mt-0.5 text-pretty text-sm font-bold leading-tight text-foreground">
          {serie.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-[11px] text-muted-foreground">
          <Clock className="h-3 w-3" />
          {serie.caps} caps
        </p>
      </div>
    </article>
  )
}
