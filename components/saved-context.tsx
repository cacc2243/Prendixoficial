"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type SavedContextType = {
  saved: string[]
  toggle: (id: string) => void
  isSaved: (id: string) => boolean
}

const SavedContext = createContext<SavedContextType | null>(null)

export function SavedProvider({ children }: { children: ReactNode }) {
  const [saved, setSaved] = useState<string[]>([])

  const toggle = (id: string) =>
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    )

  const isSaved = (id: string) => saved.includes(id)

  return (
    <SavedContext.Provider value={{ saved, toggle, isSaved }}>
      {children}
    </SavedContext.Provider>
  )
}

export function useSaved() {
  const ctx = useContext(SavedContext)
  if (!ctx) throw new Error("useSaved deve ser usado dentro de SavedProvider")
  return ctx
}
