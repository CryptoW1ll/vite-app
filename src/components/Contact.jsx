import React from 'react';
import '../index.css';

export default function Contact() {

    return(
         <div className="app-container">
            <div className="scene-container relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8" id="">

                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <p>
                    Interested in working together? Feel free to reach out via:
                </p>
                <ul className="list-disc ml-5">
                    <li>Email: <a href="mailto:admin@echelonstudio.co.nz" className="text-blue-500">admin@echelonstudio.co.nz</a></li>
                    <li>LinkedIn: <a href="https://www.linkedin.com/in/will-fowlds-5885aa101/" className="text-blue-500">linkedin.com/in/will-fowlds</a></li>
                </ul>
            </div>
        </div>
    );

}