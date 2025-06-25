"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Smartphone, 
  Bot,
  Globe,
  Zap,
  Users,
  Award,
  Workflow
} from 'lucide-react';

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    "AI-Powered Solutions",
    "Intelligent Automation", 
    "Smart Web Applications",
    "AI Agents & Chatbots"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Brain, value: "100+", label: "AI Solutions" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "99%", label: "Success Rate" },
    { icon: Zap, value: "24/7", label: "AI Support" }
  ];

  const floatingIcons = [
    { icon: Brain, delay: 0, position: "top-20 left-20" },
    { icon: Bot, delay: 1000, position: "top-40 right-20" },
    { icon: Workflow, delay: 2000, position: "bottom-40 left-10" },
    { icon: Globe, delay: 3000, position: "bottom-20 right-40" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-purple-500/5">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-soft" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-500/5 to-transparent rounded-full"></div>
        
        {/* Neural Network Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
      </div>

      {/* Enhanced Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} animate-float hidden lg:block`}
          style={{ animationDelay: `${item.delay}ms` }}
        >
          <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-xl border border-border/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
            <item.icon className="w-7 h-7 text-purple-500" />
          </div>
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 pt-20">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-3 mb-8">
            <Brain className="w-5 h-5 text-purple-500" />
            <span className="text-sm font-medium bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Next-Generation AI Solutions
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
              We Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent animate-pulse-soft">
              {texts[currentText]}
            </span>
          </h1>

          {/* Enhanced Subtitle */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge AI automation, intelligent agents, 
            and premium web solutions. We're the future of digital innovation.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg px-10 py-7 rounded-xl group relative overflow-hidden"
            >
              <Link href="/services" className="flex items-center space-x-2">
                <span>Start AI Transformation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-purple-500/20 hover:border-purple-500/40 bg-background/50 backdrop-blur-sm text-lg px-10 py-7 rounded-xl hover:bg-purple-500/5 transition-all duration-300 group"
            >
              <Link href="/portfolio" className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                <span>View AI Projects</span>
              </Link>
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-background/80 via-background/60 to-purple-500/5 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                      <stat.icon className="w-7 h-7 text-purple-500" />
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}