import { Menu, Lock } from "lucide-react"
import Image from "next/image"

export function TopBar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-5 pt-5">
      <button
        type="button"
        aria-label="Abrir menu"
        className="flex h-10 w-10 items-center justify-center text-foreground/90"
      >
        <Menu className="h-6 w-6" />
      </button>

      <Image
        src="/images/prendix-logo.png"
        alt="Prendix"
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />

      <button
        type="button"
        aria-label="Conteúdo bloqueado"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary"
      >
        <Lock className="h-4 w-4" />
      </button>
    </header>
  )
}

export function PageTopBar() {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-background/80 px-5 py-4 backdrop-blur-xl">
      <button
        type="button"
        aria-label="Abrir menu"
        className="flex h-10 w-10 items-center justify-center text-foreground/90"
      >
        <Menu className="h-6 w-6" />
      </button>

      <Image
        src="/images/prendix-logo.png"
        alt="Prendix"
        width={32}
        height={32}
        className="h-8 w-8 object-contain"
      />

      <button
        type="button"
        aria-label="Conteúdo bloqueado"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary"
      >
        <Lock className="h-4 w-4" />
      </button>
    </header>
  )
}
