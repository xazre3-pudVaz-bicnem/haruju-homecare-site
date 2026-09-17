import ServiceDetailPage, { serviceDetailMeta } from '@/components/sections/ServiceDetailPage'
import { SERVICE_DETAILS, SERVICE_ITEMS } from '@/lib/services'

const detail = SERVICE_DETAILS[SERVICE_ITEMS.behavioralSupport.slug]

export const metadata = serviceDetailMeta(detail)

export default function BehavioralSupportPage() {
  return <ServiceDetailPage detail={detail} />
}
