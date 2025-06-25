"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  Smartphone,
  Brain,
  Bot,
  Database,
  Palette,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  Shield,
  Layers,
  Workflow,
  MessageSquare,
  BarChart3,
  Cpu
} from 'lucide-react';

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to revolutionize your business processes",
      features: ["Custom AI Models", "Machine Learning", "Predictive Analytics", "Natural Language Processing"],
      gradient: "from-purple-500 to-pink-500",
      popular: true,
      href: "/services/ai-powered-solutions"
    },
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites that captivate and convert visitors",
      features: ["React/Next.js", "Responsive Design", "SEO Optimized", "Fast Loading"],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      href: "/services/web-development"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Ready"],
      gradient: "from-emerald-500 to-teal-500",
      popular: false,
      href: "/services/mobile-development"
    },
    {
      icon: Workflow,
      title: "Automation Solutions",
      description: "Streamline operations with intelligent workflow automation",
      features: ["Process Automation", "API Integration", "Workflow Design", "Task Scheduling"],
      gradient: "from-orange-500 to-red-500",
      popular: false,
      href: "/services/automation-solutions"
    },
    {
      icon: Bot,
      title: "AI Agents & Chatbots",
      description: "Intelligent conversational AI for customer support and engagement",
      features: ["Smart Chatbots", "Voice Assistants", "Customer Support", "Lead Generation"],
      gradient: "from-indigo-500 to-purple-500",
      popular: true,
      href: "/services/ai-agents-chatbots"
    }
  ];

  const additionalServices = [
    { icon: Database, title: "Database Design", description: "Scalable database architecture and optimization" },
    { icon: Palette, title: "UI/UX Design", description: "Beautiful, user-friendly interface design" },
    { icon: Shield, title: "Security Solutions", description: "Robust security implementations and audits" },
    { icon: Layers, title: "API Integration", description: "Seamless third-party service integrations" },
    { icon: BarChart3, title: "Analytics & Insights", description: "Data-driven decision making tools" },
    { icon: Cpu, title: "Cloud Infrastructure", description: "Scalable cloud deployment and management" }
  ];

  const benefits = [
    { icon: Brain, title: "AI-First Approach", description: "Every solution enhanced with artificial intelligence" },
    { icon: Clock, title: "Lightning Fast", description: "Optimized performance and rapid deployment" },
    { icon: Users, title: "Expert AI Team", description: "Specialists in machine learning and automation" },
    { icon: Zap, title: "Future-Proof", description: "Built with tomorrow's technology today" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-purple-500/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-purple-500/20">
            <Brain className="w-4 h-4 mr-2" />
            Our AI-Powered Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Next-Generation
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From AI automation to intelligent web applications, we deliver cutting-edge solutions 
            that transform businesses and drive unprecedented growth.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                hoveredCard === index 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/10 scale-[1.02]' 
                  : 'border-border/50 hover:border-purple-500/30'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 gap-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:text-white group-hover:border-transparent transition-all duration-300"
                >
                  <Link href={service.href} className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">Additional Expertise</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="group border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                    <service.icon className="w-6 h-6 text-purple-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-muted/30 via-purple-500/5 to-cyan-500/5 rounded-2xl p-8 lg:p-12 border border-purple-500/10">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose Ncode Innovations?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're at the forefront of AI innovation, delivering solutions that don't just meet today's needs 
              but anticipate tomorrow's opportunities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-full flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                  <benefit.icon className="w-8 h-8 text-purple-500" />
                </div>
                <h4 className="font-semibold mb-2">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button 
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-10 py-7 text-lg"
          >
            <Link href="/contact" className="flex items-center space-x-2">
              <Brain className="w-5 h-5" />
              <span>Start Your AI Journey Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}