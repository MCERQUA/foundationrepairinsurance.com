import type { Metadata } from 'next'
import { ServicePage } from '@/components/service-page'
import { serviceDetails } from '@/lib/service-content'

const data = serviceDetails['equipment-tools']

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: 'https://foundationrepairinsurance.com/services/equipment-tools' },
}

export default function Page() {
  return <ServicePage data={data} />
}
