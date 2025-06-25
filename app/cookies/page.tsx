"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, BarChart3, Shield, Globe, Users } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 px-4 py-2 border-purple-500/20">
                  <Cookie className="w-4 h-4 mr-2" />
                  Cookie Policy
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Cookie Policy
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Learn how we use cookies to improve your experience on our website.
                </p>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: January 15, 2024
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Cookie className="w-5 h-5 text-purple-500" />
                      <span>What Are Cookies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Cookies are small text files that are placed on your computer or mobile device when 
                      you visit our website. They help us provide you with a better experience by remembering 
                      your preferences and understanding how you use our site.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Settings className="w-5 h-5 text-purple-500" />
                      <span>Essential Cookies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      These cookies are necessary for the website to function and cannot be switched off. 
                      They are usually only set in response to actions made by you which amount to a request 
                      for services, such as:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Setting your privacy preferences</li>
                      <li>Logging in or filling in forms</li>
                      <li>Providing secure areas of the website</li>
                      <li>Shopping cart functionality</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5 text-purple-500" />
                      <span>Analytics Cookies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      These cookies help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously. This helps us improve our website and services:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Number of visitors and page views</li>
                      <li>How long visitors stay on our site</li>
                      <li>Which pages are most popular</li>
                      <li>Where visitors come from</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span>Functional Cookies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      These cookies enable enhanced functionality and personalization. They may be set by 
                      us or by third-party providers whose services we have added to our pages:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Remembering your preferences and settings</li>
                      <li>Providing chat functionality</li>
                      <li>Enabling social media features</li>
                      <li>Personalizing content based on your interests</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-purple-500" />
                      <span>Managing Cookies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      You can control and manage cookies in various ways:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Use our cookie consent banner to manage your preferences</li>
                      <li>Change your browser settings to block or delete cookies</li>
                      <li>Use browser extensions to manage cookies</li>
                      <li>Opt out of analytics tracking through our privacy settings</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      Please note that blocking some types of cookies may impact your experience of our website 
                      and the services we are able to offer.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-purple-500" />
                      <span>Third-Party Cookies</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Some cookies on our site are set by third-party services that appear on our pages. 
                      These include analytics providers, social media platforms, and advertising networks. 
                      We do not control these cookies, and you should check the relevant third party's 
                      website for more information about their cookies and how to manage them.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about our use of cookies, please contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: privacy@ncodesolutionsinc.com</p>
                      <p>Phone: +1 410-988-6400</p>
                      <p>Address: MD, U.S.A</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}