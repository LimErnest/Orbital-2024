'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button, buttonVariants } from '@/components/ui/button'
import { useAuth } from '../../app/context/AuthContext'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Input } from '@/components/ui/input'
import { db } from '../../firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { Icons } from './icon'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

const Sidebar: React.FC<SidebarProps> = ({ children, className, ...props }) => {
  const { logOut, user } = useAuth()
  const [username, setUsername] = useState('')
  const [inputUsername, setInputUsername] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [updateUsername, setUpdateUsername] = useState(false)

  const handleLogout = async (event: React.MouseEvent) => {
    event.preventDefault()
    await logOut()
    window.location.href = '/pages/login'
  }

  const handleUsernameSubmit = async () => {
    if (user?.uid && inputUsername) {
      const docRef = doc(db, 'users', user.uid)
      await setDoc(docRef, { username: inputUsername })
      setUsername(inputUsername)
      setUpdateUsername(false)
      user.username = inputUsername
    }
  }

  useEffect(() => {
    const fetchUsername = async () => {
      if (user && user.username !== '') {
        setUsername(user.username)
      } else {
        setUpdateUsername(true)
      }
    }
    fetchUsername()
  })

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
        <div className='flex flex-row items-center px-4 pb-3'>
          <Avatar className='h-[3rem] w-[3rem]'>
            <AvatarImage src='https://github.com/shadcn.png' alt='User' />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <span className='overflow-wrap break-word text-rg ml-4 hyphens-auto text-black'>
            {username}
          </span>
        </div>
      </div>
      {children}
      <div className='border-t border-gray-300 px-2 py-2'>
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

      <AlertDialog open={updateUsername} onOpenChange={setUpdateUsername}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Please set a username</AlertDialogTitle>
            <AlertDialogDescription>
              <Input
                id='username'
                placeholder='Username'
                type='text'
                autoCapitalize='none'
                autoComplete='none'
                autoCorrect='off'
                disabled={isLoading}
                value={inputUsername}
                onChange={e => setInputUsername(e.target.value)}
                required={true}
              />
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleUsernameSubmit}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
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
