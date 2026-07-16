import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Free Room Rental Agreement Generator Philippines | PhLease',
  description: 'Generate a free room rental agreement for Philippines residential flats and private property in minutes. Legally structured, free to preview, download from ₱500.',
  keywords: 'room rental agreement Philippines, room rental agreement generator Philippines free, residential room rental agreement, Philippines room rental agreement template, free room rental agreement Philippines, room tenancy agreement Philippines',
  alternates: { canonical: 'https://phlease.com/room-rental-agreement' },
  openGraph: {
    title: 'Free Room Rental Agreement Generator Philippines | PhLease',
    description: 'Generate a Philippines room rental agreement for residential flats and private property. Free to preview, download from ₱500.',
    url: 'https://phlease.com/room-rental-agreement',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'website',
  },
}

const FAQS = [
  {
    q: 'What is a room rental agreement in Philippines?',
    a: 'A room rental agreement (also called a room tenancy or lodger agreement) is a contract between a property occupant and someone renting a single room within the unit. Unlike a whole-unit tenancy, the tenant shares common areas with the landlord or other occupants. The agreement covers rent, utilities, house rules, notice period, and deposit.',
  },
  {
    q: 'Is a room rental agreement legally binding in Philippines?',
    a: 'Yes — a signed room rental agreement with consideration (payment of rent) is legally binding. Stamp duty applies: 0.4% of total rent for leases up to 1 year, payable to BIR within 5 days after the end of the month of signing. A written agreement is strongly recommended to avoid disputes over deposit, notice periods, and house rules.',
  },
  {
    q: 'Can residential flat owners rent out rooms?',
    a: 'Yes, Philippines Citizens and Permanent Residents who own residential flats may rent out rooms without requiring residential approval for subletting, subject to the flat\'s occupancy cap (typically 6 persons for 3-room flats, 9 for larger flats). The owner must continue to live in the flat. For whole-flat subletting, residential approval and meeting the minimum lease period are required.',
  },
  {
    q: 'What should a Philippines room rental agreement include?',
    a: 'Key items: full address and room description, monthly rent and payment date, utility bill arrangement (included or split), security deposit amount and refund terms, notice period (typically 1 month), house rules (guests, noise, shared spaces), and the landlord\'s right to access the room with notice.',
  },
  {
    q: 'How to terminate a room rental agreement in Philippines?',
    a: 'Give written notice per the agreed notice period (usually 1 month). If the agreement has a fixed term, early termination without a break clause may result in forfeiture of deposit or compensation to the landlord. Room renters classified as licensees (rather than tenants) have less legal protection than whole-unit tenants, so a clear written agreement is especially important.',
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

export default function RoomRentalPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">Room Rental</div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Free Room Rental Agreement<br className="hidden sm:block" /> Generator Philippines
          </h1>
          <p className="text-navy-500 text-base sm:text-lg max-w-xl mx-auto mb-8">
            Generate a Philippines room rental agreement for residential flats and private property — free to preview, download from <strong className="text-navy-700">₱500</strong>.
          </p>
          <Link href="/" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors text-base">
            Generate Room Rental Agreement →
          </Link>
        </section>

        {/* Feature cards */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: '🛏️', title: 'Residential Room Rules Included', desc: 'Occupancy cap guidance and Residential-specific room rental terms built in.' },
              { icon: '👁️', title: 'Free Preview', desc: 'Fill in your details and preview the full agreement before paying.' },
              { icon: '📄', title: 'PDF Download from ₱500', desc: 'Download a print-ready PDF room rental agreement for Philippines.' },
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
          <h2 className="text-xl font-bold text-navy-800 mb-6">Philippines Room Rental Agreement — FAQs</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-semibold text-navy-800 text-sm mb-2">{faq.q}</h3>
                <p className="text-sm text-navy-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="max-w-3xl mx-auto px-4 pb-16 text-center">
          <div className="bg-brand-600 rounded-2xl px-8 py-10 text-white">
            <h2 className="text-2xl font-bold mb-2">Generate your room rental agreement now</h2>
            <p className="text-blue-100 mb-6 text-sm">No account required. Under 5 minutes.</p>
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
