"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Crown, Check, Sparkles, ShieldCheck, MessageCircle, Play, Flame } from "lucide-react"
import { BottomSheet } from "@/components/bottom-sheet"
import type { Serie } from "@/lib/series-data"

const benefits = [
  {
    icon: Check,
    title: "Catálogo 100% liberado",
    desc: "Assista qualquer série, qualquer episódio, sem cobrança extra.",
  },
  {
    icon: Sparkles,
    title: "Capítulos novos todo dia",
    desc: "Histórias inéditas adicionadas direto na sua assinatura.",
  },
  {
    icon: ShieldCheck,
    title: "Sem anúncios, sem pegadinhas",
    desc: "Cancele quando quiser. Nada de pagar por episódio.",
  },
  {
    icon: MessageCircle,
    title: "Comunidade direto no app",
    desc: "Discuta cada reviravolta com outras leitoras.",
  },
]

const plans = [
  { 
    id: "mensal", 
    label: "Mensal", 
    note: "Sem fidelidade", 
    price: "R$ 15,90", 
    priceWith18: "R$ 22,89",
    linkNormal: "https://go.perfectpay.com.br/PPU38CQCULJ",
    linkWith18: "https://go.perfectpay.com.br/PPU38CQCULK",
    best: false 
  },
  { 
    id: "anual", 
    label: "Anual", 
    note: "Economize 25%", 
    price: "R$ 11,90", 
    priceWith18: "R$ 18,89",
    linkNormal: "https://go.perfectpay.com.br/PPU38CQCULO",
    linkWith18: "https://go.perfectpay.com.br/PPU38CQCULP",
    best: true 
  },
] as const

