import { Metadata } from 'next';
import Link from 'next/link';

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
    content: `
      <p>In today's fast-paced business environment, customer service teams are under increasing pressure to provide quick, accurate responses while managing growing inquiry volumes. Artificial intelligence has emerged as a powerful solution to these challenges.</p>
      
      <h2>The Benefits of AI in Customer Service</h2>
      
      <p>By implementing AI-powered systems, businesses are seeing remarkable improvements in response times, customer satisfaction, and operational efficiency. Here are some of the key benefits:</p>
      
      <ul>
        <li><strong>24/7 Availability</strong>: AI chatbots can handle inquiries around the clock, ensuring customers get immediate responses regardless of time zones or business hours.</li>
        <li><strong>Reduced Wait Times</strong>: Automated systems can handle multiple inquiries simultaneously, eliminating queues during peak periods.</li>
        <li><strong>Consistent Quality</strong>: AI systems deliver the same high-quality responses every time, maintaining brand voice and accuracy.</li>
        <li><strong>Data-Driven Insights</strong>: AI analysis of customer interactions can reveal trends and opportunities for business improvement.</li>
      </ul>
      
      <p>The integration of AI doesn't mean replacing human agents—rather, it allows them to focus on complex issues while routine matters are handled automatically.</p>
    `,
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
    content: `
      <p>Data processing has evolved dramatically over the past decade, and the pace of innovation shows no signs of slowing. As we look toward the future, several key trends are emerging that will shape how businesses handle their data resources.</p>
      
      <h2>Emerging Trends in Data Processing</h2>
      
      <p>Forward-thinking organizations are already preparing for these developments:</p>
      
      <ul>
        <li><strong>Edge Computing</strong>: Processing data closer to its source reduces latency and bandwidth usage while improving response times for critical applications.</li>
        <li><strong>Quantum Computing</strong>: Though still in early stages, quantum computing promises to revolutionize data processing for specific complex problems.</li>
        <li><strong>Automated Data Science</strong>: AI tools are making data analysis accessible to non-specialists, democratizing insights across organizations.</li>
        <li><strong>Real-time Processing</strong>: Businesses are shifting from batch processing to real-time data analysis, enabling immediate response to changing conditions.</li>
      </ul>
      
      <p>Organizations that adapt to these trends will gain competitive advantages through faster decision-making and more efficient operations.</p>
    `,
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
    content: `
      <p>Many small business owners believe that AI implementation is beyond their reach—too complex and too expensive. However, recent developments have made AI more accessible than ever for organizations of all sizes.</p>
      
      <h2>Affordable AI Solutions for Small Businesses</h2>
      
      <p>Here are practical approaches for small businesses looking to leverage AI:</p>
      
      <ul>
        <li><strong>Software-as-a-Service (SaaS)</strong>: Many AI tools are now available through affordable subscription models, eliminating the need for large upfront investments.</li>
        <li><strong>Pre-trained Models</strong>: Using existing AI models rather than building custom solutions can dramatically reduce costs.</li>
        <li><strong>Focused Implementation</strong>: Start with a single high-impact area rather than attempting organization-wide AI transformation.</li>
        <li><strong>Open Source Tools</strong>: Many powerful AI frameworks are available as open source software, requiring only the technical expertise to implement them.</li>
      </ul>
      
      <p>By starting small and scaling gradually, even businesses with limited resources can benefit from AI capabilities that were once available only to large enterprises.</p>
    `,
  },
];

export const generateStaticParams = () => {
  return posts.map(post => ({
    slug: post.slug,
  }));
};

export const metadata: Metadata = {
  title: 'Blog Post | Converzas',
  description: 'Read our latest insights on AI automation',
};

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(post => post.slug === params.slug);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Blog Post Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, the blog post you're looking for does not exist.
        </p>
        <div className="space-x-4">
          <Link 
            href="/blog" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md inline-block"
          >
            Back to Blog
          </Link>
          <Link 
            href="/" 
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <main className="pt-16 pb-24">
      <div className="container mx-auto px-4">
        <article className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-600">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-primary-50 text-primary-700 text-sm px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </header>
          
          <div 
            className="prose max-w-none prose-headings:text-primary-900 prose-a:text-primary-600"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link 
              href="/blog"
              className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
} 