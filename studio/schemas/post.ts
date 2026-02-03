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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'excerpt',
            title: 'Resumo',
            type: 'text',
            rows: 3,
            validation: (Rule) => Rule.required().max(200),
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
            title: 'Autor',
            type: 'string',
            initialValue: 'Equipe Dinn',
            validation: (Rule) => Rule.required(),
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
                list: [
                    { title: 'Gestão', value: 'Gestão' },
                    { title: 'Estoque', value: 'Estoque' },
                    { title: 'Preços', value: 'Preços' },
                    { title: 'Mercado', value: 'Mercado' },
                    { title: 'Tendências', value: 'Tendências' },
                    { title: 'Estratégia', value: 'Estratégia' },
                    { title: 'Tecnologia', value: 'Tecnologia' },
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
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'coverImage',
            publishedAt: 'publishedAt',
        },
        prepare(selection) {
            const { author, publishedAt } = selection;
            return {
                ...selection,
                subtitle: `${author} - ${new Date(publishedAt).toLocaleDateString('pt-BR')}`,
            };
        },
    },
});
