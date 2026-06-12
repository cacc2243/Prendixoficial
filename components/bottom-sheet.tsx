"use client"

import { useEffect, type ReactNode } from "react"

export function BottomSheet({
  open,
  onClose,
  children,
  labelledBy,
}: {
  open: boolean
  onClose: () => void
  children: ReactNode
  labelledBy?: string
}) {
  // Bloqueia o scroll do body enquanto o sheet está aberto.
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = original
    }
  }, [open])

  // Fecha no ESC.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-start">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Fechar"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in"
      />

      {/* Painel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        className="no-scrollbar relative mt-10 flex max-h-[calc(100dvh-2.5rem)] w-full max-w-[440px] flex-col overflow-y-auto rounded-t-[28px] border border-border bg-background shadow-2xl animate-in slide-in-from-bottom duration-300"
      >
        {children}
      </div>
    </div>
  )
}
