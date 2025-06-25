# 🔧 Complete Troubleshooting Guide

## 🚨 Form Not Working? Follow These Steps:

### Step 1: Check Browser Console
1. Go to your website (any hosting platform)
2. Press **F12** to open developer tools
3. Click **Console** tab
4. Look for these messages when the page loads:
   - `🔍 Supabase Debug Info:`
   - Should show `URL exists: true` and `Key exists: true`

**If you see `URL exists: false` or `Key exists: false`:**
→ Environment variables are not set correctly in your hosting platform

### Step 2: Test Form Submission
1. Fill out the contact form
2. Watch the Console tab while submitting
3. Look for these messages:
   - `🚀 Contact API called`
   - `📥 Received data:`
   - `💾 Attempting to save contact submission...`
   - `✅ Contact form submission completed successfully`

**Common Error Messages and Solutions:**

#### Error: "Database not configured"
**Solution:** Add environment variables to your hosting platform:

**For Vercel:**
1. Go to Vercel → Project → Settings → Environment Variables
2. Add: `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
3. Add: `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your Supabase key
4. Redeploy

**For AWS Amplify:**
1. Go to AWS Console → Amplify → App settings → Environment variables
2. Add the same variables
3. Redeploy

**For Azure:**
1. Go to Azure Portal → App Service → Configuration → Application settings
2. Add the same variables
3. Restart app

**For Netlify:**
1. Go to Netlify → Site settings → Environment variables
2. Add the same variables
3. Redeploy

**For Google Cloud:**
1. Go to Google Cloud Console → Environment variables
2. Add the same variables
3. Redeploy

**For DigitalOcean:**
1. Go to DigitalOcean → App → Settings → Environment Variables
2. Add the same variables
3. Redeploy

**For Railway:**
1. Go to Railway → Project → Variables
2. Add the same variables
3. Auto-redeploys

**For Render:**
1. Go to Render → Service → Environment
2. Add the same variables
3. Auto-redeploys

#### Error: "relation 'contact_submissions' does not exist"
**Solution:** Create database tables in Supabase:
1. Go to Supabase → SQL Editor
2. Run the SQL from the setup guide

#### Error: "Invalid email format"
**Solution:** Check email field has valid format (user@domain.com)

#### Error: "Missing required fields"
**Solution:** Fill in Name, Email, and Message fields

### Step 3: Check Supabase Tables
1. Go to Supabase → Table Editor
2. Check if these tables exist:
   - `contact_submissions`
   - `project_enquiries`
   - `newsletter_subscriptions`

**If tables don't exist:** Run the SQL setup script

### Step 4: Test Admin Dashboard
1. Go to: your-website.com/admin
2. Should show your form submissions

**If admin shows errors:** Check browser console for error messages

## 🔍 Quick Debug Commands

### Test Supabase Connection (paste in browser console):
```javascript
// Check if environment variables are loaded
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Supabase Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
```

### Test Form Submission Manually:
```javascript
// Test API endpoint directly
fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    message: 'Test message'
  })
}).then(r => r.json()).then(console.log);
```

## 📋 Environment Variables Checklist

In your hosting platform, you should have exactly these 2 variables:

1. **NEXT_PUBLIC_SUPABASE_URL**
   - Value: `https://xxxxxxxxx.supabase.co`
   - Should start with `https://` and end with `.supabase.co`

2. **NEXT_PUBLIC_SUPABASE_ANON_KEY**
   - Value: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
   - Should be a long string starting with `eyJ`

## 🌐 Platform-Specific Issues

### Vercel
- Variables available immediately
- Auto-deploys on Git push
- Check deployment logs for errors

### AWS Amplify
- May need manual redeploy after adding variables
- Check build logs in AWS Console
- Environment variables encrypted

### Azure App Service
- Restart required after adding variables
- Check Application Insights for errors
- Variables in Configuration section

### Netlify
- Auto-deploys on Git push
- Check deploy logs for build errors
- Form handling built-in

### Google Cloud
- Variables in app.yaml or runtime config
- Check Cloud Logging for errors
- May need service restart

### DigitalOcean
- Auto-deploys from Git
- Check runtime logs
- Simple environment variable setup

### Railway
- Auto-deploys on variable changes
- Check deployment logs
- Built-in monitoring

### Render
- Auto-deploys on Git push
- Check service logs
- Free SSL included

## 🆘 Still Not Working?

Tell me:
1. **Which hosting platform** you're using
2. **What error messages** you see in the browser console
3. **Whether the tables exist** in Supabase
4. **Whether environment variables are set** in your platform
5. **What happens** when you submit the form

I'll give you the exact fix for your specific platform! 🚀

## 📞 Platform Support Links

- **Vercel**: https://vercel.com/docs
- **AWS**: https://docs.aws.amazon.com/amplify/
- **Azure**: https://docs.microsoft.com/en-us/azure/app-service/
- **Netlify**: https://docs.netlify.com/
- **Google Cloud**: https://cloud.google.com/docs
- **DigitalOcean**: https://docs.digitalocean.com/
- **Railway**: https://docs.railway.app/
- **Render**: https://render.com/docs