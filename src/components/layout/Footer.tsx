import Link from 'next/link';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Link href="/" className="inline-block">
                {/* Replace with actual logo when available */}
                <div className="w-40 h-12 bg-white/10 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Converzas</span>
                </div>
              </Link>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              AI automation solutions designed to transform your business operations. 
              We leverage cutting-edge AI technology to streamline workflows and drive growth.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex items-start group">
                <MapPin className="w-5 h-5 text-primary-400 mr-3 mt-1 flex-shrink-0 group-hover:text-primary-300 transition-colors" />
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">123 Innovation Drive, Tech City, TC 98765</p>
              </div>
              <div className="flex items-center group">
                <Phone className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 group-hover:text-primary-300 transition-colors" />
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">+1 (555) 234-5678</p>
              </div>
              <div className="flex items-center group">
                <Mail className="w-5 h-5 text-primary-400 mr-3 flex-shrink-0 group-hover:text-primary-300 transition-colors" />
                <a href="mailto:hello@converzas.com" className="text-gray-400 text-sm hover:text-primary-400 transition-colors">
                  hello@converzas.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  AI Chatbots
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Workflow Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Data Analysis
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  Custom AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 text-sm hover:text-primary-400 transition-colors flex items-center">
                  <span className="inline-block w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  AI Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-5 text-white">Stay Updated</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Subscribe to our newsletter for the latest AI insights and updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/70 border border-gray-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                <button 
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 rounded-md bg-primary-600 hover:bg-primary-500 transition-colors"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </form>
            
            <div className="mt-6">
              <h4 className="text-gray-300 text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary-600 transition-colors" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Converzas. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-500 text-sm hover:text-primary-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 text-sm hover:text-primary-400 transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 text-sm hover:text-primary-400 transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 