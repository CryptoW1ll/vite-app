import React from 'react';

export default function GoogleWorkspace() {
  const affiliateLink = "https://workspace.google.com/pricing?uj=ref.promo~save10&uj=ref.referrer~53151N9";

  return (
    <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto my-8">
      <div className="p-8 md:p-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Power Your Business with Google Workspace
          </h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Professional email, cloud storage, and collaboration tools trusted by millions worldwide
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-lg mb-2">Professional Email</h3>
            <p className="text-blue-100 text-sm">Custom domain email addresses that build trust and credibility</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="font-semibold text-lg mb-2">Cloud Storage</h3>
            <p className="text-blue-100 text-sm">Secure cloud storage with easy access from anywhere, anytime</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-lg mb-2">Team Collaboration</h3>
            <p className="text-blue-100 text-sm">Real-time collaboration with Docs, Sheets, Meet, and more</p>
          </div>
        </div>

        {/* Special Offer Banner */}
        <div className="bg-yellow-400 text-gray-900 rounded-xl p-6 mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="font-bold text-lg">EXCLUSIVE OFFER</span>
          </div>
          <p className="text-2xl font-bold mb-1">Save 10% on Your First Year!</p>
          <p className="text-sm">Limited time offer for new customers</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-indigo-600 bg-white rounded-full overflow-hidden shadow-2xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-3xl w-full sm:w-auto"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Get Started & Save 10%
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </a>
          
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-indigo-600 transition-all duration-300 w-full sm:w-auto"
          >
            View Pricing Plans
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-blue-100 text-sm mb-3">Trusted by businesses of all sizes</p>
          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-xs">
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
