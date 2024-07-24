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
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger
} from '@/components/ui/hover-card'
import { useAuth } from '../../../app/context/AuthContext'
import { ChessGuide } from '@/components/ui/chess-components/chessguide'
import { ChessDailyQuiz } from '@/components/ui/chess-components/chess-dailyQuiz'
import { ChessFinalQuest } from '@/components/ui/chess-components/chess-finalQuest'
import { PokerGuide } from '@/components/ui/poker-components/pokerguide'
import { PokerDailyQuiz } from '@/components/ui/poker-components/poker-dailyQuiz'
import { PokerFinalQuest } from '@/components/ui/poker-components/poker-finalQuest'
import { set } from 'react-hook-form'

export default function LandingPage() {
  const [page, setPage] = useState('')
  const { user, checkChessGuide, checkPokerGuide } = useAuth()
  const [hasCompletedChessGuide, setHasCompletedChessGuide] = useState(false)
  const [hasCompletedPokerGuide, setHasCompletedPokerGuide] = useState(false)

  useEffect(() => {
    checkChessGuide().then((completed: boolean) => {
      setHasCompletedChessGuide(completed)
    })
    checkPokerGuide().then((completed: boolean) => {
      setHasCompletedPokerGuide(completed)
    })
  }, [user])

  useEffect(() => {
    const localPage = window.localStorage.getItem('page')
    if (localPage !== null) {
      setPage(localPage)
    } else {
      setPage('home')
    }
  }, [])

  function persistPage(page: string) {
    window.localStorage.setItem('page', page)
    setPage(page)
  }

  function getBackgroundImage(page: string) {
    if (page === 'home' || page === 'leaderboard') {
      return 'url(/img/nicebackground1.gif)'
    } else if (page.includes('chess')) {
      return 'url(/img/niceChessBackground.jpg)'
    } else {
      return 'url(/img/nicePokerBackground.jpg)'
    }
  }

  return (
    <>
      <div className='flex'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: getBackgroundImage(page),
            zIndex: -1
          }}
        />
        <div className='h-full w-full max-w-[13rem] shrink-0'>
          <Sidebar className='flex flex-col bg-gray-100'>
            <SidebarSection className='px-2 py-2'>
              <Button
                onClick={() => persistPage('home')}
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                      page === 'home'
                        ? 'bg-blue-300 text-black'
                        : 'bg-gray-100 text-black'
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

              {(page === 'home' || page === 'leaderboard') && (
                <div>
                  <Button
                    onClick={() => persistPage('chessguide')}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        className:
                          'flex w-full justify-start rounded-sm bg-gray-100 text-black shadow-none hover:bg-blue-300'
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
                    Chess
                  </Button>

                  <Button
                    onClick={() => persistPage('pokerguide')}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        className:
                          'flex w-full justify-start rounded-sm bg-gray-100 text-black shadow-none hover:bg-blue-300'
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
                    Poker
                  </Button>

                  <Button
                    onClick={() => persistPage('leaderboard')}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                          page === 'leaderboard'
                            ? 'bg-blue-300 text-black'
                            : 'bg-gray-100 text-black'
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
                </div>
              )}

              {page.includes('chess') && (
                <div>
                  <Button
                    onClick={() => persistPage('chessguide')}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                          page === 'chessguide'
                            ? 'bg-blue-300 text-black'
                            : 'bg-gray-100 text-black'
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
                    onClick={() => persistPage('chessDailyQuiz')}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                          page === 'chessDailyQuiz'
                            ? 'bg-blue-300 text-black'
                            : 'bg-gray-100 text-black'
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

                  {hasCompletedChessGuide || page == 'chessFinalQuest' ? (
                    <Button
                      onClick={() => persistPage('chessFinalQuest')}
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                          className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                            page === 'chessFinalQuest'
                              ? 'bg-blue-300 text-black'
                              : 'bg-gray-100 text-black'
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
                </div>
              )}

              {page.includes('poker') && (
                <div>
                  <Button
                    onClick={() => persistPage('pokerguide')}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                          page === 'pokerguide'
                            ? 'bg-blue-300 text-black'
                            : 'bg-gray-100 text-black'
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
                    onClick={() => persistPage('pokerDailyQuiz')}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                          page === 'pokerDailyQuiz'
                            ? 'bg-blue-300 text-black'
                            : 'bg-gray-100 text-black'
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

                  {hasCompletedPokerGuide || page == 'pokerFinalQuest' ? (
                    <Button
                      onClick={() => persistPage('pokerFinalQuest')}
                      className={cn(
                        buttonVariants({
                          variant: 'ghost',
                          className: `flex w-full justify-start rounded-sm shadow-none hover:bg-blue-300 ${
                            page === 'pokerFinalQuest'
                              ? 'bg-blue-300 text-black'
                              : 'bg-gray-100 text-black'
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
                </div>
              )}
            </SidebarSection>
          </Sidebar>
        </div>

        <div className='h-screen w-full overflow-hidden p-20'>
          {page == 'leaderboard' && <Leaderboard />}
          {page == 'home' && <Dashboard setState={persistPage} />}
          {page == 'chessguide' && <ChessGuide />}
          {page == 'chessDailyQuiz' && <ChessDailyQuiz />}
          {page == 'chessFinalQuest' && <ChessFinalQuest />}
          {page == 'pokerguide' && <PokerGuide />}
          {page == 'pokerDailyQuiz' && <PokerDailyQuiz />}
          {page == 'pokerFinalQuest' && <PokerFinalQuest />}
        </div>
      </div>
    </>
  )
}
