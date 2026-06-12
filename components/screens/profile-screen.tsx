"use client"

import Image from "next/image"
import {
  Settings,
  Lock,
  BookOpen,
  Play,
  Clock,
  Flame,
  Crown,
  HeartCrack,
  Moon,
  Drama,
  ChevronRight,
  Pencil,
  Bell,
  Heart,
  Shield,
  MessageCircle,
  FileText,
  Star,
} from "lucide-react"

const stats = [
  { icon: BookOpen, value: "0", label: "Séries lidas", color: "text-primary" },
  { icon: Play, value: "0", label: "Capítulos", color: "text-primary" },
  { icon: Clock, value: "0h", label: "Tempo total", color: "text-emerald-400" },
  { icon: Flame, value: "0", label: "Sequência", color: "text-orange-400" },
]

const achievements = [
  { icon: Flame, label: "Maratonista", unlocked: false, color: "from-[#e85d04] to-[#dc2f02]" },
  { icon: HeartCrack, label: "Coração mole", unlocked: false, color: "from-[#b5179e] to-[#7209b7]" },
  { icon: Moon, label: "Coruja", unlocked: false, color: "from-[#ffba08] to-[#faa307]" },
  { icon: Crown, label: "Realeza", unlocked: false, color: "" },
  { icon: Drama, label: "Dramaturga", unlocked: false, color: "" },
]

const accountItems = [
  { icon: Pencil, label: "Editar perfil", hint: "" },
  { icon: Bell, label: "Notificações", hint: "Ativadas" },
  { icon: Heart, label: "Preferências de leitura", hint: "" },
  { icon: Shield, label: "Privacidade", hint: "" },
]

const supportItems = [
  { icon: MessageCircle, label: "Central de ajuda", hint: "" },
  { icon: FileText, label: "Termos e políticas", hint: "" },
  { icon: Star, label: "Avaliar o Prendix", hint: "" },
]

