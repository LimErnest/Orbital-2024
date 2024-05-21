import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
}

export default function PrivacyPage() {
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
        <ScrollArea className='h-[600px] w-[600px] rounded-md border bg-white p-6'>
          <h1 className='mb-4 text-4xl font-bold text-center'>Privacy Policy</h1>
          <ul className='list-decimal space-y-2 pl-5'>
            <li>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</li>
            <li>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</li>
            <li>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</li>
            <li>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</li>
            <li>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</li>
            <li>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</li>
            <li>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</li>
          </ul>
        </ScrollArea>
      </div>
    </>
  )
}
