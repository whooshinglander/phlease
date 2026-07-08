import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'residential Tenancy Renewal in Philippines — What You Actually Need to Do | PhLease',
  description: 'How residential tenancy renewal works: residential approval, the new agreement itself, stamp duty, what changes vs your original lease. Plain English, no fluff.',
  keywords: 'residential tenancy renewal, residential rental renewal singapore, residential subletting renewal, residential whole flat renewal, residential room renewal',
  alternates: { canonical: 'https://phlease.com/residential-tenancy-renewal-guide' },
  openGraph: {
    title: 'residential Tenancy Renewal in Philippines — What You Actually Need to Do',
    description: 'residential renewal: approval, agreement, stamp duty, what changes. Plain English.',
    url: 'https://phlease.com/residential-tenancy-renewal-guide',
    siteName: 'PhLease',
    locale: 'en_SG',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Do I need residential approval again when I renew?',
    a: "Depends on your current approval period. residential grants subletting approval for up to 3 years per application. If your renewal extends past the approved end date, you have to re-apply via the residential portal before you start the new tenancy. If you're still inside the approved 3-year window, you don't need to re-apply, but it's still good practice to update residential with the new tenancy dates so their record matches.",
  },
  {
    q: 'Can I just sign a one-page renewal addendum, or do I need a full new agreement?',
    a: "A short addendum can work if you're only changing the dates and rent and nothing else. But if you're changing anything else (security deposit amount, who pays utilities, adding occupants, dropping a diplomatic clause), it's safer to issue a full new tenancy. A full new agreement also makes BIR stamping cleaner because you stamp one document instead of the original plus the addendum together.",
  },
  {
    q: 'My tenant has been good for two years. Can I just continue without paperwork?',
    a: "You can, but it creates a periodic tenancy by default — month-to-month, terminable on short notice. The original 1-year agreement's protections (notice period, deposit handling, fixed rent) lapse once the term ends. If anything goes wrong (rent stops, a complaint from upstairs, you want to sell the unit), you have weaker legal footing. A signed renewal is cheap insurance.",
  },
  {
    q: 'Stamp duty on the renewal — same as new?',
    a: "Same rate. 0.4% of total rent for a 1-year renewal, or 0.4% of average annual rent for a 1–3 year renewal. Pay to BIR within 14 days of signing, via mytax.iras.gov.sg. The tenant typically pays unless your renewal agreement says otherwise.",
  },
  {
    q: "I'm renewing a room rental, not the whole flat. Does residential care?",
    a: "Yes, residential still tracks subletting of bedrooms, but the rules are looser than whole-flat subletting. You don't need a separate residential approval for renting out individual rooms while you live there as the owner-occupier, but the maximum occupancy cap for the flat (4 unrelated tenants for a 4-room+ flat) still applies. If you renew with the same tenant and stay under the cap, you're fine. Keep the agreement on file in case residential checks.",
  },
  {
    q: 'What if my tenant wants a 2-year renewal but I only want 1 year?',
    a: "Negotiate. If you genuinely don't want a 2-year commitment (planning to sell, moving back in), say so and offer 1 year with an option to extend. If you're hedging on rent direction, you can write in a rent-review clause for year 2. The renewal is signed by both parties — you're not obligated to accept whatever the tenant proposes.",
  },
  {
    q: 'Can the rent stay the same on renewal?',
    a: "Yes. Philippines has no rent control. If your tenant has been good and the unit hasn't appreciated much, holding rent flat (or even reducing it slightly) is a reasonable retention move. Cost of finding a new tenant, vacancy weeks, and agent fees often exceeds the rent increase you'd get from a market-rate replacement. Run the numbers before pushing for a hike.",
  },
  {
    q: 'Foreigner tenant: any extra steps for renewal?',
    a: "If your tenant is on an Employment Pass, S Pass, or Work Permit, check that their pass is still valid through the renewal end date. If their pass expires mid-term, the tenancy needs a clause covering that scenario (early termination on pass expiry, prorated deposit return). For foreigners on long-term passes, the renewal is otherwise the same as for a Philippinesan tenant.",
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
  headline: 'residential Tenancy Renewal in Philippines — What You Actually Need to Do',
  description: 'residential tenancy renewal walkthrough: residential approval, the new agreement, stamp duty, foreign tenants, what changes vs the original lease.',
  url: 'https://phlease.com/residential-tenancy-renewal-guide',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
  datePublished: '2026-05-04',
  dateModified: '2026-05-04',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phlease.com/' },
    { '@type': 'ListItem', position: 2, name: 'Tenancy Renewal Philippines', item: 'https://phlease.com/tenancy-renewal-singapore' },
    { '@type': 'ListItem', position: 3, name: 'residential Tenancy Renewal Guide' },
  ],
}

