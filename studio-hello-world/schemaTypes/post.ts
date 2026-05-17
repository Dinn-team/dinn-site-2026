import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'post',
  title: 'Artigo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'title' }, validation: Rule => Rule.required() }),
    defineField({ name: 'publishedAt', title: 'Data de publicação', type: 'datetime' }),
    defineField({ name: 'excerpt', title: 'Resumo', type: 'text', rows: 3 }),
    defineField({ name: 'coverImage', title: 'Imagem de capa', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'body', title: 'Conteúdo', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'category', title: 'Categoria', type: 'string', options: { list: ['Van Life', 'Renda na Estrada', 'Destinos', 'Dicas'] } }),
    defineField({ name: 'seoDescription', title: 'Descrição SEO', type: 'text', rows: 2 }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt' } },
})
