#!/usr/bin/env node
/**
 * Philippines localization script for PhLease
 * Run: node scripts/localize.mjs
 */
import { readFileSync, writeFileSync } from 'fs'
import { globSync } from 'fs'
import { join } from 'path'

const FILES = [
  'app/layout.tsx',
  'app/page.tsx',
  'app/lease-agreement/page.tsx',
  'app/private-property-tenancy-agreement/page.tsx',
  'app/private-property-tenancy-renewal/page.tsx',
  'app/tenancy-renewal-guide/page.tsx',
  'app/tenancy-renewal/page.tsx',
  'app/tenancy-renewal-checklist/page.tsx',
  'app/tenancy-renewal-notice-period/page.tsx',
  'app/tenancy-renewal-vs-new-agreement/page.tsx',
  'app/tenancy-renewal-letter-template/page.tsx',
  'app/tenancy-agreement-template/page.tsx',
  'app/tenancy-agreement-pdf/page.tsx',
  'app/room-rental-agreement/page.tsx',
  'app/room-rental-renewal/page.tsx',
  'app/stamp-duty-tenancy-renewal/page.tsx',
  'app/common-tenancy-renewal-pitfalls/page.tsx',
  'app/diplomatic-clause-tenancy-renewal/page.tsx',
  'app/foreign-tenant-renewal/page.tsx',
  'app/landlord-renewal-vs-find-new-tenant/page.tsx',
  'app/rent-increase-tenancy-renewal/page.tsx',
  'app/security-deposit-tenancy-renewal/page.tsx',
  'app/renew-tenancy-without-agent/page.tsx',
  'app/faq/page.tsx',
  'app/renew/layout.tsx',
  'app/renew/page.tsx',
  'app/renew/preview/page.tsx',
  'components/ui/Footer.tsx',
  'components/ui/Header.tsx',
  'components/seo/HomepageSEO.tsx',
  'components/seo/ContentSection.tsx',
  'components/seo/FAQSection.tsx',
  'components/seo/ReviewsSection.tsx',
  'components/form/HomeForm.tsx',
  'lib/contract/generateContract.ts',
  'lib/pdf/ContractPDF.tsx',
  'lib/pdf/RenewalPDF.tsx',
]

const ROOT = '/home/whooshinglander/projects/phlease'

function read(path) {
  return readFileSync(join(ROOT, path), 'utf-8')
}

function write(path, content) {
  writeFileSync(join(ROOT, path), content, 'utf-8')
  console.log(`  ✓ ${path}`)
}

function replaceAll(str, search, replacement) {
  return str.replaceAll(search, replacement)
}

// ─── 1. Fix en_SG → en_PH ──────────────────────────────────────────────
function fixLocale(content) {
  return replaceAll(content, "locale: 'en_SG'", "locale: 'en_PH'")
}

// ─── 2. Fix "Free" in titles/metadata → "Preview before purchase" ──────
function fixFreeTitles(content) {
  // In metadata titles
  content = content.replace(
    /title: 'Free residential Tenancy Agreement Template Philippines \| Download PDF'/,
    "title: 'Residential Contract of Lease Template Philippines | Preview Before Purchase'"
  )
  content = content.replace(
    /title: 'Free residential Tenancy Agreement Template Philippines \| Download PDF'/,
    "title: 'Residential Contract of Lease Template Philippines | Preview Before Purchase'"
  )
  // Generic "Free" in title patterns
  content = content.replace(
    /title: 'Free (room|residential) (rental|tenancy) agreement/g,
    (match, type, kind) => `title: '${type === 'room' ? 'Room' : 'Residential'} ${kind === 'rental' ? 'Rental' : 'Tenancy'} Agreement`
  )
  // "Free" in description
  content = content.replace(
    /Free (residential )?tenancy agreement template for Philippines\./g,
    'Residential tenancy agreement template for Philippines.'
  )
  content = content.replace(
    /Free (residential )?tenancy agreement template\. Generate in minutes, preview free/g,
    'Residential tenancy agreement template. Generate in minutes, preview free'
  )
  return content
}

