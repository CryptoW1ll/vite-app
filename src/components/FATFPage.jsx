import { useState } from 'react';

function MediaGallery({ screenshots }) {
  const [mainMedia, setMainMedia] = useState({ type: 'video', src: 'https://www.youtube.com/embed/KBITFed5uHI' });
  const mediaItems = [
    { type: 'video', src: 'https://www.youtube.com/embed/KBITFed5uHI', thumb: '/Screenshot1.png', label: 'Trailer' },
    { type: 'video', src: 'https://www.youtube.com/embed/videoseries?list=PLe4r34Cj48rofMQtVXlJeidoueTbGrE5', thumb: '/Screenshot2.png', label: 'Development playlist' },
    ...screenshots.map((img, index) => ({ type: 'image', src: `/${img}`, thumb: `/${img}`, label: `Screenshot ${index + 1}` })),
  ];

  return (
    <>
      <div className="relative overflow-hidden rounded bg-black shadow-lg">
        {mainMedia.type === 'video' ? (
          <iframe className="aspect-video w-full rounded" src={mainMedia.src} title={mainMedia.src.includes('videoseries') ? 'FATF development playlist' : 'FATF trailer'} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        ) : (
          <img src={mainMedia.src} alt={mainMedia.src.split('/').pop()} className="aspect-video w-full rounded object-cover" />
        )}
      </div>
      <div className="mt-2 flex gap-2 overflow-x-auto pb-2" aria-label="FATF media selection">
        {mediaItems.map((item) => (
          <button key={item.src} type="button" className={`relative shrink-0 rounded border-2 ${mainMedia.src === item.src ? 'border-[#66c0f4]' : 'border-gray-700'} transition hover:border-white focus:outline-none focus:ring-2 focus:ring-[#66c0f4]`} onClick={() => setMainMedia({ type: item.type, src: item.src })} aria-label={`Show ${item.label}`} aria-pressed={mainMedia.src === item.src}>
            <img src={item.thumb} alt="" className="h-16 w-24 rounded object-cover" />
            {item.type === 'video' && <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center rounded bg-black/40 text-xs font-bold text-white">▶</span>}
          </button>
        ))}
      </div>
    </>
  );
}

export default function FATFPage() {
  const gameTags = ['Top-down', 'Tactical', 'Police', 'RTS'];
  const screenshots = ['Screenshot1.png', 'Screenshot2.png', 'Screenshot3.png'];

  return (
    <div className="bg-gray-900 font-sans text-white">
      <section className="w-full border-b border-[#23262e] bg-gradient-to-b from-[#23262e] via-[#1b2838] to-[#23262e] py-10 shadow-lg">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 md:grid-cols-3">
          <div className="mb-4 flex flex-col items-center justify-between gap-2 sm:flex-row md:col-span-3">
            <h1 className="text-3xl font-extrabold md:text-4xl">Fugitive Apprehension Task Force</h1>
          </div>
          <div className="flex flex-col gap-4 md:col-span-2"><MediaGallery screenshots={screenshots} /></div>
          <aside className="flex h-fit flex-col gap-4 rounded bg-[#2a475e] p-6 text-sm shadow-lg">
            <img src="/images/fatf-header.png" alt="Fugitive Apprehension Task Force" className="mb-4 rounded" />
            <div className="mt-2 border-t border-[#3b4252] pt-4">
              <p><strong className="text-white">DEVELOPER:</strong> Echelon Studio Limited</p>
              <p><strong className="text-white">PUBLISHER:</strong> Echelon Studio Limited</p>
              <p><strong className="text-white">RELEASE DATE:</strong> 11.11.2025</p>
              <p><strong className="text-white">RECENT REVIEWS:</strong> Coming Soon</p>
              <p><strong className="text-white">ALL REVIEWS:</strong> Coming Soon</p>
              <div className="mt-4 flex flex-wrap gap-2">{gameTags.map((tag) => <span key={tag} className="rounded bg-[#66c0f4] px-2 py-1 text-xs font-semibold text-black">{tag}</span>)}</div>
            </div>
          </aside>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-4 py-8">
        <h2 className="mb-2 text-xl font-semibold text-[#66c0f4]">About This Game</h2>
        <p className="mb-2 text-gray-200">FATF is a casual, action, strategy game where players take on the role of bounty hunters who must locate and apprehend fugitives. The game caters to casual gamers, strategy gamers, and law enforcement role players, focusing on less lethal combat with the ability to utilize lethal munitions when necessary.</p>
        <p className="mb-2 text-gray-200">Core mechanics blend realism and fun, offering tactical gameplay and encouraging gradual escalation until your target fugitive gives up.</p>
        <p className="mb-2 text-gray-200">The game will feature:</p>
        <ul className="mb-4 list-inside list-disc pl-4 text-gray-200">
          <li>Tactical searching of homes and property</li><li>NPCs and interactions</li><li>Fugitive resistance system</li><li>Multiple combat scenarios for players to navigate</li><li>An unlockable dog companion who can assist you</li><li>Ragdoll physics for entertainment</li><li>Environmental destruction for barricaded fugitives</li>
        </ul>
      </section>
      <section className="mx-auto max-w-3xl px-4 pb-12">
        <h2 className="mb-2 text-xl font-semibold text-[#66c0f4]">Game Design Document</h2>
        <h2 className="mt-8 mb-2 text-xl font-semibold text-[#66c0f4]">Technical Design Document</h2>
      </section>
    </div>
  );
}
