import { useEffect, useState } from "react";
import { exchangeCodeForToken, storeTokens } from '../utils/kickOAuth';

/*
- ✅ `POST /api/auth/kick/store-pkce` - Secure PKCE storage
- ✅ `POST /api/auth/kick/exchange` - Token exchange with Kick
- ✅ `GET /api/auth/kick/status` - Authentication status check
- ✅ `DELETE /api/auth/kick/logout` - Secure logout
*/

export default function AuthCallback() {
  const [status, setStatus] = useState("processing");
  const [message, setMessage] = useState("Exchanging code for tokens...");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    const error = params.get("error");
    const errorDescription = params.get("error_description");

    // Handle OAuth errors from Kick
    if (error) {
      console.error('[OAUTH] Error from Kick:', error, errorDescription);
      setStatus("error");
      setMessage(`Authentication failed: ${errorDescription || error}`);
      return;
    }

    if (!code || !state) {
      setStatus("error");
      setMessage("Missing authorization code or state parameter.");
      return;
    }

    // Production-safe token exchange using backend proxy
    // This avoids exposing client_secret in frontend code
    const exchangeTokenSafely = async (code) => {
      const backendURL = process.env.NODE_ENV === 'production' 
        ? 'https://echelonstudio.co.nz'
        : 'http://localhost:3001';

      // Use same redirect URI as OAuth initiation (production URL for now)
      const redirectUri = process.env.NODE_ENV === 'production' 
        ? 'https://echelonstudio.co.nz/auth'
        : 'https://echelonstudio.co.nz/auth'; // Use production URI for development testing

      console.log('[OAUTH] Using redirect URI for token exchange:', redirectUri);

      const response = await fetch(`${backendURL}/api/auth/kick/exchange`, {
        method: 'POST',
        credentials: 'include', // Important for session cookies
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code,
          redirect_uri: redirectUri
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.message || `HTTP ${response.status}`);
      }

      return response.json();
    };

    // Always use backend exchange for testing (instead of exposing client secret)
    const tokenExchange = exchangeTokenSafely(code);

    tokenExchange
      .then((tokens) => {
        console.log('[OAUTH] Tokens received:', tokens);
        storeTokens(tokens);
        setStatus("success");
        setMessage("Kick authentication successful!");
        // Redirect to home after successful authentication
        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      })
      .catch((error) => {
        console.error('[OAUTH] Error exchanging code for tokens:', error);
        setStatus("error");
        setMessage("OAuth failed: " + error.message);
      });

    /* 
    OAuth Token Exchange Request Format:
    POST https://id.kick.com/oauth/token
    {
      "grant_type": "authorization_code",
      "code": "THE_CODE_FROM_URL",
      "redirect_uri": "https://echelonstudio.co.nz/auth",
      "client_id": "YOUR_CLIENT_ID",
      "client_secret": "YOUR_CLIENT_SECRET",
      "code_verifier": "THE_VERIFIER_GENERATED_IN_UNITY"
    }

    Expected Kick Response:
    {
      "access_token": "eyJh...xyz",
      "token_type": "Bearer",
      "expires_in": 3600,
      "refresh_token": "k9p...abc",
      "scope": "user:read events:subscribe"
    }

    Backend API Integration Notes:
    - Backend stores the tokens in session/DB
    - Unity calls GET https://echelonstudio.co.nz/api/session (with UnityWebRequest)
    - Backend returns { "access_token": "..." }
    */
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Kick Authentication
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            {status === 'processing' && (
              <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
                <p className="text-sm text-gray-600">{message}</p>
              </div>
            )}

            {status === 'success' && (
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-green-100 p-3">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-green-600 font-medium">{message}</p>
                <p className="text-xs text-gray-500">Taking you back to the homepage...</p>
              </div>
            )}

            {status === 'error' && (
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-red-100 p-3">
                  <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="text-sm text-red-600 font-medium">{message}</p>
                <button
                  onClick={() => window.location.href = '/'}
                  className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Return to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}