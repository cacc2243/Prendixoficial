export type Serie = {
  id: string
  title: string
  hook: string
  genre: string
  badge?: "HOT" | "+18"
  rating: number
  caps: number
  views: string
  trend: number // positivo sobe, negativo desce, 0 estável
  img: string
  synopsis?: string
}

// Sinopse de fallback gerada a partir do gancho, caso a série não tenha uma.
export function getSynopsis(serie: Serie): string {
  if (serie.synopsis) return serie.synopsis
  return `${serie.hook} Em ${serie.caps} capítulos viciantes, cada revelação aproxima os dois de um ponto sem volta — e nada volta a ser como antes.`
}

export const series: Serie[] = [
  {
    id: "jantar-traicao",
    title: "O Jantar da Traição",
    hook: "Ele serviu o vinho. Ela leu o bilhete escondido na taça.",
    genre: "Suspense",
    badge: "HOT",
    rating: 4.9,
    caps: 6,
    views: "1.7M",
    trend: 42,
    img: "/images/card-hot-main.png",
    synopsis:
      "No 38º andar, com a cidade brilhando lá embaixo, Helena percebe o colar de pérolas no centro da mesa — não era dela. Ricardo serve o vinho como se nada estivesse errado, mas o relógio de ouro ao lado do prato denuncia tudo. Esta noite, um dos dois não vai dormir na mesma cama de novo.",
  },
  {
    id: "plantao-proibido",
    title: "Plantão Proibido",
    hook: "Um beijo no corredor da radiologia mudou os dois plantões.",
    genre: "Proibido",
    badge: "HOT",
    rating: 4.9,
    caps: 7,
    views: "570K",
    trend: -2,
    img: "/images/card-encontro-secreto.png",
  },
  {
    id: "mao-no-pescoco",
    title: "Mão no Pescoço",
    hook: "A chave no pescoço dela abre o cofre que ele jurou esquecer.",
    genre: "+18",
    badge: "+18",
    rating: 4.9,
    caps: 6,
    views: "209K",
    trend: -3,
    img: "/images/card-noite-proibida.png",
  },
  {
    id: "sob-a-mesma-chuva",
    title: "Sob a Mesma Chuva",
    hook: "Ela é a única testemunha. Ele é o detetive que não pode amá-la.",
    genre: "Mistério",
    badge: "HOT",
    rating: 4.9,
    caps: 7,
    views: "502K",
    trend: -2,
    img: "/images/hero-naked-gun.jpg",
  },
  {
    id: "vestido-vermelho",
    title: "Vestido Vermelho",
    hook: "A polícia achou que era só mais um caso. Era o crime perfeito.",
    genre: "Crime",
    rating: 4.9,
    caps: 8,
    views: "964K",
    trend: -2,
    img: "/images/hero-rotate-3.jpg",
  },
  {
    id: "ultimo-onibus",
    title: "O Último Ônibus",
    hook: "Sete anos sem se falarem. Uma poltrona vazia entre eles.",
    genre: "Drama",
    rating: 4.9,
    caps: 5,
    views: "552K",
    trend: 1,
    img: "/images/hero-rotate-1.jpg",
  },
  {
    id: "no-ringue-com-minha-mae",
    title: "No Ringue com Minha Mãe",
    hook: "Ela treinou a vida inteira pra esse golpe. Contra a própria filha.",
    genre: "Drama",
    rating: 4.9,
    caps: 9,
    views: "774K",
    trend: -3,
    img: "/images/card-amante-chefe.png",
  },
  {
    id: "amor-proibido",
    title: "Amor Proibido",
    hook: "Ela jurou nunca mais amar. Até ele bater na porta de novo.",
    genre: "Romance",
    badge: "+18",
    rating: 4.9,
    caps: 10,
    views: "842K",
    trend: 1,
    img: "/images/card-minha-secretaria.png",
  },
  {
    id: "vinganca-perfeita",
    title: "Vingança Perfeita",
    hook: "Dez anos planejando. Uma noite pra executar tudo.",
    genre: "Vingança",
    rating: 4.9,
    caps: 8,
    views: "242K",
    trend: 0,
    img: "/images/hero-3.jpg",
  },
  {
    id: "as-gemeas",
    title: "As Gêmeas",
    hook: "Uma morreu. A outra assumiu a vida — e a cama — dela.",
    genre: "Reviravolta",
    badge: "+18",
    rating: 4.9,
    caps: 7,
    views: "646K",
    trend: 3,
    img: "/images/hero-2.jpg",
  },
  // --- Mistério ---
  {
    id: "segredos-da-mansao",
    title: "Segredos da Mansão",
    hook: "Toda família tem um segredo. Esta tem um corpo no porão.",
    genre: "Mistério",
    rating: 4.7,
    caps: 8,
    views: "8.9K",
    trend: 5,
    img: "/images/cat-mansao.png",
  },
  {
    id: "alguem-na-janela",
    title: "Alguém na Janela",
    hook: "Toda noite à mesma hora, ela vê alguém olhando do prédio em frente.",
    genre: "Mistério",
    rating: 4.8,
    caps: 7,
    views: "6.1K",
    trend: 4,
    img: "/images/cat-janela.png",
  },
  // --- Suspense ---
  {
    id: "a-ultima-mentira",
    title: "A Última Mentira",
    hook: "Ele desapareceu há um ano. Hoje ela recebeu uma mensagem dele.",
    genre: "Suspense",
    rating: 4.8,
    caps: 9,
    views: "12.4K",
    trend: 6,
    img: "/images/cat-mentira.png",
  },
  {
    id: "filha-do-mafioso",
    title: "Filha do Mafioso",
    hook: "Para vingar o pai, ela precisa se casar com o inimigo. E não se apaixonar.",
    genre: "Suspense",
    badge: "+18",
    rating: 4.9,
    caps: 10,
    views: "12.7K",
    trend: 7,
    img: "/images/cat-mafioso.png",
  },
  // --- Romance ---
  {
    id: "salva-vidas",
    title: "Salva-Vidas",
    hook: "Ela quase morreu no mar. Ele a tirou da água. Agora não conseguem mais soltar.",
    genre: "Romance",
    rating: 4.8,
    caps: 8,
    views: "1.9K",
    trend: 2,
    img: "/images/cat-salva-vidas.png",
  },
  {
    id: "amor-proibido-2",
    title: "Amor à Meia-Noite",
    hook: "Ela jurou nunca mais amar. Até ele aparecer na porta do escritório.",
    genre: "Romance",
    rating: 4.9,
    caps: 9,
    views: "4.0K",
    trend: 3,
    img: "/images/card-minha-secretaria.png",
  },
  // --- Proibido / Bilionário ---
  {
    id: "a-manha-do-bilionario",
    title: "A Manhã do Bilionário",
    hook: "Tudo começou com uma mensagem enviada pra pessoa errada.",
    genre: "Proibido",
    rating: 4.3,
    caps: 12,
    views: "14.4K",
    trend: 4,
    img: "/images/cat-bilionario.png",
  },
  {
    id: "a-aposta-do-detetive",
    title: "A Aposta do Detetive",
    hook: "Um beijo, uma mentira, um casamento que não devia acontecer.",
    genre: "Proibido",
    badge: "+18",
    rating: 4.8,
    caps: 11,
    views: "5.9K",
    trend: 5,
    img: "/images/cat-detetive.png",
  },
  // --- Comédia ---
  {
    id: "casamento-arranjado",
    title: "Casamento Arranjado",
    hook: "Os pais combinaram tudo. Os filhos se odeiam. O resto é cinema.",
    genre: "Comédia",
    rating: 4.6,
    caps: 8,
    views: "11.5K",
    trend: 3,
    img: "/images/cat-casamento-arranjado.png",
  },
  {
    id: "meu-noivo-verdadeiro",
    title: "Meu Noivo Verdadeiro",
    hook: "Ela contratou um noivo de mentira. O coração não recebeu o aviso.",
    genre: "Comédia",
    rating: 4.2,
    caps: 9,
    views: "14.5K",
    trend: 2,
    img: "/images/cat-noivo-verdadeiro.png",
  },
  // --- Drama ---
  {
    id: "o-sim-que-nao-veio",
    title: "O Sim que Não Veio",
    hook: "Faltam quinze minutos para o casamento. O bilhete está dentro do buquê.",
    genre: "Drama",
    rating: 4.8,
    caps: 7,
    views: "5.5K",
    trend: 4,
    img: "/images/cat-sim-que-nao-veio.png",
  },
  {
    id: "a-pasta-azul",
    title: "A Pasta Azul",
    hook: "Ele entrou na sala dela à meia-noite com a pasta que ela tinha trancado.",
    genre: "Drama",
    rating: 4.8,
    caps: 10,
    views: "14.3K",
    trend: 5,
    img: "/images/cat-pasta-azul.png",
  },
  // --- Desejo (+18) ---
  {
    id: "a-janela-do-18-andar",
    title: "A Janela do 18º Andar",
    hook: "Ele aluga o quarto em frente. Toda noite, a luz acende às 22h em ponto.",
    genre: "Desejo",
    badge: "+18",
    rating: 4.8,
    caps: 9,
    views: "2.3K",
    trend: 6,
    img: "/images/cat-janela-18.png",
  },
  {
    id: "codigo-do-desejo",
    title: "Código do Desejo",
    hook: "Plantão da madrugada. Regras quebradas. Sem volta.",
    genre: "Desejo",
    badge: "+18",
    rating: 4.8,
    caps: 11,
    views: "11.2K",
    trend: 7,
    img: "/images/cat-codigo-desejo.png",
  },
  // --- Crime ---
  {
    id: "vestido-vermelho-2",
    title: "Vestido Vermelho",
    hook: "A polícia achou que era só mais um caso. Não sabia o que ela carregava.",
    genre: "Crime",
    rating: 4.9,
    caps: 8,
    views: "964K",
    trend: 3,
    img: "/images/cat-crime-madrugada.png",
  },
  {
    id: "o-violento-inimigo",
    title: "O Violento Inimigo",
    hook: "Ele a caçou por toda a cidade. Ela o esperava na última esquina.",
    genre: "Crime",
    rating: 4.7,
    caps: 9,
    views: "330K",
    trend: 2,
    img: "/images/cat-violento-inimigo.png",
  },
  // --- Hospital ---
  {
    id: "a-eterno-aluna",
    title: "Aula de Anatomia",
    hook: "Tudo começou com uma mensagem enviada pra pessoa errada.",
    genre: "Hospital",
    rating: 4.9,
    caps: 10,
    views: "4.4K",
    trend: 5,
    img: "/images/cat-eterno-aluno.png",
  },
  {
    id: "a-manha-da-noiva",
    title: "A Manhã da Noiva",
    hook: "Ele apareceu quando ela achava que tinha tudo perdido.",
    genre: "Vingança",
    rating: 4.6,
    caps: 8,
    views: "12.0K",
    trend: 4,
    img: "/images/hero-3.jpg",
  },
]

