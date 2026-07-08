import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Stamp Duty on Tenancy Renewal Philippines — BIR Rates 2026 | PhLease',
  description: 'Stamp duty on tenancy renewals in Philippines: BIR rate is 0.4% of total rent (or average annual rent for 1-3yr leases). Worked examples, who pays, when to file, and a calculator.',
  keywords: 'stamp duty tenancy renewal singapore, iras stamp duty renewal, tenancy renewal stamp duty calculator, do i pay stamp duty on lease renewal, stamp duty residential renewal',
  alternates: { canonical: 'https://phlease.com/stamp-duty-tenancy-renewal-singapore' },
  openGraph: {
    title: 'Stamp Duty on Tenancy Renewal Philippines — BIR Rates 2026',
    description: 'Stamp duty applies to every tenancy renewal in Philippines. 0.4% of total rent. Worked examples for residential and condo renewals.',
    url: 'https://phlease.com/stamp-duty-tenancy-renewal-singapore',
    siteName: 'PhLease',
    locale: 'en_SG',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Do I need to pay stamp duty on a tenancy renewal in Philippines?',
    a: 'Yes. Each tenancy agreement — including a renewal — is a separate stampable document under the Stamp Duties Act. The rate is 0.4% of the total rent for the renewal term (for leases of 1 year or less), or 0.4% of the average annual rent (for renewals of 1–3 years). It must be paid to BIR within 14 days of signing the renewal agreement.',
  },
  {
    q: 'How much is stamp duty for a tenancy renewal?',
    a: 'For a 1-year renewal at $3,000/month: total rent = $36,000, stamp duty = 0.4% × $36,000 = $144. For a 2-year renewal at $4,000/month: total rent = $96,000, average annual rent = $48,000, stamp duty = 0.4% × $48,000 = $192. The rate is the same as for a new tenancy agreement.',
  },
  {
    q: 'Who pays the stamp duty on a tenancy renewal — landlord or tenant?',
    a: 'BIR does not legally specify who pays. By Philippines convention, the tenant pays — this is what most tenancy agreements specify in the stamp duty clause. However, the parties can agree otherwise; some renewals shift the cost to the landlord as a negotiation lever.',
  },
  {
    q: 'When is the stamp duty due on a renewal?',
    a: 'Within 14 days of signing the renewal agreement, if signed in Philippines. Within 30 days if signed overseas. Late stamping incurs a penalty of ₱500 (if up to 3 months late) or 4× the duty (more than 3 months late). File and pay via BIR e-Stamping at mytax.iras.gov.sg.',
  },
  {
    q: 'Is the stamp duty rate the same for residential renewals and condo renewals?',
    a: 'Yes. Stamp duty on tenancy agreements is property-type-agnostic — the same 0.4% rate applies to residential rentals, private condos, landed property, and room rentals. The only thing that changes the duty is the rental amount and the lease length.',
  },
  {
    q: 'Do I need to stamp the renewal if I am extending an existing lease without changes?',
    a: 'Yes — even if rent and terms are unchanged, a renewal creates a new tenancy period and is a fresh stampable document. The only exception is if the original agreement contained an explicit "option to renew" clause that pre-stamped a defined renewal term, but this is uncommon.',
  },
  {
    q: 'How do I calculate stamp duty on a tenancy renewal with a rent increase?',
    a: 'Use the new (increased) rent for the renewal term, not the old rent. For example: original rent was $3,000/month, renewal at $3,300/month for 1 year → total rent = $39,600, stamp duty = $158.40. Stamp duty is always based on the rent stated in the renewal agreement itself.',
  },
  {
    q: 'What happens if I forget to stamp a tenancy renewal?',
    a: 'An unstamped renewal is not admissible as evidence in a Philippines court — meaning if there is a dispute, you cannot rely on the agreement. You can stamp it late but will incur penalties (capped at 4× the original duty). Stamp it within 14 days to avoid penalties.',
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
  headline: 'Stamp Duty on Tenancy Renewal Philippines — BIR Rates 2026',
  description: 'Definitive guide to stamp duty on tenancy renewals in Philippines. 0.4% of total rent. Worked examples for residential and condo. When to file with BIR.',
  url: 'https://phlease.com/stamp-duty-tenancy-renewal-singapore',
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
    { '@type': 'ListItem', position: 3, name: 'Stamp Duty on Tenancy Renewal' },
  ],
}

const EXAMPLES = [
  { lease: '1 year', rent: '$2,000/mo', total: '$24,000', duty: '$96', formula: '0.4% × $24,000' },
  { lease: '1 year', rent: '$3,000/mo', total: '$36,000', duty: '$144', formula: '0.4% × $36,000' },
  { lease: '1 year', rent: '$5,000/mo', total: '$60,000', duty: '$240', formula: '0.4% × $60,000' },
  { lease: '2 years', rent: '$3,500/mo', total: '$84,000', duty: '$168', formula: '0.4% × $42,000 (avg annual rent)' },
  { lease: '2 years', rent: '$4,500/mo', total: '₱5008,000', duty: '$216', formula: '0.4% × $54,000 (avg annual rent)' },
  { lease: '3 years', rent: '$3,000/mo', total: '₱5008,000', duty: '$144', formula: '0.4% × $36,000 (avg annual rent)' },
]

