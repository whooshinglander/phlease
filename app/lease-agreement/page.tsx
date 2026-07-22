import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Tenancy Agreement Philippines — Free Preview, PDF ₱500',
  description: 'Generate a Philippines tenancy agreement in 5 minutes — Condo, apartment, house & lot or room rental. BIR-compliant, free to preview, clean PDF from ₱500. No sign-up.',
  keywords: 'tenancy agreement philippines pdf, tenancy agreement philippines, philippines tenancy agreement pdf, rental agreement philippines pdf, philippines rental agreement,  tenancy agreement, residential rental agreement, lease agreement philippines, tenancy contract philippines',
  alternates: { canonical: 'https://phlease.com/lease-agreement' },
  openGraph: {
    title: 'Tenancy Agreement Philippines — Free Preview, PDF ₱500',
    description: 'Generate a Philippines tenancy agreement PDF online. Condo, apartment, house & lot, room rental — BIR-compliant. Free to preview, download from ₱500.',
    url: 'https://phlease.com/lease-agreement',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'What must a tenancy agreement in Philippines include?',
    a: "A Philippines tenancy agreement must include: full names and government-issued ID/passport numbers of landlord and tenant, full address of the property, tenancy start and end dates, monthly rent amount, security deposit (typically 1–2 months), notice period for termination, and each party's responsibilities for repairs and utilities. A diplomatic clause is strongly recommended for expatriate tenants.",
  },
  {
    q: 'Is a tenancy agreement legally binding in Philippines?',
    a: 'Yes. A signed tenancy agreement is legally binding in Philippines under contract law. The agreement should be stamped with BIR within 5 days after the end of the month of signing to be admissible as evidence in court. Unstamped agreements can still be enforced but attract late stamping penalties.',
  },
  {
    q: 'How much is stamp duty for a tenancy agreement in Philippines?',
    a: 'Documentary Stamp Tax (DST) is PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. Example: a 1-year lease at PHP 25,000/month (annual rent = PHP 300,000) costs PHP 6.00 + PHP 2.00 × 298 = PHP 602. Payable to BIR within 5 days after the end of the month of signing — typically borne by the tenant.',
  },
  {
    q: 'What is the standard security deposit for a Philippines tenancy?',
    a: "Under the Rent Control Act (RA 9653), the maximum security deposit is 2 months' rent, plus 1 month advance rent for units with monthly rent of PHP 10,000 and below. For units above PHP 10,000/month, the deposit is negotiable but typically 1-2 months. Refunded within 14–21 days after the tenancy ends, minus deductions for unpaid rent or damage beyond fair wear and tear.",
  },
  {
    q: 'What is a diplomatic clause in a Philippines tenancy agreement?',
    a: "A diplomatic clause allows a tenant to terminate early if required to leave Philippines permanently due to job transfer, repatriation, or redundancy. Typically activated after the first 12 months, with 2 months' written notice. Standard for expatriate tenants in Philippines.",
  },
  {
    q: 'Can I use a free tenancy agreement generator in Philippines?',
    a: 'Yes. There is no legal requirement to use a lawyer or specific government template for Residential tenancies. The  () provides a reference template, but using a generator like PhLease ensures all clauses are correctly filled in for your property and parties.',
  },
  {
    q: 'What is the difference between a tenancy agreement and a lease in Philippines?',
    a: '"Tenancy agreement" and "lease" are used interchangeably in the Philippines. Technically a lease (arrendamiento) is for longer terms and conveys a property interest under the Civil Code, while a tenancy is shorter-term. For residential rentals of 1–2 years, either term is standard.',
  },
  {
    q: 'How do I terminate a tenancy agreement in Philippines?',
    a: "Give written notice per the notice period in the agreement (typically 1–2 months). Early termination without a diplomatic clause may result in forfeiture of deposit or liability for remaining rent. Document the property's condition at handover and agree on any deductions in writing.",
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

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Tenancy Agreement Philippines — Complete Guide 2026',
  description: 'Everything landlords and tenants in Philippines need to know about tenancy agreements — stamp duty, deposits, Residential rules, diplomatic clause, and how to generate one online.',
  url: 'https://phlease.com/lease-agreement',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
}

