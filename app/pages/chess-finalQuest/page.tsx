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
    CardTitle,
} from "@/components/ui/card"
import ArrayofPuzzle from '@/daily_puzzles.json'
import { db } from '../../../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { ChessSidebar } from '@/components/ui/chess-sidebar'
import { Arya } from 'next/font/google'
import { HowToPlay } from '@/components/ui/howToPlay'

export interface Puzzle {
    PuzzleId: number;
    FEN: string;
    Moves: string[];
}

interface UserFinalQuestData {
    finalQuestPuzzleID: number,
    isCompleted: boolean
}


export default function ChessFinalQuestPage() {
    const arrayOfPuzzle = ArrayofPuzzle["1100"]
    const { user,
        updateBadge,
        addXp,
        updateFinalPuzzle,
        updateFinalQuestStatus,
        fetchFinalQuest
    } = useAuth()
    const [puzzleID, setPuzzleID] = useState(1)
    const [puzzle, setPuzzle] = useState<Puzzle>(arrayOfPuzzle[puzzleID + 94])
    const [finalQuestStatus, setfinalQuestStatus] = useState(false)

    const effectRan = useRef(false)

    useEffect(() => {
        console.log('effect is called')
        if (effectRan.current === true) {
            if (user) {
                console.log(user.uid, user)
                fetchFinalQuest(user.uid)
                    .then((data: UserFinalQuestData) => {
                        console.log(data)
                        updateUserFinalQuest(data)
                    })
                console.log('user is changed')
            }
        }
        return () => {
            console.log('unmounted')
            effectRan.current = true
        }

    }, [])

    const updateUserFinalQuest = async (data: UserFinalQuestData) => {
        if (!data) {
            console.error("Data is undefined or null");
            return;
        } else {
            console.log("Fetched finalQuest:", data);
            setPuzzleID(data.finalQuestPuzzleID)
            setfinalQuestStatus(data.isCompleted)
            setPuzzle(arrayOfPuzzle[data.finalQuestPuzzleID + 94])
        }

    }

    const newPuzzleID = puzzleID + 1
    const nextPuzzle = arrayOfPuzzle[newPuzzleID + 94]

    const setNewPuzzle = async () => {
        if (newPuzzleID > 5) {
            setfinalQuestStatus(true)
            updateFinalQuestStatus()
            updateBadge("chessFinalQuest")
            addXp(250)
        }

        let currentFinalPuzzleID = puzzleID + 1

        setPuzzleID(currentFinalPuzzleID)
        updateFinalPuzzle(currentFinalPuzzleID)
    }

    return (
        <div className='flex'>
            <ChessSidebar highlightedLink='final' />
            {finalQuestStatus ? (
                <div className='flex flex-col items-center text-4xl h-screen w-full mt-20'>
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

                    <div className='flex flex-row h-screen w-full overflow-hidden p-10'>
                        <div className='w-1/2'>
                            <ChessPuzzle.Board />
                        </div>

                        <div className='flex justify-center h-1/2 w-full sm:w-2/5 p-4 sm:p-10'>
                            <Card className='w-full'>
                                <CardHeader>
                                    <CardTitle className='flex justify-center text-4xl'>
                                        Final Quest #{puzzleID}
                                    </CardTitle>
                                    <CardDescription className='flex justify-center'>
                                        Complete all 5 puzzles to earn your final quest badge!
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className='flex flex-row justify-center'>

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

                                        <div className=''>
                                            <ChessPuzzle.Reset
                                                asChild
                                                puzzle={{
                                                    fen: puzzle.FEN,
                                                    moves: puzzle.Moves,
                                                    makeFirstMove: true
                                                }}
                                                showOn={
                                                    ["failed"]
                                                }>
                                                <Button
                                                    className={cn(
                                                        buttonVariants({ size: 'xl' }),
                                                        'px-8 py-4 text-xl'
                                                    )}
                                                >Try Again</Button>
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

                                                showOn={
                                                    ["solved"]
                                                }
                                            >
                                                <Button
                                                    className={cn(
                                                        buttonVariants({ size: 'xl' }),
                                                        'px-8 py-4 text-xl'
                                                    )}
                                                >Next</Button>
                                            </ChessPuzzle.Reset>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </ChessPuzzle.Root>
            )
            }
        </div >
    )
}

