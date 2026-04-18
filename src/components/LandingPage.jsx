import React from 'react';

function LandingPage() {
    return (
        <div className="bg-canvas text-primary">
            <header className="bg-accent.primary text-inverse py-6">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Welcome to Your Business</h1>
                    <p className="text-lg">Making a difference, one step at a time</p>
                </div>
            </header>
            <main className="py-16">
                <div className="container mx-auto px-4">
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                        <p>Discover our unique range of products and services that are designed to meet your needs.</p>
                    </section>
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                        <p>Our commitment to quality and customer satisfaction sets us apart.</p>
                    </section>
                    <section>
                        <h2 className="text-2xl font-semibold mb-4">Get Started Today</h2>
                        <button className="bg-accent.primary hover:bg-accent.primary.hover text-inverse px-6 py-3 rounded">Join Us</button>
                    </section>
                </div>
            </main>
            <footer className="bg-surface.alt py-6">
                <div className="container mx-auto px-4">
                    <p>&copy; 2026 Your Business. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;