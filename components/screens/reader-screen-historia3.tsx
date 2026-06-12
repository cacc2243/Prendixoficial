"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ArrowLeft, Sun, Moon, Share2, Star, Clock, Heart, Bookmark, Play, Volume2, VolumeX, Pause } from "lucide-react"

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
    text: "o aniversário de dez anos de casamento, Clara Monteiro descobriu duas coisas.",
  },
  { type: "p", text: "A primeira: o marido dela dormia com sua melhor amiga." },
  { type: "p", text: "A segunda: essa era a menor das traições." },
  { type: "em", text: "A festa estava linda." },
  { type: "em", text: "Linda demais." },
  {
    type: "p",
    text: "Daquele jeito que dava raiva depois, quando a memória virava cinza e a pessoa percebia que até as flores tinham sido cúmplices. O salão no Batel brilhava com lustres de cristal, taças alinhadas, arranjos de orquídeas brancas e um bolo de três andares com detalhes dourados.",
  },
  {
    type: "p",
    text: "Na placa atrás da mesa principal, em letras elegantes:",
  },
  { type: "em", text: "CLARA & RAFAEL 10 ANOS DE AMOR" },
  { type: "em", text: "Amor." },
  {
    type: "p",
    text: "Clara quase riu quando leu aquilo pela vigésima vez.",
  },
  {
    type: "p",
    text: "Amor era uma palavra bonita para foto. Para legenda. Para discurso de sogra. Para vídeo de casamento com música lenta e casal sorrindo em câmera lenta.",
  },
  { type: "p", text: "Mas, dentro de casa, amor era outra coisa." },
  { type: "p", text: "Era lembrar como a pessoa tomava café." },
  { type: "p", text: "Era notar quando ela estava calada demais." },
  { type: "p", text: "Era defender quando alguém zombava." },
  { type: "p", text: "Era voltar para casa sem parecer que estava cumprindo pena." },
  { type: "p", text: "Rafael Albuquerque fazia quase tudo certo diante dos outros." },
  { type: "p", text: "Segurava a cintura dela na medida exata." },
  { type: "p", text: "Sorria para os convidados." },
  { type: "p", text: "Beijava sua testa quando havia câmera por perto." },
  { type: "p", text: "Dizia 'minha esposa' com aquele orgulho polido de homem bem-sucedido." },
  { type: "p", text: "Ele era bonito, rico, educado e filho da puta o suficiente para parecer perfeito." },
  { type: "p", text: "Clara sabia disso melhor que ninguém." },
  { type: "em", text: "— Você está maravilhosa — disse ele, aproximando-se por trás." },
  { 
    type: "p", 
    text: "A mão dele tocou suas costas nuas, no vestido champanhe que ele mesmo havia escolhido. Ela sentiu o perfume dele." 
  },
  { type: "em", text: "Amadeirado. Caro. Frio." },
  { type: "p", text: "— Obrigada — respondeu." },
  { type: "p", text: "Rafael inclinou o rosto e beijou o canto da boca dela. Não a boca. O canto. Sempre o canto." },
  { type: "p", text: "Beijo de marido que não queria borrar o batom. Ou de homem que já tinha deixado a vontade em outro lugar." },
  { type: "em", text: "— Sorri um pouco mais — murmurou ele perto do ouvido dela. — Sua mãe está olhando." },
  { type: "p", text: "Clara obedeceu. Sorriu. Durante dez anos, ela tinha ficado excelente nisso." },
  { type: "p", text: "Sorrir com o estômago virado. Sorrir com vontade de sumir. Sorrir enquanto as pessoas diziam: 'Você tem sorte demais, Clara. O Rafael é um homem raro.'" },
  { type: "em", text: "Raro mesmo." },
  { type: "p", text: "Raro no talento de destruir uma mulher sem levantar a voz." },
  {
    type: "p",
    text: "Do outro lado do salão, Bianca Ferraz ria com uma taça na mão. A melhor amiga de Clara. Madrinha do casamento.",
  },
  {
    type: "p",
    text: "A mulher que sabia onde Clara escondia remédio de ansiedade, qual música fazia ela chorar e que dia do ano ela não conseguia levantar da cama.",
  },
  { type: "em", text: "Bianca estava de vermelho. Claro." },
  {
    type: "p",
    text: "Um vestido vinho justo, elegante, indecente só na intenção. Ela conversava com Rafael como quem conversava com alguém íntimo demais para precisar explicar qualquer coisa.",
  },
  { type: "p", text: "Encostava no braço dele quando ria. Inclinava o corpo. Tocava a própria corrente no pescoço." },
  { type: "p", text: "Clara observou de longe. Havia meses ela sentia." },
  { type: "em", text: "Mulher sente." },
  {
    type: "p",
    text: "Não é magia, nem paranoia, nem coisa de novela. É detalhe. É o marido virar o celular para baixo rápido demais.",
  },
  {
    type: "p",
    text: "É a amiga perguntar 'como vocês estão?' com uma preocupação performática. É o perfume feminino no banco do carro.",
  },
  {
    type: "p",
    text: "É uma risada baixa na cozinha que morre quando você entra. É o instinto gritando antes da prova chegar.",
  },
  { type: "p", text: "Mas Clara sempre calava o instinto." },
  {
    type: "p",
    text: "Porque se aquilo fosse verdade, ela teria que admitir que foi idiota por anos. E ninguém gosta de olhar para a própria ruína e perceber que ajudou a decorar.",
  },
  { type: "em", text: "— Clara! — Bianca chamou, abrindo os braços." },
  { type: "p", text: "— Vem cá, amiga! Cadê a aniversariante mais linda dessa cidade?" },
  { type: "em", text: "Amiga." },
  { type: "p", text: "A palavra veio doce. Com veneno nas bordas." },
  { type: "p", text: "Clara caminhou até eles. Rafael se afastou meio passo de Bianca. Meio passo. Não o suficiente para parecer culpa. Suficiente para confirmar." },
  { type: "em", text: "— Você está perfeita — disse Bianca, segurando as mãos dela. — Juro. Parece capa de revista." },
  { type: "p", text: "— Obrigada." },
  { type: "p", text: "— Dez anos, hein? — Bianca olhou para Rafael. — Vocês são inspiração." },
  { type: "p", text: "Rafael sorriu. — A Clara merece tudo." },
  { type: "em", text: "Merece tudo. Menos verdade. Menos desejo. Menos respeito. Menos o marido." },
  { type: "p", text: "Clara sustentou o sorriso. — Que bom que você veio." },
  { type: "p", text: "— Eu jamais perderia essa noite — Bianca respondeu." },
  { type: "p", text: "E havia alguma coisa naquela frase. Um brilho. Uma provocação mínima. Quase invisível." },
  { type: "p", text: "Como se ela soubesse de algo que Clara não sabia." },
  {
    type: "p",
    text: "O celular de Clara vibrou dentro da pequena bolsa dourada. Ela pensou que fosse mensagem da cerimonialista, talvez algum problema com o buffet, com o DJ, com a entrada do vídeo.",
  },
  { type: "p", text: "Mas o número era desconhecido. A mensagem tinha só cinco palavras." },
  { type: "em", text: "Olhe o bolso do paletó." },
  { type: "p", text: "Clara ficou imóvel. O som da festa continuou em volta. Gente rindo. Taças batendo. A música suave." },
  { type: "p", text: "Sua mãe elogiando o bolo para uma tia. Mas, para Clara, tudo virou um zumbido distante." },
  { type: "p", text: "Ela encarou a tela." },
  { type: "em", text: "Olhe o bolso do paletó." },
  { type: "p", text: "Outra mensagem chegou." },
  { type: "em", text: "Antes que ele tire." },
  { type: "p", text: "O coração dela desceu para o estômago. Rafael vestia um paletó preto sob medida." },
  { type: "p", text: "O mesmo paletó que Bianca havia ajeitado minutos antes, passando os dedos pela lapela dele como se tivesse direito." },
  { type: "p", text: "Clara levantou os olhos. Rafael e Bianca já não estavam mais no mesmo lugar. Ela procurou ao redor. Nada." },
  { type: "p", text: "A nuca dela gelou." },
]

