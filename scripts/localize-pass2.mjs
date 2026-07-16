#!/usr/bin/env node
/**
 * Second pass: fix remaining SG-specific content in pages
 */
import { readFileSync, writeFileSync } from 'fs'

const ROOT = '/home/whooshinglander/projects/phlease'

function read(path) {
  return readFileSync(path, 'utf-8')
}

function write(path, content) {
  writeFileSync(path, content, 'utf-8')
  console.log(`  ✓ ${path.replace(ROOT, '')}`)
}

// ─── room-rental-renewal ───────────────────────────────────────────────
let p = `${ROOT}/app/room-rental-renewal/page.tsx`
let c = read(p)
c = c.replace(
  "No, room rentals work differently from whole-flat subletting. As long as you (the owner-occupier) still live in the flat, residential doesn't require a separate subletting approval per room. You do still need to register the tenants under residential's Renting of Bedrooms scheme via the residential portal, and that registration carries over on renewal as long as the same tenants stay. If a new tenant replaces an old one, update the registration with the new tenant's details before they move in.",
  "No, room rentals in the Philippines don't require approval from a central housing authority. As long as you (the owner-occupier) still live in the unit, you can rent out rooms. Check your condominium corporation or HOA bylaws for any restrictions on room rentals. If a new tenant replaces an old one, update the lease agreement accordingly."
)
c = c.replace(
  "Yes, and it's the most common thing landlords forget. The cap is 4 unrelated tenants total for a 4-room or larger flat, and 2 unrelated tenants for a 3-room flat. That total includes everyone living in the flat besides the owner's family, across all rooms. If you renew with the same tenants and you're already at the cap, you're fine. If you're renewing one room and adding a new tenant in another room, double-check the headcount before signing.",
  "In the Philippines, there is no national occupancy cap for room rentals. However, condominium corporations and HOAs may have their own rules on maximum occupants. Check your building's bylaws. Local ordinances (barangay rules) may also apply. Always verify with your building management before adding new tenants."
)
write(p, c)

// ─── landlord-renewal-vs-find-new-tenant ───────────────────────────────
p = `${ROOT}/app/landlord-renewal-vs-find-new-tenant/page.tsx`
c = read(p)
c = c.replace(
  "Two to four weeks is the realistic range for a properly priced unit in a normal market. residential flats in mature estates and condos near MRT stations sit at the shorter end. Older walk-ups, units with awkward layouts, or anything priced 5%+ above the  SRX median tend to drag past a month. Budget 3 weeks of vacancy as the planning baseline. If your unit is luxury (above $8,000/month) or in a slow segment, plan for 6 to 8 weeks.",
  "Two to four weeks is the realistic range for a properly priced unit in a normal market. Condo units in prime locations (Makati, BGC, Ortigas) and apartments near transport hubs sit at the shorter end. Older walk-ups, units with awkward layouts, or anything priced above market tend to drag past a month. Budget 3 weeks of vacancy as the planning baseline."
)
c = c.replace(
  "Industry norm: full one-month commission split between landlord agent and tenant agent for a new tenancy (so the landlord typically pays half a month if there are co-broke agents on both sides, or one full month if a single agent represents both ends). For a renewal, the convention is half a month, paid by the landlord. Some agents waive the renewal commission entirely if the original deal was theirs and the tenant didn't move. Always confirm in writing before the renewal is signed.",
  "Industry norm in the Philippines: one-month commission for a new lease (shared between landlord's and tenant's agents if co-broke, or one full month if a single agent represents both). For a renewal, the convention is half a month, paid by the landlord. Some agents waive the renewal commission entirely if the original deal was theirs and the tenant didn't move. Always confirm in writing before the renewal is signed."
)
write(p, c)

// ─── diplomatic-clause-tenancy-renewal ─────────────────────────────────
p = `${ROOT}/app/diplomatic-clause-tenancy-renewal/page.tsx`
c = read(p)
c = c.replace(
  "It's an early termination clause that lets a foreign tenant break the lease without paying out the remaining rent if their work pass is cancelled or not renewed, or if their employer transfers them out of Philippines. The standard structure activates after 12 months of the tenancy, with 2 months of written notice plus proof from the employer. Outside that scenario, the tenant is still bound by the full term.",
  "It's an early termination clause that lets a foreign tenant break the lease without paying out the remaining rent if their visa is cancelled or not renewed, or if their employer transfers them out of the Philippines. The standard structure activates after 12 months of the lease, with 30-60 days of written notice plus proof from the employer. Outside that scenario, the tenant is still bound by the full term."
)
c = c.replace(
  "Foreign tenants whose right to live in Philippines depends on a work pass \u2014 Employment Pass (EP), S Pass, or Work Permit holders, plus their dependents on a DP. The logic of the clause is that they can be forced to leave Philippines through no fault of their own (retrenchment, transfer, pass not renewed by MOM). Filipinos, PRs, and Long-Term Visit Pass holders generally don't qualify because they don't face that risk.",
  "Foreign tenants whose right to live in the Philippines depends on a visa \u2014 9G work visa, 47(a)(2), Special Resident Retiree's Visa (SRRV), or other temporary resident visa holders. The logic of the clause is that they can be forced to leave the Philippines through no fault of their own (retrenchment, transfer, visa not renewed). Filipino citizens and permanent residents generally don't qualify because they don't face that risk."
)
write(p, c)

