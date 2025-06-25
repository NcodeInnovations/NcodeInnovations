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
  FileText,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  Calendar,
  Code,
  Database,
  Zap,
  Shield,
  Brain,
  Search,
  ExternalLink,
  Github,
  Play,
  Award,
  Target,
  Lightbulb,
  Settings,
  Rocket,
  Clock,
  Eye,
  File,
  ScanText,
  Layers,
  DollarSign
} from 'lucide-react';

export default function DocumentAIProcessorPage() {
  const projectStats = [
    { label: "Accuracy", value: "97%", icon: Target, color: "text-green-500" },
    { label: "Processing Speed", value: "10x", icon: Zap, color: "text-blue-500" },
    { label: "Cost Reduction", value: "-60%", icon: DollarSign, color: "text-purple-500" },
    { label: "Document Types", value: "25+", icon: FileText, color: "text-orange-500" }
  ];

  const technologies = [
    { name: "Python", category: "Backend", description: "Core processing and API development" },
    { name: "TensorFlow", category: "AI/ML", description: "Machine learning model training" },
    { name: "OCR", category: "Vision", description: "Optical character recognition" },
    { name: "Document AI", category: "NLP", description: "Document understanding and extraction" },
    { name: "REST API", category: "Integration", description: "Service integration interface" }
  ];

  const features = [
    { title: "Intelligent Document Recognition", description: "Automatic document type classification and processing", icon: Eye },
    { title: "Advanced OCR", description: "High-accuracy text extraction from any document format", icon: ScanText },
    { title: "Data Extraction", description: "Structured data extraction from unstructured documents", icon: Layers },
    { title: "Workflow Automation", description: "End-to-end document processing workflow automation", icon: Settings },
    { title: "Compliance Verification", description: "Automatic compliance checking and validation", icon: Shield },
    { title: "Integration Ready", description: "Easy integration with existing document management systems", icon: Database }
  ];

  const challenges = [
    {
      challenge: "Document Variety",
      solution: "Trained custom ML models on 25+ document types with transfer learning",
      impact: "97% accuracy across diverse document formats"
    },
    {
      challenge: "Data Extraction Accuracy",
      solution: "Implemented hybrid OCR with NLP for context-aware extraction",
      impact: "95% field-level extraction accuracy"
    },
    {
      challenge: "Processing Speed",
      solution: "Built distributed processing pipeline with parallel execution",
      impact: "10x faster than manual processing"
    }
  ];

  const timeline = [
    { phase: "Document Analysis", duration: "2 weeks", description: "Document type analysis and processing requirements" },
    { phase: "AI Model Design", duration: "3 weeks", description: "OCR and extraction model architecture" },
    { phase: "Model Training", duration: "4 weeks", description: "Training and fine-tuning AI models" },
    { phase: "Pipeline Development", duration: "5 weeks", description: "Processing pipeline and workflow automation" },
    { phase: "API Development", duration: "3 weeks", description: "REST API and integration interfaces" },
    { phase: "Testing & Deployment", duration: "3 weeks", description: "Accuracy testing and production deployment" }
  ];

  const documentTypes = [
    { name: "Invoices & Receipts", icon: FileText, description: "Automated invoice processing" },
    { name: "Legal Documents", icon: File, description: "Contract analysis and extraction" },
    { name: "Medical Records", icon: FileText, description: "Healthcare document processing" },
    { name: "Identity Documents", icon: File, description: "ID verification and extraction" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-purple-500/5 to-blue-500/5">
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
                  <Badge className="mb-4 bg-purple-500/10 text-purple-600 border-purple-500/20">
                    AI Solutions
                  </Badge>
                  
                  <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      Document AI Processor
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Automated document processing system with OCR, data extraction, and workflow automation. 
                    Transform unstructured documents into structured, actionable data.
                  </p>

                  <div className="flex flex-wrap gap-4 mb-8">
                    <Button asChild className="bg-purple-500 hover:bg-purple-600">
                      <Link href="#" className="flex items-center space-x-2">
                        <ExternalLink className="w-4 h-4" />
                        <span>View Live Demo</span>
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
                  <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Document AI Demo</p>
                      <p className="text-muted-foreground">Automated document processing</p>
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

        {/* Document Types Overview */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-purple-500/5 to-blue-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Intelligent Document Processing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Automatically process and extract data from any document type with high accuracy and speed.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {documentTypes.map((docType, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-full flex items-center justify-center">
                      <docType.icon className="w-8 h-8 text-purple-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{docType.name}</h3>
                    <p className="text-sm text-muted-foreground">{docType.description}</p>
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
                        <Target className="w-6 h-6 text-purple-500" />
                        <span>Project Overview</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Challenge</h3>
                        <p className="text-muted-foreground">
                          Build an intelligent document processing system that can automatically recognize, 
                          process, and extract data from diverse document types with high accuracy. The system 
                          needed to handle unstructured documents, automate workflows, and integrate with 
                          existing business systems.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Solution</h3>
                        <p className="text-muted-foreground">
                          Developed an AI-powered document processing platform using TensorFlow and OCR 
                          technologies. The system combines computer vision, natural language processing, 
                          and machine learning to automatically classify documents, extract relevant data, 
                          and trigger appropriate workflow actions.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {challenges.map((item, index) => (
                            <div key={index} className="p-4 bg-purple-500/5 rounded-lg border border-purple-500/20">
                              <h4 className="font-semibold text-purple-600 mb-2">{item.challenge}</h4>
                              <p className="text-sm text-muted-foreground mb-2">{item.solution}</p>
                              <p className="text-sm font-medium text-purple-600">{item.impact}</p>
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
                            <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                              <feature.icon className="w-5 h-5 text-purple-500" />
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
                        <Code className="w-6 h-6 text-purple-500" />
                        <span>Technology Stack</span>
                      </CardTitle>
                      <CardDescription>
                        Advanced AI and machine learning technologies for document processing.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((tech, index) => (
                          <div key={index} className="p-4 border border-border/50 rounded-lg hover:border-purple-500/30 transition-colors duration-300">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{tech.name}</h3>
                              <Badge variant="secondary" className="text-xs">{tech.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tech.description}</p>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-6 bg-purple-500/5 rounded-lg border border-purple-500/20">
                        <h3 className="text-lg font-semibold mb-4">AI Architecture Highlights</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-purple-500" />
                            <span>Custom OCR with post-processing</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-purple-500" />
                            <span>Document classification models</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-purple-500" />
                            <span>NLP for context-aware extraction</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-purple-500" />
                            <span>Continuous learning system</span>
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
                        <Rocket className="w-6 h-6 text-purple-500" />
                        <span>Development Process</span>
                      </CardTitle>
                      <CardDescription>
                        20-week development timeline from document analysis to production deployment.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {timeline.map((phase, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
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
                      
                      <div className="mt-8 p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-500/20">
                        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                          <Award className="w-5 h-5 text-purple-500" />
                          <span>Performance Results</span>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">97%</div>
                            <div className="text-sm text-muted-foreground">Accuracy</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">10x</div>
                            <div className="text-sm text-muted-foreground">Faster Processing</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600">-60%</div>
                            <div className="text-sm text-muted-foreground">Cost Reduction</div>
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
        <section className="py-20 bg-gradient-to-br from-purple-500/5 to-blue-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Automate Your Document Processing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's create an intelligent document processing system that saves time, reduces errors, and transforms your workflow.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your Document AI Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-purple-500/20 hover:border-purple-500/40 px-8 py-6 text-lg"
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