import { NextRequest, NextResponse } from 'next/server';
import { 
  insertContactSubmission, 
  insertNewsletterSubscription, 
  getContactSubmissions 
} from '@/lib/supabase';
import type { ContactSubmission } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  console.log('🚀 Contact API called');
  
  try {
    const body = await request.json();
    console.log('📥 Received data:', { 
      name: body.name, 
      email: body.email, 
      hasMessage: !!body.message 
    });
    
    const { name, email, phone, company, service, budget, timeline, message, newsletter } = body;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('❌ Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('❌ Validation failed - invalid email format');
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare contact submission data
    const contactData: ContactSubmission = {
      name,
      email,
      phone: phone || null,
      company: company || null,
      service: service || null,
      budget: budget || null,
      timeline: timeline || null,
      message,
      newsletter: newsletter || false,
      status: 'new'
    };

    console.log('💾 Attempting to save contact submission...');

    // Insert contact submission
    const result = await insertContactSubmission(contactData);

    // If newsletter subscription is requested, add to newsletter table
    if (newsletter) {
      try {
        console.log('📧 Adding newsletter subscription...');
        await insertNewsletterSubscription({
          email,
          source: 'contact_form',
          status: 'active'
        });
        console.log('✅ Newsletter subscription added');
      } catch (newsletterError) {
        // Don't fail the contact submission if newsletter subscription fails
        console.warn('⚠️ Newsletter subscription failed:', newsletterError);
      }
    }

    console.log('✅ Contact form submission completed successfully');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully to Ncode Innovations',
        id: result.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Contact form error:', error);
    
    // Return more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('Supabase not configured')) {
        return NextResponse.json(
          { error: 'Database not configured. Please contact administrator.' },
          { status: 503 }
        );
      }
      
      return NextResponse.json(
        { error: `Database error: ${error.message}` },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve contact submissions (for admin)
export async function GET(request: NextRequest) {
  console.log('📊 Admin API - fetching contact submissions');
  
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');

    const data = await getContactSubmissions(status || undefined, limit);

    console.log(`✅ Retrieved ${data.length} contact submissions`);

    return NextResponse.json({ 
      data,
      total: data.length
    }, { status: 200 });

  } catch (error) {
    console.error('❌ GET contact submissions error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}