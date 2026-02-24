@echo off
REM Deploy to Vercel - Quick Deploy Script
REM This script will guide you through deployment

echo.
echo ========================================
echo  Support App - Vercel Deployment
echo ========================================
echo.
echo Step 1: Opening Vercel in your browser...
echo.
timeout /t 2

REM Open Vercel new project page
start https://vercel.com/new

echo.
echo ========================================
echo  DEPLOYMENT INSTRUCTIONS
echo ========================================
echo.
echo In the browser that just opened:
echo.
echo 1. Sign in to your Vercel account
echo    (or create a free account)
echo.
echo 2. Click "Import Git Repository"
echo.
echo 3. Search for: "supportapp"
echo.
echo 4. Select your repository
echo.
echo 5. Click "Deploy"
echo.
echo 6. Wait 1-2 minutes for deployment
echo.
echo 7. You'll get a URL like:
echo    https://supportapp-xyz.vercel.app
echo.
echo ========================================
echo  ALTERNATIVE: Deploy via CLI
echo ========================================
echo.
echo To deploy via command line instead:
echo.
echo   1. Open Terminal/PowerShell
echo   2. Run: vercel --prod
echo   3. Sign in when prompted
echo   4. Follow the prompts
echo.
echo ========================================
echo.
pause
