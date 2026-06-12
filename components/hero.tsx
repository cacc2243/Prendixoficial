"use client"

import Image from "next/image"
import { Star, Play, User } from "lucide-react"
import { HeroSlideshow } from "./hero-slideshow"
import { series } from "@/lib/series-data"
import { useSerieFlow } from "@/components/serie-flow-context"

const avatars = [
  "/images/avatar-1.png",
  "/images/avatar-2.png",
  "/images/avatar-3.png",
  "/images/avatar-4.png",
]

export function Hero() {
  const { openPaywall } = useSerieFlow()

  return (
    <section className="relative overflow-hidden">
      {/* Slideshow de imagens como fundo de toda a seção */}
      <HeroSlideshow />

      {/* Conteúdo sobreposto */}
      <div className="relative z-10 px-5 pt-[24rem]">
        {/* Logo */}
        <div className="mb-3 flex items-center">
          <Image
            src="/images/prendix-logo.png"
            alt="Logo Prendix"
            width={88}
            height={88}
            className="h-20 w-20 object-contain"
          />
        </div>

        {/* Tags + avaliação */}
        <div className="mb-4 flex items-center gap-3">
          <span className="rounded-full bg-primary/20 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-primary">
            +18 · SUSPENSE
          </span>
          <span className="flex items-center gap-1 text-xs text-foreground/80">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
            <span className="font-semibold text-foreground">4.9</span>
            <span className="text-muted-foreground">· 12.4k avaliações</span>
          </span>
        </div>

        {/* Título */}
        <h1 className="text-balance font-serif text-[2rem] font-bold leading-[1.1] tracking-tight text-foreground">
          Histórias que te{" "}
          <span className="bg-gradient-to-r from-[#f5d98b] via-[#e0b15f] to-[#c2873a] bg-clip-text text-transparent">
            prendem
          </span>{" "}
          do começo ao{" "}
          <span className="bg-gradient-to-r from-[#f5d98b] via-[#e0b15f] to-[#c2873a] bg-clip-text italic text-transparent">
            fim
          </span>
          <span className="text-foreground">.</span>
        </h1>

        {/* Subtítulo */}
        <p className="mt-4 max-w-[22rem] text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Mais de{" "}
          <span className="font-semibold text-foreground">1.200 séries e novelas</span>{" "}
          brasileiras de romance, vingança, mistério e desejo — direto no seu
          bolso.
        </p>

        {/* Prova social */}
        <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-border bg-card/80 py-2.5 pl-2.5 pr-4 backdrop-blur">
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-card bg-gradient-to-br from-zinc-700 to-zinc-800"
                >
                  <User className="h-4 w-4 text-zinc-400" />
                </div>
              ))}
            </div>
            <span className="gradient-rose -ml-2 flex h-8 items-center rounded-full px-2.5 text-[11px] font-bold text-primary-foreground shadow-md shadow-primary/30">
              +2k
            </span>
          </div>
          <div className="leading-tight">
            <p className="flex items-center gap-1 text-xs font-semibold text-foreground">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              +2.000 leitoras
            </p>
            <p className="text-[11px] text-muted-foreground">
              já estão viciadas esta semana
            </p>
          </div>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => openPaywall(series[0])}
          className="gradient-rose mt-5 inline-flex items-center justify-center gap-2.5 rounded-full px-12 py-4 text-base font-semibold text-primary-foreground shadow-2xl shadow-primary/50 transition active:scale-[0.98]"
        >
          <Play className="h-4 w-4 fill-current" />
          Começar a ler
        </button>

        <p className="mt-4 pb-2 text-xs text-muted-foreground">
          Sem anúncios · novos capítulos toda semana
        </p>
      </div>
    </section>
  )
}