const STEPS = [
  { step: '1', title: 'Select property type', desc: 'Condo, apartment, house & lot, or room rental — each has specific clauses.' },
  { step: '2', title: 'Enter property details', desc: 'Address, unit number, postal code, and handover condition.' },
  { step: '3', title: 'Fill in both parties', desc: 'Landlord and tenant names, government-issued ID/passport numbers, contact details.' },
  { step: '4', title: 'Set rental terms', desc: 'Start/end dates, monthly rent, security deposit, and payment details.' },
  { step: '5', title: 'Add custom clauses', desc: 'Diplomatic clause, aircon servicing, pet policy, minor repair threshold, and more.' },
  { step: '6', title: 'Preview & download', desc: 'Free to preview the full agreement. Download clean PDF from ₱500.' },
]

export default function TenancyAgreementPhilippinesPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="flex-1">

        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">Philippines Tenancy Agreement</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Tenancy Agreement Philippines PDF<br className="hidden sm:block" /> — Free Generator
          </h1>
          <p className="text-navy-500 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Create a legally structured tenancy agreement for any Philippines property — condos, apartments, houses, or room rentals. Free to preview. Download a clean, print-ready PDF from ₱500. No lawyer required.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors text-base">
              Generate Agreement →
            </Link>
            <Link href="/tenancy-agreement-template" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors text-base">
              View Template Info
            </Link>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { icon: '🇸🇬', label: 'Philippines-specific' },
              { icon: '👁️', label: 'Preview included' },
              { icon: '⚡', label: 'Under 5 minutes' },
              { icon: '📄', label: 'PDF from ₱500' },
            ].map((b, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 text-center shadow-sm">
                <div className="text-2xl mb-1">{b.icon}</div>
                <p className="text-xs font-semibold text-navy-700">{b.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-8">
          <div className="bg-brand-50 border border-brand-200 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-brand-800 text-sm mb-1">Get your tenancy agreement as a clean PDF</p>
              <p className="text-brand-700 text-xs leading-relaxed">
                Fill in the form, preview the full tenancy agreement Philippines PDF, then download a print-ready PDF from ₱500. No sign-up required. Works on mobile and desktop.
              </p>
            </div>
            <Link href="/" className="flex-shrink-0 inline-block bg-brand-600 text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-brand-700 transition-colors">
              Generate PDF →
            </Link>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-6 text-center">How to Create a Philippines Tenancy Agreement</h2>
          <div className="space-y-3">
            {STEPS.map((s, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-600 text-white text-sm font-bold flex items-center justify-center shrink-0">{s.step}</div>
                <div>
                  <p className="font-semibold text-navy-800 text-sm">{s.title}</p>
                  <p className="text-sm text-navy-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-6">Philippines Tenancy Agreement — Key Facts</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100">
            {[
              { label: 'Documentary Stamp Tax', value: 'PHP 6.00 per ₱2,000 + PHP 2.00 per ₱1,000 of annual rent. Pay to BIR within 5 days' },
              { label: 'Security deposit', value: "Max 2 months deposit + 1 month advance (Rent Control Act). Negotiable for higher rent" },
              { label: 'Standard notice', value: '30 days written notice (Civil Code Article 1687)' },
              { label: 'Diplomatic clause', value: 'Standard for expat tenants — allows early exit on repatriation' },
              { label: 'Condo subletting', value: 'Check condo corporation master deed/by-laws' },
              { label: 'Minimum tenancy', value: '1 year (standard). No statutory minimum' },
              { label: 'Lawyer required?', value: 'No — for standard residential leases' },
            ].map((row, i) => (
              <div key={i} className="flex gap-4 px-5 py-3 text-sm">
                <span className="font-semibold text-navy-700 w-48 shrink-0">{row.label}</span>
                <span className="text-navy-500">{row.value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-5 text-center">What Type of Property Are You Renting?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/residential-tenancy-agreement" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-brand-300 hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">🏠</div>
              <h3 className="font-semibold text-navy-800 mb-1 group-hover:text-brand-600">Condo / Apartment</h3>
              <p className="text-sm text-navy-500">Whole unit or room — governed by the Civil Code and condo corporation rules.</p>
              <p className="text-xs text-brand-600 font-medium mt-3">Lease Agreement Guide →</p>
            </Link>
            <Link href="/" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-brand-300 hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">🏢</div>
              <h3 className="font-semibold text-navy-800 mb-1 group-hover:text-brand-600">Private Property</h3>
              <p className="text-sm text-navy-500">Condo, apartment, or landed — full residential lease agreement.</p>
              <p className="text-xs text-brand-600 font-medium mt-3">Generate Now →</p>
            </Link>
            <Link href="/room-rental-agreement" className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:border-brand-300 hover:shadow-md transition-all group">
              <div className="text-3xl mb-3">🛏️</div>
              <h3 className="font-semibold text-navy-800 mb-1 group-hover:text-brand-600">Room Rental</h3>
              <p className="text-sm text-navy-500">Common room, master, or en-suite — includes house rules and shared facilities.</p>
              <p className="text-xs text-brand-600 font-medium mt-3">Room Rental Guide →</p>
            </Link>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-14">
          <h2 className="text-xl font-bold text-navy-800 mb-6">Tenancy Agreement Philippines — FAQs</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-semibold text-navy-800 text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-lg font-bold text-navy-800 mb-4">More Philippines Tenancy Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/residential-tenancy-agreement', label: 'Residential Tenancy Agreement Guide', desc: 'Residential-specific clauses, approval requirements, and occupancy rules.' },
              { href: '/room-rental-agreement', label: 'Room Rental Agreement Guide', desc: 'Room rentals, shared facilities, and Residential room rules.' },
              { href: '/tenancy-agreement-template', label: 'Tenancy Agreement Template', desc: 'Why a generator beats a blank template.' },
              { href: '/tenancy-renewal', label: 'Tenancy Renewal Philippines', desc: 'How to renew a tenancy agreement in Philippines.' },
              { href: '/faq', label: 'Tenancy Agreement FAQ', desc: 'Stamp duty, deposits, diplomatic clause, and more.' },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 hover:border-brand-300 transition-colors">
                <p className="font-semibold text-navy-800 text-sm">{l.label}</p>
                <p className="text-xs text-navy-500 mt-0.5">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Rental Agreement Philippines section — targets "rental agreement singapore" keyword */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-navy-900 mb-4">Rental Agreement Philippines</h2>
          <p className="text-navy-600 mb-4 leading-relaxed">
            A <strong>rental agreement in Philippines</strong> is the same as a tenancy agreement — the terms are used interchangeably. Whether you call it a rental agreement, lease agreement, or tenancy agreement, it is the legally binding contract between a landlord and tenant setting out the terms of occupation of a property.
          </p>
          <p className="text-navy-600 mb-4 leading-relaxed">
            In Philippines, residential lease agreements are governed by the Civil Code of the Philippines Articles 1642-1761 and the Rent Control Act RA 9653 (for units with monthly rent ≤₱10,000). Key requirements include a minimum tenancy period of 1 year (standard market practice), proper Documentary Stamp Tax payment to BIR within 5 days after the end of the month of signing, and compliance with any condo corporation rules on subletting.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { title: 'Condo Lease Agreement', desc: 'Covers condo units and apartments. May need condo corporation approval for subletting. Typically includes air-con servicing, association dues, and maintenance clauses.' },
              { title: 'House & Lot Lease Agreement', desc: 'Covers detached, semi-detached, and townhouse properties. Usually longer tenancies with standard deposit terms.' },
              { title: 'Room Rental Agreement', desc: 'For single room rentals within a shared unit. Simpler terms, no government approval needed.' },
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 rounded-xl border border-slate-200 p-4">
                <p className="font-semibold text-navy-800 text-sm mb-1">{item.title}</p>
                <p className="text-xs text-navy-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
          <div className="bg-brand-600 rounded-2xl px-8 py-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Generate your tenancy agreement now</h2>
            <p className="text-blue-100 mb-6 text-sm">No account. No lawyer needed. Under 5 minutes.</p>
            <Link href="/" className="inline-block bg-white text-brand-600 px-7 py-3 rounded-xl font-semibold hover:bg-brand-50 transition-colors">
              Start Now →
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
