import React from "react";
// import DocViewer from "../components/DocViewer.jsx";

export default function FATFPage() {

    const gameTags = [
       "Top-down", "Tactical", "Police", "RTS"
    ]

    const screenshots = [
        "Screenshot1.png", "Screenshot2.png", "Screenshot3.png"
    ]


  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* HERO SECTION: Encompasses all except About and DocViewer */}
      <section className="w-full bg-gradient-to-b from-[#23262e] via-[#1b2838] to-[#23262e] py-10 shadow-lg border-b border-[#23262e]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Community Hub button above sidebar */}
          <div className="md:col-span-3 flex flex-col sm:flex-row items-center justify-between gap-2 mb-4">
            <h1 className="text-3xl md:text-4xl font-extrabold">Fugitive Apprehension Task Force</h1>
            <a
              href="#"
              className="inline-block bg-[#23262e] border border-[#66c0f4] text-[#66c0f4] font-semibold px-4 py-2 rounded hover:bg-[#1b2838] hover:text-white transition-colors text-sm shadow mt-2 sm:mt-0"
              style={{ minWidth: '140px', textAlign: 'center' }}
              title="Visit the Community Hub"
            >
              Community Hub
            </a>
          </div>
          {/* Media section */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {/* Slideshow for video and images */}
            {(() => {
              const [mainMedia, setMainMedia] = React.useState({ type: 'video', src: 'https://www.youtube.com/embed/KBITFed5uHI' });
              const mediaItems = [
                { type: 'video', src: 'https://www.youtube.com/embed/KBITFed5uHI', thumb: '/Screenshot1.png', label: 'Trailer' },
                { type: 'video', src: 'https://www.youtube.com/embed/videoseries?list=PLe4r34Cj48rofMQtVXlJeidoueTbGrE_5', thumb: '/Screenshot2.png', label: 'Playlist' },
                // {type: 'video', src: '/basic_functions', thumb: '/Screenshot1.png', label: 'development_video' },
                ...screenshots.map(img => ({ type: 'image', src: `/${img}`, thumb: `/${img}` }))
              ];
              return (  
                <>
                  <div className="bg-black rounded shadow-lg overflow-hidden relative">
                    {mainMedia.type === 'video' ? (
                      <iframe
                        className="w-full aspect-video rounded"
                        src={mainMedia.src}
                        title="FATF Trailer"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <img
                        src={mainMedia.src}
                        alt="screenshot main"
                        className="w-full aspect-video object-cover rounded"
                        style={{ maxHeight: '420px', background: '#111' }}
                      />
                    )}
                  </div>
                  <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                    {mediaItems.map((item, idx) => (
                      <div key={idx} className="relative">
                        <img
                          src={item.thumb}
                          alt={item.type === 'video' ? 'Trailer' : `screenshot ${idx}`}
                          className={`w-24 h-16 object-cover rounded border-2 ${mainMedia.src === item.src ? 'border-[#66c0f4]' : 'border-gray-700'} hover:border-white cursor-pointer transition`}
                          onClick={() => setMainMedia({ type: item.type, src: item.src })}
                        />
                        {item.type === 'video' && (
                          <span className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold bg-black bg-opacity-40 rounded pointer-events-none">▶</span>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}
            {/* Wishlist and Follow buttons under images */}
            <div className="flex flex-col sm:flex-row gap-2 mt-2">
              <button className="bg-[#66c0f4] hover:bg-[#417a9b] text-black font-bold py-2 px-6 rounded shadow transition w-full sm:w-auto">+ Add to your Wishlist</button>
              <button className="bg-transparent border border-[#66c0f4] hover:bg-[#23262e] text-[#66c0f4] font-bold py-2 px-6 rounded shadow transition w-full sm:w-auto">Follow</button>
            </div>
          </div>
          {/* Info Panel/Sidebar */}
          <aside className="bg-[#2a475e] p-6 rounded shadow-lg flex flex-col gap-4 text-sm h-fit">
            <img
              src="/images/fatf-header.png"
              alt="Fugitive Apprehension Task Force"
              className="mb-4 rounded"
            />
            <div className="border-t border-[#3b4252] pt-4 mt-2">
              <p><strong className="text-white">DEVELOPER:</strong> Echelon Interactive Studio</p>
              <p><strong className="text-white">PUBLISHER:</strong> Echelon Interactive Studio</p>
              <p><strong className="text-white">RELEASE DATE:</strong> 11.11.2025</p>
              <p><strong className="text-white">RECENT REVIEWS:</strong> Coming Soon</p>
              <p><strong className="text-white">ALL REVIEWS:</strong> Coming Soon</p>
              {/* Tags at the bottom under reviews */}
              <div className="flex flex-wrap gap-2 mt-4">
                {gameTags.map((tag, idx) => (
                  <span key={idx} className="bg-[#66c0f4] text-black px-2 py-1 rounded text-xs font-semibold">{tag}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
      {/* ABOUT THIS GAME SECTION */}
      <section className="max-w-3xl mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mb-2 text-[#66c0f4]">About This Game</h2>
        <p className="mb-2 text-gray-200">FATF is a casual, action, strategy game where players take on the role of bounty hunters who must locate and apprehend fugitives. The game caters to casual gamers, strategy gamers, and law enforcement role players, focusing on less lethal combat with the ability to utilize lethal munitions when necessary.</p>
        <p className="mb-2 text-gray-200">Core mechanics blend realism and fun, offering tactical gameplay and encouraging gradual escalation until your target fugitive gives up.</p>
        <p className="mb-2 text-gray-200">The game will feature:</p>
        <ul className="list-disc list-inside text-gray-200 mb-4 pl-4">
          <li>Tactical searching of homes and property</li>
          <li>NPCs and interactions</li>
          <li>Fugitive resistance system</li>
          <li>Multiple combat scenarios for players to navigate</li>
          <li>An unlockable dog companion who can assist you</li>
          <li>Ragdoll physics for entertainment</li>
          <li>Environmental destruction for barricaded fugitives</li>
        </ul>
      </section>
      {/* DOCVIEWER SECTION */}
      <section className="max-w-3xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-semibold mb-2 text-[#66c0f4]">Game Design Document</h2>
        {/* <DocViewer docPath="/portfolio/documents/Bounty_Hunter_GDD.docx" /> */}
        <h2 className="text-xl font-semibold mb-2 text-[#66c0f4] mt-8">Technical Design Document</h2>
        {/* <DocViewer docPath="/portfolio/documents/TEST_TDD.docx" /> */}
      </section>
    </div>
  );
}
