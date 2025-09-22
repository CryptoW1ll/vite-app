import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <button 
        disabled 
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 cursor-not-allowed"
      >
        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
        Loading...
      </button>
    );
  }

  if (isAuthenticated) {
    return null; // Don't show login button if already authenticated
  }

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Log In
    </button>
  );
};

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null; // Don't show logout button if not authenticated
  }

  return (
    <button
      onClick={() => logout({ 
        logoutParams: { returnTo: window.location.origin } 
      })}
      className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Log Out
    </button>
  );
};

const UserProfile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  if (isLoading) {
    return <div className="text-gray-500">Loading user info...</div>;
  }

  if (!isAuthenticated || !user) {
    return null;
  }

  const handleGetToken = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log('Access token:', token);
      // You can use this token to make API calls to your backend or external services
    } catch (error) {
      console.error('Error getting access token:', error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-2">User Profile</h3>
      <div className="flex items-center space-x-3 mb-4">
        {user.picture && (
          <img 
            src={user.picture} 
            alt={user.name} 
            className="h-10 w-10 rounded-full"
          />
        )}
        <div>
          <p className="text-sm font-medium text-gray-900">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>
      <button
        onClick={handleGetToken}
        className="text-xs text-indigo-600 hover:text-indigo-500"
      >
        Get Access Token (Check Console)
      </button>
    </div>
  );
};

export default function Auth0Integration() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-gray-50 rounded-lg">
      <h2 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        Auth0 Integration
      </h2>
      
      <div className="space-y-4">
        {isLoading ? (
          <div className="text-center text-gray-500">Loading...</div>
        ) : (
          <>
            <div className="flex space-x-2 justify-center">
              <LoginButton />
              <LogoutButton />
            </div>
            
            {isAuthenticated && <UserProfile />}
            
            {!isAuthenticated && (
              <p className="text-sm text-gray-600 text-center">
                Click "Log In" to authenticate with Auth0
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}