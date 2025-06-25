# 🧪 Simple Test to Check if Everything Works

## Test 1: Check if Supabase is Connected
1. Go to your website: https://ncodeinnovations.netlify.app
2. Right-click anywhere → **Inspect** (or press F12)
3. Go to **Console** tab
4. Type this command and press Enter:
```javascript
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)
```

**What should happen:**
- You should see your Supabase URL printed
- If you see "undefined" → Environment variables not set correctly

## Test 2: Check if Forms Work
1. Fill out the contact form with fake data:
   - Name: Test User
   - Email: test@example.com  
   - Message: This is a test
2. Submit the form
3. Watch the Console tab for errors

**What should happen:**
- Success message appears
- No red errors in console

## Test 3: Check if Data is Saved
1. Go to Supabase → Table Editor
2. Click on "contact_submissions" table
3. Look for your test data

**What should happen:**
- You see your test submission in the table

## Test 4: Check Admin Dashboard
1. Go to: https://ncodeinnovations.netlify.app/admin
2. Look for your test submission

**What should happen:**
- You see your test data in the admin dashboard

---

## If Any Test Fails, Tell Me:
1. Which test number failed?
2. What error message did you see?
3. Screenshot if helpful

I'll fix it immediately! 🔧