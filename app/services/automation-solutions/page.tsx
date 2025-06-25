"use client";

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Workflow,
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
  Monitor,
  Bell,
  Download,
  Star,
  Calendar,
  Mail,
  FileText,
  Phone,
  ChevronRight,
  Eye
} from 'lucide-react';

export default function AutomationSolutionsPage() {
  const benefits = [
    { icon: Clock, title: "Save 40+ Hours Weekly", description: "Automate repetitive tasks and focus on strategy", color: "text-green-500" },
    { icon: Zap, title: "Instant Processing", description: "Real-time automation with immediate responses", color: "text-blue-500" },
    { icon: Target, title: "Eliminate Human Errors", description: "99.9% accuracy with automated workflows", color: "text-purple-500" },
    { icon: TrendingUp, title: "Scale Without Hiring", description: "Handle increased workload automatically", color: "text-orange-500" }
  ];

  const processSteps = [
    { step: 1, title: "Process Analysis", description: "Identify manual tasks and bottlenecks", icon: Lightbulb, color: "from-orange-500 to-red-500" },
    { step: 2, title: "Workflow Design", description: "Map out automated processes and triggers", icon: Target, color: "from-purple-500 to-pink-500" },
    { step: 3, title: "Integration Setup", description: "Connect APIs and data sources", icon: Code, color: "from-green-500 to-emerald-500" },
    { step: 4, title: "Testing & Validation", description: "Test workflows with real data", icon: Settings, color: "from-blue-500 to-cyan-500" },
    { step: 5, title: "Deployment", description: "Launch automation with monitoring", icon: Rocket, color: "from-indigo-500 to-purple-500" },
    { step: 6, title: "Optimization", description: "Monitor and improve performance", icon: TrendingUp, color: "from-cyan-500 to-blue-500" }
  ];

  const projects = [
    { 
      name: "CRM Automation", 
      description: "Automated lead processing and customer management with smart routing",
      outcome: "40 hours/week saved, 95% accuracy, 3x faster processing",
      icon: Settings,
      color: "from-orange-500 to-red-500"
    },
    { 
      name: "Data Pipeline", 
      description: "Automated data collection and processing system with real-time sync",
      outcome: "100% data accuracy, 24/7 processing, 80% cost reduction",
      icon: Database,
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Email Marketing Bot", 
      description: "AI-powered email campaign automation with personalization",
      outcome: "300% open rate increase, 50% time savings, 25% more conversions",
      icon: Mail,
      color: "from-green-500 to-emerald-500"
    }
  ];

  const technologies = ["Python", "Zapier", "Make", "Node.js", "REST APIs", "Webhooks", "AWS Lambda", "Supabase", "Airtable"];

  const testimonials = [
    { name: "David Kim", company: "FinanceFlow", text: "The automation solutions saved us 40 hours per week in manual processes", rating: 5 },
    { name: "Sarah Johnson", company: "TechStart Inc.", text: "Incredible efficiency gains with seamless workflow automation", rating: 5 }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* 🔝 1. Hero Section - Instant Value + CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-orange-500/5 to-red-500/5 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
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
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center animate-pulse">
                  <Workflow className="w-10 h-10 text-white" />
                </div>
                <div className="text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                      ⚙️ Smart Automation Solutions
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground mt-4 max-w-3xl">
                    Eliminate repetitive tasks and boost productivity with intelligent workflow automation.
                  </p>
                </div>
              </div>

              {/* Quick value props */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="px-4 py-2 text-base border-green-500/20 bg-green-500/10">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  40+ hours saved weekly
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base border-blue-500/20 bg-blue-500/10">
                  <CheckCircle className="w-4 h-4 mr-2 text-blue-500" />
                  99.9% accuracy
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-base border-purple-500/20 bg-purple-500/10">
                  <CheckCircle className="w-4 h-4 mr-2 text-purple-500" />
                  24/7 processing
                </Badge>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group"
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
                  className="border-2 border-orange-500/20 hover:border-orange-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6 group"
                >
                  <Link href="/portfolio" className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                    <span>See Automation Examples</span>
                  </Link>
                </Button>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">40+ hours</div>
                  <div className="text-sm text-muted-foreground">Weekly Time Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">3-5 days</div>
                  <div className="text-sm text-muted-foreground">Simple Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-1">80%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 📊 2. Quick Benefits */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-orange-500/5 to-red-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Automation Transforms Businesses</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Transform manual processes into efficient, automated workflows that save time and reduce errors.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="group border border-border/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-orange-500/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
              <Card className="border-2 border-orange-500/20 shadow-2xl bg-gradient-to-br from-background/95 to-orange-500/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl flex items-center justify-center space-x-3">
                    <span className="text-2xl">🎯</span>
                    <span>What We Deliver</span>
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Eliminate repetitive tasks and boost productivity with smart automation solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      "Task scheduling & triggers for automated workflows",
                      "Process & data automation with error handling", 
                      "Third-party API integration and data sync",
                      "Notifications & logging for complete visibility"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl">
                        <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
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
        <section className="py-20 bg-gradient-to-br from-background via-red-500/5 to-orange-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Automation Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From manual process analysis to fully automated workflows, we streamline your operations step by step.
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
                      <div className="absolute top-8 left-16 w-24 h-0.5 bg-gradient-to-r from-orange-500/50 to-transparent"></div>
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
                          <td className="py-4 px-6">Simple Automation</td>
                          <td className="py-4 px-6 font-semibold text-green-600">3–5 days</td>
                        </tr>
                        <tr>
                          <td className="py-4 px-6">Complex Workflow Setup</td>
                          <td className="py-4 px-6 font-semibold text-green-600">1–2 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                    <p className="text-center">
                      <Clock className="w-5 h-5 inline mr-2 text-blue-500" />
                      <strong>Need it faster?</strong> We offer expedited delivery for urgent automation needs.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 🚀 6. Sample Projects - Case Study Grid */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-orange-500/5 to-red-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Real Automation Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our automation solutions have transformed business operations and productivity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group border border-border/50 hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl cursor-pointer">
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
                    <Button variant="outline" className="w-full group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
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
                We create automation solutions that actually work and deliver measurable business results.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Trust factors */}
              <div className="space-y-6">
                {[
                  { icon: Clock, title: "Proven Time Savings", desc: "Average 40+ hours saved per week with our automation solutions" },
                  { icon: Target, title: "Error-Free Processing", desc: "99.9% accuracy with intelligent error handling and validation" },
                  { icon: Zap, title: "Real-Time Automation", desc: "Instant processing and immediate responses to triggers" },
                  { icon: TrendingUp, title: "Scalable Solutions", desc: "Automation that grows with your business needs" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-orange-500" />
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
        <section className="py-20 bg-gradient-to-br from-background via-orange-500/5 to-red-500/5">
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
                      <CardTitle>Automation Technology Stack</CardTitle>
                      <CardDescription>
                        Powerful automation tools and platforms for building robust, scalable workflow solutions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        We use industry-leading automation platforms and custom development to create 
                        workflows that integrate seamlessly with your existing systems and scale with your business.
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
                          <Badge key={index} variant="secondary" className="text-base px-4 py-2 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20">
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
                        <div className="text-center p-4 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-orange-600 mb-1">Starting from $5,000</div>
                          <div className="text-sm text-muted-foreground">Automation Solutions</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-1">40+ hours</div>
                          <div className="text-sm text-muted-foreground">Weekly Time Savings</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600 mb-1">3-5 days</div>
                          <div className="text-sm text-muted-foreground">Simple Automation</div>
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
        <section className="py-20 bg-gradient-to-br from-orange-500/5 via-background to-red-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Automate Your Workflows?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's eliminate manual tasks and boost your productivity with intelligent automation solutions 
                that save time and reduce errors.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 hover:from-orange-600 hover:via-red-600 hover:to-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg group"
                >
                  <Link href="/contact" className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>Start Automation</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500/20 hover:border-orange-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6"
                >
                  <Link href="/portfolio" className="flex items-center space-x-2">
                    <Sparkles className="w-5 h-5" />
                    <span>View Automation Portfolio</span>
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