export function PaywallSheet({
  serie,
  onClose,
}: {
  serie: Serie | null
  onClose: () => void
}) {
  const [plan, setPlan] = useState<string>("anual")
  const [show18Plus, setShow18Plus] = useState(false)

  if (!serie) return null

  const selected = plans.find((p) => p.id === plan)!

  const handleClose = () => {
    setShow18Plus(false)
    onClose()
  }

  const handleSubscribe = () => {
    setShow18Plus(true)
  }

  const handleConfirm18Plus = (with18: boolean) => {
    const link = with18 ? selected.linkWith18 : selected.linkNormal
    window.open(link, '_blank')
    // Resetar para o modal inicial após redirecionar
    setShow18Plus(false)
  }

  // Modal principal de planos
  if (!show18Plus) {
    return (
      <BottomSheet open={!!serie} onClose={handleClose} labelledBy="paywall-title">
        <div className="relative">
          {/* Background com imagem única ocupando todo espaço */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-t-[28px]">
            <Image
              src="/images/hero-rotate-3.jpg"
              alt=""
              fill
              className="object-cover"
              priority
            />
            {/* Gradiente mais escuro embaixo */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
          </div>

          {/* Topo com imagem */}
          <div className="relative h-44 w-full shrink-0">
            <Image src={serie.img || "/placeholder.svg"} alt={serie.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-background from-30% via-background/70 to-transparent" />
            <button
              type="button"
              onClick={handleClose}
              aria-label="Fechar"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur transition active:scale-90"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative z-10 -mt-12 px-5 pb-32">
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            <Crown className="h-3.5 w-3.5 fill-current" />
            Prendix Premium
          </p>
          <h2 id="paywall-title" className="mt-1 text-balance font-serif text-3xl font-bold leading-tight text-foreground">
            Desbloqueie <span className="text-gradient-gold">todas as séries</span>
          </h2>
          <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
            Uma única assinatura libera{" "}
            <span className="font-semibold text-foreground">{serie.title}</span> e todo o catálogo Prendix. Sem
            pagar por episódio.
          </p>

          {/* Destaque dourado */}
          <div className="mt-5 flex items-center gap-2.5 rounded-xl border border-gold/40 bg-gold/10 px-3 py-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
              <Crown className="h-3.5 w-3.5 fill-current" />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-bold leading-tight text-foreground">Tudo liberado com 1 assinatura</p>
              <p className="truncate text-[11px] text-muted-foreground">+1.200 séries, sem pagar por episódio.</p>
            </div>
          </div>

          {/* Planos (foco principal) */}
          <div className="mt-6 flex items-center justify-between">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Escolha seu plano
            </h3>
            <span className="text-[11px] text-muted-foreground">Toque para selecionar</span>
          </div>

          <div className="mt-3 space-y-3">
            {plans.map((p) => {
              const active = plan === p.id
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPlan(p.id)}
                  aria-pressed={active}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-4 text-left transition ${
                    active
                      ? "border-primary bg-primary/10 shadow-md shadow-primary/20"
                      : "border-border bg-card"
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 ${
                      active ? "gradient-rose border-transparent text-primary-foreground" : "border-muted-foreground"
                    }`}
                  >
                    {active && <Check className="h-3.5 w-3.5" />}
                  </span>
                  <div className="flex-1">
                    <p className="flex items-center gap-2 text-sm font-bold text-foreground">
                      {p.label}
                      {p.best && (
                        <span className="gradient-rose rounded-full px-2 py-0.5 text-[9px] font-bold text-primary-foreground">
                          MELHOR OFERTA
                        </span>
                      )}
                    </p>
                    <p className="text-xs text-muted-foreground">{p.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-foreground">{p.price}</p>
                    <p className="text-[11px] text-muted-foreground">/mês</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Benefícios (compactos) */}
          <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Tudo o que está incluso
          </p>
          <div className="mt-2.5 grid grid-cols-1 gap-2">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
                  <b.icon className="h-3 w-3" />
                </span>
                <p className="text-xs font-medium text-foreground">{b.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA fixo */}
        <div className="sticky bottom-0 z-20 border-t border-border bg-background px-5 py-4">
          <button
            type="button"
            onClick={handleSubscribe}
            className="gradient-rose flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition active:scale-[0.99]"
          >
            <Play className="h-5 w-5 fill-current" />
            Assinar plano {selected.label}
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Cancele quando quiser · Pagamento seguro
          </p>
        </div>
        </div>
      </BottomSheet>
    )
  }

  // Modal de escolha +18
  return (
    <BottomSheet open={show18Plus} onClose={handleClose} labelledBy="addon-title">
      <div className="relative min-h-[500px]">
        {/* Background com imagem única ocupando todo espaço */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-t-[28px]">
          <Image
            src="/images/hero-rotate-3.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          {/* Gradiente mais escuro embaixo */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 px-5 pb-8 pt-6">
          <button
            type="button"
            onClick={handleClose}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground transition active:scale-90"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Botão Voltar */}
          <button
            type="button"
            onClick={() => setShow18Plus(false)}
            className="mb-4 flex items-center gap-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar para escolha de plano
          </button>

          {/* Logo Prendix */}
          <div className="mb-5 flex justify-center">
            <Image
              src="/images/prendix-logo.png"
              alt="Prendix"
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
          </div>

          {/* Badge +18 */}
          <div className="mb-5 flex justify-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3 py-1.5 backdrop-blur">
              <Flame className="h-3.5 w-3.5 fill-primary text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                CONTEÚDO EXCLUSIVO +18
              </span>
            </div>
          </div>

          <h2 id="addon-title" className="text-balance text-center text-2xl font-bold leading-tight text-foreground">
            Adicionar histórias +18 sem censura ao seu plano?
          </h2>

          <p className="mt-3 text-balance text-center text-sm leading-relaxed text-muted-foreground">
            Desbloqueie capítulos explícitos, cenas quentes sem corte e histórias adultas exclusivas.
          </p>

          {/* Card de preço */}
          <div className="mt-6 overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">Plano {selected.label}</span>
              <span className="text-xl font-bold text-foreground">{selected.price}<span className="text-xs text-muted-foreground">/mês</span></span>
            </div>

            {selected.id === "anual" && (
              <p className="mt-1 text-[10px] text-muted-foreground">
                Cobrança anual de R$ 142,80
              </p>
            )}

            <div className="my-4 h-px bg-border" />

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">+ Histórias +18</span>
                <span className="gradient-rose rounded-full px-2 py-0.5 text-[9px] font-bold text-primary-foreground">
                  ADD-ON
                </span>
              </div>
              <span className="text-lg font-bold text-primary">+ R$ 6,99<span className="text-xs text-muted-foreground">/mês</span></span>
            </div>

            <div className="mt-4 h-px bg-border" />

            <div className="mt-4 flex items-center justify-between">
              <span className="text-base font-bold text-foreground">Total</span>
              <div className="text-right">
                <span className="text-2xl font-bold text-foreground">{selected.priceWith18}<span className="text-sm text-muted-foreground">/mês</span></span>
                {selected.id === "anual" && (
                  <p className="mt-0.5 text-[10px] text-muted-foreground">
                    R$ 226,68/ano
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => handleConfirm18Plus(true)}
              className="gradient-rose flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/40 transition active:scale-[0.98]"
            >
              <Flame className="h-4 w-4 fill-current" />
              Sim! Quero +18 por {selected.priceWith18}/mês
            </button>

            <button
              type="button"
              onClick={() => handleConfirm18Plus(false)}
              className="flex w-full items-center justify-center rounded-full border-2 border-border bg-secondary/60 backdrop-blur py-3 text-sm font-semibold text-foreground transition active:scale-[0.98]"
            >
              Não, manter por {selected.price}/mês
            </button>
          </div>
        </div>
      </div>
    </BottomSheet>
  )
}
