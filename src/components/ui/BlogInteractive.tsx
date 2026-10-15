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
    <div className="blog-page">
      {/* Hero */}
      <div className="blog-hero">
        <h1>{labels.heroTitle}</h1>
        <div className="blog-search">
          <input 
            type="text" 
            placeholder={labels.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <span className="blog-search-icon">
            <Search size={20} />
          </span>
        </div>
      </div>

      <div className="blog-container">
        {filteredPosts.length === 0 ? (
          <div className="w-full py-32 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4 text-slate-400">
              <Search size={32} />
            </div>
            <h3 className="text-xl font-medium text-slate-900 mb-2">{labels.noResultsTitle}</h3>
            <p className="text-slate-500">{labels.noResultsDesc}</p>
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
              {/* Featured */}
              {featured && (
                <div className="blog-featured">
                  <a href={articlePath(lang, featured.slug.current)} className="block w-full overflow-hidden rounded-xl">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      className="blog-featured-image"
                      src={featured.imageUrl || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"}
                      alt={featured.title}
                    />
                  </a>
                  <div>
                    <span className="blog-featured-tag">{categoryName(featured.categories?.[0])}</span>
                    <a href={articlePath(lang, featured.slug.current)} className="block">
                      <h2 className="blog-featured-title">{featured.title}</h2>
                    </a>
                    <p className="blog-featured-excerpt">{featured.excerpt}</p>
                    <p className="blog-featured-meta">{formatDate(featured.publishedAt)}</p>
                    <a href={articlePath(lang, featured.slug.current)} className="blog-featured-link">
                      {labels.readArticle} →
                    </a>
                  </div>
                </div>
              )}

              {/* Grid */}
              {gridPosts.length > 0 && (
                <div className="blog-grid">
                  {gridPosts.map(post => (
                    <a key={post._id} href={articlePath(lang, post.slug.current)} className="blog-card group">
                      <div 
                        className="w-full aspect-video rounded-xl overflow-hidden bg-slate-100"
                        style={{ marginBottom: '32px' }}
                      >
                        <img
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          src={post.imageUrl || "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"}
                          alt={post.title}
                          loading="lazy"
                        />
                      </div>
                      <div className="blog-card-meta">
                        <span className="blog-card-category">{categoryName(post.categories?.[0])}</span>
                        <span>·</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <h3 className="blog-card-title">{post.title}</h3>
                      <p className="blog-card-excerpt">{post.excerpt}</p>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="blog-pagination">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button 
                key={i} 
                className={currentPage === i + 1 ? 'active' : ''}
                onClick={() => {
                  setCurrentPage(i + 1);
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
