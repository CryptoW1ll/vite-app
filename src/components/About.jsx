import { Link } from 'react-router-dom';
import Coinstand from './Coinstand.jsx';
import TechSlider from './TechSlider.jsx';

const strengths = [
  {
    title: 'Systems thinking',
    description: 'I break complex ideas into clear systems, priorities, and practical next steps.',
  },
  {
    title: 'Technical problem-solving',
    description: 'I combine development experience with structured analysis to build reliable interactive experiences.',
  },
  {
    title: 'Project ownership',
    description: 'I take responsibility for scope, documentation, communication, and delivering the work.',
  },
  {
    title: 'Decisive under pressure',
    description: 'High-responsibility operational work has shaped a calm, precise, and deliberate working style.',
  },
];

function AboutHero() {
  return (
    <section className="grid items-center gap-10 rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/70 p-6 shadow-2xl sm:p-10 lg:grid-cols-[auto_1fr]">
      <img src="/images/Avatar.png" alt="Portrait of Will Fowlds" className="mx-auto h-40 w-40 rounded-2xl object-cover shadow-xl ring-1 ring-white/20 sm:h-52 sm:w-52 lg:mx-0" />
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">Developer · Operator · Studio Founder</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Building thoughtful systems and memorable interactive experiences.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
          I&apos;m <strong className="text-white">Will Fowlds</strong>, a developer and the founder of Echelon Interactive Studio in Invercargill, New Zealand. I combine operational discipline, technical curiosity, and a love of game development to create focused, systems-driven work.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link to="/projects" className="rounded-lg bg-blue-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:bg-blue-400">Explore projects</Link>
          <Link to="/contact" className="rounded-lg border border-slate-500 px-5 py-3 font-semibold text-white transition hover:border-blue-300 hover:bg-white/10">Start a conversation</Link>
          <a href="/documents/Resume.docx" download className="rounded-lg px-5 py-3 font-semibold text-blue-200 underline decoration-blue-400 underline-offset-4 transition hover:text-white">Download résumé</a>
        </div>
      </div>
    </section>
  );
}

function CredibilityStrip() {
  const facts = [
    ['Based in', 'Invercargill, New Zealand'],
    ['Core focus', 'Games and interactive systems'],
    ['Studio', 'Echelon Interactive Studio'],
    ['Approach', 'Structured, curious, and accountable'],
  ];

  return (
    <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Professional summary">
      {facts.map(([label, value]) => (
        <div key={label} className="rounded-2xl border border-slate-700 bg-slate-900/80 p-5 shadow-lg">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">{label}</p>
          <p className="mt-2 font-semibold leading-6 text-white">{value}</p>
        </div>
      ))}
    </section>
  );
}

function ProfessionalStory() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" aria-labelledby="professional-story-heading">
      <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">The short version</p>
        <h2 id="professional-story-heading" className="mt-2 text-3xl font-bold text-white">A technical career shaped by responsibility.</h2>
        <div className="mt-5 space-y-4 text-base leading-8 text-slate-300">
          <p>By day, I work as an Operator for Lockheed Martin Space in a high-responsibility environment where precision, system awareness, and decision-making under pressure matter.</p>
          <p>Alongside that role, I am building a second career in development. I specialise in C#, Unity, React, and interactive systems, using Echelon Interactive Studio to turn ideas into playable and useful experiences.</p>
          <p>I care about clear structure, thoughtful design, and continuous improvement. My goal is to make ambitious ideas easier to understand, build, and experience.</p>
        </div>
      </div>
      <div className="rounded-2xl border border-blue-900/70 bg-blue-950/40 p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">What I bring</p>
        <ul className="mt-5 space-y-5 text-slate-200">
          <li><strong className="text-white">Clarity:</strong> translating complex goals into practical plans.</li>
          <li><strong className="text-white">Ownership:</strong> carrying work from concept and documentation through to delivery.</li>
          <li><strong className="text-white">Curiosity:</strong> continually learning across software, games, cloud, and emerging technology.</li>
          <li><strong className="text-white">Perspective:</strong> combining technical work with real operational and leadership experience.</li>
        </ul>
      </div>
    </section>
  );
}

