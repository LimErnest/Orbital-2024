import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { buttonVariants } from '@/components/ui/button'
import { CheckUser } from '@/components/ui/checkuser'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"


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
                href='/pages/daily_quiz'
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
                href='/pages/leaderboard'
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
                href='/pages/final_quest'
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

        <div className='flex h-screen flex-1 flex-grow flex-col'>
          <Pagination className='py-6'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href='#' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#' isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href='#'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href='#' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>

          <div className='flex flex-grow items-center justify-center px-5 pb-2'>
            <Carousel className='items-center w-[90rem] h-[50rem]'>
              <CarouselContent>
                <CarouselItem>
                  <ScrollArea className='w-full h-[50rem]'>
                    <span className='text-4xl font-semibold'>
                      Chapter: 1 <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />
                      떨리는 지금도 you're on my mind all the time <br />
                      I wanna tell you, but I'm super shy, super shy <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />
                      떨리는 지금도 you're on my mind all the time <br />
                      I wanna tell you, but I'm super shy, super shy <br />
                      And I wanna go out with you, where you wanna go? (Huh?) <br />
                      Find a lil' spot, just sit and talk <br />
                      Looking pretty, follow me, 우리 둘이 나란히 <br />
                      보이지? 내 눈이 갑자기 빛나지 when you say I'm your dream <br />
                      You don't even know my name, do you? <br />
                      You don't even know my name, do you? <br />
                      누구보다도 <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />
                      떨리는 지금도 you're on my mind all the time <br />
                      I wanna tell you, but I'm super shy, super shy <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />
                      떨리는 지금도 you're on my mind all the time <br />
                      I wanna tell you, but I'm super shy, super shy <br />
                      나 원래 말도 잘하고 그런데 왜 이런지? <br />
                      I don't like that <br />
                      Something odd about you, yeah, you're special and you know it <br />
                      You're the top, babe <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />
                      떨리는 지금도 you're on my mind all the time <br />
                      I wanna tell you, but I'm super shy, super shy <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />
                      떨리는 지금도 you're on my mind all the time <br />
                      I wanna tell you, but I'm super shy, super shy <br />
                      You don't even know my name, do you? <br />
                      You don't even know my name, do you? <br />
                      누구보다도 <br />
                      You don't even know my name (super shy, super shy) <br />
                      Do you? (Make you mine, make you mine) <br />
                      You don't even know my name (you're on my mind all the time, I wanna tell you) <br />
                      Do you? (But I'm super shy, I'm super shy) <br />
                    </span>
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>

                </CarouselItem>
                <CarouselItem>
                  <ScrollArea className='w-full h-[50rem]'>
                    <span className='text-4xl font-semibold'>
                      Chapter: 2 <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />

                    </span>
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                </CarouselItem>

                <CarouselItem>
                  <ScrollArea className='w-full h-[50rem]'>
                    <span className='text-4xl font-semibold'>
                      Chapter: 3 <br />
                      I'm super shy, super shy <br />
                      But wait a minute while I make you mine, make you mine <br />

                    </span>
                    <ScrollBar orientation="vertical" />
                  </ScrollArea>
                </CarouselItem>

              </CarouselContent>
              
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
