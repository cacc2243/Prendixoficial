import type { Metadata } from "next"
import { ReaderScreen } from "@/components/screens/reader-screen"

export const metadata: Metadata = {
  title: "Meu Desamor Perfeito — Prendix",
  description:
    "Cinco anos de casamento. Zero noites de amor. A história de Olivia Muñoz começa numa madrugada que ela nunca vai esquecer.",
}

export default function MeuDesamorPage() {
  return <ReaderScreen />
}
