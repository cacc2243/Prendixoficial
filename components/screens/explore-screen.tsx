"use client"

import { useMemo, useState } from "react"
import { Search, TrendingUp, Flame, HeartCrack, Skull, ChevronRight } from "lucide-react"
import { PageTopBar } from "@/components/top-bar"
import { SerieCard } from "@/components/serie-card"
import { series, moods, categories } from "@/lib/series-data"
import type { Tab } from "@/lib/tabs"

const trending = ["chefe", "vingança", "proibido", "casamento", "gêmeas"]

const moodStyles: Record<string, { className: string; icon: typeof Flame }> = {
  "sem-dormir": { className: "gradient-rose", icon: Flame },
  "coracao-mao": { className: "bg-gradient-to-br from-[#b5179e] to-[#7209b7]", icon: HeartCrack },
  "quem-matou": { className: "bg-gradient-to-br from-[#1f2937] to-[#0f172a]", icon: Skull },
  "puro-fogo": { className: "bg-gradient-to-br from-[#e85d04] to-[#dc2f02]", icon: Flame },
}

export function ExploreScreen({ onNavigate }: { onNavigate: (tab: Tab) => void }) {
  const [query, setQuery] = useState("")
  const [cat, setCat] = useState("Todas")
  const [sort, setSort] = useState<"top" | "novos">("top")

  const filtered = useMemo(() => {
    let list = series.filter((s) => {
      const matchQuery =
        query.trim() === "" ||
        s.title.toLowerCase().includes(query.toLowerCase()) ||
        s.genre.toLowerCase().includes(query.toLowerCase())
      const matchCat =
        cat === "Todas" ||
        s.genre.toLowerCase() === cat.toLowerCase() ||
        s.badge === cat
      return matchQuery && matchCat
    })
    list = [...list].sort((a, b) =>
      sort === "top" ? b.trend - a.trend : b.caps - a.caps,
    )
    return list
  }, [query, cat, sort])

  return (
    <div>
      <PageTopBar />

      <div className="px-5 pt-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
          Catálogo completo
        </p>
        <h1 className="mt-1 font-serif text-3xl font-bold text-foreground">
          Explorar
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          344 séries · 12 categorias para você devorar.
        </p>

        {/* Busca */}
        <div className="mt-5 flex items-center gap-3 rounded-full border border-border bg-card px-4 py-3">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por título, vibe ou personagem..."
            className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Trending */}
        <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="flex shrink-0 items-center gap-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">
            <TrendingUp className="h-3.5 w-3.5" /> Trending
          </span>
          {trending.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setQuery(t)}
              className="flex shrink-0 items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 text-xs text-foreground"
            >
              <TrendingUp className="h-3 w-3 text-primary" />
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Por humor */}
      <div className="mt-7">
        <div className="flex items-center justify-between px-5">
          <h2 className="text-lg font-bold text-foreground">Por humor</h2>
          <span className="flex items-center text-xs text-muted-foreground">
            deslize <ChevronRight className="h-3.5 w-3.5" />
          </span>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-1 no-scrollbar">
          {moods.map((mood) => {
            const style = moodStyles[mood.id] ?? moodStyles["sem-dormir"]
            const Icon = style.icon
            return (
              <button
                key={mood.id}
                type="button"
                className={`relative flex h-28 w-44 shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-4 text-left ${style.className}`}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                  <Icon className="h-4 w-4 text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{mood.title}</p>
                  <p className="text-xs text-white/75">{mood.count} séries</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Categorias */}
      <div className="mt-7 px-5">
        <h2 className="text-lg font-bold text-foreground">Categorias</h2>
        <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1 no-scrollbar">
          {categories.map((c) => {
            const isActive = cat === c.label
            return (
              <button
                key={c.label}
                type="button"
                onClick={() => setCat(c.label)}
                className={`flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "gradient-rose text-primary-foreground"
                    : "border border-border bg-card text-muted-foreground"
                }`}
              >
                {c.label}
                <span
                  className={`text-xs ${isActive ? "text-primary-foreground/80" : "text-foreground/50"}`}
                >
                  {c.count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Grid */}
      <div className="mt-5 px-5">
        <div className="flex items-center justify-between">
          <p className="text-sm text-foreground">
            <span className="font-bold">{filtered.length}</span>{" "}
            <span className="text-muted-foreground">séries</span>
          </p>
          <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
            <button
              type="button"
              onClick={() => setSort("top")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                sort === "top" ? "gradient-rose text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Top
            </button>
            <button
              type="button"
              onClick={() => setSort("novos")}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                sort === "novos" ? "gradient-rose text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              Novos
            </button>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-4 grid grid-cols-2 gap-3">
            {filtered.map((serie) => (
              <SerieCard key={serie.id} serie={serie} />
            ))}
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <p className="text-sm font-semibold text-foreground">
              Nenhuma série encontrada
            </p>
            <p className="text-xs text-muted-foreground">
              Tente outra busca ou categoria.
            </p>
            <button
              type="button"
              onClick={() => onNavigate("quente")}
              className="gradient-rose mt-1 rounded-full px-4 py-2 text-xs font-semibold text-primary-foreground"
            >
              Ver as mais quentes
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
