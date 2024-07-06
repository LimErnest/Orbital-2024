'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChessPuzzle } from '@react-chess-tools/react-chess-puzzle'
import React, { useState, useEffect, useMemo } from 'react'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import ArrayofPuzzle from '@/daily_puzzles.json'
import { db } from '../../../firebase/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'
import { ChessSidebar } from '@/components/ui/chess-sidebar'

export interface Puzzle {
  PuzzleId: number
  FEN: string
  Moves: string[]
}

type Rating = '400' | '500' | '600' | '700' | '800' | '900' | '1000' | '1100'

interface UserRatingData {
  chessRating: Rating,
  attempts: number,
  puzzleID: number,
  noOfCorrect: number,
  latestDate: string,
  threePuzzleCorrect: boolean
}

interface ArrayPuzzles {
  [key: string]: Puzzle[] // Keyed by string (chessRating), value is an array of Puzzle
}

const RatingPuzzle: ArrayPuzzles = ArrayofPuzzle

function isRating(value: any): value is Rating {
  return ['400', '500', '600', '700', '800', '900', '1000', '1100'].includes(
    value
  )
}

export default function ChessDailyQuizPage() {
  const { user,
    addXp,
    updateAttempt,
    updateUserTries,
    updatePuzzle,
    updateRating,
    updateCorrectCount,
    fetchUserRating
  } = useAuth()
  const [rating, setRating] = useState<Rating>('600')
  const [attempt, setAttempt] = useState(0)
  const [puzzleID, setPuzzleID] = useState(1)
  const [correctCount, setCorrectCount] = useState(0)
  const [arrayOfPuzzle, setArrayOfPuzzle] = useState<Puzzle[]>([])
  const [puzzle, setPuzzle] = useState<Puzzle>(ArrayofPuzzle[rating][puzzleID])
  const [threePuzzleCorrect, setThreePuzzleCorrect] = useState(false)

  useEffect(() => {
    if (user) {
      fetchUserRating()
        .then((data: UserRatingData) => {
          updateUserRating(data)
          console.log('user is changed', puzzle)
        })
    }
  }, [user])

  const decreaseAttempt = async () => {
    const newAttempt = attempt - 1
    setAttempt(newAttempt)
    updateAttempt(newAttempt)
  }

  const updateUserRating = async (data: UserRatingData) => {
    if (!data) {
      console.error("Data is undefined or null");
      return;
    }

    console.log('Fetched badge data:', data)

    const currDate = new Date().toLocaleDateString()
    if (data.latestDate != currDate) {
      //different day
      setAttempt(3)
      setThreePuzzleCorrect(false)
      updateUserTries(currDate)
      setRating(data.chessRating)
      setPuzzleID(data.puzzleID)
      setCorrectCount(data.noOfCorrect)
      setPuzzle(RatingPuzzle[data.chessRating][data.puzzleID - 1])

    } else {
      setAttempt(data.attempts)
      setThreePuzzleCorrect(data.threePuzzleCorrect)
      setRating(data.chessRating)
      setPuzzleID(data.puzzleID)
      setCorrectCount(data.noOfCorrect)
      setPuzzle(RatingPuzzle[data.chessRating][data.puzzleID - 1])
      console.log(puzzle)
    }
  }

  const setNewPuzzle = async () => {
    let newRating: String = rating
    let currentPuzzleID = puzzleID + 1
    let newCorrectCount = correctCount + 1
    let completedThreePuzzle = threePuzzleCorrect
    addXp(20)
    if (newCorrectCount >= 3) {
      if (Number(rating) < 1100) {
        newRating = String(Number(rating) + 100)
        if (isRating(newRating)) {
          setRating(newRating)
          currentPuzzleID = 1
        }
      }
      completedThreePuzzle = true
      setThreePuzzleCorrect(true)
      newCorrectCount = 0
    }

    setCorrectCount(newCorrectCount)
    setPuzzleID(currentPuzzleID)

    updatePuzzle(currentPuzzleID)
    updateRating(newRating)
    updateCorrectCount(newCorrectCount, completedThreePuzzle)
  }

  useEffect(() => {
    const puzzles = ArrayofPuzzle[rating]
    setArrayOfPuzzle(puzzles)
    setPuzzle(puzzles[puzzleID - 1])
    console.log('rating is changed', puzzle)
  }, [rating])

  let newPuzzleID = puzzleID + 1
  let newIndex = newPuzzleID - 1
  let nextPuzzle = arrayOfPuzzle[newIndex]

  if (correctCount == 2 && rating != '1100') {
    const puzzles = RatingPuzzle[String(Number(rating) + 100)]
    nextPuzzle = puzzles[0]
  }

  return (
    <div className='flex'>
      <ChessSidebar highlightedLink={'quiz'} />
      {threePuzzleCorrect ? (
        <div className='flex h-screen w-full items-center justify-center text-4xl'>
          <h1 className='py-20'>
            Congratulations! You have completed the daily quiz.
          </h1>
        </div>
      ) : attempt == 0 ? (
        <div className='flex h-screen w-full items-center justify-center text-4xl'>
          <h1 className='py-20'>
            You have no attempts left. Come back again tomorrow.
          </h1>
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
                    Daily Quiz #{puzzleID} {rating} Rating
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className='flex flex-row justify-center'>
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
                        <Button
                          className={cn(
                            buttonVariants({ size: 'xl' }),
                            'px-8 py-4 text-xl'
                          )}
                        >
                          Restart
                        </Button>
                      </ChessPuzzle.Reset>
                    </div>

                    <div className='px-4'>
                      <ChessPuzzle.Reset
                        asChild
                        puzzle={{
                          fen: puzzle.FEN,
                          moves: puzzle.Moves,
                          makeFirstMove: true
                        }}
                        onReset={() => {
                          decreaseAttempt()
                        }}
                        showOn={['failed']}
                      >
                        <Button
                          className={cn(
                            buttonVariants({ size: 'xl' }),
                            'px-8 py-4 text-xl'
                          )}
                        >
                          Try Again
                        </Button>
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
                          fen: nextPuzzle.FEN,
                          moves: nextPuzzle.Moves,
                          makeFirstMove: true
                        }}
                        showOn={['solved']}
                      >
                        <Button
                          className={cn(
                            buttonVariants({ size: 'xl' }),
                            'px-8 py-4 text-xl'
                          )}
                        >
                          Next
                        </Button>
                      </ChessPuzzle.Reset>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className='flex justify-center'>
                  You have {attempt} attempts left
                  <br />
                </CardFooter>
                <CardFooter className='flex justify-center'>
                  If the first move is not played, please refresh the page
                </CardFooter>
              </Card>
            </div>
          </div>
        </ChessPuzzle.Root>
      )}
    </div>
  )
}
