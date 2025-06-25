"use client";

import Link from 'next/link';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Brain,
  Calendar,
  Clock,
  ArrowRight,
  User,
  BookOpen,
  TrendingUp,
  Zap,
  Code,
  Rocket,
  Target,
  Lightbulb,
  Globe,
  Smartphone
} from 'lucide-react';

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in Business Automation",
    excerpt: "Discover how artificial intelligence is revolutionizing business processes and what it means for your company's future.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "AI Insights",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    slug: "future-of-ai-business-automation"
  };

  const blogPosts = [
    {
      title: "Building Scalable AI Applications with Modern Frameworks",
      excerpt: "Learn the best practices for developing AI applications that can scale with your business needs.",
      author: "Michael Chen",
      date: "2024-01-12",
      readTime: "6 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      slug: "scalable-ai-applications"
    },
    {
      title: "Mobile App Development Trends in 2024",
      excerpt: "Explore the latest trends in mobile development and how they're shaping user experiences.",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "5 min read",
      category: "Mobile",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=600",
      slug: "mobile-app-trends-2024"
    },
    {
      title: "Implementing Chatbots for Customer Service Excellence",
      excerpt: "A comprehensive guide to deploying AI chatbots that enhance customer satisfaction.",
      author: "David Kim",
      date: "2024-01-08",
      readTime: "7 min read",
      category: "AI Solutions",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      slug: "chatbots-customer-service"
    },
    {
      title: "Web Performance Optimization: A Developer's Guide",
      excerpt: "Essential techniques for building lightning-fast websites that convert visitors into customers.",
      author: "Alex Thompson",
      date: "2024-01-05",
      readTime: "9 min read",
      category: "Web Development",
      image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600",
      slug: "web-performance-optimization"
    },
    {
      title: "The ROI of Business Process Automation",
      excerpt: "Calculate the real return on investment when implementing automation in your business workflows.",
      author: "Lisa Chen",
      date: "2024-01-03",
      readTime: "6 min read",
      category: "Automation",
      image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600",
      slug: "roi-business-automation"
    },
    {
      title: "Machine Learning Models for Predictive Analytics",
      excerpt: "Understanding how to leverage ML models to predict trends and make data-driven decisions.",
      author: "Robert Wilson",
      date: "2024-01-01",
      readTime: "10 min read",
      category: "Machine Learning",
      image: "https://images.pexels.com/photos/3184464/pexels-photo-3184464.jpeg?auto=compress&cs=tinysrgb&w=600",
      slug: "ml-predictive-analytics"
    }
  ];

  const categories = [
    { name: "AI Insights", count: 12, icon: Brain, color: "text-purple-500" },
    { name: "Development", count: 8, icon: Code, color: "text-blue-500" },
    { name: "Mobile", count: 6, icon: Smartphone, color: "text-green-500" },
    { name: "Web Development", count: 10, icon: Globe, color: "text-orange-500" },
    { name: "Automation", count: 5, icon: Zap, color: "text-cyan-500" },
    { name: "Machine Learning", count: 7, icon: Target, color: "text-pink-500" }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "AI Insights": return Brain;
      case "Development": return Code;
      case "Mobile": return Smartphone;
      case "Web Development": return Globe;
      case "Automation": return Zap;
      case "Machine Learning": return Target;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "AI Insights": return "text-purple-500";
      case "Development": return "text-blue-500";
      case "Mobile": return "text-green-500";
      case "Web Development": return "text-orange-500";
      case "Automation": return "text-cyan-500";
      case "Machine Learning": return "text-pink-500";
      default: return "text-gray-500";
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-purple-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 px-4 py-2 border-purple-500/20">
                <BookOpen className="w-4 h-4 mr-2" />
                Ncode Innovations Blog
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  AI Insights &
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                  Tech Innovation
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, automation, web development, 
                and the latest technology trends shaping the future of business.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 flex items-center">
                <TrendingUp className="w-6 h-6 mr-2 text-purple-500" />
                Featured Article
              </h2>
              
              <Card className="overflow-hidden border-2 border-purple-500/20 shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 group cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img 
                      src={featuredPost.image} 
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-purple-500 text-white">Featured</Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary" className="flex items-center space-x-1">
                        <Brain className="w-3 h-3" />
                        <span>{featuredPost.category}</span>
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-purple-500 transition-colors duration-200">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">{featuredPost.author}</span>
                      </div>
                      
                      <Button variant="outline" className="group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-gradient-to-br from-muted/30 via-purple-500/5 to-cyan-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-3">
                  <h2 className="text-2xl font-bold mb-8">Latest Articles</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => {
                      const CategoryIcon = getCategoryIcon(post.category);
                      const categoryColor = getCategoryColor(post.category);
                      
                      return (
                        <Card key={index} className="group overflow-hidden border border-border/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg cursor-pointer">
                          <div className="relative overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title}
                              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-4 left-4">
                              <Badge variant="secondary" className="flex items-center space-x-1 bg-white/90">
                                <CategoryIcon className={`w-3 h-3 ${categoryColor}`} />
                                <span>{post.category}</span>
                              </Badge>
                            </div>
                          </div>
                          
                          <CardContent className="p-6">
                            <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                              <div className="flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(post.date).toLocaleDateString()}
                              </div>
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 mr-1" />
                                {post.readTime}
                              </div>
                            </div>
                            
                            <h3 className="text-lg font-bold mb-3 group-hover:text-purple-500 transition-colors duration-200">
                              {post.title}
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <User className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm font-medium">{post.author}</span>
                              </div>
                              
                              <Button variant="ghost" size="sm" className="group-hover:text-purple-500 transition-colors duration-200">
                                Read More
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24 space-y-8">
                    {/* Categories */}
                    <Card className="border border-border/50">
                      <CardHeader>
                        <CardTitle className="text-lg">Categories</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        {categories.map((category, index) => (
                          <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-muted/50 transition-colors duration-200 cursor-pointer">
                            <div className="flex items-center space-x-2">
                              <category.icon className={`w-4 h-4 ${category.color}`} />
                              <span className="font-medium">{category.name}</span>
                            </div>
                            <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Newsletter Signup */}
                    <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-cyan-500/5">
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center">
                          <Lightbulb className="w-5 h-5 mr-2 text-purple-500" />
                          Stay Updated
                        </CardTitle>
                        <CardDescription>
                          Get the latest AI insights and tech trends delivered to your inbox.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white">
                          <Link href="/contact">Subscribe to Newsletter</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Implement These Ideas?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Turn insights into action. Let our team help you implement the latest AI and automation 
                technologies in your business.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                
                <Button 
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-500/20 hover:border-purple-500/40 bg-background/50 backdrop-blur-sm text-lg px-8 py-6"
                >
                  <Link href="/services">Explore Services</Link>
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