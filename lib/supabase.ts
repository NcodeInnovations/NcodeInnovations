import { createClient } from '@supabase/supabase-js';

// Supabase configuration with better error handling
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Debug logging
console.log('🔍 Supabase Debug Info:');
console.log('URL exists:', !!supabaseUrl);
console.log('Key exists:', !!supabaseAnonKey);
console.log('URL value:', supabaseUrl ? supabaseUrl.substring(0, 30) + '...' : 'MISSING');

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase environment variables!');
  console.error('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅ Set' : '❌ Missing');
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseAnonKey ? '✅ Set' : '❌ Missing');
  
  // Don't throw error in development, just log it
  if (typeof window === 'undefined') {
    console.warn('⚠️ Supabase not configured - forms will not work');
  }
}

// Create Supabase client with fallback
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Types for our database tables
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
  newsletter: boolean;
  created_at?: string;
  status?: 'new' | 'contacted' | 'in_progress' | 'completed';
}

export interface ProjectEnquiry {
  id?: string;
  full_name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
  timestamp?: string;
  source: string;
  status?: 'new' | 'contacted' | 'in_progress' | 'completed';
  created_at?: string;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  subscribed_at?: string;
  status?: 'active' | 'unsubscribed';
  source?: string;
}

// Database helper functions with better error handling
export const insertContactSubmission = async (data: ContactSubmission) => {
  if (!supabase) {
    throw new Error('Supabase not configured. Please check environment variables.');
  }

  console.log('📝 Inserting contact submission:', { name: data.name, email: data.email });
  
  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('❌ Supabase insert error:', error);
    throw error;
  }
  
  console.log('✅ Contact submission saved:', result.id);
  return result;
};

export const insertProjectEnquiry = async (data: ProjectEnquiry) => {
  if (!supabase) {
    throw new Error('Supabase not configured. Please check environment variables.');
  }

  console.log('📝 Inserting project enquiry:', { name: data.full_name, email: data.email });
  
  const { data: result, error } = await supabase
    .from('project_enquiries')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('❌ Supabase insert error:', error);
    throw error;
  }
  
  console.log('✅ Project enquiry saved:', result.id);
  return result;
};

export const insertNewsletterSubscription = async (data: NewsletterSubscription) => {
  if (!supabase) {
    throw new Error('Supabase not configured. Please check environment variables.');
  }

  const { data: result, error } = await supabase
    .from('newsletter_subscriptions')
    .upsert([data], {
      onConflict: 'email',
      ignoreDuplicates: false
    })
    .select()
    .single();

  if (error) {
    console.error('❌ Newsletter subscription error:', error);
    throw error;
  }
  
  console.log('✅ Newsletter subscription saved:', result.id);
  return result;
};

export const getContactSubmissions = async (status?: string, limit = 50) => {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured - returning empty array');
    return [];
  }

  let query = supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) {
    console.error('❌ Error fetching contact submissions:', error);
    throw error;
  }
  return data || [];
};

export const getProjectEnquiries = async (status?: string, limit = 50) => {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured - returning empty array');
    return [];
  }

  let query = supabase
    .from('project_enquiries')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query;
  if (error) {
    console.error('❌ Error fetching project enquiries:', error);
    throw error;
  }
  return data || [];
};

export const getNewsletterSubscriptions = async (status = 'active', limit = 100) => {
  if (!supabase) {
    console.warn('⚠️ Supabase not configured - returning empty array');
    return [];
  }

  const { data, error } = await supabase
    .from('newsletter_subscriptions')
    .select('*')
    .eq('status', status)
    .order('subscribed_at', { ascending: false })
    .limit(limit);

  if (error) {
    console.error('❌ Error fetching newsletter subscriptions:', error);
    throw error;
  }
  return data || [];
};

export const updateSubmissionStatus = async (
  table: 'contact_submissions' | 'project_enquiries',
  id: string,
  status: 'new' | 'contacted' | 'in_progress' | 'completed'
) => {
  if (!supabase) {
    throw new Error('Supabase not configured. Please check environment variables.');
  }

  const { data, error } = await supabase
    .from(table)
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('❌ Error updating status:', error);
    throw error;
  }
  return data;
};