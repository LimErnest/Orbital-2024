import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { UserAuthForm } from '@/components/ui/user-auth-form'
import { Navbar } from '@/components/ui/navbar'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function AuthenticationPage() {
  return (
    <>
      <div className='container relative hidden h-[2000px] flex-col items-center justify-center rounded-md border border-gray-300 md:grid lg:max-w-none lg:px-0'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              'url(/img/nicebackground1.gif)',
            zIndex: -1
          }}
        />
        <Navbar/>
        <div className='flex items-center justify-center lg:p-8'>
          <div className='border- mx-auto flex h-[450px] w-full flex-col justify-center space-y-6 rounded-md border border-gray-300 bg-white p-4 sm:w-[450px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>
                Create an account
              </h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking sign up, you agree to our{' '}
              <Link
                href='/pages/tos'
                className='underline underline-offset-4 hover:text-primary'
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href='/pages/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}