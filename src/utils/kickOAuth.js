// Kick.com OAuth 2.1 integration with PKCE support
// Based on official documentation: https://docs.kick.com/getting-started/generating-tokens-oauth2-flow

/**
 * Generate a cryptographically random code verifier for PKCE
 * @returns {string} - Base64URL encoded code verifier (43-128 characters)
 */
const generateCodeVerifier = () => {
  const array = new Uint8Array(32); // 32 bytes = 256 bits
  crypto.getRandomValues(array);
  return base64URLEncode(array);
};

/**
 * Generate code challenge from code verifier using SHA256
 * @param {string} codeVerifier - The code verifier
 * @returns {Promise<string>} - Base64URL encoded code challenge
 */
const generateCodeChallenge = async (codeVerifier) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return base64URLEncode(new Uint8Array(digest));
};

/**
 * Base64URL encode without padding (RFC 7636)
 * @param {Uint8Array} buffer - Buffer to encode
 * @returns {string} - Base64URL encoded string
 */
const base64URLEncode = (buffer) => {
  return btoa(String.fromCharCode(...buffer))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
};

/**
 * Initiates the Kick OAuth 2.1 User Access Token flow using PKCE
 * Redirects to Kick's authorization server at id.kick.com
 * @param {string[]} scopes - Array of requested permissions
 */
export const initiateKickOAuth = async (scopes = ['user:read']) => {
  const CLIENT_ID = import.meta.env.VITE_KICK_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/auth`;
  
  if (!CLIENT_ID) {
    console.error('VITE_KICK_CLIENT_ID not configured in environment variables');
    alert('OAuth is not properly configured. Please contact the administrator.');
    return;
  }

  try {
    // Generate PKCE parameters
    const codeVerifier = generateCodeVerifier();
    const codeChallenge = await generateCodeChallenge(codeVerifier);

    // Generate a unique key for this OAuth flow
    const stateKey = 'oauth_' + crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
    // Generate a random state for CSRF protection
    const stateValue = crypto.getRandomValues(new Uint32Array(1))[0].toString(16);
    // Encode both in the state parameter as JSON
    const stateObj = { key: stateKey, value: stateValue };
    const state = btoa(JSON.stringify(stateObj));
    console.log('[OAUTH] Generated state:', stateValue, 'with key:', stateKey, 'encoded:', state);
    // Store PKCE code verifier and state in localStorage with the unique key
    localStorage.setItem(`${stateKey}_state`, stateValue);
    localStorage.setItem(`${stateKey}_code_verifier`, codeVerifier);
    console.log('[OAUTH] Stored state in localStorage:', localStorage.getItem(`${stateKey}_state`));
    console.log('[OAUTH] Stored code_verifier in localStorage:', localStorage.getItem(`${stateKey}_code_verifier`));

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      scope: scopes.join(' '),
      code_challenge: codeChallenge,
      code_challenge_method: 'S256',
      state: state,
    });

    // Use official Kick OAuth server endpoint
    const authUrl = `https://id.kick.com/oauth/authorize?${params.toString()}`;
    
    console.log('Redirecting to Kick OAuth server:', authUrl);
    window.location.href = authUrl;
  } catch (error) {
    console.error('Failed to initiate OAuth flow:', error);
    alert('Failed to start authentication. Please try again.');
  }
};

/**
 * Exchange authorization code for User Access Token
 * @param {string} code - Authorization code from Kick
 * @returns {Promise<Object>} - Token response with access_token, refresh_token, etc.
 */
