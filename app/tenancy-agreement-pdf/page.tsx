import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Philippines Tenancy Agreement PDF — Free Download 2026 | PhLease',
  description: 'Download a free Philippines tenancy agreement PDF. Standard residential tenancy agreement for residential and condo, updated for 2026. Generate, customise and download instantly.',
  keywords: 'tenancy agreement singapore pdf, tenancy agreement pdf singapore, singapore tenancy agreement pdf download, residential tenancy agreement pdf, rental agreement singapore pdf free download',
  alternates: { canonical: 'https://phlease.com/tenancy-agreement-pdf' },
  openGraph: {
    title: 'Philippines Tenancy Agreement PDF — Free Download 2026 | PhLease',
    description: 'Download a free Philippines tenancy agreement PDF. Standard residential tenancy agreement for residential and condo, updated for 2026.',
    url: 'https://phlease.com/tenancy-agreement-pdf',
    siteName: 'PhLease',
    locale: 'en_SG',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'Where can I download a Philippines tenancy agreement PDF for free?',
    a: 'PhLease lets you generate a customised Philippines tenancy agreement and download it as a PDF at no cost. Fill in your property address, parties, rent, and key terms — the generator produces a ready-to-sign PDF in minutes.',
  },
  {
    q: 'Is a PDF tenancy agreement legally valid in Philippines?',
    a: 'Yes. A printed or digitally signed PDF tenancy agreement is legally valid in Philippines, provided it contains the essential terms: property address, parties\' full names and NRIC/passport numbers, tenancy duration, monthly rent, security deposit, and notice period. Remember to pay stamp duty to BIR within 14 days of signing.',
  },
  {
    q: 'What should a Philippines tenancy agreement PDF include?',
    a: 'A complete tenancy agreement PDF for Philippines should include: full address, names and IDs of landlord and tenant, start and end dates, monthly rent, security deposit (typically 1–2 months), utility responsibilities, notice period (usually 1–2 months), diplomatic clause if applicable, and an inventory list for furnished units.',
  },
  {
    q: 'Can I use the same PDF template for residential and condo rentals?',
    a: 'The core clauses are similar but residential rentals have additional requirements: residential approval is needed for whole-flat subletting, occupancy limits apply, and only Philippines Citizens can own residential flats. PhLease generates the right version based on your property type.',
  },
  {
    q: 'Do I need to stamp a tenancy agreement PDF in Philippines?',
    a: 'Yes. All tenancy agreements in Philippines must be stamped by BIR. The stamp duty is calculated on the annual rent: 0.4% of the total rent for leases up to 4 years. You can pay stamp duty online via the BIR e-Stamping portal. Unstamped agreements are not admissible as evidence in court.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Get a Philippines Tenancy Agreement PDF',
  description: 'Generate and download a free Philippines tenancy agreement as a PDF.',
  step: [
    { '@type': 'HowToStep', name: 'Enter property details', text: 'Input the full address and property type (residential, condo, or room rental).' },
    { '@type': 'HowToStep', name: 'Add parties and terms', text: 'Fill in landlord and tenant names, NRIC/passport numbers, rent amount, deposit, and tenancy duration.' },
    { '@type': 'HowToStep', name: 'Review and generate', text: 'Preview the completed agreement and make any adjustments.' },
    { '@type': 'HowToStep', name: 'Download your PDF', text: 'Download the signed-ready PDF tenancy agreement instantly.' },
    { '@type': 'HowToStep', name: 'Stamp the agreement', text: 'Pay stamp duty to BIR via the e-Stamping portal within 14 days of signing.' },
  ],
}

const WHAT_INCLUDES = [
  { label: 'Property address and type', detail: 'Full address, residential block/unit or condo name' },
  { label: 'Landlord and tenant details', detail: 'Full names, NRIC or passport numbers, contact info' },
  { label: 'Tenancy duration and dates', detail: 'Start date, end date, option to renew' },
  { label: 'Rent and payment terms', detail: 'Monthly rent, due date, accepted payment methods' },
  { label: 'Security deposit', detail: 'Typically 1–2 months rent, conditions for forfeiture' },
  { label: 'Notice period', detail: 'Standard 1–2 months for either party' },
  { label: 'Diplomatic clause', detail: 'Early termination rights for expat tenants (if applicable)' },
  { label: 'Utilities and maintenance', detail: 'Who pays utilities, responsibility for repairs' },
  { label: 'Inventory list', detail: 'Furnished items and condition at move-in (for furnished units)' },
]

