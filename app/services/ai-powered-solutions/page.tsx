"use client";

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  Zap,
  Target,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Settings,
  Rocket,
  Code,
  Sparkles,
  Play,
  Award,
  TrendingUp,
  Shield,
  Database,
  Cpu,
  ArrowLeft,
  Phone,
  Calendar,
  Star,
  ChevronRight,
  Eye,
  Gauge,
  Bot,
  Workflow
} from 'lucide-react';

export default function AIPoweredSolutionsPage() {
  const benefits = [
    { icon: Zap, title: "Automate Time-Consuming Tasks", description: "Eliminate repetitive work and focus on strategy", color: "text-yellow-500" },
    { icon: TrendingUp, title: "Predict Future Trends Accurately", description: "Make data-driven decisions with confidence", color: "text-green-500" },
    { icon: Bot, title: "Engage Users with AI Agents", description: "24/7 intelligent customer interactions", color: "text-blue-500" },
    { icon: Shield, title: "Secure & Scalable Cloud Models", description: "Enterprise-grade security and performance", color: "text-purple-500" }
  ];

  const processSteps = [
    { step: 1, title: "Data Assessment", description: "Analyze your data sources and quality", icon: Database, color: "from-blue-500 to-cyan-500" },
    { step: 2, title: "AI Strategy", description: "Design custom AI models for your needs", icon: Target, color: "from-purple-500 to-pink-500" },
    { step: 3, title: "Model Development", description: "Build and train AI models", icon: Code, color: "from-green-500 to-emerald-500" },
    { step: 4, title: "Testing & Validation", description: "Rigorous testing and performance optimization", icon: Settings, color: "from-orange-500 to-red-500" },
    { step: 5, title: "Deployment", description: "Deploy to production with monitoring", icon: Rocket, color: "from-indigo-500 to-purple-500" },
    { step: 6, title: "Optimization", description: "Continuous improvement and scaling", icon: TrendingUp, color: "from-cyan-500 to-blue-500" }
  ];

  const projects = [
    { 
      name: "AI Analytics Platform", 
      description: "Advanced predictive analytics with machine learning models for business intelligence",
      outcome: "95% accuracy, 10x faster insights",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Computer Vision System", 
      description: "Real-time image recognition and processing solution for quality control",
      outcome: "99.2% detection rate, <100ms processing",
      icon: Eye,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "NLP Document Processor", 
      description: "Intelligent document analysis and extraction system for legal firms",
      outcome: "80% time savings, 97% accuracy",
      icon: MessageSquare,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const technologies = ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Hugging Face", "AWS", "Azure", "Supabase"];

  const testimonials = [
    { name: "Sarah Johnson", company: "TechStart Inc.", text: "Their AI solution increased our efficiency by 300%", rating: 5 },
    { name: "Michael Chen", company: "DataCorp", text: "Incredible results with predictive analytics", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* 🔝 1. Hero Section - Instant Value + CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-purple-500/5 to-pink-500/5 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <div className="mb-8">
              <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground group">
                <Link href="/" className="flex items-center space-x-2">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
                  <span>Back to Home</span>
                </Link>
              </Button>
            </div>

            <div className="max-w-6xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-4 mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center animate-pulse">
                  <Brain className="w-10 h-10 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                      🧠 AI-Powered Business Tools
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
                    Boost efficiency, automate decisions, and gain deep insights with our tailored AI solutions.
                  </p>
                </div>
              </div>

              {/* Quick value props */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="px-4 py-2 text-base border-green-500/20 bg-green-500/10">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Real-time predictions
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base border-blue-500/20 bg-blue-500/10">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                  NLP & automation
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base border-purple-500/20 bg-purple-500/10">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
                  Scalable & secure
                </Badge>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group"
                >
                  <Link href="/contact" className="flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Get a Free Consultation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/20 hover:border-purple-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6 group"
                >
                  <Link href="/portfolio" className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                    <span>See Real Projects in Action</span>
                  </Link>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">10x</div>
                  <div className="text-sm text-muted-foreground">Faster Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">AI Operations</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📊 2. Quick Benefits */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-purple-500/5 to-pink-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why AI Matters for Your Business</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform your operations with intelligent automation that delivers measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 🧩 3. What We Offer */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-purple-500/20 shadow-2xl bg-gradient-to-br from-background/95 to-purple-500/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl flex items-center justify-center space-x-3">
                    <span className="text-2xl">🎯</span>
                    <span>What We Deliver</span>
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Custom AI solutions designed to solve real business problems using intelligent models.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Custom AI Models tailored to your data",
                      "Machine Learning pipelines for automation", 
                      "Predictive Analytics for future insights",
                      "Natural Language Processing for communication"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 🛠️ 4. How We Build It - Visual Timeline */}
        <section className="py-20 bg-gradient-to-br from-background via-blue-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our AI Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures successful AI implementation and measurable results.
              </p>
            </div>
            
            {/* Horizontal timeline for desktop */}
            <div className="hidden lg:block">
              <div className="flex items-center justify-between mb-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative group">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <step.icon className="w-8 h-8" />
                    </div>
                    <div className="text-center max-w-32">
                      <h3 className="font-semibold text-sm mb-1">{step.title}</h3>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="absolute top-8 left-16 w-24 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Vertical timeline for mobile */}
            <div className="lg:hidden space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 📆 5. Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-green-500/20 shadow-xl bg-gradient-to-br from-background/95 to-green-500/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl flex items-center justify-center space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <span>Project Timeline</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-green-500/20">
                          <th className="text-left py-4 px-6 font-semibold">Project Phase</th>
                          <th className="text-left py-4 px-6 font-semibold">Timeframe</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-green-500/10">
                          <td className="py-4 px-6">MVP AI Model</td>
                          <td className="py-4 px-6 font-semibold text-green-600">2–3 weeks</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6">Full Deployment</td>
                          <td className="py-4 px-6 font-semibold text-green-600">4–6 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/20">
                    <p className="text-center">
                      <Clock className="w-5 h-5 inline mr-2 text-orange-500" />
                      <strong>Need it faster?</strong> We offer expedited delivery for startups and pilots.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 🚀 6. Sample Projects - Case Study Grid */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-purple-500/5 to-pink-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real AI Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our AI solutions have transformed businesses and delivered measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl cursor-pointer">
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-4 border border-green-500/20 mb-4">
                      <div className="flex items-center space-x-2">
                        <Award className="w-5 h-5 text-green-600" />
                        <span className="font-semibold text-green-600">Results:</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{project.outcome}</p>
                    </div>
                    <Button variant="outline" className="w-full group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      <Eye className="w-4 h-4 mr-2" />
                      View Details
                      <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 🔁 7. Why Choose Us + Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Ncode Innovations?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're at the forefront of AI innovation, delivering solutions that transform businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Trust factors */}
              <div className="space-y-6">
                {[
                  { icon: Brain, title: "AI-First Approach", desc: "Every solution enhanced with cutting-edge AI technology" },
                  { icon: Zap, title: "Lightning Fast", desc: "Rapid development and deployment with proven methodologies" },
                  { icon: Users, title: "Expert AI Team", desc: "Specialists in machine learning and intelligent automation" },
                  { icon: Shield, title: "Future-Proof", desc: "Built with tomorrow's technology, scalable for growth" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonials */}
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="border border-border/50">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 🧰 8. Tech Stack - Collapsible */}
        <section className="py-20 bg-gradient-to-br from-background via-purple-500/5 to-pink-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="technologies">Technologies</TabsTrigger>
                  <TabsTrigger value="pricing">Pricing</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>AI Technology Stack</CardTitle>
                      <CardDescription>
                        Cutting-edge AI frameworks and tools for building robust, scalable solutions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We use the latest AI technologies including machine learning frameworks, 
                        natural language processing tools, and cloud infrastructure to deliver 
                        enterprise-grade AI solutions.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="technologies" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Technologies We Use</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-3">
                        {technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="text-base px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="pricing" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Investment & ROI</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">Starting from $8,000</div>
                          <div className="text-sm text-muted-foreground">Custom AI Solutions</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">300% ROI</div>
                          <div className="text-sm text-muted-foreground">Average Return</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-1">2-3 weeks</div>
                          <div className="text-sm text-muted-foreground">MVP Development</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-500/5 via-background to-pink-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how our AI-powered solutions can revolutionize your operations, 
                increase efficiency, and drive unprecedented growth.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 hover:from-purple-600 hover:via-pink-600 hover:to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group"
                >
                  <Link href="/contact" className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Start Your AI Project</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/20 hover:border-purple-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6"
                >
                  <Link href="/portfolio" className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>View AI Portfolio</span>
                  </Link>
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