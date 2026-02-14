'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Linkedin, Youtube, Twitter, Send } from 'lucide-react';
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
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/teachifyy/', icon: Linkedin },
    // { name: 'YouTube', href: 'https://youtube.com', icon: Youtube },
    // { name: 'Twitter', href: 'https://twitter.com', icon: Twitter },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    // { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions' },
    // { name: 'Terms of Service', href: '/terms' },
    // { name: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-40 h-18 overflow-hidden rounded-lg">
                <img
                  src="/assets/logo.jpeg"
                  alt="Teachifyy Logo"
                  className="object-cover w-full h-full"
                />
              </div>
            </Link>
            <div className="space-y-2 text-gray-600">
              <p><span className="font-semibold">Address:</span> Jaipur | Delhi | Kolkata</p>
              <p><span className="font-semibold">Email:</span> <a href="mailto:Support@teachifyy.com" className="hover:text-primary transition-colors">Support@teachifyy.com</a></p>
              <p><span className="font-semibold">Contact:</span> +917877447884 | +916291507718</p>
              <p><span className="font-semibold">Part of CLAREMONT EDUCATION LLP</span></p>
            </div>

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
            <h3 className="text-dark-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-dark-900 font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Teachifyy. All rights reserved.
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
                  className="text-gray-600 hover:text-primary transition-colors"
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
