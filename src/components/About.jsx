import React from "react";
import Coinstand from "./Coinstand";

export default function About() {

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <h2 className="text-2xl font-semibold mb-4">W1027637 </h2>
                <img src="./NAV_Training3.jpg" alt="Dog Tags" className="mb-4" />
                <p className="text-lg mb-4">
                    Welcome to our website! We are dedicated to providing you with the best experience possible.
                </p>
                <p className="text-lg mb-4">
                    Our mission is to deliver high-quality content and services that meet your needs.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Challenge Coins </h2>
                <ul>
                    <li>Coin 1: name here</li>
                    <li>New Zealand Defence Force Veteran Coin. Purchased from creator.</li>
                    <li>Gov Comms Sec B Challenge Coin. Unofficially presented by colleagues.</li>
                    <li>Director Support to Military Operations Australia. Issued by CDR _name.</li>
                    <li>Director Support to Military Operations New Zealand. Issued by CDR Gavin Birrell.</li>
                    <li>Australian Signals Directorate Challenge Coin</li>
                    <li>HMNZS Otago Challenge Coin: Issued to Intelligence Team by Ships Captain.</li>
                    <li>Naval Operations Support Unit: Royal New Zaland Navy: Issued by unit Commander.</li>
                    <li>1 New Zealand Infantry Regiment: Purchased to commemorate personnel killed in action in Afghanistan.</li>
                </ul>
                <Coinstand />
            </div>
        </div>
    );
}
