"use client"

import Image from "next/image"
import { Star, Clock, Eye, Play, Crown, TrendingUp, TrendingDown, Minus } from "lucide-react"
import { PageTopBar } from "@/components/top-bar"
import { series } from "@/lib/series-data"
import { useSerieFlow } from "@/components/serie-flow-context"

function TrendBadge({ trend }: { trend: number }) {
  if (trend > 0)
    return (
      <span className="flex items-center gap-0.5 text-[11px] font-semibold text-emerald-400">
        <TrendingUp className="h-3 w-3" />+{trend}
      </span>
    )
  if (trend < 0)
    return (
      <span className="flex items-center gap-0.5 text-[11px] font-semibold text-primary">
        <TrendingDown className="h-3 w-3" />
        {trend}
      </span>
    )
  return (
    <span className="flex items-center gap-0.5 text-[11px] font-semibold text-muted-foreground">
      <Minus className="h-3 w-3" />
    </span>
  )
}

export function HotTabScreen() {
  const { openSerie } = useSerieFlow()
  const top10 = series.slice(0, 10)
  const [first, ...rest] = top10

  return (
    <div>
      <PageTopBar />

      <div className="px-5 pt-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Top 10 da semana
        </p>
        <h1 className="mt-1 font-serif text-3xl font-bold text-foreground">
          Em alta agora
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          As séries mais assistidas no Prendix nos últimos 7 dias.
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-[11px] font-bold text-primary">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            AO VIVO
          </span>
          <span className="text-xs text-muted-foreground">
            Atualizado agora · 7 dias
          </span>
        </div>
      </div>

      {/* Card Nº 1 */}
      <div className="mt-5 px-5">
        <button
          type="button"
          onClick={() => openSerie(first)}
          aria-label={`Abrir ${first.title}`}
          className="relative block w-full overflow-hidden rounded-lg border border-primary/25 text-left transition active:scale-[0.99]"
        >
          <div className="relative h-64">
            <Image
              src={first.img || "/placeholder.svg"}
              alt={first.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/20" />
          </div>

          <span className="gradient-rose absolute left-4 top-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold text-primary-foreground shadow-md shadow-primary/40">
            <Crown className="h-3.5 w-3.5 fill-current" />
            Nº 1 da semana
          </span>
          <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-xs font-bold text-foreground backdrop-blur">
            <Star className="h-3.5 w-3.5 fill-gold text-gold" />
            {first.rating}
          </span>

          <span className="rank-outline pointer-events-none absolute -bottom-6 left-2 font-serif text-[10rem] font-black leading-none">
            1
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5 pl-28">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
              {first.genre}
            </p>
            <h2 className="mt-1 font-serif text-2xl font-bold leading-tight text-white">
              {first.title}
            </h2>
            <p className="mt-1 text-pretty text-sm text-white/80">{first.hook}</p>
            <div className="mt-3 flex items-center gap-3 text-xs text-white/85">
              <span className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" />
                {first.views}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                {first.caps} caps
              </span>
              <span className="flex items-center gap-0.5 font-semibold text-emerald-400">
                <TrendingUp className="h-3.5 w-3.5" />+{first.trend}%
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Lista 2..10 */}
      <ul className="mt-4 space-y-3 px-5">
        {rest.map((serie, i) => (
          <li
            key={serie.id}
            onClick={() => openSerie(serie)}
            className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-card p-3 transition active:scale-[0.99]"
          >
            <span className="rank-outline w-12 shrink-0 text-center font-serif text-5xl font-black leading-none">
              {i + 2}
            </span>
            <div className="relative h-16 w-14 shrink-0 overflow-hidden rounded-md">
              <Image
                src={serie.img || "/placeholder.svg"}
                alt={serie.title}
                fill
                className="object-cover"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-0.5 bg-black/60 py-0.5 text-[9px] font-bold text-white">
                <Star className="h-2 w-2 fill-gold text-gold" />
                {serie.rating}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-bold text-foreground">
                {serie.title}
              </h3>
              <p className="truncate text-xs text-muted-foreground">{serie.hook}</p>
              <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="flex items-center gap-0.5">
                  <Eye className="h-3 w-3" />
                  {serie.views}
                </span>
                <span>·</span>
                <span>{serie.genre}</span>
                <span>·</span>
                <TrendBadge trend={serie.trend} />
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                openSerie(serie)
              }}
              aria-label={`Assistir ${serie.title}`}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-foreground transition active:scale-90"
            >
              <Play className="h-4 w-4 fill-current" />
            </button>
          </li>
        ))}
      </ul>

      <p className="mt-6 px-5 text-center text-xs text-muted-foreground">
        Ranking baseado em leituras, salvamentos e avaliações.
      </p>
    </div>
  )
}
