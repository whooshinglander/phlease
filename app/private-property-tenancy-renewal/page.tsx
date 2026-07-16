import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Condo & Residential Lease Renewal in Philippines — Complete Guide | PhLease',
  description: 'Condo and residential lease renewal in Philippines: condo corporation rules, BIR stamping, 1 vs 2-year leases, agent commission. Plain English.',
  keywords: 'lease renewal philippines, condo lease renewal philippines, tenancy renewal philippines, residential lease renewal, condo rental renewal, philippines tenancy renewal guide',
  alternates: { canonical: 'https://phlease.com/private-property-tenancy-renewal' },
  openGraph: {
    title: 'Condo & Residential Lease Renewal in Philippines — Complete Guide',
    description: 'Condo and residential lease renewal: condo corporation rules, BIR stamping, agent commission. Plain English.',
    url: 'https://phlease.com/private-property-tenancy-renewal',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: "How is renewing a condo lease different from renewing an residential lease?",
    a: "For private property renewals in the Philippines, there is no central housing authority approval needed. The renewal is governed by the Civil Code and the existing lease terms. For condominium units, check the condo corporation's rules on tenant registration and renewal procedures. The renewal mechanics (new agreement, BIR DST payment, deposit handling) follow standard practice.",
  },
  {
    q: "Does the MCST charge move-in or move-out fees again on a renewal?",
    a: "No. MCST move-in/move-out fees, deposits for lift padding, and security registration are tied to a tenant physically moving in or out — not to the paperwork. If the same tenant is staying, none of that re-triggers. You only deal with MCST again when there's a change of occupant, when renovation works are planned, or when a tenant wants new car park decals or season parking. Tell your tenant the renewal doesn't reset their facility access either; existing gym/pool cards stay live.",
  },
  {
    q: "I'm a foreign owner renting out my condo. What's this 22% withholding tax I keep hearing about?",
    a: "For foreign landlords in the Philippines, rental income is subject to 15% final withholding tax (if the landlord is a non-resident foreign corporation) or graduated rates for individual non-residents. The tenant or property manager typically withholds the tax and remits it to the BIR. Consult a tax professional for your specific situation.",
  },
  {
    q: "Are 1-year or 2-year private leases more common on renewal?",
    a: "2-year is the default for private property in Philippines, and most renewals follow the original lease length. Tenants who plan to stay long-term prefer 2-year because it locks in rent and saves another round of stamp duty. Landlords prefer 2-year when the rental market is soft (locks in income) and 1-year when rents are rising (more frequent re-pricing). With MAS keeping rates higher into 2026, a lot of landlords are leaning toward 2-year renewals just to stabilise cash flow against the mortgage.",
  },
  {
    q: "Do I still need an agent for a renewal?",
    a: "Most landlords don't, especially if the tenant is staying and terms barely change. Agent commission for a renewal is usually half a month's rent, sometimes less, and what you're paying for is the paperwork plus a buffer if anything goes sideways. If you and the tenant talk directly and you're comfortable handling the agreement and BIR stamping, DIY is fine. If the renewal involves rent changes, new occupants, or the tenant wants to renegotiate big chunks of the original lease, an agent or a lawyer earns their fee.",
  },
  {
    q: "Does my tenant keep gym and pool access on renewal?",
    a: "Yes, automatically. Facility access is tied to occupancy, not the tenancy document. As long as the tenant is still registered with the MCST as the unit's occupant, their season pass / facility card / pool wristband stays active through the renewal. If their access card has an expiry that falls during the new term, they renew it directly with the condo management office — that's a separate process from your tenancy renewal and doesn't involve you.",
  },
  {
    q: "The condo is talking about en-bloc. Can I still renew?",
    a: "Yes, but disclose. Philippines en-bloc sales take 12-24 months from collective sale agreement to actual handover, so a 1 or 2-year renewal is usually fine. What you should do: write an en-bloc clause into the renewal letting either party terminate with 2-3 months notice if a Sale & Purchase Agreement is signed, with prorated rent and a full deposit return. Tenants accept this if they understand the timeline. Hiding it and getting hit with a forced termination later is how you end up in a small-claims dispute over their moving costs.",
  },
  {
    q: "SRX or PropertyGuru says my unit could rent for $1,000 more. Should I push for that on renewal?",
    a: "Treat the portal estimate as a ceiling, not a target. Those numbers are based on recent transacted leases and lean optimistic — they don't price in the cost of finding a new tenant, vacancy weeks, agent commission, or the small but real risk of getting a worse tenant. If the gap is under 10%, holding rent flat or asking for a 3-5% bump usually beats chasing the headline number. If the gap is 15%+ and your tenant won't budge, that's when re-listing makes sense. Run the numbers on net income after costs, not gross rent.",
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
  headline: 'Private Property Tenancy Renewal in Philippines — Condo, EC, Landed',
  description: 'Private property rental renewal in Philippines: MCST bylaws, non-resident withholding tax, 1 vs 2-year leases, agent commission norms.',
  url: 'https://phlease.com/private-property-tenancy-renewal',
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
    { '@type': 'ListItem', position: 3, name: 'Private Property Renewal' },
  ],
}

export default function PrivatePropertyRenewalPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="flex-1">

        <section className="max-w-3xl mx-auto px-4 py-14">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Private Property Renewal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Private Property Tenancy Renewal in Philippines
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            Condo, executive condo, landed, GCB — all of these fall under "private property" for renewal purposes, and the rules are different from Residential. There's no Residential to ask permission from, but the MCST is its own thing, and if you're a foreign owner there's a tax piece you really don't want to skip. This page is the version for landlords renewing a private lease.
          </p>
          <p className="text-navy-500 text-sm">
            For the general overview, see the <Link href="/tenancy-renewal" className="text-brand-700 hover:underline">tenancy renewal guide</Link>. For Residential units, the <Link href="/residential-tenancy-renewal-guide" className="text-brand-700 hover:underline">Residential renewal page</Link> covers the approval flow.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What's the same as Residential</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">A renewal agreement, signed by both parties</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Either a renewal addendum to the original tenancy or a fresh new tenancy. Same call as on residential — fresh agreement is cleaner, an addendum works if only dates and rent are changing. Letter of intent isn't binding until the actual document is signed and stamped.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">BIR stamp duty, same rate</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                0.4% of total rent for a 1-year renewal, 0.4% of average annual rent for a longer one. File via <a href="https://www.bir.gov.ph" target="_blank" rel="noopener" className="text-brand-700 hover:underline">BIR eStamping</a> within 5 days after the end of the month of signing. Private property doesn't get a different rate — see <Link href="/stamp-duty-tenancy-renewal" className="text-brand-700 hover:underline">stamp duty examples</Link> for worked numbers.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">Rent negotiation works the same way</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                No rent control in Philippines. Whatever the two of you agree to is the rent. Replacing a tenant still costs you a few weeks of vacancy plus possible commission, so there's still a real cost to pushing too hard.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What's different</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">No residential approval.</strong> You don't apply to residential, you don't need a subletting consent letter, you don't have a 3-year approval window to track. That whole layer is gone.</li>
              <li><strong className="text-navy-800">MCST bylaws still apply.</strong> The Management Council Strata Titles runs the condo. Their bylaws cover noise, renovations, pets, parking, common-area use. These were in force when the tenant moved in and they continue through the renewal — you don't re-sign anything with the MCST.</li>
              <li><strong className="text-navy-800">No fresh move-in fees on renewal.</strong> MCST move-in/move-out fees, lift padding deposits, and security registration only trigger on actual physical move events. Same tenant staying = no fresh fees.</li>
              <li><strong className="text-navy-800">Car park decals, season parking, gym cards.</strong> All tied to the occupant, not the tenancy paperwork. Stay live across renewal automatically. If the tenant's card has an expiry inside the new term, they renew it directly with the condo management office.</li>
              <li><strong className="text-navy-800">Longer leases are normal.</strong> 2-year is the default for condos, and 3-year isn't unusual at the higher end (GCB, large landed homes, expat-targeted leases). residential tenants tend to do 1-year because the population is more local; private property leans expat and corporate, where 2 years is the floor.</li>
              <li><strong className="text-navy-800">Diplomatic clauses are common.</strong> Standard on expat-targeted condo leases, often kept on renewal even after years in Philippines. Worth re-confirming, but don't expect to remove it without pushback.</li>
              <li><strong className="text-navy-800">Executive condos before minimum lease period.</strong> If your EC is still inside its 5-year Minimum Occupation Period, you can't rent out the whole unit — only spare rooms, with you as the owner-occupier. A renewal doesn't change that. After minimum lease period, normal private-property rules apply.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Foreign owners — the 22% withholding tax</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            This is the part most foreign landlords get wrong. If you're not a Philippines tax resident — meaning you're not in Philippines for 183+ days in the calendar year — your rental income is treated as Philippines-source income paid to a non-resident, and Non-Resident Withholding Tax (NRWT) kicks in at 22% of gross rent.
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-4">
            <p className="font-semibold text-navy-800 mb-3">How it actually works</p>
            <ul className="space-y-2 text-navy-600 text-sm pl-5 list-disc">
              <li>Tenant pays you 78% of the agreed rent each month.</li>
              <li>Tenant withholds 22% and remits it to BIR by the 15th of the second month after payment.</li>
              <li>You file a Philippines tax return as a non-resident landlord. After deducting allowable expenses (mortgage interest, MCST fees, property tax, repairs), your actual tax bill is usually lower than 22% of gross — you claim the difference as a refund.</li>
              <li>The tenant's obligation to withhold is on the tenant, not on you. If they don't withhold, BIR can hold them liable for the unremitted tax. So this is a tenant exposure too — not just yours.</li>
            </ul>
          </div>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            On renewal, if you've become a Philippines tax resident in the meantime (you moved back, or you've been here 183+ days), the NRWT no longer applies and rent gets paid in full. Tell the tenant in writing so they stop withholding. If you're still non-resident, the renewal carries forward the same arrangement.
          </p>
          <p className="text-navy-500 text-sm leading-relaxed">
            Most foreign owners route this through a property agent or a Philippines tax agent who files the BIR submissions on their behalf. Worth the fee. Getting NRWT wrong is the single most common compliance failure on foreign-owned rentals here, and BIR does enforce it.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">When to use an agent on renewal</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Renewal commission norms in Philippines: half a month's rent for a renewal where the agent represents the landlord, sometimes negotiated down to a flat fee for straightforward renewals. New leases are full month, but renewals are lighter work and the market reflects that.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">DIY makes sense when:</p>
          <ul className="space-y-2 text-navy-600 text-sm mb-4 pl-5 list-disc">
            <li>Same tenant, same terms, just new dates and a small rent change</li>
            <li>You're comfortable with the agreement template and BIR stamping flow</li>
            <li>You and the tenant talk directly and trust each other</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">An agent earns their fee when:</p>
          <ul className="space-y-2 text-navy-600 text-sm pl-5 list-disc">
            <li>You're a foreign owner and need NRWT handled cleanly</li>
            <li>The tenant wants to renegotiate substantial terms (deposit, rent, occupants, clauses)</li>
            <li>There's an en-bloc situation, sale plan, or planned reno that needs a proper clause</li>
            <li>You manage multiple units and the time saved across the portfolio justifies the fee</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Generate your private property renewal</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              Renewal-ready agreement pre-filled for condo, EC, and landed leases. New dates, new rent, ready for BIR stamping. Free preview, ₱500 to download.
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
