'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { buttonVariants } from '@/components/ui/button'
import React, { useState, useEffect, useMemo } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useAuth } from '../../context/AuthContext'

interface UserXP {
    xp: number
    username: string
}

export default function Leaderboard() {
    const { queryCollection, user } = useAuth()
    const [arrayOfUsers, setArrayOfUsers] = useState<UserXP[]>([])

    useEffect(() => {
        queryCollection().then((data: UserXP[]) => setArrayOfUsers(data))
    }, [user])

    return (
        <>
            <div className='flex flex-row h-screen'>
                <div className='w-56'>
                    <Sidebar className='flex flex-col bg-gray-100'>
                        <SidebarSection className='py-2 px-2'>
                            <div>
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
                            </div>

                            <div>
                                <Link
                                    href='/pages/chess-guide'
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                            className: 'flex justify-start w-full rounded-sm hover:bg-blue-300'
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
                                    Chess
                                </Link>
                            </div>

                            <div>
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
                                        src='/img/mahjong_icon.jpg'
                                        alt='Mahjong'
                                        width={30}
                                        height={10}
                                        className='mr-2'
                                    />
                                    Mahjong
                                </Link>
                            </div>

                            <div>
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
                                        src='/img/poker_icon.jpg'
                                        alt='Poker'
                                        width={30}
                                        height={10}
                                        className='mr-2'
                                    />
                                    Poker
                                </Link>
                            </div>

                            <div>
                                <Link
                                    href='/pages/leaderboard'
                                    className={cn(
                                        buttonVariants({
                                            variant: 'ghost',
                                            className: `flex justify-start rounded-sm bg-blue-300 hover:bg-blue-300 
                      }`
                                        })
                                    )}
                                >
                                    <Image
                                        src='/img/leaderboard.png'
                                        alt='Poker'
                                        width={30}
                                        height={10}
                                        className='mr-2'
                                    />
                                    Leaderboard
                                </Link>
                            </div>

                        </SidebarSection>
                    </Sidebar>
                </div>

                <div className='flex-1 flex-col h-screen'>
                    <div className='text-4xl mt-4 mb-8 ml-4'>
                        LeaderBoard
                    </div>

                    <div className='mr-4'>
                        <Table className='mb-8'>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[100px]">Rank</TableHead>
                                    <TableHead>Username</TableHead>
                                    <TableHead>Experience</TableHead>
                                    <TableHead className="text-right">Level</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody className='ml-2'>
                                {arrayOfUsers.map((user, index) =>
                                (<TableRow key={index}>
                                    <TableCell className="font-medium">
                                        {index + 1 === 1 ? (
                                            <span>🏆</span>
                                        ) : index + 1 === 2 ? (
                                            <span>🥈</span>
                                        ) : index + 1 === 3 ? (
                                            <span>🥉</span>
                                        ) : (
                                            <span>{index + 1}</span>
                                        )}
                                    </TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.xp}</TableCell>
                                    <TableCell className="text-right">{1 + Math.floor(user.xp / 100)}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </div>
            </div>
        </>
    )
}
