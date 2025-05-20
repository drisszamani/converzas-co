'use client';

import { motion } from 'framer-motion';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

type BlogPostContentProps = {
  post: BlogPost;
};

export const BlogPostContent = ({ post }: BlogPostContentProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to all posts
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary-600 bg-primary-50 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">{post.title}</h1>
          
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <p className="text-sm text-gray-600">{post.author.role}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-8 relative h-80 md:h-96 bg-gray-200 rounded-xl">
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <span>Featured Image</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-12 pt-8 border-t border-gray-200"
      >
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span 
              key={tag} 
              className="inline-block px-3 py-1 text-sm text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>
    </article>
  );
}; 