function StrengthsSection() {
  return (
    <section aria-labelledby="strengths-heading">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Working strengths</p>
        <h2 id="strengths-heading" className="mt-2 text-3xl font-bold text-white">How I approach difficult work</h2>
        <p className="mt-3 text-slate-300">These are practical strengths developed through projects, leadership, technical work, and operational experience.</p>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {strengths.map((strength) => (
          <article key={strength.title} className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6">
            <h3 className="text-xl font-semibold text-white">{strength.title}</h3>
            <p className="mt-2 leading-7 text-slate-300">{strength.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 sm:p-8" aria-labelledby="education-heading">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Learning foundation</p>
      <h2 id="education-heading" className="mt-2 text-3xl font-bold text-white">Education and development</h2>
      <ul className="mt-5 grid gap-3 text-slate-300 sm:grid-cols-2">
        <li><strong className="text-white">2012:</strong> Blanchards Leadership Development Framework</li>
        <li><strong className="text-white">2017:</strong> NZDF Lead Self, Teams, and Leaders programmes</li>
        <li><strong className="text-white">2021:</strong> Level 4 Certificate in Small Business Management, Southern Institute of Technology</li>
        <li><strong className="text-white">2022:</strong> Level 5 and 6 Software Engineering papers, Media Design School</li>
        <li><strong className="text-white">2023–2025:</strong> Bachelor of Information Technology, Southern Institute of Technology</li>
      </ul>
    </section>
  );
}

function MilitaryExperience() {
  return (
    <section className="rounded-3xl border border-amber-900/60 bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/30 p-6 sm:p-10" aria-labelledby="military-heading">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Military experience</p>
        <h2 id="military-heading" className="mt-2 text-3xl font-bold text-white">Service, operations, and perspective</h2>
        <p className="mt-4 leading-8 text-slate-300">This section records the operational background that continues to influence how I communicate, assess risk, lead, and perform under pressure.</p>
      </div>
      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold text-white">Service history</h3>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li><strong className="text-white">2009:</strong> Joined the Royal New Zealand Navy as a Communications Analyst / Electronic Warfare Specialist.</li>
            <li><strong className="text-white">2014:</strong> Promoted to Leading Communications Analyst.</li>
            <li><strong className="text-white">2016:</strong> Received a High Duties Acknowledgement.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">Operational assignments</h3>
          <p className="mt-4 text-slate-300">Deployments to the Middle East supported NZDF and Coalition Forces. UNCLASS assignments included:</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li><strong className="text-white">Counter Piracy and Narcotics:</strong> <a href="https://www.nzdf.mil.nz/media-centre/news/patrolling-the-seas/" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">Operation TIKI</a></li>
            <li><a href="https://www.nzdf.mil.nz/media-centre/news/patrolling-the-seas/" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">Operation TAKAPU</a></li>
            <li><strong className="text-white">Counter Terrorism:</strong> <a href="https://www.defence.gov.au/defence-activities/operations/global-operations/okra" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">Operation OKRA</a></li>
            <li><a href="https://www.defence.govt.nz/assets/publications/NZ-Military-Contribution-to-Defeat-ISIS-in-Iraq.pdf" className="text-blue-300 underline" target="_blank" rel="noopener noreferrer">Operation MANAWA</a></li>
            <li><strong className="text-white">Hostage Recovery:</strong> Operation RAUPO</li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-amber-900/60 pt-8">
        <h3 className="text-xl font-semibold text-white">Personal perspective</h3>
        <p className="mt-3 max-w-4xl leading-8 text-slate-300">While I am proud of my service, I remain deeply grateful to those who made the ultimate sacrifice in the line of duty. Their courage and commitment will never be forgotten. May peace prevail in the Middle East. Inshallah.</p>
      </div>
    </section>
  );
}

function CoinCollectionSection() {
  return (
    <section className="mb-8" aria-labelledby="coin-collection-heading">
      <h2 id="coin-collection-heading" className="text-3xl font-bold text-white">Coin collection</h2>
      <div className="flex w-full items-center justify-center py-4">
        <div className="w-full max-w-2xl px-2 md:max-w-3xl md:px-6 lg:max-w-4xl">
          <Coinstand />
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded bg-gray-700 p-4 text-white"><p>United States Pentagon September 11 Challenge Coin. Sparked my interest in Military and Intelligence.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>New Zealand Defence Force Veteran Challenge Coin. Design matches the official veteran pin.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>Government Communications Security Bureau Challenge Coin. Presented by colleagues.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>Director Support to Military Operations Australia Challenge Coin. Presented by Unit Commander for Operation OKRA.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>Director Support to Military Operations New Zealand Challenge Coin. Presented by the Unit Commander.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>Australian Signals Directorate Challenge Coin. Presented at the end of my Tour of Duty for Operation OKRA.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>Rear Admiral John Martin Chief of Navy Challenge Coin. Presented after briefing on NZDF&apos;s counter narcotics operations.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>Naval Operations Support Unit Challenge Coin. Presented by the Unit Commander.</p></div>
        <div className="rounded bg-gray-700 p-4 text-white"><p>1st Infantry Battalion Challenge Coin. Purchased to commemorate personnel Killed in Action in Afghanistan.</p></div>
      </div>
    </section>
  );
}

function ClosingCallToAction() {
  return (
    <section className="rounded-3xl border border-blue-700/60 bg-gradient-to-r from-blue-700 to-indigo-800 p-8 text-center shadow-2xl sm:p-10">
      <h2 className="text-3xl font-bold text-white">Have a project, game idea, or collaboration in mind?</h2>
      <p className="mx-auto mt-3 max-w-2xl leading-7 text-blue-100">I&apos;m always interested in thoughtful technical challenges, creative partnerships, and opportunities to build something useful.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link to="/projects" className="rounded-lg bg-white px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50">View projects</Link>
        <Link to="/contact" className="rounded-lg border border-white/70 px-5 py-3 font-semibold text-white transition hover:bg-white/10">Contact me</Link>
        <a href="/documents/Resume.docx" download className="rounded-lg px-5 py-3 font-semibold text-white underline underline-offset-4">Download résumé</a>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl space-y-12">
        <AboutHero />
        <CredibilityStrip />
        <TechSlider />
        <ProfessionalStory />
        <StrengthsSection />
        <EducationSection />
        <MilitaryExperience />
        <CoinCollectionSection />
        <ClosingCallToAction />
      </div>
    </div>
  );
}
