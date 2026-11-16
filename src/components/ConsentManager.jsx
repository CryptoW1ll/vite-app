import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'echelon-consent-v1';
const GTM_ID = 'GTM-TKLPNP4W';
const ADSENSE_CLIENT = 'ca-pub-5859657992251643';

function loadScript(id, src, attributes = {}) {
  if (document.getElementById(id)) return;

  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = true;
  Object.entries(attributes).forEach(([name, value]) => script.setAttribute(name, value));
  document.head.appendChild(script);
}

function enableOptionalServices() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  loadScript('google-tag-manager', `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
  loadScript('google-adsense', `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`, {
    crossorigin: 'anonymous',
  });
}

export default function ConsentManager() {
  const [consent, setConsent] = useState(() => window.localStorage.getItem(CONSENT_KEY));

  useEffect(() => {
    if (consent === 'accepted') enableOptionalServices();
  }, [consent]);

  const updateConsent = (value) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  if (consent) return null;

  return (
    <aside
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-700 bg-gray-950 p-4 text-white shadow-2xl"
      aria-label="Privacy preferences"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-3xl text-sm text-gray-200">
          We use optional analytics and advertising services to understand site usage and support the studio.
          Read our <Link className="font-semibold text-blue-300 underline" to="/privacy">Privacy Policy</Link> before choosing.
        </p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => updateConsent('declined')} className="rounded border border-gray-500 px-4 py-2 text-sm font-semibold hover:bg-gray-800">
            Decline optional
          </button>
          <button type="button" onClick={() => updateConsent('accepted')} className="rounded bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">
            Accept optional
          </button>
        </div>
      </div>
    </aside>
  );
}
