"use client";

import { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Loader2,
  MessageSquare,
  Calendar,
  Globe,
  Smartphone,
  Brain,
  Bot,
  Workflow,
  Sparkles,
  Zap
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [showVismeForm, setShowVismeForm] = useState(true);
  const [vismeLoaded, setVismeLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
    newsletter: false
  });
  const { toast } = useToast();

  // Load Visme script and initialize
  useEffect(() => {
    const loadVismeScript = () => {
      // Check if script already exists
      const existingScript = document.querySelector('script[src="https://static-bundles.visme.co/forms/vismeforms-embed.js"]');
      if (existingScript) {
        setVismeLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
      script.async = true;
      script.onload = () => {
        console.log('Visme script loaded successfully');
        setVismeLoaded(true);
        
        // Initialize Visme forms after a short delay
        setTimeout(() => {
          if (window.visme && window.visme.initForms) {
            window.visme.initForms();
            console.log('Visme forms initialized');
          }
        }, 1000);
      };
      script.onerror = () => {
        console.error('Failed to load Visme script');
        setVismeLoaded(false);
      };
      
      // Append to body instead of head for better compatibility
      document.body.appendChild(script);
    };

    if (showVismeForm) {
      loadVismeScript();
    }
  }, [showVismeForm]);

  // Re-initialize when switching to Visme form
  useEffect(() => {
    if (vismeLoaded && showVismeForm) {
      setTimeout(() => {
        if (window.visme && window.visme.initForms) {
          window.visme.initForms();
        }
      }, 500);
    }
  }, [vismeLoaded, showVismeForm]);

  const services = [
    { value: 'ai', label: 'AI-Powered Solutions', icon: Brain },
    { value: 'web', label: 'Web Development', icon: Globe },
    { value: 'mobile', label: 'Mobile App Development', icon: Smartphone },
    { value: 'automation', label: 'Automation Solutions', icon: Workflow },
    { value: 'agents', label: 'AI Agents & Chatbots', icon: Bot },
    { value: 'other', label: 'Other / Consultation', icon: MessageSquare }
  ];

  const budgetRanges = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-75k', label: '$30,000 - $75,000' },
    { value: '75k+', label: '$75,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelines = [
    { value: '1-2weeks', label: '1-2 weeks' },
    { value: '1month', label: '1 month' },
    { value: '2-3months', label: '2-3 months' },
    { value: '3-6months', label: '3-6 months' },
    { value: '6months+', label: '6+ months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hr@ncodesolutionsinc.com',
      href: 'mailto:hr@ncodesolutionsinc.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 410-988-6400',
      href: 'tel:+14109886400',
      description: 'Mon-Fri from 8am to 6pm EST'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'MD, U.S.A',
      href: '#',
      description: 'Available for in-person meetings'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      href: '#',
      description: 'We respond to all inquiries quickly'
    }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: '',
          newsletter: false
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: "There was an error sending your message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-background to-purple-500/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge variant="outline" className="mb-6 px-4 py-2 border-purple-500/20">
              <Brain className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Let's Build the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                With AI Together
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your business with cutting-edge AI solutions? We're here to help you 
              create intelligent systems that drive innovation and exceptional results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border border-border/50 hover:border-purple-500/30 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-purple-500" />
                    </div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-purple-500 font-medium mb-1">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Form Toggle */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-4 bg-muted/50 rounded-xl p-2">
                <Button
                  variant={showVismeForm ? "default" : "ghost"}
                  onClick={() => setShowVismeForm(true)}
                  className="px-6 py-3"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Interactive Form
                </Button>
                <Button
                  variant={!showVismeForm ? "default" : "ghost"}
                  onClick={() => setShowVismeForm(false)}
                  className="px-6 py-3"
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Standard Form
                </Button>
              </div>
            </div>

            {showVismeForm ? (
              /* Visme Form Section */
              <div className="max-w-6xl mx-auto">
                <Card className="border-2 border-purple-500/20 shadow-2xl bg-gradient-to-br from-background/95 via-background to-purple-500/5 backdrop-blur-sm overflow-hidden">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-3xl flex items-center justify-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center animate-pulse">
                        <Sparkles className="w-7 h-7 text-white" />
                      </div>
                      <span>Interactive Contact Form</span>
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Experience our enhanced interactive form with beautiful animations and smart features.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    {/* Visme Form Container */}
                    <div className="relative w-full" style={{ minHeight: '800px' }}>
                      {/* Exact Visme Embed Code */}
                      <div 
                        className="visme_d w-full h-full" 
                        data-title="B2B Newsletter Subscription" 
                        data-url="n011jgz4-b2b-newsletter-subscription?fullPage=true" 
                        data-domain="forms" 
                        data-full-page="true" 
                        data-min-height="100vh" 
                        data-form-id="132180"
                        style={{ 
                          width: '100%', 
                          minHeight: '800px',
                          border: 'none',
                          overflow: 'hidden'
                        }}
                      ></div>
                      
                      {/* Loading Overlay */}
                      {!vismeLoaded && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5 backdrop-blur-sm z-10">
                          <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-spin">
                              <Sparkles className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                              Loading Interactive Form
                            </h3>
                            <p className="text-muted-foreground mb-6">
                              Preparing your enhanced form experience with beautiful animations...
                            </p>
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                              <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Fallback Message */}
                    <div className="p-6 text-center border-t border-border/50">
                      <p className="text-sm text-muted-foreground mb-4">
                        Having trouble with the interactive form? 
                      </p>
                      <Button 
                        onClick={() => setShowVismeForm(false)}
                        variant="outline"
                        className="border-purple-500/20 hover:bg-purple-500/10"
                      >
                        Use Standard Form Instead
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ) : (
              /* Standard Form */
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Contact Form */}
                <Card className="border-2 border-border/50 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Start Your AI Project</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours with a detailed AI strategy proposal.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 410-988-6400"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company Name</Label>
                          <Input
                            id="company"
                            type="text"
                            placeholder="Company Inc."
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Service Needed</Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                <div className="flex items-center space-x-2">
                                  <service.icon className="w-4 h-4" />
                                  <span>{service.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="budget">Project Budget</Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range.value} value={range.value}>
                                  {range.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="timeline">Project Timeline</Label>
                          <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              {timelines.map((timeline) => (
                                <SelectItem key={timeline.value} value={timeline.value}>
                                  {timeline.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your AI project, goals, and any specific requirements..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="min-h-[120px]"
                          required
                        />
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Subscribe to our newsletter for AI insights and updates
                        </Label>
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 h-12"
                      >
                        {isLoading ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Additional Info */}
                <div className="space-y-8">
                  <Card className="border border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Brain className="w-6 h-6 text-purple-500" />
                        <span>What Happens Next?</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-semibold text-purple-500">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">AI Strategy Review</h4>
                          <p className="text-sm text-muted-foreground">We'll analyze your AI needs and automation opportunities within 24 hours.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-semibold text-purple-500">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">AI Discovery Call</h4>
                          <p className="text-sm text-muted-foreground">We'll schedule a call to discuss your AI transformation roadmap in detail.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-semibold text-purple-500">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Custom AI Proposal</h4>
                          <p className="text-sm text-muted-foreground">You'll receive a detailed AI implementation proposal with timeline and ROI projections.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <Calendar className="w-6 h-6 text-purple-500" />
                        <span>Book a Free AI Consultation</span>
                      </CardTitle>
                      <CardDescription>
                        Prefer to talk directly? Schedule a free 30-minute AI strategy consultation.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        asChild
                        variant="outline" 
                        className="w-full border-purple-500/20 hover:bg-purple-500 hover:text-white transition-all duration-300"
                      >
                        <a href="#" target="_blank" rel="noopener noreferrer">
                          Schedule Free AI Call
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border border-border/50 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5">
                    <CardContent className="p-6 text-center">
                      <Brain className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                      <h3 className="font-semibold text-lg mb-2">Why Choose Ncode Innovations?</h3>
                      <ul className="text-sm text-muted-foreground space-y-2 text-left">
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span>AI-first approach to every solution</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span>Proven AI implementation track record</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span>24/7 AI-powered support</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                          <span>Future-proof AI architecture</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}