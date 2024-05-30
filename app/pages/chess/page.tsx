import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Sidebar, SidebarSection } from '@/components/ui/sidebar'
import { buttonVariants } from '@/components/ui/button'
import { CheckUser } from '@/components/ui/checkuser'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"





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

        <div>
          <Tabs defaultValue="chapter1" className="flex h-screen">
            <TabsList className='flex flex-col w-[100px] h-screen justify-start'>
              <TabsTrigger value="chapter1">Chapter 1:</TabsTrigger>
              <TabsTrigger value="chapter2">Chapter 2:</TabsTrigger>
              <TabsTrigger value="chapter3">Chapter 3:</TabsTrigger>
              <TabsTrigger value="chapter4">Chapter 4:</TabsTrigger>
              <TabsTrigger value="chapter5">Chapter 5:</TabsTrigger>
              <TabsTrigger value="chapter6">Chapter 6:</TabsTrigger>
            </TabsList>

            <TabsContent value="chapter1"
              className='px-2'>
              Chapter 1.... <br />
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
            </TabsContent>

            <TabsContent value="chapter2"
              className='px-2'>
              Chapter 2 ...
            </TabsContent>
            
            <TabsContent value="chapter3"
              className='px-2'>
              Chapter 3 ...
            </TabsContent>

            <TabsContent value="chapter4"
              className='px-2'>
              Chapter 4 ...
            </TabsContent>
            <TabsContent value="chapter5"
              className='px-2'>
              Chapter 5 ...
            </TabsContent>
            <TabsContent value="chapter6"
              className='px-2'>
              Chapter 6 ...
            </TabsContent>
          </Tabs>

        </div>
        
      </div>
    </>
  )
}
