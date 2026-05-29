# DramaVerse 🎭

Chat with 280+ characters from K-Dramas, C-Dramas, Filipino Dramas & Thai Dramas!

---

## Deploy to Vercel — Step by Step

### Step 1 — Create a GitHub account (if you don't have one)
Go to https://github.com and sign up for free.

### Step 2 — Create a new GitHub repository
1. Click the **+** button (top right) → **New repository**
2. Name it: `dramaverse`
3. Set it to **Public**
4. Click **Create repository**

### Step 3 — Upload your files to GitHub
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL the files from this ZIP (keep the folder structure!)
3. Click **Commit changes**

### Step 4 — Deploy on Vercel
1. Go to https://vercel.com and sign up with your GitHub account
2. Click **Add New Project**
3. Find and select your `dramaverse` repository
4. Leave all settings as default
5. Click **Deploy**

### Step 5 — Add your Groq API Key
1. In Vercel, go to your project → **Settings** → **Environment Variables**
2. Click **Add New**
3. Set:
   - **Name:** `GROQ_API_KEY`
   - **Value:** your Groq key (starts with `gsk_...`)
4. Click **Save**
5. Go to **Deployments** → click the **three dots (...)** next to latest → **Redeploy**

### Step 6 — Your app is live! 🎉
Your app will be at: `https://dramaverse.vercel.app` (or similar)
Share the link with anyone — no login needed!

---

## Your Groq API Key
Get a free key at: https://console.groq.com
- Sign up for free
- Go to API Keys → Create API Key
- Copy the key (starts with `gsk_...`)