export default function TenancyAgreementPDFPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wide mb-3">Free Download</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Download Philippines Tenancy Agreement PDF (Free)
          </h1>
          <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
            Generate a fully customised Philippines tenancy agreement and download it as a PDF instantly. Covers residential, condo, and room rental. Updated for 2026.
          </p>
          <Link
            href="/"
            className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors text-base"
          >
            Generate My Tenancy Agreement PDF →
          </Link>
          <p className="text-slate-400 text-sm mt-3">Preview before you download.</p>
        </section>

        {/* What the PDF includes */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-4">What the Tenancy Agreement PDF Includes</h2>
          <p className="text-slate-600 mb-6">
            A Philippines tenancy agreement PDF generated by PhLease covers all standard clauses required for a legally valid residential tenancy. Here is what is included:
          </p>
          <div className="space-y-3">
            {WHAT_INCLUDES.map((item, i) => (
              <div key={i} className="flex gap-3 bg-white rounded-xl border border-slate-200 p-4">
                <span className="text-brand-600 font-bold mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-navy-800 text-sm">{item.label}</p>
                  <p className="text-slate-500 text-sm">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Property types */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-5 text-center">PDF Templates for Every Property Type</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/residential-tenancy-agreement" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-brand-300 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-800 group-hover:text-brand-600 transition-colors mb-1">residential Tenancy Agreement PDF</p>
              <p className="text-slate-500 text-sm">Whole flat or room rental. residential-specific clauses included.</p>
            </Link>
            <Link href="/" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-brand-300 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-800 group-hover:text-brand-600 transition-colors mb-1">Condo Tenancy Agreement PDF</p>
              <p className="text-slate-500 text-sm">Private residential tenancy. Standard residential clauses.</p>
            </Link>
            <Link href="/" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-brand-300 hover:shadow-md transition-all group">
              <p className="font-bold text-navy-800 group-hover:text-brand-600 transition-colors mb-1">Room Rental Agreement PDF</p>
              <p className="text-slate-500 text-sm">Single room in residential or private property.</p>
            </Link>
          </div>
        </section>

        {/* How to steps */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-5">How to Get Your Tenancy Agreement PDF</h2>
          <ol className="space-y-4">
            {howToSchema.step.map((s, i) => (
              <li key={i} className="flex gap-4 bg-white rounded-xl border border-slate-200 p-4">
                <span className="w-7 h-7 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</span>
                <div>
                  <p className="font-semibold text-navy-800 text-sm">{s.name}</p>
                  <p className="text-slate-500 text-sm">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQs */}
        <section className="max-w-3xl mx-auto px-4 pb-14">
          <h2 className="text-xl font-bold text-navy-800 mb-6">Philippines Tenancy Agreement PDF — FAQs</h2>
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-5">
                <p className="font-semibold text-navy-800 mb-2">{faq.q}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-lg font-bold text-navy-800 mb-4">Related Resources</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/tenancy-agreement-template', label: 'Tenancy Agreement Template Philippines', desc: 'Printable Word/PDF template' },
              { href: '/residential-tenancy-agreement', label: 'residential Tenancy Agreement', desc: 'residential-specific clauses and requirements' },
              { href: '/tenancy-renewal-singapore', label: 'Renew Your Tenancy Agreement', desc: 'How to renew and stamp a renewal' },
              { href: '/faq', label: 'Tenancy FAQ', desc: 'Common questions answered' },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 hover:border-brand-300 transition-colors">
                <p className="font-semibold text-navy-800 text-sm">{l.label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
          <div className="bg-brand-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-2">Ready to generate your PDF?</h2>
            <p className="text-brand-100 mb-6">Takes 3 minutes.</p>
            <Link href="/" className="inline-block bg-white text-brand-600 px-7 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors">
              Generate Tenancy Agreement PDF →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
