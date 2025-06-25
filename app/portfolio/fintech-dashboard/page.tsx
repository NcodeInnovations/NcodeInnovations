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
  BarChart3,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Code,
  Database,
  Zap,
  Shield,
  DollarSign,
  Activity,
  PieChart,
  LineChart,
  ExternalLink,
  Github,
  Play,
  Award,
  Target,
  Lightbulb,
  Settings,
  Rocket,
  Clock,
  Eye
} from 'lucide-react';

export default function FinTechDashboardPage() {
  const projectStats = [
    { label: "Data Points", value: "1M+", icon: Database, color: "text-blue-500" },
    { label: "Latency", value: "<100ms", icon: Zap, color: "text-green-500" },
    { label: "Uptime", value: "99.9%", icon: Shield, color: "text-purple-500" },
    { label: "Users", value: "5K+", icon: Users, color: "text-orange-500" }
  ];

  const technologies = [
    { name: "React", category: "Frontend", description: "Modern UI with hooks and context" },
    { name: "D3.js", category: "Visualization", description: "Advanced data visualization library" },
    { name: "PostgreSQL", category: "Database", description: "Robust relational database" },
    { name: "Redis", category: "Caching", description: "High-performance data caching" },
    { name: "Docker", category: "DevOps", description: "Containerized deployment" }
  ];

  const features = [
    { title: "Real-time Analytics", description: "Live financial data updates with sub-second latency", icon: Activity },
    { title: "Advanced Charting", description: "Interactive charts and graphs with D3.js visualizations", icon: BarChart3 },
    { title: "Risk Management", description: "Comprehensive risk assessment and monitoring tools", icon: Shield },
    { title: "Portfolio Tracking", description: "Multi-asset portfolio management and performance tracking", icon: PieChart },
    { title: "Custom Reports", description: "Automated report generation with export capabilities", icon: LineChart },
    { title: "Security First", description: "Bank-grade security with encryption and compliance", icon: Shield }
  ];

  const challenges = [
    {
      challenge: "Real-time Data Processing",
      solution: "Implemented WebSocket connections with Redis caching for instant data updates",
      impact: "Sub-100ms latency for live financial data"
    },
    {
      challenge: "Complex Visualizations",
      solution: "Built custom D3.js components with React integration for interactive charts",
      impact: "Intuitive data exploration with 50+ chart types"
    },
    {
      challenge: "Scalability Requirements",
      solution: "Microservices architecture with Docker containerization and load balancing",
      impact: "Handles 1M+ data points with 99.9% uptime"
    }
  ];

  const timeline = [
    { phase: "Requirements Analysis", duration: "2 weeks", description: "Financial workflow analysis and compliance requirements" },
    { phase: "System Architecture", duration: "2 weeks", description: "Scalable architecture design and technology selection" },
    { phase: "Core Development", duration: "8 weeks", description: "Dashboard development with real-time capabilities" },
    { phase: "Data Visualization", duration: "4 weeks", description: "Advanced charting and analytics implementation" },
    { phase: "Security & Compliance", duration: "3 weeks", description: "Security hardening and regulatory compliance" },
    { phase: "Testing & Deployment", duration: "2 weeks", description: "Performance testing and production deployment" }
  ];

  const dashboardFeatures = [
    { name: "Portfolio Overview", icon: PieChart, description: "Comprehensive portfolio analytics" },
    { name: "Market Data", icon: TrendingUp, description: "Real-time market information" },
    { name: "Risk Analytics", icon: Shield, description: "Advanced risk assessment" },
    { name: "Performance Reports", icon: BarChart3, description: "Detailed performance metrics" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-blue-500/5 to-cyan-500/5">
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
                  <Badge className="mb-4 bg-blue-500/10 text-blue-600 border-blue-500/20">
                    Full-Stack Dashboard
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      FinTech Dashboard
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Comprehensive financial analytics dashboard with real-time data visualization and reporting. 
                    Built for institutional investors and financial professionals.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-blue-500 hover:bg-blue-600">
                      <Link href="#" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live Demo</span>
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
                  <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <BarChart3 className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Dashboard Preview</p>
                      <p className="text-muted-foreground">Interactive financial analytics</p>
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

        {/* Dashboard Features Overview */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-blue-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Financial Analytics Platform</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive financial data visualization and analytics tools for informed decision making.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {dashboardFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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
                        <Target className="w-6 h-6 text-blue-500" />
                        <span>Project Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                        <p className="text-muted-foreground">
                          Build a comprehensive financial analytics dashboard that can process and visualize 
                          millions of data points in real-time, provide advanced charting capabilities, 
                          and maintain bank-grade security while delivering exceptional user experience.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Developed a React-based dashboard with D3.js visualizations, PostgreSQL database 
                          with Redis caching, and microservices architecture. Implemented real-time data 
                          streaming, advanced security measures, and responsive design for all devices.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((item, index) => (
                            <div key={index} className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/20">
                              <h4 className="font-semibold text-blue-600 mb-2">{item.challenge}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.solution}</p>
                              <p className="text-sm font-medium text-blue-600">{item.impact}</p>
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
                            <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-blue-500" />
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
                        <Code className="w-6 h-6 text-blue-500" />
                        <span>Technology Stack</span>
                      </CardTitle>
                      <CardDescription>
                        Enterprise-grade technologies for financial data processing and visualization.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                          <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-blue-500/30 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-blue-500/5 rounded-lg border border-blue-500/20">
                        <h3 className="text-lg font-semibold mb-4">Architecture Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>Microservices architecture for scalability</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>Real-time WebSocket data streaming</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>Redis caching for performance</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>Bank-grade security and encryption</span>
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
                        <Rocket className="w-6 h-6 text-blue-500" />
                        <span>Development Process</span>
                      </CardTitle>
                      <CardDescription>
                        21-week development timeline from requirements to production deployment.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeline.map((phase, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-blue-500" />
                          <span>Performance Metrics</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">1M+</div>
                            <div className="text-sm text-muted-foreground">Data Points</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">&lt;100ms</div>
                            <div className="text-sm text-muted-foreground">Latency</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">99.9%</div>
                            <div className="text-sm text-muted-foreground">Uptime</div>
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
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your Analytics Dashboard?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create a powerful analytics platform that processes complex data and delivers actionable insights for your business.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your Dashboard Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-blue-500/20 hover:border-blue-500/40 px-8 py-6 text-lg"
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