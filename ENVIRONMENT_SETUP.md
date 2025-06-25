# 🔑 Environment Variables Setup Guide

## For Cloud Deployment (Production)

### Step 1: Get Your Supabase Credentials
1. Go to https://supabase.com and login
2. Select your project
3. Go to **Settings** → **API**
4. Copy these two values:
   - **Project URL**: `https://xxxxxxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Step 2: Add to Your Hosting Platform

#### For Vercel
1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the variables below

#### For AWS (Amplify/Elastic Beanstalk)
1. Go to AWS Console
2. Navigate to your application
3. Go to **Configuration** → **Environment Variables**
4. Add the variables below

#### For Azure (App Service)
1. Go to Azure Portal
2. Navigate to your App Service
3. Go to **Configuration** → **Application Settings**
4. Add the variables below

#### For Netlify
1. Go to https://app.netlify.com
2. Find your site and click on it
3. Go to **Site settings** → **Environment variables**
4. Add the variables below

#### For Google Cloud (App Engine)
1. Go to Google Cloud Console
2. Navigate to App Engine
3. Go to **Settings** → **Environment Variables**
4. Add the variables below

#### For DigitalOcean App Platform
1. Go to DigitalOcean Control Panel
2. Navigate to your app
3. Go to **Settings** → **Environment Variables**
4. Add the variables below

#### For Railway
1. Go to Railway dashboard
2. Select your project
3. Go to **Variables** tab
4. Add the variables below

#### For Render
1. Go to Render dashboard
2. Select your web service
3. Go to **Environment** tab
4. Add the variables below

### Required Environment Variables

**Add Variable 1:**
- Key: `NEXT_PUBLIC_SUPABASE_URL`
- Value: Your Project URL (paste exactly as copied)

**Add Variable 2:**
- Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Value: Your anon public key (paste exactly as copied)

### Step 3: Redeploy
After adding environment variables, trigger a new deployment:
- Most platforms will auto-deploy when you push to Git
- Some may require manual deployment trigger
- Wait for deployment to complete (green checkmark/success status)

## For Local Development

### Step 1: Create .env.local file
The `.env.local` file should be in your project root with:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

### Step 2: Replace with your actual values
Replace the placeholder values with your real Supabase credentials.

## ✅ Verification

After setting up, check:

1. **In Browser Console** (F12):
   ```javascript
   console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
   console.log('Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
   ```

2. **Should see**:
   - URL: https://your-project.supabase.co
   - Key exists: true

## 🚨 Common Mistakes

❌ **Wrong variable names**
- Must be exactly: `NEXT_PUBLIC_SUPABASE_URL`
- Must be exactly: `NEXT_PUBLIC_SUPABASE_ANON_KEY`

❌ **Missing NEXT_PUBLIC_ prefix**
- Variables must start with `NEXT_PUBLIC_` to work in browser

❌ **Forgot to redeploy**
- After adding variables to hosting platform, you MUST redeploy

❌ **Wrong Supabase key**
- Use the **anon public** key, not the service role key

## 🎯 Quick Test

After setup, test by submitting a form. You should see success message and data in Supabase Table Editor.

## 🌐 Platform-Specific Notes

### Vercel
- Automatic deployments on Git push
- Environment variables available immediately
- Supports preview deployments with different variables

### AWS
- May require application restart
- Environment variables encrypted at rest
- Supports multiple environments (dev, staging, prod)

### Azure
- Restart required for environment variable changes
- Supports slot-specific settings
- Built-in SSL and custom domains

### Netlify
- Build-time and runtime environment variables
- Supports branch-specific deployments
- Form handling and serverless functions

### Google Cloud
- Environment variables in app.yaml or runtime config
- Automatic scaling and load balancing
- Integration with other Google services

### DigitalOcean
- Simple app platform with Git integration
- Automatic HTTPS and CDN
- Built-in monitoring and alerts

### Railway
- Git-based deployments
- Automatic environment detection
- Built-in databases and add-ons

### Render
- Automatic builds from Git
- Free SSL certificates
- Built-in CDN and DDoS protection

---

**Your application will work seamlessly across all these platforms once environment variables are properly configured!** 🚀