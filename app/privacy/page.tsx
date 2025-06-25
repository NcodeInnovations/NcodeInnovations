"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, Database, Users, Globe } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 px-4 py-2 border-purple-500/20">
                  <Shield className="w-4 h-4 mr-2" />
                  Privacy Policy
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Your Privacy Matters
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  At Ncode Innovations, we are committed to protecting your privacy and ensuring 
                  the security of your personal information.
                </p>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: January 15, 2024
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Database className="w-5 h-5 text-purple-500" />
                      <span>Information We Collect</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We collect information you provide directly to us, such as when you create an account, 
                      contact us, or use our services. This may include:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Name and contact information</li>
                      <li>Account credentials</li>
                      <li>Payment information</li>
                      <li>Communications with us</li>
                      <li>Usage data and analytics</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="w-5 h-5 text-purple-500" />
                      <span>How We Use Your Information</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Provide, maintain, and improve our services</li>
                      <li>Process transactions and send related information</li>
                      <li>Send technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Develop new products and services</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lock className="w-5 h-5 text-purple-500" />
                      <span>Data Security</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational measures to protect your 
                      personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>End-to-end encryption for sensitive data</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and authentication</li>
                      <li>Secure data centers and infrastructure</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span>Information Sharing</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this policy:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>With service providers who assist in our operations</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and safety</li>
                      <li>In connection with a business transfer</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-purple-500" />
                      <span>Your Rights</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Access to your personal information</li>
                      <li>Correction of inaccurate information</li>
                      <li>Deletion of your personal information</li>
                      <li>Portability of your data</li>
                      <li>Objection to processing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy, please contact us:
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