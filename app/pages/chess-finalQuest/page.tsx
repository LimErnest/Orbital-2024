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
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import ArrayofPuzzle from '@/daily_puzzles.json'
import { db } from '../../../firebase/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { useAuth } from '../../context/AuthContext'

export interface Puzzle {
    PuzzleId: number;
    FEN: string;
    Moves: string[];
}

interface ArrayPuzzles {
    [key: string]: Puzzle[]; // Keyed by string (chessRating), value is an array of Puzzle
}

async function fetchFinalQuestBadge(uid: string) {
    const docRef = doc(db, "badges", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        return {
            chessFinalQuest: data.chessFinalQuest
        };
    } else {
        console.log("No such document!");
        return {
            chessFinalQuest: false
        };
    }
}

export default function ChessDailyPage() {

    const arrayOfPuzzle = ArrayofPuzzle["1100"]
    const { user } = useAuth()
    const [puzzleID, setPuzzleID] = useState(1)
    const [puzzle, setPuzzle] = useState<Puzzle>(arrayOfPuzzle[puzzleID + 94])
    const [finalQuestStatus, setfinalQuestStatus] = useState(false)

    useEffect(() => {
        if (user) {
            fetchFinalQuestBadge(user.uid)
                .then(data => {
                    console.log("Fetched badge data:", data);
                    setfinalQuestStatus(data.chessFinalQuest)
                })
                .catch(error => console.error("Error fetching user badge:", error));
        }
    }, [user])

    const resetQuest = () => {
        setPuzzleID(1)
        setPuzzle(firstPuzzle)
    }

    const newPuzzleID = puzzleID + 1
    const nextPuzzle = arrayOfPuzzle[newPuzzleID + 94]
    const firstPuzzle = arrayOfPuzzle[95]

    const updateFinalQuestStatus = async () => {
        if (newPuzzleID > 5) {
            setfinalQuestStatus(true)
            if (user) {
                const docRef = doc(db, "badges", user.uid);
                updateDoc(docRef, { chessFinalQuest: true });
            }
        }
    }

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
                            href='/pages/chess-guide'
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
                                    className: 'flex justify-start rounded-sm hover:bg-blue-300'
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
                            href='/pages/chess-finalQuest'
                            className={cn(
                                buttonVariants({
                                    variant: 'ghost',
                                    className: 'flex w-full justify-start rounded-sm bg-blue-300 hover:bg-blue-300'
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

            {finalQuestStatus ? (
                <div className='flex justify-center text-4xl h-screen w-full'>
                    <h1 className='py-20'>CONGRAULATIONS YOU HAVE PASSED THE CHESS FINAL QUEST 🎉</h1>
                </div>
            ) : (
                <ChessPuzzle.Root puzzle={{
                    fen: puzzle.FEN,
                    moves: puzzle.Moves,
                    makeFirstMove: true
                }}>
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
                                        <div className='px-4'>
                                            <ChessPuzzle.Reset
                                                asChild
                                                puzzle={{
                                                    fen: firstPuzzle.FEN,
                                                    moves: firstPuzzle.Moves,
                                                    makeFirstMove: true
                                                }}
                                                onReset={() => {
                                                    resetQuest()
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
                                                    setPuzzleID(newPuzzleID)
                                                    updateFinalQuestStatus()
                                                    setPuzzle(nextPuzzle)

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

