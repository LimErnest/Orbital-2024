'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChessPuzzle } from '@react-chess-tools/react-chess-puzzle'
import React, { useState, useEffect, useRef } from 'react'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import ArrayofPuzzle from '@/daily_puzzles.json'
import { useAuth } from '@/app/context/AuthContext'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { HowToPlay } from '@/components/ui/howToPlay'

export interface Puzzle {
  PuzzleId: number
  FEN: string
  Moves: string[]
}

interface UserFinalQuestData {
  finalQuestPuzzleID: number
  isCompleted: boolean
}

const ChessFinalQuest = () => {
  const arrayOfPuzzle = ArrayofPuzzle['1100']
  const {
    user,
    updateBadge,
    addXp,
    updateFinalPuzzle,
    updateFinalQuestStatus,
    fetchFinalQuest
  } = useAuth()
  const [puzzleID, setPuzzleID] = useState(1)
  const [puzzle, setPuzzle] = useState<Puzzle | null>(null)
  const [finalQuestStatus, setfinalQuestStatus] = useState(false)

  useEffect(() => {
    if (user) {
      console.log(user.uid, user)
      fetchFinalQuest(user.uid).then((data: UserFinalQuestData) => {
        console.log(data)
        updateUserFinalQuest(data)
      })
      console.log('user is changed')
    }
  }, [user])

  const updateUserFinalQuest = async (data: UserFinalQuestData) => {
    if (!data) {
      console.error('Data is undefined or null')
      return
    } else {
      console.log('Fetched finalQuest:', data)
      setPuzzle(arrayOfPuzzle[data.finalQuestPuzzleID + 94])
      setPuzzleID(data.finalQuestPuzzleID)
      setfinalQuestStatus(data.isCompleted)

      console.log(puzzle)
    }
  }

  const newPuzzleID = puzzleID + 1
  const nextPuzzle = arrayOfPuzzle[newPuzzleID + 94]

  const setNewPuzzle = async () => {
    if (newPuzzleID > 5) {
      setfinalQuestStatus(true)
      updateFinalQuestStatus()
      updateBadge('chessFinalQuest')
      addXp(250)
    }

    let currentFinalPuzzleID = puzzleID + 1

    setPuzzleID(currentFinalPuzzleID)
    updateFinalPuzzle(currentFinalPuzzleID)
  }

  if (puzzle == null) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex'>
      {finalQuestStatus ? (
        <div className='mt-20 flex h-screen w-full flex-col items-center text-4xl'>
          <h1>CONGRAULATIONS YOU HAVE PASSED THE CHESS FINAL QUEST 🎉</h1>
          <div className='flex flex-col items-center'>
            <Avatar className='mt-5 h-48 w-48'>
              <AvatarImage src='/img/queenbadge.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      ) : (
        <ChessPuzzle.Root
          puzzle={{
            fen: puzzle.FEN,
            moves: puzzle.Moves,
            makeFirstMove: true
          }}
        >
          <div className='flex h-screen w-full flex-row overflow-hidden p-10'>
            <div className='w-1/2'>
              <ChessPuzzle.Board />
            </div>

            <div className='flex h-1/2 w-full justify-center p-4 sm:w-2/5 sm:p-10'>
              <Card className='w-full'>
                <CardHeader>
                  <CardTitle className='flex justify-center text-4xl'>
                    Chess Final Quest #{puzzleID}
                  </CardTitle>
                  <CardDescription className='flex justify-center'>
                    Complete all 5 quest to earn your final quest badge!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-wrap justify-center'>
                    <HowToPlay />

                    <div className=''>
                      <ChessPuzzle.Reset
                        asChild
                        puzzle={{
                          fen: puzzle.FEN,
                          moves: puzzle.Moves,
                          makeFirstMove: true
                        }}
                        showOn={['in-progress']}
                      >
                        <div
                          className={cn(
                            buttonVariants({ size: 'xl' }),
                            'px-8 py-4 text-xl'
                          )}
                        >
                          Restart
                        </div>
                      </ChessPuzzle.Reset>
                    </div>

                    <div className=''>
                      <ChessPuzzle.Reset
                        asChild
                        puzzle={{
                          fen: puzzle.FEN,
                          moves: puzzle.Moves,
                          makeFirstMove: true
                        }}
                        showOn={['failed']}
                      >
                        <div
                          className={cn(
                            buttonVariants({ size: 'xl' }),
                            'px-8 py-4 text-xl'
                          )}
                        >
                          Try Again
                        </div>
                      </ChessPuzzle.Reset>
                    </div>

                    <div className=''>
                      <ChessPuzzle.Reset
                        asChild
                        onReset={() => {
                          setPuzzle(nextPuzzle)
                          setNewPuzzle()
                        }}
                        puzzle={{
                          fen: nextPuzzle?.FEN,
                          moves: nextPuzzle?.Moves,
                          makeFirstMove: true
                        }}
                        showOn={['solved']}
                      >
                        <div
                          className={cn(
                            buttonVariants({ size: 'xl' }),
                            'px-8 py-4 text-xl'
                          )}
                        >
                          Next
                        </div>
                      </ChessPuzzle.Reset>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </ChessPuzzle.Root>
      )}
    </div>
  )
}

export { ChessFinalQuest }