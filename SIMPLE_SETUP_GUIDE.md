# 🚀 Simple Supabase Setup Guide

## Step 1: Create Supabase Project
1. Go to https://supabase.com
2. Click "Start your project"
3. Sign up/Login with GitHub or email
4. Click "New Project"
5. Choose your organization
6. Enter project name: "ncode-innovations"
7. Enter database password (save this!)
8. Choose region (closest to you)
9. Click "Create new project"
10. Wait 2-3 minutes for setup to complete

## Step 2: Get Your Credentials
1. In your Supabase dashboard, click "Settings" (gear icon)
2. Click "API" in the left menu
3. You'll see:
   - **Project URL** (starts with https://...)
   - **anon public** key (long string starting with eyJ...)
4. Copy both of these - you'll need them!

## Step 3: Create Database Tables
1. In Supabase dashboard, click "SQL Editor" 
2. Click "New Query"
3. Copy and paste this EXACT code:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text,
  budget text,
  timeline text,
  message text NOT NULL,
  newsletter boolean DEFAULT false,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create project_enquiries table  
CREATE TABLE project_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  source text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active',
  source text DEFAULT 'website',
  subscribed_at timestamptz DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert data (for forms)
CREATE POLICY "Anyone can insert contact_submissions" ON contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert project_enquiries" ON project_enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert newsletter_subscriptions" ON newsletter_subscriptions FOR INSERT WITH CHECK (true);

-- Allow anyone to read data (for admin dashboard)
CREATE POLICY "Anyone can read contact_submissions" ON contact_submissions FOR SELECT USING (true);
CREATE POLICY "Anyone can read project_enquiries" ON project_enquiries FOR SELECT USING (true);
CREATE POLICY "Anyone can read newsletter_subscriptions" ON newsletter_subscriptions FOR SELECT USING (true);

-- Allow anyone to update data (for status changes)
CREATE POLICY "Anyone can update contact_submissions" ON contact_submissions FOR UPDATE USING (true);
CREATE POLICY "Anyone can update project_enquiries" ON project_enquiries FOR UPDATE USING (true);
```

4. Click "RUN" button
5. You should see "Success. No rows returned" - this is good!

## Step 4: Add Credentials to Your Hosting Platform

### For Vercel:
1. Go to https://vercel.com/dashboard
2. Find your project and click on it
3. Go to "Settings" → "Environment Variables"
4. Add the variables below

### For AWS (Amplify):
1. Go to AWS Console → Amplify
2. Select your app
3. Go to "App settings" → "Environment variables"
4. Add the variables below

### For Azure (App Service):
1. Go to Azure Portal
2. Navigate to your App Service
3. Go to "Configuration" → "Application settings"
4. Add the variables below

### For Netlify:
1. Go to https://app.netlify.com
2. Find your site and click on it
3. Go to "Site settings" → "Environment variables"
4. Add the variables below

### For Google Cloud:
1. Go to Google Cloud Console
2. Navigate to App Engine or Cloud Run
3. Go to environment variables section
4. Add the variables below

### For DigitalOcean:
1. Go to DigitalOcean Control Panel
2. Navigate to your app
3. Go to "Settings" → "Environment Variables"
4. Add the variables below

### For Railway:
1. Go to Railway dashboard
2. Select your project
3. Go to "Variables" tab
4. Add the variables below

### For Render:
1. Go to Render dashboard
2. Select your web service
3. Go to "Environment" tab
4. Add the variables below

### Required Variables for ALL Platforms:
**Add Variable 1:**
- Key: `NEXT_PUBLIC_SUPABASE_URL`
- Value: Your Project URL from Step 2

**Add Variable 2:**
- Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`  
- Value: Your anon public key from Step 2

## Step 5: Redeploy Your Site
1. After adding environment variables, trigger a new deployment
2. Most platforms auto-deploy when you push to Git
3. Some may require clicking "Deploy" or "Redeploy"
4. Wait for green checkmark/success status (2-3 minutes)

## Step 6: Test Everything
1. Go to your website (your hosting platform will provide the URL)
2. Fill out the contact form with test data
3. Submit the form
4. You should see a success message
5. Go to your-website.com/admin
6. You should see your test submission!

## ✅ Success Checklist
- [ ] Supabase project created
- [ ] Got Project URL and anon key
- [ ] Ran SQL code successfully
- [ ] Added environment variables to hosting platform
- [ ] Redeployed site
- [ ] Contact form works
- [ ] Admin dashboard shows data

## 🌐 Platform URLs
After deployment, your site will be available at:
- **Vercel**: `https://your-project.vercel.app`
- **Netlify**: `https://your-site.netlify.app`
- **AWS**: `https://your-app.amplifyapp.com`
- **Azure**: `https://your-app.azurewebsites.net`
- **Google Cloud**: `https://your-project.appspot.com`
- **DigitalOcean**: `https://your-app.ondigitalocean.app`
- **Railway**: `https://your-project.railway.app`
- **Render**: `https://your-service.onrender.com`

## 🚨 If Something Goes Wrong
1. **Forms don't work**: Check environment variables in your hosting platform
2. **No data in admin**: Check if SQL ran successfully in Supabase
3. **Errors on website**: Check browser console (F12)

## 📞 Need Help?
If you get stuck, tell me:
1. Which hosting platform you're using
2. Which step you're on
3. What error message you see
4. Screenshot if helpful

Let's get this working on your preferred platform! 🚀