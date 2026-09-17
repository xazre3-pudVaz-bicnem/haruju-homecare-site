import ServiceDetailPage, { serviceDetailMeta } from '@/components/sections/ServiceDetailPage'
import { SERVICE_DETAILS, SERVICE_ITEMS } from '@/lib/services'

const detail = SERVICE_DETAILS[SERVICE_ITEMS.accompanyingSupport.slug]

export const metadata = serviceDetailMeta(detail)

export default function AccompanyingSupportPage() {
  return <ServiceDetailPage detail={detail} />
}
