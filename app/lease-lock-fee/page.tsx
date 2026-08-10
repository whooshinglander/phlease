import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Lease Lock Fee Philippines: Refundable or Not? | PhLease',
  description: 'What a lease lock fee is in the Philippines, how much landlords typically charge to hold a unit, when it is refundable versus forfeited, how it differs from a security deposit, and the red flags that signal a scam.',
  keywords: 'lease lock fee philippines, lock fee refundable philippines, holding fee rental philippines, reservation fee apartment philippines, is lock fee refundable, lock fee vs security deposit',
  alternates: { canonical: 'https://phlease.com/lease-lock-fee' },
  openGraph: {
    title: 'Lease Lock Fee Philippines: Refundable or Not?',
    description: 'What a lock fee is, typical amounts, when it is refundable versus forfeited, how it differs from a security deposit, and how to protect yourself.',
    url: 'https://phlease.com/lease-lock-fee',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Is a lease lock fee refundable in the Philippines?',
    a: "Only if the agreement says so. There is no law in the Philippines that forces a landlord to refund a lock fee — it is a private contractual arrangement. If the written agreement (or receipt) states it is refundable if you back out before signing, then it is. If it says 'non-refundable', it is forfeited. If nothing is written down, you are relying on the landlord's word, which is exactly the situation that leads to disputes. Always get the refund terms in writing before you pay.",
  },
  {
    q: 'How much is a typical lock fee?',
    a: "There is no fixed rate. In practice, lock fees in the Philippines range from a few thousand pesos to as much as one month's rent, depending on how in-demand the unit is and how long the landlord is willing to hold it. A common pattern is one month's rent as a lock fee that converts into the first month's rent or the security deposit when you sign. Whatever the amount, it should be stated clearly and in writing before you hand over cash.",
  },
  {
    q: 'Is a lock fee the same as a security deposit?',
    a: "No. A lock fee is paid before signing to hold the unit off the market while you decide or complete paperwork. A security deposit is paid at signing and held by the landlord for the term to cover unpaid rent or damage. They serve different purposes and are usually separate amounts. Sometimes a lock fee is structured to convert into part of the deposit or first month's rent at signing — but that conversion only happens if the agreement says so.",
  },
  {
    q: 'What happens to the lock fee if I sign the lease?',
    a: "That depends entirely on what you agreed. In many arrangements the lock fee converts into the first month's rent or is applied to the security deposit once the tenancy agreement is signed. In others it is a separate, non-refundable charge just to hold the unit. Get the conversion or application written into the receipt or a short reservation agreement before paying, so there is no ambiguity about what the money becomes at signing.",
  },
  {
    q: 'Can a landlord keep my lock fee if I change my mind?',
    a: "Yes, if the agreement says the fee is non-refundable or forfeited if you back out. That is the standard purpose of a lock fee — it compensates the landlord for taking the unit off the market. The key is that the forfeiture terms must have been agreed in writing. If the landlord promised a refund verbally but the written receipt says non-refundable, the written document will generally control in a dispute. Read the receipt before you pay.",
  },
  {
    q: 'Is a lock fee legal in the Philippines?',
    a: "Yes. There is no law prohibiting a landlord from charging a fee to hold a unit, and no law capping the amount. It is a private contractual matter governed by the Civil Code's rules on obligations and contracts. What is illegal is misrepresenting the fee — for example, demanding a lock fee for a unit that does not exist, or refusing to honour a written refund promise. If you suspect fraud, report it to the barangay or the police.",
  },
  {
    q: 'What should a lock fee receipt or agreement include?',
    a: "A proper lock fee receipt or short reservation agreement should state: (1) the exact amount paid and the date, (2) the property address and unit, (3) the name of the landlord or agent receiving it, (4) how long the unit is held, (5) whether the fee is refundable or non-refundable and under what conditions, (6) what the fee converts to at signing (e.g. first month's rent or deposit), and (7) both parties' signatures. If any of these are missing, ask for them in writing before you pay.",
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
  headline: 'Lease Lock Fee Philippines: Refundable or Not?',
  description: 'What a lease lock fee is in the Philippines, typical amounts, when it is refundable versus forfeited, how it differs from a security deposit, red flags, and how to protect yourself.',
  url: 'https://phlease.com/lease-lock-fee',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://phlease.com/' },
    { '@type': 'ListItem', position: 2, name: 'Lease Lock Fee Philippines' },
  ],
}

