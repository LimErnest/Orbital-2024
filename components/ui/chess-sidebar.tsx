'use client'

import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '../../app/context/AuthContext'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { userAgent } from 'next/server'

const ChessSidebar = ({ highlightedLink }) => {
  const { user, checkGuide } = useAuth()
  const [hasCompletedGuide, setHasCompletedGuide] = useState(false)

  useEffect(() => {
    checkGuide().then((completed) => {
      setHasCompletedGuide(completed)
    })
  }, [user])

  return (
    <div className='h-full w-full max-w-[13rem] shrink-0'>
      <Sidebar className='bg-gray-100'>
        <SidebarSection className='px-2 py-2'>
          <Link
            href='/pages/dashboard'
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: 'flex justify-start rounded-sm hover:bg-blue-300 '
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

          <Link
            href='/pages/chess-guide'
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: `flex justify-start rounded-sm hover:bg-blue-300 ${
                  highlightedLink === 'guide' ? 'bg-blue-300' : ''
                }`
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
            Guide
          </Link>

          <Link
            href='/pages/chess-daily'
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: `flex justify-start rounded-sm hover:bg-blue-300 ${
                  highlightedLink === 'quiz' ? 'bg-blue-300' : ''
                }`
              })
            )}
          >
            <Image
              src='/img/pawn_icon.jpg'
              alt='Chess-DailyQuiz'
              width={30}
              height={10}
              className='mr-2'
            />
            Daily Quiz
          </Link>

          <Link
            href='/pages/coming-soon'
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: `flex justify-start rounded-sm hover:bg-blue-300 ${
                  highlightedLink === 'leaderboard' ? 'bg-blue-300' : ''
                }`
              })
            )}
          >
            <Image
              src='/img/pawn_icon.jpg'
              alt='Poker'
              width={30}
              height={10}
              className='mr-2'
            />
            Leaderboard
          </Link>

          {hasCompletedGuide || highlightedLink == 'final' ? (
            <Link
              href='/pages/chess-finalQuest'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: `flex justify-start rounded-sm hover:bg-blue-300 ${
                    highlightedLink === 'final' ? 'bg-blue-300' : ''
                  }`
                })
              )}
            >
              <Image
                src='/img/pawn_icon.jpg'
                alt='Poker'
                width={30}
                height={10}
                className='mr-2'
              />
              Final Quest
            </Link>
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
                    height={10}
                    className='mr-2'
                  />
                  Final Quest
                </div>
              </HoverCardTrigger>
              <HoverCardContent className='ml-4 w-24 text-nowrap p-2' style={{ width: 'max-content', maxWidth: '100%' }}>
                Please complete the guide first
              </HoverCardContent>
            </HoverCard>
          )}
        </SidebarSection>
      </Sidebar>
    </div>
  )
}

export { ChessSidebar }