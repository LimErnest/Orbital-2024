'use client'

import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../../app/context/AuthContext'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { userAgent } from 'next/server'
import { ChessGuide } from '@/components/ui/chess-components/chessguide'
import { ChessDailyQuiz } from '@/components/ui/chess-components/chess-dailyQuiz'
import { ChessFinalQuest } from '@/components/ui/chess-components/chess-finalQuest'


export default function ChessPage() {
  const { user, checkChessGuide } = useAuth()
  const [hasCompletedGuide, setHasCompletedGuide] = useState(false)
  const [page, setPage] = useState('guide')

  useEffect(() => {
    checkChessGuide().then((completed: boolean) => {
      setHasCompletedGuide(completed)
    })
  }, [user])

  return (
    <>
      <div className='flex'>
        <div className='h-full w-full max-w-[13rem] shrink-0'>
          <Sidebar className='bg-gray-100'>
            <SidebarSection className='px-2 py-2'>
              <Link
                href='/pages/dashboard'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'flex w-full justify-start rounded-sm hover:bg-blue-300 '
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
              </Link>

              <Button
                onClick={() => setPage('guide')}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: `flex w-full shadow-none justify-start rounded-sm hover:bg-blue-300 ${page === 'guide' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                      }`
                  })
                )}
              >
                <Image
                  src='/img/pawn_icon.jpg'
                  alt='Chess'
                  width={30}
                  height={30}
                  className='mr-2'
                  style={{ height: 'auto' }}
                />
                Guide
              </Button>

              <Button
                onClick={() => setPage('dailyQuiz')}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: `flex w-full shadow-none justify-start rounded-sm hover:bg-blue-300 ${page === 'dailyQuiz' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                      }`
                  })
                )}
              >
                <Image
                  src='/img/pawn_icon.jpg'
                  alt='Chess-DailyQuiz'
                  width={30}
                  height={30}
                  className='mr-2'
                  style={{ height: 'auto' }}
                />
                Daily Quiz
              </Button>

              {hasCompletedGuide || page == 'finalQuest' ? (
                <Button
                  onClick={() => setPage('finalQuest')}
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                      className: `flex w-full shadow-none justify-start rounded-sm hover:bg-blue-300 ${page === 'finalQuest' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                        }`
                    })
                  )}
                >
                  <Image
                    src='/img/pawn_icon.jpg'
                    alt='Poker'
                    width={30}
                    height={30}
                    className='mr-2'
                    style={{ height: 'auto' }}
                  />
                  Final Quest
                </Button>
              ) : (
                <HoverCard>
                  <HoverCardTrigger>
                    <div
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                          className:
                            'flex justify-start rounded-sm bg-gray-400 hover:bg-gray-400'
                        })
                      )}
                    >
                      <Image
                        src='/img/pawn_icon.jpg'
                        alt='Poker'
                        width={30}
                        height={30}
                        className='mr-2'
                        style={{ height: 'auto' }}
                      />
                      Final Quest
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent
                    className='ml-4 w-24 text-nowrap p-2 text-sm'
                    style={{ width: 'max-content', maxWidth: '100%' }}
                  >
                    Please complete the guide first
                  </HoverCardContent>
                </HoverCard>
              )}
            </SidebarSection>
          </Sidebar>
        </div>

        <div className='h-screen w-full overflow-hidden p-20'>
          {page == 'dailyQuiz' ? (
            <ChessDailyQuiz />
          ) : (page == 'finalQuest') ? (
            <ChessFinalQuest />
          ) : (
            <ChessGuide />
          )}
        </div>
      </div>
    </>

  )
}


