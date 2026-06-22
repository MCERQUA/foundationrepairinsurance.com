import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { LenisProvider } from '@/components/lenis-provider'
import { site } from '@/lib/site'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600', '700', '800'], variable: '--font-montserrat' })
const source = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-source' })

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Foundation Repair Contractor Insurance | Contractors Choice Agency',
    template: '%s | Foundation Repair Insurance',
  },
  description:
    'Specialized insurance for foundation repair contractors — general liability, professional liability, workers comp, and equipment coverage. Founded by a former contractor. Licensed in all 50 states. Get a quote in 15 minutes.',
  keywords: [
    'foundation repair insurance', 'foundation repair contractor insurance',
    'underpinning insurance', 'helical pier insurance', 'structural repair contractor insurance',
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: 'website',
    url: site.url,
    title: 'Foundation Repair Contractor Insurance | Contractors Choice Agency',
    description: 'Specialized insurance for foundation repair, underpinning, and structural repair contractors. Licensed in all 50 states.',
    siteName: site.name,
    images: ['/images/hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Repair Contractor Insurance',
    description: 'Specialized insurance for foundation repair contractors. Get a quote in 15 minutes.',
    images: ['/images/hero.jpg'],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['InsuranceAgency', 'LocalBusiness'],
  name: 'Contractors Choice Agency — Foundation Repair Insurance',
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '12220 E Riggs Rd',
    addressLocality: 'Chandler',
    addressRegion: 'AZ',
    postalCode: '85249',
    addressCountry: 'US',
  },
  areaServed: 'United States',
  description: 'Specialized insurance for foundation repair and structural contractors, licensed in all 50 states.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${source.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
