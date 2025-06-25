"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  User,
  Mail,
  Phone,
  Brain,
  Globe,
  Smartphone,
  Bot,
  Workflow,
  MessageSquare,
  Send,
  CheckCircle,
  Loader2,
  Sparkles,
  Zap,
  Clock,
  Shield,
  Star,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function EnquiryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [animationPhase, setAnimationPhase] = useState(0);
  const { toast } = useToast();

  // Advanced animation system
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 6);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { value: 'ai-solutions', label: 'AI-Powered Solutions', icon: Brain, color: 'text-purple-500' },
    { value: 'web-development', label: 'Web Development', icon: Globe, color: 'text-blue-500' },
    { value: 'mobile-development', label: 'Mobile App Development', icon: Smartphone, color: 'text-green-500' },
    { value: 'automation', label: 'Automation & AI Agents', icon: Bot, color: 'text-orange-500' },
    { value: 'workflow', label: 'Workflow Automation', icon: Workflow, color: 'text-cyan-500' },
    { value: 'other', label: 'Other / Consultation', icon: MessageSquare, color: 'text-pink-500' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚀 Form submission started');
    console.log('📝 Form data:', { 
      fullName: formData.fullName, 
      email: formData.email, 
      hasMessage: !!formData.message 
    });
    
    if (!formData.fullName || !formData.email || !formData.message) {
      console.log('❌ Validation failed - missing required fields');
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      console.log('📡 Sending request to /api/enquiry...');
      
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website_enquiry_form'
        }),
      });

      console.log('📥 Response status:', response.status);
      console.log('📥 Response ok:', response.ok);

      if (response.ok) {
        const result = await response.json();
        console.log('✅ Success response:', result);
        
        setIsSubmitted(true);
        toast({
          title: "Enquiry Submitted Successfully!",
          description: "Thank you for your interest. Our AI experts will get back to you within 24 hours.",
        });
        
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            service: '',
            message: ''
          });
        }, 5000);
      } else {
        const errorData = await response.json();
        console.error('❌ Error response:', errorData);
        throw new Error(errorData.error || 'Failed to submit enquiry');
      }
    } catch (error) {
      console.error('❌ Submission error:', error);
      
      let errorMessage = 'There was an error submitting your enquiry. Please try again or contact us directly.';
      
      if (error instanceof Error) {
        if (error.message.includes('Database not configured')) {
          errorMessage = 'Our contact system is currently being set up. Please email us directly at hr@ncodesolutionsinc.com';
        } else if (error.message.includes('Invalid URL')) {
          errorMessage = 'Our contact system is currently being configured. Please try again in a few minutes or email us directly.';
        }
      }
      
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-purple-500/5 to-cyan-500/5 relative overflow-hidden">
        {/* Success Animation Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          {/* Floating success particles */}
          <div className="absolute top-20 left-20 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-emerald-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-40 w-5 h-5 bg-teal-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="border-2 border-green-500/20 shadow-2xl bg-gradient-to-br from-green-50/50 via-background to-emerald-50/30 dark:from-green-900/10 dark:via-background dark:to-emerald-900/5 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <CheckCircle className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    🎉 Enquiry Received!
                  </span>
                </h2>
                
                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Thank you for reaching out to <span className="font-semibold text-purple-500">Ncode Innovations</span>! 
                  Our AI specialists are already reviewing your requirements and will contact you within 24 hours 
                  with a personalized solution strategy.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-green-600">24hr Response</div>
                    <div className="text-sm text-muted-foreground">Lightning fast</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl p-4 border border-purple-500/20">
                    <Brain className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-purple-600">AI Experts</div>
                    <div className="text-sm text-muted-foreground">Dedicated team</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-blue-600">Secure & Private</div>
                    <div className="text-sm text-muted-foreground">100% confidential</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-xl p-6 border border-purple-500/10">
                  <h3 className="font-semibold text-lg mb-3">What's Next?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-purple-500" />
                      <span>AI Strategy Analysis</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Rocket className="w-4 h-4 text-blue-500" />
                      <span>Custom Solution Design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-cyan-500" />
                      <span>ROI Projections</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-purple-500/5 to-cyan-500/5 relative overflow-hidden min-h-screen">
      {/* Advanced Dynamic Background System */}
      <div className="absolute inset-0">
        {/* Phase-based morphing shapes */}
        <div className={`absolute transition-all duration-2000 ease-in-out ${
          animationPhase === 0 ? 'top-20 left-10 w-40 h-40 rounded-full' :
          animationPhase === 1 ? 'top-32 left-20 w-32 h-48 rounded-3xl rotate-45' :
          animationPhase === 2 ? 'top-16 left-16 w-48 h-32 rounded-2xl rotate-12' :
          animationPhase === 3 ? 'top-24 left-12 w-36 h-36 rounded-full rotate-90' :
          animationPhase === 4 ? 'top-28 left-24 w-44 h-28 rounded-3xl rotate-180' :
          'top-20 left-10 w-40 h-40 rounded-full rotate-0'
        } bg-gradient-to-br from-purple-400/20 via-pink-400/20 to-purple-400/20 blur-2xl animate-pulse`}></div>

        <div className={`absolute transition-all duration-2000 ease-in-out ${
          animationPhase === 0 ? 'top-40 right-20 w-32 h-32 rounded-lg rotate-45' :
          animationPhase === 1 ? 'top-20 right-16 w-40 h-24 rounded-3xl rotate-90' :
          animationPhase === 2 ? 'top-48 right-24 w-28 h-40 rounded-2xl rotate-180' :
          animationPhase === 3 ? 'top-32 right-12 w-36 h-36 rounded-full rotate-270' :
          animationPhase === 4 ? 'top-44 right-20 w-32 h-32 rounded-lg rotate-360' :
          'top-40 right-20 w-32 h-32 rounded-lg rotate-45'
        } bg-gradient-to-br from-blue-400/20 via-cyan-400/20 to-blue-400/20 blur-2xl animate-pulse`}></div>

        {/* Dynamic particle system */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full transition-all duration-1000 ${
              i % 4 === 0 ? 'bg-purple-400/60 animate-ping' :
              i % 4 === 1 ? 'bg-cyan-400/60 animate-bounce' :
              i % 4 === 2 ? 'bg-pink-400/60 animate-pulse' :
              'bg-emerald-400/60 animate-ping'
            }`}
            style={{
              top: `${20 + (i * 7) % 60}%`,
              left: `${10 + (i * 11) % 80}%`,
              animationDelay: `${i * 0.3}s`,
              transform: animationPhase === i % 6 ? 'scale(1.5)' : 'scale(1)'
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block mb-6">
              <Badge variant="outline" className="px-6 py-3 border-purple-500/20 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 animate-pulse"></div>
                <Sparkles className="w-5 h-5 mr-2 text-purple-500 animate-spin relative z-10" style={{animationDuration: '3s'}} />
                <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent relative z-10">
                  Start Your AI Journey
                </span>
              </Badge>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 relative">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
                Your Business?
              </span>
            </h2>
            
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-2 border-border/50 shadow-2xl bg-gradient-to-br from-background/95 via-background to-purple-500/5 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-pulse"></div>
                
                <CardHeader className="pb-6 relative z-10">
                  <CardTitle className="text-3xl flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transition-all duration-1000 ${
                      animationPhase % 3 === 0 ? 'animate-pulse scale-110 rotate-12' : 'animate-pulse scale-100 rotate-0'
                    }`}>
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <span className="bg-gradient-to-r from-foreground to-purple-600 bg-clip-text text-transparent">
                      Project Enquiry
                    </span>
                  </CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Full Name */}
                    <div className="space-y-3 group/field">
                      <Label htmlFor="fullName" className="flex items-center space-x-2 text-base font-semibold group-hover/field:text-purple-600 transition-all duration-300">
                        <User className="w-5 h-5 text-purple-500" />
                        <span>Full Name *</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="Enter your full name"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                          className="h-14 text-lg border-2 border-border/50 focus:border-purple-500/50 bg-background/80 transition-all duration-500 hover:border-purple-500/30 focus:shadow-lg focus:shadow-purple-500/20"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-3 group/field">
                        <Label htmlFor="email" className="flex items-center space-x-2 text-base font-semibold group-hover/field:text-purple-600 transition-all duration-300">
                          <Mail className="w-5 h-5 text-purple-500" />
                          <span>Email Address *</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="h-14 text-lg border-2 border-border/50 focus:border-purple-500/50 bg-background/80 transition-all duration-500 hover:border-purple-500/30 focus:shadow-lg focus:shadow-purple-500/20"
                            required
                          />
                        </div>
                      </div>
                      
                      {/* Phone */}
                      <div className="space-y-3 group/field">
                        <Label htmlFor="phone" className="flex items-center space-x-2 text-base font-semibold group-hover/field:text-purple-600 transition-all duration-300">
                          <Phone className="w-5 h-5 text-purple-500" />
                          <span>Phone Number</span>
                        </Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 410-988-6400"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="h-14 text-lg border-2 border-border/50 focus:border-purple-500/50 bg-background/80 transition-all duration-500 hover:border-purple-500/30 focus:shadow-lg focus:shadow-purple-500/20"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-3 group/field">
                      <Label htmlFor="service" className="flex items-center space-x-2 text-base font-semibold group-hover/field:text-purple-600 transition-all duration-300">
                        <Zap className="w-5 h-5 text-purple-500" />
                        <span>What service are you interested in?</span>
                      </Label>
                      <div className="relative">
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="h-14 text-lg border-2 border-border/50 focus:border-purple-500/50 bg-background/80 hover:border-purple-500/30 transition-all duration-500">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-background/95 backdrop-blur-sm border-purple-500/20">
                            {services.map((service) => (
                              <SelectItem key={service.value} value={service.value} className="py-3 hover:bg-purple-500/10 transition-colors duration-200">
                                <div className="flex items-center space-x-3">
                                  <service.icon className={`w-5 h-5 ${service.color}`} />
                                  <span className="text-base">{service.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-3 group/field">
                      <Label htmlFor="message" className="flex items-center space-x-2 text-base font-semibold group-hover/field:text-purple-600 transition-all duration-300">
                        <MessageSquare className="w-5 h-5 text-purple-500" />
                        <span>Your Message / Project Details *</span>
                      </Label>
                      <div className="relative">
                        <Textarea
                          id="message"
                          placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          className="min-h-[140px] text-lg border-2 border-border/50 focus:border-purple-500/50 bg-background/80 transition-all duration-500 resize-none hover:border-purple-500/30 focus:shadow-lg focus:shadow-purple-500/20"
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="relative group/submit">
                      <Button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full h-16 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:from-purple-600 hover:via-blue-600 hover:to-cyan-600 text-white shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 text-xl font-bold rounded-xl relative overflow-hidden group-hover/submit:scale-[1.02]"
                      >
                        <div className="relative z-10 flex items-center justify-center">
                          {isLoading ? (
                            <>
                              <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                              <span className="animate-pulse">Submitting Enquiry...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-6 h-6 mr-3 group-hover/submit:translate-x-1 group-hover/submit:scale-110 transition-transform duration-300" />
                              <span>Submit Enquiry</span>
                            </>
                          )}
                        </div>
                      </Button>
                    </div>

                    {/* Privacy Note */}
                    <div className="bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 rounded-xl p-4 border border-purple-500/10 relative overflow-hidden group/privacy">
                      <p className="text-sm text-muted-foreground text-center flex items-center justify-center space-x-2 relative z-10">
                        <Shield className="w-4 h-4 text-purple-500 animate-pulse" />
                        <span>Our team will get back to you within 24 hours. Your information is secure and private.</span>
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Side Information */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <Card className="border border-border/50 bg-gradient-to-br from-background/80 to-purple-500/5 hover:shadow-lg transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <Brain className="w-6 h-6 text-purple-500" />
                    <span>Why Choose Ncode?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: Brain, title: "AI-First Approach", desc: "Every solution enhanced with cutting-edge AI technology for maximum impact" },
                    { icon: Zap, title: "Lightning Fast", desc: "Rapid development and deployment cycles with agile methodology" },
                    { icon: CheckCircle, title: "Proven Results", desc: "99% client satisfaction with measurable ROI and business growth" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group/item hover:bg-purple-500/5 p-3 rounded-lg transition-all duration-300">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover/item:scale-110 transition-transform duration-300">
                        <item.icon className="w-5 h-5 text-purple-500" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-2 group-hover/item:text-purple-600 transition-colors duration-300">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border border-border/50 bg-gradient-to-br from-background/80 to-cyan-500/5 hover:shadow-lg transition-all duration-500">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-xl">
                    <Mail className="w-6 h-6 text-cyan-500" />
                    <span>Direct Contact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Mail, text: "hr@ncodesolutionsinc.com" },
                    { icon: Phone, text: "+1 410-988-6400" },
                    { icon: Clock, text: "24/7 AI-Powered Support" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-cyan-500" />
                      <span className="text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border border-border/50 bg-gradient-to-br from-background/80 to-green-500/5 hover:shadow-lg transition-all duration-500">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 text-center">Our Track Record</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {[
                      { value: "100+", label: "AI Projects", color: "from-green-500/10 to-emerald-500/10", textColor: "text-green-600" },
                      { value: "24hr", label: "Response Time", color: "from-blue-500/10 to-cyan-500/10", textColor: "text-blue-600" },
                      { value: "99%", label: "Success Rate", color: "from-purple-500/10 to-pink-500/10", textColor: "text-purple-600" },
                      { value: "24/7", label: "AI Support", color: "from-orange-500/10 to-red-500/10", textColor: "text-orange-600" }
                    ].map((stat, index) => (
                      <div key={index} className={`bg-gradient-to-br ${stat.color} rounded-lg p-4 hover:scale-105 transition-all duration-300`}>
                        <div className={`text-3xl font-bold ${stat.textColor} mb-1`}>{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}