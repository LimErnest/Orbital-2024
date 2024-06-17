'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChessPuzzle } from '@react-chess-tools/react-chess-puzzle'
import { useState } from 'react'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ChessDailyPage() {
  const puzzles = [
    {
      fen: '2r2rk1/6pp/p1q5/1pn2p2/1B1pPP2/3Pn1QB/1PP2R1P/6RK b - - 3 24',
      moves: ['f8f6', 'g3g7'],
      makeFirstMove: true
    }
  ]

  const [puzzleIndex, setPuzzleIndex] = useState(0)
  const puzzle = puzzles[puzzleIndex]

  return (
    <div className='flex'>
      <div className='h-full w-full max-w-[13rem] shrink-0'>
        <Sidebar className='bg-gray-100'>
          <SidebarSection className='px-2 py-2'>
            <Link
              href='/pages/dashboard'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'flex justify-start rounded-sm hover:bg-blue-300'
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
              href='/pages/chess'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className:
                    'flex justify-start rounded-sm hover:bg-blue-300'
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
                  className: 'flex w-full justify-start rounded-sm bg-blue-300 hover:bg-blue-300'
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
                  className: 'flex justify-start rounded-sm hover:bg-blue-300'
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

            <Link
              href='/pages/coming-soon'
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  className: 'flex justify-start rounded-sm hover:bg-blue-300'
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
          </SidebarSection>
        </Sidebar>
      </div>

      <div className='flex flex-row h-1/2 w-1/2 p-20'>
        <ChessPuzzle.Root puzzle={puzzle}>
          <ChessPuzzle.Board />

          <div className='h-screen w-1/2 p-20'>
            <Card>
              <CardHeader>
                <CardTitle>Daily Quiz #1</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <ChessPuzzle.Reset asChild>
                  <button>restart</button>
                </ChessPuzzle.Reset>
                <ChessPuzzle.Reset
                  asChild
                  puzzle={puzzles[(puzzleIndex + 1) % puzzles.length]}
                  onReset={() => setPuzzleIndex((puzzleIndex + 1) % puzzles.length)}
                >
                  <Button>next</Button>
                </ChessPuzzle.Reset>
                <ChessPuzzle.Hint>hint</ChessPuzzle.Hint>
                
              </CardContent>
            </Card>
          </div>
        </ChessPuzzle.Root>
      </div>

    </div>
  )
}
