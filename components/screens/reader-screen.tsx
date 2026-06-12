"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Sun, Moon, Share2, Star, Clock, Heart, Bookmark, Play } from "lucide-react"

const FONT_SIZES = [
  { label: "A", px: 13, lineHeight: 1.6 },
  { label: "A", px: 15, lineHeight: 1.65 },
  { label: "A", px: 17, lineHeight: 1.7 },
  { label: "A", px: 19, lineHeight: 1.75 },
  { label: "A", px: 21, lineHeight: 1.8 },
]

type Block =
  | { type: "drop"; text: string }
  | { type: "p"; text: string }
  | { type: "em"; text: string }
  | { type: "image"; src: string; alt: string; caption: string }

const STORY: Block[] = [
  {
    type: "drop",
    text: "o banheiro vinha o som constante da água caindo.",
  },
  { type: "em", text: "Era Adrián Vargas, tomando banho." },
  { type: "em", text: "Três da madrugada." },
  { type: "em", text: "Ele tinha acabado de chegar." },
  {
    type: "p",
    text: "Olivia Muñoz estava parada diante da porta do banheiro, com o coração apertado. Precisava falar com ele. Havia algo importante preso na garganta, algo que vinha ensaiando há dias, mas que ainda não sabia como dizer.",
  },
  { type: "em", text: "Estava nervosa." },
  { type: "em", text: "Não sabia se Adrián aceitaria." },
  { type: "em", text: "Não sabia se ele entenderia." },
  {
    type: "p",
    text: "Foi quando, por cima do barulho da água, ela ouviu um som estranho vindo de dentro.",
  },
  { type: "em", text: "Ele estava… se tocando." },
  {
    type: "p",
    text: "Os gemidos abafados e a respiração pesada vieram um atrás do outro, como golpes secos contra o peito dela.",
  },
  { type: "em", text: "O mundo pareceu afundar." },
  {
    type: "image",
    src: "/meudesamor/door.png",
    alt: "Silhueta de uma mulher parada diante de uma porta fechada, com a luz quente de um abajur ao lado",
    caption: "Três da madrugada. E uma porta fechada entre eles.",
  },
  {
    type: "p",
    text: "Uma dor espessa subiu por sua garganta, sufocante, cruel, impossível de engolir.",
  },
  { type: "p", text: "Aquele dia era o aniversário de casamento deles." },
  { type: "em", text: "Cinco anos casada com Adrián." },
  {
    type: "p",
    text: "Cinco anos acreditando que construíam algo juntos. E o nome que ele sussurrou no banheiro não era o dela.",
  },
  {
    type: "p",
    text: "Olivia recuou um passo. Depois outro. As pernas tremiam, mas ela não conseguia se mover para longe daquela porta — como se uma parte dela ainda esperasse estar errada.",
  },
  { type: "em", text: "Mas não estava." },
  {
    type: "p",
    text: "A água parou. O silêncio que veio depois foi pior do que qualquer som. E foi nesse silêncio que Olivia entendeu, de uma vez por todas, que o casamento que ela tanto protegia já havia acabado muito antes daquela noite.",
  },
  { type: "em", text: "Naquele instante, algo dentro dela morreu." },
  {
    type: "p",
    text: "E algo novo, frio e afiado, começou a nascer no lugar.",
  },
]

