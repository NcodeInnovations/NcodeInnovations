/*
  # Create tables for Ncode Innovations website

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `company` (text, optional)
      - `service` (text, optional)
      - `budget` (text, optional)
      - `timeline` (text, optional)
      - `message` (text)
      - `newsletter` (boolean)
      - `status` (text, default 'new')
      - `created_at` (timestamp)

    - `project_enquiries`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `phone` (text, optional)
      - `service` (text, optional)
      - `message` (text)
      - `source` (text)
      - `status` (text, default 'new')
      - `created_at` (timestamp)

    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `status` (text, default 'active')
      - `source` (text, optional)
      - `subscribed_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public insert access (for form submissions)
    - Add policies for authenticated admin access
*/

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