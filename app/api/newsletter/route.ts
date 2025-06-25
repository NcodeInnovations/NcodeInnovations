import { NextRequest, NextResponse } from 'next/server';
import { insertNewsletterSubscription, getNewsletterSubscriptions } from '@/lib/supabase';
import type { NewsletterSubscription } from '@/lib/supabase';

// Force dynamic rendering for this API route
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare subscription data
    const subscriptionData: NewsletterSubscription = {
      email,
      source: source || 'website',
      status: 'active'
    };

    try {
      // Insert newsletter subscription
      const result = await insertNewsletterSubscription(subscriptionData);

      console.log('Ncode Innovations - Newsletter subscription saved to Supabase:', result.id);

      return NextResponse.json(
        { 
          success: true, 
          message: 'Successfully subscribed to Ncode Innovations newsletter',
          subscriber_id: result.id
        },
        { status: 200 }
      );

    } catch (error: any) {
      // Handle duplicate email error
      if (error.code === '23505' || error.message?.includes('duplicate')) {
        return NextResponse.json(
          { error: 'Email already subscribed to our newsletter' },
          { status: 409 }
        );
      }
      throw error;
    }

  } catch (error) {
    console.error('Ncode Innovations - Newsletter subscription error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve newsletter subscriptions (for admin)
export async function GET() {
  try {
    const status = 'active';
    const limit = 100;

    const data = await getNewsletterSubscriptions(status, limit);

    return NextResponse.json({ 
      data,
      total: data.length
    }, { status: 200 });

  } catch (error) {
    console.error('GET newsletter subscriptions error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}