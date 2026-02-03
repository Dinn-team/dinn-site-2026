import type { Metadata } from 'next';
import Link from 'next/link';
import { client, urlFor } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import './blog.css';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Insights, tendências e novidades sobre o mercado farmacêutico e gestão de farmácias.',
};

// Revalidate every hour
export const revalidate = 3600;

const categories = ['Todos', 'Gestão', 'Estoque', 'Preços', 'Mercado', 'Tendências', 'Estratégia', 'Tecnologia'];

async function getPosts() {
    try {
        const posts = await client.fetch(postsQuery);
        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export default async function BlogPage() {
    const posts = await getPosts();

    return (
        <>
            {/* Hero */}
            <section className="blog-hero">
                <div className="container">
                    <h1>Blog Dinn</h1>
                    <p>Insights, tendências e novidades sobre o mercado farmacêutico</p>
                </div>
            </section>

            {/* Search and Filter */}
            <section className="blog-filters section-sm">
                <div className="container">
                    <div className="filters-wrapper">
                        {/* Search */}
                        <div className="search-box">
                            <input
                                type="search"
                                placeholder="Buscar artigos..."
                                className="search-input"
                            />
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>

                        {/* Categories */}
                        <div className="categories-filter">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`category-btn ${category === 'Todos' ? 'active' : ''}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="section">
                <div className="container">
                    {posts.length === 0 ? (
                        <div className="empty-state">
                            <p>Nenhum post publicado ainda. Crie seu primeiro post no Sanity Studio!</p>
                            <a
                                href="http://localhost:3000/studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Abrir Sanity Studio
                            </a>
                        </div>
                    ) : (
                        <>
                            <div className="posts-grid">
                                {posts.map((post: any) => (
                                    <Link key={post._id} href={`/blog/${post.slug.current}`} className="post-card card">
                                        {post.coverImage ? (
                                            <img
                                                src={urlFor(post.coverImage).width(600).height(400).url()}
                                                alt={post.coverImage.alt || post.title}
                                                className="post-image"
                                            />
                                        ) : (
                                            <div className="post-image-placeholder">
                                                📝
                                            </div>
                                        )}
                                        <div className="post-content">
                                            <div className="post-meta">
                                                <span className="post-author">{post.author}</span>
                                                <span className="post-date">
                                                    {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <h2 className="post-title">{post.title}</h2>
                                            <p className="post-excerpt">{post.excerpt}</p>
                                            {post.categories && post.categories.length > 0 && (
                                                <div className="post-categories">
                                                    {post.categories.map((cat: string) => (
                                                        <span key={cat} className="post-category">{cat}</span>
                                                    ))}
                                                </div>
                                            )}
                                            <span className="post-link">
                                                Ler mais →
                                            </span>
                                        </div>
                                    </Link>
                                ))}
                            </div>

                            {/* Pagination Placeholder */}
                            <div className="pagination">
                                <button className="btn btn-secondary" disabled>← Anterior</button>
                                <span className="pagination-info">Página 1 de 1</span>
                                <button className="btn btn-secondary" disabled>Próxima →</button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    );
}