// ─── 3. Fix stamp duty rates (SG 0.4% → PH DST) ────────────────────────
function fixStampDuty(content) {
  // Replace SG-style stamp duty explanations with PH DST
  content = content.replace(
    /Stamp duty is 0\.4% of total rent for leases of 1 year or less, or 0\.4% of the average annual rent for leases of 1–3 years\. For example, a 1-year lease at \$3,000\/month costs \$144 in stamp duty\. Payable to BIR within 14 days of signing — typically borne by the tenant\./,
    "Documentary Stamp Tax (DST) is PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. For example, a 1-year lease at PHP 25,000/month (annual rent = PHP 300,000) costs PHP 6.00 + PHP 2.00 × 298 = PHP 602. Payable to BIR within 5 days after the end of the month of signing — typically borne by the tenant."
  )
  // Fix the key facts table on homepage
  content = content.replace(
    /{ label: 'Stamp duty', value: '0\.4% of total rent\. Pay to BIR within 14 days of signing' }/,
    "{ label: 'Documentary Stamp Tax', value: 'PHP 6.00 per ₱2,000 + PHP 2.00 per ₱1,000 of annual rent. Pay to BIR within 5 days' }"
  )
  // Fix lease-agreement page key facts
  content = content.replace(
    /{ label: 'Stamp duty', value: '0\.4% of total rent — paid to BIR within 14 days' }/,
    "{ label: 'Documentary Stamp Tax', value: 'PHP 6.00 per ₱2,000 + PHP 2.00 per ₱1,000 of annual rent. Pay to BIR within 5 days' }"
  )
  // Fix stamp duty in FAQ answers
  content = content.replace(
    /Stamp duty is calculated on total rent: 0\.4% of total rent for leases of 1 year or less; 0\.4% of average annual rent for leases of 1–3 years\. Example: a 1-year lease at PHP 3,000\/month = PHP 3,000 × 12 × 0\.4% = PHP 144\. Payable to BIR within 14 days of signing — typically borne by the tenant\./,
    "Documentary Stamp Tax (DST) is PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. Example: a 1-year lease at PHP 25,000/month (annual rent = PHP 300,000) costs PHP 6.00 + PHP 2.00 × 298 = PHP 602. Payable to BIR within 5 days after the end of the month of signing — typically borne by the tenant."
  )
  // Generic 0.4% patterns in FAQ answers
  content = content.replace(
    /0\.4% of total rent for leases of 1 year or less, or 0\.4% of average annual rent for leases of 1–3 years\./g,
    "PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess"
  )
  content = content.replace(
    /0\.4% of total rent for a 1-year renewal, or 0\.4% of average annual rent for a 1 to 3 year renewal\./g,
    "PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess"
  )
  // "within 14 days" → "within 5 days after end of month" (PH DST timing)
  content = content.replace(
    /within 14 days of signing/g,
    "within 5 days after the end of the month of signing"
  )
  content = content.replace(
    /within 14 days/g,
    "within 5 days after the end of the month of signing"
  )
  return content
}

// ─── 4. Fix SG-specific references ─────────────────────────────────────
function fixSGReferences(content) {
  // HDB references (but not in comments that say "no HDB equivalent")
  content = content.replace(
    /Housing Development Board \(Residential\) regulations for public housing, and the Urban Redevelopment Authority \(\) rules/g,
    "Civil Code of the Philippines Articles 1642-1761 and Rent Control Act RA 9653"
  )
  content = content.replace(
    /Housing Development Board/g,
    "Housing and Land Use Regulatory Board"
  )
  // URA references
  content = content.replace(/Urban Redevelopment Authority/g, "Housing and Land Use Regulatory Board")
  // MOP references in content
  content = content.replace(/minimum occupation period \(MOP\)/gi, "minimum lease period")
  content = content.replace(/Minimum Occupation Period \(MOP\)/g, "minimum lease period")
  content = content.replace(/\bMOP\b/g, "minimum lease period")
  // "Residential Tenancy Act" → "Civil Code of the Philippines"
  content = content.replace(/Residential Tenancy Act/g, "Civil Code of the Philippines Articles 1642-1761")
  // OneMap
  content = content.replace(/OneMap/g, "Google Maps")
  // CEA references
  content = content.replace(/CEA/g, "HLURB")
  content = content.replace(/ cea /gi, " HLURB ")
  // NRIC → Philippine ID format references
  content = content.replace(/NRIC\/FIN\/passport/g, "government-issued ID/passport")
  content = content.replace(/NRIC\/FIN\/Passport/g, "Government-Issued ID/Passport")
  content = content.replace(/NRIC\/FIN No/g, "Government ID No")
  content = content.replace(/NRIC\/FIN/g, "Government ID")
  // "6-digit postal code" → "4-digit postal code"
  content = content.replace(/6-digit postal code/g, "4-digit postal code")
  // "Philippinesan" → "Filipino"
  content = content.replace(/Philippinesan/g, "Filipino")
  // "Philippinesan" (typo variant)
  content = content.replace(/Philippinesan/g, "Filipino")
  return content
}

