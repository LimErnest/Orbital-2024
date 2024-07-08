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

const PokerGuide = () => {
  const { updateChessChapter, addXp, updateBadge, user } = useAuth()
  const [lastCompletedChapter, setLastCompletedChapter] = useState(1)
  const [currentTab, setCurrentTab] = useState('chapter1')
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  useEffect(() => {
    async function fetchChapter() {
      const chap = await updateChessChapter(1)
      setLastCompletedChapter(chap)
    }
    fetchChapter()
  }, [user])

  async function updateChapter(chapter: number) {
    if (chapter > lastCompletedChapter) {
      setLastCompletedChapter(chapter)
      const xp = addXp(20)
      const chap = updateChessChapter(chapter)
      if (chapter === 6) {
        updateBadge('chess50Guide')
        addXp(50)
        setIsDialogOpen(true)
      }
      if (chapter === 12) {
        updateBadge('chess100Guide')
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
          <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Congratulations on unlocking an achievement! 🎉
                </AlertDialogTitle>
                <AlertDialogDescription>
                  <div className='flex flex-col items-center'>
                    <Avatar className='mt-2 h-48 w-48'>
                      <AvatarImage src='/img/knightbadge.png' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='text-rg mt-6 font-medium'>
                      For completing 50% of the chess guide you have an
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

      <TabsContent
        value='chapter10'
        className='w-5/6 flex-shrink flex-grow p-4'
      >
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter10 />
          <ChapterNavigation chapterNumber={10} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent
        value='chapter11'
        className='w-5/6 flex-shrink flex-grow p-4'
      >
        <ScrollArea className='h-full w-full border-0 shadow-none'>
          <Chapter11 />
          <ChapterNavigation chapterNumber={11} />
          <ScrollBar orientation='vertical' />
        </ScrollArea>
      </TabsContent>

      <TabsContent
        value='chapter12'
        className='w-5/6 flex-shrink flex-grow p-4'
      >
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
                      <AvatarImage src='/img/rookbadge.png' />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className='text-rg mt-6 font-medium'>
                      For completing the chess guide you have an additional
                      100xp.
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
