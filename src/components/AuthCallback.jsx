import { useEffect, useState } from "react";
import { exchangeCodeForToken, storeTokens } from '../utils/kickOAuth';

/*
- ✅ `POST /api/auth/kick/store-pkce` - Secure PKCE storage
- ✅ `POST /api/auth/kick/exchange` - Token exchange with Kick
- ✅ `GET /api/auth/kick/status` - Authentication status check
- ✅ `DELETE /api/auth/kick/logout` - Secure logout
*/

/*
Debug 404
[Check] The cookie wasn't set properly during the login step.
[Check]The frontend is on a different domain (e.g., localhost vs. echelonstudio.co.nz), causing cross-site issues.
[CoRS Correct] Backend isn’t configured with proper CORS or session handling.
[CoRS Correct] Double-check backend CORS config:

*/

export default function AuthCallback() {
  const [status, setStatus] = useState("processing");
  const [message, setMessage] = useState("Exchanging code for tokens...");

  const backendURL = 'https://backend-auth-z6z0.onrender.com';

useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code");
  const state = params.get("state");
  const error = params.get("error");
  const errorDescription = params.get("error_description");

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

  let codeVerifier = null;
  try {
    codeVerifier = localStorage.getItem('pkce_code_verifier') || sessionStorage.getItem('pkce_code_verifier');
  } catch (e) {}
  if (!codeVerifier) {
    codeVerifier = 'test_code_verifier_at_least_43_characters_long_abc123';
  }

  const redirectUri = process.env.NODE_ENV === 'production'
    ? 'https://echelonstudio.co.nz/auth'
    : 'https://echelonstudio.co.nz/auth'; // Use prod URI in dev too

  const backendURL = process.env.NODE_ENV === 'production'
    ? 'https://backend-auth-z6z0.onrender.com'
    : 'http://localhost:3001';

  const exchangeTokenSafely = async (code) => {
    console.log('[OAUTH] Using redirect URI:', redirectUri);
    const response = await fetch(`${backendURL}/api/auth/kick/exchange`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code, redirect_uri: redirectUri })
    });

    console.log('[OAUTH] Token exchange response status:', response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || errorData.message || `HTTP ${response.status}`);
    }

    return response.json();
  };

  const storePKCE = async () => {
    try {
      const response = await fetch(`${backendURL}/api/auth/kick/store-pkce`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          state: state,
          codeVerifier: codeVerifier,
          timestamp: Date.now()
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);

      const data = await response.json();
      console.log('✅ PKCE stored successfully:', data);
      return true;
    } catch (err) {
      console.error('❌ PKCE storage failed:', err);
      setStatus("error");
      setMessage("PKCE storage failed: " + err.message);
      return false;
    }
  };

  storePKCE().then((stored) => {
    if (!stored) return;

    exchangeTokenSafely(code)
      .then((tokens) => {
        console.log('[OAUTH] Tokens received:', tokens);
        storeTokens(tokens);
        setStatus("success");
        setMessage("Kick authentication successful!");
        setTimeout(() => { window.location.href = '/'; }, 2000);
      })
      .catch((error) => {
        console.error('[OAUTH] Token exchange failed:', error);
        setStatus("error");
        setMessage("OAuth failed: " + error.message);
      });
  });
}, []);

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
          </div>
        </div>
      </div>
    </div>
  );
}