# CLAUDE.md — phlease

## What this is
Philippines tenancy agreement generator. Paid product — PHP ₱500 (standard residential/private) and ₱800 (custom). Stripe payments live.

## Stack
Next.js 14 App Router (app/), TypeScript, Tailwind CSS, Stripe, Brevo email, Vercel.

## Critical rules
- **Stripe: live mode.** Payments are real. Never test with live keys — use test keys locally. Live keys in Vercel env vars only.
- **Stripe webhook:** signature verification must not be removed or simplified. Webhook handles payment confirmation + document delivery.
- **Brevo email:** transactional email from `noreply@phlease.com`. API key in Vercel env vars.
- **Legal documents:** tenancy agreement templates are legally-structured. Do not simplify, reformat, or change legal clauses without Ronald's explicit instruction.
- **Never hardcode Stripe keys** — pk_live and sk_live in Vercel env vars only.

## Known gotchas
- This repo uses `app/` not `src/app/` — flat App Router structure.
- PDF generation happens server-side — do not move to client-side.
- Philippines law context — clauses reference the **Civil Code of the Philippines (Title VIII, Lease, Arts. 1643–1688)**, **RA 9653 (Rent Control Act — ₱10k/₱5k thresholds, 7% cap, extended by DHSUD NHSB Res. 2024-01)**, and **TRAIN Law (RA 10963) DST (₱6 first ₱2,000 + ₱2/₱1,000, BIR Form 2080 within 5 days after month-end)**. There is NO "Philippines Residential Tenancy Act" — do not cite one. Do not adapt for other jurisdictions.
- History: this site was cloned from sgtenancy. Two contamination sweeps done (2026-08-16 rates/strings, 2026-09-03 whole pages). Before adding/editing any legal copy, grep the page for SG concepts (HDB, MCST, IRAS, NRIC, GCB, "Residential" as a proper noun) — string-grep alone misses whole-page concept contamination.

## Deploy
`VERCEL_TOKEN=$(grep '^VERCEL_TOKEN=' ~/.helios/.env | cut -d'=' -f2-) vercel --yes --prod`
