'use client'

import { Metadata } from 'next'
import React, { useState, useEffect, useRef } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { HowToPlay } from '@/components/ui/howToPlay'
import { Button } from '@/components/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { useAuth } from '@/app/context/AuthContext'
import { cn } from '@/lib/utils'
import { Icons } from '.././icon'
import { Cards } from '@/components/ui/poker-components/card'
import { set } from 'react-hook-form'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

interface UserFinalQuestData {
  finalQuestPuzzleID: number
  isCompleted: boolean
}

const PokerFinalQuest = () => {
  const {
    user,
    fetchPokerFinalQuest,
    updatePokerFinalQuestStatus,
    updateBadge,
    updatePokerFinalQuestID,
    addXp
  } = useAuth()
  const [questID, setQuestID] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const [finalQuestStatus, setfinalQuestStatus] = useState(false)

  useEffect(() => {
    if (user) {
      fetchPokerFinalQuest(user.uid).then((data: UserFinalQuestData) => {
        updateUserFinalQuest(data)
      })
      setTimeout(() => {
        setIsLoading(false)
      }, 250)
    }
  }, [user])

  const updateUserFinalQuest = async (data: UserFinalQuestData) => {
    if (!data) {
      console.error('Data is undefined or null')
      return
    } else {
      console.log('Fetched finalQuest:', data)
      setQuestID(data.finalQuestPuzzleID)
      setfinalQuestStatus(data.isCompleted)
    }
  }

  const displayCongrats = () => {
    setfinalQuestStatus(true)
    updatePokerFinalQuestStatus()
    updateBadge('pokerFinalQuest')
    addXp(250)
  }

  const setNextQuest = () => {
    let currentQuestID = questID + 1
    setQuestID(currentQuestID)
    updatePokerFinalQuestID(currentQuestID)
  }

  const getCardContent = (id: number) => {
    switch (id) {
      case 1:
        return <Quest1 />
      case 2:
        return <Quest2 />
      case 3:
        return <Quest3 />
      case 4:
        return <Quest4 />
      case 5:
        return <Quest5 />
      default:
        return <div>Loading</div>
    }
  }

  const Quest1 = () => {
    const [currOption, setCurrOption] = useState('')
    const options = [
      'Five of a kind',
      'Royal Flush',
      'Full House',
      'Four of a kind'
    ]
    const correctAnswer = 'Five of a kind'

    return (
      <div>
        <Card className='h-fit w-full border-none shadow-none'>
          <CardHeader>
            <CardTitle className='flex justify-center text-4xl'>
              Which of the following is not a poker combination / hand?
            </CardTitle>
          </CardHeader>
          <CardContent className='mb-4 flex flex-col items-center'>
            {options.map((option, index) =>
              option == correctAnswer ? (
                <AlertDialog key={`alert-${option}`}>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant={'outline'}
                      size={'xl'}
                      className={`border-2px my-4 h-24 w-3/12 border-black text-2xl
                        ${currOption === option ? 'bg-green-300 hover:bg-green-300' : ''}`}
                      onClick={() => {
                        setCurrOption(option)
                      }}
                    >
                      {option}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className='h-4/6 w-11/12'>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='mb-8 flex justify-center text-4xl'>
                        Correct!
                      </AlertDialogTitle>
                      <AlertDialogDescription className='mb-8 flex flex-col justify-center text-wrap text-xl'>
                        <span>
                          Royal Flush, Full House and Four of a kind are all
                          possibe poker hands.
                        </span>
                        <br />
                        <span>
                          Since there are only 4 of the same card in a deck, it
                          is not possible to have 5 of a kind.
                        </span>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className='flex items-center object-bottom'>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                        onClick={() => setNextQuest()}
                      >
                        Next Quest
                      </AlertDialogCancel>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                      >
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button
                  key={`button-${option}`}
                  variant={'outline'}
                  size={'xl'}
                  className={`border-2px my-4 h-24 w-3/12 border-black text-2xl
                  ${currOption === option ? 'bg-red-300 hover:bg-red-300' : ''}`}
                  onClick={() => setCurrOption(option)}
                >
                  {option}
                </Button>
              )
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  const Quest2 = () => {
    const [currOption, setCurrOption] = useState('')
    const options = [
      'Straight Flush',
      'Four of a kind',
      'Royal Flush',
      'Full House'
    ]
    const correctAnswer = 'Royal Flush'

    return (
      <div>
        <Card className='h-fit w-full border-none shadow-none'>
          <CardHeader>
            <CardTitle className='flex justify-center text-4xl'>
              Which of the following is this poker hand?
            </CardTitle>
            <Cards community={false} cards={'TD KS 7C AS TS'} />
            <div className='mr-40 flex flex-row items-center justify-center gap-20'>
              <span className='mb-2 text-xl font-bold'>Your hand</span>
              <Cards community={false} cards={'JS QS'} />
            </div>
          </CardHeader>
          <CardContent className='mb-4 flex flex-row items-center gap-4'>
            {options.map((option, index) =>
              option == correctAnswer ? (
                <AlertDialog key={`alert-${option}`}>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant={'outline'}
                      size={'xl'}
                      className={`border-2px my-4 h-24 w-3/12 border-black text-2xl
                        ${currOption === option ? 'bg-green-300 hover:bg-green-300' : ''}`}
                      onClick={() => {
                        setCurrOption(option)
                      }}
                    >
                      {option}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className='h-4/6 w-11/12'>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='mb-8 flex justify-center text-4xl'>
                        Correct!
                      </AlertDialogTitle>
                      <AlertDialogDescription className='mb-8 flex flex-col justify-center text-wrap text-xl'>
                        <span>A Royal Flush consists of:</span>
                        <br />
                        <span>1. A straight from Ace to Ten</span>
                        <span>2. All cards must have the same suit</span>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className='flex items-center object-bottom'>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                        onClick={() => setNextQuest()}
                      >
                        Next Quest
                      </AlertDialogCancel>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                      >
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button
                  key={`button-${option}`}
                  variant={'outline'}
                  size={'xl'}
                  className={`border-2px my-4 h-24 w-3/12 border-black text-2xl
                  ${currOption === option ? 'bg-red-300 hover:bg-red-300' : ''}`}
                  onClick={() => setCurrOption(option)}
                >
                  {option}
                </Button>
              )
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  const Quest3 = () => {
    const [currOption, setCurrOption] = useState('')
    const options = [
      'Small Blind: smaller forced bet placed by player to the right of the dealer, Big Blind: larger forced bet placed by player to the right of small blind',
      'Small Blind: smaller forced bet placed by player to the left of the big blind, Big Blind: larger forced bet placed by player to the left of dealer',
      'Small Blind: larger forced bet placed by player to the left of the dealer, Big Blind: smaller forced bet placed by player to the left of small blind',
      'Small Blind: smaller forced bet placed by player to the left of the dealer, Big Blind: larger forced bet placed by player to the left of small blind'
    ]
    const correctAnswer =
      'Small Blind: smaller forced bet placed by player to the left of the dealer, Big Blind: larger forced bet placed by player to the left of small blind'

    return (
      <div>
        <Card className='h-fit w-full border-none shadow-none'>
          <CardHeader>
            <CardTitle className='flex justify-center text-4xl'>
              What is Small blind and Big blind?
            </CardTitle>
          </CardHeader>
          <CardContent className='mb-4 flex flex-col items-center'>
            {options.map((option, index) =>
              option == correctAnswer ? (
                <AlertDialog key={`alert-${option}`}>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant={'outline'}
                      size={'xl'}
                      className={`border-2px my-4 h-24 w-11/12 text-wrap border-black text-xl
                        ${currOption === option ? 'bg-green-300 hover:bg-green-300' : ''}`}
                      onClick={() => {
                        setCurrOption(option)
                      }}
                    >
                      {option}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className='h-4/6 w-11/12'>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='mb-8 flex justify-center text-4xl'>
                        Correct!
                      </AlertDialogTitle>
                      <AlertDialogDescription className='mb-8 flex flex-col justify-center text-wrap text-xl'>
                        <span>
                          Small Blind: smaller forced bet placed by player to
                          the left of the dealer.
                        </span>
                        <br />
                        <span>
                          Big Blind: larger forced bet placed by player to the
                          left of small blind.
                        </span>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className='flex items-center object-bottom'>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                        onClick={() => setNextQuest()}
                      >
                        Next Quest
                      </AlertDialogCancel>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                      >
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button
                  key={`button-${option}`}
                  variant={'outline'}
                  size={'xl'}
                  className={`border-2px my-4 h-24 w-11/12 text-wrap border-black text-xl
                  ${currOption === option ? 'bg-red-300 hover:bg-red-300' : ''}`}
                  onClick={() => setCurrOption(option)}
                >
                  {option}
                </Button>
              )
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  const Quest4 = () => {
    const [currOption, setCurrOption] = useState('')
    const options = [
      'Touching hair, Staring to space, Change in voice',
      'Shaking hands, Changes in breathing, Eye contact, Change in speech patterns and tone',
      'Digging nose, Change in pitch, Leaving the table',
      'Eating food, closing eyes, Shaking leg'
    ]
    const correctAnswer =
      'Shaking hands, Changes in breathing, Eye contact, Change in speech patterns and tone'

    return (
      <div>
        <Card className='h-fit w-full border-none shadow-none'>
          <CardHeader>
            <CardTitle className='flex justify-center text-4xl'>
              What are some common tells you might look for in live poker?
            </CardTitle>
          </CardHeader>
          <CardContent className='mb-4 flex flex-col items-center'>
            {options.map((option, index) =>
              option == correctAnswer ? (
                <AlertDialog key={`alert-${option}`}>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant={'outline'}
                      size={'xl'}
                      className={`border-2px my-4 h-24 w-11/12 text-wrap border-black text-2xl
                        ${currOption === option ? 'bg-green-300 hover:bg-green-300' : ''}`}
                      onClick={() => {
                        setCurrOption(option)
                      }}
                    >
                      {option}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className='h-4/6 w-11/12'>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='mb-8 flex justify-center text-4xl'>
                        Correct!
                      </AlertDialogTitle>
                      <AlertDialogDescription className='mb-8 flex flex-col justify-center text-wrap text-xl'>
                        <span>
                          Physical tells like shaking hands, changes in
                          breathing, eye contact, and betting patterns.
                        </span>
                        <br />
                        <span>
                          Verbal tells such as change in speech patterns and
                          tone can also be indicators.
                        </span>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className='flex items-center object-bottom'>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                        onClick={() => setNextQuest()}
                      >
                        Next Quest
                      </AlertDialogCancel>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                      >
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button
                  key={`button-${option}`}
                  variant={'outline'}
                  size={'xl'}
                  className={`border-2px my-4 h-24 w-11/12 text-wrap border-black text-2xl
                  ${currOption === option ? 'bg-red-300 hover:bg-red-300' : ''}`}
                  onClick={() => setCurrOption(option)}
                >
                  {option}
                </Button>
              )
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  const Quest5 = () => {
    const [currOption, setCurrOption] = useState('')
    const options = ['0.84%', '0.02%', '3.2%', '84.5%']
    const correctAnswer = '0.84%'

    return (
      <div>
        <Card className='h-fit w-full border-none shadow-none'>
          <CardHeader>
            <CardTitle className='flex justify-center text-4xl'>
              What is the probability of flopping a flush when you are dealt two
              suited cards?
            </CardTitle>
            <Cards community={true} cards={''} />
            <div className='mr-40 flex flex-row items-center justify-center gap-20'>
              <span className='mb-2 text-xl font-bold'>Your hand</span>
              <Cards community={false} cards={'AD KD'} />
            </div>
          </CardHeader>
          <CardContent className='mb-4 flex flex-row items-center gap-4'>
            {options.map((option, index) =>
              option == correctAnswer ? (
                <AlertDialog key={`alert-${option}`}>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant={'outline'}
                      size={'xl'}
                      className={`border-2px my-4 h-24 w-3/12 border-black text-2xl
                        ${currOption === option ? 'bg-green-300 hover:bg-green-300' : ''}`}
                      onClick={() => {
                        setCurrOption(option)
                      }}
                    >
                      {option}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className='h-4/6 w-11/12'>
                    <AlertDialogHeader>
                      <AlertDialogTitle className='mb-8 flex justify-center text-4xl'>
                        Correct!
                      </AlertDialogTitle>
                      <AlertDialogDescription className='mb-8 flex flex-col justify-center text-wrap text-xl'>
                        <span>
                          You need three more cards of your suit out of the
                          remaining 50 cards.
                        </span>
                        <br />
                        <span>
                          The number of ways to choose 3 specific suited cards
                          from the remaining 11 is 11C3 = 165.
                        </span>
                        <br />
                        <span>
                          The number of ways to choose any 3 cards from the
                          remaining 50 is 50C3 = 19, 600
                        </span>
                        <br />
                        <span>Therefore, the probability is: 0.84%</span>
                        <br />
                        <span>*C refers to the combination formula</span>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className='flex items-center object-bottom'>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                        onClick={() => displayCongrats()}
                      >
                        The End
                      </AlertDialogCancel>
                      <AlertDialogCancel
                        className={cn(
                          'h-12 rounded-md border-black px-10 text-xl'
                        )}
                      >
                        Cancel
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ) : (
                <Button
                  key={`button-${option}`}
                  variant={'outline'}
                  size={'xl'}
                  className={`border-2px my-4 h-24 w-3/12 border-black text-2xl
                  ${currOption === option ? 'bg-red-300 hover:bg-red-300' : ''}`}
                  onClick={() => setCurrOption(option)}
                >
                  {option}
                </Button>
              )
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className='flex h-full items-center justify-center'>
        <Icons.spinner className='h-20 w-20 animate-spin' />
      </div>
    )
  }

  return (
    <div className='flex'>
      {finalQuestStatus ? (
        <div className='mt-60 flex h-screen w-full flex-col items-center text-4xl text-white'>
          <b>CONGRATULATIONS YOU HAVE PASSED THE POKER FINAL QUEST 🎉</b>
          <div className='flex flex-col items-center'>
            <Avatar className='mt-5 h-48 w-48'>
              <AvatarImage src='/img/acebadge.png' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      ) : (
        <div className='h-full w-full'>
          <Card className='w-full'>
            <CardHeader>
              <CardTitle className='flex justify-center text-4xl'>
                Poker Final Quest #{questID}
              </CardTitle>
              <CardDescription className='flex justify-center'>
                Complete all 5 quest to earn your final quest badge!
              </CardDescription>
            </CardHeader>
            <CardContent>{getCardContent(questID)}</CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export { PokerFinalQuest }
