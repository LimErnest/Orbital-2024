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
      <div className='flex h-screen flex-row'>
        <div className='w-56'>
          <Sidebar className='flex flex-col bg-gray-100'>
            <SidebarSection className='px-2 py-2'>
              <Link
                href='/pages/dashboard'
                className='flex items-center justify-start whitespace-nowrap rounded-sm px-4 py-1 text-sm font-medium hover:bg-blue-300'
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
                className='flex items-center justify-start whitespace-nowrap rounded-sm px-4 py-1 text-sm font-medium hover:bg-blue-300'
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
              </Link>

              <Link
                href='/pages/coming-soon'
                className='flex items-center justify-start whitespace-nowrap rounded-sm px-4 py-1 text-sm font-medium hover:bg-blue-300'
              >
                <Image
                  src='/img/mahjong_icon.jpg'
                  alt='Mahjong'
                  width={30}
                  height={30}
                  className='mr-2'
                  style={{ height: 'auto' }}
                />
                Mahjong
              </Link>

              <Link
                href='/pages/poker-guide'
                className='flex items-center justify-start whitespace-nowrap rounded-sm px-4 py-1 text-sm font-medium hover:bg-blue-300'
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
              </Link>

              <Link
                href='/pages/leaderboard'
                className='flex items-center justify-start whitespace-nowrap rounded-sm bg-blue-300 px-4 py-1 text-sm font-medium'
              >
                <Image
                  src='/img/leaderboard.png'
                  alt='Poker'
                  width={30}
                  height={30}
                  className='mr-2'
                  style={{ height: 'auto' }}
                />
                Leaderboard
              </Link>
            </SidebarSection>
          </Sidebar>
        </div>

        <div className='h-screen flex-1 flex-col'>
          <div className='mb-8 ml-4 mt-4 text-4xl'>LeaderBoard</div>

          <div className='mr-4'>
            <Table className='mb-8'>
              <TableHeader>
                <TableRow>
                  <TableHead className='w-[100px]'>Rank</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Experience</TableHead>
                  <TableHead className='text-right'>Level</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className='ml-2'>
                {arrayOfUsers.map((user, index) => (
                  <TableRow key={index}>
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
      </div>
    </>
  )
}
