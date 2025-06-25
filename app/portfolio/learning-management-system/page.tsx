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
  GraduationCap,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Code,
  Database,
  Zap,
  Shield,
  Play,
  BookOpen,
  Video,
  Award,
  ExternalLink,
  Github,
  Target,
  Lightbulb,
  Settings,
  Rocket,
  Clock,
  BarChart3
} from 'lucide-react';

export default function LearningManagementSystemPage() {
  const projectStats = [
    { label: "Students", value: "5K+", icon: Users, color: "text-blue-500" },
    { label: "Completion Rate", value: "78%", icon: TrendingUp, color: "text-green-500" },
    { label: "Engagement", value: "+200%", icon: BarChart3, color: "text-purple-500" },
    { label: "Courses", value: "150+", icon: BookOpen, color: "text-orange-500" }
  ];

  const technologies = [
    { name: "React", category: "Frontend", description: "Modern UI with component architecture" },
    { name: "Node.js", category: "Backend", description: "Scalable server-side JavaScript" },
    { name: "PostgreSQL", category: "Database", description: "Robust relational database" },
    { name: "AWS S3", category: "Storage", description: "Secure video and file storage" },
    { name: "WebRTC", category: "Video", description: "Real-time video communication" }
  ];

  const features = [
    { title: "Video Streaming", description: "High-quality video streaming with adaptive bitrate and CDN delivery", icon: Video },
    { title: "Progress Tracking", description: "Comprehensive learning analytics and progress monitoring", icon: BarChart3 },
    { title: "Interactive Assessments", description: "Quizzes, assignments, and automated grading systems", icon: Award },
    { title: "Live Classes", description: "Real-time virtual classrooms with video conferencing", icon: Users },
    { title: "Course Management", description: "Intuitive course creation and content management tools", icon: BookOpen },
    { title: "Mobile Learning", description: "Responsive design for learning on any device", icon: Zap }
  ];

  const challenges = [
    {
      challenge: "Video Streaming Performance",
      solution: "Implemented adaptive bitrate streaming with AWS CloudFront CDN for global delivery",
      impact: "99.9% uptime with sub-3s video load times globally"
    },
    {
      challenge: "Real-time Collaboration",
      solution: "Built WebRTC-based virtual classrooms with screen sharing and interactive whiteboards",
      impact: "Seamless live learning experience for 100+ concurrent users"
    },
    {
      challenge: "Learning Analytics",
      solution: "Developed comprehensive analytics dashboard with ML-powered insights",
      impact: "78% course completion rate improvement"
    }
  ];

  const timeline = [
    { phase: "Educational Research", duration: "2 weeks", description: "Learning methodology research and user experience analysis" },
    { phase: "System Architecture", duration: "2 weeks", description: "Scalable architecture design for video streaming and user management" },
    { phase: "Core Platform Development", duration: "8 weeks", description: "LMS core features and user interface development" },
    { phase: "Video Infrastructure", duration: "4 weeks", description: "Video streaming, storage, and delivery system implementation" },
    { phase: "Assessment System", duration: "3 weeks", description: "Quiz engine, grading system, and progress tracking" },
    { phase: "Testing & Launch", duration: "2 weeks", description: "Load testing, security audit, and production deployment" }
  ];

  const learningFeatures = [
    { name: "Course Catalog", icon: BookOpen, description: "Comprehensive course library" },
    { name: "Video Lectures", icon: Video, description: "HD video streaming platform" },
    { name: "Live Sessions", icon: Users, description: "Interactive virtual classrooms" },
    { name: "Assessments", icon: Award, description: "Automated testing and grading" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-emerald-500/5 to-blue-500/5">
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
                  <Badge className="mb-4 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                    Full-Stack Education Platform
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent">
                      Learning Management System
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Full-featured LMS with video streaming, progress tracking, and interactive assessments. 
                    Built for educational institutions and corporate training programs.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-emerald-500 hover:bg-emerald-600">
                      <Link href="#" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live Platform</span>
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
                  <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl border border-emerald-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <GraduationCap className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">LMS Platform Demo</p>
                      <p className="text-muted-foreground">Interactive learning experience</p>
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

        {/* Learning Features Overview */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-emerald-500/5 to-blue-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Complete Learning Platform</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything needed for modern online education, from video streaming to progress tracking and assessments.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {learningFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-emerald-500" />
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
                        <Target className="w-6 h-6 text-emerald-500" />
                        <span>Project Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                        <p className="text-muted-foreground">
                          Create a comprehensive learning management system that supports video streaming, 
                          real-time collaboration, progress tracking, and interactive assessments while 
                          maintaining excellent performance and user experience across all devices.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Built a full-stack LMS using React and Node.js with AWS infrastructure for video 
                          streaming, PostgreSQL for data management, and WebRTC for real-time collaboration. 
                          Implemented comprehensive analytics and assessment tools for enhanced learning outcomes.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((item, index) => (
                            <div key={index} className="p-4 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                              <h4 className="font-semibold text-emerald-600 mb-2">{item.challenge}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.solution}</p>
                              <p className="text-sm font-medium text-emerald-600">{item.impact}</p>
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
                            <div className="w-10 h-10 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-emerald-500" />
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
                        <Code className="w-6 h-6 text-emerald-500" />
                        <span>Technology Stack</span>
                      </CardTitle>
                      <CardDescription>
                        Modern technologies for scalable education platform with video streaming capabilities.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                          <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-emerald-500/30 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                        <h3 className="text-lg font-semibold mb-4">Platform Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>Adaptive video streaming with CDN</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>Real-time collaboration with WebRTC</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>Comprehensive learning analytics</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-emerald-500" />
                            <span>Mobile-responsive design</span>
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
                        <Rocket className="w-6 h-6 text-emerald-500" />
                        <span>Development Process</span>
                      </CardTitle>
                      <CardDescription>
                        21-week development timeline from educational research to platform launch.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeline.map((phase, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg border border-emerald-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-emerald-500" />
                          <span>Learning Outcomes</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600">5K+</div>
                            <div className="text-sm text-muted-foreground">Students</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600">78%</div>
                            <div className="text-sm text-muted-foreground">Completion Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600">+200%</div>
                            <div className="text-sm text-muted-foreground">Engagement</div>
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
        <section className="py-20 bg-gradient-to-br from-emerald-500/5 to-blue-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Build Your Learning Platform?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create a comprehensive learning management system that engages students and delivers exceptional educational experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your LMS Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-500/20 hover:border-emerald-500/40 px-8 py-6 text-lg"
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