// ─── 5. Fix security deposit references (SG → PH) ──────────────────────
function fixSecurityDeposit(content) {
  // SG: 1 month (1yr) / 2 months (2yr) → PH: max 2 months + 1 month advance
  content = content.replace(
    /Standard security deposit is 1 month's rent for a 1-year tenancy and 2 months' rent for a 2-year tenancy\./g,
    "Under the Rent Control Act (RA 9653), the maximum security deposit is 2 months' rent, plus 1 month advance rent for units with monthly rent of PHP 10,000 and below. For units above PHP 10,000/month, the deposit is negotiable but typically 1-2 months."
  )
  content = content.replace(
    /"1 month's rent \(1-year lease\) · 2 months' rent \(2-year lease\)"/g,
    '"Max 2 months deposit + 1 month advance (Rent Control Act). Negotiable for higher rent"'
  )
  content = content.replace(
    /1 month's rent \(1-year lease\) · 2 months' \(2-year lease\)/g,
    "Max 2 months deposit + 1 month advance (Rent Control Act). Negotiable for higher rent"
  )
  return content
}

// ─── 6. Fix minimum tenancy references ─────────────────────────────────
function fixMinTenancy(content) {
  content = content.replace(
    /6 months for whole-flat subletting/g,
    "1 year (standard). No statutory minimum for private property"
  )
  content = content.replace(
    /6 months for whole Residential flats/g,
    "1 year (standard market practice)"
  )
  content = content.replace(
    /minimum rental period is 6 months/g,
    "standard rental period is 1 year"
  )
  return content
}

// ─── 7. Fix notice period ──────────────────────────────────────────────
function fixNoticePeriod(content) {
  content = content.replace(
    /1–2 months written notice/g,
    "30 days written notice (Civil Code Article 1687)"
  )
  content = content.replace(
    /1–2 months written notice \(check your agreement\)/g,
    "30 days written notice (Civil Code Article 1687)"
  )
  return content
}

// ─── 8. Fix diplomatic clause references ───────────────────────────────
function fixDiplomaticClause(content) {
  content = content.replace(
    /Allows early exit on repatriation\. Activate after month 12 with 2 months' notice/g,
    "Allows early exit on repatriation or job transfer. Typically 30-60 days notice"
  )
  return content
}

// ─── 9. Fix "Tenancy Agreement" → "Contract of Lease" / "Lease Agreement" ──
function fixTerminology(content) {
  // H1 headings
  content = content.replace(
    /Tenancy agreement done right/g,
    "Contract of Lease done right"
  )
  // Page titles
  content = content.replace(
    /Tenancy Agreement Philippines/g,
    "Contract of Lease Philippines"
  )
  // But keep "tenancy" in URLs/paths
  // Body text lowercase
  content = content.replace(
    /tenancy agreement/gi,
    (match, offset, str) => {
      // Don't change inside href or src attributes
      const before = str.slice(Math.max(0, offset - 20), offset)
      if (before.includes('href=') || before.includes('src=')) return match
      return 'lease agreement'
    }
  )
  return content
}

