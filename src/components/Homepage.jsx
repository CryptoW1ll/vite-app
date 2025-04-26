import Footer from './Footer';
import PlanetEarth from './PlanetEarth.jsx';


function Homepage() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <main className="flex-grow">
                <PlanetEarth />
            </main>
            <Footer />
        </div>
    );
} export default Homepage;
