'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface DashboardProps extends React.HTMLAttributes<HTMLDivElement> {
  setState: Function
}

const Dashboard: React.FC<DashboardProps> = ({ setState, ...props }) => {
  return (
    <>
      <div className='flex h-full flex-col items-center justify-center'>
        <div className='text-6xl font-semibold'>
          Lets get started, pick a game!
        </div>

        <div className='flex flex-row p-8'>
          <div className='px-4'>
            <Button
              onClick={() => setState('chessguide')}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  size: 'xl',
                  className:
                    'border-grey-300 flex w-full justify-center rounded-lg bg-gray-100 text-xl text-black shadow-lg hover:bg-blue-300'
                })
              )}
            >
              <Image
                src='/img/pawn_icon.jpg'
                alt='Chess'
                width={30}
                height={30}
                className='mr-2'
                style={{ height: 'auto' }}
              />
              Chess
            </Button>
          </div>

          <div className='px-4'>
            <Button
              onClick={() => setState('pokerguide')}
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                  size: 'xl',
                  className:
                    'border-grey-300 flex w-full justify-center rounded-lg bg-gray-100 text-xl text-black shadow-lg hover:bg-blue-300'
                })
              )}
            >
              <Image
                src='/img/poker_icon.jpg'
                alt='Poker'
                width={30}
                height={30}
                className='mr-2'
                style={{ height: 'auto' }}
              />
              Poker
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export { Dashboard }
