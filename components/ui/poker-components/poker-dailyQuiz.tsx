'use client'

import * as React from 'react'
import { createPokerHand, compareTo } from 'poker-hand-utils'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { useAuth } from '@/app/context/AuthContext'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription
} from '@/components/ui/card'
import { HowToPlay } from './howToPlayPoker'
import { randomHand, Cards } from './card'
import { Icons } from '.././icon'

export default function PokerDailyQuiz() {
  const { addXp, pokerQuiz } = useAuth()
  const [hands, setHands] = useState(randomHand(5, 2))
  const [hand1, setHand1] = useState<string>('')
  const [hand2, setHand2] = useState<string>('')
  const [buttonState, setButtonState] = useState(false)
  const [buttonColor1, setButtonColor1] = useState('')
  const [buttonColor2, setButtonColor2] = useState('')
  const [buttonColor3, setButtonColor3] = useState('')
  const [attempts, setAttempts] = useState<number>(10)
  const [isLoading, setIsLoading] = useState(true)
  const [lessAttempts, setLessAttempts] = useState(false)

  useEffect(() => {
    handleInitialState()
  }, [])

  useEffect(() => {
    if (hands) {
      setHand1(hands[0])
      setHand2(hands[1])
    }
  }, [hands])

  const handleInitialState = async () => {
    const numberOfAttempts = await pokerQuiz(new Date().toLocaleDateString())
    setAttempts(numberOfAttempts)
    setTimeout(() => {
      if (numberOfAttempts <= 0) {
        setLessAttempts(true)
      }
      setIsLoading(false)
    }, 250)
  }

  const handleButtonClick = (value: number) => {
    if (buttonState) return
    setButtonState(true)
    console.log(hands)

    const result = compareTo(createPokerHand(hand1), createPokerHand(hand2))
    if (value === result) {
      switch (value) {
        case 1:
          setButtonColor1('bg-green-300 hover:bg-green-300')
          break
        case 2:
          setButtonColor2('bg-green-300 hover:bg-green-300')
          break
        case 3:
          setButtonColor3('bg-green-300 hover:bg-green-300')
          break
        default:
          console.log('Invalid value')
      }
      addXp(20)
    } else {
      switch (value) {
        case 1:
          setButtonColor1('bg-red-300 hover:bg-red-300')
          break
        case 2:
          setButtonColor2('bg-red-300 hover:bg-red-300')
          break
        case 3:
          setButtonColor3('bg-red-300 hover:bg-red-300')
          break
        default:
          console.log('Invalid value')
      }
    }
    setAttempts(pokerQuiz(new Date().toLocaleDateString(), true))
  }

  if (isLoading) {
    return (
      <div className='flex h-full items-center justify-center'>
        <Icons.spinner className='h-20 w-20 animate-spin' />
      </div>
    )
  }

  if (lessAttempts) {
    return (
      <div className='flex h-full items-center justify-center'>
        <h1 className='mb-2 text-4xl font-bold'>
          You have no more attempts today. Come back tommorrow!
        </h1>
      </div>
    )
  }

  return (
    <div className='flex h-full w-full flex-row'>
      <div className='flex h-full w-3/4 flex-col items-center gap-10 rounded-lg border border-2 border-gray-300 pt-10 shadow-lg bg-slate-50'>
        <h1 className='mb-2 text-4xl font-bold'>Which hand is bigger?</h1>
        <div className='flex flex-row items-center gap-20'>
          <h1 className='mb-2 text-xl font-bold'>Hand 1</h1>
          <Cards cards={hand1} />
        </div>
        <div className='flex flex-row items-center gap-20'>
          <h1 className='mb-2 text-xl font-bold'>Hand 2</h1>
          <Cards cards={hand2} />
        </div>
        <div className='flex flex-row items-center gap-20 pt-10'>
          <Button
            variant={'ghost'}
            size={'xl'}
            className={`border border-2 ${buttonColor1} border-gray-300 text-lg font-semibold ${!buttonState ? 'hover:bg-blue-300' : ''}`}
            onClick={() => handleButtonClick(1)}
          >
            Hand 1 is larger
          </Button>
          <Button
            variant={'ghost'}
            size={'xl'}
            className={`border border-2 ${buttonColor2} border-gray-300 text-lg font-semibold ${!buttonState ? 'hover:bg-blue-300' : ''}`}
            onClick={() => handleButtonClick(2)}
          >
            Hand 2 is larger
          </Button>
          <Button
            variant={'ghost'}
            size={'xl'}
            className={`border border-2 ${buttonColor3} border-gray-300 text-lg font-semibold ${!buttonState ? 'hover:bg-blue-300' : ''}`}
            onClick={() => handleButtonClick(3)}
          >
            They are equal
          </Button>
        </div>
      </div>
      <Card className='flex flex-col justify-center border-0 shadow-none'>
        <CardHeader>
          <CardTitle className='text-4xl'>Poker Daily Quiz</CardTitle>
          <CardDescription className='text-lg'>
            You have {attempts} attempts left. Good luck!
          </CardDescription>
        </CardHeader>
        <CardFooter className='flex justify-between'>
          <HowToPlay />
          <Button
            variant={'ghost'}
            size={'lg'}
            className='border border-2 border-gray-300 py-0 text-lg font-semibold hover:bg-blue-300'
            disabled={!buttonState}
            onClick={async () => {
              if ((await pokerQuiz(new Date().toLocaleDateString())) <= 0) {
                setLessAttempts(true)
              } else {
                setHands(randomHand(5, 2))
                setButtonState(false)
                setButtonColor1('')
                setButtonColor2('')
                setButtonColor3('')
              }
            }}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export { PokerDailyQuiz }
