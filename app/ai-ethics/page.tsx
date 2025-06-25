"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Heart, Shield, Users, Globe, Scale, Eye, Lightbulb } from 'lucide-react';

export default function AIEthicsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="mb-6 px-4 py-2 border-purple-500/20">
                  <Brain className="w-4 h-4 mr-2" />
                  AI Ethics
                </Badge>
                
                <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                    Responsible AI Development
                  </span>
                </h1>
                
                <p className="text-xl text-muted-foreground">
                  Our commitment to developing AI solutions that are ethical, transparent, and beneficial for humanity.
                </p>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Last updated: January 15, 2024
                </p>
              </div>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-purple-500" />
                      <span>Our AI Ethics Principles</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      At Ncode Innovations, we believe that artificial intelligence should be developed and 
                      deployed in ways that benefit humanity while respecting human rights, dignity, and autonomy. 
                      Our AI ethics framework guides every decision we make in developing AI solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Eye className="w-5 h-5 text-purple-500" />
                      <span>Transparency and Explainability</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We are committed to making our AI systems transparent and explainable:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Clear documentation of AI system capabilities and limitations</li>
                      <li>Explainable AI models that provide reasoning for decisions</li>
                      <li>Open communication about how our AI systems work</li>
                      <li>Regular audits and assessments of AI system performance</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Scale className="w-5 h-5 text-purple-500" />
                      <span>Fairness and Non-Discrimination</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We actively work to ensure our AI systems are fair and do not discriminate:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Diverse and representative training data</li>
                      <li>Regular bias testing and mitigation strategies</li>
                      <li>Inclusive design processes involving diverse perspectives</li>
                      <li>Continuous monitoring for discriminatory outcomes</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-purple-500" />
                      <span>Privacy and Data Protection</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Privacy is fundamental to our AI development approach:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Privacy-by-design in all AI systems</li>
                      <li>Minimal data collection and purpose limitation</li>
                      <li>Strong data encryption and security measures</li>
                      <li>User control over personal data and AI interactions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span>Human-Centered AI</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Our AI solutions are designed to augment human capabilities, not replace them:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>AI systems that enhance human decision-making</li>
                      <li>Meaningful human oversight and control</li>
                      <li>Respect for human autonomy and agency</li>
                      <li>Focus on improving human well-being and productivity</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-purple-500" />
                      <span>Responsible Innovation</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We approach AI innovation with responsibility and foresight:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Thorough impact assessments before deployment</li>
                      <li>Stakeholder engagement and feedback incorporation</li>
                      <li>Continuous learning and improvement processes</li>
                      <li>Collaboration with the broader AI ethics community</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-purple-500" />
                      <span>Societal Impact</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We consider the broader societal implications of our AI systems:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Assessment of potential social and economic impacts</li>
                      <li>Commitment to beneficial AI applications</li>
                      <li>Support for AI education and literacy</li>
                      <li>Contribution to responsible AI standards and practices</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Accountability and Governance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      We maintain strong governance structures to ensure ethical AI development:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>AI Ethics Review Board for all major AI projects</li>
                      <li>Regular ethics training for all team members</li>
                      <li>Clear accountability structures and responsibilities</li>
                      <li>External ethics audits and assessments</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact Us About AI Ethics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      If you have questions or concerns about our AI ethics practices, please contact us:
                    </p>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Email: ethics@ncodesolutionsinc.com</p>
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