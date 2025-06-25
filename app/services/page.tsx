"use client";

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Globe,
  Smartphone,
  Brain,
  Bot,
  Database,
  Palette,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Users,
  Zap,
  Shield,
  Layers,
  Server,
  Rocket,
  Workflow,
  MessageSquare,
  BarChart3,
  Cpu,
  Target,
  TrendingUp,
  Code,
  Sparkles,
  Play,
  Award,
  Lightbulb,
  Settings,
  Monitor
} from 'lucide-react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('ai');

  const services = {
    ai: {
      icon: Brain,
      title: "AI-Powered Solutions",
      emoji: "🧠",
      description: "Cutting-edge artificial intelligence to revolutionize your business processes",
      gradient: "from-purple-500 to-pink-500",
      detailedDescription: "Our AI solutions are designed to solve real business problems using custom-built, intelligent models. Whether you want smarter recommendations, behavior prediction, or automated insights — we help you make data-driven decisions faster.",
      howWeBuild: [
        "We begin by understanding your data and goals",
        "Build custom AI models using tools like Python, TensorFlow, and OpenAI",
        "Train, test, and deploy on secure cloud infrastructure (AWS, Azure, or Supabase)",
        "Integrate seamlessly with your app or platform"
      ],
      timeline: {
        mvp: "MVP AI Model: 2–3 weeks",
        full: "Full integration & deployment: 4–6 weeks"
      },
      features: [
        "Custom AI Models",
        "Machine Learning Pipelines", 
        "Predictive Analytics",
        "NLP & Language Understanding"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI API", "Langchain", "Hugging Face"],
      pricing: "Starting from $8,000",
      projects: [
        { name: "AI Analytics Platform", description: "Advanced predictive analytics with machine learning models", icon: BarChart3 },
        { name: "Computer Vision System", description: "Real-time image recognition and processing solution", icon: Target },
        { name: "NLP Document Processor", description: "Intelligent document analysis and extraction system", icon: MessageSquare }
      ]
    },
    web: {
      icon: Globe,
      title: "Web Development",
      emoji: "🌐",
      description: "Modern, responsive websites that captivate and convert visitors",
      gradient: "from-blue-500 to-cyan-500",
      detailedDescription: "We design beautiful, high-performance websites that look great on all devices and load fast. Perfect for startups, business portfolios, or SaaS platforms.",
      howWeBuild: [
        "Use React.js or Next.js for fast, scalable architecture",
        "Responsive design for desktop, tablet, and mobile",
        "Optimized for SEO and Core Web Vitals",
        "Cloud hosting with CI/CD (Netlify, Vercel, Azure)"
      ],
      timeline: {
        mvp: "Basic Website: 5–7 days",
        full: "Custom SaaS UI: 2–3 weeks"
      },
      features: [
        "React/Next.js frontend",
        "SEO & speed optimized", 
        "Fully responsive design",
        "CMS or headless setup (optional)"
      ],
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      pricing: "Starting from $3,500",
      projects: [
        { name: "E-commerce Platform", description: "Full-featured online store with AI recommendations", icon: Globe },
        { name: "Corporate Website", description: "Professional business website with CMS integration", icon: Monitor },
        { name: "SaaS Landing Page", description: "High-converting landing page with analytics", icon: TrendingUp }
      ]
    },
    mobile: {
      icon: Smartphone,
      title: "Mobile App Development",
      emoji: "📱",
      description: "Native and cross-platform mobile applications for iOS and Android",
      gradient: "from-emerald-500 to-teal-500",
      detailedDescription: "We build powerful, user-friendly apps that work seamlessly across devices using the latest frameworks. From startup MVPs to enterprise-grade apps.",
      howWeBuild: [
        "Choose best-fit framework (React Native or Flutter)",
        "Design intuitive UI/UX",
        "Develop, test, and publish to App Store & Google Play",
        "Set up push notifications, analytics, and crash reporting"
      ],
      timeline: {
        mvp: "MVP App: 3–4 weeks",
        full: "Full-featured App: 6–8 weeks"
      },
      features: [
        "iOS & Android support",
        "React Native / Flutter builds",
        "App Store & Play Store deployment",
        "Scalable & maintainable code"
      ],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS"],
      pricing: "Starting from $12,000",
      projects: [
        { name: "AI Health App", description: "Smart health monitoring with AI-powered insights", icon: Smartphone },
        { name: "Social Platform", description: "Feature-rich social app with real-time messaging", icon: Users },
        { name: "Delivery App", description: "On-demand delivery with AI route optimization", icon: Rocket }
      ]
    },
    automation: {
      icon: Workflow,
      title: "Automation Solutions",
      emoji: "⚙️",
      description: "Streamline operations with intelligent workflow automation",
      gradient: "from-orange-500 to-red-500",
      detailedDescription: "Eliminate repetitive tasks and boost productivity with smart automation — whether it's internal workflows, lead routing, or backend systems.",
      howWeBuild: [
        "Analyze current manual processes",
        "Design automated workflows using tools like Zapier, Make, or custom Node.js functions",
        "Integrate with third-party APIs and databases",
        "Set up error handling and alerts"
      ],
      timeline: {
        mvp: "Simple Automation: 3–5 days",
        full: "Complex Workflow Setup: 1–2 weeks"
      },
      features: [
        "Task Scheduling & Triggers",
        "Process & Data Automation", 
        "Third-party API Integration",
        "Notifications & logging"
      ],
      technologies: ["Python", "Zapier", "Make", "Node.js", "REST APIs", "Webhooks"],
      pricing: "Starting from $5,000",
      projects: [
        { name: "CRM Automation", description: "Automated lead processing and customer management", icon: Settings },
        { name: "Data Pipeline", description: "Automated data collection and processing system", icon: Database },
        { name: "Email Marketing Bot", description: "AI-powered email campaign automation", icon: Zap }
      ]
    },
    agents: {
      icon: Bot,
      title: "AI Agents & Chatbots",
      emoji: "🤖",
      description: "Intelligent conversational AI for customer support and engagement",
      gradient: "from-indigo-500 to-purple-500",
      detailedDescription: "Create 24/7 smart chatbots and virtual agents that engage with your customers, answer questions, and automate support — saving you time and money.",
      howWeBuild: [
        "Define chatbot goals & tone (support, lead gen, etc.)",
        "Use tools like OpenAI (GPT), Dialogflow, or Rasa",
        "Train with your data (FAQs, docs, etc.)",
        "Deploy on your website, WhatsApp, Messenger, etc."
      ],
      timeline: {
        mvp: "Basic FAQ Bot: 3–5 days",
        full: "Advanced Agent with AI: 2–3 weeks"
      },
      features: [
        "Smart Chatbots",
        "Voice Assistants (optional)",
        "Omnichannel deployment",
        "Customer Data Integration"
      ],
      technologies: ["OpenAI", "Dialogflow", "Rasa", "Langchain", "WebSocket", "NLP"],
      pricing: "Starting from $6,000",
      projects: [
        { name: "Customer Support Bot", description: "24/7 AI customer service with human handoff", icon: Bot },
        { name: "Sales Assistant", description: "AI-powered lead qualification and conversion", icon: Award },
        { name: "Voice Assistant", description: "Multi-modal AI assistant with voice capabilities", icon: MessageSquare }
      ]
    }
  };

  const additionalServices = [
    { icon: Database, title: "Database Design", description: "Scalable database architecture and optimization" },
    { icon: Palette, title: "UI/UX Design", description: "Beautiful, user-friendly interface design" },
    { icon: Shield, title: "Security Solutions", description: "Robust security implementations and audits" },
    { icon: Layers, title: "API Integration", description: "Seamless third-party service integrations" },
    { icon: BarChart3, title: "Analytics & Insights", description: "Data-driven decision making tools" },
    { icon: Cpu, title: "Cloud Infrastructure", description: "Scalable cloud deployment and management" }
  ];

  const processSteps = [
    { step: 1, title: "AI Discovery", description: "Understanding your AI needs and automation opportunities", icon: Lightbulb },
    { step: 2, title: "Strategy Planning", description: "Creating detailed AI implementation roadmap", icon: Target },
    { step: 3, title: "Prototype Design", description: "Building AI-powered prototypes and interfaces", icon: Code },
    { step: 4, title: "Development", description: "Implementing solutions with cutting-edge AI technology", icon: Settings },
    { step: 5, title: "AI Training", description: "Training models and optimizing AI performance", icon: Brain },
    { step: 6, title: "Deployment", description: "Launching with ongoing AI monitoring and support", icon: Rocket }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 border-purple-500/20">
              <Brain className="w-4 h-4 mr-2" />
              Our AI-Powered Services
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Next-Generation
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From intelligent automation to cutting-edge AI applications, we provide comprehensive 
              solutions that revolutionize how businesses operate in the digital age.
            </p>

            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
            >
              <Link href="/contact">Start AI Transformation</Link>
            </Button>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-12">
                {Object.entries(services).map(([key, service]) => (
                  <TabsTrigger 
                    key={key} 
                    value={key}
                    className="flex items-center space-x-2 p-4"
                  >
                    <span className="text-lg">{service.emoji}</span>
                    <span className="hidden sm:inline text-sm font-medium">{service.title.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(services).map(([key, service]) => (
                <TabsContent key={key} value={key} className="space-y-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Service Info */}
                    <div className="lg:col-span-2 space-y-8">
                      <div>
                        <div className="flex items-center space-x-4 mb-6">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                            <span className="text-2xl">{service.emoji}</span>
                          </div>
                          <div>
                            <h2 className="text-3xl lg:text-4xl font-bold">{service.title}</h2>
                            <p className="text-lg text-muted-foreground">{service.description}</p>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-muted/30 via-purple-500/5 to-cyan-500/5 rounded-xl p-6 border border-purple-500/10 mb-8">
                          <h3 className="text-xl font-bold mb-3 flex items-center">
                            <span className="mr-2">📌</span>
                            What We Offer:
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">{service.detailedDescription}</p>
                        </div>

                        <div className="bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-teal-500/5 rounded-xl p-6 border border-blue-500/10 mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="mr-2">🔧</span>
                            How We Build:
                          </h3>
                          <div className="space-y-3">
                            {service.howWeBuild.map((step, index) => (
                              <div key={index} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs font-bold text-white">{index + 1}</span>
                                </div>
                                <p className="text-muted-foreground">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-green-500/5 via-emerald-500/5 to-teal-500/5 rounded-xl p-6 border border-green-500/10 mb-8">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="mr-2">🕒</span>
                            Timeline:
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3">
                              <Clock className="w-5 h-5 text-green-600" />
                              <span className="font-medium">{service.timeline.mvp}</span>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Rocket className="w-5 h-5 text-green-600" />
                              <span className="font-medium">{service.timeline.full}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-xl p-6 border border-purple-500/10">
                          <h3 className="text-xl font-bold mb-4 flex items-center">
                            <span className="mr-2">💡</span>
                            Features:
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {service.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                                <span className="text-sm font-medium">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                      {/* Pricing & CTA */}
                      <Card className="border-2 border-purple-500/20 shadow-xl bg-gradient-to-br from-background/95 to-purple-500/5">
                        <CardHeader className="text-center">
                          <CardTitle className="text-2xl">Ready to Start?</CardTitle>
                          <CardDescription>Get your project started today</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-purple-600 mb-2">{service.pricing}</div>
                            <p className="text-sm text-muted-foreground">Custom pricing available</p>
                          </div>
                          
                          <Button 
                            asChild
                            className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white h-12"
                          >
                            <Link href="/contact" className="flex items-center justify-center space-x-2">
                              <Play className="w-5 h-5" />
                              <span>Get Started</span>
                            </Link>
                          </Button>
                          
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Free consultation included</p>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Technologies */}
                      <Card className="border border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <Code className="w-5 h-5 mr-2" />
                            Technologies
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">{tech}</Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* Sample Projects */}
                      <Card className="border border-border/50">
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center">
                            <Sparkles className="w-5 h-5 mr-2" />
                            Sample Projects
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {service.projects.map((project, index) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                              <div className="w-8 h-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                <project.icon className="w-4 h-4 text-purple-500" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-sm">{project.name}</h4>
                                <p className="text-xs text-muted-foreground">{project.description}</p>
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-purple-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Additional Expertise</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Complementary services to ensure your AI transformation is complete and successful.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <Card key={index} className="group border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our AI Development Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that ensures successful AI implementation and transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                      {step.step}
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-purple-500" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-purple-500/5 via-background to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform with AI?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI-powered solutions can revolutionize your business operations and drive unprecedented growth.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
              >
                <Link href="/contact">Start AI Journey</Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500/20 hover:border-purple-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6"
              >
                <Link href="/portfolio">View AI Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}