// Prateleiras temáticas exibidas na home, abaixo do bloco +18.
export type Shelf = {
  id: string
  title: string
  serieIds: string[]
}

export const shelves: Shelf[] = [
  {
    id: "em-alta",
    title: "Em alta",
    serieIds: ["jantar-traicao", "plantao-proibido", "sob-a-mesma-chuva", "as-gemeas", "filha-do-mafioso"],
  },
  {
    id: "misterios-sem-resposta",
    title: "Mistérios sem resposta",
    serieIds: ["segredos-da-mansao", "alguem-na-janela", "sob-a-mesma-chuva", "a-ultima-mentira"],
  },
  {
    id: "suspense-ate-o-fim",
    title: "Suspense até o último capítulo",
    serieIds: ["a-ultima-mentira", "filha-do-mafioso", "jantar-traicao", "a-pasta-azul"],
  },
  {
    id: "romance-que-aquece",
    title: "Romance que aquece o peito",
    serieIds: ["salva-vidas", "amor-proibido-2", "amor-proibido", "o-sim-que-nao-veio"],
  },
  {
    id: "amores-proibidos",
    title: "Amores proibidos",
    serieIds: ["a-manha-do-bilionario", "a-aposta-do-detetive", "amor-proibido", "plantao-proibido"],
  },
  {
    id: "comedia-pra-relaxar",
    title: "Comédia pra relaxar",
    serieIds: ["casamento-arranjado", "meu-noivo-verdadeiro", "salva-vidas", "amor-proibido-2"],
  },
  {
    id: "drama-de-tirar-o-folego",
    title: "Drama de tirar o fôlego",
    serieIds: ["o-sim-que-nao-veio", "a-pasta-azul", "ultimo-onibus", "no-ringue-com-minha-mae"],
  },
  {
    id: "desejo-proibido",
    title: "Desejo proibido",
    serieIds: ["a-janela-do-18-andar", "codigo-do-desejo", "mao-no-pescoco", "amor-proibido"],
  },
  {
    id: "crimes-da-madrugada",
    title: "Crimes da madrugada",
    serieIds: ["vestido-vermelho-2", "o-violento-inimigo", "vestido-vermelho", "vinganca-perfeita"],
  },
  {
    id: "vinganca-que-arde",
    title: "Vingança que arde",
    serieIds: ["vinganca-perfeita", "a-manha-da-noiva", "as-gemeas", "filha-do-mafioso"],
  },
  {
    id: "so-para-maiores",
    title: "Só para maiores · +18",
    serieIds: ["mao-no-pescoco", "amor-proibido", "a-janela-do-18-andar", "codigo-do-desejo", "as-gemeas"],
  },
  {
    id: "novos-episodios",
    title: "Novos episódios",
    serieIds: ["a-manha-da-noiva", "a-eterno-aluna", "alguem-na-janela", "casamento-arranjado"],
  },
  {
    id: "mais-bem-avaliadas",
    title: "Mais bem avaliadas",
    serieIds: ["plantao-proibido", "mao-no-pescoco", "jantar-traicao", "sob-a-mesma-chuva"],
  },
  {
    id: "bombando-esta-semana",
    title: "Bombando esta semana",
    serieIds: ["sob-a-mesma-chuva", "vestido-vermelho", "filha-do-mafioso", "a-manha-do-bilionario"],
  },
]

export function getSerieById(id: string): Serie | undefined {
  return series.find((s) => s.id === id)
}

export const moods = [
  { id: "sem-dormir", title: "Sem dormir hoje", count: 32, emoji: "fire" },
  { id: "coracao-mao", title: "Coração na mão", count: 30, emoji: "heart" },
  { id: "quem-matou", title: "Quem matou?", count: 20, emoji: "knife" },
  { id: "puro-fogo", title: "Puro fogo", count: 28, emoji: "fire" },
]

export const categories = [
  { label: "Todas", count: 344 },
  { label: "+18", count: 32 },
  { label: "Proibido", count: 50 },
  { label: "Romance", count: 20 },
  { label: "Drama", count: 41 },
  { label: "Vingança", count: 18 },
  { label: "Mistério", count: 27 },
]
