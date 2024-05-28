import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { buttonVariants } from '@/components/ui/button'
import { CheckUser } from '@/components/ui/checkuser'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function LandingPage() {
  return (
    <>
      <div className='flex flex-col'>
        <Sidebar>
          <SidebarSection>
            <Link
              href='/pages/dashboard'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'w-full rounded-sm bg-blue-300 hover:bg-blue-300'
                })
              )}
            >
              Home
            </Link>
            <Link
              href='/pages/chess'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'w-full rounded-sm hover:bg-blue-300'
                })
              )}
            >
              Chess
            </Link>
            <Link
              href='/pages/mahjong'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'w-full rounded-sm hover:bg-blue-300'
                })
              )}
            >
              Mahjong
            </Link>
            <Link
              href='/pages/poker'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'w-full rounded-sm hover:bg-blue-300'
                })
              )}
            >
              Poker
            </Link>
          </SidebarSection>
        </Sidebar>
      </div>
    </>
  )
}
