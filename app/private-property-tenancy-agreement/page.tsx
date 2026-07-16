import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Residential Lease Agreement Template Philippines (Free Download) | PhLease',
  description: 'Free residential lease agreement template for Philippines. Generate your condo, apartment, or house & lot lease in minutes, preview free, and download the PDF from ₱500.',
  keywords: 'residential lease agreement philippines, lease agreement template free philippines, condo lease agreement philippines, apartment rental agreement philippines, house and lot lease philippines, free lease agreement download philippines, contract of lease philippines, tenancy agreement philippines',
  alternates: { canonical: 'https://phlease.com/private-property-tenancy-agreement' },
  openGraph: {
    title: 'Residential Lease Agreement Template Philippines (Free Download) | PhLease',
    description: 'Free residential lease agreement template for Philippines. Generate your agreement in minutes, preview free, download PDF from ₱500.',
    url: 'https://phlease.com/private-property-tenancy-agreement',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'What is a residential lease agreement?',
    a: "A residential lease agreement (also called a Contract of Lease) is a legally binding contract between a property owner (landlord) and a tenant outlining the terms of the rental. It covers the rental period (typically 1–2 years), monthly rent, security deposit, notice period, and other terms governing the landlord-tenant relationship under the Civil Code of the Philippines.",
  },
  {
    q: 'Do I need to stamp a lease agreement?',
    a: 'Yes. Documentary Stamp Tax (DST) must be paid to BIR within 5 days after the end of the month of signing. The rate is PHP 6.00 for the first PHP 2,000 of annual rent plus PHP 2.00 per PHP 1,000 thereafter. By convention, the tenant usually bears this cost.',
  },
  {
    q: 'Can I sublet my condo unit?',
    a: 'Condominium unit owners should check their condo corporation\'s master deed and by-laws before subletting. Some condos restrict subletting, require board approval, or limit the lease term. Unlike Singapore, there is no central housing authority in the Philippines that regulates subletting — the restrictions come from the condo corporation or homeowners\' association.',
  },
  {
    q: 'What clauses must be in a lease agreement?',
    a: 'Essential clauses include: rental amount and payment schedule, tenancy start and end dates, security deposit amount and refund conditions, notice period for early termination, diplomatic clause (for expat tenants), inventory list of included furnishings, and maintenance responsibilities.',
  },
  {
    q: 'How long is a typical lease in the Philippines?',
    a: 'Most residential leases run for 1 year. Two-year leases are also common, especially for condos and expat-targeted properties. Shorter or longer terms are possible with mutual agreement, but 1–2 years is the market standard.',
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
  headline: 'Residential Lease Agreement Template Philippines (Free Download)',
  description: 'Complete guide to residential lease agreements in Philippines. Stamp duty, clauses, and how to generate one online.',
  url: 'https://phlease.com/private-property-tenancy-agreement',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
}

export default function LeaseAgreementPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">Residential Lease</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Residential Lease Agreement Template Philippines<br className="hidden sm:block" /> (Free Download)
          </h1>
          <p className="text-navy-500 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Generate a free residential lease agreement for your condo, apartment, or house &amp; lot. Covers all standard clauses, free to preview, and download the PDF from <strong className="text-navy-700">₱500</strong>. Takes under 5 minutes.
          </p>
          <Link href="/" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors text-base">
            Generate Lease Agreement →
          </Link>
        </section>

        {/* Feature cards */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🏠', title: 'All Property Types', desc: 'Works for condo units, apartments, townhouses, house & lot, and room rentals.' },
              { icon: '👁️', title: 'Free to Preview', desc: 'Fill in your details and preview the full agreement before paying anything.' },
              { icon: '📄', title: 'Download from ₱500', desc: 'Download as a print-ready PDF. Legally structured for Philippines residential leases.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-navy-800 mb-1">{f.title}</h3>
                <p className="text-sm text-navy-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 pb-14">
          <h2 className="text-xl font-bold text-navy-800 mb-6">Common Lease Agreement Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-semibold text-navy-800 text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Resources */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <h2 className="text-lg font-bold text-navy-800 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/tenancy-agreement-template', label: 'Tenancy Agreement Template', desc: 'Free Philippines tenancy agreement template for condo, apartment, and room rental.' },
              { href: '/room-rental-agreement', label: 'Room Rental Agreement', desc: 'Room rental agreement for condo or apartment.' },
              { href: '/tenancy-renewal', label: 'Tenancy Renewal Philippines', desc: 'Renew your lease agreement in the Philippines.' },
              { href: '/lease-agreement', label: 'Lease Agreement Guide', desc: 'Complete guide to Philippines lease agreements.' },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 hover:border-brand-300 transition-colors">
                <p className="font-semibold text-navy-800 text-sm">{l.label}</p>
                <p className="text-xs text-navy-500 mt-0.5">{l.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
          <div className="bg-brand-600 rounded-2xl px-8 py-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Ready to generate your lease agreement?</h2>
            <p className="text-blue-100 mb-6 text-sm">No account required. Takes under 5 minutes.</p>
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
