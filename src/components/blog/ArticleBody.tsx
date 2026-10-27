import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/client';

// Corpo do artigo. Fica em .tsx porque o @portabletext/react é React: o que cada
// bloco devolve precisa ser JSX. Texto com tags (template string) sai escapado e
// aparece na página como código.
const components = {
    types: {
        image: ({ value }: any) => {
            if (!value?.asset) return null;
            return (
                <figure className="bp-figure">
                    <img src={urlFor(value).width(900).url()} alt={value.alt || ''} className="bp-img" loading="lazy" />
                    {value.caption && <figcaption className="bp-caption">{value.caption}</figcaption>}
                </figure>
            );
        },
    },
};

export default function ArticleBody({ value }: { value: any }) {
    return <PortableText value={value} components={components} />;
}
