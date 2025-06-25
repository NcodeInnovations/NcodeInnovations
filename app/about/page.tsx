"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Rocket,
  Users,
  Globe,
  Award,
  Zap,
  Shield,
  Target,
  TrendingUp,
  Heart,
  Code,
  Lightbulb,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Building,
  Calendar,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-blue-500" },
    { icon: Rocket, value: "1000+", label: "Projects Delivered", color: "text-purple-500" },
    { icon: Globe, value: "50+", label: "Countries Served", color: "text-green-500" },
    { icon: Award, value: "99%", label: "Success Rate", color: "text-orange-500" }
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-First Innovation",
      description: "We believe artificial intelligence is the future of business automation and decision-making.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Enterprise-grade security and data privacy protection in everything we build.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering exceptional results.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development cycles and deployment without compromising on quality.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & AI Strategist",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "15+ years in AI and machine learning, former Google AI researcher."
    },
    {
      name: "Michael Chen",
      role: "CTO & Lead Developer",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Full-stack expert with expertise in scalable cloud architectures."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Award-winning UX designer focused on AI-human interaction."
    },
    {
      name: "David Kim",
      role: "AI Research Lead",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "PhD in Machine Learning, published researcher in NLP and computer vision."
    }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to democratize AI for businesses" },
    { year: "2021", title: "First AI Product", description: "Launched our flagship AI automation platform" },
    { year: "2022", title: "Global Expansion", description: "Expanded to serve clients across 50+ countries" },
    { year: "2023", title: "AI Innovation Award", description: "Recognized as 'Most Innovative AI Company'" },
    { year: "2024", title: "1000+ Projects", description: "Delivered over 1000 successful AI implementations" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-purple-500/5 to-cyan-500/5 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className={`absolute transition-all duration-2000 ease-in-out ${
              animationPhase === 0 ? 'top-20 left-20 w-64 h-64' :
              animationPhase === 1 ? 'top-40 left-40 w-48 h-48' :
              animationPhase === 2 ? 'top-60 left-60 w-32 h-32' :
              'top-20 left-20 w-64 h-64'
            } bg-purple-500/10 rounded-full blur-3xl animate-pulse`}></div>
            <div className={`absolute transition-all duration-2000 ease-in-out ${
              animationPhase === 0 ? 'bottom-20 right-20 w-96 h-96' :
              animationPhase === 1 ? 'bottom-40 right-40 w-64 h-64' :
              animationPhase === 2 ? 'bottom-60 right-60 w-48 h-48' :
              'bottom-20 right-20 w-96 h-96'
            } bg-cyan-500/10 rounded-full blur-3xl animate-pulse`}></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-6 px-6 py-3 border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
                <Building className="w-5 h-5 mr-2" />
                <span className="text-lg font-semibold">About Ncode Innovations</span>
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  We're Building the
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  AI-Powered Future
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed">
                A cutting-edge SaaS company specializing in AI-powered solutions, intelligent automation, 
                and premium web applications. We transform businesses with artificial intelligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
                >
                  <Link href="/contact">Work With Us</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/20 hover:border-purple-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6"
                >
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="group">
                    <div className="bg-gradient-to-br from-background/80 via-background/60 to-purple-500/5 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 hover:scale-105">
                      <div className="flex flex-col items-center space-y-3">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                          <stat.icon className={`w-7 h-7 ${stat.color}`} />
                        </div>
                        <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium text-center">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                      Our Mission
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    At Ncode Innovations, we're on a mission to democratize artificial intelligence and make 
                    cutting-edge technology accessible to businesses of all sizes. We believe that AI should 
                    enhance human capabilities, not replace them.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    As a forward-thinking SaaS company, we specialize in creating intelligent solutions that 
                    automate complex processes, provide actionable insights, and drive unprecedented business growth.
                  </p>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-lg font-semibold">Trusted by 500+ companies worldwide</span>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <Brain className="w-24 h-24 text-purple-500 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-2xl font-bold mb-2">AI-First Approach</h3>
                      <p className="text-muted-foreground">Every solution enhanced with intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-purple-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do and every solution we create.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="group border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <value.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our AI Experts</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A world-class team of AI researchers, developers, and innovators dedicated to your success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="group border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl text-center">
                  <CardContent className="p-6">
                    <div className="relative mb-6">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-purple-500/20 group-hover:ring-purple-500/40 transition-all duration-300"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                    <p className="text-purple-500 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gradient-to-br from-background via-purple-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From startup to industry leader - the milestones that shaped our AI innovation story.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join hundreds of companies that trust Ncode Innovations to deliver cutting-edge AI solutions 
                that drive real business results.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your AI Journey</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/20 hover:border-purple-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6"
                >
                  <Link href="/services">Explore Our Services</Link>
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