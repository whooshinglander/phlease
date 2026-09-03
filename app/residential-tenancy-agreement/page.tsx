import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Residential Tenancy Agreement Philippines: What It Must Include | PhLease',
  description: 'What a residential tenancy agreement in the Philippines must include — parties, term, rent, deposit, key clauses, condo subletting rules, documentary stamp tax, and when to notarize. With FAQ.',
  keywords: 'residential tenancy agreement philippines, residential lease agreement philippines, apartment rental agreement philippines, condo lease agreement philippines, house rental contract philippines, tenancy agreement sample philippines',
  alternates: { canonical: 'https://phlease.com/residential-tenancy-agreement' },
  openGraph: {
    title: 'Residential Tenancy Agreement Philippines: What It Must Include',
    description: 'The clauses a Philippine residential tenancy agreement needs, condo subletting rules, stamp duty, and when notarization matters.',
    url: 'https://phlease.com/residential-tenancy-agreement',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Is a written tenancy agreement required in the Philippines?',
    a: 'Not strictly. Under the Civil Code, a lease is consensual — it is valid once the parties agree on the thing and the price. But an oral lease is almost impossible to enforce: rent terms, deposit refunds, and termination rights all become he-said-she-said. A written agreement protects both sides and is also required if you want the lease to be admissible in court as evidence without additional proof of its terms.',
  },
  {
    q: 'Does a tenancy agreement need to be notarized?',
    a: 'Notarization is optional for validity. What matters more: under Article 1648 of the Civil Code, a lease of real property for more than one (1) year only binds third parties (for example, a new buyer of the property) if it appears in a public document with its date insinuated on the same register as donations — practically, that means a notarized agreement recorded at the Registry of Deeds. If your lease runs past a year and you want it to survive a sale of the property, notarize and insinuate it.',
  },
  {
    q: 'How much is documentary stamp tax on a residential lease?',
    a: 'Under the TRAIN Law (RA 10963), documentary stamp tax on a lease of real property is ₱6 on the first ₱2,000 of the total rent stipulated, plus ₱2 for each additional ₱1,000 (or fractional part thereof). It is a one-time tax on the contract — for example, a 1-year lease at ₱20,000/month (₱240,000 total rent) bears roughly ₱486. The landlord generally pays, filed on BIR Form 2080 within five days after the end of the month of signing.',
  },
  {
    q: 'Can a condo owner rent out their unit without asking anyone?',
    a: 'Check the condo corporation first. Philippine condominium law gives the corporation (through the master deed and by-laws) power to restrict or condition leases — some require board approval, a minimum lease term, or tenant registration with building administration. There is no national housing authority that approves residential subletting in the Philippines; the restrictions, if any, come from your condo corporation or homeowners association.',
  },
  {
    q: 'Is there a legal cap on rent or on how much deposit a landlord can ask?',
    a: 'There is no statutory cap on the deposit amount — it is whatever the parties agree. One month deposit plus one month advance for a 1-year lease is standard market practice. Rent itself is regulated only for covered units: under RA 9653 (the Rent Control Act, as extended), units renting at ₱10,000/month or below in the NCR and other highly urbanized cities (₱5,000 in other areas) get a 7% annual cap on rent increases while the same tenant stays.',
  },
  {
    q: 'Who pays utilities and repairs?',
    a: 'Whatever the agreement says. The default under the Civil Code is that the lessor must keep the property fit for its intended use (structural repairs), while ordinary maintenance caused by the tenant\'s use falls on the lessee. Utilities are on the tenant unless stated otherwise. Spell both out clause by clause — the most common disputes in Philippine rentals are deposit deductions for "damage" that nobody defined.',
  },
  {
    q: 'What makes a residential tenancy agreement enforceable in court?',
    a: 'Signature by both parties on every page, clear identification (full names, IDs annexed), an unambiguous description of the property, definite term and rent, and a lawful purpose. Documentary stamp tax compliance strengthens admissibility. If you want it to bind future owners of the property (leases of one year or more), notarize it so it becomes a public document.',
  },
]

