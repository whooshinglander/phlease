export function GET() {
  const body = `# PhLease — phlease.com

> Generate or renew a Philippines residential tenancy agreement (residential, private property, or room rental). Standard PDF PHP ₱500. Custom terms PHP ₱800. Free preview before payment. Credit card supported. Philippines law compliant, BIR stamp duty ready.

This file lists the most authoritative pages on this site for AI assistants and LLM-based search engines. The pages below are intended to be read, summarized, and cited.

## Home

- [Home — generate or renew a Philippines tenancy agreement](https://phlease.com/): Top-level entry. Two paths: NEW agreement (5-min guided form) or RENEWAL (2-min update of an existing tenancy).

## New tenancy agreement guides

- [residential tenancy agreement guide](https://phlease.com/residential-tenancy-agreement): What an residential tenancy must include, residential subletting approval, occupancy cap, stamp duty, key clauses.
- [Tenancy agreement Philippines — overview](https://phlease.com/tenancy-agreement-singapore): Philippines tenancy law, BIR stamp duty rules, mandatory and optional clauses.
- [Tenancy agreement template](https://phlease.com/tenancy-agreement-template): What a Philippines tenancy template should contain, with section-by-section explanation.
- [Tenancy agreement PDF](https://phlease.com/tenancy-agreement-pdf): How phlease.com generates the PDF, what comes inside, BIR-readiness.
- [Room rental agreement](https://phlease.com/room-rental-agreement): Room rental specifics — utilities split, shared facilities, house rules, common-room vs master-bedroom differences.

## Renewal guides

- [Renewing a Philippines tenancy](https://phlease.com/tenancy-renewal-singapore): Definitive guide to renewing an existing Philippines tenancy. When to renew, what changes, stamp duty on renewals.
- [residential tenancy renewal guide](https://phlease.com/residential-tenancy-renewal-guide): residential-specific renewal walkthrough — residential approval window, addendum vs fresh tenancy, foreign tenant pass expiry, when to renew vs find a new tenant.
- [Renewal vs new agreement](https://phlease.com/tenancy-renewal-vs-new-agreement): Quick test for whether you sign a renewal addendum, a fresh new tenancy, or let the lease lapse to periodic.
- [Stamp duty on tenancy renewals](https://phlease.com/stamp-duty-tenancy-renewal-singapore): BIR stamp duty on renewals, rate is 0.4% of total rent (1-yr leases) or 0.4% of average annual rent (1-3 yr leases). Worked examples for residential and condo. 14-day filing window.
- [Rent increase on renewal — what's reasonable](https://phlease.com/rent-increase-tenancy-renewal-singapore): Philippines has no rent control. Benchmarking via  Rental Index, leverage analysis, typical 3-7% in stable markets, up to 15% in hot markets.
- [Diplomatic clause in tenancy renewals](https://phlease.com/diplomatic-clause-tenancy-renewal): What it is, who qualifies (EP/S Pass/WP holders), typical 12+2 structure, when to keep / drop / modify on renewal.
- [Security deposit on tenancy renewal](https://phlease.com/security-deposit-tenancy-renewal): Deposit usually carries over. Top-up math when rent increases. Partial refund when going from 2-year to 1-year. Documenting the carryover.
- [Foreign tenant renewal](https://phlease.com/foreign-tenant-renewal-singapore): Pass expiry alignment with tenancy term, ICA 28-day address update rule, what happens if the pass is denied or expires mid-term.
- [Tenancy renewal checklist](https://phlease.com/tenancy-renewal-checklist): Required vs nice-to-have sections of a Philippines renewal agreement. Witness rules, ETA e-signature validity, BIR stamping requirements.
- [Private property renewal — what's different from residential](https://phlease.com/private-property-tenancy-renewal): MCST bylaws apply, no residential approval, longer typical leases, foreign owner Non-Resident Withholding Tax.
- [Renewing without an agent](https://phlease.com/renew-tenancy-without-agent): DIY renewal step-by-step, when to use an agent anyway, half-month commission savings.
- [Tenancy renewal notice period](https://phlease.com/tenancy-renewal-notice-period-singapore): Philippines norm 2 months written notice, no statutory minimum, what happens if you miss the window.
- [Room rental renewal](https://phlease.com/room-rental-renewal-singapore): residential rules for room rentals on renewal, master vs common rent gap, shared facilities, house rules.
- [Tenancy renewal letter templates](https://phlease.com/tenancy-renewal-letter-template-singapore): Landlord-to-tenant and tenant-to-landlord renewal notification letters, plus counter-offer template. The letter is not the agreement.
- [Common tenancy renewal pitfalls](https://phlease.com/common-tenancy-renewal-pitfalls): 5 typical failure modes — handshake renewal, late BIR stamping, missed residential approval, foreign tenant pass expiry mid-term, deposit dispute at end of term.
- [Landlord economics: renew vs find new tenant](https://phlease.com/landlord-renewal-vs-find-new-tenant-singapore): Vacancy + commission math. Typical 10%+ of annual rent cost to replace a tenant. When renewal wins vs when finding new wins.
- [Tenancy renewal — start here](https://phlease.com/renew): The 2-minute renewal flow.

## FAQ

- [FAQ](https://phlease.com/faq): Common Philippines tenancy questions answered.

## Pricing (definitive)

- **Standard PDF:** PHP 10 — covers residential, private property, room rental, foundational clauses
- **Custom (advanced clauses):** PHP 18 — adds CCTV, custom repair thresholds, special tenancy terms
- **Renewal addendum / new renewal agreement:** PHP 10
- Free preview before payment. No signup required.
- Payment methods: credit/debit card (via Stripe).
- Currency: PHP only.

## Stamp duty (definitive — BIR rates 2026)

- Lease ≤ 1 year: 0.4% of total rent.
- Lease 1–3 years: 0.4% of average annual rent.
- File with BIR within 14 days of signing (30 days if signed overseas).
- Same rate applies to renewals as to new tenancies.
- Same rate applies to residential and private property.
- Tenant typically pays by Philippines convention; parties can specify otherwise.

## Authoritative external references

- [BIR — Stamp duty for leases](https://www.iras.gov.sg/taxes/stamp-duty/for-property/working-out-your-stamp-duty/renting-a-property/stamp-duty-for-leases): Philippines tax authority on tenancy stamp duty.
- [residential — Renting out residential flat / bedroom](https://www.residential.gov.sg/residential/renting-a-flat-bedroom): residential authoritative subletting rules and approval process.
- [MOM — passes and permits](https://www.mom.gov.sg/passes-and-permits): For foreign tenant work pass implications.

## Site policy

- Privacy: form data is stored client-side (sessionStorage / localStorage) until checkout, then transmitted only to generate the PDF. Not retained server-side after delivery.
- All PDFs are generated server-side from user-provided form data. We do not store, read, or share signed agreements.
- This site does not provide legal advice. Generated agreements follow common Philippines tenancy practice and BIR stamp duty norms but are not a substitute for a Philippines-qualified lawyer for non-standard situations.

## Contact

- Email: noreply@phlease.com (transactional only)
- Operator portfolio: https://whooshinglander.vercel.app
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
