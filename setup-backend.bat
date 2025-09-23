@echo off
REM Quick setup script for Kick OAuth Backend (Windows)

echo 🚀 Setting up Kick OAuth Backend...

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Please run this script from your vite-app root directory
    pause
    exit /b 1
)

if not exist "src\components\AuthCallback.jsx" (
    echo ❌ Please run this script from your vite-app root directory  
    pause
    exit /b 1
)

REM Copy backend starter files
if exist "backend-starter" (
    echo 📁 Copying backend files...
    xcopy /E /I /Y backend-starter backend
    cd backend
) else (
    echo ❌ backend-starter directory not found
    pause
    exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Set up environment file
if not exist ".env" (
    echo ⚙️  Creating .env file...
    copy .env.example .env
    echo ✅ .env file created - please edit with your Kick OAuth credentials
) else (
    echo ⚠️  .env file already exists
)

echo.
echo 🎉 Backend setup complete!
echo.
echo Next steps:
echo 1. Edit backend\.env with your Kick OAuth credentials
echo 2. Get credentials from: https://kick.com/developer/applications
echo 3. Run: cd backend ^&^& npm run dev
echo 4. Test: curl http://localhost:3001/health
echo.
echo Need help? Check backend\README.md for detailed instructions
echo.
pause