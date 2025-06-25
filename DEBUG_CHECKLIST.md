# 🔍 Debug Checklist - Let's Fix This Together!

## Step 1: Check Your Supabase Project
1. Go to https://supabase.com and login
2. Click on your project
3. In the left sidebar, click **"Table Editor"**
4. **QUESTION**: Do you see these 3 tables?
   - contact_submissions
   - project_enquiries  
   - newsletter_subscriptions

**If NO** → The SQL didn't run properly. Let's fix this.
**If YES** → Great! Move to Step 2.

---

## Step 2: Check Environment Variables in Netlify
1. Go to https://app.netlify.com
2. Find your site and click on it
3. Go to **Site settings** → **Environment variables**
4. **QUESTION**: Do you see these 2 variables?
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

**If NO** → We need to add them. Let's do this.
**If YES** → Check if the values are correct.

---

## Step 3: Test the Website
1. Go to your website: https://ncodeinnovations.netlify.app
2. Open browser developer tools (Press F12)
3. Go to **Console** tab
4. Fill out the contact form and submit
5. **QUESTION**: Do you see any red error messages in the console?

---

## Step 4: Check Admin Dashboard
1. Go to: https://ncodeinnovations.netlify.app/admin
2. **QUESTION**: What do you see?
   - Loading spinner that never stops?
   - Error message?
   - Empty dashboard?
   - Data showing?

---

## Quick Fix Commands

### If Tables Don't Exist:
1. Go to Supabase → SQL Editor
2. Paste this and click RUN:

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

### If Environment Variables Missing:
1. In Netlify → Site settings → Environment variables
2. Add these EXACT variables:

**Variable 1:**
- Key: `NEXT_PUBLIC_SUPABASE_URL`
- Value: Your Supabase project URL (starts with https://...)

**Variable 2:**  
- Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Value: Your Supabase anon key (long string starting with eyJ...)

3. Click **Save**
4. Go to **Deploys** tab → **Trigger deploy** → **Deploy site**

---

## Tell Me What You See

Please check each step above and tell me:

1. **Tables**: Do you see the 3 tables in Supabase Table Editor? (Yes/No)
2. **Environment Variables**: Are both variables in Netlify? (Yes/No)  
3. **Console Errors**: Any red errors when submitting form? (Copy/paste them)
4. **Admin Dashboard**: What happens when you visit /admin?

Once you tell me what you see, I'll give you the exact fix! 🚀