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

interface ChessSidebarProps {
  highlightedLink: string;
}

const ChessSidebar: React.FC<ChessSidebarProps> = ({ highlightedLink }) => {
  const { user, checkChessGuide } = useAuth()
  const [hasCompletedGuide, setHasCompletedGuide] = useState(false)

  useEffect(() => {
    checkChessGuide().then((completed: boolean) => {
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
              height={30}
              className='mr-2'
              style={{ height: 'auto' }}
            />
            Home
          </Link>

          <Link
            href='/pages/chess-guide'
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: `flex justify-start rounded-sm hover:bg-blue-300 ${highlightedLink === 'guide' ? 'bg-blue-300' : ''
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
          </Link>

          <Link
            href='/pages/chess-daily'
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: `flex justify-start rounded-sm hover:bg-blue-300 ${highlightedLink === 'quiz' ? 'bg-blue-300' : ''
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
          </Link>

          {hasCompletedGuide || highlightedLink == 'final' ? (
            <Link
              href='/pages/chess-finalQuest'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: `flex justify-start rounded-sm hover:bg-blue-300 ${highlightedLink === 'final' ? 'bg-blue-300' : ''
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
                    height={30}
                    className='mr-2'
                    style={{ height: 'auto' }}
                  />
                  Final Quest
                </div>
              </HoverCardTrigger>
              <HoverCardContent className='ml-4 w-24 p-2 text-nowrap text-sm' style={{ width: 'max-content', maxWidth: '100%' }}>
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