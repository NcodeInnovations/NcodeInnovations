"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [email, setEmail] = useState('');

  // Aggressive preloading on component mount
  useEffect(() => {
    const routes = [
      '/services/ai-powered-solutions',
      '/services/web-development',
      '/services/mobile-development',
      '/services/automation-solutions',
      '/services/ai-agents-chatbots',
      '/about',
      '/portfolio',
      '/blog',
      '/contact',
      '/privacy',
      '/terms',
      '/cookies',
      '/ai-ethics'
    ];
    
    routes.forEach(route => {
      router.prefetch(route);
    });
  }, [router]);

  const footerLinks = {
    Services: [
      { name: 'AI-Powered Solutions', href: '/services/ai-powered-solutions' },
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'Mobile Apps', href: '/services/mobile-development' },
      { name: 'Automation', href: '/services/automation-solutions' },
      { name: 'AI Agents', href: '/services/ai-agents-chatbots' },
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    Resources: [
      { name: 'AI Documentation', href: '/blog' },
      { name: 'API Reference', href: '/blog' },
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'Support Center', href: '/contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'AI Ethics', href: '/ai-ethics' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-700' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-600' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-900 dark:hover:text-white' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'hr@ncodesolutionsinc.com', href: 'mailto:hr@ncodesolutionsinc.com' },
    { icon: Phone, text: '+1 410-988-6400', href: 'tel:+14109886400' },
    { icon: MapPin, text: 'MD, U.S.A', href: '#' },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      router.push('/contact');
    }
  };

  // Fast navigation handler
  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <button onClick={() => handleNavigation('/')} className="flex items-center space-x-2 mb-6 cursor-pointer">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse-soft"></div>
              </div>
              <span className="text-2xl font-bold">
                Ncode <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Innovations</span>
              </span>
            </button>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Leading the future of AI-powered solutions and intelligent automation. We transform businesses 
              with cutting-edge artificial intelligence, premium web development, and innovative digital experiences.
            </p>
            
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-purple-500 transition-colors duration-200 group"
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="group-hover:underline">{item.text}</span>
                  {item.href.startsWith('http') && (
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  )}
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-200 hover:bg-purple-500/10 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className="font-semibold text-foreground mb-4">{category}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => handleNavigation(link.href)}
                          className="text-muted-foreground hover:text-purple-500 transition-colors duration-200 text-sm hover:underline text-left"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Stay Ahead with AI Insights</h3>
              <p className="text-muted-foreground text-sm">
                Get the latest AI innovations, automation tips, and exclusive project updates.
              </p>
            </div>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="min-w-[250px] bg-muted/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <p>© {currentYear} Ncode Innovations. All rights reserved.</p>
              <p className="text-xs">Deployed on Vercel, AWS, Azure & more</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => handleNavigation('/privacy')}
                className="hover:text-purple-500 transition-colors duration-200"
              >
                Privacy
              </button>
              <button 
                onClick={() => handleNavigation('/terms')}
                className="hover:text-purple-500 transition-colors duration-200"
              >
                Terms
              </button>
              <button 
                onClick={() => handleNavigation('/ai-ethics')}
                className="hover:text-purple-500 transition-colors duration-200"
              >
                AI Ethics
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}