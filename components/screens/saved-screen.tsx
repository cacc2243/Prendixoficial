"use client"

import { Bookmark, Compass } from "lucide-react"
import { PageTopBar } from "@/components/top-bar"
import { SerieCard } from "@/components/serie-card"
import { useSaved } from "@/components/saved-context"
import { series } from "@/lib/series-data"
import type { Tab } from "@/lib/tabs"

export function SavedScreen({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const { saved } = useSaved()
  const savedSeries = series.filter((s) => saved.includes(s.id))

  return (
    <div>
      <PageTopBar />

      <div className="px-5 pt-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Sua lista
        </p>
        <h1 className="mt-1 font-serif text-3xl font-bold text-foreground">
          Salvos
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Suas séries favoritas aparecem aqui para assistir depois.
        </p>
      </div>

      {savedSeries.length === 0 ? (
        <div className="mt-7 px-5">
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-card px-6 py-12 text-center">
            <span className="gradient-rose flex h-16 w-16 items-center justify-center rounded-2xl text-primary-foreground shadow-lg shadow-primary/40">
              <Bookmark className="h-7 w-7" />
            </span>
            <div>
              <p className="text-lg font-bold text-foreground">Nada salvo ainda</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Toque no coração de uma série para guardá-la aqui.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate("explorar")}
              className="gradient-rose flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/40 transition active:scale-[0.98]"
            >
              <Compass className="h-4 w-4" />
              Explorar séries
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-6 px-5">
          <p className="mb-4 text-sm text-muted-foreground">
            <span className="font-bold text-foreground">{savedSeries.length}</span>{" "}
            {savedSeries.length === 1 ? "série salva" : "séries salvas"}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {savedSeries.map((serie) => (
              <SerieCard key={serie.id} serie={serie} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
