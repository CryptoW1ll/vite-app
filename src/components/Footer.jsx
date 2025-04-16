import React from "react";

export default function Footer() {


    return (
    
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">© 2025 Echelon Interactive Studio. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                    <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                    <a href="mailto:admin@echelonstudio.co.nz" className="text-gray-400 hover:text-white">Contact Us</a>
                 
                    <a href="https://store.steampowered.com/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Steam</a>
                    <a href="https://discord.gg/VCGzzkw2" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Discord</a>
                    {/* INVALID https://discord.com/invite/VCGzzkw2 */}
                    <a href="https://www.facebook.com/EchelonInteractiveStudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://x.com/_EchelonStudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">X</a>
                    <a href="https://www.youtube.com/@EchelonInteractiveStudio" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="https://github.com/cryptow1ll/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="https://www.linkedin.com/in/will-fowlds-5885aa101/" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">Linkeden</a>

                    
                    {/* Website	https://www.echelonstudio.co.nz
                    Steam Account	EchelonInteractiveStudio
                    Discord	https://discord.gg/VCGzzkw2
                    Facebook	@EchelonInteractiveStudio
                    Twitter	@_EchelonStudio
                    YouTube	@EchelonInteractiveStudio */}
                </div>
            </div>
        </footer>
    );
}