import React from 'react';

export default function GoogleBanner() {
  const affiliateLink = "https://workspace.google.com/pricing?uj=ref.promo~save10&uj=ref.referrer~53151N9";

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden max-w-3xl mx-auto my-6">
      <div className="p-6 md:flex md:items-center md:justify-between">
        {/* Left Side - Content */}
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white">Google Workspace</h3>
              <p className="text-blue-100 text-sm">Professional business tools for teams</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-yellow-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="text-sm font-semibold">Save 10% on your first year!</span>
          </div>
        </div>

        {/* Right Side - CTA */}
        <div className="flex flex-col sm:flex-row gap-3 md:ml-6">
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center px-6 py-3 font-semibold text-indigo-600 bg-white rounded-lg hover:bg-yellow-300 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>Get Started</span>
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 font-medium text-white border-2 border-white rounded-lg hover:bg-white/10 transition-all duration-200"
          >
            View Plans
          </a>
        </div>
      </div>
    </div>
  );
}