// ─── 10. Fix specific page content ─────────────────────────────────────
function fixSpecificPages(content, filepath) {
  // Fix lease-agreement page SG paragraph
  if (filepath.includes('lease-agreement')) {
    content = content.replace(
      /In Philippines, Residential rental agreements must comply with the Housing Development Board \(Residential\) regulations for public housing, and the Urban Redevelopment Authority \(\) rules for private property\. Key requirements include a minimum tenancy period of 6 months for whole Residential flats, proper stamp duty payment within 14 days of signing, and Philippines citizen or eligible PR approval for subletting of Residential flats\./,
      "In the Philippines, residential lease agreements are governed by the Civil Code of the Philippines (Articles 1642-1761) and the Rent Control Act (RA 9653) for units with monthly rent of PHP 10,000 and below. Key requirements include a standard lease period of 1 year, payment of Documentary Stamp Tax (DST) to the BIR within 5 days after the end of the month of signing, and compliance with local ordinances on rental properties."
    )
  }

  // Fix residential-tenancy-agreement page (private-property-tenancy-agreement)
  if (filepath.includes('private-property-tenancy-agreement')) {
    content = content.replace(
      /Residential flat owners must obtain Residential approval before subletting the whole flat\. Eligibility rules apply\. Typically the owner must be a Philippines Citizen \(PRs have more restrictions\), must have met the minimum occupation period \(MOP\), and must comply with the occupancy cap \(usually 6 persons for 3-room flats, 9 for larger\)\. Renting out individual rooms in your own flat is allowed with fewer restrictions\./,
      "Condo unit owners should check their condominium corporation's rules on subletting. Some condos restrict or require approval for rentals. For apartments covered by the Rent Control Act (RA 9653), the maximum security deposit is 2 months plus 1 month advance rent. Renting out individual rooms is generally allowed but subject to local ordinances and building rules."
    )
  }

  // Fix room-rental page
  if (filepath.includes('room-rental-agreement')) {
    content = content.replace(
      /Yes, Philippines Citizens and Permanent Residents who own residential flats may rent out rooms without requiring residential approval for subletting, subject to the flat's occupancy cap \(typically 6 persons for 3-room flats, 9 for larger flats\)\. The owner must continue to live in the flat\. For whole-flat subletting, residential approval and meeting the Minimum Occupation Period \(MOP\) are required\./,
      "Yes, property owners in the Philippines may rent out rooms in their residential units. For condominium units, check the condominium corporation's bylaws on subletting. There is no national occupancy cap, but local ordinances and building rules may apply. The owner should ensure compliance with the Civil Code and any applicable HOA/condo rules."
    )
  }

  // Fix tenancy-renewal page
  if (filepath.includes('tenancy-renewal/page')) {
    content = content.replace(
      /If you are subletting an residential flat, you must update your residential subletting record when you renew\. residential approval for subletting is granted for up to 3 years at a time and must be renewed if the subletting continues beyond the approved period\. Check your residential approval letter for the approved end date\./,
      "If you are renting out a condominium unit, check your condominium corporation's rules on lease renewals. Some condos require registration of tenants and may have specific renewal procedures. For apartments under the Rent Control Act, ensure compliance with the lease term and deposit limits."
    )
  }

  // Fix tenancy-renewal-guide page
  if (filepath.includes('tenancy-renewal-guide')) {
    content = content.replace(
      /residential grants subletting approval for up to 3 years per application\. If your renewal extends past the approved end date, you have to re-apply via the residential portal before you start the new tenancy\. If you're still inside the approved 3-year window, you don't need to re-apply, but it's still good practice to update residential with the new tenancy dates so their record matches\./,
      "In the Philippines, there is no central housing authority approval required for lease renewals. For condominium units, check your condo corporation's rules. The renewal is a private contractual matter between landlord and tenant governed by the Civil Code."
    )
    content = content.replace(
      /residential still tracks subletting of bedrooms, but the rules are looser than whole-flat subletting\. You don't need a separate residential approval for renting out individual rooms while you live there as the owner-occupier, but the maximum occupancy cap for the flat \(4 unrelated tenants for a 4-room\+ flat\) still applies\. If you renew with the same tenant and stay under the cap, you're fine\. Keep the agreement on file in case residential checks\./,
      "For room rentals in the Philippines, the rules are governed by the Civil Code and any applicable condominium corporation or HOA bylaws. There is no central housing authority tracking room subletting. Keep the lease agreement on file for reference."
    )
  }

  // Fix foreign-tenant-renewal page
  if (filepath.includes('foreign-tenant-renewal')) {
    content = content.replace(
      /Best practice is to keep the tenancy end date on or before the pass expiry\. If the pass runs out 8 months into a 12-month renewal, you have a built-in problem if MOM doesn't approve the renewal\. Either align the tenancy to the pass \(shorter term, then re-renew once the new pass is issued\), or sign a 12-month tenancy with a clear early-termination clause tied to pass non-renewal\. Don't just sign and hope\./,
      "Best practice is to align the lease term with the foreign tenant's visa validity. If the visa expires mid-lease, include a clause allowing early termination without penalty. For Philippine visas (9G, 47(a)(2), Special Resident Retiree's Visa, etc.), check the validity period and include appropriate termination provisions."
    )
    content = content.replace(
      /If the address on their pass card already matches the rental, no — staying put doesn't trigger a fresh ICA update\. The 28-day rule applies when a foreigner changes residential address\. So if they're renewing at the same flat, ICA is already current\. If they move to a different unit \(even within the same condo or block\), they have 28 days from the move date to update ICA via the e-Service or in person\. Failure to update is a breach under the Immigration Act\./,
      "Foreign nationals in the Philippines must register their residential address with the Bureau of Immigration (BI). If renewing at the same address, no update is needed unless the ACR I-Card requires renewal. For address changes, report to the BI within 30 days of moving."
    )
    content = content.replace(
      /DP holders ride on the main pass holder's status\. If the EP holder's pass is renewed, the DP gets renewed alongside\. For tenancy purposes, the DP holder can sign a tenancy in their own name, but the underlying employment risk sits with the main pass holder\. Practical tip: if the lease is in the DP holder's name \(often the spouse who isn't working\), still verify the main EP holder's pass validity, because that's what actually keeps the family in Philippines\./,
      "Dependent visa holders in the Philippines ride on the main visa holder's status. For lease purposes, either party can sign the agreement. Verify the main visa holder's validity as it determines the family's legal stay in the Philippines."
    )
  }

  // Fix private-property-tenancy-renewal page
  if (filepath.includes('private-property-tenancy-renewal')) {
    content = content.replace(
      /The big one: no residential approval\. Private property doesn't go through residential at all, so you skip that whole step\. What replaces it is the MCST — the Management Council Strata Titles, the body that runs the condo\. The MCST has its own bylaws on noise, renovations, parking, and use of facilities, and your tenant agreed to those when they first moved in\. On a renewal you don't usually re-trigger any MCST process, but the bylaws still apply for the new term\. Aside from that, the renewal mechanics \(new agreement, BIR stamp duty, deposit handling\) are the same as residential\./,
      "For private property renewals in the Philippines, there is no central housing authority approval needed. The renewal is governed by the Civil Code and the existing lease terms. For condominium units, check the condo corporation's rules on tenant registration and renewal procedures. The renewal mechanics (new agreement, BIR DST payment, deposit handling) follow standard practice."
    )
    content = content.replace(
      /Non-Resident Withholding Tax \(NRWT\)\. If you're a non-tax-resident landlord \(you're not in Philippines for 183\+ days a year\), BIR treats your rental income as Philippines-source income paid to a non-resident\. The tenant is legally required to withhold 22% of the gross rent and remit it to BIR by the 15th of the second month after payment\. The tenant pays you 78%\. You then file a tax return and either get a refund \(if your actual tax bill is lower after expenses\) or settle the difference\. Most foreign owners route this through a property agent or tax agent who handles the BIR side\. If your tenant doesn't withhold, BIR can come after them, not just you, so this is the tenant's exposure too\./,
      "For foreign landlords in the Philippines, rental income is subject to 15% final withholding tax (if the landlord is a non-resident foreign corporation) or graduated rates for individual non-residents. The tenant or property manager typically withholds the tax and remits it to the BIR. Consult a tax professional for your specific situation."
    )
    content = content.replace(
      /Executive condos before MOP\. If your EC is still inside its 5-year Minimum Occupation Period, you can't rent out the whole unit — only spare rooms, with you as the owner-occupier\. A renewal doesn't change that\. After MOP, normal private-property rules apply\./,
      "For properties with restrictions (e.g., condominium corporation rules limiting rentals), check the governing documents before renewing. Some condos have limits on the number of rental units or require board approval."
    )
  }

  // Fix rent-increase-tenancy-renewal page
  if (filepath.includes('rent-increase-tenancy-renewal')) {
    content = content.replace(
      /No\. Philippines has no rent control\. The Residential Tenancies framework here doesn't cap renewal increases the way some jurisdictions do \(no equivalent of Hong Kong's old rent control or NYC stabilisation\)\. Whatever you and your landlord sign is what applies\. The only constraint is the existing tenancy — your landlord cannot raise rent mid-lease unless your contract has a rent-review clause\. On renewal, it's open negotiation\./,
      "For units with monthly rent of PHP 10,000 and below, the Rent Control Act (RA 9653) limits rent increases to 7% per year. For units above PHP 10,000/month, rent is freely negotiable between landlord and tenant. The landlord cannot raise rent mid-lease unless the contract has a rent-review clause. On renewal, it's open negotiation for units above the threshold."
    )
    content = content.replace(
      /Start with the  Rental Index \(the official quarterly index for private residential rents — published on ura\.gov\.sg\)\. Look at the year-on-year change for your property type and region\. Then cross-check current listings on PropertyGuru and 99\.co for similar units in your block or neighbourhood — same size, same condition, same MRT\. If your existing rent is already at or above what comparable units are listing for, you have grounds to push back\. If you're significantly below market, expect a meaningful ask\./,
      "Check current listings on Lamudi, Property24, and RentPad for comparable units in your area — same size, same condition, same location. If your existing rent is already at or above what comparable units are listing for, you have grounds to push back. If you're significantly below market, expect a meaningful increase."
    )
    content = content.replace(
      /Three free sources cover most of it\.  Rental Index \(ura\.gov\.sg\/realEstateIIWeb\) gives you the macro trend by region and property type, updated quarterly\. PropertyGuru and 99\.co show you actual current asking rents — filter by your exact development if it's a condo, or by residential block cluster\. SRX also publishes a private rental index that some agents reference\. For residential rentals specifically, residential itself publishes median rents by town and flat type on data\.gov\.sg\./,
      "Three free sources cover most of it. Lamudi and Property24 show current asking rents — filter by your exact development if it's a condo, or by city/barangay. RentPad also publishes rental listings. For market trends, check BSP (Bangko Sentral ng Pilipinas) reports on residential real estate prices."
    )
  }

  // Fix stamp-duty-tenancy-renewal page
  if (filepath.includes('stamp-duty-tenancy-renewal')) {
    content = content.replace(
      /For a 1-year renewal at PHP 25,000\/month: annual rent = PHP 300,000\. DST = PHP 6\.00 \(first PHP 2,000\) \+ PHP 2\.00 × 298 = PHP 602\. For a 2-year renewal at PHP 40,000\/month: total rent = PHP 960,000, average annual rent = PHP 480,000\. DST = PHP 6\.00 \+ PHP 2\.00 × 478 = PHP 962\./,
      "For a 1-year renewal at PHP 25,000/month: annual rent = PHP 300,000. DST = PHP 6.00 (first PHP 2,000) + PHP 2.00 × 298 = PHP 602. For a 2-year renewal at PHP 40,000/month: total rent = PHP 960,000, average annual rent = PHP 480,000. DST = PHP 6.00 + PHP 2.00 × 478 = PHP 962."
    )
  }

  // Fix common-tenancy-renewal-pitfalls page
  if (filepath.includes('common-tenancy-renewal-pitfalls')) {
    content = content.replace(
      /Residential takes subletting compliance seriously\. If they discover an unapproved sublet during your renewal period, you can be fined and a black mark goes on your subletting record, which affects future applications\. In some cases Residential has terminated subletting approval entirely\. The fix if you've already missed it: apply now, disclose the gap honestly, and get the agreement stamped\. Don't try to backdate anything\. Residential cross-checks tenancy stamping with BIR records\./,
      "In the Philippines, there is no central housing authority tracking subletting. However, condominium corporations may have rules about tenant registration. Check your condo's bylaws and register the tenant if required. Ensure the lease agreement is properly stamped with the BIR."
    )
  }

  // Fix tenancy-renewal-checklist page
  if (filepath.includes('tenancy-renewal-checklist')) {
    content = content.replace(
      /Whichever ID document the tenant currently holds\. Philippinesan and PR tenants: NRIC\. Employment Pass \/ S Pass \/ Work Permit \/ Student Pass holders: FIN \(the number on their work pass card, not their passport\)\. Tourists or short-stay foreigners \(rare for renewals\): passport number plus pass type and expiry\. Use the same ID type they used in the original tenancy unless their status has changed \(e\.g\., went from EP to PR\)\. Don't mix — pick one consistent ID per party\./,
      "Whichever government-issued ID the tenant currently holds. Filipino citizens: government-issued ID (passport, driver's license, UMID, etc.). Foreign nationals: passport or ACR I-Card. Use the same ID type they used in the original lease unless their status has changed. Don't mix — pick one consistent ID per party."
    )
  }

  // Fix tenancy-renewal-vs-new-agreement page
  if (filepath.includes('tenancy-renewal-vs-new-agreement')) {
    content = content.replace(
      /No\. A renewal is for the same property\. If you're moving to a different unit \(same building or otherwise\), that's a new tenancy by definition, not a renewal\. The agreement should describe the new property and you start over with stamp duty, deposit, and residential approval \(if applicable\) for the new address\./,
      "No. A renewal is for the same property. If you're moving to a different unit (same building or otherwise), that's a new lease by definition, not a renewal. The agreement should describe the new property and you start over with DST, deposit, and any applicable condo registration for the new address."
    )
  }

  // Fix tenancy-renewal-notice-period page
  if (filepath.includes('tenancy-renewal-notice-period')) {
    content = content.replace(
      /No\. Residential tenancy in Philippines is contract-driven\. There's no Tenancy Reform Act or rent control statute that imposes a minimum notice period, the way some jurisdictions do\. The UK and parts of Australia have statutory minimums for residential tenancies, Philippines does not\. What you and your counterparty signed is what governs\. The Conveyancing and Law of Property Act covers some aspects of leases, but it doesn't override your contract on notice\./,
      "In the Philippines, notice periods are governed by the Civil Code (Article 1687) and the terms of the lease agreement. For month-to-month leases, either party may terminate by giving 15 days' written notice. For fixed-term leases, the notice period specified in the agreement applies. The Civil Code provides the legal framework for lease termination."
    )
  }

  // Fix tenancy-agreement-template page
  if (filepath.includes('tenancy-agreement-template')) {
    content = content.replace(
      /Residential tenancies have additional restrictions: whole-flat subletting requires Residential approval, occupancy caps apply \(max 6 or 9 persons depending on flat type\), and only Philippines Citizens can own Residential flats\. Private property agreements have fewer restrictions but the same legal requirements apply — stamp duty to BIR, written agreement, and standard clauses for deposits and termination\./,
      "For condominium units, check the condo corporation's rules on subletting and tenant registration. For apartments under the Rent Control Act (RA 9653), deposit limits and rent increase caps apply. Private property agreements follow the Civil Code and standard practice — DST to BIR, written agreement, and standard clauses for deposits and termination."
    )
  }

  // Fix tenancy-agreement-pdf page
  if (filepath.includes('tenancy-agreement-pdf')) {
    content = content.replace(
      /Yes\. All tenancy agreements in Philippines must be stamped by BIR\. The stamp duty is calculated on the annual rent: 0\.4% of the total rent for leases up to 4 years\. You can pay stamp duty online via the BIR e-Stamping portal\. Unstamped agreements are not admissible as evidence in court\./,
      "Yes. All lease agreements in the Philippines should be stamped with the BIR. The Documentary Stamp Tax (DST) is PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. You can pay DST via the BIR e-filing system. Unstamped agreements may not be admissible as evidence in court."
    )
  }

  // Fix renew page
  if (filepath.includes('renew/page')) {
    content = content.replace(
      /you only pay stamp duty on any rent increase \(if applicable\)\./g,
      "you only pay DST on the new lease term"
    )
  }

  return content
}

