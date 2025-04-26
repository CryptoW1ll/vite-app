import PlanetEarth from './PlanetEarth.jsx';


function Homepage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow">
                <PlanetEarth />
            </main>
            <footer className="bg-gray-900 text-white p-4 text-center">
                © 2025 Echelon
            </footer>
        </div>
    );
} export default Homepage;
