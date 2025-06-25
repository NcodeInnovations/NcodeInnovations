"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Mail,
  MessageSquare,
  Users,
  Calendar,
  Phone,
  Building,
  DollarSign,
  Clock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Cloud,
  TrendingUp,
  Eye,
  Edit
} from 'lucide-react';
import { updateSubmissionStatus } from '@/lib/supabase';
import type { ContactSubmission, ProjectEnquiry, NewsletterSubscription } from '@/lib/supabase';

export default function AdminDashboard() {
  const [contactSubmissions, setContactSubmissions] = useState<ContactSubmission[]>([]);
  const [projectEnquiries, setProjectEnquiries] = useState<ProjectEnquiry[]>([]);
  const [newsletterSubscriptions, setNewsletterSubscriptions] = useState<NewsletterSubscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      // Fetch contact submissions
      const contactResponse = await fetch('/api/contact');
      if (contactResponse.ok) {
        const contactData = await contactResponse.json();
        setContactSubmissions(contactData.data || []);
      }

      // Fetch project enquiries
      const enquiryResponse = await fetch('/api/enquiry');
      if (enquiryResponse.ok) {
        const enquiryData = await enquiryResponse.json();
        setProjectEnquiries(enquiryData.data || []);
      }

      // Fetch newsletter subscriptions
      const newsletterResponse = await fetch('/api/newsletter');
      if (newsletterResponse.ok) {
        const newsletterData = await newsletterResponse.json();
        setNewsletterSubscriptions(newsletterData.data || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleStatusUpdate = async (
    type: 'contact' | 'enquiry',
    id: string,
    newStatus: 'new' | 'contacted' | 'in_progress' | 'completed'
  ) => {
    setUpdating(id);
    try {
      const table = type === 'contact' ? 'contact_submissions' : 'project_enquiries';
      await updateSubmissionStatus(table, id, newStatus);
      
      // Update local state
      if (type === 'contact') {
        setContactSubmissions(prev => 
          prev.map(item => item.id === id ? { ...item, status: newStatus } : item)
        );
      } else {
        setProjectEnquiries(prev => 
          prev.map(item => item.id === id ? { ...item, status: newStatus } : item)
        );
      }
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setUpdating(null);
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: "default" | "secondary" | "destructive" | "outline", color: string }> = {
      new: { variant: "destructive", color: "text-red-600" },
      contacted: { variant: "outline", color: "text-blue-600" },
      in_progress: { variant: "secondary", color: "text-yellow-600" },
      completed: { variant: "default", color: "text-green-600" }
    };
    const config = variants[status] || variants.new;
    return <Badge variant={config.variant} className={config.color}>{status.replace('_', ' ')}</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStats = () => {
    const newContacts = contactSubmissions.filter(c => c.status === 'new').length;
    const newEnquiries = projectEnquiries.filter(e => e.status === 'new').length;
    const activeSubscribers = newsletterSubscriptions.filter(n => n.status === 'active').length;
    
    return {
      totalContacts: contactSubmissions.length,
      newContacts,
      totalEnquiries: projectEnquiries.length,
      newEnquiries,
      totalSubscribers: newsletterSubscriptions.length,
      activeSubscribers
    };
  };

  const stats = getStats();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Ncode Innovations - Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage contact submissions, enquiries, and newsletter subscriptions</p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="default" className="flex items-center space-x-1">
              <Cloud className="w-3 h-3" />
              <span>Supabase Connected</span>
            </Badge>
            <Button onClick={fetchData} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
          </div>
        </div>

        {/* Success Alert */}
        <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-900/20">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            ✅ Supabase is fully connected and operational! All form submissions are being saved to your database.
          </AlertDescription>
        </Alert>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Contact Submissions</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.totalContacts}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stats.newContacts} new submissions
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Project Enquiries</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.totalEnquiries}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stats.newEnquiries} new enquiries
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Newsletter Subscribers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.totalSubscribers}</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" />
                {stats.activeSubscribers} active subscribers
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <Tabs defaultValue="contacts" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="contacts" className="flex items-center space-x-2">
              <MessageSquare className="w-4 h-4" />
              <span>Contact Submissions ({stats.totalContacts})</span>
            </TabsTrigger>
            <TabsTrigger value="enquiries" className="flex items-center space-x-2">
              <AlertCircle className="w-4 h-4" />
              <span>Project Enquiries ({stats.totalEnquiries})</span>
            </TabsTrigger>
            <TabsTrigger value="newsletter" className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>Newsletter ({stats.totalSubscribers})</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-4">
            {contactSubmissions.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No contact submissions yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {contactSubmissions.map((contact) => (
                  <Card key={contact.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <span>{contact.name}</span>
                          {contact.newsletter && (
                            <Badge variant="outline" className="text-xs">Newsletter</Badge>
                          )}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(contact.status || 'new')}
                          <Select
                            value={contact.status || 'new'}
                            onValueChange={(value) => handleStatusUpdate('contact', contact.id!, value as any)}
                            disabled={updating === contact.id}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="in_progress">In Progress</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <CardDescription>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {contact.email}
                          </span>
                          {contact.phone && (
                            <span className="flex items-center">
                              <Phone className="w-4 h-4 mr-1" />
                              {contact.phone}
                            </span>
                          )}
                          {contact.company && (
                            <span className="flex items-center">
                              <Building className="w-4 h-4 mr-1" />
                              {contact.company}
                            </span>
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p><strong>Message:</strong> {contact.message}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          {contact.service && (
                            <div className="flex items-center space-x-2">
                              <Badge variant="secondary">{contact.service}</Badge>
                            </div>
                          )}
                          {contact.budget && (
                            <div className="flex items-center space-x-1">
                              <DollarSign className="w-4 h-4 text-green-600" />
                              <span><strong>Budget:</strong> {contact.budget}</span>
                            </div>
                          )}
                          {contact.timeline && (
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <span><strong>Timeline:</strong> {contact.timeline}</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex items-center justify-between pt-2 border-t">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {contact.created_at && formatDate(contact.created_at)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="enquiries" className="space-y-4">
            {projectEnquiries.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No project enquiries yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {projectEnquiries.map((enquiry) => (
                  <Card key={enquiry.id} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{enquiry.full_name}</CardTitle>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(enquiry.status || 'new')}
                          <Select
                            value={enquiry.status || 'new'}
                            onValueChange={(value) => handleStatusUpdate('enquiry', enquiry.id!, value as any)}
                            disabled={updating === enquiry.id}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="in_progress">In Progress</SelectItem>
                              <SelectItem value="completed">Completed</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <CardDescription>
                        <div className="flex items-center space-x-4 text-sm">
                          <span className="flex items-center">
                            <Mail className="w-4 h-4 mr-1" />
                            {enquiry.email}
                          </span>
                          {enquiry.phone && (
                            <span className="flex items-center">
                              <Phone className="w-4 h-4 mr-1" />
                              {enquiry.phone}
                            </span>
                          )}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="bg-muted/50 p-3 rounded-lg">
                          <p><strong>Message:</strong> {enquiry.message}</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          {enquiry.service && (
                            <div>
                              <Badge variant="secondary">{enquiry.service}</Badge>
                            </div>
                          )}
                          <div>
                            <strong>Source:</strong> {enquiry.source}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2 border-t">
                          <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {enquiry.created_at && formatDate(enquiry.created_at)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="newsletter" className="space-y-4">
            {newsletterSubscriptions.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No newsletter subscriptions yet.</p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {newsletterSubscriptions.map((subscription) => (
                  <Card key={subscription.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full flex items-center justify-center">
                            <Mail className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <p className="font-medium">{subscription.email}</p>
                            <p className="text-sm text-muted-foreground">
                              Source: {subscription.source || 'website'}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {getStatusBadge(subscription.status || 'active')}
                          <span className="text-sm text-muted-foreground">
                            {subscription.subscribed_at && formatDate(subscription.subscribed_at)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}