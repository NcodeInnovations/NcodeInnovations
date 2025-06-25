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
  Bot,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Code,
  Database,
  Zap,
  Shield,
  MessageSquare,
  Brain,
  Bell,
  ExternalLink,
  Github,
  Play,
  Award,
  Target,
  Lightbulb,
  Settings,
  Rocket,
  Phone,
  Mail
} from 'lucide-react';

export default function AICustomerSupportBotPage() {
  const projectStats = [
    { label: "Query Resolution", value: "90%", icon: Target, color: "text-green-500" },
    { label: "Availability", value: "24/7", icon: Clock, color: "text-blue-500" },
    { label: "Cost Reduction", value: "60%", icon: TrendingUp, color: "text-purple-500" },
    { label: "Response Time", value: "<2s", icon: Zap, color: "text-orange-500" }
  ];

  const technologies = [
    { name: "Python", category: "Backend", description: "AI model development and API services" },
    { name: "OpenAI GPT-4", category: "AI Model", description: "Advanced natural language processing" },
    { name: "Langchain", category: "Framework", description: "LLM application development framework" },
    { name: "FastAPI", category: "API", description: "High-performance API development" },
    { name: "WebSocket", category: "Real-time", description: "Real-time chat communication" }
  ];

  const features = [
    { title: "Natural Language Understanding", description: "Advanced NLP capabilities to understand customer intent and context", icon: Brain },
    { title: "24/7 Automated Support", description: "Round-the-clock customer service without human intervention", icon: Clock },
    { title: "Human Handoff", description: "Seamless escalation to human agents when needed", icon: Users },
    { title: "Multi-language Support", description: "Communicate with customers in their preferred language", icon: MessageSquare },
    { title: "Learning & Improvement", description: "Continuous learning from interactions to improve responses", icon: Lightbulb },
    { title: "Integration Ready", description: "Easy integration with existing CRM and support systems", icon: Settings }
  ];

  const challenges = [
    {
      challenge: "Context Understanding",
      solution: "Implemented advanced conversation memory and context tracking using vector databases",
      impact: "95% accuracy in understanding customer intent"
    },
    {
      challenge: "Human-like Responses",
      solution: "Fine-tuned GPT-4 with company-specific data and conversation patterns",
      impact: "Customers often can't tell they're talking to AI"
    },
    {
      challenge: "Scalability",
      solution: "Built microservices architecture with auto-scaling capabilities",
      impact: "Handles 1000+ concurrent conversations"
    }
  ];

  const timeline = [
    { phase: "Requirements Analysis", duration: "1 week", description: "Understanding support workflows and customer needs" },
    { phase: "AI Model Design", duration: "2 weeks", description: "Designing conversation flows and training data preparation" },
    { phase: "Core Development", duration: "4 weeks", description: "Building the AI chatbot with NLP capabilities" },
    { phase: "Training & Fine-tuning", duration: "2 weeks", description: "Training the model with company-specific data" },
    { phase: "Integration & Testing", duration: "2 weeks", description: "CRM integration and comprehensive testing" },
    { phase: "Deployment & Monitoring", duration: "1 week", description: "Production deployment with monitoring setup" }
  ];

  const capabilities = [
    { name: "Ticket Creation", icon: Mail, description: "Automatically create support tickets" },
    { name: "FAQ Responses", icon: MessageSquare, description: "Instant answers to common questions" },
    { name: "Order Tracking", icon: Target, description: "Real-time order status updates" },
    { name: "Escalation Management", icon: Users, description: "Smart routing to human agents" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-indigo-500/5 to-purple-500/5">
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
                  <Badge className="mb-4 bg-indigo-500/10 text-indigo-600 border-indigo-500/20">
                    AI Solutions
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                      AI Customer Support Bot
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Intelligent chatbot with natural language processing for automated customer service 
                    and lead generation. Provides 24/7 support with human-like interactions.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-indigo-500 hover:bg-indigo-600">
                      <Link href="#" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>Try Live Demo</span>
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
                  <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Bot className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">AI Chat Demo</p>
                      <p className="text-muted-foreground">Interactive chatbot experience</p>
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

        {/* AI Capabilities Overview */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-indigo-500/5 to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">AI-Powered Customer Support</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced AI capabilities that understand, respond, and resolve customer inquiries with human-like intelligence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((capability, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full flex items-center justify-center">
                      <capability.icon className="w-8 h-8 text-indigo-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{capability.name}</h3>
                    <p className="text-sm text-muted-foreground">{capability.description}</p>
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
                        <Target className="w-6 h-6 text-indigo-500" />
                        <span>Project Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                        <p className="text-muted-foreground">
                          Build an intelligent customer support chatbot that can handle complex customer inquiries, 
                          understand context and intent, provide accurate responses, and seamlessly escalate to 
                          human agents when necessary, all while maintaining a natural conversation flow.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Developed an AI-powered chatbot using GPT-4 and Langchain, with custom training on 
                          company-specific data. The system includes natural language understanding, context 
                          memory, and intelligent routing capabilities with real-time learning and improvement.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((item, index) => (
                            <div key={index} className="p-4 bg-indigo-500/5 rounded-lg border border-indigo-500/20">
                              <h4 className="font-semibold text-indigo-600 mb-2">{item.challenge}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.solution}</p>
                              <p className="text-sm font-medium text-indigo-600">{item.impact}</p>
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
                            <div className="w-10 h-10 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-indigo-500" />
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
                        <Code className="w-6 h-6 text-indigo-500" />
                        <span>Technology Stack</span>
                      </CardTitle>
                      <CardDescription>
                        Advanced AI and NLP technologies for building intelligent, conversational agents.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                          <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-indigo-500/30 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-indigo-500/5 rounded-lg border border-indigo-500/20">
                        <h3 className="text-lg font-semibold mb-4">AI Architecture Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            <span>GPT-4 powered natural language understanding</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            <span>Vector database for context memory</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            <span>Real-time learning and adaptation</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-indigo-500" />
                            <span>Multi-channel deployment capability</span>
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
                        <Rocket className="w-6 h-6 text-indigo-500" />
                        <span>Development Process</span>
                      </CardTitle>
                      <CardDescription>
                        12-week development timeline from concept to production deployment.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeline.map((phase, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg border border-indigo-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-indigo-500" />
                          <span>Performance Results</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-600">90%</div>
                            <div className="text-sm text-muted-foreground">Query Resolution</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-600">60%</div>
                            <div className="text-sm text-muted-foreground">Cost Reduction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-indigo-600">&lt;2s</div>
                            <div className="text-sm text-muted-foreground">Response Time</div>
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
        <section className="py-20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Deploy Your AI Support Bot?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create an intelligent chatbot that provides 24/7 customer support and transforms your customer service experience.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your AI Bot Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-indigo-500/20 hover:border-indigo-500/40 px-8 py-6 text-lg"
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