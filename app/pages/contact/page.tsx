import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
}

export default function ConatacPage() {
  return (
    <>
      <div className='container relative hidden h-[2000px] flex-col items-center justify-center rounded-md border border-gray-300 md:grid lg:max-w-none lg:px-0'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              'url(https://www.hackingchinese.com/wp-content/uploads/2015/04/mahjong-game.jpg)',
            zIndex: -1
          }}
        />
        <div className='fixed top-0 w-full rounded-b-lg bg-white py-2 shadow-xl'>
          <div className='flex h-[2.75rem] items-center justify-between px-10'>
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
            </div>
          </div>
        </div>
        <div className='flex flex-wrap justify-between'>
          <Card className='m-2 flex w-[350px]'>
            <div>
              <CardHeader>
                <CardTitle className='text-lg'>Ernest Lim</CardTitle>
                <CardDescription>big boss</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p>
                    <strong>Email:</strong>
                  </p>
                  <p>example@email.com</p>
                </div>
                <div>
                  <p>
                    <strong>Business Number:</strong>
                  </p>
                  <p>+65 123451234</p>
                </div>
              </CardContent>
            </div>
            <div className='flex flex-1 items-center justify-center ml-[-10px]'>
              <Avatar className='h-20 w-20'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@ErnestLim'
                />
                <AvatarFallback>EL</AvatarFallback>
              </Avatar>
            </div>
          </Card>
          <Card className='m-2 flex w-[350px]'>
            <div>
              <CardHeader>
                <CardTitle className='text-lg'>Otto Tan</CardTitle>
                <CardDescription>slave</CardDescription>
              </CardHeader>
              <CardContent>
                <div>
                  <p>
                    <strong>Email:</strong>
                  </p>
                  <p>example@email.com</p>
                </div>
                <div>
                  <p>
                    <strong>Business Number:</strong>
                  </p>
                  <p>+65 123451234</p>
                </div>
              </CardContent>
            </div>
            <div className='flex flex-1 items-center justify-center ml-[-10px]'>
              <Avatar className='h-20 w-20'>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@OttoTan'
                />
                <AvatarFallback>OT</AvatarFallback>
              </Avatar>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}
