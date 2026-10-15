import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'author',
    title: 'Autor(a)',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Nome',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Cargo',
            type: 'string',
            description: 'Aparece abaixo do nome no artigo. Ex.: Head of Marketing no Dinn.',
        }),
        defineField({
            name: 'image',
            title: 'Foto',
            type: 'image',
            options: { hotspot: true },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Texto Alternativo',
                },
            ],
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'role', media: 'image' },
    },
});
