export default function Echelon() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="mb-8 rounded bg-gray-900 py-4 text-center text-4xl font-bold text-white">Echelon Interactive Studio</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 rounded bg-gray-900 px-3 py-1 text-2xl font-semibold text-white">About Echelon</h2>
            <p className="mb-2 text-gray-700">Echelon Interactive Studio is a game development studio startup based in Invercargill, New Zealand. The name Echelon reflects military and organisational origins, signifying levels of command, discipline, and innovation.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow">
            <h2 className="mb-2 rounded bg-gray-900 px-3 py-1 text-2xl font-semibold text-white">Vision &amp; Goals</h2>
            <ul className="ml-5 list-disc text-gray-700">
              <li>Build a dedicated team delivering multiple game projects annually</li>
              <li>Embrace AI, cloud, and automation to enhance creativity and efficiency</li>
              <li>Expand into AR, MR, VR, and XR experiences</li>
              <li>Support local talent and promote New Zealand culture</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow md:col-span-2">
            <h2 className="mb-2 rounded bg-gray-900 px-3 py-1 text-2xl font-semibold text-white">Mission</h2>
            <p className="mb-2 text-gray-700">Our mission is to create engaging games for PC, Android, and iOS while supporting local developers and contributing to the community. We aim to inspire, educate, and innovate through technology and storytelling.</p>
            <p className="text-gray-700">We are committed to continuous learning, development, and collaboration with like-minded individuals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