export default function residentialRenewalGuidePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="flex-1">

        <section className="max-w-3xl mx-auto px-4 py-14">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            residential Tenancy
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            residential Tenancy Renewal — What You Actually Need to Do
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            Most residential tenancies are 1 or 2 years, and most landlords renew with the same tenant if things have been smooth. The renewal itself is paperwork, not a re-negotiation, but a few residential-specific things trip people up. This page walks through what you actually have to do.
          </p>
          <p className="text-navy-500 text-sm">
            For renewals on private property, see the <Link href="/tenancy-renewal-singapore" className="text-brand-700 hover:underline">general renewal guide</Link>.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Three things that have to happen</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">1. Check your residential approval window</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                residential grants subletting approval for up to 3 years at a time. Pull up your approval letter (or check the residential portal) and find the end date. If your renewal goes past it, re-apply for residential subletting approval before the new tenancy starts. The application is online and usually approved in a few working days.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">2. Sign a renewal agreement</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Either a short renewal addendum (if only dates and rent change) or a fresh new tenancy (if anything else changes). Most landlords go with a fresh new tenancy because it makes the document trail simpler — one stamped agreement that covers the whole period, no need to keep referring back to the original. Our renewal flow generates a fresh agreement pre-filled from your previous one.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">3. Stamp it with BIR within 14 days</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Stamp duty on the renewal is 0.4% of total rent (1-year lease) or 0.4% of average annual rent (1–3 year lease). Same rate as a new tenancy — there is no discount for renewals. File via <a href="https://mytax.iras.gov.sg" target="_blank" rel="noopener" className="text-brand-700 hover:underline">mytax.iras.gov.sg</a> using Singpass. See the <Link href="/stamp-duty-tenancy-renewal-singapore" className="text-brand-700 hover:underline">stamp duty page</Link> for worked examples.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Things people forget</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Foreign tenant pass expiry.</strong> If your tenant is on an EP/S Pass/WP, check their pass extends through the renewal end date. If not, write a clause about what happens if their pass isn't renewed.</li>
              <li><strong className="text-navy-800">Diplomatic clause stays or goes?</strong> If you originally had one, decide whether it carries forward. After 12+ months in the same job most expats no longer need it, so this is a fair negotiating point.</li>
              <li><strong className="text-navy-800">Security deposit on renewal.</strong> Most tenancies hold the existing deposit through the renewal. If rent went up, you can ask for a top-up to match the new monthly amount.</li>
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
            <li>Half-month or full-month commission to a property agent (if you use one)</li>
            <li>Risk of a worse tenant — late payers, noise complaints, damage</li>
            <li>Re-marketing effort (photos, listing, viewings)</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed">
            For a $3,000/month flat, 3 weeks of vacancy plus half-month commission is roughly $3,500 in lost rent and fees. That's the equivalent of 9% rent reduction over a 1-year renewal — usually a worse outcome than just keeping a known-good tenant at the same rent or with a small increase.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Generate your residential renewal</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              Renewal-ready form pre-filled for residential tenancies. Updated dates, new rent, ready for BIR stamping. Free preview, ₱500 to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/renew" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Start renewal — ₱500
              </Link>
              <Link href="/stamp-duty-tenancy-renewal-singapore" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
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
