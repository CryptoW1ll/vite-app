import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <article className="min-h-full bg-white px-6 py-16 text-gray-900 sm:px-8">
      <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Terms of Service</h1>
      <p className="mt-4 text-base text-gray-600">Last updated: 17 November 2026</p>
      <section className="mt-8 space-y-6 text-lg leading-8">
        <p>By using this website, you agree to use it lawfully and respectfully.</p>
        <h2 className="text-2xl font-bold tracking-tight">Content</h2>
        <p>Project descriptions, images, videos, and other materials are provided for information and demonstration. Ownership remains with Echelon Studio Limited or the credited rights holder.</p>
        <h2 className="text-2xl font-bold tracking-tight">External services and links</h2>
        <p>This site may link to third-party services. Echelon Studio Limited is not responsible for the availability or content of external sites.</p>
        <h2 className="text-2xl font-bold tracking-tight">Availability</h2>
        <p>We may change, suspend, or remove website content without notice. The site is provided on an as-available basis.</p>
        <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
        <p>Questions about these terms can be sent to admin@echelonstudio.co.nz.</p>
        <p>This page is general website information and should be reviewed against the studio&apos;s legal obligations before production use.</p>
      </section>
      <Link className="mt-10 inline-block rounded bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800" to="/contact">Contact the studio</Link>
      </div>
    </article>
  );
}
