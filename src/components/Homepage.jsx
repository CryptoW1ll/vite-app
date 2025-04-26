import Footer from './Footer';
import PlanetEarth from './PlanetEarth.jsx';


function Homepage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow">
                <PlanetEarth />
            </main>
            <footer className="bg-gray-900 text-white p-4 text-center">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-sm mb-2">© 2025 Echelon Interactive Studio. All rights reserved.</p>
      
            <div className="flex flex-wrap justify-center gap-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              <a href="mailto:admin@echelonstudio.co.nz" className="text-gray-400 hover:text-white">Contact Us</a>
              <a href="https://store.steampowered.com/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Steam</a>
              <a href="https://discord.gg/VCGzzkw2" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Discord</a>
              <a href="https://www.facebook.com/profile.php?id=61568552083505" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://x.com/_EchelonStudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">X</a>
              <a href="https://www.youtube.com/@EchelonInteractiveStudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">YouTube</a>
              <a href="https://github.com/cryptow1ll/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Github</a>
              <a href="https://www.linkedin.com/in/will-fowlds-5885aa101/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
            </footer>
            {/* <Footer /> */}
        </div>
    );
} export default Homepage;
