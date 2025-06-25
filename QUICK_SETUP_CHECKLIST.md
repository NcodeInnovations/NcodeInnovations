# ⚡ 10-Minute Multi-Platform Setup Checklist

## ✅ Step 1: Create Supabase Project (2 minutes)
1. Go to https://supabase.com
2. Click "Start your project" → Sign up/Login
3. Click "New Project"
4. Name: `ncode-innovations`
5. Set a password (write it down!)
6. Click "Create new project"
7. ⏰ Wait 2-3 minutes for setup

## ✅ Step 2: Get Your Keys (1 minute)
1. In Supabase dashboard → Click "Settings" (gear icon)
2. Click "API" in left menu
3. Copy these two values:
   - **Project URL**: `https://xxxxxxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## ✅ Step 3: Create Database (2 minutes)
1. Click "SQL Editor" in Supabase
2. Click "New Query"
3. Copy this code and paste it:

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
5. Should see "Success. No rows returned"

## ✅ Step 4: Add Keys to Your Platform (3 minutes)

### Choose Your Platform:

#### 🔷 Vercel
1. Go to https://vercel.com/dashboard
2. Find your project → Click it
3. Go to "Settings" → "Environment Variables"

#### 🟠 AWS Amplify
1. Go to AWS Console → Amplify
2. Select your app
3. Go to "App settings" → "Environment variables"

#### 🔵 Azure App Service
1. Go to Azure Portal
2. Navigate to your App Service
3. Go to "Configuration" → "Application settings"

#### 🟢 Netlify
1. Go to https://app.netlify.com
2. Find your site → Click it
3. Go to "Site settings" → "Environment variables"

#### 🔴 Google Cloud
1. Go to Google Cloud Console
2. Navigate to App Engine/Cloud Run
3. Go to environment variables section

#### 🟦 DigitalOcean
1. Go to DigitalOcean Control Panel
2. Navigate to your app
3. Go to "Settings" → "Environment Variables"

#### 🟣 Railway
1. Go to Railway dashboard
2. Select your project
3. Go to "Variables" tab

#### 🟡 Render
1. Go to Render dashboard
2. Select your web service
3. Go to "Environment" tab

### Add These Variables (ALL Platforms):
1. Click "Add variable" or similar
2. Add first variable:
   - **Key**: `NEXT_PUBLIC_SUPABASE_URL`
   - **Value**: Your Project URL from Step 2
3. Add second variable:
   - **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **Value**: Your anon public key from Step 2
4. Click "Save"

## ✅ Step 5: Redeploy (2 minutes)
1. Trigger new deployment (varies by platform):
   - **Vercel/Netlify**: Auto-deploys on Git push
   - **AWS/Azure**: May need manual trigger
   - **Others**: Check deployment section
2. ⏰ Wait for green checkmark (2-3 minutes)

## ✅ Step 6: Test Everything (1 minute)
1. Go to your website (platform provides URL)
2. Fill out contact form with test data
3. Submit form → Should see success message
4. Go to: your-website.com/admin
5. Should see your test submission!

## 🎉 Platform URLs After Deployment:
- **Vercel**: `https://your-project.vercel.app`
- **AWS**: `https://your-app.amplifyapp.com`
- **Azure**: `https://your-app.azurewebsites.net`
- **Netlify**: `https://your-site.netlify.app`
- **Google Cloud**: `https://your-project.appspot.com`
- **DigitalOcean**: `https://your-app.ondigitalocean.app`
- **Railway**: `https://your-project.railway.app`
- **Render**: `https://your-service.onrender.com`

## 🚨 If something doesn't work:
Tell me:
1. Which platform you're using
2. Which step failed
3. What error you see

I'll help you fix it immediately!

---
**Total time: ~10 minutes** ⏰
**Works on ALL major hosting platforms** 🌐