import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Tenancy Renewal Guide Philippines — What You Actually Need to Do | PhLease',
  description: 'How tenancy renewal works in the Philippines: notice period, DST on renewal, deposit carry-over, rent increase limits. Plain English, no fluff.',
  keywords: 'tenancy renewal guide philippines, rental renewal philippines, lease renewal philippines, renew tenancy philippines',
  alternates: { canonical: 'https://phlease.com/tenancy-renewal-guide' },
  openGraph: {
    title: 'Tenancy Renewal Guide Philippines — What You Actually Need to Do',
    description: 'Tenancy renewal: notice period, DST, deposit carry-over, rent increase limits. Plain English.',
    url: 'https://phlease.com/tenancy-renewal-guide',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Do I need any government approval to renew a tenancy?',
    a: "No. The Philippines has no housing authority that requires approval for lease renewals. If you're renting out a condominium unit, check your condo corporation's rules — some condos require tenant registration or renewal notice. For apartments under the Rent Control Act (RA 9653, monthly rent ≤₱10,000), ensure compliance with the lease term limits and deposit rules, but no separate approval is needed.",
  },
  {
    q: 'Can I just sign a one-page renewal addendum, or do I need a full new agreement?',
    a: "A short addendum can work if you're only changing the dates and rent and nothing else. But if you're changing anything else (security deposit amount, who pays utilities, adding occupants, dropping a diplomatic clause), it's safer to issue a full new tenancy. A full new agreement also makes BIR stamping cleaner because you stamp one document instead of the original plus the addendum together.",
  },
  {
    q: 'My tenant has been good for two years. Can I just continue without paperwork?',
    a: "You can, but it creates a month-to-month arrangement by default — terminable on short notice. The original agreement's protections (notice period, deposit handling, fixed rent) lapse once the term ends. If anything goes wrong (rent stops, a complaint, you want to sell the unit), you have weaker legal footing. A signed renewal is cheap insurance.",
  },
  {
    q: 'Stamp duty on the renewal — same as new?',
    a: "Same rate. Documentary Stamp Tax (DST) is PHP 6.00 for the first PHP 2,000 of annual rent plus PHP 2.00 per PHP 1,000 thereafter. Pay to BIR within 5 days after the end of the month of signing, via BIR e-filing. The tenant typically pays unless your renewal agreement says otherwise.",
  },
  {
    q: "I'm renewing a room rental, not the whole unit. Any special rules?",
    a: "No special rules for room rentals in the Philippines. You don't need any government approval to rent out rooms while you live there as the owner-occupier. Check your condo corporation or HOA bylaws for any restrictions. Keep the signed agreement on file in case of disputes.",
  },
  {
    q: 'What if my tenant wants a 2-year renewal but I only want 1 year?',
    a: "Negotiate. If you genuinely don't want a 2-year commitment (planning to sell, moving back in), say so and offer 1 year with an option to extend. If you're hedging on rent direction, you can write in a rent-review clause for year 2. The renewal is signed by both parties — you're not obligated to accept whatever the tenant proposes.",
  },
  {
    q: 'Can the rent stay the same on renewal?',
    a: "Yes. If your tenant has been good and the unit hasn't appreciated much, holding rent flat (or even reducing it slightly) is a reasonable retention move. Cost of finding a new tenant, vacancy weeks, and agent fees often exceeds the rent increase you'd get from a market-rate replacement. Run the numbers before pushing for a hike. Note: for units covered by the Rent Control Act (RA 9653, rent ≤₱10,000/month), annual rent increases are capped at 7%.",
  },
  {
    q: 'Foreigner tenant: any extra steps for renewal?',
    a: "If your tenant is a foreigner, check that their visa or 9G work permit is still valid through the renewal end date. If their visa expires mid-term, the tenancy needs a clause covering that scenario (early termination on visa expiry, prorated deposit return). For foreigners with long-term visas, the renewal is otherwise the same as for a Filipino tenant.",
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
  headline: 'Tenancy Renewal Guide Philippines — What You Actually Need to Do',
  description: 'Tenancy renewal walkthrough: notice period, DST, deposit carry-over, rent increase limits, foreign tenants.',
  url: 'https://phlease.com/tenancy-renewal-guide',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
  datePublished: '2026-05-04',
  dateModified: '2026-05-04',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phlease.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tenancy Renewal Philippines', item: 'https://phlease.com/tenancy-renewal' },
    { '@type': 'ListItem', position: 3, name: 'Tenancy Renewal Guide' },
  ],
}

