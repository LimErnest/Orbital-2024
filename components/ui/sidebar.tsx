'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button, buttonVariants } from '@/components/ui/button'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import { useAuth } from '../../app/context/AuthContext'
import { Icons } from './icon'
import { redirect } from 'next/navigation'
import { set } from 'react-hook-form'
import { Badges } from '@/components/ui/badges'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

const Sidebar: React.FC<SidebarProps> = ({ children, className, ...props }) => {
  const { logOut, user } = useAuth()
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(true)

  const handleLogout = async (event: React.MouseEvent) => {
    event.preventDefault()
    await logOut()
    window.location.href = '/pages/login'
  }

  useEffect(() => {
    if (user.session === null) {
      return
    } else if (user.session === false) {
      redirect('/pages/login')
    } else {
      setUsername(user.username)
      setLoading(false)
    }
  }, [user])

  if (loading) {
    return (
      <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
        <Icons.spinner className='h-20 w-20 animate-spin' />
      </div>
    )
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
          className='px-4 py-2 text-3xl font-semibold text-black'
          href='/pages/dashboard'
        >
          Guidance
        </Link>

        <Dialog>
          <DialogTrigger>
            <div className='flex flex-row items-center px-4 pb-3'>
              <Avatar className='h-[3rem] w-[3rem]'>
                <AvatarImage src='https://github.com/shadcn.png' alt='User' />
                <AvatarFallback></AvatarFallback>
              </Avatar>
              <span className='overflow-wrap break-word text-rg ml-4 hyphens-auto text-black'>
                {username}
              </span>
            </div>
          </DialogTrigger>
          <DialogContent className='max-w-screen-md w-full h-auto md:h-4/5 p-6 overflow-y-auto'>
            <DialogHeader>
              <DialogTitle className='text-3xl'>Badge Inventory</DialogTitle>
              <DialogDescription>
                  <Badges />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      {children}
      <div className='border-t border-gray-300 px-2 py-2'>
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
            src='/img/settings_icon.jpg'
            alt='Settings'
            width={20}
            height={5}
            className='mr-2'
          />
          Settings
        </Link>

        <Button
          onClick={handleLogout}
          className={cn(
            buttonVariants({
              variant: 'ghost',
              className:
                'flex w-full justify-start rounded-sm bg-gray-100 text-red-600 shadow-none hover:bg-red-300'
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
  )
}

export interface SidebarSectionProps
  extends React.HTMLAttributes<HTMLDivElement> { }

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
