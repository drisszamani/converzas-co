import { BlogList } from '@/components/blog/BlogList';
import { Metadata } from 'next';

// Sample blog posts data (in a real app, this would come from a CMS or API)
const posts = [
  {
    id: '1',
    title: 'Automating Customer Service with AI',
    slug: 'automating-customer-service-with-ai',
    excerpt: 'How AI is transforming customer service operations and improving response times.',
    date: '2023-05-15',
    author: 'Alex Johnson',
    tags: ['AI', 'Customer Service', 'Automation'],
    imageUrl: '/blog-image-1.jpg',
  },
  {
    id: '2',
    title: 'The Future of Data Processing',
    slug: 'future-of-data-processing',
    excerpt: 'Exploring emerging trends in data processing and how businesses can prepare.',
    date: '2023-04-22',
    author: 'Maria Garcia',
    tags: ['Data', 'AI', 'Business'],
    imageUrl: '/blog-image-2.jpg',
  },
  {
    id: '3',
    title: 'AI Integration for Small Businesses',
    slug: 'ai-integration-small-businesses',
    excerpt: 'Cost-effective strategies for small businesses to implement AI solutions.',
    date: '2023-03-10',
    author: 'David Chen',
    tags: ['Small Business', 'AI', 'Cost-Effective'],
    imageUrl: '/blog-image-3.jpg',
  },
];

export const metadata: Metadata = {
  title: 'Blog | Converzas - AI Automation Agency',
  description: 'Read the latest insights on AI automation, customer service innovation, and business transformation.',
};

export default function BlogPage() {
  return (
    <main className="pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary-900">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and news on AI automation and business transformation
          </p>
        </div>
        
        <BlogList posts={posts} />
      </div>
    </main>
  );
} 