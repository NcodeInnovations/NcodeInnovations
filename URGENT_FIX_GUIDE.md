# 🚨 URGENT: Fix "Invalid URL" Error

## The Problem
Your Supabase environment variables are not set in Netlify, causing the "Invalid URL" error.

## 🔧 IMMEDIATE FIX (5 minutes)

### Step 1: Get Your Supabase Credentials
1. Go to https://supabase.com and login
2. Click on your project
3. Go to **Settings** → **API**
4. Copy these two values:
   - **Project URL**: `https://xxxxxxxxx.supabase.co`
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### Step 2: Add to Netlify (CRITICAL)
1. Go to https://app.netlify.com
2. Find your site "ncodeinnovations" and click it
3. Go to **Site settings** → **Environment variables**
4. Click **"Add a variable"**

**Add Variable 1:**
- Key: `NEXT_PUBLIC_SUPABASE_URL`
- Value: Your Project URL (paste exactly)

**Add Variable 2:**
- Key: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Value: Your anon public key (paste exactly)

### Step 3: Redeploy
1. Go to **Deploys** tab
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for green checkmark

## ✅ Test After Fix
1. Go to your website
2. Submit the contact form
3. Should see success message

## 🔍 Debug Commands
Open browser console (F12) and run:
```javascript
console.log('URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
```

Should show your actual URL and `true`.

## 📞 If Still Broken
Tell me:
1. Did you add both environment variables to Netlify?
2. Did you redeploy after adding them?
3. What do you see in browser console?

This will fix the "Invalid URL" error immediately! 🚀