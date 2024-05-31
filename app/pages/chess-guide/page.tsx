import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { buttonVariants } from '@/components/ui/button'
import { CheckUser } from '@/components/ui/checkuser'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/guide-scroll-area'
import { Chapter1, Chapter2, Chapter3 } from '@/components/ui/chessguide/chapters'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function GuidePage() {
  return (
    <>
      <div className='flex'>
        <div className='h-full w-full max-w-[13rem] shrink-0'>
          <Sidebar className='bg-gray-100'>
            <SidebarSection className='px-2 py-2'>
              <Link
                href='/pages/dashboard'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'flex justify-start rounded-sm hover:bg-blue-300'
                  })
                )}
              >
                <Image
                  src='/img/home_icon.jpg'
                  alt='Home'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Home
              </Link>

              <Link
                href='/pages/chess'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className:
                      'flex w-full justify-start rounded-sm bg-blue-300 hover:bg-blue-300'
                  })
                )}
              >
                <Image
                  src='/img/pawn_icon.jpg'
                  alt='Chess'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Guide
              </Link>

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
                  src='/img/pawn_icon.jpg'
                  alt='Mahjong'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Daily Quiz
              </Link>

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
                  src='/img/pawn_icon.jpg'
                  alt='Poker'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Leaderboard
              </Link>

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
                  src='/img/pawn_icon.jpg'
                  alt='Poker'
                  width={30}
                  height={10}
                  className='mr-2'
                />
                Final Quest
              </Link>
            </SidebarSection>
          </Sidebar>
        </div>

        <div className='h-screen w-full overflow-hidden p-20'>
          <Tabs
            defaultValue='chapter1'
            className='flex flex h-full w-full shrink-0 flex-row rounded-lg border border-gray-300 bg-white'
          >
            <TabsList className='flex h-full w-1/6 flex-shrink flex-col justify-start overflow-auto border-r border-gray-300 px-3 py-3'>
              <TabsTrigger value='chapter1'>Chapter 1: Introduction</TabsTrigger>
              <TabsTrigger value='chapter2'>Chapter 2: Pawns</TabsTrigger>
              <TabsTrigger value='chapter3'>Chapter 3: Knights</TabsTrigger>
              <TabsTrigger value='chapter4'>Chapter 4: Bishops</TabsTrigger>
              <TabsTrigger value='chapter5'>Chapter 5: Rooks</TabsTrigger>
              <TabsTrigger value='chapter6'>Chapter 6: Queen</TabsTrigger>
              <TabsTrigger value='chapter7'>Chapter 7: King</TabsTrigger>
              <TabsTrigger value='chapter8'>Chapter 8: Check/Mate</TabsTrigger>
              <TabsTrigger value='chapter9'>Chapter 9: Castling</TabsTrigger>
              <TabsTrigger value='chapter10'>Chapter 10: En Passant</TabsTrigger>
              <TabsTrigger value='chapter11'>Chapter 11: Draws</TabsTrigger>
              <TabsTrigger value='chapter12'>Chapter 12: Summary</TabsTrigger>
            </TabsList>

            <TabsContent
              value='chapter1'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <Chapter1 />
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter2'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <Chapter2 />
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter3'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <Chapter3 />
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter4'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter5'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter6'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter7'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter8'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter9'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter10'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter11'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>

            <TabsContent
              value='chapter12'
              className='w-5/6 flex-shrink flex-grow p-4'
            >
              <ScrollArea className='h-full w-full border-0 shadow-none'>
                <ScrollBar orientation='vertical' />
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  )
}
