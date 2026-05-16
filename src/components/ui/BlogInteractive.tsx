import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n/useTranslation';

// We map sanity image urls outside in Astro or here.
// Assuming Astro maps them and passes `imageUrl` as string.
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

interface BlogInteractiveProps {
  posts: BlogPost[];
}

export default function BlogInteractive({ posts }: BlogInteractiveProps) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [tappedCardId, setTappedCardId] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts;
    const lowerTerm = searchTerm.toLowerCase();
    return posts.filter((post) => post.title.toLowerCase().includes(lowerTerm));
  }, [posts, searchTerm]);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
  };

  return (
    <div className="w-full flex flex-col min-h-screen">
      {/* Hero Section */}
      <section 
        className="bg-[#1a1f2e] w-full flex flex-col items-center justify-center relative overflow-hidden"
        style={{ paddingTop: '220px', paddingBottom: '120px' }}
      >
        <div className="container max-w-3xl mx-auto px-4 z-10 flex flex-col items-center">
          <h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-thin text-center tracking-tight"
            style={{ marginBottom: '40px' }}
          >
            {t('blog.heroTitle', 'Conteúdos do Dinn')}
          </h1>
          
          <div className="relative w-full max-w-2xl group" style={{ margin: '0 auto' }}>
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder', 'Busque seu conteúdo aqui')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-full outline-none focus:bg-white/15 focus:border-white/40 transition-all backdrop-blur-md"
              style={{ padding: '16px 56px 16px 32px', fontSize: '16px', lineHeight: '1.5' }}
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70">
              <Search size={22} />
            </div>
          </div>
        </div>
        
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-[#5625F2] opacity-20 blur-[120px] rounded-full mix-blend-screen" />
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-white flex-1 py-20 w-full">
        <div className="container mx-auto px-4 max-w-7xl">
          {filteredPosts.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="w-full py-32 flex flex-col items-center justify-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 text-gray-400">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">{t('blog.noResultsTitle', 'Nenhum conteúdo encontrado')}</h3>
              <p className="text-gray-500">{t('blog.noResultsDesc', 'Tente ajustar sua busca por outros termos.')}</p>
            </motion.div>
          ) : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              <AnimatePresence>
                {filteredPosts.map((post) => {
                  const isTapped = tappedCardId === post._id;
                  
                  return (
                    <motion.a
                      href={`/blog/${post.slug.current}`}
                      key={post._id}
                      variants={cardVariants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      layout
                      className="group relative flex flex-col w-full h-full bg-white rounded-2xl overflow-hidden cursor-pointer"
                      style={{
                        // Default state
                        border: '1px solid transparent',
                        transition: 'all 0.3s ease-out'
                      }}
                      whileHover={{
                        y: -6,
                        boxShadow: '0 20px 25px -5px rgba(86, 37, 242, 0.1), 0 10px 10px -5px rgba(86, 37, 242, 0.04)',
                        borderColor: 'rgba(86, 37, 242, 0.5)',
                        background: 'rgba(255,255,255,0.3)',
                        backdropFilter: 'blur(12px)',
                      }}
                      onTap={() => {
                        // Mobile tap interaction
                        if (window.innerWidth < 768) {
                          setTappedCardId(post._id);
                          setTimeout(() => setTappedCardId(null), 2000);
                        }
                      }}
                    >
                      {/* Image Container */}
                      <div className="w-full aspect-video relative overflow-hidden bg-gray-100 rounded-t-2xl">
                        {post.imageUrl ? (
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-out md:group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-4xl">📝</div>
                        )}
                        
                        {/* Dark Overlay with Button (Hover/Tap) */}
                        <motion.div 
                          className={`absolute inset-0 bg-black/40 flex items-center justify-center z-10 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100 ${isTapped ? 'opacity-100' : 'opacity-0'}`}
                        >
                          <motion.div 
                            className="bg-white text-[#5625F2] font-medium py-3 px-6 rounded-full flex items-center gap-2 shadow-lg transform transition-transform duration-300 md:scale-95 md:group-hover:scale-100"
                            style={{ scale: isTapped ? 1 : 0.95 }}
                          >
                            <BookOpen size={18} />
                            <span>{t('blog.readArticle', 'Ler artigo')}</span>
                          </motion.div>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1 relative z-20">
                        {/* Meta */}
                        <div className="text-gray-400 text-sm mb-3 font-medium flex items-center gap-2">
                          <span>
                            {new Date(post.publishedAt).toLocaleDateString(t('locale', 'pt-BR'), {
                              day: 'numeric',
                              month: 'short',
                              year: 'numeric'
                            })}
                          </span>
                          {post.categories && post.categories.length > 0 && (
                            <>
                              <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                              <span className="text-[#5625F2]/80 truncate">{post.categories[0]}</span>
                            </>
                          )}
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-semibold text-[#1F2328] mb-4 line-clamp-3 transition-colors duration-300 group-hover:text-[#5625F2]">
                          {post.title}
                        </h2>

                        {/* Spacer */}
                        <div className="flex-1"></div>

                        {/* Footer / Button */}
                        <div className="mt-4 flex items-center text-[#5625F2] font-medium text-sm pt-4 border-t border-gray-100 group-hover:border-transparent transition-colors">
                          <span className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#5625F2]/20 group-hover:bg-[#5625F2] group-hover:text-white transition-all duration-300">
                            {t('blog.viewContent', 'Ver conteúdo')}
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
