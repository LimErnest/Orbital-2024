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
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function GuidePage() {
  return (
    <>
      <div className='flex flex-row'>
        <Sidebar className='bg-gray-100'>
          <SidebarSection className='py-2 px-2'>
            <div>
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
            </div>

            <div>
              <Link
                href='/pages/chess'
                className={cn(
                  buttonVariants({
                    variant: 'ghost',
                    className: 'flex justify-start w-full rounded-sm bg-blue-300 hover:bg-blue-300'
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>

            <div>
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
            </div>
          </SidebarSection>
        </Sidebar>

        <div className='h-screen flex flex-col items-center flex-1 py-4'>
          <div className=''>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <div className='flex py-4'>
            <Carousel className="items-center">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card className="w-400 h-400">
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
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
