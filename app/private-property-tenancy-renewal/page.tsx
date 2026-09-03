import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Condo & Private Property Tenancy Renewal Philippines | PhLease',
  description: 'Renewing a condo or house-and-lot lease in the Philippines: condominium corporation and HOA rules, BIR stamp duty, foreign-owner tax, and 1 vs 2-year renewal norms.',
  alternates: { canonical: 'https://phlease.com/private-property-tenancy-renewal' },
  openGraph: {
    title: 'Condo & Private Property Tenancy Renewal in the Philippines',
    description: 'Condominium corporation rules, BIR stamp duty, foreign-owner tax, and renewal norms for private property leases.',
    url: 'https://phlease.com/private-property-tenancy-renewal',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'How is renewing a condo lease different from renewing a house-and-lot lease?',
    a: 'The contract mechanics are the same — the Civil Code governs both, and neither needs government approval. The difference is the building: a condominium unit is governed by the condominium corporation under RA 4720 (the Condominium Act), whose master deed, by-laws, and house rules may require tenant registration or set leasing conditions. A house in a subdivision answers to the homeowners association under PD 957. Check those rules before the new term, not after.',
  },
  {
    q: 'Does the condo administration charge move-in or move-out fees again on a renewal?',
    a: 'No. Administration move-in/move-out charges, elevator-padding deposits, and security registration are tied to a physical move — not to paperwork. Same tenant staying means none of that re-triggers. You deal with the management office again when there is a change of occupant, renovation works, or new parking access. Tell your tenant the renewal does not reset their facility access.',
  },
  {
    q: 'I\'m a foreign owner renting out my condo. What tax applies to my rental income?',
    a: 'If you are a non-resident foreign person — an individual not engaged in trade or business in the Philippines, or a foreign corporation — Philippine-source rental income is generally subject to a 25% final withholding tax on the gross rent, which the tenant or property manager withholds and remits to the BIR. If you become a Philippine tax resident, domestic income tax rules apply instead. Rates and filings are personal to your situation — confirm with a Philippine tax professional before renewal.',
  },
  {
    q: 'Are 1-year or 2-year private leases more common on renewal?',
    a: '1-year is the most common residential term, and most renewals follow the original length. Two-year leases appear more at the higher end of the condo market and for expat or corporate tenants who want rent stability. A longer term also means one fewer round of stamp duty. What fits depends on your rent trajectory: locking rent feels good when rents are flat and bad when they are rising.',
  },
  {
    q: 'Do I still need an agent for a renewal?',
    a: 'Most landlords don\'t, especially if the tenant is staying and terms barely change. Agent commission for a renewal is usually half a month\'s rent, sometimes less, and what you are paying for is paperwork plus a buffer if anything goes sideways. If you and the tenant deal directly and you are comfortable with the agreement and BIR stamping, DIY is fine. If the renewal involves rent changes, new occupants, or renegotiated terms, an agent or lawyer earns their fee.',
  },
  {
    q: 'Does my tenant keep gym and pool access on renewal?',
    a: 'Facility access is tied to occupancy and the tenant\'s registration with the condominium corporation, not to the tenancy document. As long as the tenant remains registered as the unit\'s occupant, access normally continues through the renewal. If an access card expires inside the new term, the tenant renews it with the management office directly — separate from your tenancy paperwork.',
  },
  {
    q: 'The condo association changed its house rules mid-lease. Does that affect my renewal?',
    a: 'Amendments to the master deed, by-laws, or house rules bind unit owners and their occupants as adopted, so a change during your term carries into the renewal — for example, new move-in schedules, pet rules, or short-term rental restrictions. At renewal, re-check the current rules with the management office and, where the rules changed materially, reflect them in the renewal or an updated annex so the contract and the building rules match.',
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
  headline: 'Condo & Private Property Tenancy Renewal in the Philippines',
  description: 'Renewing a condo or subdivision lease: condominium corporation and HOA rules, BIR stamp duty, foreign-owner tax, and renewal norms.',
  url: 'https://phlease.com/private-property-tenancy-renewal',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
  datePublished: '2026-05-04',
  dateModified: '2026-09-03',
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
            Condo &amp; Private Property Tenancy Renewal in the Philippines
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            Condo unit, townhouse, or house and lot — none of these need government approval to renew a lease. The contract side is governed by the Civil Code and whatever your original lease says. The building side is where private property gets its own rules: the condominium corporation or homeowners association, and if you are a foreign owner, a tax piece you really don&apos;t want to skip. This page is the version for landlords renewing a private lease.
          </p>
          <p className="text-navy-500 text-sm">
            For the general overview, see the <Link href="/tenancy-renewal" className="text-brand-700 hover:underline">tenancy renewal guide</Link>. For the standard residential walkthrough, the <Link href="/residential-tenancy-renewal-guide" className="text-brand-700 hover:underline">residential renewal guide</Link> covers the full checklist.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What&apos;s the same as any renewal</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">A renewal agreement, signed by both parties</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Either a renewal addendum to the original tenancy or a fresh agreement. The addendum works if only dates and rent are changing; a fresh document is cleaner if anything substantial moved. Neither binds until signed and stamped.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">BIR stamp duty, same rate</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Documentary Stamp Tax — PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 per PHP 1,000 thereafter. File via <a href="https://www.bir.gov.ph" target="_blank" rel="noopener" className="text-brand-700 hover:underline">BIR eStamping</a> within 5 days after the end of the month of signing. Private property doesn&apos;t get a different rate — see <Link href="/stamp-duty-tenancy-renewal" className="text-brand-700 hover:underline">stamp duty examples</Link> for worked numbers.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">Rent negotiation — market rules, with one exception</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Outside the Rent Control Act, whatever the two of you agree is the rent. Exception: units renting at ₱10,000/month or less (NCR and highly urbanized cities; ₱5,000 elsewhere) are capped at a 7% annual increase under RA 9653 while the same tenant stays. Replacing a tenant still costs you vacancy weeks plus possible commission, so there&apos;s a real cost to pushing too hard either way.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What&apos;s different on private property</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">No government approval layer.</strong> You don&apos;t apply to any agency to lease out your condo or house, and there is no approval window to track. The contract is between you and the tenant.</li>
              <li><strong className="text-navy-800">The condominium corporation&apos;s rules still apply.</strong> Under RA 4720, your condo&apos;s master deed, by-laws, and house rules cover tenant registration, renovations, pets, parking, and common-area use. They were in force when the tenant moved in and continue through the renewal.</li>
              <li><strong className="text-navy-800">Subdivision houses answer to the HOA.</strong> If your property is inside a subdivision, the homeowners association (PD 957) may have its own registration and conduct rules. Same principle: they carry through the renewal.</li>
              <li><strong className="text-navy-800">No fresh move-in fees on renewal.</strong> Administration move-in/move-out charges and security registration trigger on actual physical moves. Same tenant staying = no fresh fees.</li>
              <li><strong className="text-navy-800">Parking and facility access are tied to the occupant.</strong> Decals, season parking, and gym or pool access stay live across the renewal while the tenant remains registered with the administration. Card expiries inside the new term are handled with the management office directly.</li>
              <li><strong className="text-navy-800">Diplomatic clauses are common.</strong> Standard on expat-targeted condo leases and often kept on renewal. Worth re-confirming at renewal, but don&apos;t expect to remove one without pushback.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Foreign owners — tax on your rental income</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            If you are not a Philippine tax resident — for individuals, generally fewer than 183 days in the country during the calendar year — your Philippine rental income is treated as income of a non-resident, and the standard treatment is a <strong className="text-navy-800">25% final withholding tax on gross rent</strong>. &quot;Final&quot; means the withholding is the tax: no deductions, no year-end reconciliation on that income.
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-4">
            <p className="font-semibold text-navy-800 mb-3">How it actually works</p>
            <ul className="space-y-2 text-navy-600 text-sm pl-5 list-disc">
              <li>The tenant (or property manager) withholds 25% and remits it to the BIR — they are the withholding agent, not you.</li>
              <li>You receive 75% of the agreed rent. Agreeing rent &quot;net of tax&quot; is what pushes the gross figure up — price it consciously.</li>
              <li>The withholding obligation is on the payor. If they fail to withhold and remit, the BIR can hold them liable — so your tenant has their own reason to get this right.</li>
              <li>If you become a Philippine tax resident in the meantime, domestic rules apply to your rental income instead of the 25% final tax. Tell the tenant in writing when that changes.</li>
            </ul>
          </div>
          <p className="text-navy-500 text-sm leading-relaxed">
            Treat this page as a map, not a filing instruction — residency classification, treaties, and corporation-versus-individual ownership all change the answer. Most foreign owners run it through a Philippine tax agent who handles the BIR submissions. Getting it wrong is one of the most common compliance failures on foreign-owned rentals, and the BIR does enforce it.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">When to use an agent on renewal</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Renewal commission norms in the Philippines: half a month&apos;s rent where the agent represents the landlord, sometimes negotiated to a flat fee for straightforward renewals. New leases run a full month; renewals are lighter work and the market reflects that.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">DIY makes sense when:</p>
          <ul className="space-y-2 text-navy-600 text-sm mb-4 pl-5 list-disc">
            <li>Same tenant, same terms, just new dates and a small rent change</li>
            <li>You&apos;re comfortable with the agreement template and BIR stamping flow</li>
            <li>You and the tenant talk directly and trust each other</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed mb-3">An agent earns their fee when:</p>
          <ul className="space-y-2 text-navy-600 text-sm pl-5 list-disc">
            <li>You&apos;re a foreign owner and need the withholding handled cleanly</li>
            <li>The tenant wants to renegotiate substantial terms (deposit, rent, occupants, clauses)</li>
            <li>The building&apos;s rules changed in a way that affects occupancy and needs a proper clause</li>
            <li>You manage multiple units and the time saved across the portfolio justifies the fee</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Generate your private property renewal</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              Renewal-ready agreement for condo and house-and-lot leases. New dates, new rent, ready for BIR stamping. Free preview, ₱500 to download.
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
