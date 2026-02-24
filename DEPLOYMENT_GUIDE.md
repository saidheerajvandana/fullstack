# Vercel Deployment Guide for Support App

## Project Overview
This is a **Gender-Responsive Domestic Violence Support Platform** built with React, featuring:
- Multi-language support (English, Hindi, Telugu)
- Role-based dashboards (Admin, Victim/Survivor, Counselor, Legal Advisor)
- Secure login system
- Comprehensive support resources

## Prerequisites
Before deploying to Vercel, ensure you have:
1. **GitHub Account** - To push code to GitHub
2. **Vercel Account** - Free account at https://vercel.com
3. **Local Setup Complete** - All npm dependencies installed

## Step-by-Step Deployment Instructions

### Step 1: Push Code to GitHub

1. Create a new GitHub repository:
   - Go to https://github.com/new
   - Name it: `supportapp` (or your preferred name)
   - Choose "Public" or "Private"
   - Click "Create repository"

2. Connect your local project to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/supportapp.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

**Option A: Using Vercel Dashboard (Easiest)**

1. Go to: https://vercel.com
2. Click "New Project"
3. Select "Import Git Repository"
4. Search for your `supportapp` repository
5. Click "Import"
6. Vercel will detect it as a Create React App
7. Click "Deploy"

**Option B: Using Vercel CLI**

```bash
# Login to Vercel
vercel login

# Deploy the project
vercel

# Link to existing project or create new
# Follow the prompts

# For production deployment
vercel --prod
```

### Step 3: Verify Deployment

After deployment, you should see:
- A unique Vercel domain (e.g., `supportapp-xyz.vercel.app`)
- Preview URL for your application
- Deployment status showing "Ready"

## Deployment Configuration

The `vercel.json` file is already configured with:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "create-react-app"
}
```

## Environment Variables (if needed)

If your app requires environment variables:

1. In Vercel Dashboard:
   - Go to Project Settings
   - Select "Environment Variables"
   - Add your variables
   - Redeploy

## Test Accounts for Deployed App

Use these credentials to test the deployment:

### Admin
- Email: `admin@supportapp.com`
- Password: `admin123`

### Victim/Survivor
- Email: `victim@supportapp.com`
- Password: `victim123`

### Counselor
- Email: `counsellor@supportapp.com`
- Password: `counsellor123`

### Legal Advisor
- Email: `legal@supportapp.com`
- Password: `legal123`

## Features Available on Deployed Version

✅ **Home Page**
- Multi-language support (English, Hindi, Telugu)
- Service information for all user types
- Emergency hotline information
- Responsive design

✅ **Login System**
- Role-based authentication
- Demo credentials
- Language selector

✅ **Dashboards**
- **Admin Dashboard** - User management, analytics, security
- **Victim/Survivor Dashboard** - Resources, counseling, safety planning
- **Counselor Dashboard** - Client management, documentation
- **Legal Advisor Dashboard** - Case management, legal resources

✅ **Language Support**
- English 🇬🇧
- Hindi 🇮🇳
- Telugu 🇮🇳
- Dropdown selector on navbar and login page

## Redeploying After Changes

Any time you make changes to the code:

```bash
# Make changes locally
git add .
git commit -m "Describe your changes"
git push origin main
```

Vercel will automatically detect the push and redeploy your app!

## Troubleshooting

### Build Fails
- Check `npm run build` works locally
- Verify all dependencies are in `package.json`
- Check for TypeScript errors

### App Doesn't Load
- Clear browser cache
- Check browser console for errors
- Verify all imports are correct

### Language Switching Not Working
- Check i18n configuration loaded
- Verify translation JSON files are bundled
- Check browser console for i18n errors

## Support and Additional Resources

- **Vercel Documentation**: https://vercel.com/docs
- **React Documentation**: https://react.dev
- **i18next Documentation**: https://www.i18next.com

## Deployment Status

Your app is now available at: **[Your Vercel URL]**

Share this URL with users to access the support platform!

---

**Note**: This is a demo application. For production use with real data:
- Implement a backend API
- Set up proper database
- Add user authentication with secure tokens
- Enable HTTPS for all communications
- Add data encryption
- Comply with privacy regulations (GDPR, etc.)
