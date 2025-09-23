import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initiateKickOAuth, initiateKickOAuthWithBackend, isAuthenticated, clearTokens, getAccessToken, kickApiRequest } from '../utils/kickOAuth';

export default function KickIntegration() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAuthenticated(isAuthenticated());
    
    // If authenticated, fetch user info
    if (isAuthenticated()) {
      fetchUserInfo();
    }
  }, []);

  const fetchUserInfo = async () => {
    try {
      setLoading(true);
      const response = await kickApiRequest('/user');
      const userData = await response.json();
      setUserInfo(userData);
    } catch (error) {
      console.error('Failed to fetch user info:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    // Use backend for secure PKCE storage (testing with local backend)
    initiateKickOAuthWithBackend(['user:read', 'channel:read']);
  };

  const handleLogout = async () => {
    try {
      // Clear tokens on backend
      const backendURL = process.env.NODE_ENV === 'production' 
        ? 'https://your-backend-domain.com'
        : 'http://localhost:3001';

      await fetch(`${backendURL}/api/auth/kick/logout`, {
        method: 'DELETE',
        credentials: 'include',
      });
    } catch (error) {
      console.error('Backend logout failed:', error);
    }
    
    // Clear local tokens
    clearTokens();
    setAuthenticated(false);
    setUserInfo(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        {/* Header with back link */}
        <div className="text-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-4"
          >
            ← Back to Home
          </Link>
          <h2 className="text-2xl font-bold text-gray-900">Kick OAuth Test</h2>
          <p className="mt-2 text-sm text-gray-600">
            Test the complete OAuth flow with your backend
          </p>
        </div>

        {/* Main integration component */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            🎮 Kick Integration
          </h3>
      
      {!authenticated ? (
        <div className="text-center space-y-4">
          <p className="text-sm text-gray-600">
            Connect your Kick account to access personalized features
          </p>
          <button
            onClick={handleLogin}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Connect with Kick
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <p className="text-green-600 font-medium">✅ Connected to Kick</p>
              {userInfo && (
                <p className="text-gray-500">Welcome, {userInfo.username || 'User'}!</p>
              )}
            </div>
            <button
              onClick={handleLogout}
              className="text-xs text-red-600 hover:text-red-500"
            >
              Disconnect
            </button>
          </div>
          
          {loading && (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-green-600"></div>
            </div>
          )}
          
          {userInfo && (
            <div className="bg-gray-50 p-3 rounded">
              <h4 className="text-xs font-medium text-gray-900 mb-2">User Info:</h4>
              <pre className="text-xs text-gray-600 overflow-auto">
                {JSON.stringify(userInfo, null, 2)}
              </pre>
            </div>
          )}
          
          <button
            onClick={fetchUserInfo}
            className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Refresh User Info
          </button>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}