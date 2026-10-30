import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search } from 'lucide-react';
import { articlePath, categoryKey, DATE_LOCALE, type Lang } from '@/i18n/routes';

export interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  author: string;
  publishedAt: string;
  imageUrl?: string;
  categories?: string[];
}

/** Textos da interface, já no idioma da página (resolvidos no build). */
export interface BlogLabels {
  heroTitle: string;
  searchPlaceholder: string;
  noResultsTitle: string;
  noResultsDesc: string;
  readArticle: string;
  defaultCategory: string;
  allCategories?: string;
  categories: Record<string, string>;
}

interface BlogInteractiveProps {
  posts: BlogPost[];
  lang: Lang;
  labels: BlogLabels;
}

const ITEMS_PER_PAGE = 7; // 1 featured + 6 in the grid

export default function BlogInteractive({ posts, lang, labels }: BlogInteractiveProps) {
  // Valor salvo no Sanity ("Estoque" ou "estoque") → nome no idioma da página.
  const categoryName = (value?: string) =>
    value ? labels.categories[categoryKey(value)] ?? value : labels.defaultCategory;
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories from all posts
  const allCategories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach(post => {
      if (post.categories) {
        post.categories.forEach(c => cats.add(c));
      }
    });
    return ['Todos', ...Array.from(cats)];
  }, [posts]);

  // Filter posts by search and category
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (activeCategory !== 'Todos') {
      result = result.filter(post => post.categories?.includes(activeCategory));
    }

    if (searchTerm) {
      const lowerTerm = searchTerm.toLowerCase();
      result = result.filter(post => post.title.toLowerCase().includes(lowerTerm) || post.excerpt?.toLowerCase().includes(lowerTerm));
    }

    return result;
  }, [posts, searchTerm, activeCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE);
  const currentPosts = filteredPosts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Split into featured and grid (only on first page, or always?)
  // Usually, the first post is featured, the rest are in the grid.
  const featured = currentPosts[0];
  const gridPosts = currentPosts.slice(1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(DATE_LOCALE[lang], {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="h2 bg">
      <header className="h2-hero bg-hero">
        <div className="h2-wrap">
          <div className="h2-hero-grid">
            <h1 className="h2-hero-title">{labels.heroTitle}</h1>
            <div className="h2-hero-side">
              <label className="bg-search">
                <Search size={18} aria-hidden="true" />
                <input
                  type="search"
                  placeholder={labels.searchPlaceholder}
                  aria-label={labels.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </label>
            </div>
          </div>
          {allCategories.length > 2 && (
            <div className="bg-cats" role="group">
              {allCategories.map((c) => (
                <button key={c} type="button" className={activeCategory === c ? 'is-on' : ''} aria-pressed={activeCategory === c} onClick={() => handleCategoryChange(c)}>
                  {c === 'Todos' ? labels.allCategories ?? c : categoryName(c)}
                </button>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="h2-wrap bg-body">
        {filteredPosts.length === 0 ? (
          <div className="bg-empty">
            <Search size={28} aria-hidden="true" />
            <h3>{labels.noResultsTitle}</h3>
            <p>{labels.noResultsDesc}</p>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}-${currentPage}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {featured && (
                <article className="bg-featured">
                  <a href={articlePath(lang, featured.slug.current)} className="bg-img" aria-label={featured.title} tabIndex={-1}>
                    <img
                      src={featured.imageUrl || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80'}
                      alt={featured.title}
                    />
                  </a>
                  <div className="bg-featured-txt">
                    <p className="bg-meta"><span>{categoryName(featured.categories?.[0])}</span><span>{formatDate(featured.publishedAt)}</span></p>
                    <h2><a href={articlePath(lang, featured.slug.current)}>{featured.title}</a></h2>
                    <p className="bg-excerpt">{featured.excerpt}</p>
                    <a href={articlePath(lang, featured.slug.current)} className="h2-link">{labels.readArticle} →</a>
                  </div>
                </article>
              )}

              {gridPosts.length > 0 && (
                <ul className="bg-grid">
                  {gridPosts.map((post) => (
                    <li key={post._id}>
                      <a href={articlePath(lang, post.slug.current)} className="bg-card">
                        <span className="bg-img">
                          <img
                            src={post.imageUrl || 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'}
                            alt={post.title}
                            loading="lazy"
                          />
                        </span>
                        <span className="bg-meta"><span>{categoryName(post.categories?.[0])}</span><span>{formatDate(post.publishedAt)}</span></span>
                        <h3>{post.title}</h3>
                        <span className="bg-excerpt">{post.excerpt}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {totalPages > 1 && (
          <nav className="bg-pages" aria-label="Paginação">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={currentPage === i + 1 ? 'is-on' : ''}
                aria-current={currentPage === i + 1 ? 'page' : undefined}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                {i + 1}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
