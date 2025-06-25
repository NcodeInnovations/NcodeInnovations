"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Scale, Shield, AlertTriangle, Users, Globe } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 px-4 py-2 border-purple-500/20">
                  <FileText className="w-4 h-4 mr-2" />
                  Terms of Service
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Terms of Service
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Please read these terms carefully before using our services.
                </p>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: January 15, 2024
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Scale className="w-5 h-5 text-purple-500" />
                      <span>Acceptance of Terms</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      By accessing and using Ncode Innovations' services, you accept and agree to be bound by 
                      the terms and provision of this agreement. If you do not agree to abide by the above, 
                      please do not use this service.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span>Use License</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Permission is granted to temporarily download one copy of the materials on Ncode Innovations' 
                      website for personal, non-commercial transitory viewing only. This is the grant of a license, 
                      not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Modify or copy the materials</li>
                      <li>Use the materials for any commercial purpose or for any public display</li>
                      <li>Attempt to reverse engineer any software contained on the website</li>
                      <li>Remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <AlertTriangle className="w-5 h-5 text-purple-500" />
                      <span>Disclaimer</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      The materials on Ncode Innovations' website are provided on an 'as is' basis. 
                      Ncode Innovations makes no warranties, expressed or implied, and hereby disclaims 
                      and negates all other warranties including without limitation, implied warranties 
                      or conditions of merchantability, fitness for a particular purpose, or non-infringement 
                      of intellectual property or other violation of rights.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-purple-500" />
                      <span>Limitations</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      In no event shall Ncode Innovations or its suppliers be liable for any damages 
                      (including, without limitation, damages for loss of data or profit, or due to 
                      business interruption) arising out of the use or inability to use the materials 
                      on Ncode Innovations' website, even if Ncode Innovations or an authorized 
                      representative has been notified orally or in writing of the possibility of such damage.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-purple-500" />
                      <span>Governing Law</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      These terms and conditions are governed by and construed in accordance with the 
                      laws of Maryland, United States, and you irrevocably submit to the exclusive 
                      jurisdiction of the courts in that state or location.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: legal@ncodesolutionsinc.com</p>
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