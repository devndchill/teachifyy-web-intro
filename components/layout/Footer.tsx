'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Linkedin, Youtube, Twitter,  Send } from 'lucide-react';
import Button from '@/components/ui/Button';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setMessage('Thanks for subscribing!');
      setEmail('');
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 3000);
    }, 1000);
  };

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
    { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
    { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="bg-dark-50 border-t border-zinc-800">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-dark text-xl">
                L
              </div>
              <span className="text-xl font-bold text-white">
                LMS <span className="text-blue-500">Academy</span>
              </span>
            </Link>
            <p className="text-zinc-400 mb-6 max-w-md">
              Master modern web development with expert-led courses. Learn React, Next.js, TypeScript, and more to build production-ready applications.
            </p>
            
            {/* Newsletter */}
            {/* <div>
              <h3 className="text-white font-semibold mb-3">Subscribe to our newsletter</h3>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="input-field flex-1"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  isLoading={isSubmitting}
                  className="shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
              {message && (
                <p className="text-primary text-sm mt-2">{message}</p>
              )}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} LMS Academy. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
