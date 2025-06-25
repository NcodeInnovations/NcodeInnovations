# Ncode Innovations - AI-Powered Solutions Website

A modern Next.js website with full Supabase integration for Ncode Innovations, featuring AI-powered solutions, contact forms, and newsletter subscriptions.

## 🚀 Live Website
**Production URL**: https://ncodeinnovations.netlify.app/

## ✨ Features

- **Modern Design**: Beautiful, responsive design with Tailwind CSS
- **AI-Focused**: Showcases AI-powered solutions and services
- **Contact Forms**: Multiple contact forms with Supabase integration
- **Newsletter**: Newsletter subscription system
- **Admin Dashboard**: Full admin interface to manage submissions at `/admin`
- **Database Integration**: Complete Supabase integration
- **TypeScript**: Full type safety throughout the application
- **Production Ready**: Deployed on multiple hosting platforms

## 🛠 Tech Stack

- **Framework**: Next.js 13 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase
- **Icons**: Lucide React
- **Deployment**: Vercel, AWS, Azure, and other cloud platforms

## 🔧 Supabase Setup (Required for Production)

### 1. Create Supabase Project
1. Go to [https://supabase.com](https://supabase.com)
2. Create a new project
3. Note your project URL and anon key

### 2. Run Database Migration
1. Go to your Supabase project dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase/migrations/20250621125328_smooth_lodge.sql`
4. Run the migration to create all necessary tables and policies

### 3. Configure Environment Variables

**For Cloud Deployment (Vercel, AWS, Azure, etc.):**
1. Go to your hosting platform dashboard
2. Navigate to environment variables section
3. Add the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**For Local Development:**
```bash
# Edit .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Database Tables

### contact_submissions
- Contact form submissions with full details
- Status tracking (new, contacted, in_progress, completed)
- Newsletter subscription preference

### project_enquiries
- Project enquiry submissions
- Source tracking
- Status management

### newsletter_subscriptions
- Email subscriptions with duplicate prevention
- Source tracking
- Subscription status (active, unsubscribed)

## 🔗 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get contact submissions (admin)

### Project Enquiry
- `POST /api/enquiry` - Submit project enquiry
- `GET /api/enquiry` - Get project enquiries (admin)

### Newsletter
- `POST /api/newsletter` - Subscribe to newsletter
- `GET /api/newsletter` - Get newsletter subscriptions (admin)

## 👨‍💼 Admin Dashboard

Access the admin dashboard at `/admin` to:
- View and manage contact form submissions
- Track project enquiries
- Monitor newsletter subscriptions
- Update submission status (new → contacted → in_progress → completed)

**Features:**
- Real-time data from Supabase
- Status management with dropdown selectors
- Responsive design for mobile and desktop
- Search and filter capabilities

## 🚀 Deployment Platforms

We deploy to multiple hosting platforms including:

### Primary Platforms
- **Vercel**: Optimized for Next.js with automatic deployments
- **AWS**: Enterprise-grade scalability with CloudFront CDN
- **Azure**: Microsoft cloud platform with global reach
- **Google Cloud**: High-performance hosting with Firebase integration

### Additional Platforms
- **Netlify**: JAMstack deployment with form handling
- **DigitalOcean**: Simple cloud hosting with app platform
- **Railway**: Modern deployment platform
- **Render**: Full-stack cloud platform

## 📝 Deployment Features

✅ **Multi-Platform Ready**: Optimized for all major cloud providers
✅ **Supabase Integration**: Database schema created and ready
✅ **Environment Variables**: Configurable across all platforms
✅ **Admin Dashboard**: Available at `/admin`
✅ **CI/CD Ready**: Automated deployments with Git integration

## 📝 Next Steps

1. **Add Supabase Credentials to Your Platform**:
   - Go to your hosting platform dashboard
   - Add environment variables
   - Redeploy the application

2. **Test the Integration**:
   - Submit contact forms
   - Check admin dashboard
   - Verify data in Supabase

3. **Monitor Performance**:
   - Check form submissions
   - Monitor newsletter subscriptions
   - Review admin dashboard analytics

## 🔒 Security Features

- **Row Level Security (RLS)**: Enabled on all tables
- **Public Insert Policies**: Allow anonymous form submissions
- **Authenticated Read Policies**: Admin access only
- **Email Validation**: Server-side validation
- **Duplicate Prevention**: Newsletter email uniqueness

## 📱 Responsive Design

- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly admin interface
- Accessible form controls

## 🎯 Business Impact

- **Lead Generation**: Capture contact forms and enquiries
- **Newsletter Growth**: Build email subscriber base
- **Customer Management**: Track communication status
- **Analytics**: Monitor form submission trends

## 📞 Support

For technical support or questions about the implementation:
- Email: hr@ncodesolutionsinc.com
- Phone: +1 410-988-6400

---

**Ready for Production** ✅
Your website is fully functional and ready to capture leads with Supabase integration across multiple hosting platforms!