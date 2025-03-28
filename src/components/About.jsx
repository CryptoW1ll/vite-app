import React from "react";
import Earth from "./Earth";

export default function About() {

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <h2 className="text-2xl font-semibold mb-4">W1027637 </h2>
                <img src="https://via.placeholder.com/150" alt="Dog Tags" className="mb-4" />
                <p className="text-lg mb-4">
                    Welcome to our website! We are dedicated to providing you with the best experience possible.
                </p>
                <p className="text-lg mb-4">
                    Our mission is to deliver high-quality content and services that meet your needs.
                </p>
                <Earth />
            </div>
        </div>
    );
}
