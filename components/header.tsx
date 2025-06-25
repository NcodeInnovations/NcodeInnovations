"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Zap, 
  ChevronDown,
  Smartphone,
  Brain,
  Globe,
  Bot,
  Workflow
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ultra-aggressive preloading for instant navigation
  useEffect(() => {
    const routes = [
      '/',
      '/about',
      '/portfolio',
      '/contact',
      '/blog',
      '/services',
      '/services/ai-powered-solutions',
      '/services/web-development',
      '/services/mobile-development',
      '/services/automation-solutions',
      '/services/ai-agents-chatbots'
    ];
    
    // Preload all routes immediately
    routes.forEach(route => {
      router.prefetch(route);
    });

    // Preload on hover for instant navigation
    const handleLinkHover = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a, button');
      if (link) {
        const href = link.getAttribute('href') || link.getAttribute('data-href');
        if (href && href.startsWith('/')) {
          router.prefetch(href);
        }
      }
    };

    document.addEventListener('mouseover', handleLinkHover);
    return () => document.removeEventListener('mouseover', handleLinkHover);
  }, [router]);

  const services = [
    { name: 'AI-Powered Solutions', href: '/services/ai-powered-solutions', icon: Brain },
    { name: 'Web Development', href: '/services/web-development', icon: Globe },
    { name: 'Mobile Apps', href: '/services/mobile-development', icon: Smartphone },
    { name: 'Automation', href: '/services/automation-solutions', icon: Workflow },
    { name: 'AI Agents', href: '/services/ai-agents-chatbots', icon: Bot },
  ];

  // Ultra-fast navigation with instant transitions
  const handleNavigation = (href: string) => {
    if (pathname === href) return; // Don't navigate if already on the page
    
    // Close mobile menu immediately
    setIsMobileMenuOpen(false);
    
    // Use router.push for instant client-side navigation
    router.push(href);
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('/')}
            className="flex items-center space-x-2 group cursor-pointer"
            data-href="/"
          >
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ncode <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">Innovations</span>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/')}
              className={`transition-colors duration-200 font-medium cursor-pointer ${
                pathname === '/' ? 'text-purple-500' : 'text-foreground/80 hover:text-foreground'
              }`}
              data-href="/"
            >
              Home
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <button
                      onClick={() => handleNavigation(service.href)}
                      className="flex items-center space-x-2 w-full text-left hover:bg-purple-500/10 transition-colors duration-150 p-2"
                      data-href={service.href}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button 
              onClick={() => handleNavigation('/portfolio')}
              className={`transition-colors duration-200 font-medium cursor-pointer ${
                pathname === '/portfolio' ? 'text-purple-500' : 'text-foreground/80 hover:text-foreground'
              }`}
              data-href="/portfolio"
            >
              Portfolio
            </button>
            
            <button 
              onClick={() => handleNavigation('/contact')}
              className={`transition-colors duration-200 font-medium cursor-pointer ${
                pathname === '/contact' ? 'text-purple-500' : 'text-foreground/80 hover:text-foreground'
              }`}
              data-href="/contact"
            >
              Contact
            </button>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* CTA Button */}
            <Button 
              onClick={() => handleNavigation('/contact')}
              className="hidden sm:inline-flex bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              data-href="/contact"
            >
              Get Started
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-border/50">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('/')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left"
                data-href="/"
              >
                Home
              </button>
              <div className="space-y-2">
                <span className="text-sm font-semibold text-muted-foreground">Services</span>
                {services.map((service) => (
                  <button
                    key={service.name}
                    onClick={() => handleNavigation(service.href)}
                    className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-200 pl-4 w-full text-left"
                    data-href={service.href}
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </button>
                ))}
              </div>
              <button 
                onClick={() => handleNavigation('/portfolio')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left"
                data-href="/portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => handleNavigation('/contact')}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium text-left"
                data-href="/contact"
              >
                Contact
              </button>
              <Button 
                onClick={() => handleNavigation('/contact')}
                className="mt-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 text-white"
                data-href="/contact"
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}