export function ReaderScreenHistoria3() {
  const router = useRouter()
  const [sizeIdx, setSizeIdx] = useState(2)
  const [dark, setDark] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.15) // Volume em 15% (música de fundo)
  const [isNarrationPlaying, setIsNarrationPlaying] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false) // Controla se já interagiu
  const audioRef = useRef<HTMLAudioElement>(null)
  const narrationRef = useRef<HTMLAudioElement>(null)

  const size = FONT_SIZES[sizeIdx]

  const bg = dark ? "bg-background text-foreground" : "bg-white text-[#2a2420]"
  const headerBg = dark ? "bg-inherit" : "bg-white"
  const cardBg = dark ? "bg-card border-border" : "bg-white border-[#e8e4db]"
  const textSubtle = dark ? "text-muted-foreground" : "text-[#6b5f54]"
  const gold = dark ? "text-gold" : "text-[#b91c50]"

  // Verifica se deve mostrar o mini player (sempre que alguém interagir)
  const showMiniPlayer = hasInteracted

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    // Define volume da narração em 100%
    if (narrationRef.current) {
      narrationRef.current.volume = 1.0 // 100% do volume
    }
  }, [])

  useEffect(() => {
    // Tenta tocar automaticamente quando a página carrega
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((error) => {
        // Se não conseguir tocar automaticamente (política do navegador), não faz nada
        console.log("Autoplay bloqueado, usuário precisa interagir primeiro")
      })
    }
  }, [])

  const togglePlay = () => {
    setHasInteracted(true) // Marca que já interagiu
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      if (volume > 0) {
        setVolume(0)
        audioRef.current.volume = 0
      } else {
        setVolume(0.15) // Volume em 15%
        audioRef.current.volume = 0.15
      }
    }
  }

  const toggleNarration = () => {
    setHasInteracted(true) // Marca que já interagiu
    if (narrationRef.current) {
      if (isNarrationPlaying) {
        narrationRef.current.pause()
      } else {
        narrationRef.current.play()
        // Quando começa a narração, inicia a música ambiente também
        if (!isPlaying && audioRef.current) {
          audioRef.current.play()
          setIsPlaying(true)
        }
      }
      setIsNarrationPlaying(!isNarrationPlaying)
    }
  }

  const scrollToAudio = () => {
    const audioSection = document.getElementById('audio-controls')
    if (audioSection) {
      audioSection.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  return (
    <main className={`mx-auto flex min-h-dvh max-w-[480px] flex-col ${bg} transition-colors`}>
      {/* Audio players */}
      <audio
        ref={audioRef}
        src="/audio/Concentrar, Estudar e Ler Música de Fundo - Música Para Estudar (youtube) (1).mp3"
        loop
        preload="auto"
      />
      <audio
        ref={narrationRef}
        src="/audio/historia3.mp3"
        preload="auto"
      />

      {/* Mini player flutuante - sempre mostra ambos os controles quando ativado */}
      {showMiniPlayer && (
        <div className="fixed bottom-20 left-0 right-0 z-50 px-4">
          <div className={`rounded-xl shadow-2xl backdrop-blur-md transition-all ${
            dark ? "bg-card/95 border border-border" : "bg-white/95 border border-gray-300"
          }`}>
            <div className="p-2 space-y-1.5">
              {/* Narração */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={toggleNarration}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-md transition-all active:scale-95 ${
                    isNarrationPlaying
                      ? "gradient-rose text-primary-foreground"
                      : dark
                      ? "bg-secondary/60 text-foreground"
                      : "bg-gray-100 text-[#333]"
                  }`}
                  aria-label={isNarrationPlaying ? "Pausar narração" : "Tocar narração"}
                >
                  {isNarrationPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-[10px] font-semibold truncate ${textSubtle}`}>🎧 Narração</p>
                </div>
              </div>
              
              {/* Música */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={togglePlay}
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full shadow-md transition-all active:scale-95 ${
                    isPlaying
                      ? "gradient-rose text-primary-foreground"
                      : dark
                      ? "bg-secondary/60 text-foreground"
                      : "bg-gray-100 text-[#333]"
                  }`}
                  aria-label={isPlaying ? "Pausar música" : "Tocar música"}
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
                </button>
                <div className="flex-1 min-w-0">
                  <p className={`text-[10px] font-semibold truncate ${textSubtle}`}>🎵 Música</p>
                </div>
                <button
                  type="button"
                  onClick={toggleMute}
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all active:scale-95 ${
                    dark ? "bg-secondary/50 text-foreground" : "bg-gray-100 text-[#333]"
                  }`}
                  aria-label={volume > 0 ? "Silenciar" : "Ativar som"}
                >
                  {volume > 0 ? <Volume2 className="h-3.5 w-3.5" /> : <VolumeX className="h-3.5 w-3.5" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
          <p className={`text-[9px] font-bold uppercase tracking-[0.15em] ${textSubtle}`}>SUSPENSE · DRAMA</p>
          <h1 className="truncate text-xs font-bold leading-tight">Meu marido dormia com minha melhor amiga</h1>
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
        </div>
      </header>

      {/* Hero com informações */}
      <div className="relative shrink-0">
        {/* Imagem de capa - MAIOR */}
        <div className="relative aspect-[9/13] w-full">
          <Image src="/historia3/ChatGPT Image 11 de jun. de 2026, 12_58_33 (1).png" alt="Meu marido dormia com minha melhor amiga" fill className="object-cover" priority />
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
          <h2 className="font-serif text-[2.5rem] font-bold italic leading-[0.95] tracking-tight text-white drop-shadow-2xl">
            Meu marido dormia
            <br />
            com minha
            <br />
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text not-italic text-transparent">
              melhor amiga
            </span>
          </h2>
          <p className="mt-2 text-sm font-medium text-white/80">Suspense · Drama · Traição</p>
        </div>
      </div>

      {/* Metadados + Tags juntos */}
      <div className="px-6 pt-4 pb-3">
        <div className={`mb-3 flex items-center gap-4 text-xs ${textSubtle}`}>
          <span className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.8
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> 45 min de leitura
          </span>
          <span>Prendix Originals</span>
        </div>

        {/* Tags de categorias */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {["Suspense", "Drama", "Traição", "Mistério", "Vingança"].map((tag) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 text-[11px] font-medium whitespace-nowrap ${
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
          onClick={scrollToAudio}
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
          "No aniversário de dez anos de casamento, Clara Monteiro descobriu duas coisas. A primeira: o marido dela dormia com sua melhor amiga. A segunda: essa era a menor das traições."
        </p>
      </div>

      {/* Controles de leitura + Música */}
      <div className={`mx-6 mb-5 rounded-2xl ${cardBg} border overflow-hidden`}>
        {/* Botão ESCUTAR A HISTÓRIA em destaque */}
        <div className="p-4 pb-3">
          <button
            type="button"
            onClick={toggleNarration}
            className={`gradient-rose flex w-full items-center justify-center gap-2 rounded-full py-4 text-base font-bold text-primary-foreground shadow-lg shadow-primary/40 transition-all active:scale-[0.98] ${
              isNarrationPlaying ? "animate-pulse" : ""
            }`}
          >
            {isNarrationPlaying ? (
              <>
                <Pause className="h-5 w-5" />
                Pausar narração
              </>
            ) : (
              <>
                <Play className="h-5 w-5 fill-current ml-0.5" />
                🎧 Escutar a história
              </>
            )}
          </button>
          <p className={`mt-2 text-center text-xs ${textSubtle}`}>
            Narração profissional da história completa
          </p>
        </div>

        {/* Divisor */}
        <div className={`h-px mx-4 ${dark ? "bg-border" : "bg-[#e8e4db]"}`} />

        {/* Controle de música ambiente */}
        <div className={`flex items-center justify-between gap-3 px-4 py-3`}>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-semibold ${textSubtle}`}>🎵 Música ambiente</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={togglePlay}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all active:scale-95 ${
                isPlaying
                  ? "gradient-rose text-primary-foreground"
                  : dark
                  ? "bg-secondary/60 text-foreground"
                  : "bg-[#f5f5f5] text-[#5a5a5a]"
              }`}
              aria-label={isPlaying ? "Pausar música" : "Tocar música"}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all active:scale-95 ${
                dark ? "bg-secondary/60 text-foreground" : "bg-[#f5f5f5] text-[#5a5a5a]"
              }`}
              aria-label={volume > 0 ? "Silenciar" : "Ativar som"}
            >
              {volume > 0 ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Divisor */}
        <div className={`h-px mx-4 ${dark ? "bg-border" : "bg-[#e8e4db]"}`} />

        {/* Controles de fonte e tema */}
        <div className="flex items-center justify-between gap-2 px-4 py-3.5">
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
