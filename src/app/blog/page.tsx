import { BlogList } from '@/components/blog/BlogList';
import { Metadata } from 'next';
import { BlogPost } from '@/lib/blog';

// Sample blog posts data (in a real app, this would come from a CMS or API)
const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Automating Customer Service with AI',
    slug: 'automating-customer-service-with-ai',
    excerpt: 'How AI is transforming customer service operations and improving response times.',
    content: 'Full content of the blog post would go here with HTML markup.',
    date: '2023-05-15',
    author: {
      name: 'Alex Johnson',
      avatar: '/avatars/alex-johnson.jpg',
      role: 'AI Specialist'
    },
    coverImage: '/blog-image-1.jpg',
    category: 'Automation',
    readingTime: '5 min read',
    tags: ['AI', 'Customer Service', 'Automation'],
  },
  {
    id: '2',
    title: 'The Future of Data Processing',
    slug: 'future-of-data-processing',
    excerpt: 'Exploring emerging trends in data processing and how businesses can prepare.',
    content: 'Full content of the blog post would go here with HTML markup.',
    date: '2023-04-22',
    author: {
      name: 'Maria Garcia',
      avatar: '/avatars/maria-garcia.jpg',
      role: 'Data Scientist'
    },
    coverImage: '/blog-image-2.jpg',
    category: 'Data Science',
    readingTime: '7 min read',
    tags: ['Data', 'AI', 'Business'],
  },
  {
    id: '3',
    title: 'AI Integration for Small Businesses',
    slug: 'ai-integration-small-businesses',
    excerpt: 'Cost-effective strategies for small businesses to implement AI solutions.',
    content: 'Full content of the blog post would go here with HTML markup.',
    date: '2023-03-10',
    author: {
      name: 'David Chen',
      avatar: '/avatars/david-chen.jpg',
      role: 'Business Consultant'
    },
    coverImage: '/blog-image-3.jpg',
    category: 'Small Business',
    readingTime: '4 min read',
    tags: ['Small Business', 'AI', 'Cost-Effective'],
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