# 🎯 Netlify Environment Variables Setup

## EXACT Steps to Fix the Error

### 1. Login to Netlify
- Go to https://app.netlify.com
- Login with your account

### 2. Find Your Site
- Look for "ncodeinnovations" in your sites list
- Click on it

### 3. Go to Environment Variables
- Click **"Site settings"** (in the top menu)
- In the left sidebar, click **"Environment variables"**

### 4. Add First Variable
- Click **"Add a variable"** button
- **Key**: `NEXT_PUBLIC_SUPABASE_URL`
- **Value**: Your Supabase project URL (starts with https://)
- Click **"Create variable"**

### 5. Add Second Variable
- Click **"Add a variable"** button again
- **Key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **Value**: Your Supabase anon key (long string starting with eyJ)
- Click **"Create variable"**

### 6. Verify Variables
You should now see both variables listed:
- ✅ `NEXT_PUBLIC_SUPABASE_URL`
- ✅ `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 7. Redeploy Site
- Click **"Deploys"** tab (in the top menu)
- Click **"Trigger deploy"** button
- Click **"Deploy site"**
- Wait for the green checkmark (2-3 minutes)

## 🎉 Test Your Fix
1. Go to: https://ncodeinnovations.netlify.app
2. Fill out the contact form
3. Submit it
4. Should see success message!

## 🚨 Common Mistakes
- ❌ Wrong variable names (must be EXACT)
- ❌ Forgot to redeploy after adding variables
- ❌ Used wrong Supabase key (use anon, not service role)

## ✅ Success Check
After redeployment, open browser console (F12) and run:
```javascript
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
```

Should show your actual Supabase URL, not "undefined".

---

**This will fix the "Invalid URL" error completely!** 🚀