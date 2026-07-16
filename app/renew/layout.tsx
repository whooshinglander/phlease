import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renewal of Tenancy Agreement Philippines — residential & Condo | PhLease',
  description: 'Renewal of tenancy agreement in Philippines made easy. Generate a legally structured residential rental renewal or condo renewal agreement in minutes. Free to preview, download from ₱500. No agent needed.',
  keywords: 'renewal of tenancy agreement singapore, residential rental renewal, renew tenancy agreement singapore, residential tenancy renewal, renew residential rental, tenancy renewal singapore, extend tenancy agreement singapore, tenancy renewal agreement generator, renew lease singapore',
  alternates: {
    canonical: 'https://phlease.com/renew',
  },
  openGraph: {
    title: 'Renewal of Tenancy Agreement Philippines — residential & Condo | PhLease',
    description: 'Generate a Philippines tenancy renewal agreement in minutes. residential rental renewal or private property. Free to preview, from ₱500.',
    url: 'https://phlease.com/renew',
    siteName: 'PhLease',
    locale: 'en_PH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renewal of Tenancy Agreement Philippines — residential & Condo | PhLease',
    description: 'Free to preview. Download from ₱500. Generate your Philippines tenancy renewal agreement in minutes.',
  },
}

export default function RenewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