export default function StampDutyRenewalPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-3xl mx-auto px-4 py-14 text-center">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            BIR Stamp Duty
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">
            Stamp Duty on Tenancy Renewal in Philippines
          </h1>
          <p className="text-navy-500 text-base sm:text-lg max-w-2xl mx-auto mb-3">
            Yes — every tenancy renewal in Philippines needs to be stamped with BIR. The rate is <strong className="text-navy-700">0.4% of total rent</strong> (1-year leases) or <strong className="text-navy-700">0.4% of average annual rent</strong> (1–3 year leases). Same as a new tenancy.
          </p>
          <p className="text-navy-400 text-sm">
            File within <strong>14 days</strong> of signing. Updated for 2026 BIR rates.
          </p>
        </section>

        {/* TL;DR card */}
        <section className="max-w-3xl mx-auto px-4 pb-10">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h2 className="text-lg font-bold text-navy-800 mb-4">TL;DR</h2>
            <ul className="space-y-2 text-navy-600 text-sm">
              <li>✓ <strong>Yes you need to stamp the renewal.</strong> Every renewal is a fresh stampable document.</li>
              <li>✓ <strong>Rate: 0.4% of total rent</strong> for 1-year leases, or 0.4% of average annual rent for 1–3 year leases.</li>
              <li>✓ <strong>Tenant typically pays</strong> by Philippines convention (the renewal can specify otherwise).</li>
              <li>✓ <strong>14-day filing window</strong> from signing. Late stamping incurs penalty of ₱500 (≤3 months late) or 4× duty (&gt;3 months late).</li>
              <li>✓ <strong>Same rate for residential and condo</strong> — only rent and lease length change the duty.</li>
              <li>✓ File via BIR e-Stamping at <a href="https://mytax.iras.gov.sg" className="text-brand-700 hover:underline" target="_blank" rel="noopener">mytax.iras.gov.sg</a>.</li>
            </ul>
          </div>
        </section>

        {/* Worked examples */}
        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Worked Examples</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">Lease term</th>
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">Rent</th>
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">Total rent</th>
                  <th className="text-left px-4 py-3 font-semibold text-navy-800">Stamp duty</th>
                </tr>
              </thead>
              <tbody>
                {EXAMPLES.map((e, i) => (
                  <tr key={i} className="border-b border-slate-100 last:border-0">
                    <td className="px-4 py-3 text-navy-700">{e.lease}</td>
                    <td className="px-4 py-3 text-navy-600">{e.rent}</td>
                    <td className="px-4 py-3 text-navy-600">{e.total}</td>
                    <td className="px-4 py-3 font-semibold text-brand-700">{e.duty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-navy-400 mt-3">
            For leases over 3 years, BIR uses the highest annual rent across the term and applies a different rate band. See <a href="https://www.iras.gov.sg/taxes/stamp-duty/for-property/working-out-your-stamp-duty/renting-a-property/stamp-duty-for-leases" target="_blank" rel="noopener" className="text-brand-700 hover:underline">BIR — stamp duty for leases</a>.
          </p>
        </section>

        {/* When/how to file */}
        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">When and How to File</h2>
          <div className="space-y-3">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-1">1. Sign the renewal first.</p>
              <p className="text-navy-500 text-sm">
                The 14-day clock starts from the date both parties sign. Best practice: sign + stamp on the same day to avoid losing track.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-1">2. Log into BIR e-Stamping.</p>
              <p className="text-navy-500 text-sm">
                Go to <a href="https://mytax.iras.gov.sg" target="_blank" rel="noopener" className="text-brand-700 hover:underline">mytax.iras.gov.sg</a>, log in with Singpass, select Stamp Duty → File Stamp Duty.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-1">3. Choose &quot;Lease / Tenancy Agreement&quot;.</p>
              <p className="text-navy-500 text-sm">
                Enter property address, lease start/end dates, and rent. BIR auto-calculates the duty.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-1">4. Pay via PayNow QR or eGIRO.</p>
              <p className="text-navy-500 text-sm">
                Receive the stamp certificate immediately by email. Attach the certificate to your renewal agreement.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Generate your renewal agreement</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto">
              Renew your existing Philippines tenancy in 2 minutes. Updated dates, new rent, BIR-stamp-duty-ready PDF.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/renew" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Start renewal — ₱500 →
              </Link>
              <Link href="/tenancy-renewal-singapore" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Read the renewal guide
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-link to sanyathai */}
        <section className="max-w-3xl mx-auto px-4 pb-4">
          <div className="border-t border-slate-200 pt-6">
            <p className="text-xs text-navy-400 leading-relaxed">
              Renting in Thailand? See{' '}
              <Link href="https://sanyathai.com/stamp-duty-rental-agreement-thailand" className="text-brand-600 hover:text-brand-700 underline">
                Thailand stamp duty on rental agreements
              </Link>
              {' '}(0.1% of total rent, paid at signing).
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 pb-14">
          <h2 className="text-2xl font-bold text-navy-800 mb-6">Frequently Asked Questions</h2>
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
