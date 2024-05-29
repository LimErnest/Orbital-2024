'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { useAuth } from '../../app/context/AuthContext'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar: React.FC<SidebarProps> = ({ children, className, ...props }) => {
  const { logOut } = useAuth()

  const handleLogout = async (event: React.MouseEvent) => {
    event.preventDefault()
    await logOut()
    window.location.href = '/pages/login'
  }
  return (
    <div
      className={cn(
        'fixed left-0 top-0 flex h-full w-full max-w-[13rem] shrink-0 flex-col border-r border-gray-300',
        className
      )}
      {...props}
    >
      <div className='flex flex-col border-b border-gray-300'>
        <Link
          className='text-3xl px-4 py-2 font-semibold text-black'
          href='/pages/dashboard'
        >
          Guidance
        </Link>
        <div className='flex flex-row items-center px-4 pb-3'>
          <Avatar className='h-[3rem] w-[3rem]'>
            <AvatarImage src='https://github.com/shadcn.png' alt='User' />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
          <span className='overflow-wrap break-word text-rg ml-4 hyphens-auto text-black'>
            When users sign in ask for nickname and display here
          </span>
        </div>
      </div>
      {children}
      <div className='border-t border-gray-300 px-2 pb-2'>
        <div>
          <Link
            href='/pages/poker'
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: 'flex justify-start rounded-sm hover:bg-blue-300'
              })
            )}
          >
            <Image
            src='/img/settings_icon.jpg'
            alt='Settings'
            width={20}
            height={5}
            className='mr-2'
            />
            Settings
          </Link>
        </div>
        <div>
          <Button
            onClick={handleLogout}
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className: 'flex justify-start w-full rounded-sm bg-white text-red-600 hover:bg-red-300 shadow-none'
              })
            )}
          >
          <Image
            src='/img/power_icon.jpg'
            alt='Settings'
            width={20}
            height={5}
            className='mr-2' 
          />
            Log Out
          </Button>
        </div>    
      </div>
    </div>
  )
}

export interface SidebarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  children,
  className,
  style,
  ...props
}) => {
  return (
    <div className={cn('h-full', className)} style={style} {...props}>
      {children}
    </div>
  )
}

export { Sidebar, SidebarSection }