export function ReaderScreen() {
  const router = useRouter()
  const [sizeIdx, setSizeIdx] = useState(2)
  const [dark, setDark] = useState(true)

  const size = FONT_SIZES[sizeIdx]

  const bg = dark ? "bg-background text-foreground" : "bg-white text-[#2a2420]"
  const headerBg = dark ? "bg-inherit" : "bg-white"
  const cardBg = dark ? "bg-card border-border" : "bg-white border-[#e8e4db]"
  const textSubtle = dark ? "text-muted-foreground" : "text-[#6b5f54]"
  const gold = dark ? "text-gold" : "text-[#b91c50]"

  return (
    <main className={`mx-auto flex min-h-dvh max-w-[480px] flex-col ${bg} transition-colors`}>
      {/* Header minimalista */}
      <header className={`sticky top-0 z-30 flex items-center justify-between ${headerBg} px-4 py-3 backdrop-blur ${dark ? "" : "border-b border-[#e8e4db]"}`}>
        <button
          type="button"
          onClick={() => router.push("/")}
          aria-label="Voltar"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${dark ? "bg-secondary/70 text-foreground" : "bg-[#f5f5f5] text-[#333]"} transition active:scale-90`}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="flex-1 px-3 text-center">
          <p className={`text-[9px] font-bold uppercase tracking-[0.15em] ${textSubtle}`}>DRAMA</p>
          <h1 className="truncate text-sm font-bold leading-tight">Meu Desamor Perfeito</h1>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((v) => !v)}
            aria-label={dark ? "Modo claro" : "Modo escuro"}
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${dark ? "bg-secondary/70 text-foreground" : "bg-[#f5f5f5] text-[#333]"} transition active:scale-90`}
          >
            {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            aria-label="Compartilhar"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${dark ? "bg-secondary/70 text-foreground" : "bg-[#f5f5f5] text-[#333]"} transition active:scale-90`}
          >
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Hero com informações */}
      <div className="relative shrink-0">
        {/* Imagem de capa - MAIOR */}
        <div className="relative aspect-[9/13] w-full">
          <Image src="/meudesamor/cover.png" alt="Meu Desamor Perfeito" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background from-20% via-background/40 to-transparent" />
        </div>

        {/* Conteúdo sobre a imagem */}
        <div className="absolute inset-x-0 bottom-0 px-6 pb-6">
          {/* Logo + Badge */}
          <div className="mb-3 flex items-center gap-2">
            <Image
              src="/images/prendix-logo.png"
              alt="Prendix"
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary">
              ORIGINAL · CAPÍTULO 01
            </p>
          </div>

          {/* Título com fonte sofisticada */}
          <h2 className="font-serif text-[3rem] font-bold italic leading-[0.9] tracking-tight text-white drop-shadow-2xl">
            Meu Desamor
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text not-italic text-transparent">
              Perfeito
            </span>
          </h2>
          <p className="mt-2 text-sm font-medium text-white/80">Romance · Drama · Desejo</p>
        </div>
      </div>

      {/* Metadados + Tags juntos */}
      <div className="px-6 pt-4 pb-3">
        <div className={`mb-3 flex items-center gap-4 text-xs ${textSubtle}`}>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> 12 min de leitura
          </span>
          <span>Prendix Originals</span>
        </div>

        {/* Tags de categorias */}
        <div className="flex gap-2">
          {["Romance", "Drama", "Traição", "Recomeço"].map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-[11px] font-medium ${
                dark ? "border border-border bg-secondary/50 text-foreground" : "bg-[#f5f5f5] text-[#5a5a5a]"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Principal */}
      <div className="flex items-center gap-3 px-6 pb-5">
        <button
          type="button"
          className="gradient-rose flex flex-1 items-center justify-center gap-2 rounded-full py-3.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/40 transition active:scale-[0.98]"
        >
          <Play className="h-4 w-4 fill-current" />
          Começar a ler
        </button>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-secondary text-foreground transition active:scale-90"
          aria-label="Adicionar aos salvos"
        >
          <Bookmark className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-secondary text-foreground transition active:scale-90"
          aria-label="Curtir"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      {/* Sinopse */}
      <div className={`mx-6 mb-5 rounded-2xl ${cardBg} border p-5`}>
        <h3 className={`mb-3 text-[11px] font-bold uppercase tracking-[0.15em] ${textSubtle}`}>Sinopse</h3>
        <p className={`text-pretty text-sm italic leading-relaxed ${textSubtle}`}>
          "Cinco anos de casamento. Zero noites juntos. E o nome que ele sussurrou no banheiro não era o dela."
        </p>
      </div>

      {/* Controles de leitura */}
      <div className={`mx-6 mb-5 flex items-center justify-between gap-2 rounded-2xl ${cardBg} border px-4 py-3.5`}>
        <div className="flex items-center gap-2 shrink-0">
          <span className={`text-lg font-bold ${textSubtle}`}>T</span>
        </div>
        
        <div className="flex items-center gap-1.5">
          {FONT_SIZES.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSizeIdx(i)}
              aria-label={`Tamanho ${i + 1}`}
              aria-pressed={sizeIdx === i}
              className={`flex h-9 w-9 items-center justify-center rounded-full font-bold transition ${
                sizeIdx === i 
                  ? "gradient-rose text-primary-foreground shadow-md" 
                  : dark 
                    ? "bg-secondary/60 text-foreground hover:bg-secondary" 
                    : "bg-white text-[#5a5a5a] hover:bg-[#f5f5f5]"
              }`}
              style={{ fontSize: 13 + i * 2 }}
            >
              A
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setDark((v) => !v)}
          className={`relative inline-flex h-8 w-14 shrink-0 items-center rounded-full transition-colors ${
            dark ? "bg-primary" : "bg-[#f5f5f5]"
          }`}
          aria-label="Alternar modo escuro"
          aria-checked={dark}
          role="switch"
        >
          <span
            className={`inline-flex h-6 w-6 transform items-center justify-center rounded-full bg-white shadow-sm transition-transform ${
              dark ? "translate-x-7" : "translate-x-1"
            }`}
          >
            {dark ? (
              <Moon className="h-3.5 w-3.5 text-primary" />
            ) : (
              <Sun className="h-3.5 w-3.5 text-[#888]" />
            )}
          </span>
        </button>
      </div>

      {/* Corpo da história */}
      <article className="flex-1 px-5 pb-8 font-sans">
        {STORY.map((block, i) => {
          if (block.type === "image") {
            return (
              <figure key={i} className="my-7 overflow-hidden rounded-2xl">
                <div className="relative aspect-[16/10] w-full">
                  <Image src={block.src || "/placeholder.svg"} alt={block.alt} fill className="object-cover" />
                </div>
                <figcaption className="mt-2 px-1 text-xs italic text-muted-foreground">{block.caption}</figcaption>
              </figure>
            )
          }
          if (block.type === "em") {
            return (
              <p
                key={i}
                className="mb-4 font-bold uppercase leading-snug text-gold"
                style={{ fontSize: size.px + 1, letterSpacing: "0.01em" }}
              >
                {block.text}
              </p>
            )
          }
          if (block.type === "drop") {
            const first = block.text.charAt(0).toUpperCase()
            const rest = block.text.slice(1)
            return (
              <p
                key={i}
                className="mb-5"
                style={{ fontSize: size.px, lineHeight: size.lineHeight }}
              >
                <span className="float-left mr-2 text-6xl font-bold leading-[0.8] text-primary">
                  {first}
                </span>
                {rest}
              </p>
            )
          }
          return (
            <p key={i} className="mb-5" style={{ fontSize: size.px, lineHeight: size.lineHeight }}>
              {block.text}
            </p>
          )
        })}

        {/* Fim + CTA */}
        <div className="mt-10 text-center">
          <p className="text-sm italic text-muted-foreground">Fim do trecho gratuito</p>
          <div className="mx-auto mt-3 h-px w-16 bg-border" />
        </div>

        {/* Botão Continuar Lendo - Agora inline no final */}
        <div className="mt-8">
          <Link
            href="/"
            className="gradient-rose flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition active:scale-[0.99]"
          >
            Continuar lendo
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Desbloqueie os próximos capítulos com Prendix Premium
          </p>
        </div>
      </article>
    </main>
  )
}
