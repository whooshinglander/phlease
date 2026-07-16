import Header from '@/components/ui/Header'
import Footer from '@/components/ui/Footer'
import ContentSection from '@/components/seo/ContentSection'
import FAQSection from '@/components/seo/FAQSection'
import ReviewsSection from '@/components/seo/ReviewsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Philippines Tenancy Agreement FAQ — Stamp Duty, residential, Renewal',
  description: 'Answers to common questions about Philippines tenancy agreements — renewal of tenancy agreement, stamp duty for tenancy agreement Philippines,  template, residential room rental requirements, diplomatic clause, and more.',
  keywords: 'renewal of tenancy agreement philippines, stamp duty for tenancy agreement philippines, philippines tenancy agreement faq, what is tenancy agreement, how to renew residential tenancy, diplomatic clause philippines, residential room rental agreement requirements, residential tenancy stamp duty, tenancy deposit philippines, subletting residential rules',
  alternates: {
    canonical: 'https://phlease.com/faq',
  },
  openGraph: {
    title: 'Philippines Tenancy Agreement FAQ — Stamp Duty, residential, Renewal',
    description: 'Answers on renewal of tenancy agreement Philippines, stamp duty, residential subletting, deposits, diplomatic clause, and more.',
    url: 'https://phlease.com/faq',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'website',
  },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Philippines Tenancy Agreement FAQ — Renewal, Stamp Duty, residential',
  description: 'Answers to common questions about Philippines tenancy agreements — renewal, stamp duty, residential subletting, deposits, diplomatic clause, and more.',
  url: 'https://phlease.com/faq',
  publisher: { '@type': 'Organization', name: 'PhLease', url: 'https://phlease.com' },
}

export default function FAQPage() {
  return (
    <div className="min-h-[100dvh] flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main className="flex-1 pt-8">
        <div className="max-w-3xl mx-auto px-4 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-navy-800 mb-2">Philippines Tenancy Agreement FAQ — Renewal, Stamp Duty &amp; residential</h1>
          <p className="text-navy-500 text-base">Answers to common questions on renewal of tenancy agreement Philippines, stamp duty, residential room rental, and more.</p>
        </div>
        <ContentSection />
        <FAQSection />
        <ReviewsSection />
      </main>
      <Footer />
    </div>
  )
}