// ─── 11. Fix Footer ────────────────────────────────────────────────────
function fixFooter(content) {
  content = content.replace(
    /Tenancy Agreement SG/g,
    "Contract of Lease PH"
  )
  content = content.replace(
    /Residential Guide/g,
    "Residential Guide"
  )
  return content
}

// ─── 12. Fix Header ────────────────────────────────────────────────────
function fixHeader(content) {
  content = content.replace(
    /Philippines Residential Rental Agreements/g,
    "Philippines Lease Agreements"
  )
  return content
}

// ─── 13. Fix PDF locale ────────────────────────────────────────────────
function fixPDFLocale(content) {
  content = content.replace(
    /'en-SG'/g,
    "'en-PH'"
  )
  content = content.replace(
    /toLocaleDateString\('en-SG'/g,
    "toLocaleDateString('en-PH'"
  )
  return content
}

// ─── 14. Fix Renewal PDF ───────────────────────────────────────────────
function fixRenewalPDF(content) {
  content = content.replace(
    /Philippines Dollars/g,
    "Philippine Pesos"
  )
  content = content.replace(
    /toLocaleString\('en-SG'/g,
    "toLocaleString('en-PH'"
  )
  return content
}

// ─── 15. Fix ContentSection ────────────────────────────────────────────
function fixContentSection(content) {
  // Fix stamp duty table
  content = content.replace(
    /All tenancy agreements in Philippines are subject to stamp duty payable to BIR\. The duty must be paid within 14 days of signing if the agreement is signed in Philippines, or within 30 days if signed overseas\./,
    "All lease agreements in the Philippines are subject to Documentary Stamp Tax (DST) payable to the BIR. DST is PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. Payment must be made within 5 days after the end of the month of signing."
  )
  // Fix table rows
  content = content.replace(
    /<tr><td className="px-4 py-3 text-navy-700">Up to 1 year<\/td><td className="px-4 py-3 text-navy-700">0\.4% of total rent<\/td><\/tr>/,
    '<tr><td className="px-4 py-3 text-navy-700">Up to 1 year</td><td className="px-4 py-3 text-navy-700">PHP 6.00 + PHP 2.00 per PHP 1,000 of annual rent</td></tr>'
  )
  return content
}

// ─── 16. Fix FAQSection ────────────────────────────────────────────────
function fixFAQSection(content) {
  content = content.replace(
    /By convention in Philippines, the tenant typically bears the stamp duty\. This should be stated clearly in the tenancy agreement\. Both parties can agree to split it, but the default is tenant pays\./,
    "By convention in the Philippines, the tenant typically bears the Documentary Stamp Tax (DST). This should be stated clearly in the lease agreement. Both parties can agree to split it, but the default is tenant pays."
  )
  // Use string replace for content with special characters
  content = content.replaceAll(
    "Residential tenancies have additional restrictions: whole-flat subletting requires Residential approval, occupancy caps apply (typically 6\u20139 persons), and only Philippines Citizens can own Residential flats. Private property agreements have fewer restrictions but the same legal requirements \u2014 stamp duty, written agreement, and standard deposit/termination clauses.",
    "For condominium units, check the condo corporation's rules on subletting. Private property agreements follow the Civil Code \u2014 DST, written agreement, and standard deposit/termination clauses apply."
  )
  return content
}

// ─── 17. Fix HomepageSEO ───────────────────────────────────────────────
function fixHomepageSEO(content) {
  content = content.replace(
    /Residential & Private Property', desc: 'Covers Residential flat subletting, private condo, landed property, and room rentals\. Residential-specific clauses auto-included\.'/,
    "Residential & Private Property', desc: 'Covers condo units, apartments, townhouses, and room rentals. Appropriate clauses auto-included based on property type.'"
  )
  content = content.replace(
    /Stamp Duty Ready', desc: 'Generated agreements are structured for BIR stamping within 14 days of signing\.'/,
    "DST Ready', desc: 'Generated agreements are structured for BIR Documentary Stamp Tax payment.'"
  )
  content = content.replace(
    /Residential subletting approval', value: 'Required for whole-flat subletting\. Room rental does not require Residential approval\.'/,
    "Condo/HOA rules', value: 'Check condominium corporation or HOA bylaws for rental restrictions'"
  )
  content = content.replace(
    /Minimum tenancy \(Residential\)', value: '6 months for whole-flat subletting'/,
    "Standard lease term', value: '1 year (market standard). No statutory minimum for private property'"
  )
  content = content.replace(
    /Lawyer required\?', value: 'No, for standard Philippines Residential tenancies'/,
    "Lawyer required?', value: 'No, for standard Philippines residential leases'"
  )
  content = content.replace(
    /{ label: 'Diplomatic clause', value: "Allows early exit on repatriation\. Activate after month 12 with 2 months' notice" }/,
    "{ label: 'Diplomatic clause', value: 'Allows early exit on repatriation or job transfer. Typically 30-60 days notice' }"
  )
  // Fix internal links section
  content = content.replace(
    /{ href: '\/residential-tenancy-agreement', label: 'Residential Tenancy Agreement', desc: 'Residential flat subletting rules, occupancy caps, and Residential-specific clauses\.' }/,
    "{ href: '/residential-tenancy-agreement', label: 'Residential Tenancy Guide', desc: 'Guide to residential lease agreements in the Philippines.' }"
  )
  // Remove CEA link
  content = content.replace(
    /{ href: '\/cea-tenancy-agreement-template', label: '[^']*', desc: '[^']*' },\n/g,
    ""
  )
  return content
}

// ─── 18. Fix HomeForm ──────────────────────────────────────────────────
function fixHomeForm(content) {
  content = content.replace(
    /BIR stamp duty ready/g,
    "BIR DST ready"
  )
  return content
}

// ─── Main ──────────────────────────────────────────────────────────────
for (const filepath of FILES) {
  try {
    let content = read(filepath)
    const original = content

    content = fixLocale(content)
    content = fixFreeTitles(content)
    content = fixStampDuty(content)
    content = fixSGReferences(content)
    content = fixSecurityDeposit(content)
    content = fixMinTenancy(content)
    content = fixNoticePeriod(content)
    content = fixDiplomaticClause(content)
    content = fixSpecificPages(content, filepath)
    content = fixPDFLocale(content)

    if (filepath.includes('Footer')) content = fixFooter(content)
    if (filepath.includes('Header')) content = fixHeader(content)
    if (filepath.includes('ContractPDF')) content = fixPDFLocale(content)
    if (filepath.includes('RenewalPDF')) {
      content = fixRenewalPDF(content)
      content = fixPDFLocale(content)
    }
    if (filepath.includes('ContentSection')) content = fixContentSection(content)
    if (filepath.includes('FAQSection')) content = fixFAQSection(content)
    if (filepath.includes('HomepageSEO')) content = fixHomepageSEO(content)
    if (filepath.includes('HomeForm')) content = fixHomeForm(content)

    if (content !== original) {
      write(filepath, content)
    } else {
      console.log(`  - ${filepath} (no changes)`)
    }
  } catch (e) {
    console.error(`  ✗ ${filepath}: ${e.message}`)
  }
}

console.log('\nDone!')
