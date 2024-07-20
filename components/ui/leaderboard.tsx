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
    TableRow
} from '@/components/ui/table'
import { useAuth } from '@/app/context/AuthContext'

interface UserXP {
    xp: number
    username: string
}

const Leaderboard = () => {
    const { queryCollection, user } = useAuth()
    const [arrayOfUsers, setArrayOfUsers] = useState<UserXP[]>([])

    useEffect(() => {
        queryCollection().then((data: UserXP[]) => setArrayOfUsers(data))
    }, [user])

    return (
        <>
            <div className='h-screen flex-1 flex-col'>
                <div className='mb-9 ml-4 mt-4 text-4xl'>LeaderBoard</div>

                <div className='mr-4 ml-4'>
                    <Table className='mb-8'>
                        <TableHeader className='border-b-2 border-black'>
                            <TableRow className='hover:bg-slate-50 text-xl text-black'>
                                <TableHead className='w-[100px] text-black'>Rank</TableHead>
                                <TableHead className='text-black'>Username</TableHead>
                                <TableHead className='text-black'>Experience</TableHead>
                                <TableHead className='text-right text-black'>Level</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className='ml-2'>
                            {arrayOfUsers.map((user, index) => (
                                <TableRow key={index} className='hover:bg-slate-50 text-xl border-b-2 border-black'>
                                    <TableCell className='font-medium'>
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
                                    <TableCell className='text-right'>
                                        {1 + Math.floor(user.xp / 100)}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export { Leaderboard }