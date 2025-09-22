// Auth0 configuration
export const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  authorizationParams: {
    redirect_uri: window.location.origin + '/auth',
    // Add any additional scopes your Kick integration needs
    scope: 'openid profile email',
    // Only include audience if it's defined
    ...(import.meta.env.VITE_AUTH0_AUDIENCE && { 
      audience: import.meta.env.VITE_AUTH0_AUDIENCE 
    }),
  },
  // Enable PKCE for security (this is the default in Auth0 React SDK)
  useRefreshTokens: true,
  cacheLocation: 'localstorage'
};