# 🚀 Portfolio Deployment Instructions

## Quick Deployment (Windows)

1. **Open Command Prompt** in the portfolio folder
2. **Run the deployment script**:
   ```cmd
   deploy.bat
   ```

## Manual Deployment Steps

### Step 1: Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial portfolio deployment"
```

### Step 2: Create GitHub Repository
1. Go to [GitHub](https://github.com)
2. Click "New Repository"
3. Name it `portfolio`
4. Make it **Public**
5. **Don't** initialize with README (we already have files)

### Step 3: Connect to GitHub
```bash
git remote add origin https://github.com/balaji-29-s/portfolio.git
git branch -M main
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site

### Step 5: Access Your Portfolio
Your portfolio will be available at:
**https://balaji-29-s.github.io/portfolio/**

## Alternative: Manual GitHub Pages Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

This will build and deploy directly to the `gh-pages` branch.

## Troubleshooting

### If you get authentication errors:
1. Make sure you're logged into GitHub
2. Use GitHub Desktop or configure Git credentials:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

### If the site doesn't load:
1. Check that the repository is public
2. Verify GitHub Pages is enabled in repository settings
3. Wait 5-10 minutes for deployment to complete

## Updating Your Portfolio

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Actions workflow will automatically redeploy your site.

---

🎉 **Your portfolio is now ready for deployment!**