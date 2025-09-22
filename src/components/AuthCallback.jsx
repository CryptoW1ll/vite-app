import { useEffect } from "react";

export default function AuthCallback() {
  useEffect(() => {
    // read state and code from URL
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    console.log('[OAUTH] Code from URL:', code);
    const state = params.get("state");
    console.log('[OAUTH] State from URL:', state);

    // Check state matches what Unity sent (to prevent CSRF).


    // if state matches
    // Exchange the code for tokens (access + refresh).
      // post to https://id.kick.com/oauth/token
      /*
        {
          grant_type=authorization_code
          code=THE_CODE_FROM_URL
          redirect_uri=https://echelonstudio.co.nz/auth
          client_id=YOUR_CLIENT_ID
          client_secret=YOUR_CLIENT_SECRET
          code_verifier=THE_VERIFIER_GENERATED_IN_UNITY
      }

      */

    // store token (in localStorage?)
    // show success message and option to close window

    // kick Response:
    /*
      {
        "access_token": "eyJh...xyz",
        "token_type": "Bearer",
        "expires_in": 3600,
        "refresh_token": "k9p...abc",
        "scope": "user:read events:subscribe"
      }
    */

    //redirect to kick?

    // if (code && state) {
    //   fetch("https://echelonstudio.co.nz/api/kick/exchange", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ code, state })
    //   })
    //     .then(r => r.json())
    //     .then(data => {
    //       console.log("Kick tokens:", data);
    //       // Optionally, show "You can close this window and return to the game"
    //     });
    // }
  }, []);

  return <div>Logging you in with Kick...</div>;
}

/*
  Once your backend has the access_token, you’ve got 2 common options:
  REST API endpoint
  Backend stores the tokens in session / DB
  Unity calls GET https://echelonstudio.co.nz/api/session (with UnityWebRequest)
  Backend returns { "access_token": "..." }
*/


// import React, { useEffect, useState } from 'react';
// import { useSearchParams, useNavigate } from 'react-router-dom';
// import { exchangeCodeForToken, storeTokens } from '../utils/kickOAuth';

// export default function AuthCallback() {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState('processing');
//   const [message, setMessage] = useState('Processing Kick authentication...');

//   useEffect(() => {
//     const handleKickOAuthCallback = async () => {
//       // Always get state from window.location.search
//       const params = new URLSearchParams(window.location.search);
//       const state = params.get('state');
//       console.log('[OAUTH] State from URL:', state);

//       // Helper to convert base64url to base64
//       function base64UrlToBase64(str) {
//         if (!str) return str;
//         str = str.replace(/-/g, '+').replace(/_/g, '/');
//         while (str.length % 4) str += '=';
//         return str;
//       }

//       try {
//         // Get the authorization code from URL parameters
//         const code = params.get('code');
//         const error = params.get('error');
//         const errorDescription = params.get('error_description');

//         // Decode state parameter from URL (base64url safe)
//         let stateKey = null;
//         let stateValue = null;
//         if (state) {
//           try {
//             const decoded = atob(base64UrlToBase64(state));
//             const stateObj = JSON.parse(decoded);
//             stateKey = stateObj.key || stateObj.state;
//             stateValue = stateObj.value || stateObj.state;
//             // For Unity PKCE, support code_verifier in stateObj
//             if (stateObj.code_verifier) {
//               window._unity_code_verifier = stateObj.code_verifier;
//             }
//           } catch (e) {
//             console.error('[OAUTH] Failed to parse state param:', state, e);
//           }
//         }
//         // Verify state parameter for CSRF protection (now using localStorage with key)
//         const storedState = stateKey ? localStorage.getItem(`${stateKey}_state`) : null;
//         console.log('[OAUTH] State from URL:', stateValue);
//         console.log('[OAUTH] State from localStorage:', storedState, 'with key:', stateKey);
//         if (stateValue !== storedState) {
//           console.error('[OAUTH] State mismatch! URL:', stateValue, 'localStorage:', storedState, 'key:', stateKey);
//           throw new Error('State parameter mismatch. Possible CSRF attack.');
//         }

//         if (error) {
//           console.error('Kick OAuth error:', error, errorDescription);
//           setStatus('error');
//           setMessage(`Authentication failed: ${errorDescription || error}`);
//           return;
//         }

//         if (!code) {
//           setStatus('error');
//           setMessage('No authorization code received from Kick');
//           return;
//         }

//         console.log('Received authorization code from Kick:', code);

//         // Exchange the authorization code for an access token
//         const tokenResponse = await exchangeCodeForToken(code);
        
//         // Store the tokens
//         storeTokens(tokenResponse);

//         setStatus('success');
//         setMessage('Successfully authenticated with Kick! Redirecting...');
        
//         // Optional: Redirect back to main app after a delay
//         setTimeout(() => {
//           navigate('/');
//         }, 2000);

//       } catch (error) {
//         console.error('Error handling Kick OAuth callback:', error);
//         setStatus('error');
//         setMessage(`Error: ${error.message}`);
//       }
//     };

//     handleKickOAuthCallback();
//   }, [searchParams, navigate]);

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
//       <div className="sm:mx-auto sm:w-full sm:max-w-md">
//         <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//           Kick Authentication
//         </h2>
//       </div>

//       <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
//         <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
//           <div className="text-center">
//             {status === 'processing' && (
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
//                 <p className="text-sm text-gray-600">{message}</p>
//               </div>
//             )}

//             {status === 'success' && (
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="rounded-full bg-green-100 p-3">
//                   <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <p className="text-sm text-green-600 font-medium">{message}</p>
//                 <p className="text-xs text-gray-500">Taking you back to the homepage...</p>
//               </div>
//             )}

//             {status === 'error' && (
//               <div className="flex flex-col items-center space-y-4">
//                 <div className="rounded-full bg-red-100 p-3">
//                   <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 </div>
//                 <p className="text-sm text-red-600 font-medium">{message}</p>
//                 <button
//                   onClick={() => navigate('/')}
//                   className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                 >
//                   Return to Home
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }