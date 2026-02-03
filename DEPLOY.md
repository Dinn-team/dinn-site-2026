# 🚀 Deploy do Site Dinn

## GitHub Setup

### 1. Repositório no GitHub

O repositório já está configurado na organização `dinn-AI`.

URL: `https://github.com/dinn-AI/dinn-site-2026`

### 2. Conectar Repositório Local ao GitHub

Se ainda não estiver conectado, execute:

```bash
# Adicione o remote do GitHub
git remote add origin https://github.com/dinn-AI/dinn-site-2026.git

# Ou use SSH (se configurado):
git remote add origin git@github.com:dinn-AI/dinn-site-2026.git

# Push do código
git push -u origin main
```

---

## Deploy na Vercel (Recomendado)

A Vercel é a plataforma ideal para Next.js (criada pela mesma equipe).

### 1. Criar Conta na Vercel

1. Acesse https://vercel.com
2. Clique em "Sign Up"
3. Use "Continue with GitHub" para conectar sua conta

### 2. Importar Projeto

1. No dashboard da Vercel, clique em "Add New..." → "Project"
2. Selecione o repositório `dinn-site-2026`
3. Clique em "Import"

### 3. Configurar Variáveis de Ambiente

Na tela de configuração, adicione as seguintes variáveis:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=sutrqo3v
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=skVIqTt3DGLySAiQNxkEIhUB3PhFXFIll3iniKC2mcO7I4jYmb0xHoqbwL3HaHilWBpHNEH70Rv9jocqnJxyjxkNPx4zWx6DTO7nM1M79qNY8mKXP8UEdUGKRpyZBRHmRNDZmgecJwIAerXc9sM6lZFtJhHRz1jyh83hmbwu6Foq8Zc3n87l
NEXT_PUBLIC_SITE_URL=https://seu-dominio.vercel.app
```

### 4. Deploy

1. Clique em "Deploy"
2. Aguarde o build (2-3 minutos)
3. Pronto! Seu site estará no ar

### 5. Domínio Personalizado (Opcional)

1. No dashboard do projeto, vá em "Settings" → "Domains"
2. Adicione `dinn.com.br`
3. Configure os DNS conforme instruções da Vercel

---

## Deploy Alternativo: Netlify

### 1. Criar Conta

1. Acesse https://netlify.com
2. Faça login com GitHub

### 2. Novo Site

1. Clique em "Add new site" → "Import an existing project"
2. Selecione "GitHub"
3. Escolha o repositório `dinn-site-2026`

### 3. Configurações de Build

```
Build command: npm run build
Publish directory: .next
```

### 4. Variáveis de Ambiente

Adicione as mesmas variáveis listadas acima na seção "Environment variables"

### 5. Deploy

Clique em "Deploy site"

---

## Configuração do Sanity Studio em Produção

### 1. Deploy do Studio

```bash
cd studio
sanity deploy
```

Escolha um nome como: `dinn` ou `blog-dinn`

Isso criará uma URL como: `https://dinn.sanity.studio`

### 2. Adicionar CORS no Sanity

1. Acesse https://manage.sanity.io
2. Selecione seu projeto "Blog Dinn"
3. Vá em "API" → "CORS Origins"
4. Adicione as URLs:
   - `http://localhost:3000` (desenvolvimento)
   - `https://seu-dominio.vercel.app` (produção)
   - `https://dinn.com.br` (se usar domínio personalizado)

---

## Workflow de Desenvolvimento

### Desenvolvimento Local

```bash
# Terminal 1 - Next.js
npm run dev

# Terminal 2 - Sanity Studio
npm run studio
```

### Fazer Mudanças

```bash
# Fazer alterações no código
git add .
git commit -m "Descrição das mudanças"
git push
```

### Deploy Automático

- A Vercel/Netlify detecta o push automaticamente
- Faz o build e deploy em 2-3 minutos
- Seu site é atualizado automaticamente

---

## Checklist Pré-Deploy

- [ ] Variáveis de ambiente configuradas
- [ ] `.env.local` NÃO está no Git (verificar .gitignore)
- [ ] Build local funciona (`npm run build`)
- [ ] Todas as páginas carregam sem erro
- [ ] Imagens otimizadas
- [ ] Conteúdo revisado
- [ ] CORS configurado no Sanity
- [ ] Domínio configurado (se aplicável)

---

## Monitoramento

### Analytics

Adicione Google Analytics ou Vercel Analytics:

```bash
# Vercel Analytics (recomendado)
npm install @vercel/analytics
```

Em `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Performance

Use Vercel Speed Insights:

```bash
npm install @vercel/speed-insights
```

---

## Troubleshooting

### Build Falha

1. Verifique se todas as variáveis de ambiente estão configuradas
2. Rode `npm run build` localmente para ver o erro
3. Verifique os logs no dashboard da Vercel/Netlify

### Sanity não Carrega Posts

1. Verifique se o CORS está configurado
2. Confirme que o token API está correto
3. Verifique se há posts publicados no Studio

### Imagens não Aparecem

1. Verifique se as imagens foram feitas upload no Sanity
2. Confirme que o `urlFor` está sendo usado corretamente

---

## Comandos Úteis

```bash
# Build de produção local
npm run build

# Rodar build de produção localmente
npm start

# Verificar erros de lint
npm run lint

# Limpar cache do Next.js
rm -rf .next

# Reinstalar dependências
rm -rf node_modules package-lock.json
npm install
```

---

## Próximos Passos Após Deploy

1. ✅ Testar todas as páginas em produção
2. ✅ Criar primeiros posts no Sanity Studio
3. ✅ Configurar domínio personalizado
4. ✅ Adicionar analytics
5. ✅ Configurar SSL (automático na Vercel)
6. ✅ Testar performance com Lighthouse
7. ✅ Compartilhar com a equipe

---

**Boa sorte com o deploy! 🚀**
