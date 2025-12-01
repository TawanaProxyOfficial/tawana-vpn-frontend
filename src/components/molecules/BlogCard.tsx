import { motion } from 'framer-motion';
import { Icon, Badge } from '../atoms';
import type { BlogPost, Language } from '../../types';
import { cn } from '../../utils/helpers';

interface BlogCardProps {
  post: BlogPost;
  language: Language;
  index: number;
}

export function BlogCard({ post, language, index }: BlogCardProps) {
  const categoryLabels = {
    all: { fa: 'همه', en: 'All' },
    security: { fa: 'امنیت', en: 'Security' },
    tutorial: { fa: 'آموزش', en: 'Tutorial' },
    news: { fa: 'اخبار', en: 'News' },
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={cn(
        'group relative rounded-2xl overflow-hidden transition-all duration-300',
        'dark:bg-white/5 dark:border dark:border-white/10 dark:hover:border-white/20',
        'light:bg-white light:border light:border-gray-200 light:hover:border-gray-300 light:shadow-lg'
      )}
    >
      {/* Featured Badge */}
      {post.featured && (
        <div className="absolute top-4 left-4 z-10">
          <Badge variant="purple">
            {language === 'fa' ? 'مقاله ویژه' : 'Featured'}
          </Badge>
        </div>
      )}

      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-green-500/20 to-cyan-500/20 flex items-center justify-center">
        <Icon name="BookOpen" size={48} className="text-green-400/50" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Read Time */}
        <div className="flex items-center gap-3 mb-3 text-sm dark:text-gray-400 light:text-gray-500">
          <span>{categoryLabels[post.category][language]}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Icon name="Clock" size={14} />
            {post.readTime} {language === 'fa' ? 'دقیقه' : 'min'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2 dark:text-white light:text-gray-900 line-clamp-2 group-hover:text-green-400 transition-colors">
          {post.title[language]}
        </h3>

        {/* Excerpt */}
        <p className="text-sm dark:text-gray-400 light:text-gray-600 line-clamp-2 mb-4">
          {post.excerpt[language]}
        </p>

        {/* Read More Link */}
        <motion.a
          href="#"
          whileHover={{ x: language === 'fa' ? -5 : 5 }}
          className="inline-flex items-center gap-2 text-green-400 text-sm font-medium"
        >
          {language === 'fa' ? 'ادامه مطلب' : 'Read More'}
          <Icon name={language === 'fa' ? 'ArrowLeft' : 'ArrowRight'} size={16} />
        </motion.a>
      </div>
    </motion.article>
  );
}