export default function LeaseLockFeePage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="flex-1">

        <section className="max-w-3xl mx-auto px-4 py-14">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Lease Lock Fee
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Lease Lock Fee in the Philippines: Refundable or Not?
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            A lease lock fee — sometimes called a reservation or holding fee — is money a prospective tenant pays to take a unit off the market before the tenancy agreement is signed. It is common in the Philippines, especially for in-demand condos and apartments. The catch is that whether you ever see that money again depends entirely on what was agreed in writing. Here is how it works, what it typically costs, and how to protect yourself.
          </p>
          <p className="text-navy-500 text-sm">
            Once you sign, the money you put down usually becomes part of the deposit. See the <Link href="/security-deposit-tenancy-renewal" className="text-brand-700 hover:underline">security deposit guide</Link> for how deposits behave over the life of a tenancy.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">What a lease lock fee is</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            A lock fee is paid before you sign a tenancy agreement, to hold the unit while you finish your decision or paperwork. In exchange, the landlord agrees not to show or rent the unit to anyone else for an agreed period — usually a few days to a couple of weeks. It is a private contractual arrangement, not something the law regulates. There is no Philippines statute that sets a standard amount or forces a refund.
          </p>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Because it sits in a legal grey area, the single most important thing is that the terms are in writing before you pay. The money itself is not the problem — the problem is paying it without a clear, signed record of what happens to it.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">How much is a typical lock fee?</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            There is no fixed rate in the Philippines. In practice, lock fees range from a few thousand pesos up to one month's rent. The amount usually reflects how desirable the unit is and how long the landlord is willing to hold it off the market.
          </p>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <p className="font-semibold text-navy-800 mb-2">Common patterns</p>
            <ul className="space-y-2 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Flat fee.</strong> A fixed amount (e.g. ₱5,000) just to hold the unit, often non-refundable.</li>
              <li><strong className="text-navy-800">One month's rent.</strong> A common structure where the lock fee equals one month's rent and converts into the first month's rent or the security deposit when you sign.</li>
              <li><strong className="text-navy-800">Percentage of rent.</strong> Some landlords ask for a fraction of the first month's rent as a good-faith holding fee.</li>
            </ul>
          </div>
          <p className="text-navy-500 text-sm leading-relaxed mt-4">
            Whatever the amount, it should be stated clearly and in writing before you hand over cash. If a landlord asks for a large, unexplained sum with no written terms, treat it as a red flag.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">When a lock fee is refundable vs not</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            There is no legal default. Refundability is whatever the written agreement says. The two realistic outcomes:
          </p>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">Refundable</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                If the receipt or reservation agreement says the fee is refundable should you back out before signing, then it is. Some landlords refund in full; others refund minus a small administrative charge. The refund terms should name the condition that triggers a refund (e.g. "if the tenant decides not to proceed within 7 days") and how it is returned.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">Non-refundable / forfeited</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                If the agreement says the fee is non-refundable or is forfeited if you change your mind, the landlord can keep it. That is the standard purpose of a lock fee — it compensates the landlord for taking the unit off the market. The fee is also typically forfeited if you fail to sign by the agreed deadline.
              </p>
            </div>
          </div>
          <p className="text-navy-500 text-sm leading-relaxed mt-4">
            The critical point: if the refund promise was only verbal and the written receipt says non-refundable, the written document will generally control in a dispute. Read the receipt before you pay, not after.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Lock fee vs security deposit</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            They are different things, though they are often confused because a lock fee sometimes converts into a deposit at signing.
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Lock fee.</strong> Paid before signing, to hold the unit off the market. Small to one month's rent. May be refundable or non-refundable depending on the agreement.</li>
              <li><strong className="text-navy-800">Security deposit.</strong> Paid at signing and held by the landlord for the whole term, to cover unpaid rent or damage. Typically one month's rent for a 1-year lease, two months for a 2-year lease. Refunded at the end (minus legitimate deductions) if the tenancy ends cleanly.</li>
              <li><strong className="text-navy-800">Conversion.</strong> Many landlords structure the lock fee to convert into the first month's rent or part of the security deposit when you sign. That conversion only happens if the agreement says so — otherwise the lock fee and the deposit are separate amounts.</li>
            </ul>
          </div>
          <p className="text-navy-500 text-sm leading-relaxed mt-4">
            For how deposits are handled at the end of a tenancy — carryover, top-up, refund — see the <Link href="/security-deposit-tenancy-renewal" className="text-brand-700 hover:underline">security deposit guide</Link>.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Red flags to watch for</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Lock fees are a favourite tool of rental scammers because they are paid before any contract exists. Walk away from any of these:
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Fee demanded before you view the unit.</strong> Never pay to hold a unit you have not seen in person. Scammers list units that do not exist or are not theirs to rent.</li>
              <li><strong className="text-navy-800">No written receipt.</strong> If the landlord or agent will not give a signed receipt stating the amount, date, and purpose, do not pay. A verbal arrangement gives you nothing to enforce.</li>
              <li><strong className="text-navy-800">No refund policy.</strong> If they refuse to state in writing whether the fee is refundable and under what conditions, treat it as a red flag.</li>
              <li><strong className="text-navy-800">Pressure to pay immediately.</strong> "Another tenant is about to take it — pay now" is a classic scam line. A legitimate landlord will let you read the terms first.</li>
              <li><strong className="text-navy-800">Payment to a personal account of an unknown agent.</strong> Verify the person is actually the owner or a licensed agent before sending money.</li>
              <li><strong className="text-navy-800">Unit advertised far below market.</strong> Prices that look too good to be true usually are, and the lock fee is how the scam collects before you realise it.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">How to protect yourself</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            A little paperwork before you pay turns a risky handover of cash into a clean, enforceable arrangement. Do these four things:
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Get a written agreement.</strong> A short reservation agreement or a receipt that states the amount, the property, the hold period, and both parties' names. If the landlord refuses to put it in writing, that is your answer.</li>
              <li><strong className="text-navy-800">Demand a signed receipt.</strong> The receipt should name the property and unit, the amount, the date, who received it, and the purpose (hold the unit). Keep a copy.</li>
              <li><strong className="text-navy-800">Agree the refund terms in writing.</strong> State explicitly whether the fee is refundable or non-refundable, under what conditions it is returned or forfeited, and what it converts to at signing (e.g. first month's rent or deposit).</li>
              <li><strong className="text-navy-800">Set a signing deadline.</strong> Agree in writing how long the unit is held and what happens if you do not sign by then. This protects both sides from endless ambiguity.</li>
            </ul>
          </div>
          <p className="text-navy-500 text-sm leading-relaxed mt-4">
            When you do sign, make sure the full tenancy agreement — including the deposit and how the lock fee is applied — is properly documented. Use a <Link href="/tenancy-agreement-template" className="text-brand-700 hover:underline">tenancy agreement template</Link> that covers all the clauses, and remember to stamp it with BIR so it is admissible in court if you ever need it.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Get your tenancy agreement right</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              A complete, BIR-stampable tenancy agreement with deposit and payment clauses built in. Free preview, ₱500 to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/lease-agreement" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Generate agreement — ₱500
              </Link>
              <Link href="/tenancy-agreement-template" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Tenancy agreement template
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
