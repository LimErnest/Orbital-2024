'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Dashboard } from '@/components/ui/dashboard'
import { Leaderboard } from '@/components/ui/leaderboard'

export default function LandingPage() {

  const [page, setPage] = useState('home')

  return (
    <>
      <div className='flex'>
        <div className='h-full w-full max-w-[13rem] shrink-0'>
          <Sidebar className='flex flex-col bg-gray-100'>
            <SidebarSection className='px-2 py-2'>
              <Button
                onClick={() => setPage('home')}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: `flex w-full shadow-none justify-start rounded-sm hover:bg-blue-300 ${page === 'home' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                      }`
                  })
                )}
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
              </Button>

              <Link
                href='/pages/chess-guide'
                className='flex items-center justify-start whitespace-nowrap rounded-sm px-4 py-1 text-sm font-medium hover:bg-blue-300'
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
                href='/pages/poker-guide'
                className='flex items-center justify-start whitespace-nowrap rounded-sm px-4 py-1 text-sm font-medium hover:bg-blue-300'
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

              <Button
                onClick={() => setPage('leaderboard')}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: `flex w-full shadow-none justify-start rounded-sm hover:bg-blue-300 ${page === 'leaderboard' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                      }`
                  })
                )}
              >
                <Image
                  src='/img/leaderboard_icon.png'
                  alt='Poker'
                  width={30}
                  height={30}
                  className='mr-2'
                  style={{ height: 'auto' }}
                />
                Leaderboard
              </Button>
            </SidebarSection>
          </Sidebar>
        </div>

        <div className='h-screen w-full overflow-hidden'>
          {page == 'leaderboard' ? (
            <Leaderboard />
          ) : (
            <Dashboard />
          )}
        </div>
      </div>
    </>
  )
}
