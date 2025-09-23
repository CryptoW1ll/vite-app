#!/bin/bash
# Quick setup script for Kick OAuth Backend

echo "🚀 Setting up Kick OAuth Backend..."

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "src/components/AuthCallback.jsx" ]; then
    echo "❌ Please run this script from your vite-app root directory"
    exit 1
fi

# Copy backend starter files
if [ -d "backend-starter" ]; then
    echo "📁 Copying backend files..."
    cp -r backend-starter backend
    cd backend
else
    echo "❌ backend-starter directory not found"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Set up environment file
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created - please edit with your Kick OAuth credentials"
else
    echo "⚠️  .env file already exists"
fi

echo ""
echo "🎉 Backend setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your Kick OAuth credentials"
echo "2. Get credentials from: https://kick.com/developer/applications"
echo "3. Run: cd backend && npm run dev"
echo "4. Test: curl http://localhost:3001/health"
echo ""
echo "Need help? Check backend/README.md for detailed instructions"