// ─── renew-tenancy-without-agent ───────────────────────────────────────
p = `${ROOT}/app/renew-tenancy-without-agent/page.tsx`
c = read(p)
c = c.replace(
  "On a typical renewal, the agent: drafts (or copies) the renewal letter or new tenancy, runs comparable rent checks on PropertyGuru and 99.co to justify the rate, ferries signatures between landlord and tenant, and reminds you to stamp at BIR. That's roughly 3-5 hours of work spread over a couple of weeks. For a half-month commission of $1,500-$2,500 on a typical $3,000-$5,000/month flat, the hourly rate is high. The trade-off is convenience, not legal protection. The agent isn't your lawyer.",
  "On a typical renewal, the agent: drafts (or copies) the renewal letter or new lease, runs comparable rent checks on Lamudi and Property24 to justify the rate, ferries signatures between landlord and tenant, and reminds you to pay DST at BIR. That's roughly 3-5 hours of work spread over a couple of weeks. The trade-off is convenience, not legal protection. The agent isn't your lawyer."
)
write(p, c)

// ─── stamp-duty-tenancy-renewal ────────────────────────────────────────
p = `${ROOT}/app/stamp-duty-tenancy-renewal/page.tsx`
c = read(p)
// Already has PH DST rates - just fix any remaining SG references
c = c.replace(
  "Stamp duty on tenancy renewals in Philippines: BIR rate is 0.4% of total rent (or average annual rent for 1-3yr leases). Worked examples, who pays, when to file, and a calculator.",
  "Documentary Stamp Tax on lease renewals in the Philippines: PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. Worked examples, who pays, when to file, and a calculator."
)
c = c.replace(
  "Stamp duty applies to every tenancy renewal in Philippines. 0.4% of total rent. Worked examples for residential and condo renewals.",
  "Documentary Stamp Tax applies to every lease renewal in the Philippines. PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 per PHP 1,000. Worked examples for residential and condo renewals."
)
write(p, c)

// ─── foreign-tenant-renewal - fix remaining SG refs ────────────────────
p = `${ROOT}/app/foreign-tenant-renewal/page.tsx`
c = read(p)
c = c.replace(
  "Legally yes \u2014 the tenancy is a contract between landlord and tenant, not conditional on MOM approval. But it's risky for both sides. If MOM denies the renewal after they've signed, the tenant is on the hook for rent unless there's a clause covering it. The cleaner approach is to sign with a condition precedent: tenancy is binding subject to pass renewal approval within X weeks. Or sign a Letter of Intent with a small good-faith deposit that's refundable if the pass is denied, and only convert to a full tenancy once approval comes through.",
  "Legally yes \u2014 the lease is a contract between landlord and tenant, not conditional on visa approval. But it's risky for both sides. If the BI (Bureau of Immigration) denies the renewal after they've signed, the tenant is on the hook for rent unless there's a clause covering it. The cleaner approach is to sign with a condition precedent: lease is binding subject to visa renewal approval within X weeks. Or sign a Letter of Intent with a small good-faith deposit that's refundable if the visa is denied, and only convert to a full lease once approval comes through."
)
c = c.replace(
  "Yes. As a non-resident landlord, you're taxed on rental income at a flat 22% (rising to 24% from YA 2024) on net rental, with no personal reliefs. The tenant has no withholding obligation for residential rent paid to a non-resident landlord \u2014 that's withholding for commercial property rentals, not residential. You report the rental income through your BIR filing. If you have a property agent collecting rent on your behalf, they may have agency-specific reporting practices.",
  "Yes. As a non-resident landlord, rental income from the Philippines is subject to 15% final withholding tax (for non-resident foreign corporations) or graduated rates for individual non-residents. The tenant or property manager typically withholds the tax and remits it to the BIR. Consult a tax professional for your specific situation."
)
write(p, c)

// ─── security-deposit-tenancy-renewal - fix remaining SG refs ──────────
p = `${ROOT}/app/security-deposit-tenancy-renewal/page.tsx`
c = read(p)
c = c.replace(
  "Standard market practice is yes, top up to match the new rent, if the original deposit was set as a fixed number of months. Quick math: if the original deposit was 1 month at $3,000 = $3,000, and the new rent is $3,300, the top-up is ₱5000 to bring the deposit to 1 month at the new rate. If the original deposit was 2 months at $4,500 = $9,000, and the new rent is $5,000, the top-up is $1,000 to make it 2 months at the new rate. The top-up is usually transferred on or before the renewal start date.",
  "Standard market practice is yes, top up to match the new rent, if the original deposit was set as a fixed number of months. Quick math: if the original deposit was 1 month at PHP 25,000 = PHP 25,000, and the new rent is PHP 28,000, the top-up is PHP 3,000 to bring the deposit to 1 month at the new rate. The top-up is usually transferred on or before the renewal start date."
)
write(p, c)

// ─── tenancy-renewal-letter-template - fix SG refs ─────────────────────
p = `${ROOT}/app/tenancy-renewal-letter-template/page.tsx`
c = read(p)
c = c.replace(
  "Stamp with BIR within 14 days. 0.4% of total rent for a 1-year renewal, or 0.4% of average annual rent for a 1 to 3 year renewal.",
  "Pay DST to BIR within 5 days after end of month of signing. PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess."
)
write(p, c)

// ─── tenancy-renewal page - fix remaining SG refs ──────────────────────
p = `${ROOT}/app/tenancy-renewal/page.tsx`
c = read(p)
c = c.replace(
  "Market rate comparisons from PropertyGuru or 99.co can inform negotiations.",
  "Market rate comparisons from Lamudi or Property24 can inform negotiations."
)
write(p, c)

// ─── renew/page.tsx - fix remaining SG refs ────────────────────────────
p = `${ROOT}/app/renew/page.tsx`
c = read(p)
c = c.replace(
  "you only pay DST on the new lease term",
  "you only pay DST on the new lease term"
)
write(p, c)

// ─── fix any remaining "residential" (lowercase) references in content ──
// These are SG-specific "HDB flat" references that should be removed
// The script already handled most, let me check for remaining issues

console.log('\nDone with second pass!')
