'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <div
      className={cn(
        'fixed left-0 top-0 flex h-full w-1/6 flex-col border-r-2 border-gray-400',
        className
      )}
      style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)' }}
      {...props}
    >
      <div className='py-2 px-4 text-3xl font-bold text-black'>
        <Link href='/pages/dashboard'>Guidance</Link>
      </div>
      <div className='flex flex-row items-center border-b-2 border-gray-400 px-4 py-1 text-2xl font-bold text-black'>
        <Avatar className='h-20 w-20'>
          <AvatarImage src='https://github.com/shadcn.png' alt='User' />
          <AvatarFallback>User</AvatarFallback>
        </Avatar>
        <span className='ml-4'>Name</span>
      </div>
      <div className='border-b-2 border-gray-400'>Chess</div>
      <div className='border-b-2 border-gray-400'>Mahjong</div>
      <div className='border-b-2 border-gray-400'>Poker</div>
    </div>
  )
}
