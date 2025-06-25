"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "Masood Technologies transformed our online presence completely. Their full-stack expertise and attention to detail exceeded our expectations. The AI chatbot they implemented increased our customer engagement by 300%.",
      project: "E-commerce Platform + AI Integration"
    },
    {
      name: "Michael Chen",
      role: "Founder",
      company: "HealthTech Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "Working with this team was exceptional. They delivered our mobile health app on time and under budget. The React Native development was flawless, and the backend architecture is robust and scalable.",
      project: "Mobile Health Application"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency Co.",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "The website redesign boosted our conversion rate by 250%. The team's understanding of modern web development and UX principles is outstanding. They're our go-to development partner now.",
      project: "Website Redesign & Optimization"
    },
    {
      name: "David Kim",
      role: "CTO",
      company: "FinanceFlow",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "The AI automation solutions they built saved us 40 hours per week in manual processes. Their expertise in machine learning and workflow automation is impressive. Highly recommend!",
      project: "AI Workflow Automation"
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "EduTech Innovations",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      testimonial: "They built our entire learning management system from scratch. The scalability, performance, and user experience are phenomenal. Our student engagement has increased significantly.",
      project: "Learning Management System"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-2 border-border/50 shadow-2xl">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Avatar and Info */}
                <div className="flex-shrink-0 text-center lg:text-left">
                  <Avatar className="w-20 h-20 mx-auto lg:mx-0 mb-4 ring-4 ring-primary/20">
                    <AvatarImage 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                    />
                    <AvatarFallback className="text-lg font-semibold bg-primary/10">
                      {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <h4 className="font-semibold text-lg mb-1">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary font-medium mb-1">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {testimonials[currentIndex].company}
                  </p>
                  
                  <Badge variant="secondary" className="text-xs">
                    {testimonials[currentIndex].project}
                  </Badge>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <Quote className="w-8 h-8 text-primary/30 mr-2" />
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-lg lg:text-xl leading-relaxed text-center lg:text-left mb-6">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
}