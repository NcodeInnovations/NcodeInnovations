"use client";

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ArrowLeft,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Code,
  Database,
  Zap,
  Shield,
  Smartphone,
  Search,
  CreditCard,
  BarChart3,
  ExternalLink,
  Github,
  Play,
  Award,
  Target,
  Lightbulb,
  Settings,
  Rocket
} from 'lucide-react';

export default function EcoCommercePlatformPage() {
  const projectStats = [
    { label: "Users", value: "10K+", icon: Users, color: "text-blue-500" },
    { label: "Conversion Rate", value: "25%", icon: TrendingUp, color: "text-green-500" },
    { label: "Performance Score", value: "98%", icon: Zap, color: "text-purple-500" },
    { label: "Uptime", value: "99.9%", icon: Shield, color: "text-orange-500" }
  ];

  const technologies = [
    { name: "React", category: "Frontend", description: "Modern UI with hooks and context" },
    { name: "Node.js", category: "Backend", description: "Scalable server-side JavaScript" },
    { name: "MongoDB", category: "Database", description: "Flexible document database" },
    { name: "Stripe", category: "Payments", description: "Secure payment processing" },
    { name: "AI/ML", category: "Intelligence", description: "Product recommendations engine" }
  ];

  const features = [
    { title: "AI-Powered Recommendations", description: "Machine learning algorithms analyze user behavior to suggest relevant products", icon: Lightbulb },
    { title: "Carbon Footprint Tracking", description: "Real-time calculation and display of environmental impact for each purchase", icon: Target },
    { title: "Secure Payment Processing", description: "Multiple payment methods with PCI-compliant security", icon: CreditCard },
    { title: "Mobile-First Design", description: "Responsive design optimized for mobile shopping experience", icon: Smartphone },
    { title: "Advanced Analytics", description: "Comprehensive dashboard for sales, user behavior, and environmental metrics", icon: BarChart3 },
    { title: "SEO Optimized", description: "Built for search engines with structured data and fast loading", icon: Search }
  ];

  const challenges = [
    {
      challenge: "Complex AI Integration",
      solution: "Implemented TensorFlow.js for client-side recommendations with fallback to server-side processing",
      impact: "300% increase in product discovery"
    },
    {
      challenge: "Real-time Carbon Tracking",
      solution: "Built custom API integrating with multiple environmental databases",
      impact: "First-of-its-kind feature in e-commerce"
    },
    {
      challenge: "Performance at Scale",
      solution: "Implemented Redis caching and CDN optimization",
      impact: "98% performance score with 10K+ users"
    }
  ];

  const timeline = [
    { phase: "Discovery & Planning", duration: "1 week", description: "Requirements gathering and technical architecture" },
    { phase: "UI/UX Design", duration: "2 weeks", description: "User experience design and prototyping" },
    { phase: "Frontend Development", duration: "3 weeks", description: "React components and user interface" },
    { phase: "Backend Development", duration: "3 weeks", description: "API development and database design" },
    { phase: "AI Integration", duration: "2 weeks", description: "Machine learning recommendations engine" },
    { phase: "Testing & Launch", duration: "1 week", description: "Quality assurance and deployment" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-green-500/5 to-emerald-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-8">
              <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground group">
                <Link href="/portfolio" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  <span>Back to Portfolio</span>
                </Link>
              </Button>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <Badge className="mb-4 bg-green-500/10 text-green-600 border-green-500/20">
                    Full-Stack E-commerce
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                      EcoCommerce Platform
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    A sustainable e-commerce platform with AI-powered product recommendations and 
                    real-time carbon footprint tracking. Built for environmentally conscious consumers.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-green-500 hover:bg-green-600">
                      <Link href="#" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live Site</span>
                      </Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link href="#" className="flex items-center space-x-2">
                        <Github className="w-4 h-4" />
                        <span>View Code</span>
                      </Link>
                    </Button>
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {projectStats.map((stat, index) => (
                      <div key={index} className="text-center p-4 bg-background/50 rounded-lg border border-border/50">
                        <stat.icon className={`w-6 h-6 ${stat.color} mx-auto mb-2`} />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Globe className="w-16 h-16 text-green-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Interactive Demo</p>
                      <p className="text-muted-foreground">Click to explore the platform</p>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/30 text-white opacity-0 hover:opacity-100 transition-opacity duration-300"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="technology">Technology</TabsTrigger>
                  <TabsTrigger value="process">Process</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Target className="w-6 h-6 text-green-500" />
                        <span>Project Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                        <p className="text-muted-foreground">
                          Create a modern e-commerce platform that not only provides excellent shopping experience 
                          but also helps customers make environmentally conscious decisions through AI-powered 
                          recommendations and carbon footprint tracking.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Built a full-stack e-commerce platform using React and Node.js with integrated AI 
                          recommendation engine and real-time carbon footprint calculation. The platform 
                          features sustainable product discovery and environmental impact awareness.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((item, index) => (
                            <div key={index} className="p-4 bg-green-500/5 rounded-lg border border-green-500/20">
                              <h4 className="font-semibold text-green-600 mb-2">{item.challenge}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.solution}</p>
                              <p className="text-sm font-medium text-green-600">{item.impact}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="features" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-green-500" />
                            </div>
                            <span className="text-lg">{feature.title}</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="technology" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Code className="w-6 h-6 text-green-500" />
                        <span>Technology Stack</span>
                      </CardTitle>
                      <CardDescription>
                        Modern technologies chosen for performance, scalability, and developer experience.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                          <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-green-500/30 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-green-500/5 rounded-lg border border-green-500/20">
                        <h3 className="text-lg font-semibold mb-4">Architecture Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Microservices architecture for scalability</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Redis caching for performance optimization</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>CDN integration for global content delivery</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span>Real-time data synchronization</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="process" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Rocket className="w-6 h-6 text-green-500" />
                        <span>Development Process</span>
                      </CardTitle>
                      <CardDescription>
                        12-week development timeline from concept to launch.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeline.map((phase, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold">{phase.phase}</h3>
                                <Badge variant="outline">{phase.duration}</Badge>
                              </div>
                              <p className="text-muted-foreground">{phase.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-green-500" />
                          <span>Project Results</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">300%</div>
                            <div className="text-sm text-muted-foreground">Conversion Increase</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">50%</div>
                            <div className="text-sm text-muted-foreground">Faster Load Times</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-green-600">10K+</div>
                            <div className="text-sm text-muted-foreground">Active Users</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your E-commerce Platform?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create a powerful e-commerce solution that drives sales and delivers exceptional user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-green-500/20 hover:border-green-500/40 px-8 py-6 text-lg"
                >
                  <Link href="/portfolio">View More Projects</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}