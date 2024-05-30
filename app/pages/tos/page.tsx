import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Navbar } from '@/components/ui/navbar'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function TOSPage() {
  return (
    <>
      <div className='container relative hidden h-screen flex flex-col items-center justify-center rounded-md border border-gray-300 md:grid lg:max-w-none lg:px-0'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage:
              'url(/img/nicebackground1.gif)',
            zIndex: -1
          }}
        />
        <Navbar/>
        <ScrollArea className='h-[600px] w-[600px] rounded-md bg-white p-6'>
          <h1 className='mb-4 text-4xl font-bold text-center'>Terms and Conditions</h1>
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
