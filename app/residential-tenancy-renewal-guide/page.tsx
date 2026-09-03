import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Residential Tenancy Renewal Philippines: Step-by-Step Guide | PhLease',
  description: 'How to renew a residential tenancy in the Philippines: renewal vs new agreement, rent increase rules under RA 9653, stamp duty on renewals, notice periods, and the condo corporation checks before you extend.',
  keywords: 'tenancy renewal philippines, renew lease agreement philippines, lease renewal contract philippines, residential lease renewal philippines, rent increase rules philippines, renewal stamp duty philippines',
  alternates: { canonical: 'https://phlease.com/residential-tenancy-renewal-guide' },
  openGraph: {
    title: 'Residential Tenancy Renewal in the Philippines: Step-by-Step',
    description: 'Renewal vs new agreement, RA 9653 rent-increase cap, stamp duty on the renewal, notice periods, and condo checks.',
    url: 'https://phlease.com/residential-tenancy-renewal-guide',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Does a Philippine lease renew automatically?',
    a: 'It can. Under Article 1682 of the Civil Code, if a written contract for a fixed term ends and the tenant continues occupying the property for fifteen days or more with the landlord\'s tolerance, a renewal is implied — on the same terms but with no fixed period, meaning it becomes month-to-month if rent was paid monthly. That default is risky for both sides: the tenant has no locked-in term, and the landlord cannot raise rent or reclaim the unit without following implied-renewal rules. Better to renew deliberately in writing.',
  },
  {
    q: 'Should we sign a renewal agreement or a brand-new contract?',
    a: 'A renewal (extension) agreement is usually the cleaner path: it references the original contract, keeps the deposit and inventory intact, and changes only the term — plus rent if it is going up. Draft a new agreement instead when the change is big enough to warrant it: different tenant or landlord, deposit restructured, unit renovated with new contents, or clauses that need a rewrite.',
  },
  {
    q: 'Can the landlord raise the rent at renewal?',
    a: 'Yes — at the end of the fixed term, the landlord can propose a new rent, and you accept, counter, or walk. But if your unit is covered by RA 9653 (the Rent Control Act, as extended) — monthly rent up to ₱10,000 in the NCR and other highly urbanized cities, up to ₱5,000 in other areas — the increase is capped at 7% per year while the same tenant stays. During the fixed term, rent cannot be raised at all unless the contract itself allows it.',
  },
  {
    q: 'Is stamp duty due on a renewal agreement?',
    a: 'Yes. A renewal is a new taxable document. Under the TRAIN Law (RA 10963), documentary stamp tax on a lease is ₱6 on the first ₱2,000 of the total rent stipulated for the renewal term, plus ₱2 for each additional ₱1,000 (or fractional part thereof). The landlord files BIR Form 2080 within five days after the end of the month of signing. You do not re-stamp the original agreement — the renewal document is stamped on its own terms.',
  },
  {
    q: 'Do we need to tell the condo corporation or homeowners association?',
    a: 'There is no national approval process for renewing a residential lease in the Philippines. If your building has a condo corporation or subdivision HOA with lease rules, check them: some by-laws require re-registration of tenants, board approval for lease terms, or minimum-term rules. If the tenant\'s building access and parking are current, a renewal with no change of occupant typically needs nothing more than an updated copy of the contract filed with the admin office.',
  },
  {
    q: 'How much notice for renewal or non-renewal?',
    a: 'Whatever the contract says — and if it is silent, the Civil Code\'s implied-renewal machinery applies. Market practice is 30–60 days\' written notice on either side before the term ends: long enough for the tenant to decide or relocate, long enough for the landlord to re-market. Put the notice period in the renewal document so it never becomes implied-renewal by accident.',
  },
]