export default function ResidentialTenancyAgreement() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-24 pb-16">
        <section className="max-w-3xl mx-auto px-4 pb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Residential Tenancy Agreement in the Philippines: What It Must Include
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            A residential tenancy agreement is the contract between a landlord (lessor) and a tenant (lessee) for a home — apartment, condo, house, or room. Philippine law treats leases as consensual, which means the deal is real even before paper. But the paper is what decides disputes. Here is what a proper Philippine residential tenancy agreement must contain, which rules actually govern it, and the stamp-duty and notarization steps that make it hold up.
          </p>
          <p className="text-navy-500 text-sm">
            New to tenancy paperwork? Start with the <Link href="/lease-agreement" className="text-brand-700 hover:underline">tenancy agreement overview</Link> for the full legal picture.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">The law that actually applies</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Residential leases in the Philippines are governed by two main sources. The <strong className="text-navy-800">Civil Code of the Philippines, Articles 1643–1688</strong> (Title VIII, Lease) sets the general rules — what a lease is, each party's obligations, when a lease renews by default, and when it must be in a public document. On top of that, <strong className="text-navy-800">RA 9653 (the Rent Control Act, as extended)</strong> covers low-rent residential units: those renting for ₱10,000/month or less in the NCR and other highly urbanized cities (₱5,000 or less in other areas). Covered units get a 7% annual cap on rent increases while the same tenant occupies the unit.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Everything outside those two — deposit size, utilities, repairs, entry notices, penalties — is whatever you write in the contract. That is the point: the agreement is the law between the parties, and silence is where disputes grow.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What the agreement must include</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Parties, identified.</strong> Full legal names as they appear on government IDs, plus ID details annexed. For a condo, confirm the signer is the registered unit owner (or has written owner authority).</li>
              <li><strong className="text-navy-800">The property.</strong> Complete address, unit/floor number, and a simple inventory of what comes with it (appliances, parking, key count).</li>
              <li><strong className="text-navy-800">Term.</strong> Exact start and end dates. If no period is agreed, Article 1687 steps in and the lease is deemed to run in the manner the rent is paid (monthly rent = month-to-month).</li>
              <li><strong className="text-navy-800">Rent, amount, and mechanics.</strong> Monthly amount in pesos, due date, payment channel, and to whom. State exactly what is included — association dues, water, electricity, internet.</li>
              <li><strong className="text-navy-800">Deposit and advance.</strong> How much, what it secures, what deductions are allowed, and the deadline for refund after move-out. Standard practice is one month deposit plus one month advance for a 1-year lease.</li>
              <li><strong className="text-navy-800">Repairs and maintenance.</strong> Structural to the landlord, day-to-day upkeep to the tenant — define the line, or the deposit becomes the battleground.</li>
              <li><strong className="text-navy-800">Termination and notice.</strong> How much notice each side gives, what breach justifies early termination, and what penalty applies. The Civil Code default requires notice before the lease simply lapses.</li>
              <li><strong className="text-navy-800">Use rules.</strong> Residential use only, occupants named, pets, subletting — including whether the unit is booked through platforms.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Condo and subdivision rules to check first</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Unlike countries with a national housing authority that governs public housing rentals, the Philippines has no central agency approving residential subletting. The gatekeepers are private: the <strong className="text-navy-800">condo corporation</strong> (master deed and by-laws) or the <strong className="text-navy-800">homeowners association</strong> of the subdivision. These can require board approval before you lease, set a minimum lease term (commonly six months or one year), cap occupants, require tenant registration with building administration, or restrict short-term platform rentals. Ask for the rules before signing — a lease that violates the by-laws can be blocked at the security desk on move-in day.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Stamp duty and notarization</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Every lease is a taxable document. Under the TRAIN Law (RA 10963), documentary stamp tax on a lease of real property is <strong className="text-navy-800">₱6 on the first ₱2,000 of total rent stipulated, plus ₱2 for each additional ₱1,000</strong> (or fractional part thereof). The landlord generally pays, filing <strong className="text-navy-800">BIR Form 2080 within five days after the end of the month of signing</strong>. Unstamped paper is not void between the parties, but it is inadmissible in court until the stamp is paid — the same trap as any lease document.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Notarization is separate from stamping and optional for validity. But under <strong className="text-navy-800">Article 1648</strong>, a lease running more than one year only binds third parties — like a buyer who acquires the property mid-lease — if it appears in a public document with its date insinuated on the registry. For a 1–2 year residential lease where the tenant wants to stay even if the property is sold, notarization is cheap insurance.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Get a complete agreement in minutes</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              PhLease builds a clause-by-clause residential tenancy agreement from a guided form — deposit, repairs, and termination terms written in, BIR-stampable, ₱500 to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lease-agreement" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Generate agreement — ₱500
              </Link>
              <Link href="/stamp-duty-tenancy-renewal" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Stamp duty guide
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
