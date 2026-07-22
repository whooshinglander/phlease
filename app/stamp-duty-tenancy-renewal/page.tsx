import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Stamp Duty on Tenancy Renewal Philippines — BIR Rates 2026 | PhLease',
  description: 'Documentary Stamp Tax on lease renewals in the Philippines: PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. Worked examples, who pays, when to file, and a calculator.',
  keywords: 'stamp duty tenancy renewal philippines, bir stamp duty renewal, tenancy renewal stamp duty calculator, do i pay stamp duty on lease renewal, stamp duty residential renewal',
  alternates: { canonical: 'https://phlease.com/stamp-duty-tenancy-renewal' },
  openGraph: {
    title: 'Stamp Duty on Tenancy Renewal Philippines — BIR Rates 2026',
    description: 'Documentary Stamp Tax applies to every lease renewal in the Philippines. PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 per PHP 1,000. Worked examples for residential and condo renewals.',
    url: 'https://phlease.com/stamp-duty-tenancy-renewal',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Do I need to pay documentary stamp tax on a lease renewal in Philippines?',
    a: 'Yes. A lease renewal is a new stampable document under the National Internal Revenue Code. DST is PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. It must be paid to the BIR within 5 days after the end of the month the document was signed.',
  },
  {
    q: 'How much is documentary stamp tax for a lease renewal?',
    a: 'For a 1-year renewal at PHP 25,000/month: annual rent = PHP 300,000. DST = PHP 6.00 (first PHP 2,000) + PHP 2.00 × 298 = PHP 602. For a 2-year renewal at PHP 40,000/month: total rent = PHP 960,000, average annual rent = PHP 480,000. DST = PHP 6.00 + PHP 2.00 × 478 = PHP 962.',
  },
  {
    q: 'Who pays the documentary stamp tax — landlord or tenant?',
    a: 'The NIRC does not specify who bears the cost. By convention in the Philippines, the tenant pays — most lease agreements specify this in the DST clause. However, parties can agree otherwise; some renewals split the cost or shift it to the landlord as a negotiation point.',
  },
  {
    q: 'When is the documentary stamp tax due on a renewal?',
    a: 'DST must be paid within 5 days after the end of the month the document was signed. File and pay via the BIR e-filing system (eBIRForms). Late payment incurs a penalty of 25% of the tax due, plus 12% interest per annum. If the document is not stamped, it may not be admissible as evidence in court.',
  },
  {
    q: 'Is the DST rate the same for residential and condo renewals?',
    a: 'Yes. The DST rate is the same for all types of lease agreements — residential, condo, commercial, or room rental. The only factors that change the tax are the annual rental amount and the lease term.',
  },
  {
    q: 'Do I need to stamp the renewal if I am extending an existing lease without changes?',
    a: 'Yes — even if rent and terms are unchanged, a renewal creates a new lease period and is a separate stampable document. The only exception is if the original agreement contained an explicit option to renew clause that was already stamped for the renewal term, which is uncommon.',
  },
  {
    q: 'How do I calculate DST on a lease renewal with a rent increase?',
    a: 'Use the new (increased) rent for the renewal term, not the old rent. Example: original rent was PHP 25,000/month, renewal at PHP 28,000/month for 1 year → annual rent = PHP 336,000. DST = PHP 6.00 + PHP 2.00 × 334 = PHP 674. DST is always based on the rent stated in the renewal agreement.',
  },
  {
    q: 'What happens if I forget to stamp a lease renewal?',
    a: 'An unstamped renewal is not admissible as evidence in a Philippine court — meaning if there is a dispute, you cannot rely on the agreement. You can stamp it late but will incur a 25% penalty plus 12% interest per annum. Best to stamp within the prescribed period to avoid penalties.',
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
  url: 'https://phlease.com/stamp-duty-tenancy-renewal',
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
    { '@type': 'ListItem', position: 3, name: 'Stamp Duty on Tenancy Renewal' },
  ],
}

const EXAMPLES = [
  { lease: '1 year', rent: '₱15,000/mo', total: '₱180,000', duty: '₱366', formula: '₱6 + ₱2 × 178' },
  { lease: '1 year', rent: '₱25,000/mo', total: '₱300,000', duty: '₱602', formula: '₱6 + ₱2 × 298' },
  { lease: '1 year', rent: '₱40,000/mo', total: '₱480,000', duty: '₱962', formula: '₱6 + ₱2 × 478' },
  { lease: '2 years', rent: '₱25,000/mo', total: '₱600,000', duty: '₱1,202', formula: '₱6 + ₱2 × 598 (annual rent ₱300k)' },
  { lease: '2 years', rent: '₱35,000/mo', total: '₱840,000', duty: '₱1,682', formula: '₱6 + ₱2 × 838 (annual rent ₱420k)' },
  { lease: '3 years', rent: '₱25,000/mo', total: '₱900,000', duty: '₱1,802', formula: '₱6 + ₱2 × 898 (annual rent ₱300k)' },
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
              <li>✓ File via BIR e-Stamping at <a href="https://www.bir.gov.ph" className="text-brand-700 hover:underline" target="_blank" rel="noopener">BIR eStamping</a>.</li>
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
            For leases over 3 years, BIR uses the highest annual rent across the term and applies a different rate band. See <a href="https://www.bir.gov.ph/index.php/tax-information/documentary-stamp-tax.html" target="_blank" rel="noopener" className="text-brand-700 hover:underline">BIR — Documentary Stamp Tax guide</a>.
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
                Go to <a href="https://www.bir.gov.ph" target="_blank" rel="noopener" className="text-brand-700 hover:underline">BIR eStamping</a>, log in, select Stamp Duty → File Stamp Duty.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-1">3. Choose &quot;Lease / Tenancy Agreement&quot;.</p>
              <p className="text-navy-500 text-sm">
                Enter property address, lease start/end dates, and rent. BIR auto-calculates the duty.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-1">4. Pay via GCash or bank transfer.</p>
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
              <Link href="/tenancy-renewal" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
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
