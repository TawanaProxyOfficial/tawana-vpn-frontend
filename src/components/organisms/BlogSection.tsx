import { useState } from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from '../molecules';
import { Button, Icon } from '../atoms';
import { blogPosts } from '../../data/content';
import type { Language, BlogCategory } from '../../types';
import { cn } from '../../utils/helpers';

interface BlogSectionProps {
  language: Language;
  t: (key: string) => string;
}

export function BlogSection({ language, t }: BlogSectionProps) {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('all');

  const categories: { id: BlogCategory; label: string }[] = [
    { id: 'all', label: t('blog.categories.all') },
    { id: 'security', label: t('blog.categories.security') },
    { id: 'tutorial', label: t('blog.categories.tutorial') },
    { id: 'news', label: t('blog.categories.news') },
  ];

  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-transparent dark:via-purple-500/5 dark:to-transparent light:bg-gradient-to-b light:from-transparent light:via-purple-500/5 light:to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-purple-400 mb-4"
          >
            {t('blog.title')}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold dark:text-white light:text-gray-900"
          >
            {t('blog.subtitle')}
          </motion.h2>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300',
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-cyan-500 text-white'
                  : 'dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 light:bg-gray-100 light:text-gray-600 light:hover:bg-gray-200'
              )}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              language={language}
              index={index}
            />
          ))}
        </div>

        {/* View Archive Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button variant="secondary">
            {t('blog.archive')}
            <Icon name={language === 'fa' ? 'ArrowLeft' : 'ArrowRight'} size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
