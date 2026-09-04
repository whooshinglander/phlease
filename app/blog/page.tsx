import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Philippine Lease Guides — Contracts, DST, Deposits | PhLease',
  description: 'Plain guides to leasing in the Philippines: contract of lease essentials, BIR documentary stamp tax, deposits, condo rules, and renewals under the Civil Code and RA 9653.',
  alternates: { canonical: 'https://phlease.com/blog' },
}

const groups = [
  {
    "name": "Contracts",
    "posts": [
      {
        "href": "/lease-agreement",
        "title": "Contract of Lease — What It Must Contain",
        "desc": "Essential clauses under Civil Code Arts. 1643–1688 and when to notarize (Art. 1648).",
        "tag": "Contracts"
      },
      {
        "href": "/residential-tenancy-agreement",
        "title": "Residential Lease Agreement Guide",
        "desc": "The full residential lease walkthrough, DST included.",
        "tag": "Contracts"
      },
      {
        "href": "/tenancy-agreement-template",
        "title": "Lease Templates: Condo vs House & Lot vs Room",
        "desc": "Which clauses change by property type.",
        "tag": "Contracts"
      },
      {
        "href": "/tenancy-agreement-pdf",
        "title": "How the Lease PDF Is Built",
        "desc": "What comes inside and how DST-readiness works.",
        "tag": "Contracts"
      },
      {
        "href": "/room-rental-agreement",
        "title": "Room Lease Agreements",
        "desc": "Bedspace and room rentals: utilities, house rules, deposit norms.",
        "tag": "Contracts"
      }
    ]
  },
  {
    "name": "Money & tax",
    "posts": [
      {
        "href": "/stamp-duty-tenancy-renewal",
        "title": "Documentary Stamp Tax on Leases (BIR)",
        "desc": "TRAIN rates (₱6 + ₱2/₱1,000), Form 2080, and the 5-day filing window.",
        "tag": "Money"
      },
      {
        "href": "/security-deposit-tenancy-renewal",
        "title": "Lease Deposits in the Philippines",
        "desc": "The 2-month standard, lawful deductions, refund norms.",
        "tag": "Money"
      },
      {
        "href": "/rent-increase-tenancy-renewal",
        "title": "Rent Increases & RA 9653 Rent Control",
        "desc": "The 7% cap on covered units and how it shapes renewals.",
        "tag": "Money"
      },
      {
        "href": "/lease-lock-fee",
        "title": "The Lease-Lock Fee Explained",
        "desc": "Manila’s security-of-tenancy fee — what it is and who pays.",
        "tag": "Money"
      }
    ]
  },
  {
    "name": "Renewing & ending",
    "posts": [
      {
        "href": "/residential-tenancy-renewal-guide",
        "title": "Renewing a Residential Lease",
        "desc": "Implied renewal (Art. 1682), new DST, and re-papering.",
        "tag": "Renewals"
      },
      {
        "href": "/tenancy-renewal-guide",
        "title": "Renewal of Tenancy Agreement",
        "desc": "The renewal paths and what to re-negotiate.",
        "tag": "Renewals"
      },
      {
        "href": "/tenancy-renewal-checklist",
        "title": "Renewal Checklist",
        "desc": "Everything to re-verify at renewal.",
        "tag": "Renewals"
      },
      {
        "href": "/renew",
        "title": "Renew Your Lease (2-Minute Flow)",
        "desc": "Updated dates and rent, DST-ready.",
        "tag": "Renewals"
      }
    ]
  },
  {
    "name": "Property & tenants",
    "posts": [
      {
        "href": "/private-property-tenancy-renewal",
        "title": "Condo Leases: Corporation Rules",
        "desc": "Condominium corporations, PD 957 HOAs, and billing who actually owes.",
        "tag": "Property"
      },
      {
        "href": "/foreign-tenant-renewal",
        "title": "Foreign & OFW Tenant Leases",
        "desc": "Passport/Alien Certificate registration and term alignment.",
        "tag": "Property"
      },
      {
        "href": "/landlord-renewal-vs-find-new-tenant",
        "title": "Landlord: Renew or Re-let?",
        "desc": "Vacancy math and the honest tenant-quality call.",
        "tag": "Property"
      },
      {
        "href": "/common-tenancy-renewal-pitfalls",
        "title": "Common Renewal Pitfalls",
        "desc": "Mistakes that cost deposits and term.",
        "tag": "Property"
      }
    ]
  }
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: groups.flatMap((g, gi) =>
    g.posts.map((p, pi) => ({
      '@type': 'ListItem',
      position: gi * 10 + pi + 1,
      name: p.title,
      url: 'https://phlease.com' + p.href,
    }))),
}

export default function BlogPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-14">
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-4">Philippine Lease Guides</h1>
        <p className="text-navy-600 text-base sm:text-lg leading-relaxed">Everything we know about leasing out and leasing in the Philippines — grounded in the Civil Code provisions on Lease (Arts. 1643–1688), RA 9653, and BIR stamp rules. Each guide ends with the document step you need.</p>

        {groups.map(g => (
          <section key={g.name} className="pt-10">
            <h2 className="text-xl font-bold text-navy-800 mb-4">{g.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {g.posts.map(p => (
                <Link key={p.href} href={p.href} className="block bg-white rounded-xl border border-slate-200 shadow-sm p-5 hover:border-brand-300 transition-colors">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wide text-brand-700 bg-brand-50 rounded-full px-2 py-0.5 mb-2">{p.tag}</span>
                  <p className="font-semibold text-navy-800 mb-1 leading-snug">{p.title}</p>
                  <p className="text-navy-500 text-sm leading-relaxed">{p.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        ))}

        <section className="pt-14 pb-4">
          <div className="border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Ready to sign?</h2>
            <p className="text-navy-500 mb-6 text-sm max-w-xl mx-auto">Generate a Philippine contract of lease — DST-ready, for condo, house & lot, or room. Free preview, PDF from ₱500.</p>
            <Link href="/" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">Create your contract →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