export function ProfileScreen() {
  return (
    <div>
      {/* Header com glow */}
      <header className="relative flex items-center justify-between bg-gradient-to-b from-primary/20 to-transparent px-5 pt-5 pb-2">
        <Image
          src="/images/prendix-logo.png"
          alt="Prendix"
          width={32}
          height={32}
          className="h-8 w-8 object-contain"
        />
        <button
          type="button"
          aria-label="Configurações"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary"
        >
          <Settings className="h-4 w-4" />
        </button>
      </header>

      {/* Perfil + XP */}
      <div className="px-5">
        {/* Card principal do perfil */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/5 p-5">
          <div className="flex items-start gap-4">
            {/* Avatar com nível */}
            <div className="relative shrink-0">
              <div className="relative">
                <span className="gradient-rose flex h-20 w-20 items-center justify-center rounded-3xl text-3xl font-bold text-primary-foreground shadow-2xl shadow-primary/50">
                  C
                </span>
                {/* Badge de nível melhorado */}
                <span className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg">
                  <span className="flex flex-col items-center leading-none">
                    <span className="text-[8px] font-bold text-amber-950">LV</span>
                    <span className="text-sm font-black text-amber-950">1</span>
                  </span>
                </span>
              </div>
            </div>

            {/* Info do usuário */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-foreground truncate">Convidado</h1>
                <span className="shrink-0 rounded-full border border-border bg-secondary px-2.5 py-0.5 text-[10px] font-bold text-muted-foreground">
                  FREE
                </span>
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                Faça login para salvar seu progresso
              </p>

              {/* Barra XP integrada */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] mb-1.5">
                  <span className="flex items-center gap-1 font-semibold text-foreground">
                    <Star className="h-3 w-3 fill-gold text-gold" />
                    XP de leitura
                  </span>
                  <span className="font-bold text-foreground">
                    <span className="text-primary">0</span>
                    <span className="text-muted-foreground">/500</span>
                  </span>
                </div>
                <div className="relative h-2.5 overflow-hidden rounded-full bg-secondary/80">
                  <div className="gradient-rose h-full w-0 rounded-full transition-all duration-500" />
                  {/* Brilho na barra */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
                <p className="mt-1.5 text-[10px] text-muted-foreground">
                  Leia <span className="font-semibold text-foreground">5 capítulos</span> para subir de nível
                </p>
              </div>
            </div>
          </div>

          {/* Botão Entrar */}
          <button
            type="button"
            className="gradient-rose mt-4 w-full rounded-2xl py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/40 transition active:scale-[0.98]"
          >
            Entrar ou Criar Conta
          </button>
        </div>

        {/* Aviso conta convidada */}
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-primary/20 bg-primary/5 px-4 py-3">
          <Lock className="h-4 w-4 shrink-0 text-primary mt-0.5" />
          <p className="text-xs leading-relaxed text-foreground/80">
            Você está navegando como <span className="font-bold text-foreground">convidado</span>. 
            Crie uma conta gratuita para desbloquear conquistas, salvar favoritos e competir no ranking.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-4 gap-2.5 px-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center gap-1 rounded-2xl border border-border bg-card py-3"
          >
            <s.icon className={`h-4 w-4 ${s.color}`} />
            <span className="text-lg font-bold text-foreground">{s.value}</span>
            <span className="text-center text-[10px] leading-tight text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Premium */}
      <div className="mt-5 px-5">
        <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 via-card to-card p-5">
          <div className="flex items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold">
              <Crown className="h-5 w-5" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-bold text-foreground">
                  Vire Premium
                </h2>
                <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                  -50%
                </span>
              </div>
              <p className="mt-1 text-pretty text-xs leading-relaxed text-muted-foreground">
                Capítulos ilimitados, sem anúncios, estreias antecipadas e modo
                offline.
              </p>
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <p className="text-xs text-muted-foreground line-through">
                R$ 15,90
              </p>
              <p className="text-2xl font-bold text-foreground">
                R$ 11,90
                <span className="text-sm font-medium text-muted-foreground">
                  /mês
                </span>
              </p>
            </div>
            <button
              type="button"
              className="flex items-center gap-1 rounded-full bg-gradient-to-r from-[#ffba08] to-[#faa307] px-5 py-2.5 text-sm font-bold text-[#3a2a00] transition active:scale-[0.98]"
            >
              Assinar
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Conquistas */}
      <div className="mt-7">
        <div className="flex items-center justify-between px-5">
          <h2 className="text-lg font-bold text-foreground">Conquistas</h2>
          <span className="text-xs text-muted-foreground">0 de 5</span>
        </div>
        <div className="mt-3 flex gap-3 overflow-x-auto px-5 pb-1 no-scrollbar">
          {achievements.map((a) => (
            <div
              key={a.label}
              className={`flex w-24 shrink-0 flex-col items-center gap-2 rounded-2xl border p-3 text-center ${
                a.unlocked
                  ? "border-border bg-card"
                  : "border-dashed border-border bg-card/40"
              }`}
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-full ${
                  a.unlocked
                    ? `bg-gradient-to-br ${a.color}`
                    : "bg-secondary"
                }`}
              >
                {a.unlocked ? (
                  <a.icon className="h-5 w-5 text-white" />
                ) : (
                  <Lock className="h-4 w-4 text-muted-foreground" />
                )}
              </span>
              <span
                className={`text-[11px] font-semibold leading-tight ${
                  a.unlocked ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {a.label}
              </span>
              {!a.unlocked && (
                <span className="text-[9px] font-bold uppercase text-muted-foreground">
                  Bloq.
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Conta */}
      <SettingsGroup title="Conta" items={accountItems} />
      <SettingsGroup title="Suporte" items={supportItems} />

      <p className="mt-6 px-5 text-center text-xs text-muted-foreground">
        Prendix · versão 1.0.0
      </p>
    </div>
  )
}

function SettingsGroup({
  title,
  items,
}: {
  title: string
  items: { icon: typeof Bell; label: string; hint: string }[]
}) {
  return (
    <div className="mt-7 px-5">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
        {title}
      </p>
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-secondary/50 ${
              i !== items.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-foreground">
              <item.icon className="h-4 w-4" />
            </span>
            <span className="flex-1 text-sm font-medium text-foreground">
              {item.label}
            </span>
            {item.hint && (
              <span className="text-xs text-muted-foreground">{item.hint}</span>
            )}
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        ))}
      </div>
    </div>
  )
}
