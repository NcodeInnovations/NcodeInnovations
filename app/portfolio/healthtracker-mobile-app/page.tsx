"use client";

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Smartphone, Users, Star, TrendingUp, CheckCircle, Calendar, Code, Database, Zap, Shield, Heart, Activity, Bell, FolderSync as Sync, ExternalLink, Github, Play, Award, Target, Lightbulb, Settings, Rocket, Download } from 'lucide-react';

export default function HealthTrackerMobileAppPage() {
  const projectStats = [
    { label: "Downloads", value: "50K+", icon: Download, color: "text-blue-500" },
    { label: "App Rating", value: "4.8/5", icon: Star, color: "text-yellow-500" },
    { label: "User Retention", value: "85%", icon: Users, color: "text-green-500" },
    { label: "Daily Active Users", value: "15K+", icon: Activity, color: "text-purple-500" }
  ];

  const technologies = [
    { name: "React Native", category: "Framework", description: "Cross-platform mobile development" },
    { name: "Firebase", category: "Backend", description: "Real-time database and authentication" },
    { name: "HealthKit", category: "Integration", description: "iOS health data integration" },
    { name: "Google Fit", category: "Integration", description: "Android health data integration" },
    { name: "Push Notifications", category: "Engagement", description: "Smart health reminders" }
  ];

  const features = [
    { title: "Real-time Health Monitoring", description: "Continuous tracking of vital signs and health metrics with instant updates", icon: Activity },
    { title: "Wearable Integration", description: "Seamless sync with Apple Watch, Fitbit, and other popular wearable devices", icon: Sync },
    { title: "Smart Notifications", description: "AI-powered health reminders and personalized wellness tips", icon: Bell },
    { title: "Health Analytics", description: "Comprehensive insights and trends analysis of your health data", icon: TrendingUp },
    { title: "Secure Data Storage", description: "HIPAA-compliant data encryption and privacy protection", icon: Shield },
    { title: "Offline Functionality", description: "Track health data even without internet connection", icon: Database }
  ];

  const challenges = [
    {
      challenge: "Cross-Platform Consistency",
      solution: "Implemented shared component library with platform-specific optimizations",
      impact: "Identical user experience across iOS and Android"
    },
    {
      challenge: "Real-time Data Sync",
      solution: "Built custom sync engine with conflict resolution and offline support",
      impact: "99.9% data accuracy across all devices"
    },
    {
      challenge: "Battery Optimization",
      solution: "Implemented smart background processing and efficient data collection",
      impact: "Minimal battery impact while maintaining accuracy"
    }
  ];

  const timeline = [
    { phase: "Research & Planning", duration: "2 weeks", description: "User research, health regulations, and technical planning" },
    { phase: "UI/UX Design", duration: "3 weeks", description: "Health-focused interface design and user experience optimization" },
    { phase: "Core Development", duration: "6 weeks", description: "React Native app development with health tracking features" },
    { phase: "Wearable Integration", duration: "3 weeks", description: "Integration with HealthKit, Google Fit, and wearable devices" },
    { phase: "Testing & Compliance", duration: "2 weeks", description: "Health data compliance testing and security validation" },
    { phase: "App Store Launch", duration: "1 week", description: "App Store and Play Store submission and launch" }
  ];

  const healthMetrics = [
    { name: "Heart Rate", icon: Heart, description: "Continuous heart rate monitoring" },
    { name: "Steps & Activity", icon: Activity, description: "Daily activity and step tracking" },
    { name: "Sleep Quality", icon: Calendar, description: "Sleep pattern analysis and insights" },
    { name: "Nutrition", icon: Target, description: "Calorie and nutrition tracking" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-blue-500/5 to-purple-500/5">
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
                    Mobile Health App
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      HealthTracker Mobile App
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Cross-platform mobile app for comprehensive health monitoring with real-time data sync 
                    and seamless wearable integration. Built for iOS and Android.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-blue-500 hover:bg-blue-600">
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
                  <div className="aspect-[3/4] bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl border border-blue-500/20 flex items-center justify-center max-w-sm mx-auto">
                    <div className="text-center">
                      <Smartphone className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Mobile App Demo</p>
                      <p className="text-muted-foreground">Interactive prototype</p>
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

        {/* Health Metrics Overview */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Health Tracking</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Monitor all aspects of your health with advanced tracking capabilities and real-time insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {healthMetrics.map((metric, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full flex items-center justify-center">
                      <metric.icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{metric.name}</h3>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
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
                          Create a comprehensive health tracking mobile app that works seamlessly across iOS and Android, 
                          integrates with multiple wearable devices, and provides real-time health insights while 
                          maintaining HIPAA compliance and user privacy.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Developed a React Native mobile application with Firebase backend, featuring real-time health 
                          data synchronization, wearable device integration, and AI-powered health insights. The app 
                          includes offline functionality and secure data encryption.
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
                        Modern mobile technologies for cross-platform development and health data integration.
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
                        <h3 className="text-lg font-semibold mb-4">Mobile Architecture Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>Cross-platform React Native development</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>Real-time Firebase synchronization</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>Offline-first data architecture</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-blue-500" />
                            <span>HIPAA-compliant data encryption</span>
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
                        17-week development timeline from concept to App Store launch.
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
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-blue-500" />
                          <span>App Performance</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">4.8★</div>
                            <div className="text-sm text-muted-foreground">App Store Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">50K+</div>
                            <div className="text-sm text-muted-foreground">Downloads</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">85%</div>
                            <div className="text-sm text-muted-foreground">User Retention</div>
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
        <section className="py-20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create a mobile application that users love and that drives your business forward.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your App Project</Link>
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