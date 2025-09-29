export default function Echelon() {


    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-4xl lg:px-8">
                <h1 className="text-center text-4xl font-bold text-white mb-8 bg-gray-900 py-4 rounded">Echelon Interactive Studio</h1>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-2xl font-semibold mb-2 text-white bg-gray-900 px-3 py-1 rounded">About Echelon</h2>
                        <p className="text-gray-700 mb-2">
                            Echelon Interactive Studio is a humble game development studio startup based in Invercargill, New Zealand. The name "Echelon" reflects both military and organizational origins—signifying levels of command, discipline, and innovation.
                        </p>
                        {/* <p className="text-gray-700 mb-2">
                            Our values are Commitment, Courage, Comradeship, and Integrity. We bring a fresh perspective to game development, influenced by real-world experience and a passion for immersive, meaningful games.
                        </p> */}
                    </div>
                    <div className="bg-white rounded-lg shadow p-6">
                        <h2 className="text-2xl font-semibold mb-2 text-white bg-gray-900 px-3 py-1 rounded">Vision & Goals</h2>
                        <ul className="list-disc ml-5 text-gray-700">
                            <li>Build a dedicated team delivering multiple game projects annually</li>
                            <li>Embrace AI, cloud, and automation to enhance creativity and efficiency</li>
                            <li>Expand into AR, MR, VR, and XR experiences</li>
                            <li>Support local talent and promote New Zealand culture</li>
                        </ul>
                    </div>
                    <div className="bg-white rounded-lg shadow p-6 md:col-span-2">
                        <h2 className="text-2xl font-semibold mb-2 text-white bg-gray-900 px-3 py-1 rounded">Mission</h2>
                        <p className="text-gray-700 mb-2">
                            Our mission is to create engaging games for PC, Android, and iOS, while supporting local developers and contributing to the community. We aim to inspire, educate, and innovate through technology and storytelling.
                        </p>
                        <p className="text-gray-700">
                            We are committed to continuous learning, development, and collaboration with like-minded individuals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}