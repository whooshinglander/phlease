import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const GA_ID = 'G-L8EDWZSMW6'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // NOTE: user-scalable is NOT set. Pinch-to-zoom is allowed.
  themeColor: '#f8fafc',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://phlease.com'),
  title: 'Free residential Tenancy Agreement Template Philippines | Download PDF',
  description: 'Free residential tenancy agreement template for Philippines. Generate your agreement in minutes, preview free, download PDF from ₱500. residential and private property covered.',
  keywords: 'free tenancy agreement generator Philippines, Philippines tenancy agreement, residential tenancy agreement, Philippines rental contract, tenancy agreement generator, rental agreement Philippines, tenancy renewal Philippines, free tenancy agreement Philippines, Philippines TA template, tenancy renewal agreement generator, free tenancy renewal agreement generator Philippines, renew tenancy agreement generator Philippines, generate tenancy renewal agreement Philippines',
  alternates: {
    canonical: 'https://phlease.com',
  },
  openGraph: {
    title: 'Free residential Tenancy Agreement Template Philippines | Download PDF',
    description: 'Free residential tenancy agreement template. Generate in minutes, preview free, download PDF from ₱500. residential and private property covered.',
    url: 'https://phlease.com',
    siteName: 'PhLease',
    locale: 'en_SG',
    type: 'website',
    images: [{ url: 'https://phlease.com/opengraph-image', width: 1200, height: 630, alt: 'PhLease Agreement Generator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free residential Tenancy Agreement Template Philippines | Download PDF',
    description: 'Free residential tenancy agreement template. Generate in minutes, preview free, download PDF from ₱500.',
    images: ['https://phlease.com/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'PhLease Agreement Generator',
    url: 'https://phlease.com',
    applicationCategory: 'LegalService',
    operatingSystem: 'Any',
    description: 'Generate Philippines tenancy agreements for residential flats and private property. Free preview, download from ₱500.',
    offers: {
      '@type': 'Offer',
      price: '10',
      priceCurrency: 'PHP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
    provider: {
      '@type': 'Organization',
      name: 'PhLease',
      url: 'https://phlease.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'PhLease Agreement Generator',
    url: 'https://phlease.com',
    description: 'Free online generator for Philippines residential tenancy agreements. residential flats and private property. Free to preview, download from PHP ₱500.',
    areaServed: {
      '@type': 'Country',
      name: 'Philippines',
    },
    serviceType: 'Tenancy Agreement Generator',
    availableLanguage: 'English',
    priceRange: 'PHP $0–₱800',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to create a Philippines tenancy agreement',
    description: 'Generate a legally structured Philippines tenancy agreement for residential or private property in minutes.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Enter property details', text: 'Select residential flat, private condo, landed property, or room rental. Enter the property address and type.' },
      { '@type': 'HowToStep', position: 2, name: 'Add landlord and tenant information', text: 'Enter the full legal names, NRIC/FIN/passport numbers, and contact details for both parties.' },
      { '@type': 'HowToStep', position: 3, name: 'Set rental terms', text: 'Specify the monthly rent, tenancy start and end dates, security deposit amount, and any special clauses such as diplomatic clause or pet policy.' },
      { '@type': 'HowToStep', position: 4, name: 'Review and download your agreement', text: 'Preview the full tenancy agreement for free. Download as a ready-to-sign PDF from PHP ₱500.' },
    ],
    tool: [{ '@type': 'HowToTool', name: 'PhLease Agreement Generator', url: 'https://phlease.com' }],
  },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <Analytics />
      </body>
    </html>
  )
}
