'use client'

import * as React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: NavbarProps) {
  return (
    <div
      className={cn(
        'fixed top-0 w-full rounded-b-lg bg-white py-2 shadow-xl',
        className
      )}
      {...props}
    >
      <div className='flex h-[4vh] items-center justify-between px-10'>
        <div className='px-0 text-center text-lg font-medium text-black'>
          <Link href='/'>Guidance</Link>
        </div>
        <div className='flex space-x-4'>
          <Link
            href='/pages/contact'
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            Contact Us
          </Link>
          <Link
            href='/pages/login'
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            Login
          </Link>
          <Link
            href='/pages/signup'
            className={cn(
              buttonVariants({
                variant: 'outline',
                className: 'bg-blue-300 hover:bg-blue-300'
              })
            )}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}
