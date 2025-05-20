import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-xl text-gray-600 mb-8">
        Sorry, the page you're looking for does not exist or has been moved.
      </p>
      <div className="space-x-4">
        <Link 
          href="/" 
          className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-md inline-block"
        >
          Go Home
        </Link>
        <Link 
          href="/contact" 
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-6 rounded-md inline-block"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
} 