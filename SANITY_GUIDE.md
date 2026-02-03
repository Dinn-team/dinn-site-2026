# Dinn Site - Guia de Uso do Sanity Studio

## 🎨 Como Usar o Sanity Studio

### Iniciando o Studio

O Sanity Studio está configurado e pronto para uso! Para acessá-lo:

```bash
# Opção 1: Rodar o studio separadamente
cd studio
npm run dev
# Acesse: http://localhost:3333
```

Ou use o script global:

```bash
npm run studio
# Acesse: http://localhost:3333
```

### Criando Posts no Blog

1. **Acesse o Studio** em http://localhost:3333
2. Faça login com sua conta Sanity
3. Clique em **"Post"** no menu lateral
4. Clique em **"Create new Post"**
5. Preencha os campos:
   - **Título**: Título do artigo
   - **Slug**: Gerado automaticamente (clique em "Generate")
   - **Resumo**: Descrição curta (máx 200 caracteres)
   - **Imagem de Capa**: Upload de imagem (opcional)
   - **Autor**: Nome do autor (padrão: "Equipe Dinn")
   - **Data de Publicação**: Data/hora de publicação
   - **Categorias**: Selecione uma ou mais categorias
   - **Conteúdo**: Editor rico com formatação

6. Clique em **"Publish"** para publicar

### Categorias Disponíveis

- Gestão
- Estoque
- Preços
- Mercado
- Tendências
- Estratégia
- Tecnologia

### Formatação do Conteúdo

O editor suporta:
- **Títulos** (H2, H3, H4)
- **Negrito**, *Itálico*, `Código`
- Listas (bullets e numeradas)
- Links
- Imagens com legendas
- Citações

### Visualização Automática

Assim que você publicar um post no Sanity Studio:
- ✅ Ele aparecerá automaticamente na página `/blog`
- ✅ Terá sua própria URL em `/blog/[slug]`
- ✅ Incluirá todas as imagens e formatação
- ✅ Terá SEO completo (metadata, Open Graph, JSON-LD)

### Revalidação

O site revalida o conteúdo a cada **1 hora**. Para ver mudanças imediatamente durante desenvolvimento, reinicie o servidor Next.js:

```bash
# Pare o servidor (Ctrl+C) e reinicie
npm run dev
```

## 🔧 Configuração Atual

- **Project ID**: sutrqo3v
- **Dataset**: production
- **Studio Port**: 3333
- **Site Port**: 3000

## 📝 Exemplo de Post

Aqui está um exemplo de como criar um post completo:

**Título**: "Como otimizar a gestão de estoque da sua farmácia"

**Slug**: `otimizar-gestao-estoque-farmacia`

**Resumo**: "Descubra as melhores práticas para manter seu estoque sempre equilibrado e evitar perdas."

**Categorias**: Gestão, Estoque

**Conteúdo**:
```
## Introdução

A gestão de estoque é um dos maiores desafios para farmácias...

## Principais Desafios

### 1. Ruptura de Estoque
Quando produtos essenciais acabam...

### 2. Excesso de Estoque
Produtos parados representam capital imobilizado...

## Soluções Práticas

1. **Implementar um sistema de controle**
2. **Definir pontos de reposição**
3. **Analisar o giro de produtos**

## Conclusão

Com as ferramentas certas, a gestão de estoque se torna...
```

## 🚀 Deploy do Studio

Para fazer deploy do Sanity Studio:

```bash
cd studio
sanity deploy
```

Isso criará uma URL pública para o studio (ex: `dinn.sanity.studio`)

## 💡 Dicas

- Use imagens de alta qualidade (mín. 1200x630px para cover)
- Escreva resumos atrativos (aparecem nas redes sociais)
- Use categorias consistentes
- Preencha o texto alternativo das imagens (SEO)
- Revise antes de publicar

---

**Pronto!** Agora você pode criar e gerenciar todo o conteúdo do blog através do Sanity Studio! 🎉
