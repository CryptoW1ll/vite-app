import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <article className="min-h-full bg-white px-6 py-16 text-gray-900 sm:px-8">
      <div className="mx-auto max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
      <p className="mt-4 text-base text-gray-600">Last updated: 17 November 2026</p>
      <section className="mt-8 space-y-6 text-lg leading-8">
        <p>Echelon Interactive Studio uses this website to share information about its projects and receive enquiries.</p>
        <h2 className="text-2xl font-bold tracking-tight">Information you provide</h2>
        <p>If you use the contact form, we receive the name, email address, and message you submit so we can respond to your enquiry.</p>
        <h2 className="text-2xl font-bold tracking-tight">Optional services</h2>
        <p>With your consent, this site may load Google Tag Manager and Google AdSense. If you decline optional services, these scripts are not loaded by this website.</p>
        <h2 className="text-2xl font-bold tracking-tight">Third-party services</h2>
        <p>Contact messages are sent through EmailJS. External links and embedded content may have their own privacy practices.</p>
        <h2 className="text-2xl font-bold tracking-tight">Your choices</h2>
        <p>You can decline optional services when prompted. To ask about a contact submission or request assistance, email admin@echelonstudio.co.nz.</p>
        <p>This page is general website information and should be reviewed against the studio&apos;s legal obligations before production use.</p>
      </section>
      <Link className="mt-10 inline-block rounded bg-blue-700 px-5 py-3 font-semibold text-white hover:bg-blue-800" to="/contact">Contact the studio</Link>
      </div>
    </article>
  );
}
