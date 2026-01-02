@echo off
echo ========================================
echo    MANUAL DEPLOYMENT - BALAJI S
echo ========================================

echo Step 1: Building the project...
call npm run build
if %errorlevel% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo Step 2: Creating gh-pages branch manually...
git checkout -b gh-pages 2>nul || git checkout gh-pages

echo Step 3: Copying dist files...
xcopy /E /I /Y dist\* .
if %errorlevel% neq 0 (
    echo Copy failed!
    pause
    exit /b 1
)

echo Step 4: Adding files to git...
git add .
git commit -m "Deploy portfolio to GitHub Pages"

echo Step 5: Pushing to gh-pages branch...
git push origin gh-pages --force

echo Step 6: Switching back to main branch...
git checkout main

echo ========================================
echo ✅ MANUAL DEPLOYMENT COMPLETED!
echo ========================================
echo.
echo Your portfolio should be available at:
echo https://balaji-29-s.github.io/portfolio/
echo.
echo Go to GitHub repository settings to enable Pages:
echo 1. Settings → Pages
echo 2. Source: Deploy from branch
echo 3. Branch: gh-pages
echo 4. Folder: / (root)
echo.
pause