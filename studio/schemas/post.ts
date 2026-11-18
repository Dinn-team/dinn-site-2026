import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Título',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'contentLanguage',
            title: 'Idioma',
            type: 'string',
            description:
                'Idioma desta versão. Cada artigo tem uma versão por idioma, todas com o mesmo código de tradução.',
            options: {
                list: [
                    { title: 'Português (Brasil)', value: 'pt' },
                    { title: 'English', value: 'en' },
                    { title: 'Español', value: 'es' },
                ],
                layout: 'radio',
            },
            initialValue: 'pt',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'translationKey',
            title: 'Código de tradução',
            type: 'string',
            description:
                'Une as versões do mesmo artigo em idiomas diferentes: use o mesmo código em PT, EN e ES. ' +
                'Em artigos antigos fica vazio e vale o slug da versão em português.',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Parte final da URL. Pode (e deve) ser traduzido em cada idioma.',
            options: {
                source: 'title',
                maxLength: 96,
                // O slug só precisa ser único dentro do mesmo idioma.
                isUnique: async (slug, context) => {
                    const { document, getClient } = context;
                    const id = (document?._id ?? '').replace(/^drafts\./, '');
                    const language = document?.contentLanguage ?? 'pt';
                    const found = await getClient({ apiVersion: '2024-01-01' }).fetch(
                        `count(*[_type == "post" && slug.current == $slug && coalesce(contentLanguage, 'pt') == $language && !(_id in [$id, "drafts." + $id])])`,
                        { slug, language, id },
                    );
                    return found === 0;
                },
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Resumo',
            type: 'text',
            rows: 3,
            validation: (Rule) => [
                Rule.required(),
                Rule.max(180).warning('O resumo aparece no card do blog; mantenha em até 180 caracteres.'),
            ],
        }),
        defineField({
            name: 'coverImage',
            title: 'Imagem de Capa',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                },
            ],
        }),
        defineField({
            name: 'author',
            title: 'Autor (texto, legado)',
            type: 'string',
            description: 'Usado só quando não há autor(a) selecionado(a) abaixo.',
        }),
        defineField({
            name: 'authorRef',
            title: 'Autor(a)',
            type: 'reference',
            to: [{ type: 'author' }],
            description: 'Quem assina o artigo: nome, cargo e foto vêm do cadastro do(a) autor(a).',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Data de Publicação',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'categories',
            title: 'Categorias',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                // O valor é uma chave estável; o nome exibido no site é
                // traduzido por idioma (blog.categories nos dicionários).
                list: [
                    { title: 'Gestão', value: 'gestao' },
                    { title: 'Estoque', value: 'estoque' },
                    { title: 'Preços', value: 'precos' },
                    { title: 'Mercado', value: 'mercado' },
                    { title: 'Tendências', value: 'tendencias' },
                    { title: 'Estratégia', value: 'estrategia' },
                    { title: 'Tecnologia', value: 'tecnologia' },
                ],
            },
        }),
        defineField({
            name: 'body',
            title: 'Conteúdo',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                        { title: 'H4', value: 'h4' },
                        { title: 'Citação', value: 'blockquote' },
                    ],
                    lists: [
                        { title: 'Lista', value: 'bullet' },
                        { title: 'Numerada', value: 'number' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Negrito', value: 'strong' },
                            { title: 'Itálico', value: 'em' },
                            { title: 'Código', value: 'code' },
                        ],
                        annotations: [
                            {
                                name: 'link',
                                type: 'object',
                                title: 'Link',
                                fields: [
                                    {
                                        name: 'href',
                                        type: 'url',
                                        title: 'URL',
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                    fields: [
                        {
                            name: 'alt',
                            type: 'string',
                            title: 'Texto Alternativo',
                        },
                        {
                            name: 'caption',
                            type: 'string',
                            title: 'Legenda',
                        },
                    ],
                },
            ],
        }),
        defineField({
            name: 'presentation',
            title: 'Apresentação',
            type: 'object',
            description:
                'Slides gerados deste artigo. Com 2 slides ou mais, o site publica a apresentação com o mesmo slug do artigo.',
            options: { collapsible: true, collapsed: true },
            fields: [
                defineField({
                    name: 'generatedAt',
                    title: 'Gerada em',
                    type: 'datetime',
                }),
                defineField({
                    name: 'slides',
                    title: 'Slides',
                    type: 'array',
                    of: [
                        {
                            type: 'object',
                            name: 'slide',
                            title: 'Slide',
                            fields: [
                                defineField({
                                    name: 'kind',
                                    title: 'Tipo',
                                    type: 'string',
                                    options: {
                                        list: [
                                            { title: 'Capa', value: 'capa' },
                                            { title: 'Sumário', value: 'sumario' },
                                            { title: 'Seção', value: 'secao' },
                                            { title: 'Citação', value: 'citacao' },
                                        ],
                                        layout: 'radio',
                                    },
                                    initialValue: 'secao',
                                    validation: (Rule) => Rule.required(),
                                }),
                                defineField({
                                    name: 'title',
                                    title: 'Título',
                                    type: 'string',
                                    validation: (Rule) => Rule.required(),
                                }),
                                defineField({
                                    name: 'body',
                                    title: 'Texto',
                                    type: 'text',
                                    rows: 6,
                                    description:
                                        'Markdown simples: parágrafos separados por linha em branco, itens de lista com "- " e **negrito**. Na citação, a frase sem aspas. Sem HTML, link nem imagem.',
                                }),
                            ],
                            preview: {
                                select: { title: 'title', subtitle: 'kind' },
                            },
                        },
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'coverImage',
            publishedAt: 'publishedAt',
            language: 'contentLanguage',
        },
        prepare(selection) {
            const { author, publishedAt, language } = selection;
            return {
                ...selection,
                title: `[${(language ?? 'pt').toUpperCase()}] ${selection.title}`,
                subtitle: `${author} - ${new Date(publishedAt).toLocaleDateString('pt-BR')}`,
            };
        },
    },
});
