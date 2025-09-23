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

    const PKCEStorage = async () => {
    try {
      // setStatus('Testing PKCE storage...');
      const response = await fetch(`${backendURL}/api/auth/kick/store-pkce`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: state,
          codeVerifier: codeVerifier,
          timestamp: Date.now()
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setStatus('✅ PKCE storage test successful!');
      console.log('PKCE storage result:', data);
    } catch (err) {
      setError(err.message);
      setStatus('❌ PKCE storage test failed');
      console.error('PKCE test failed:', err);
    }
  };

    PKCEStorage();

    setTimeout(() => {
      setMessage("Storing PKCE Automatically..." );
        }, 3000);



    if (!code || !state) {
      setStatus("error");
      setMessage("Missing authorization code or state parameter.");
      return;
    }

    // Production-safe token exchange using backend proxy
    // This avoids exposing client_secret in frontend code
    const exchangeTokenSafely = async (code) => {
      const backendURL = process.env.NODE_ENV === 'production' 
        ? 'https://backend-auth-z6z0.onrender.com'
        : 'http://localhost:3001';

      // Use same redirect URI as OAuth initiation (production URL for now)
      const redirectUri = process.env.NODE_ENV === 'production' 
        ? 'https://echelonstudio.co.nz/auth'
        : 'https://echelonstudio.co.nz/auth'; // Use production URI for development testing

      console.log('[OAUTH] Using redirect URI for token exchange:', redirectUri);
      console.log('[OAUTH] backend URL:', `${backendURL}/api/auth/kick/exchange`); // shouldnt this be kick/exchange?

      //


      /*
       Above logs seem correct
      To avoid a 400 error, make sure:
        You send a POST request with a JSON body containing both code and redirect_uri.
        The request includes the session cookie (kick.oauth.session) that was set earlier in the OAuth flow.
        If either the body or the session is missing/invalid, you will get a 400 error.
      */
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
      //
     
     */
      // Add Session to body
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

      console.log('[OAUTH] Token exchange response status:', response.status);
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.message || `HTTP ${response.status}`);
      }

      return response.json();

      // const responseData = await response.json().catch(() => ({}));
      // console.log('[OAUTH] Token exchange response status:', response.status);
      // if (!response.ok) {
      //   throw new Error(responseData.error || responseData.message || `HTTP ${response.status}`);
      // }
      // return responseData;
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
          </div>
        </div>
      </div>
    </div>
  );
}