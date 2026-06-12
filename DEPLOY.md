# Deploy no Railway

## Passo a passo para fazer deploy:

### 1. Preparar o repositório Git

Se ainda não tiver um repositório Git, execute:

```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Criar conta no Railway

1. Acesse: https://railway.app/
2. Faça login com GitHub

### 3. Criar novo projeto

1. Clique em "New Project"
2. Escolha "Deploy from GitHub repo"
3. Selecione seu repositório
4. Ou use "Deploy from a Git repo" se já tiver no GitHub

### 4. Configuração automática

O Railway vai detectar automaticamente:
- ✅ Next.js app
- ✅ pnpm como gerenciador de pacotes
- ✅ Comandos de build e start

### 5. Variáveis de ambiente (se necessário)

No painel do Railway:
1. Vá em "Variables"
2. Adicione qualquer variável necessária
3. Ex: `NODE_ENV=production`

### 6. Deploy

O deploy inicia automaticamente! 🚀

- Build time: ~2-5 minutos
- URL pública será gerada automaticamente
- Ex: `seu-projeto.up.railway.app`

### 7. Domínio customizado (opcional)

1. No painel do Railway, vá em "Settings"
2. Clique em "Generate Domain" para domínio gratuito do Railway
3. Ou adicione seu domínio customizado

## Comandos importantes

```bash
# Testar build localmente antes do deploy
pnpm build
pnpm start

# Ver o site em produção local
# Acesse: http://localhost:3000
```

## Troubleshooting

### Build falhou?
- Verifique os logs no Railway
- Certifique-se que `pnpm-lock.yaml` está commitado
- Verifique se todas as dependências estão no package.json

### Site não abre?
- Aguarde o deploy finalizar (veja status no Railway)
- Verifique se a porta 3000 está configurada
- Veja os logs de runtime no Railway

### Áudio não toca?
- Arquivos de áudio devem estar na pasta `public/`
- Verifique se os arquivos foram commitados no Git
- Tamanho máximo recomendado: 10MB por arquivo

## Estrutura do projeto

```
VPRENDIX-main/
├── app/                    # Páginas Next.js
├── components/             # Componentes React
├── public/                 # Arquivos estáticos
│   ├── audio/             # Arquivos de áudio
│   └── images/            # Imagens
├── lib/                    # Utilitários
├── package.json           # Dependências
├── pnpm-lock.yaml        # Lock file do pnpm
├── next.config.mjs       # Configuração Next.js
├── railway.toml          # Configuração Railway
└── nixpacks.toml         # Configuração build
```

## Suporte

- Railway Docs: https://docs.railway.app/
- Next.js Docs: https://nextjs.org/docs
