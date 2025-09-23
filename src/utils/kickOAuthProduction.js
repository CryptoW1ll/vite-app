// Production-safe PKCE initiation for Kick OAuth
// This modifies the existing kickOAuth.js to work with backend storage

/**
 * Production-safe OAuth initiation that stores PKCE data on backend
 */
export const initiateKickOAuthProduction = async (scopes = ['user:read']) => {
  const CLIENT_ID = import.meta.env.VITE_KICK_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/auth`;
  
  if (!CLIENT_ID) {
    console.error('VITE_KICK_CLIENT_ID not configured');
    alert('OAuth is not properly configured. Please contact the administrator.');
    return;
  }

  try {
    // Generate PKCE parameters
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const state = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);

    // Store PKCE data on backend instead of localStorage
    const storeResponse = await fetch('/api/auth/kick/store-pkce', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state,
        codeVerifier,
        timestamp: Date.now()
      }),
    });

    if (!storeResponse.ok) {
      throw new Error('Failed to store PKCE data on server');
    }

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: scopes.join(' '),
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      state: state,
    });

    const authUrl = `https://id.kick.com/oauth/authorize?${params.toString()}`;
    console.log('Redirecting to Kick OAuth (production-safe):', authUrl);
    window.location.href = authUrl;

  } catch (error) {
    console.error('Failed to initiate production OAuth flow:', error);
    alert('Failed to start authentication. Please try again.');
  }
};

// Helper functions (same as before)
const generateCodeVerifier = () => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return base64URLEncode(array);
};

const generateCodeChallenge = async (codeVerifier) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64URLEncode(new Uint8Array(digest));
};

const base64URLEncode = (buffer) => {
  return btoa(String.fromCharCode(...buffer))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};