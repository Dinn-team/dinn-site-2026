import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/client';

const portableTextComponents = {
    types: {
        image: ({ value }: any) => (
            <figure style={{ margin: 'var(--space-2xl) 0' }}>
                <img
                    src={urlFor(value).width(800).url()}
                    alt={value.alt || ''}
                    style={{ width: '100%', borderRadius: 'var(--radius-lg)' }}
                />
                {value.caption && (
                    <figcaption style={{
                        textAlign: 'center',
                        fontSize: 'var(--font-size-sm)',
                        color: 'var(--color-text-muted)',
                        marginTop: 'var(--space-sm)'
                    }}>
                        {value.caption}
                    </figcaption>
                )}
            </figure>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
            return (
                <a href={value.href} rel={rel} style={{ color: 'var(--color-accent-primary)' }}>
                    {children}
                </a>
            );
        },
    },
};

export default function PortableTextWrapper({ body }: { body: any }) {
    return <PortableText value={body} components={portableTextComponents} />;
}
