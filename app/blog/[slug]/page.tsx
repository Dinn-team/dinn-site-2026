import type { Metadata } from 'next';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { client, urlFor } from '@/sanity/lib/client';
import { postBySlugQuery, recentPostsQuery } from '@/sanity/lib/queries';
import './post.css';

// Revalidate every hour
export const revalidate = 3600;

async function getPost(slug: string) {
    try {
        const post = await client.fetch(postBySlugQuery, { slug });
        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
}

async function getRecentPosts() {
    try {
        const posts = await client.fetch(recentPostsQuery);
        return posts;
    } catch (error) {
        console.error('Error fetching recent posts:', error);
        return [];
    }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = await getPost(params.slug);

    if (!post) {
        return {
            title: 'Post não encontrado',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author],
            images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : [],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: post.coverImage ? [urlFor(post.coverImage).width(1200).height(630).url()] : [],
        },
    };
}

// Portable Text components for rich content rendering
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

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug);
    const recentPosts = await getRecentPosts();

    if (!post) {
        return (
            <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
                <h1>Post não encontrado</h1>
                <p>O post que você está procurando não existe ou foi removido.</p>
                <Link href="/blog" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
                    Voltar para o blog
                </Link>
            </div>
        );
    }

    return (
        <>
            {/* JSON-LD for Article */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": post.title,
                        "description": post.excerpt,
                        "image": post.coverImage ? urlFor(post.coverImage).width(1200).height(630).url() : undefined,
                        "author": {
                            "@type": "Person",
                            "name": post.author
                        },
                        "datePublished": post.publishedAt,
                        "publisher": {
                            "@type": "Organization",
                            "name": "Dinn",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://dinn.com.br/logo.png"
                            }
                        }
                    })
                }}
            />

            <article className="blog-post">
                {/* Header */}
                <header className="post-header">
                    <div className="container content-wrapper">
                        <Link href="/blog" className="back-link">
                            ← Voltar para o blog
                        </Link>

                        {post.categories && post.categories.length > 0 && (
                            <div className="post-categories">
                                {post.categories.map((cat: string) => (
                                    <span key={cat} className="post-category">{cat}</span>
                                ))}
                            </div>
                        )}

                        <h1 className="post-title">{post.title}</h1>

                        <div className="post-meta">
                            <span className="post-author">Por {post.author}</span>
                            <span className="post-date">
                                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Cover Image */}
                {post.coverImage && (
                    <div className="post-cover">
                        <div className="container">
                            <img
                                src={urlFor(post.coverImage).width(1200).height(600).url()}
                                alt={post.coverImage.alt || post.title}
                                className="post-cover-image"
                            />
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="post-content-wrapper">
                    <div className="container content-wrapper">
                        <div className="post-body">
                            {post.excerpt && <p className="lead">{post.excerpt}</p>}

                            <PortableText
                                value={post.body}
                                components={portableTextComponents}
                            />
                        </div>
                    </div>
                </div>

                {/* Related Posts */}
                {recentPosts.length > 0 && (
                    <section className="related-posts section">
                        <div className="container">
                            <h2 className="section-title text-center">Artigos Recentes</h2>
                            <div className="related-posts-grid">
                                {recentPosts
                                    .filter((p: any) => p.slug.current !== params.slug)
                                    .slice(0, 2)
                                    .map((relatedPost: any) => (
                                        <Link
                                            key={relatedPost._id}
                                            href={`/blog/${relatedPost.slug.current}`}
                                            className="related-post card"
                                        >
                                            <h3>{relatedPost.title}</h3>
                                            <p>{relatedPost.excerpt}</p>
                                            <span className="post-link">Ler mais →</span>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA */}
                <section className="post-cta section" style={{ backgroundColor: 'var(--color-bg-secondary)' }}>
                    <div className="container content-wrapper text-center">
                        <h2>Gostou do conteúdo?</h2>
                        <p>Descubra como o Dinn pode transformar a gestão da sua farmácia.</p>
                        <Link href="/contato" className="btn btn-primary btn-lg">
                            Solicitar demo
                        </Link>
                    </div>
                </section>
            </article>
        </>
    );
}
