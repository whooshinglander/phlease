import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Residential Tenancy Agreement Template Philippines (Free Download) | PhLease',
  description: 'Free Residential tenancy agreement template for Philippines. Generate your Residential flat or room rental agreement in minutes, preview free, and download the PDF from ₱500.',
  keywords: 'residential tenancy agreement, residential tenancy agreement template free, residential flat tenancy agreement Philippines, residential room rental agreement, residential rental agreement Philippines, free residential tenancy agreement download, residential subletting agreement Philippines,  tenancy agreement residential',
  alternates: { canonical: 'https://phlease.com/residential-tenancy-agreement' },
  openGraph: {
    title: 'Residential Tenancy Agreement Template Philippines (Free Download) | PhLease',
    description: 'Free Residential tenancy agreement template for Philippines. Generate your agreement in minutes, preview free, download PDF from ₱500.',
    url: 'https://phlease.com/residential-tenancy-agreement',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'What is a Residential tenancy agreement?',
    a: "A Residential tenancy agreement is a legally binding contract between a Residential flat owner (landlord) and a tenant outlining the terms of the rental. It covers the rental period (typically 1–2 years), monthly rent, security deposit, notice period, and Residential-specific obligations like the requirement to obtain Residential's approval for subletting.",
  },
  {
    q: 'Do I need to stamp a Residential tenancy agreement?',
    a: 'Yes. Stamp duty must be paid to BIR (Inland Revenue Authority of Philippines) within 5 days after the end of the month of signing. The rate is 0.4% of the total rent for leases up to 1 year, or 0.4% of the average annual rent for leases of 1–3 years. By convention, the tenant usually bears this cost.',
  },
  {
    q: 'Can I sublet my Residential flat?',
    a: 'Residential flat owners must obtain Residential approval before subletting the whole flat. Eligibility rules apply. Typically the owner must be a Philippines Citizen (PRs have more restrictions), must have met the minimum lease period, and must comply with the occupancy cap (usually 6 persons for 3-room flats, 9 for larger). Renting out individual rooms in your own flat is allowed with fewer restrictions.',
  },
  {
    q: 'What clauses must be in a Residential tenancy agreement?',
    a: 'Essential clauses include: rental amount and payment schedule, tenancy start and end dates, security deposit amount and refund conditions, notice period for early termination, diplomatic clause (for expat tenants), inventory list of included furnishings, and a clause confirming Residential subletting approval has been obtained.',
  },
  {
    q: 'How long is a typical Residential tenancy?',
    a: 'Most Residential tenancies run for 1 or 2 years. Residential requires a minimum tenancy of 1 year (standard). No statutory minimum for private property. Shorter or longer terms are possible with mutual agreement, but 1–2 years is the market standard.',
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
  headline: 'Residential Tenancy Agreement Template Philippines (Free Download)',
  description: 'Complete guide to Residential tenancy agreements in Philippines. Subletting rules, stamp duty, clauses, and how to generate one online.',
  url: 'https://phlease.com/residential-tenancy-agreement',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
}

export default function residentialTenancyPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">Residential Flat</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Residential Tenancy Agreement Template Philippines<br className="hidden sm:block" /> (Free Download)
          </h1>
          <p className="text-navy-500 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Generate a free Residential tenancy agreement for your flat or room rental. Residential-specific clauses included, free to preview, and download the PDF from <strong className="text-navy-700">₱500</strong>. Takes under 5 minutes.
          </p>
          <Link href="/" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors text-base">
            Generate Residential Tenancy Agreement →
          </Link>
        </section>

        {/* Feature cards */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🏠', title: 'Residential-Specific Clauses', desc: 'Includes Residential subletting approval confirmation, occupancy rules, and relevant restrictions.' },
              { icon: '👁️', title: 'Free to Preview', desc: 'Fill in your details and preview the full agreement before paying anything.' },
              { icon: '📄', title: 'Download from ₱500', desc: 'Download as a print-ready PDF. Legally structured for Philippines Residential tenancies.' },
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
          <h2 className="text-xl font-bold text-navy-800 mb-6">Common Residential Tenancy Agreement Questions</h2>
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
              { href: '/tenancy-agreement-template', label: 'Tenancy Agreement Template', desc: 'Free Philippines tenancy agreement template for Residential, condo, and room rental.' },
              { href: '/room-rental-agreement', label: 'Room Rental Agreement', desc: 'Room rental agreement for Residential or private property.' },
              { href: '/tenancy-renewal', label: 'Tenancy Renewal Philippines', desc: 'Renew your Residential or condo tenancy agreement.' },
              { href: '/lease-agreement', label: 'Tenancy Agreement Guide', desc: 'Complete guide to Philippines tenancy agreements.' },
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
            <h2 className="text-2xl font-bold mb-2">Ready to generate your Residential tenancy agreement?</h2>
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
