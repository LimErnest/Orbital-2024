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
      <div>
        <Sidebar className= 'flex flex-col bg-gray-100'>
          <SidebarSection className = 'py-2 px-2'>
            <div>
              <Link
                href='/pages/dashboard'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'flex justify-start rounded-sm bg-blue-300 hover:bg-blue-300'
                  })
                )}
              >
                <Image
                  src='/img/home_icon.jpg'
                  alt='Home'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Home
              </Link>
            </div>
            
            <div>
              <Link
                href='/pages/chess'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'flex justify-start w-full rounded-sm hover:bg-blue-300'
                  })
                )}
              >
                <Image
                  src='/img/pawn_icon.jpg'
                  alt='Chess'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Chess
              </Link>
            </div>
            
            <div>
              <Link
                href='/pages/mahjong'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'flex justify-start rounded-sm hover:bg-blue-300'
                  })
                )}
              >
                <Image
                  src='/img/mahjong_icon.jpg'
                  alt='Mahjong'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Mahjong
              </Link>
            </div>
            
            <div>
              <Link
                href='/pages/poker'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'flex justify-start rounded-sm hover:bg-blue-300'
                  })
                )}
              >
                <Image
                  src='/img/poker_icon.jpg'
                  alt='Poker'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Poker
              </Link>
            </div>
          </SidebarSection>
        </Sidebar>
      </div>
    </>
  )
}
