import { NextRequest, NextResponse } from 'next/server';
import { insertProjectEnquiry, getProjectEnquiries } from '@/lib/supabase';
import type { ProjectEnquiry } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, message, timestamp, source } = body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Prepare enquiry data
    const enquiryData: ProjectEnquiry = {
      full_name: fullName,
      email,
      phone: phone || null,
      service: service || null,
      message,
      source: source || 'website_enquiry_form',
      status: 'new'
    };

    // Insert project enquiry
    const result = await insertProjectEnquiry(enquiryData);

    console.log('Ncode Innovations - Project Enquiry saved to Supabase:', result.id);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Project enquiry submitted successfully to Ncode Innovations',
        enquiry_id: result.id,
        estimated_response_time: '24 hours'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Ncode Innovations - Enquiry submission error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve project enquiries (for admin)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');

    const data = await getProjectEnquiries(status || undefined, limit);

    return NextResponse.json({ 
      data,
      total: data.length
    }, { status: 200 });

  } catch (error) {
    console.error('GET project enquiries error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}