export default function TenancyRenewalGuidePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="flex-1">

        <section className="max-w-3xl mx-auto px-4 py-14">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Tenancy Renewal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Tenancy Renewal Guide — What You Actually Need to Do
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            Most tenancies in the Philippines are 1 year, and most landlords renew with the same tenant if things have been smooth. The renewal itself is paperwork, not a re-negotiation, but a few things trip people up. This page walks through what you actually have to do.
          </p>
          <p className="text-navy-500 text-sm">
            For room rental renewals, see the <Link href="/room-rental-renewal" className="text-brand-700 hover:underline">room rental renewal guide</Link>.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Three things that have to happen</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">1. Give notice of intention to renew</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Most Philippines tenancy agreements require the tenant to give written notice 30 days before the lease expiry if they intend to renew. Check your existing agreement for the exact notice period. If your agreement includes an option to renew clause, the notice period and conditions stated there take precedence.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">2. Sign a renewal agreement</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Either a short renewal addendum (if only dates and rent change) or a fresh new tenancy (if anything else changes). Most landlords go with a fresh new tenancy because it makes the document trail simpler — one stamped agreement that covers the whole period, no need to keep referring back to the original. Our renewal flow generates a fresh agreement pre-filled from your previous one.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">3. Stamp it with BIR within 5 days after the end of the month of signing</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Documentary Stamp Tax (DST) on the renewal is PHP 6.00 for the first PHP 2,000 of annual rent plus PHP 2.00 per PHP 1,000 thereafter. Same rate as a new tenancy — there is no discount for renewals. File via <a href="https://www.bir.gov.ph" target="_blank" rel="noopener" className="text-brand-700 hover:underline">BIR e-filing</a>. See the <Link href="/stamp-duty-tenancy-renewal" className="text-brand-700 hover:underline">stamp duty page</Link> for worked examples.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Things people forget</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Foreign tenant visa expiry.</strong> If your tenant is a foreigner, check their visa or 9G work permit extends through the renewal end date. If not, write a clause about what happens if their visa isn't renewed.</li>
              <li><strong className="text-navy-800">Diplomatic clause stays or goes?</strong> If you originally had one, decide whether it carries forward. After 12+ months in the same job most expats no longer need it, so this is a fair negotiating point.</li>
              <li><strong className="text-navy-800">Security deposit on renewal.</strong> Most tenancies hold the existing deposit through the renewal. If rent went up, you can ask for a top-up to match the new monthly amount. Under the Rent Control Act (RA 9653), the maximum deposit is 2 months' rent.</li>
              <li><strong className="text-navy-800">Furnishing and condition.</strong> Walk through the unit before signing the renewal. Note any wear-and-tear in the inventory list — saves arguments at the end of the renewal term.</li>
              <li><strong className="text-navy-800">Letter of intent isn't the agreement.</strong> A signed LOI commits both parties in principle, but the renewal isn't legally binding until both sign the actual tenancy and it's stamped with BIR.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">When to renew vs find a new tenant</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            From a landlord's view, the math usually favours renewal even if the rent stays flat. Replacing a tenant means:
          </p>
          <ul className="space-y-2 text-navy-600 text-sm mb-4 pl-5 list-disc">
            <li>2–4 weeks of vacancy on average while you find someone</li>
            <li>Half-month or full-month commission to a real estate agent (if you use one)</li>
            <li>Risk of a worse tenant — late payers, noise complaints, damage</li>
            <li>Re-marketing effort (photos, listing, viewings)</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed">
            For a ₱30,000/month unit, 3 weeks of vacancy plus half-month commission is roughly ₱37,500 in lost rent and fees. That's the equivalent of over 10% rent reduction over a 1-year renewal — usually a worse outcome than just keeping a known-good tenant at the same rent or with a small increase.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Generate your renewal agreement</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              Renewal-ready form pre-filled for your tenancy. Updated dates, new rent, ready for BIR stamping. Free preview, ₱500 to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/renew" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Start renewal — ₱500
              </Link>
              <Link href="/stamp-duty-tenancy-renewal" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Stamp duty calculator
              </Link>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-14">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 group" open={i === 0}>
                <summary className="font-semibold text-navy-800 cursor-pointer text-sm group-open:mb-2">
                  {f.q}
                </summary>
                <p className="text-navy-500 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
