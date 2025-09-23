import React, { useState, useEffect } from 'react';

export default function BackendTest() {
  const [status, setStatus] = useState('Testing...');
  //const [error, setError] = useState(null);

  // const backendURL = 'https://backend-auth-z6z0.onrender.com';

  const testBackend = async () => {
    try {
      setStatus('Connecting to backend...');
      const response = await fetch(`${backendURL}/health`, {
        method: 'GET',
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setStatus('✅ Backend connected successfully!');
      console.log('Backend health check:', data);
    } catch (err) {
      setError(err.message);
      setStatus('❌ Backend connection failed');
      console.error('Backend test failed:', err);
    }
  };

  // const testPKCEStorage = async () => {
  //   try {
  //     setStatus('Testing PKCE storage...');
  //     const response = await fetch(`${backendURL}/api/auth/kick/store-pkce`, {
  //       method: 'POST',
  //       credentials: 'include',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         state: 'test_state_12345',
  //         codeVerifier: 'test_code_verifier_at_least_43_characters_long_abc123',
  //         timestamp: Date.now()
  //       }),
  //     });
  //     if (!response.ok) {
  //       throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  //     }
  //     const data = await response.json();
  //     setStatus('✅ PKCE storage test successful!');
  //     console.log('PKCE storage result:', data);
  //   } catch (err) {
  //     setError(err.message);
  //     setStatus('❌ PKCE storage test failed');
  //     console.error('PKCE test failed:', err);
  //   }
  // };

  useEffect(() => {
    // testBackend();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Backend Connection Test</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Status:</p>
        <p className={`font-medium ${error ? 'text-red-600' : 'text-green-600'}`}>
          {status}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded">
          <p className="text-red-700 text-sm">
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={testBackend}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
        >
          Test Health
        </button>
        
        {/* <button
          onClick={testPKCEStorage}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
        >
          Test PKCE
        </button> */}
      </div>

      {/* <div className="mt-4 text-xs text-gray-500">
        <p>Backend should be running on: http://localhost:3001</p>
        <p>Make sure your backend server is running with 'npm run dev'</p>
      </div> */}
    </div>
  );
}