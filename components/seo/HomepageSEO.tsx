import Link from 'next/link'
import EmailCapture from '@/components/ui/EmailCapture'

// Server component . Fully SSR, crawlable by Google
export default function HomepageSEO() {
  return (
    <section className="bg-slate-50 border-t border-slate-200 mt-8 py-14 px-4">
      <div className="max-w-3xl mx-auto">

        {/* About */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">
            Philippines Tenancy Agreement Generator
          </h2>
          <p className="text-navy-600 leading-relaxed mb-4">
            PhLease is a free online generator for Philippines Residential tenancy agreements. Whether you are a landlord renting out an Residential flat, a private condominium, or a room, our guided form produces a legally structured tenancy agreement in under 5 minutes. Free to preview, download from PHP ₱500.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Unlike a blank template you fill in manually, the generator builds the agreement around your specific property, parties, and terms. It prompts you for the relevant details and including the appropriate clauses based on your inputs. For standard Residential tenancies in Philippines, most landlords and tenants handle this without a lawyer.
          </p>
        </div>

        {/* Key features */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-5">What&apos;s Included</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { title: 'Residential & Private Property', desc: 'Covers condo units, apartments, townhouses, and room rentals. Appropriate clauses auto-included based on property type.' },
              { title: 'Diplomatic Clause', desc: 'Standard for expatriate tenants. Allows early termination on repatriation or job transfer.' },
              { title: 'Custom Clauses', desc: 'Aircon servicing, pet policy, minor repair threshold, no-smoking, CCTV, and more.' },
              { title: 'Stamp Duty Ready', desc: 'Generated agreements are structured for BIR stamping within 5 days after the end of the month of signing.' },
              { title: 'Inventory List', desc: 'Add furniture and fittings with condition notes, attached as a schedule to the agreement.' },
              { title: 'Tenancy Renewal', desc: 'Dedicated renewal flow for existing tenants. Generate a fresh renewal agreement quickly.' },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
                <h3 className="font-semibold text-navy-800 mb-1 text-sm">{f.title}</h3>
                <p className="text-sm text-navy-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick facts */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-navy-800 mb-5">Philippines Tenancy Agreement: Quick Reference</h2>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100 text-sm">
            {[
              { label: 'Documentary Stamp Tax', value: 'PHP 6.00 per ₱2,000 + PHP 2.00 per ₱1,000 of annual rent. Pay to BIR within 5 days' },
              { label: 'Security deposit', value: "Max 2 months deposit + 1 month advance (Rent Control Act). Negotiable for higher rent" },
              { label: 'Notice period', value: '30 days written notice (Civil Code Article 1687) (check your agreement)' },
              { label: 'Condo/HOA rules', value: 'Check condominium corporation or HOA bylaws for rental restrictions' },
              { label: 'Minimum tenancy (Residential)', value: '1 year (standard). No statutory minimum for private property' },
              { label: 'Diplomatic clause', value: "Allows early exit on repatriation or job transfer. Typically 30-60 days notice" },
              { label: 'Lawyer required?', value: 'No, for standard Philippines residential leases' },
            ].map((row, i) => (
              <div key={i} className="flex gap-4 px-5 py-3">
                <span className="font-semibold text-navy-700 w-48 shrink-0">{row.label}</span>
                <span className="text-navy-500">{row.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Email capture */}
        <EmailCapture />

        {/* Internal links */}
        <div>
          <h2 className="text-xl font-bold text-navy-800 mb-5">Philippines Tenancy Resources</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: '/lease-agreement', label: 'Tenancy Agreement Philippines', desc: 'Full guide: stamp duty, deposits, Residential rules, diplomatic clause.' },
              { href: '/residential-tenancy-agreement', label: 'Residential Tenancy Guide', desc: 'Guide to residential lease agreements in the Philippines.' },
              { href: '/room-rental-agreement', label: 'Room Rental Agreement Philippines', desc: 'Room rental terms, shared facilities, house rules.' },
              { href: '/tenancy-renewal', label: 'Tenancy Renewal Philippines', desc: 'How to renew a tenancy agreement in Philippines. Checklist and FAQ.' },
              { href: '/tenancy-agreement-template', label: 'Tenancy Agreement Template', desc: 'Why a guided generator beats a blank Word template.' },
                            { href: '/faq', label: 'Tenancy Agreement FAQ', desc: 'All common questions: stamp duty, deposits, diplomatic clause, and more.' },
            ].map((l, i) => (
              <Link key={i} href={l.href} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 hover:border-brand-300 transition-colors">
                <p className="font-semibold text-navy-800 text-sm">{l.label}</p>
                <p className="text-xs text-navy-500 mt-0.5">{l.desc}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
