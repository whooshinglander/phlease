import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Room Rental Renewal Philippines — Master & Common Room',
  description: 'How room rental renewal works in Philippines: condo rules, master vs common room rent ranges, shared facilities, house rules. Plain English, no fluff.',
  keywords: 'room rental renewal philippines, renew room rental philippines, common room renewal, master bedroom rental renewal, philippines room renewal',
  alternates: { canonical: 'https://phlease.com/room-rental-renewal' },
  openGraph: {
    title: 'Room Rental Renewal in Philippines — Master & Common Room Specifics',
    description: 'Room renewal: condo rules, master vs common rent, shared facilities, house rules. Plain English.',
    url: 'https://phlease.com/room-rental-renewal',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'article',
  },
}

const FAQS = [
  {
    q: 'Do I need government approval to renew a room rental?',
    a: "No, room rentals in the Philippines don't require approval from any housing authority. As long as you (the owner-occupier) still live in the unit, you can rent out rooms freely. However, check your condominium corporation or HOA bylaws — some buildings have rules restricting or requiring notice for room rentals. If a new tenant replaces an old one, update the lease agreement accordingly.",
  },
  {
    q: 'Are there occupancy limits for room rentals in the Philippines?',
    a: "There is no national occupancy cap for room rentals in the Philippines. However, condominium corporations and homeowners associations (HOAs) may have their own rules on maximum occupants per unit. Check your building's master deed or by-laws. Local barangay ordinances may also apply. Always verify with your building management before adding new tenants.",
  },
  {
    q: 'What are typical rents for master vs common room on renewal?',
    a: "Master bedroom typically goes for ₱15,000 to ₱35,000 a month, common room for ₱8,000 to ₱18,000, depending on area, proximity to transport, condition, and whether the room has its own bathroom. Central areas (Makati, BGC, Ortigas) sit at the top of those ranges. Suburban areas (Quezon City, Mandaluyong, Pasig) sit lower. On renewal, a small increase (₱1,000–₱3,000) is usually reasonable if your tenant has been good and you don't want to risk turnover.",
  },
  {
    q: 'Why does master bedroom command so much more than common room?',
    a: "Three reasons. First, size — master is usually 30–50% bigger. Second, attached bathroom in most units means no sharing for the master tenant. Third, master rooms typically have better windows and ventilation. The premium of roughly ₱5,000–₱15,000 over a common room reflects all three. If your master doesn't have an attached bathroom, the gap narrows.",
  },
  {
    q: 'How do I write shared facilities into the renewal?',
    a: "List them explicitly in the agreement: kitchen, laundry area, common bathroom (if shared), living room, balcony, parking slot if applicable. Specify what's included (gas/water for cooking, washing machine usage) and any limits (laundry hours, no overnight kitchen use). The previous tenancy probably had something — copy what's been working and tighten the wording on anything that caused friction during the term.",
  },
  {
    q: 'Do utilities reset on renewal or just continue?',
    a: "If you've been splitting utilities (typical for room rentals — usually equally between tenants, or owner pays a fixed share), the arrangement carries forward unless either side wants to change it. Renewal is a clean point to switch from 'split equally' to 'fixed amount per month' or vice versa, especially if one tenant uses noticeably more than the others. Write the new arrangement clearly in the renewal agreement so there's no argument month to month.",
  },
  {
    q: 'When should I switch from per-room rentals to renting out the whole unit?',
    a: "Three signals: high tenant turnover (more than 1 swap per room per year), recurring conflict between tenants over shared facilities, or the owner-occupier (you) actually moving out. Whole-unit rental is simpler to manage — one tenant, one rent, one set of utilities. The flip side: per-room usually grosses more total rent, so you're trading yield for simplicity.",
  },
  {
    q: 'Can I let two tenants share the same room on renewal?',
    a: "Generally yes, but check your condo corporation or HOA rules first. Some buildings restrict the number of occupants per bedroom. If a tenant asks to share a room (often to split rent), make sure it doesn't violate any building rules or local ordinances. For couples or family members sharing a room, that's typically fine, but clarify in the agreement how utilities are split.",
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
  headline: 'Room Rental Renewal in Philippines — Master & Common Room Specifics',
  description: 'Room rental renewal walkthrough: condo rules, master vs common room rent ranges, shared facilities, house rules, when to switch to whole-unit.',
  url: 'https://phlease.com/room-rental-renewal',
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
    { '@type': 'ListItem', position: 3, name: 'Room Rental Renewal' },
  ],
}

