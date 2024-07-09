'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from '@/components/ui/guide-scroll-area'
import {
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10,
  Chapter11,
  Chapter12
} from '@/components/ui/poker-components/poker-chapters'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/app/context/AuthContext'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@/components/ui/accordion'

const PokerGuide = () => {
  const { updatePokerChapter, addXp, updateBadge, user } = useAuth()
  const [lastCompletedChapter, setLastCompletedChapter] = useState(1)
  const [currentTab, setCurrentTab] = useState('chapter1')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    async function fetchChapter() {
      const chap = await updatePokerChapter(1)
      setLastCompletedChapter(chap)
    }
    fetchChapter()
  }, [user])

  async function updateChapter(chapter: number) {
    if (chapter > lastCompletedChapter) {
      setLastCompletedChapter(chapter)
      const xp = addXp(20)
      const chap = updatePokerChapter(chapter)
      if (chapter === 8) {
        updateBadge('poker50Guide')
        addXp(50)
        setIsDialogOpen(true)
      }
      if (chapter === 12) {
        updateBadge('poker100Guide')
        addXp(100)
        setIsDialogOpen(true)
      }
    }
    setCurrentTab(`chapter${chapter}`)
  }

  interface ChapterButtonProps {
    chapterNumber: number
  }

  const NextChapterButton: React.FC<ChapterButtonProps> = ({
    chapterNumber
  }) => {
    return (
      <Button onClick={() => updateChapter(chapterNumber)} className='mt-2'>
        Next Chapter
      </Button>
    )
  }

  const PrevChapterButton: React.FC<ChapterButtonProps> = ({
    chapterNumber
  }) => {
    return (
      <Button onClick={() => updateChapter(chapterNumber)} className='mt-2'>
        Prev Chapter
      </Button>
    )
  }

  const ChapterNavigation: React.FC<ChapterButtonProps> = ({
    chapterNumber
  }) => {
    return (
      <div className='flex justify-between pr-6'>
        <PrevChapterButton chapterNumber={chapterNumber - 1} />
        <NextChapterButton chapterNumber={chapterNumber + 1} />
      </div>
    )
  }

  return (
    <Tabs
      value={currentTab}
      onValueChange={value => setCurrentTab(value)}
      className='flex flex h-full w-full shrink-0 flex-row rounded-lg border border-gray-300 bg-white'
    >
      <TabsList className='flex h-full flex-shrink flex-col justify-start overflow-auto border-r border-gray-300 px-3 py-3'>
        <Accordion type='multiple' defaultValue={['item-1', 'item-2']}>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='font-medium text-black'>
              Basic Guide
            </AccordionTrigger>
            <AccordionContent>
              <TabsTrigger value='chapter1' className='text-gray-800'>
                Chapter 1: Introduction
              </TabsTrigger>
              <TabsTrigger
                value='chapter2'
                disabled={lastCompletedChapter < 2}
                className={
                  lastCompletedChapter < 2 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 2: Set Up
              </TabsTrigger>
              <TabsTrigger
                value='chapter3'
                disabled={lastCompletedChapter < 3}
                className={
                  lastCompletedChapter < 3 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 3: Betting
              </TabsTrigger>
              <TabsTrigger
                value='chapter4'
                disabled={lastCompletedChapter < 4}
                className={
                  lastCompletedChapter < 4 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 4: Pre-flop
              </TabsTrigger>
              <TabsTrigger
                value='chapter5'
                disabled={lastCompletedChapter < 5}
                className={
                  lastCompletedChapter < 5 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 5: Flop
              </TabsTrigger>
              <TabsTrigger
                value='chapter6'
                disabled={lastCompletedChapter < 6}
                className={
                  lastCompletedChapter < 6 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 6: Turn
              </TabsTrigger>
              <TabsTrigger
                value='chapter7'
                disabled={lastCompletedChapter < 7}
                className={
                  lastCompletedChapter < 7 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 7: River
              </TabsTrigger>
              <TabsTrigger
                value='chapter8'
                disabled={lastCompletedChapter < 8}
                className={
                  lastCompletedChapter < 8 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 8: Other Scenarios
              </TabsTrigger>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value='item-2'>
            <AccordionTrigger className='font-medium text-black'>
              Advanced Tactics
            </AccordionTrigger>
            <AccordionContent>
              <TabsTrigger
                value='chapter9'
                disabled={lastCompletedChapter < 9}
                className={
                  lastCompletedChapter < 9 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 9: Continuation Bet
              </TabsTrigger>
              <TabsTrigger
                value='chapter10'
                disabled={lastCompletedChapter < 10}
                className={
                  lastCompletedChapter < 10 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 10: More on C-Bet
              </TabsTrigger>
              <TabsTrigger
                value='chapter11'
                disabled={lastCompletedChapter < 11}
                className={
                  lastCompletedChapter < 11 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 11: Three Betting
              </TabsTrigger>
              <TabsTrigger
                value='chapter12'
                disabled={lastCompletedChapter < 12}
                className={
                  lastCompletedChapter < 12 ? 'text-gray-500' : 'text-gray-800'
                }
              >
                Chapter 12: Betting on the River
              </TabsTrigger>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsList>

      <TabsContent value='chapter1' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter1 />
          <div className='flex justify-end px-6'>
            <NextChapterButton chapterNumber={2} />
          </div>
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter2' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter2 />
          <ChapterNavigation chapterNumber={2} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter3' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter3 />
          <ChapterNavigation chapterNumber={3} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter4' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter4 />
          <ChapterNavigation chapterNumber={4} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter5' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter5 />
          <ChapterNavigation chapterNumber={5} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter6' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter6 />
          <ChapterNavigation chapterNumber={6} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter7' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter7 />
          <ChapterNavigation chapterNumber={7} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter8' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Congratulations on unlocking an achievement! 🎉
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className='flex flex-col items-center'>
                    <Avatar className='mt-2 h-48 w-48'>
                      <AvatarImage src='/img/queencardbadge.png' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='text-rg mt-6 font-medium'>
                      For completing the basic poker guide you have an
                      additional 50xp.
                    </span>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Chapter8 />
          <ChapterNavigation chapterNumber={8} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>
      
      <TabsContent value='chapter9' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter9 />
          <ChapterNavigation chapterNumber={9} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter10' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter10 />
          <ChapterNavigation chapterNumber={10} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter11' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter11 />
          <ChapterNavigation chapterNumber={11} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent value='chapter12' className='w-5/6 flex-shrink flex-grow p-4'>
        <ScrollArea className='h-full w-full border-0 shadow-none'>
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Congratulations on unlocking an achievement! 🎉
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className='flex flex-col items-center'>
                    <Avatar className='mt-2 h-48 w-48'>
                      <AvatarImage src='/img/kingbadge.png' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='text-rg mt-6 font-medium'>
                      For completing the advanced poker tactics you have an
                      additional 100xp.
                    </span>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Chapter12 />
          <PrevChapterButton chapterNumber={11} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>
    </Tabs>
  )
}

export { PokerGuide }
