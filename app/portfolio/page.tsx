"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  Smartphone,
  Brain,
  Code2,
  ExternalLink,
  Github,
  ArrowRight,
  Filter,
  Star,
  Users,
  TrendingUp,
  Eye,
  ChevronRight
} from 'lucide-react';

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Filter },
    { id: 'web', name: 'Web Development', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
    { id: 'fullstack', name: 'Full-Stack', icon: Code2 },
  ];

  const projects = [
    {
      id: 1,
      title: "EcoCommerce Platform",
      description: "A sustainable e-commerce platform with AI-powered product recommendations and carbon footprint tracking.",
      category: "fullstack",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AI/ML"],
      metrics: { users: "10K+", conversion: "25%", performance: "98%" },
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/ecocommerce-platform"
    },
    {
      id: 2,
      title: "HealthTracker Mobile App",
      description: "Cross-platform mobile app for health monitoring with real-time data sync and wearable integration.",
      category: "mobile",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React Native", "Firebase", "HealthKit", "Push Notifications"],
      metrics: { downloads: "50K+", rating: "4.8/5", retention: "85%" },
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/healthtracker-mobile-app"
    },
    {
      id: 3,
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing for automated customer service and lead generation.",
      category: "ai",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "OpenAI", "Langchain", "FastAPI", "WebSocket"],
      metrics: { accuracy: "95%", response: "<2s", satisfaction: "92%" },
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/ai-customer-support-bot"
    },
    {
      id: 4,
      title: "Creative Agency Website",
      description: "Modern, interactive portfolio website with stunning animations and performance optimization.",
      category: "web",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
      metrics: { speed: "99/100", leads: "+300%", bounce: "-45%" },
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/creative-agency-website"
    },
    {
      id: 5,
      title: "FinTech Dashboard",
      description: "Comprehensive financial analytics dashboard with real-time data visualization and reporting.",
      category: "fullstack",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "D3.js", "PostgreSQL", "Redis", "Docker"],
      metrics: { data: "1M+ points", latency: "<100ms", uptime: "99.9%" },
      featured: true,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/fintech-dashboard"
    },
    {
      id: 6,
      title: "Learning Management System",
      description: "Full-featured LMS with video streaming, progress tracking, and interactive assessments.",
      category: "fullstack",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS S3", "WebRTC"],
      metrics: { students: "5K+", completion: "78%", engagement: "+200%" },
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/learning-management-system"
    },
    {
      id: 7,
      title: "Smart Home Mobile App",
      description: "IoT control app for smart home devices with voice commands and automation scheduling.",
      category: "mobile",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Flutter", "IoT Integration", "Voice Recognition", "Cloud Functions"],
      metrics: { devices: "100+ types", response: "<500ms", rating: "4.9/5" },
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/smart-home-mobile-app"
    },
    {
      id: 8,
      title: "Document AI Processor",
      description: "Automated document processing system with OCR, data extraction, and workflow automation.",
      category: "ai",
      image: "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "TensorFlow", "OCR", "Document AI", "REST API"],
      metrics: { accuracy: "97%", processing: "10x faster", cost: "-60%" },
      featured: false,
      liveUrl: "#",
      githubUrl: "#",
      detailUrl: "/portfolio/document-ai-processor"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2">
              Our Portfolio
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Showcasing Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Best Work
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore our portfolio of successful projects that have helped businesses 
              transform their digital presence and achieve remarkable results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our most impactful and innovative solutions that showcase our expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
              {featuredProjects.slice(0, 2).map((project) => (
                <Card key={project.id} className="group overflow-hidden border-2 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary/90 text-white">Featured</Badge>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{tech}</Badge>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="bg-muted/50 rounded-lg p-3">
                          <div className="font-semibold text-primary">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                        <span className="text-sm text-muted-foreground ml-2">5.0</span>
                      </div>
                      <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Link href={project.detailUrl}>
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">All Projects</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Browse through our complete portfolio organized by technology and industry.
              </p>
            </div>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 ${
                    activeFilter === category.id 
                      ? "bg-primary text-white" 
                      : "hover:bg-primary/10"
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-between items-center">
                        <Badge variant="secondary" className="bg-white/90 text-black">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </Badge>
                        <div className="flex space-x-2">
                          <Button size="icon" variant="secondary" className="w-8 h-8">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                          <Button size="icon" variant="secondary" className="w-8 h-8">
                            <Github className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">{tech}</Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{Object.values(project.metrics)[0]}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <TrendingUp className="w-4 h-4" />
                          <span>{Object.values(project.metrics)[1]}</span>
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="p-0 h-auto font-medium text-primary hover:underline">
                        <Link href={project.detailUrl} className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>Learn More</span>
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life. Our team is ready to tackle 
              your next challenge and deliver exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
              >
                <Link href="/contact">Start Your Project</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary/20 hover:border-primary/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6"
              >
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}