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
  Palette,
  Monitor,
  Smartphone,
  Search,
  ExternalLink,
  Github,
  Play,
  Award,
  Target,
  Lightbulb,
  Settings,
  Rocket,
  Gauge,
  Eye
} from 'lucide-react';

export default function CreativeAgencyWebsitePage() {
  const projectStats = [
    { label: "PageSpeed Score", value: "99/100", icon: Gauge, color: "text-green-500" },
    { label: "Lead Increase", value: "+300%", icon: TrendingUp, color: "text-blue-500" },
    { label: "Bounce Rate", value: "-45%", icon: Target, color: "text-purple-500" },
    { label: "Mobile Score", value: "100/100", icon: Smartphone, color: "text-orange-500" }
  ];

  const technologies = [
    { name: "Next.js", category: "Framework", description: "React-based framework for production" },
    { name: "Framer Motion", category: "Animation", description: "Advanced animations and interactions" },
    { name: "Tailwind CSS", category: "Styling", description: "Utility-first CSS framework" },
    { name: "Sanity CMS", category: "Content", description: "Headless content management" },
    { name: "Vercel", category: "Deployment", description: "Edge deployment and optimization" }
  ];

  const features = [
    { title: "Stunning Visual Design", description: "Award-winning design with modern aesthetics and creative layouts", icon: Palette },
    { title: "Advanced Animations", description: "Smooth micro-interactions and scroll-triggered animations", icon: Zap },
    { title: "Performance Optimized", description: "99/100 PageSpeed score with optimized loading and rendering", icon: Gauge },
    { title: "Mobile Excellence", description: "Perfect mobile experience with touch-optimized interactions", icon: Smartphone },
    { title: "SEO Mastery", description: "Advanced SEO optimization for maximum search visibility", icon: Search },
    { title: "CMS Integration", description: "Easy content management with headless CMS architecture", icon: Database }
  ];

  const challenges = [
    {
      challenge: "Complex Animations",
      solution: "Implemented Framer Motion with optimized performance and reduced bundle size",
      impact: "Smooth 60fps animations without performance impact"
    },
    {
      challenge: "Image Optimization",
      solution: "Advanced image optimization with Next.js Image component and WebP conversion",
      impact: "75% reduction in image load times"
    },
    {
      challenge: "SEO for Creative Content",
      solution: "Structured data implementation and dynamic meta optimization",
      impact: "300% increase in organic traffic"
    }
  ];

  const timeline = [
    { phase: "Creative Discovery", duration: "1 week", description: "Brand analysis and creative direction planning" },
    { phase: "Design & Prototyping", duration: "3 weeks", description: "Visual design and interactive prototypes" },
    { phase: "Frontend Development", duration: "4 weeks", description: "Next.js development with animations" },
    { phase: "CMS Integration", duration: "1 week", description: "Sanity CMS setup and content structure" },
    { phase: "Performance Optimization", duration: "1 week", description: "Speed optimization and SEO implementation" },
    { phase: "Launch & Analytics", duration: "1 week", description: "Deployment and analytics setup" }
  ];

  const designElements = [
    { name: "Interactive Portfolio", icon: Eye, description: "Dynamic project showcases" },
    { name: "Smooth Scrolling", icon: Monitor, description: "Buttery smooth scroll experience" },
    { name: "Hover Effects", icon: Zap, description: "Engaging micro-interactions" },
    { name: "Responsive Grid", icon: Smartphone, description: "Adaptive layout system" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-pink-500/5 to-purple-500/5">
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
                  <Badge className="mb-4 bg-pink-500/10 text-pink-600 border-pink-500/20">
                    Web Development
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                      Creative Agency Website
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Modern, interactive portfolio website with stunning animations and performance optimization. 
                    Built for a creative agency to showcase their work and attract premium clients.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-pink-500 hover:bg-pink-600">
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
                  <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl border border-pink-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 text-pink-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Website Preview</p>
                      <p className="text-muted-foreground">Interactive design showcase</p>
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

        {/* Design Elements Overview */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-pink-500/5 to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Creative Design Excellence</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Stunning visual design combined with cutting-edge web technologies for an unforgettable user experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {designElements.map((element, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full flex items-center justify-center">
                      <element.icon className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{element.name}</h3>
                    <p className="text-sm text-muted-foreground">{element.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Details */}
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
                        <Target className="w-6 h-6 text-pink-500" />
                        <span>Project Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                        <p className="text-muted-foreground">
                          Create a visually stunning portfolio website for a creative agency that showcases their work 
                          in an engaging way, loads incredibly fast, and converts visitors into high-value clients. 
                          The site needed to reflect the agency's creative excellence while maintaining top performance.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Built a Next.js website with Framer Motion animations, optimized for performance and SEO. 
                          Implemented a headless CMS for easy content management, advanced image optimization, 
                          and created an immersive user experience with smooth animations and interactions.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((item, index) => (
                            <div key={index} className="p-4 bg-pink-500/5 rounded-lg border border-pink-500/20">
                              <h4 className="font-semibold text-pink-600 mb-2">{item.challenge}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.solution}</p>
                              <p className="text-sm font-medium text-pink-600">{item.impact}</p>
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
                            <div className="w-10 h-10 bg-pink-500/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-pink-500" />
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
                        <Code className="w-6 h-6 text-pink-500" />
                        <span>Technology Stack</span>
                      </CardTitle>
                      <CardDescription>
                        Modern web technologies for performance, animations, and content management.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                          <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-pink-500/30 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-pink-500/5 rounded-lg border border-pink-500/20">
                        <h3 className="text-lg font-semibold mb-4">Performance Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-pink-500" />
                            <span>99/100 Google PageSpeed score</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-pink-500" />
                            <span>Advanced image optimization with WebP</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-pink-500" />
                            <span>Smooth 60fps animations</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-pink-500" />
                            <span>SEO optimized with structured data</span>
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
                        <Rocket className="w-6 h-6 text-pink-500" />
                        <span>Development Process</span>
                      </CardTitle>
                      <CardDescription>
                        11-week development timeline from creative concept to launch.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeline.map((phase, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg border border-pink-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-pink-500" />
                          <span>Performance Results</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-pink-600">99/100</div>
                            <div className="text-sm text-muted-foreground">PageSpeed Score</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-pink-600">+300%</div>
                            <div className="text-sm text-muted-foreground">Lead Increase</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-pink-600">-45%</div>
                            <div className="text-sm text-muted-foreground">Bounce Rate</div>
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
        <section className="py-20 bg-gradient-to-br from-pink-500/5 to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Create Your Stunning Website?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's build a visually impressive website that combines beautiful design with exceptional performance and user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your Website Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-pink-500/20 hover:border-pink-500/40 px-8 py-6 text-lg"
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