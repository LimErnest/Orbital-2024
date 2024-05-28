import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar } from '@/components/ui/sidebar'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}


export default function LandingPage() {
  return (
    <>
      <div>
        <Sidebar/>
      </div>
    </>
  )
}