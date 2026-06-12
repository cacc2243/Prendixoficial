"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { Serie } from "@/lib/series-data"
import { SerieDetailSheet } from "@/components/serie-detail-sheet"
import { PaywallSheet } from "@/components/paywall-sheet"

type SerieFlowContextType = {
  openSerie: (serie: Serie) => void
  openPaywall: (serie: Serie) => void
}

const SerieFlowContext = createContext<SerieFlowContextType | null>(null)

export function SerieFlowProvider({ children }: { children: ReactNode }) {
  const [detailSerie, setDetailSerie] = useState<Serie | null>(null)
  const [paywallSerie, setPaywallSerie] = useState<Serie | null>(null)

  const openSerie = useCallback((serie: Serie) => {
    setDetailSerie(serie)
  }, [])

  const closeDetail = useCallback(() => setDetailSerie(null), [])

  // Abre o paywall diretamente (ex.: CTA "Começar a ler" da home).
  const openPaywall = useCallback((serie: Serie) => {
    setDetailSerie(null)
    setPaywallSerie(serie)
  }, [])

  // Ao tentar assistir, fecha o detalhe e abre o paywall para a mesma série.
  const requestWatch = useCallback((serie: Serie) => {
    setDetailSerie(null)
    setPaywallSerie(serie)
  }, [])

  const closePaywall = useCallback(() => setPaywallSerie(null), [])

  return (
    <SerieFlowContext.Provider value={{ openSerie, openPaywall }}>
      {children}
      <SerieDetailSheet
        serie={detailSerie}
        onClose={closeDetail}
        onWatch={requestWatch}
      />
      <PaywallSheet serie={paywallSerie} onClose={closePaywall} />
    </SerieFlowContext.Provider>
  )
}

export function useSerieFlow() {
  const ctx = useContext(SerieFlowContext)
  if (!ctx) throw new Error("useSerieFlow deve ser usado dentro de SerieFlowProvider")
  return ctx
}
