import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

const URL = 'https://phlease.com/about'

export const metadata: Metadata = {
  title: 'About PhLease — Who We Are | PhLease',
  description: 'PhLease is run by an independent developer under Fifteenoneone Private Limited. How our Philippine lease contracts and guides are built, verified against the Civil Code and BIR sources, and priced.',
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PhLease',
  url: 'https://phlease.com',
  description: 'Philippines residential lease contract generator — condo, house and lot, and room rentals.',
  parentOrganization: { '@type': 'Organization', name: 'Fifteenoneone Private Limited' },
  areaServed: 'Philippine',
}

export default function AboutPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Header />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-12">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-6">About PhLease</h1>

        <div className="space-y-6 text-navy-600 leading-relaxed text-[15px]">
          <p>
            PhLease is a document tool for Philippine landlords and tenants: you fill in the terms, we generate a Philippine contract of lease (condo, house & lot, or room) — ready to sign, stamp, and use. It started as one builder&apos;s own frustration: helping a friend rent out a condo in Manila, the &ldquo;Philippine&rdquo; templates online turned out to be foreign law with the country name swapped.
          </p>

          <h2 className="text-lg font-semibold text-navy-800 pt-2">Who runs it</h2>
          <p>
            PhLease is built and maintained by Ronald, an independent developer in Singapore, and operated under <strong className="text-navy-800">Fifteenoneone Private Limited</strong> (Singapore) — the same company name you&apos;ll see on your payment receipt. It&apos;s a small portfolio of practical rental tools for the Philippines, Singapore, Thailand and Malaysia; no call center, no sales team — when you email, the person who built the tool answers.
          </p>

          <h2 className="text-lg font-semibold text-navy-800 pt-2">How the documents and guides are kept accurate</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Every fee, rate, and legal point in our guides is checked against <strong className="text-navy-800">primary sources</strong> — the Civil Code provisions on Lease (Arts. 1643–1688), RA 9653, and BIR documentary stamp rules — not copied from other blogs.</li>
            <li>Contract clauses follow standard Philippine rental practice and the terms you enter on the checkout review screen go into your document verbatim.</li>
            <li>When a law or rate changes, we update the affected guides and note the change — the pages you read carry &ldquo;last checked&rdquo; references to the source.</li>
            <li>We don&apos;t use your data: form answers stay in your browser until you pay, the PDF is generated once for delivery, and we don&apos;t keep or share signed agreements.</li>
          </ul>

          <h2 className="text-lg font-semibold text-navy-800 pt-2">What PhLease is not</h2>
          <p>
            We&apos;re not a law firm and this is not legal advice. The generator produces well-structured documents based on common Philippine practice — for disputes, unusual arrangements, or anything high-value, spend an hour with a qualified Philippine lawyer. If a guide or clause ever looks out of date, email us and we&apos;ll fix it — corrections from real users have improved every page on this site.
          </p>

          <h2 className="text-lg font-semibold text-navy-800 pt-2">Pricing, plainly</h2>
          <p>
            Standard PDFs are ₱500, custom advanced clauses ₱800. Preview the full document free before you pay — what you see is exactly what you get.
          </p>

          <h2 className="text-lg font-semibold text-navy-800 pt-2">Renting in another country</h2>
          <p>
            We run the same tool for the other markets:
            <a href="https://sgtenancy.com" className="text-brand-700 hover:underline">Singapore</a> <a href="https://sanyathai.com" className="text-brand-700 hover:underline">Thailand</a> and <a href="https://sewa2u.com" className="text-brand-700 hover:underline">Malaysia</a>.
          </p>

          <p className="text-sm text-navy-400 pt-4">
            Questions, corrections, or partnership ideas: <a href="mailto:whooshinglander@gmail.com" className="text-brand-700 hover:underline">whooshinglander@gmail.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
