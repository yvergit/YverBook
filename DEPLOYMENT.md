# Deployment Guide

This project is configured to automatically deploy to three different GitHub targets:

## 🌐 GitHub Pages

**Automatic deployment on every push to `main` branch**

- **URL**: https://yvergit.github.io/YverBook/
- **Trigger**: Push to main branch
- **Workflow**: `.github/workflows/deploy-pages.yml`
- **Setup Required**: Enable GitHub Pages in repository settings

### Setup Steps:

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch to trigger deployment

## 🏷️ GitHub Releases

**Automatic release creation when you push version tags**

- **Trigger**: Push tags like `v1.0.0`, `v1.1.0`, etc.
- **Workflow**: `.github/workflows/release.yml`
- **Assets**: ZIP and TAR.GZ files of built project

### Create a Release:

```bash
# Patch release (1.0.0 → 1.0.1)
yarn release:patch

# Minor release (1.0.0 → 1.1.0)
yarn release:minor

# Major release (1.0.0 → 2.0.0)
yarn release:major
```

## 📦 GitHub Packages

**Automatic package publishing when you push version tags**

- **Package**: `@trinhquocthinh/book-portfolio`
- **Registry**: GitHub Packages (npm.pkg.github.com)
- **Trigger**: Push version tags or manual workflow dispatch
- **Workflow**: `.github/workflows/publish-package.yml`

### Install Package:

```bash
npm install @trinhquocthinh/book-portfolio
```

## 🚀 Quick Deployment Commands

```bash
# Test everything locally
yarn test
yarn build
yarn preview

# Create and push a new release (all three deployments)
yarn release:patch  # or minor/major

# Manual workflow trigger (GitHub Packages only)
# Go to Actions tab → "Publish to GitHub Packages" → "Run workflow"
```

## 🔧 Workflow Features

All workflows include:

- ✅ Dependency installation
- ✅ Code quality checks (ESLint + TypeScript)
- ✅ Build verification
- ✅ Automated asset generation
- ✅ Proper error handling
- ✅ Detailed logging

## 📋 Prerequisites

1. **GitHub Pages**: Enable in repository settings
2. **GitHub Packages**: Automatic (uses GITHUB_TOKEN)
3. **GitHub Releases**: Automatic (uses GITHUB_TOKEN)

No additional secrets or tokens required! 🎉