export default function ResidentialTenancyRenewalGuide() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-24 pb-16">
        <section className="max-w-3xl mx-auto px-4 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Residential Tenancy Renewal in the Philippines: Step-by-Step
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            When a fixed-term lease ends in the Philippines, you have three roads: sign a renewal, sign a new agreement, or let things drift into an implied month-to-month renewal under the Civil Code. The third happens quietly — keep paying rent for fifteen days with the landlord's tolerance and it is in force, with none of the certainty either side wanted. This guide covers how to renew deliberately, what RA 9653 says about the rent increase, and the stamp-duty step most people forget.
          </p>
          <p className="text-navy-500 text-sm">
            For the wider renewal picture, see the <Link href="/tenancy-renewal" className="text-brand-700 hover:underline">tenancy renewal guide</Link>; for deposit behaviour across a renewal, the <Link href="/security-deposit-tenancy-renewal" className="text-brand-700 hover:underline">security deposit guide</Link>.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">The three renewal paths</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Renewal (extension) agreement.</strong> A short contract referencing the original: same clauses, new term, new rent if agreed. Deposit and inventory carry over. The cleanest option in most cases.</li>
              <li><strong className="text-navy-800">New agreement.</strong> When parties, deposit structure, or clauses change materially — treat it as a fresh tenancy on paper, with a new inventory and a proper receipt trail for the new money.</li>
              <li><strong className="text-navy-800">Implied renewal (the accident).</strong> Articles 1682–1688: continued occupancy for fifteen days or more after expiry, with the landlord tolerating it, renews the lease on the old terms but without a fixed period. Either side can end it with the right notice, and the rent stays where it was. Fine for nobody who is paying attention.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Rent increases: what the law caps</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Outside regulated units, the Philippines lets the market decide renewal rent — the landlord proposes, you negotiate. But <strong className="text-navy-800">RA 9653 (Rent Control Act, as extended)</strong> applies real limits to covered units: residential units with monthly rent up to <strong className="text-navy-800">₱10,000 in the NCR and other highly urbanized cities</strong> (up to <strong className="text-navy-800">₱5,000 in all other areas</strong>). For those units, while the same tenant keeps occupying, annual increases are capped at <strong className="text-navy-800">7%</strong> — and the law periodically reauthorises its coverage, so confirm the current status before relying on it.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            During the fixed term itself, rent cannot be raised unless the contract expressly allows it — which most agreements do not. That means a landlord who wants more money has to wait for the renewal, and a tenant who wants certainty should lock the term.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Stamp duty on the renewal</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            A renewal document is stamped like any lease: under the TRAIN Law (RA 10963), <strong className="text-navy-800">₱6 on the first ₱2,000</strong> of the total rent stipulated for the new term, plus <strong className="text-navy-800">₱2 for each additional ₱1,000</strong> (or fractional part thereof). The landlord (lessor) pays and files <strong className="text-navy-800">BIR Form 2080 within five days after the end of the month of signing</strong>. Unstamped paper is not void, but it is inadmissible in court until the deficiency is settled — the same trap as the original agreement.
          </p>
          <p className="text-navy-500 text-sm leading-relaxed">
            Full mechanics on the <Link href="/stamp-duty-tenancy-renewal" className="text-brand-700 hover:underline">stamp duty guide</Link>.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Before you sign the renewal — checklist</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Check the deposit position.</strong> Confirm the balance the landlord actually holds and whether it moves into the new term as-is or gets topped up to a new standard.</li>
              <li><strong className="text-navy-800">Re-walk the unit.</strong> Photograph condition again; update the inventory. Renewal disputes are often damage claims from the first term surfacing in the second.</li>
              <li><strong className="text-navy-800">Condo/HOA rules.</strong> If your building registers tenants or approves leases, file the renewal with the admin office so access and parking stay clean.</li>
              <li><strong className="text-navy-800">Fix the notice period.</strong> Write 30–60 days' notice for renewal/non-renewal into the new document so the next expiry never drifts into implied renewal.</li>
              <li><strong className="text-navy-800">Stamp and (optionally) notarize.</strong> DST on the new term; notarize if the renewal is for a year or more and you want it to bind third parties under Article 1643.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Renew properly in minutes</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              Generate a renewal agreement that references your original contract — new term, new rent, deposit carry-over, notice period included. ₱500 to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/renew" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Generate renewal — ₱500
              </Link>
              <Link href="/tenancy-renewal-checklist" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Renewal checklist
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
