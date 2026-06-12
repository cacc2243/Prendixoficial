"use client"

import { useState } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { SavedProvider } from "@/components/saved-context"
import { SerieFlowProvider } from "@/components/serie-flow-context"
import { HomeScreen } from "@/components/screens/home-screen"
import { ExploreScreen } from "@/components/screens/explore-screen"
import { HotTabScreen } from "@/components/screens/hot-tab-screen"
import { SavedScreen } from "@/components/screens/saved-screen"
import { ProfileScreen } from "@/components/screens/profile-screen"
import type { Tab } from "@/lib/tabs"

export function AppShell() {
  const [tab, setTab] = useState<Tab>("inicio")

  return (
    <SavedProvider>
      <SerieFlowProvider>
        <main className="relative mx-auto min-h-screen w-full max-w-[440px] overflow-hidden bg-background pb-28">
          {tab === "inicio" && <HomeScreen />}
          {tab === "explorar" && <ExploreScreen onNavigate={setTab} />}
          {tab === "quente" && <HotTabScreen />}
          {tab === "salvos" && <SavedScreen onNavigate={setTab} />}
          {tab === "perfil" && <ProfileScreen />}
          <BottomNav active={tab} onChange={setTab} />
        </main>
      </SerieFlowProvider>
    </SavedProvider>
  )
}
