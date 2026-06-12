"use client"

import Image from "next/image"
import { Flame, ChevronRight, ShieldCheck } from "lucide-react"
import { series } from "@/lib/series-data"
import { useSerieFlow } from "@/components/serie-flow-context"

const sideIds = ["amor-proibido", "plantao-proibido", "as-gemeas", "vinganca-perfeita"]
const mainId = "mao-no-pescoco"

export function HotSection() {
  const { openSerie } = useSerieFlow()
  const main = series.find((s) => s.id === mainId)!
  const sideCards = sideIds.map((id) => series.find((s) => s.id === id)!)

  return (
    <section className="mt-6 px-5">
      <div className="overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-primary/15 to-card p-5">
        {/* Header do card */}
        <div className="flex items-center justify-between">
          <span className="gradient-rose flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wide text-primary-foreground shadow-md shadow-primary/30">
            <Flame className="h-3.5 w-3.5 fill-current" />
            +18 QUENTE
          </span>
          <span className="text-xs text-muted-foreground">32 séries</span>
        </div>

        {/* Título */}
        <h2 className="mt-4 text-balance font-serif text-2xl font-bold leading-tight text-foreground">
          Histórias <span className="text-[#e0b15f]">proibidas</span> esta noite
        </h2>
        <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
          Romances ardentes, segredos sussurrados e encontros que ninguém pode
          saber.
        </p>

        {/* Grid de cards */}
        <div className="mt-5 grid grid-cols-2 gap-3">
          {/* Card principal */}
          <button
            type="button"
            onClick={() => openSerie(main)}
            className="relative overflow-hidden rounded-lg text-left transition active:scale-[0.98]"
          >
            <div className="relative h-full min-h-[250px]">
              <Image
                src={main.img || "/placeholder.svg"}
                alt={`História em destaque: ${main.title}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
              <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-card/80 px-2.5 py-1 text-[10px] font-bold text-foreground backdrop-blur">
                <Flame className="h-3 w-3 fill-primary text-primary" />
                HOT
              </span>
              <div className="absolute inset-x-0 bottom-3 text-center">
                <p className="text-[11px] font-medium text-white/80">+18</p>
                <p className="text-sm font-bold text-white">{main.title}</p>
              </div>
            </div>
          </button>

          {/* Cards laterais */}
          <div className="grid grid-cols-2 gap-3">
            {sideCards.map((card) => (
              <button
                key={card.id}
                type="button"
                onClick={() => openSerie(card)}
                className="relative aspect-[3/4] overflow-hidden rounded-lg transition active:scale-[0.97]"
              >
                <Image
                  src={card.img || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <span className="absolute inset-x-1.5 bottom-2 text-center text-pretty text-[11px] font-bold leading-tight text-white">
                  {card.title}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Botão explorar */}
        <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 py-3.5 text-sm font-semibold text-background transition-opacity hover:opacity-90">
          <Flame className="h-4 w-4 text-primary" />
          Explorar todas as +18
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Aviso */}
        <div className="mt-4 flex gap-2.5 rounded-2xl border border-primary/20 bg-primary/5 p-4">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Aviso +18:</span>{" "}
            estas histórias podem conter cenas explícitas, linguagem sensual,
            nudez sugerida e temas adultos. Conteúdo recomendado apenas para
            maiores de 18 anos — acesse por sua conta e risco.
          </p>
        </div>
      </div>
    </section>
  )
}
