import HomeForm from '@/components/form/HomeForm'
import HomepageSEO from '@/components/seo/HomepageSEO'

const HOMEPAGE_FAQS = [
  {
    q: 'How do I create a tenancy agreement in Philippines?',
    a: 'Use PhLease to generate a tenancy agreement online. Select your property type (residential or private), enter property details, landlord and tenant information, rental terms, and optional clauses. Preview the full agreement for free, then download the PDF from ₱500.',
  },
  {
    q: 'What should be included in an residential tenancy agreement?',
    a: 'An residential tenancy agreement should include the property address, landlord and tenant details (names, Government ID), rental amount, tenancy period, security deposit, notice period, residential subletting approval confirmation, occupancy cap, and any special clauses such as a diplomatic clause or pet policy.',
  },
  {
    q: 'Is a tenancy agreement legally required in Philippines?',
    a: 'While not strictly required by law for all rentals, a written tenancy agreement is strongly recommended and practically essential. It protects both landlord and tenant, and must be stamped with BIR within 5 days after the end of the month of signing to be admissible as evidence in court. For residential subletting, a written agreement is required by residential.',
  },
  {
    q: 'How much is the stamp duty for a tenancy agreement in Philippines?',
    a: 'Documentary Stamp Tax (DST) is PHP 6.00 for the first PHP 2,000 of annual rent, plus PHP 2.00 for every PHP 1,000 or fractional part thereof in excess. For example, a 1-year lease at PHP 25,000/month (annual rent = PHP 300,000) costs PHP 6.00 + PHP 2.00 × 298 = PHP 602. Payable to BIR within 5 days after the end of the month of signing — typically borne by the tenant.',
  },
  {
    q: 'Can I rent out my residential room without a tenancy agreement?',
    a: 'Technically you can, but it is not advisable. A tenancy agreement protects both parties and clearly sets out the rental terms, deposit, and notice period. For residential whole-flat subletting, residential requires proper documentation and approval. A written agreement is strongly recommended for room rentals too.',
  },
  {
    q: 'What is the minimum rental period for residential rooms in Philippines?',
    a: 'For residential whole-flat subletting, the standard rental period is 1 year. For individual room rentals within an owner-occupied residential flat, there is no official minimum period set by residential, but most landlords require at least 3–6 months.',
  },
]

const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOMEPAGE_FAQS.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

// Service schema — explicit pricing + offerings so LLMs / Google can answer
// "how much is phlease" / "what does it generate" directly without scraping
// the DOM.
const homepageServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'PhLease — Philippines tenancy agreement generator',
  serviceType: 'Tenancy agreement generation',
  provider: {
    '@type': 'Organization',
    name: 'PhLease',
    url: 'https://phlease.com',
    email: 'noreply@phlease.com',
  },
  areaServed: { '@type': 'Country', name: 'Philippines' },
  audience: { '@type': 'Audience', audienceType: 'Philippines landlords and tenants' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tenancy agreement plans',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Standard tenancy agreement PDF',
        description: 'Residential, private property, or room rental — guided 5-minute form, BIR stamp duty ready.',
        price: '10',
        priceCurrency: 'PHP',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Custom tenancy agreement (advanced clauses)',
        description: 'Adds advanced custom clauses such as CCTV, custom repair thresholds, and special tenancy terms.',
        price: '18',
        priceCurrency: 'PHP',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Tenancy renewal agreement PDF',
        description: 'Update an existing tenancy with new dates and rent in 2 minutes.',
        price: '10',
        priceCurrency: 'PHP',
        availability: 'https://schema.org/InStock',
        url: 'https://phlease.com/renew',
      },
    ],
  },
  termsOfService: 'Free preview. Pay only when you download. No signup. Generated agreements follow Philippines tenancy practice and BIR stamp duty norms; not legal advice.',
}

// Server component wrapper — HomepageSEO is fully SSR/crawlable
// HomeForm is client-rendered (the interactive form)
export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageFaqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageServiceSchema) }} />
      <HomeForm />
      <HomepageSEO />
    </>
  )
}