export default function RoomRentalRenewalPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main className="flex-1">

        <section className="max-w-3xl mx-auto px-4 py-14">
          <div className="inline-block bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase">
            Room Rental Renewal
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-800 mb-5 leading-tight">
            Room Rental Renewal in Philippines — Master & Common Room
          </h1>
          <p className="text-navy-600 text-base sm:text-lg leading-relaxed mb-3">
            Renting out a master or common room while you live in the unit is a common setup in the Philippines. The renewal process is straightforward — no government approvals needed — but a few things still trip people up: condo corporation rules, how shared facilities get handled, and whether utilities carry forward. This page covers the room-specific stuff.
          </p>
          <p className="text-navy-500 text-sm">
            For whole-unit renewals, see the <Link href="/tenancy-renewal" className="text-brand-700 hover:underline">general renewal guide</Link>.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Key considerations for room rentals on renewal</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">Owner-occupier setup</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                You (the owner or primary lessee) need to keep living in the unit for it to be a room rental arrangement. If you've moved out and are renting out all the rooms, that's a whole-unit lease, which may have different rules — especially if the unit is in a condominium with restrictions on subletting. On renewal, confirm that the owner-occupier setup is still intact.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">Condo corporation and HOA rules</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Unlike Singapore, the Philippines has no national housing authority governing room rentals. However, condominium corporations and homeowners associations may have their own rules. Check your building's master deed or by-laws for any restrictions on room rentals, maximum occupants, or tenant registration requirements. Some condos require you to register tenants with the building admin.
              </p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <p className="font-semibold text-navy-800 mb-2">Renewal agreement update</p>
              <p className="text-navy-600 text-sm leading-relaxed">
                Same tenant renewing? Update the agreement with new dates and any changed terms. New tenant replacing an old one? Draft a fresh agreement. No government portal registration is needed — just a signed agreement between you and the tenant. Don't forget to pay Documentary Stamp Tax (DST) to BIR within 5 days after the end of the month of signing.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Master vs common room — the rent gap</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Typical 2026 ranges across Philippines:
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 mb-4">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Master bedroom:</strong> ₱15,000 to ₱35,000/month. Top of range for central locations (Makati, BGC, Ortigas) near transport hubs. Bottom of range for suburban areas (Quezon City, Mandaluyong, Pasig).</li>
              <li><strong className="text-navy-800">Common room:</strong> ₱8,000 to ₱18,000/month. Same area logic applies. A common room with attached bathroom in a newer condo can hit master-room territory.</li>
              <li><strong className="text-navy-800">The gap:</strong> roughly ₱5,000–₱15,000. Driven by size (master is 30–50% bigger), attached bathroom (no sharing), and better windows/ventilation in most layouts.</li>
            </ul>
          </div>
          <p className="text-navy-600 text-sm leading-relaxed">
            On renewal, a ₱1,000–₱3,000 increase is usually reasonable if the tenant has been good and you don't want to risk a swap. Going hard on a hike often costs you a month of vacancy plus the time of finding and vetting a new tenant — usually not worth it for a few thousand extra rent.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Shared facilities — write them in the renewal</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            The renewal agreement should spell out what's shared and how. Vague wording is where disputes start. List each:
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Kitchen.</strong> Tenant has access for cooking, included gas/water in utilities, any limits on cooking hours or strong-smelling food.</li>
              <li><strong className="text-navy-800">Laundry.</strong> Washing machine usage included or with quota, drying area access, hours if there's a quiet rule.</li>
              <li><strong className="text-navy-800">Common bathroom.</strong> Only relevant if the tenant doesn't have attached. Specify schedule rules if multiple tenants share it during peak hours.</li>
              <li><strong className="text-navy-800">Living room and common areas.</strong> Whether the tenant can use them, whether guests can be entertained there.</li>
              <li><strong className="text-navy-800">Parking.</strong> If the unit has a parking slot and you're including it, name it. Otherwise default is no parking included.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">Utilities on renewal — reset or continue?</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            Two common setups for room rentals:
          </p>
          <ul className="space-y-2 text-navy-600 text-sm mb-4 pl-5 list-disc">
            <li><strong className="text-navy-800">Equal split.</strong> Total utility bill divided by number of occupants (including you). Simple, fair if usage is similar.</li>
            <li><strong className="text-navy-800">Fixed amount per month.</strong> ₱1,000–₱3,000 per tenant per month, owner absorbs the rest. Predictable for the tenant, you take the variance.</li>
          </ul>
          <p className="text-navy-600 text-sm leading-relaxed">
            Renewal is a clean point to switch between the two if the existing arrangement has been creating friction. If one tenant uses way more (long showers, AC running constantly), moving them to a fixed higher amount or switching to equal-split sub-metering is a fair conversation to have at renewal. Whatever you land on, write it into the new agreement explicitly.
          </p>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-10">
          <h2 className="text-2xl font-bold text-navy-800 mb-4">House rules on renewal</h2>
          <p className="text-navy-600 text-sm leading-relaxed mb-4">
            If the existing house rules have been working, copy them forward. If something's been a problem, this is the moment to tighten the wording. The usual list:
          </p>
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <ul className="space-y-3 text-navy-600 text-sm">
              <li><strong className="text-navy-800">Visitors.</strong> Allowed during reasonable hours, common areas only or tenant's room only, your call.</li>
              <li><strong className="text-navy-800">Overnight guests.</strong> Most landlords allow occasional overnight stays, some draw a hard line. If you allow them, cap at a number of nights per month so it doesn't drift into a second occupant.</li>
              <li><strong className="text-navy-800">Cooking.</strong> What's allowed in the kitchen — heavy frying, hours.</li>
              <li><strong className="text-navy-800">Smoking.</strong> Default is no smoking inside the unit. Balcony or outside building only, if at all.</li>
              <li><strong className="text-navy-800">Pets.</strong> Default is no pets unless explicitly agreed. Check condo/HOA rules on approved pets.</li>
              <li><strong className="text-navy-800">Quiet hours.</strong> Usually 10pm to 7am — matters more in shared units with thin walls.</li>
            </ul>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-12">
          <div className="bg-gradient-to-br from-brand-50 to-white border border-brand-200 rounded-2xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl font-bold text-navy-800 mb-3">Generate your room rental renewal</h2>
            <p className="text-navy-500 mb-6 max-w-xl mx-auto text-sm">
              Renewal-ready form for master or common room rentals. Shared facilities, house rules, utility split, all pre-filled. Free preview, ₱500 to download.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/renew" className="inline-block bg-brand-600 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-brand-700 transition-colors">
                Start renewal — ₱500
              </Link>
              <Link href="/tenancy-renewal" className="inline-block bg-white text-navy-700 border border-slate-200 px-7 py-3.5 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                Whole-unit renewal guide
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
