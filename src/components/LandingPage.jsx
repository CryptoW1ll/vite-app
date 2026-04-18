import React from 'react';

function LandingPage() {
    return (
        <div className="bg-canvas text-primary min-h-screen">
            <section className="relative flex items-center justify-center py-32 text-center">
                <div>
                    <h1 className="text-5xl font-bold sm:text-7xl">Welcome to the Future</h1>
                    <p className="mt-4 text-lg sm:text-xl text-secondary font-medium">
                        Unlock unmatched possibilities with AI-driven solutions.
                    </p>
                    <a href="#explore" className="inline-block mt-6 rounded bg-accent-primary hover:bg-accent-primary-hover px-6 py-3 text-lg font-semibold text-inverse">Explore Now</a>
                </div>
            </section>

            <section id="explore" className="py-20 px-8 sm:px-16">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-8 text-center">
                        <h2 className="text-4xl font-semibold">What Makes Us Stand Out</h2>
                        <p className="mt-2 text-lg text-secondary">Crafting tailored AI solutions with cutting-edge infrastructure.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-6 bg-surface rounded-lg shadow">
                            <h3 className="text-xl font-medium">Precision Design</h3>
                            <p className="mt-2 text-sm text-secondary">Adopting aesthetics from Linear, Stripe, and Vercel for sharp UI designs.</p>
                        </div>
                        <div className="p-6 bg-surface rounded-lg shadow">
                            <h3 className="text-xl font-medium">Scalable Performance</h3>
                            <p className="mt-2 text-sm text-secondary">Your operations scale seamlessly on our robust cloud-backed architecture.</p>
                        </div>
                        <div className="p-6 bg-surface rounded-lg shadow">
                            <h3 className="text-xl font-medium">Results that Matter</h3>
                            <p className="mt-2 text-sm text-secondary">Analytics-driven decisions backed by an intuitive interface.</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-surface-alt py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-sm text-secondary">&copy; 2026 AI Masters. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;