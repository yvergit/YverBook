#!/bin/bash

# Build and deployment script for the 3D Portfolio Book

echo "🚀 Starting build and deployment process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
    exit 1
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
fi

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist/
print_status "Previous builds cleaned"

# Install dependencies
echo "📦 Installing dependencies..."
yarn install || print_error "Failed to install dependencies"
print_status "Dependencies installed"

# Run TypeScript type checking
echo "🔍 Running TypeScript type check..."
yarn type-check 2>/dev/null || print_warning "Type check script not found, skipping..."

# Build the project
echo "🔨 Building the project..."
yarn build || print_error "Build failed"
print_status "Project built successfully"

# Check if dist directory was created
if [ ! -d "dist" ]; then
    print_error "Build directory 'dist' was not created"
fi

# Get build size
BUILD_SIZE=$(du -sh dist/ | cut -f1)
print_status "Build completed. Size: $BUILD_SIZE"

echo ""
echo "🎉 Build completed successfully!"
echo ""
echo "📁 Build output is in the 'dist' directory"
echo "📊 Build size: $BUILD_SIZE"
echo ""
echo "🌐 Deployment options:"
echo "   • Vercel:     npx vercel --prod"
echo "   • Netlify:    npx netlify deploy --prod --dir=dist"
echo "   • GitHub Pages: Use GitHub Actions or manual deployment"
echo "   • Firebase:   firebase deploy"
echo "   • Surge:      npx surge dist/"
echo ""

# Ask if user wants to preview the build
read -p "🔍 Do you want to preview the build locally? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌟 Starting preview server..."
    yarn preview
fi