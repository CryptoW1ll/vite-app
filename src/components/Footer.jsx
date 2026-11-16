import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 p-4 text-center text-white">
      <div className="mx-auto max-w-screen-xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-2 text-sm">© {currentYear} Echelon Studio Limited. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
          <Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link>
          <a href="mailto:admin@echelonstudio.co.nz" className="text-gray-400 hover:text-white">Contact Us</a>
          <a href="https://discord.gg/VCGzzkw2" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://kick.com/echelonstudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Kick</a>
          <a href="https://www.facebook.com/profile.php?id=61568552083505" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://x.com/_EchelonStudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://www.youtube.com/@EchelonInteractiveStudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://github.com/cryptow1ll/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/will-fowlds-5885aa101/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
