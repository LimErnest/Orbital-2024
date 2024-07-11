'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import {
  createPokerHand,
  getDescription,
  handToString,
  getEvaluatedScore,
  getRank,
  updateHand,
  compareTo
} from 'poker-hand-utils'
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

interface CardsProps extends React.HTMLAttributes<HTMLDivElement> {
  community?: boolean
  cards: string
}

const Cards: React.FC<CardsProps> = ({
  children,
  className,
  community,
  cards,
  ...props
}) => {
  const cardArray = cards.split(' ')
  const frontCards = cardArray.map((cardChar, index) => (
    <CardsSection key={index} imageString={cardChar} />
  ))
  if (community) {
    const backCards = Array.from(
      { length: 5 - cardArray.length },
      (_, index) => <CardsSection key={index} imageString='back' />
    )
    return (
      <div className='flex flex-row justify-center gap-10'>
        {frontCards}
        {backCards}
      </div>
    )
  }

  return <div className='flex flex-row justify-center gap-10'>{frontCards}</div>
}

export interface CardsSectionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  imageString: string
}

const CardsSection: React.FC<CardsSectionProps> = ({
  className,
  style,
  imageString,
  ...props
}) => {
  const imagePath = `/cards/${imageString}.png`
  return (
    <div className={cn('h-full', className)} style={style} {...props}>
      <Image
        src={imagePath}
        alt={imageString}
        width={150}
        height={150}
        style={{ height: 'auto' }}
      />
    </div>
  )
}

const suits = ['D', 'C', 'H', 'S']
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
const Deck = suits.flatMap(suit => ranks.map(rank => `${rank}${suit}`))

const shuffleDeck = (originalDeck: string[]) => {
  let deck = [...originalDeck]
  let currentIndex = deck.length,
    temporaryValue,
    randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1
    temporaryValue = deck[currentIndex]
    deck[currentIndex] = deck[randomIndex]
    deck[randomIndex] = temporaryValue
  }

  return deck
}

const randomHand = (numberOfCards: number, numberOfHands: number) => {
  let totalCards = numberOfCards * numberOfHands
  if (totalCards > 52) {
    console.error('Too many cards requested')
    return []
  }
  const shuffledDeck = shuffleDeck(Deck)
  const hands = []

  for (let i = 0; i < numberOfHands; i++) {
    let hand = ''

    for (let j = i * numberOfCards; j < (i + 1) * numberOfCards; j++) {
      if (j < (i + 1) * numberOfCards - 1) {
        hand = hand.concat(shuffledDeck[j] + ' ')
      } else {
        hand = hand.concat(shuffledDeck[j])
      }
    }

    hands.push(hand)
  }

  return hands
}

const CompareHandsPuzzle = () => {
  const { addXp, pokerQuiz } = useAuth()
  const [hands, setHands] = useState(randomHand(5, 2))
  const [hand1, setHand1] = useState<string>('')
  const [hand2, setHand2] = useState<string>('')
  const [buttonState, setButtonState] = useState(false)
  const [buttonColor1, setButtonColor1] = useState('')
  const [buttonColor2, setButtonColor2] = useState('')
  const [buttonColor3, setButtonColor3] = useState('')
  const [attempts, setAttempts] = useState<number>(
    pokerQuiz(new Date().toLocaleDateString())
  )

  useEffect(() => {
    if (hands) {
      setHand1(hands[0])
      setHand2(hands[1])
    }
  }, [hands])

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

  return (
    <div className='flex h-screen w-full flex-row p-20'>
      <Board>
        <StyledH2>Which hand is bigger?</StyledH2>
        <div className='flex flex-row items-center gap-20'>
          <StyledH1>Hand 1</StyledH1>
          <Cards cards={hand1} />
        </div>
        <div className='flex flex-row items-center gap-20'>
          <StyledH1>Hand 2</StyledH1>
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
      </Board>
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
            onClick={() => {
              setHands(randomHand(5, 2))
              setButtonState(false)
              setButtonColor1('')
              setButtonColor2('')
              setButtonColor3('')
            }}
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

const StyledH2 = ({ children }: { children: React.ReactNode }) => (
  <h1 className='mb-2 text-4xl font-bold'>{children}</h1>
)

const StyledH1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className='mb-2 text-xl font-bold'>{children}</h1>
)

const Board = ({ children }: { children: React.ReactNode }) => (
  <div className='flex h-full w-3/4 flex-col items-center gap-10 rounded-lg border border-2 border-gray-300 pt-10 shadow-lg'>
    {children}
  </div>
)

export { Cards, CardsSection, Deck, randomHand, CompareHandsPuzzle }
