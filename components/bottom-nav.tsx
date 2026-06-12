"use client"

import { Compass, Flame, Home, Bookmark, User } from "lucide-react"
import type { Tab } from "@/lib/tabs"

const items: { id: Tab; label: string; icon: typeof Home }[] = [
  { id: "explorar", label: "Explorar", icon: Compass },
  { id: "quente", label: "Quente", icon: Flame },
  { id: "inicio", label: "Início", icon: Home },
  { id: "salvos", label: "Salvos", icon: Bookmark },
  { id: "perfil", label: "Perfil", icon: User },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: Tab
  onChange: (tab: Tab) => void
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 mx-auto w-full max-w-[440px] px-4 pb-4">
      <div className="flex items-center justify-between rounded-full border border-border bg-card/85 px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-black/40">
        {items.map(({ id, label, icon: Icon }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              type="button"
              onClick={() => onChange(id)}
              className={`flex flex-1 flex-col items-center gap-1 transition ${
                isActive ? "text-[var(--prendix-rose)]" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={isActive ? 2.4 : 2} />
              <span className={`text-[10px] leading-none ${isActive ? "font-semibold" : "font-medium"}`}>
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