export const exchangeCodeForToken = async (code) => {
  const CLIENT_ID = import.meta.env.VITE_KICK_CLIENT_ID;
  const REDIRECT_URI = `${window.location.origin}/auth`;
  // Get state from URL and decode
  const urlParams = new URLSearchParams(window.location.search);
  const stateParam = urlParams.get('state');
  let stateKey = null;
  if (stateParam) {
    try {
      const stateObj = JSON.parse(atob(stateParam));
      stateKey = stateObj.key;
    } catch (e) {
      console.error('[OAUTH] Failed to parse state param:', stateParam, e);
    }
  }
  const codeVerifier = stateKey ? localStorage.getItem(`${stateKey}_code_verifier`) : null;
  console.log('[OAUTH] Retrieved code_verifier from localStorage:', codeVerifier, 'with key:', stateKey);
  
  if (!codeVerifier) {
    throw new Error('No code verifier found. OAuth flow may have been compromised.');
  }

  const CLIENT_SECRET = import.meta.env.VITE_KICK_CLIENT_SECRET;
  
  if (!CLIENT_SECRET) {
    throw new Error('Client secret not configured. Please set VITE_KICK_CLIENT_SECRET in your environment variables.');
  }

  console.warn('⚠️ SECURITY WARNING: Using client secret in frontend. This is for development only!');

  try {
    const response = await fetch('https://id.kick.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET, // ⚠️ EXPOSED IN FRONTEND
        redirect_uri: REDIRECT_URI,
        code_verifier: codeVerifier,
        code: code,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error_description || errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    const tokenData = await response.json();
    
    // Clean up stored PKCE parameters
    if (stateKey) {
      localStorage.removeItem(`${stateKey}_code_verifier`);
      localStorage.removeItem(`${stateKey}_state`);
    }
    
    console.log('Successfully obtained access token from Kick');
    return tokenData;
  } catch (error) {
    console.error('Token exchange failed:', error);
    if (stateKey) {
      localStorage.removeItem(`${stateKey}_code_verifier`);
      localStorage.removeItem(`${stateKey}_state`);
    }
    throw error;
  }
};

/**
 * Generate App Access Token using Client Credentials flow
 * This can access publicly available data without user authorization
 * @returns {Promise<Object>} - App access token response
 */
export const getAppAccessToken = async () => {
  const CLIENT_ID = import.meta.env.VITE_KICK_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_KICK_CLIENT_SECRET;
  
  if (!CLIENT_ID) {
    throw new Error('VITE_KICK_CLIENT_ID environment variable not configured');
  }
  
  if (!CLIENT_SECRET) {
    throw new Error('VITE_KICK_CLIENT_SECRET environment variable not configured. Note: This should be handled by a backend server in production.');
  }

  try {
    const response = await fetch('https://id.kick.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error_description || errorData.error || `HTTP ${response.status}: ${response.statusText}`);
    }

    const tokenData = await response.json();
    console.log('Successfully obtained app access token from Kick');
    return tokenData;
  } catch (error) {
    console.error('App token generation failed:', error);
    throw error;
  }
};

/**
 * Refresh expired User Access Token using refresh token
 * @returns {Promise<Object>} - New token response
 */
export const refreshAccessToken = async () => {
  const CLIENT_ID = import.meta.env.VITE_KICK_CLIENT_ID;
  const CLIENT_SECRET = import.meta.env.VITE_KICK_CLIENT_SECRET;
  const refreshToken = localStorage.getItem('kick_refresh_token');

  if (!refreshToken || !CLIENT_ID || !CLIENT_SECRET) {
    throw new Error('Missing refresh token or client credentials');
  }

  try {
    const response = await fetch('https://id.kick.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: refreshToken,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      // If refresh fails, clear stored tokens
      clearTokens();
      throw new Error(errorData.error_description || errorData.error || 'Token refresh failed');
    }

    const tokenData = await response.json();
    
    // Store new tokens
    storeTokens(tokenData);
    
    console.log('Successfully refreshed access token');
    return tokenData;
  } catch (error) {
    console.error('Token refresh failed:', error);
    clearTokens(); // Clear invalid tokens
    throw error;
  }
};

/**
 * Store authentication tokens securely in localStorage
 * @param {Object} tokenData - Token response from Kick OAuth
 */
export const storeTokens = (tokenData) => {
  if (tokenData.access_token) {
    localStorage.setItem('kick_access_token', tokenData.access_token);
  }
  
  if (tokenData.refresh_token) {
    localStorage.setItem('kick_refresh_token', tokenData.refresh_token);
  }
  
  // Store expiration timestamp if provided
  if (tokenData.expires_in) {
    const expiresAt = Date.now() + (tokenData.expires_in * 1000);
    localStorage.setItem('kick_token_expires', expiresAt.toString());
  }
  
  console.log('Tokens stored successfully');
};

/**
 * Clear all stored authentication tokens
 */
export const clearTokens = () => {
  localStorage.removeItem('kick_access_token');
  localStorage.removeItem('kick_refresh_token');
  localStorage.removeItem('kick_token_expires');
  localStorage.removeItem('kick_app_token');
  localStorage.removeItem('kick_app_token_expires');
  // Remove all oauth state and code_verifier keys
  Object.keys(localStorage).forEach((key) => {
    if (key.endsWith('_code_verifier') || key.endsWith('_state')) {
      localStorage.removeItem(key);
    }
  });
  console.log('[OAUTH] Cleared all oauth_code_verifier and oauth_state keys from localStorage');
  console.log('All tokens cleared');
};

/**
 * Check if user access token exists and is valid
 * @returns {boolean} - True if valid token exists
 */
export const isAuthenticated = () => {
  const token = localStorage.getItem('kick_access_token');
  const expiresAt = localStorage.getItem('kick_token_expires');
  
  if (!token) return false;
  
  // Check if token is expired (with 5 minute buffer)
  if (expiresAt) {
    const bufferTime = 5 * 60 * 1000; // 5 minutes in milliseconds
    const isExpired = Date.now() > (parseInt(expiresAt) - bufferTime);
    if (isExpired) {
      console.log('Token is expired');
      return false;
    }
  }
  
  return true;
};

/**
 * Get stored access token
 * @returns {string|null}
 */
export const getAccessToken = () => {
  return localStorage.getItem('kick_access_token');
};

/**
 * Make authenticated request to Kick API with automatic token refresh
 * Handles both User Access Tokens and App Access Tokens
 * @param {string} endpoint - API endpoint (e.g., '/channels/exampleuser')
 * @param {string} [method='GET'] - HTTP method
 * @param {Object} [body=null] - Request body for POST/PUT requests
 * @param {boolean} [requireUserAuth=true] - Whether endpoint requires user authentication
 * @returns {Promise<Object>} - API response data
 */
export const kickApiRequest = async (endpoint, method = 'GET', body = null, requireUserAuth = true) => {
  let token = null;
  
  if (requireUserAuth) {
    // Try to get user access token
    token = localStorage.getItem('kick_access_token');
    
    if (!token) {
      throw new Error('No access token available. User needs to authenticate.');
    }
  } else {
    // Get or generate app access token for public data
    token = localStorage.getItem('kick_app_token');
    
    if (!token) {
      console.log('No app token found, generating one...');
      const tokenData = await getAppAccessToken();
      token = tokenData.access_token;
      localStorage.setItem('kick_app_token', token);
      
      // Store expiration if provided
      if (tokenData.expires_in) {
        const expiresAt = Date.now() + (tokenData.expires_in * 1000);
        localStorage.setItem('kick_app_token_expires', expiresAt.toString());
      }
    }
  }

  try {
    const response = await fetch(`https://kick.com/api/v2${endpoint}`, {
      method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (response.status === 401 && requireUserAuth) {
      // Token expired, try to refresh
      console.log('Access token expired, attempting refresh...');
      try {
        const newTokenData = await refreshAccessToken();
        token = newTokenData.access_token;
        
        // Retry the original request with new token
        const retryResponse = await fetch(`https://kick.com/api/v2${endpoint}`, {
          method,
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: body ? JSON.stringify(body) : null,
        });
        
        if (!retryResponse.ok) {
          const errorData = await retryResponse.json().catch(() => ({}));
          throw new Error(errorData.message || `API request failed: ${retryResponse.status}`);
        }
        
        return await retryResponse.json();
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);
        clearTokens(); // Clear invalid tokens
        throw new Error('Authentication expired. Please log in again.');
      }
    }
    
    if (response.status === 401 && !requireUserAuth) {
      // App token expired or invalid, get a new one
      console.log('App token expired, generating new one...');
      localStorage.removeItem('kick_app_token');
      localStorage.removeItem('kick_app_token_expires');
      
      const tokenData = await getAppAccessToken();
      token = tokenData.access_token;
      localStorage.setItem('kick_app_token', token);
      
      if (tokenData.expires_in) {
        const expiresAt = Date.now() + (tokenData.expires_in * 1000);
        localStorage.setItem('kick_app_token_expires', expiresAt.toString());
      }
      
      // Retry with new app token
      const retryResponse = await fetch(`https://kick.com/api/v2${endpoint}`, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: body ? JSON.stringify(body) : null,
      });
      
      if (!retryResponse.ok) {
        const errorData = await retryResponse.json().catch(() => ({}));
        throw new Error(errorData.message || `API request failed: ${retryResponse.status}`);
      }
      
      return await retryResponse.json();
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `API request failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Kick API request failed:', error);
    throw error;
  }
};

/**
 * Get user information from Kick API using stored access token
 * This endpoint requires user authentication
 * @returns {Promise<Object>} - User data from Kick API
 */
export const getCurrentUser = async () => {
  return await kickApiRequest('/user', 'GET', null, true);
};