@echo off
echo ========================================
echo    BALAJI S - PORTFOLIO DEPLOYMENT
echo ========================================

echo Step 1: Checking if GitHub repository exists...
echo Please make sure you have created the repository at:
echo https://github.com/balaji-29-s/portfolio
echo.
pause

echo Step 2: Pushing to GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo.
    echo ❌ Push failed! Make sure:
    echo 1. You created the repository on GitHub
    echo 2. Repository name is exactly "portfolio"
    echo 3. Repository is public
    echo.
    pause
    exit /b 1
)

echo Step 3: Deploying to GitHub Pages...
call npm run deploy
if %errorlevel% neq 0 (
    echo.
    echo ❌ Deployment failed!
    pause
    exit /b 1
)

echo.
echo ========================================
echo ✅ DEPLOYMENT SUCCESSFUL!
echo ========================================
echo.
echo Your portfolio is now live at:
echo https://balaji-29-s.github.io/portfolio/
echo.
echo It may take 5-10 minutes to be fully available.
echo.
pause