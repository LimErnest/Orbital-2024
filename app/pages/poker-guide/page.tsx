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
import { PokerGuide } from '@/components/ui/poker-components/pokerguide'
import { PokerDailyQuiz } from '@/components/ui/poker-components/poker-dailyQuiz'
import { PokerFinalQuest } from '@/components/ui/poker-components/poker-finalQuest'

interface PokerSidebarProps {
  highlightedLink: string
}

export default function PokerPage() {
  const { user, checkPokerGuide } = useAuth()
  const [hasCompletedGuide, setHasCompletedGuide] = useState(false)
  const [page, setPage] = useState('guide')

  useEffect(() => {
    checkPokerGuide().then((completed: boolean) => {
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
                    className: 'flex justify-start w-full rounded-sm hover:bg-blue-300 '
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
                    className: `flex justify-start w-full shadow-none rounded-sm hover:bg-blue-300 ${page === 'guide' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                      }`
                  })
                )}
              >
                <Image
                  src='/img/poker_icon.jpg'
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
                    className: `flex justify-start w-full shadow-none rounded-sm hover:bg-blue-300 ${page === 'quiz' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                      }`
                  })
                )}
              >
                <Image
                  src='/img/poker_icon.jpg'
                  alt='Chess-DailyQuiz'
                  width={30}
                  height={30}
                  className='mr-2'
                  style={{ height: 'auto' }}
                />
                Daily Quiz
              </Button>

              {hasCompletedGuide || page == 'final' ? (
                <Button
                  onClick={() => setPage('finalQuest')}
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                      className: `flex w-full justify-start shadow-none rounded-sm hover:bg-blue-300 ${page === 'final' ? 'bg-blue-300 text-black' : 'bg-gray-100 text-black'
                        }`
                    })
                  )}
                >
                  <Image
                    src='/img/poker_icon.jpg'
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
                        src='/img/poker_icon.jpg'
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
            <PokerDailyQuiz />
          ) : (page == 'finalQuest') ? (
            <PokerFinalQuest />
          ) : (
            <PokerGuide />
          )}
        </div>
      </div>
    </>
  )
}


