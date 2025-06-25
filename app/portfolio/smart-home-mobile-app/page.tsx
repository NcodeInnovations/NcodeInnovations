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
  Smartphone,
  Users,
  Star,
  TrendingUp,
  CheckCircle,
  Calendar,
  Code,
  Database,
  Zap,
  Shield,
  Home,
  Wifi,
  Mic,
  Settings,
  ExternalLink,
  Github,
  Play,
  Award,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Download,
  Thermometer,
  Lightbulb as Light,
  Lock,
  Camera
} from 'lucide-react';

export default function SmartHomeMobileAppPage() {
  const projectStats = [
    { label: "Device Types", value: "100+", icon: Home, color: "text-blue-500" },
    { label: "Response Time", value: "<500ms", icon: Zap, color: "text-green-500" },
    { label: "App Rating", value: "4.9/5", icon: Star, color: "text-yellow-500" },
    { label: "Active Users", value: "25K+", icon: Users, color: "text-purple-500" }
  ];

  const technologies = [
    { name: "Flutter", category: "Framework", description: "Cross-platform mobile development" },
    { name: "IoT Integration", category: "Hardware", description: "Smart device connectivity protocols" },
    { name: "Voice Recognition", category: "AI", description: "Natural language voice commands" },
    { name: "Cloud Functions", category: "Backend", description: "Serverless automation logic" },
    { name: "Firebase", category: "Database", description: "Real-time data synchronization" }
  ];

  const features = [
    { title: "Universal Device Control", description: "Control 100+ types of smart home devices from a single interface", icon: Home },
    { title: "Voice Commands", description: "Natural language voice control with AI-powered understanding", icon: Mic },
    { title: "Automation Scheduling", description: "Create complex automation rules and schedules", icon: Calendar },
    { title: "Real-time Monitoring", description: "Live status updates and notifications from all devices", icon: Wifi },
    { title: "Energy Management", description: "Track and optimize energy consumption across devices", icon: Zap },
    { title: "Security Integration", description: "Comprehensive home security monitoring and alerts", icon: Shield }
  ];

  const challenges = [
    {
      challenge: "Device Compatibility",
      solution: "Built universal adapter layer supporting 100+ device types and protocols",
      impact: "Seamless integration with any smart home ecosystem"
    },
    {
      challenge: "Real-time Performance",
      solution: "Optimized WebSocket connections with intelligent caching and state management",
      impact: "Sub-500ms response time for device commands"
    },
    {
      challenge: "Voice Recognition",
      solution: "Integrated advanced NLP with context-aware command interpretation",
      impact: "95% voice command accuracy in noisy environments"
    }
  ];

  const timeline = [
    { phase: "IoT Research & Planning", duration: "2 weeks", description: "Smart home ecosystem analysis and protocol research" },
    { phase: "UI/UX Design", duration: "3 weeks", description: "Intuitive interface design for device control" },
    { phase: "Core App Development", duration: "6 weeks", description: "Flutter app with device integration framework" },
    { phase: "Voice Integration", duration: "3 weeks", description: "Voice recognition and natural language processing" },
    { phase: "Automation Engine", duration: "4 weeks", description: "Smart automation and scheduling system" },
    { phase: "Testing & Launch", duration: "2 weeks", description: "Device compatibility testing and app store launch" }
  ];

  const smartDevices = [
    { name: "Climate Control", icon: Thermometer, description: "Smart thermostats and HVAC" },
    { name: "Lighting Systems", icon: Light, description: "Smart bulbs and switches" },
    { name: "Security Devices", icon: Lock, description: "Smart locks and alarms" },
    { name: "Cameras & Monitoring", icon: Camera, description: "Security cameras and sensors" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-cyan-500/5 to-blue-500/5">
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
                  <Badge className="mb-4 bg-cyan-500/10 text-cyan-600 border-cyan-500/20">
                    IoT Mobile App
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      Smart Home Mobile App
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    IoT control app for smart home devices with voice commands and automation scheduling. 
                    Universal compatibility with 100+ device types and intelligent automation.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-600">
                      <Link href="#" className="flex items-center space-x-2">
                        <Download className="w-4 h-4" />
                        <span>Download App</span>
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
                  <div className="aspect-[3/4] bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl border border-cyan-500/20 flex items-center justify-center max-w-sm mx-auto">
                    <div className="text-center">
                      <Home className="w-16 h-16 text-cyan-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Smart Home Control</p>
                      <p className="text-muted-foreground">IoT device management</p>
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    className="absolute inset-0 w-full h-full bg-black/20 hover:bg-black/30 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-3xl"
                  >
                    <Play className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Device Categories */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-cyan-500/5 to-blue-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Universal Smart Home Control</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Control every aspect of your smart home from a single, intuitive mobile interface.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {smartDevices.map((device, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full flex items-center justify-center">
                      <device.icon className="w-8 h-8 text-cyan-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{device.name}</h3>
                    <p className="text-sm text-muted-foreground">{device.description}</p>
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
                        <Target className="w-6 h-6 text-cyan-500" />
                        <span>Project Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                        <p className="text-muted-foreground">
                          Create a universal smart home control app that works with 100+ different device types, 
                          provides voice control capabilities, enables complex automation scheduling, and delivers 
                          real-time performance while maintaining an intuitive user experience.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Built a Flutter mobile app with universal IoT integration, voice recognition powered by 
                          advanced NLP, and a sophisticated automation engine. Implemented real-time device 
                          monitoring with optimized performance and comprehensive security features.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((item, index) => (
                            <div key={index} className="p-4 bg-cyan-500/5 rounded-lg border border-cyan-500/20">
                              <h4 className="font-semibold text-cyan-600 mb-2">{item.challenge}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.solution}</p>
                              <p className="text-sm font-medium text-cyan-600">{item.impact}</p>
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
                            <div className="w-10 h-10 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-cyan-500" />
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
                        <Code className="w-6 h-6 text-cyan-500" />
                        <span>Technology Stack</span>
                      </CardTitle>
                      <CardDescription>
                        Modern mobile and IoT technologies for smart home control and automation.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                          <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-cyan-500/30 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-cyan-500/5 rounded-lg border border-cyan-500/20">
                        <h3 className="text-lg font-semibold mb-4">IoT Architecture Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-cyan-500" />
                            <span>Multi-protocol IoT device support</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-cyan-500" />
                            <span>Local and cloud control capabilities</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-cyan-500" />
                            <span>End-to-end encryption for security</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-cyan-500" />
                            <span>Offline functionality with local caching</span>
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
                        <Rocket className="w-6 h-6 text-cyan-500" />
                        <span>Development Process</span>
                      </CardTitle>
                      <CardDescription>
                        20-week development timeline from IoT research to app store launch.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeline.map((phase, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-cyan-500" />
                          <span>App Performance</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">100+ types</div>
                            <div className="text-sm text-muted-foreground">Device Compatibility</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">&lt;500ms</div>
                            <div className="text-sm text-muted-foreground">Response Time</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">4.9/5</div>
                            <div className="text-sm text-muted-foreground">App Store Rating</div>
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
        <section className="py-20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your IoT Mobile App?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create a powerful IoT application that connects and controls smart devices with an intuitive user experience.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your IoT App Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-cyan-500/20 hover:border-cyan-500/40 px-8 py-6 text-lg"
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