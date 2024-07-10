import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { SignInForm } from '@/components/ui/sign-in-form'
import { Navbar } from '@/components/ui/navbar'
import { CheckUser } from '@/components/ui/checkuser'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function AuthenticationPage() {
  return (
    <>
      <div className='container relative flex hidden h-screen flex-col items-center justify-center rounded-md border border-gray-300 md:grid lg:max-w-none lg:px-0'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: 'url(/img/nicebackground1.gif)',
            zIndex: -1
          }}
        />
        <Navbar />
        <div className='flex items-center justify-center lg:p-8'>
          <div className='border- mx-auto flex h-[300px] w-full flex-col justify-center space-y-6 rounded-md border border-gray-300 bg-white p-4 sm:w-[450px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>Log in</h1>
              <p className='text-sm text-muted-foreground'>
                Enter your email and password below
              </p>
            </div>
            <SignInForm />
          </div>
        </div>
      </div>
    </>
  )
}
