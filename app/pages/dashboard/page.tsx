import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { buttonVariants } from '@/components/ui/button'


export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function LandingPage() {
  return (
    <>
      <div className='flex flex-col'>
        <Sidebar className='flex flex-col bg-gray-100'>
          <SidebarSection className='py-2 px-2'>

            <Link
              href='/pages/dashboard'
              className='px-4 py-1 flex justify-start items-center rounded-sm bg-blue-300 whitespace-nowrap text-sm font-medium'
            >
              <Image
                src='/img/home_icon.jpg'
                alt='Home'
                width={30}
                height={30}
                className='mr-2'
                style={{ height: 'auto' }}
              />
              Home
            </Link>


            <Link
              href='/pages/chess-guide'
              className='px-4 py-1 flex justify-start items-center rounded-sm hover:bg-blue-300 whitespace-nowrap text-sm font-medium'
            >
              <Image
                src='/img/pawn_icon.jpg'
                alt='Chess'
                width={30}
                height={30}
                className='mr-2'
                style={{ height: 'auto' }}
              />
              Chess
            </Link>



            <Link
              href='/pages/coming-soon'
              className='px-4 py-1 flex justify-start items-center rounded-sm hover:bg-blue-300 whitespace-nowrap text-sm font-medium'
            >
              <Image
                src='/img/mahjong_icon.jpg'
                alt='Mahjong'
                width={30}
                height={30}
                className='mr-2'
                style={{ height: 'auto' }}
              />
              Mahjong
            </Link>



            <Link
              href='/pages/coming-soon'
              className='px-4 py-1 flex justify-start items-center rounded-sm hover:bg-blue-300 whitespace-nowrap text-sm font-medium'
            >
              <Image
                src='/img/poker_icon.jpg'
                alt='Poker'
                width={30}
                height={30}
                className='mr-2'
                style={{ height: 'auto' }}
              />
              Poker
            </Link>



            <Link
              href='/pages/leaderboard'
              className='px-4 py-1 flex justify-start items-center rounded-sm hover:bg-blue-300 whitespace-nowrap text-sm font-medium'
            >
              <Image
                src='/img/leaderboard.png'
                alt='Poker'
                width={30}
                height={30}
                className='mr-2'
                style={{ height: 'auto' }}
              />
              Leaderboard
            </Link>


          </SidebarSection>
        </Sidebar>
      </div>
    </>
  )
}
