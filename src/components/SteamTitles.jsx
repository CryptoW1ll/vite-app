import React, { useState, useEffect } from 'react';

//const gameTitles = ["Counter-Strike 2", "Baldur's Gate 3", "Helldivers 2"];
//"How Was Your Day?",
//"Shelflife: Art School Detective"
// "Teeto", , "Shape Sender Deluxe",
const gameTitles1 = [ 
  "Apothecurse",
  "KUU",
  "Match & Mastery",
  "Shelflife",
  "Tryhard",
  "How Was Your Day",
];

//"MA",   "Tiny Haunted Bookshop",   "Shardquest", "Mind the Animals",   "Pikwip", "GO PHISH",
const gameTitles2 = [
  "Cold Salvage",
  "Into the Rootforge",
  "Bashful Adoration"  
];

const gameTitles3 = [
    "Teeto",
    "Shape Sender Deluxe",
    "Burger Bois",
    "Project Mix",
];


// Using a CORS proxy to bypass Steam API CORS restrictions
const CORS_PROXY = 'https://corsproxy.io/?';

export default function SteamTitles() {
  const [games1, setGames1] = useState([]);
  const [games2, setGames2] = useState([]);
  const [games3, setGames3] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAppId = async (title) => {
    try {
      const url = `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(title)}&cc=us`;
      const res = await fetch(CORS_PROXY + encodeURIComponent(url));
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      return data.items?.[0]?.id;
    } catch (err) {
      console.error(`Error fetching app ID for ${title}:`, err);
      return null;
    }
  };

  const getAppDetails = async (appid) => {
    try {
      const url = `https://store.steampowered.com/api/appdetails?appids=${appid}`;
      const res = await fetch(CORS_PROXY + encodeURIComponent(url));
      
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      
      const data = await res.json();
      return data[appid]?.data;
    } catch (err) {
      console.error(`Error fetching details for app ${appid}:`, err);
      return null;
    }
  };

  const getPlayerCount = async (appid) => {
    try {
      const url = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${appid}`;
      const res = await fetch(CORS_PROXY + encodeURIComponent(url));
      
      // If 404, the game doesn't have player stats available - return null instead of 0
      if (res.status === 404) {
        return null;
      }
      
      if (!res.ok) {
        return null;
      }
      
      const data = await res.json();
      return data.response?.player_count || 0;
    } catch (err) {
      // Silently handle errors for player count - not all games have this feature
      return null;
    }
  };

  const loadGamesForArray = async (gameTitles) => {
    const gamesData = [];

    for (const title of gameTitles) {
      try {
        const appid = await getAppId(title);
        if (!appid) {
          console.warn(`Could not find app ID for: ${title}`);
          continue;
        }

        const details = await getAppDetails(appid);
        if (!details) {
          console.warn(`Could not fetch details for: ${title} (ID: ${appid})`);
          continue;
        }

        const players = await getPlayerCount(appid);

        gamesData.push({
          appid,
          name: details.name,
          headerImage: details.header_image,
          developers: details.developers?.join(', ') || 'N/A',
          releaseDate: details.release_date?.date || 'Unknown',
          price: details.price_overview ? details.price_overview.final_formatted : 'Free or N/A',
          players: players,
        });
      } catch (gameErr) {
        console.error(`Error loading game "${title}":`, gameErr);
        // Continue with next game instead of failing completely
      }
    }

    return gamesData;
  };

  const loadGames = async () => {
    try {
      setLoading(true);
      setError(null);

      // Load all three arrays in parallel
      const [gamesData1, gamesData2, gamesData3] = await Promise.all([
        loadGamesForArray(gameTitles1),
        loadGamesForArray(gameTitles2),
        loadGamesForArray(gameTitles3)
      ]);

      if (gamesData1.length === 0 && gamesData2.length === 0 && gamesData3.length === 0) {
        setError('Could not load any games. Please try again later.');
      }

      setGames1(gamesData1);
      setGames2(gamesData2);
      setGames3(gamesData3);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Steam Games Dashboard</h1>
        <div className="flex justify-center items-center py-20">
          <div className="text-gray-400 text-xl">Loading games...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-white mb-6">Steam Games Dashboard</h1>
        <div className="bg-red-900/20 border border-red-500 text-red-300 px-4 py-3 rounded">
          Error loading games: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Steam Games Dashboard</h1>
      
      {/* First Collection */}
      {games1.length > 0 && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-4">C.O.D.E Travel Grant Recipients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games1.map((game) => (
              <div 
                key={game.appid} 
                className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <h2 className="text-xl font-semibold text-white mb-4 line-clamp-2">{game.name}</h2>
                
                <img 
                  src={game.headerImage} 
                  alt={game.name}
                  className="w-full rounded-lg mb-4 object-cover"
                />
                
                <div className="space-y-2 text-gray-300 text-sm flex-grow">
                  <p>
                    <strong className="text-white">Developer:</strong> {game.developers}
                  </p>
                  <p>
                    <strong className="text-white">Release Date:</strong> {game.releaseDate}
                  </p>
                  <p className="text-green-400 font-bold text-base">
                    {game.price}
                  </p>
                  {game.players !== null && (
                    <p>
                      <strong className="text-white">Players Online:</strong> {game.players.toLocaleString()}
                    </p>
                  )}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <a 
                    href={`https://store.steampowered.com/app/${game.appid}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    View on Steam
                  </a>
                  <a 
                    href={`https://steamdb.info/app/${game.appid}/charts/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    SteamDB
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Second Collection */}
      {games2.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Kickstart Grants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games2.map((game) => (
              <div 
                key={game.appid} 
                className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <h2 className="text-xl font-semibold text-white mb-4 line-clamp-2">{game.name}</h2>
                
                <img 
                  src={game.headerImage} 
                  alt={game.name}
                  className="w-full rounded-lg mb-4 object-cover"
                />
                
                <div className="space-y-2 text-gray-300 text-sm flex-grow">
                  <p>
                    <strong className="text-white">Developer:</strong> {game.developers}
                  </p>
                  <p>
                    <strong className="text-white">Release Date:</strong> {game.releaseDate}
                  </p>
                  <p className="text-green-400 font-bold text-base">
                    {game.price}
                  </p>
                  {game.players !== null && (
                    <p>
                      <strong className="text-white">Players Online:</strong> {game.players.toLocaleString()}
                    </p>
                  )}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <a 
                    href={`https://store.steampowered.com/app/${game.appid}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    View on Steam
                  </a>
                  <a 
                    href={`https://steamdb.info/app/${game.appid}/charts/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    SteamDB
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Third Collection */}
      {games3.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Prototype Grants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games3.map((game) => (
              <div 
                key={game.appid} 
                className="bg-gray-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <h2 className="text-xl font-semibold text-white mb-4 line-clamp-2">{game.name}</h2>
                
                <img 
                  src={game.headerImage} 
                  alt={game.name}
                  className="w-full rounded-lg mb-4 object-cover"
                />
                
                <div className="space-y-2 text-gray-300 text-sm flex-grow">
                  <p>
                    <strong className="text-white">Developer:</strong> {game.developers}
                  </p>
                  <p>
                    <strong className="text-white">Release Date:</strong> {game.releaseDate}
                  </p>
                  <p className="text-green-400 font-bold text-base">
                    {game.price}
                  </p>
                  {game.players !== null && (
                    <p>
                      <strong className="text-white">Players Online:</strong> {game.players.toLocaleString()}
                    </p>
                  )}
                </div>
                
                <div className="flex gap-2 mt-4">
                  <a 
                    href={`https://store.steampowered.com/app/${game.appid}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    View on Steam
                  </a>
                  <a 
                    href={`https://steamdb.info/app/${game.appid}/charts/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 text-center"
                  >
                    SteamDB
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/*
Travel Grant recipients 2025
Apothecurse - Lesser Key Studios
How Was Your Day? - Mad Carnival
KUU - Interactive Tragedy, Limited
Match & Mastery - FourFox Interactive
Shape Sender Deluxe - Dead Teapot
Shelflife: Art School Detective - Fnife Games
Teeto - Eat Pant Games
Tryhard - Grapefruit Games Ltd.


Studio: Bunguin Games (New Plymouth)
Project: Cold Salvage
Grant: $40,000
Cold Salvage is a co-op survival horror game set in dangerous abandoned wrecks. Load up on gear and enter unstable environments, avoiding hazards and creatures as you work to claim your salvage.

Studio: Cookiecrayon Ltd (Napier)
Project: Pikwip
Grant: $40,000
Two tethered buddies stumble their way up a mountain in a co-op tug-of-war adventure. Fumble through awkward obstacles and jump into optional mini games as you coordinate your moves, powers, and evergrowing collection of outfits.

Studio: Cosmic Soup Games (Christchurch)
Project: GO PHISH
Grant: $39,900.60
GO PHISH is a puzzle card game about hacking and social engineering. As a young Comp.Sci graduate with big debts and a looming rent payment, you must phish innocent victims out of their savings in order to survive.

Studio: Dolphin Ridge Games (Wellington)
Project: Shardquest (working title)
Grant: $40,000
Shardquest is a free-to-play mobile game that fuses turn-based tower defence with roguelike deckbuilding. Build your deck, shape the battlefield, and defend magical crystals in endlessly replayable runs packed with strategy, synergies, and tactical depth.

Studio: White Balance Pictures (Wellington)
Project: Mind the Animals
Grant: $40,000
Mind the Animals is a cozy sim dramedy about 27-year-old Dawn, running a seaside bakery in New Zealand. With six months to find her path, she’s guided by sentient, telepathic animals whose advice can shape the direction of her life in unexpected ways.

Studio: Hugenormous Games (Auckland)
Project: Into the Rootforge
Grant: $40,000
Into the Rootforge is a fusion of runner, roguelike and card-based action combat. Master customisable attacks to delve further with each attempt. Uncover the secrets of the Rootforge and grow your true power through the skill trees of The Garden.

Studio: Kitty Wampus (Auckland)
Project: Bashful Adoration
Grant: $39,916
Bashful Adoration is a kinetic 3D platformer starring a cast of four competitive witches who are all in love with the same crush! Features bombastic combat, expressive movement and a light-hearted narrative ripe with themes of love, rivalry and friendship.

Studio: Trinsic Labs (Wellington)
Project: Tiny Haunted Bookshop
Grant: $40,000
Tiny Haunted Bookshop is a cozy mystery horror game that blends collectible play and light management. Players run a tiny second-hand bookshop in a strange small town, focusing on collecting sets of beloved books to unlock their powers and uncover the town’s eerie secrets.

Studio: Tuatara Tea Party (Wellington)
Project: MA
Grant: $40,000
MA is a top-down cooking RPG with a flavorful twist. Go on an adventure through the spirit world to save your grandma from an evil sea serpent using the power of cooking. Cook various dishes for different mythological characters, exploring Korean cuisine in this story about identity and family.

Studio: Plectrum Software (Auckland)
Project: Project Mix
Grant: $149,975.68
PROJECT MIX is a VR anime narrative adventure, inspired by 90's anime and Hong Kong cinema.

 
Studio: Dead Teapot Ltd (Wellington)
Project: Shape Sender Deluxe
Grant: $150,000
Solve physics puzzles using a range of unconventional tools and get shapes from A to B, while your new best friend Sendy teaches you how to play, exchanges bants, and challenges you - before betraying you and forcing you to become the level designer!

 
Studio: Eat Pant Games (Wellington)
Project: Teeto
Grant: $150,000
Teeto is a 3D adventure platformer where you play as a tiny blob and bunny duo on an extraordinary journey. Absorb objects from the world, harnessing their powers to fight the shadow corruption and help out a cast of crazy characters in an action packed adventure!

Studio: Mischief Makers Studio (Auckland)
Project: Burger Bois
Grant: $150,000
A whimsical food truck simulation game about flavour, not labour. As chief burger creative, design perfect sandwiches and craft your customers' most vague requests into culinary masterpieces - or disasterpieces!  No recipe, no 'one-right-answer': just let your tastebuds take you to the top.
*/

