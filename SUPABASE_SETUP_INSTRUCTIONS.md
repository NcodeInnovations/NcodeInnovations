# 🔧 Supabase Database Setup Instructions

## ❌ What NOT to do:
Don't copy the file path `supabase/migrations/20250621125328_smooth_lodge.sql` into the SQL Editor.

## ✅ What TO do:

### Step 1: Go to Supabase SQL Editor
1. Open your Supabase project dashboard
2. Click on "SQL Editor" in the left sidebar
3. Click "New Query"

### Step 2: Copy the SQL Content (NOT the file path)
Copy this ENTIRE SQL content and paste it into the SQL Editor:

```sql
-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
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
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Create project_enquiries table
CREATE TABLE IF NOT EXISTS project_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  source text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

-- Create newsletter_subscriptions table
CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  source text DEFAULT 'website',
  subscribed_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_submissions
CREATE POLICY "Allow public insert on contact_submissions"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on contact_submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on contact_submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policies for project_enquiries
CREATE POLICY "Allow public insert on project_enquiries"
  ON project_enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on project_enquiries"
  ON project_enquiries
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on project_enquiries"
  ON project_enquiries
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create policies for newsletter_subscriptions
CREATE POLICY "Allow public insert on newsletter_subscriptions"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated read on newsletter_subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated update on newsletter_subscriptions"
  ON newsletter_subscriptions
  FOR UPDATE
  TO authenticated
  USING (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status ON contact_submissions(status);

CREATE INDEX IF NOT EXISTS idx_project_enquiries_email ON project_enquiries(email);
CREATE INDEX IF NOT EXISTS idx_project_enquiries_created_at ON project_enquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_project_enquiries_status ON project_enquiries(status);

CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_email ON newsletter_subscriptions(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscriptions_status ON newsletter_subscriptions(status);
```

### Step 3: Execute the SQL
1. After pasting the SQL content above, click the "Run" button
2. You should see success messages for each table creation
3. Check the "Table Editor" to verify the tables were created

### Step 4: Add Environment Variables to Netlify
1. Go to your Netlify dashboard: https://app.netlify.com/sites/ncodeinnovations/settings/deploys
2. Navigate to **Site settings** → **Environment variables**
3. Add these variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL = your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY = your_supabase_anon_key
   ```

### Step 5: Redeploy Your Site
1. Go to **Deploys** tab in Netlify
2. Click **Trigger deploy** → **Deploy site**
3. Wait for deployment to complete

## ✅ Verification Steps

After completing the setup:

1. **Check Tables**: In Supabase, go to "Table Editor" and verify you see:
   - `contact_submissions`
   - `project_enquiries` 
   - `newsletter_subscriptions`

2. **Test Forms**: Visit your website and submit a contact form

3. **Check Admin**: Visit `https://ncodeinnovations.netlify.app/admin` to see submissions

4. **Verify Data**: Check Supabase Table Editor to see the submitted data

## 🚨 Common Mistakes to Avoid

❌ **Don't** copy the file path `supabase/migrations/20250621125328_smooth_lodge.sql`
✅ **Do** copy the actual SQL content from inside the file

❌ **Don't** run this as a shell command
✅ **Do** paste it in the Supabase SQL Editor

❌ **Don't** forget to add environment variables to Netlify
✅ **Do** add both SUPABASE_URL and SUPABASE_ANON_KEY

## 📞 Need Help?

If you encounter any issues:
1. Double-check you copied the SQL content (not the file path)
2. Verify your Supabase project is active
3. Ensure environment variables are correctly added to Netlify
4. Check the browser console for any error messages

Your website will be fully functional once these steps are completed! 🎉
```