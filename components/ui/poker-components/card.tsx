'use client'

import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

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
  if (cards === '' && community) {
    const backCards = Array.from(
      { length: 5 },
      (_, index) => <CardsSection key={index} imageString='back' />
    )
    return (
      <div className='flex flex-row justify-center gap-10'>
        {backCards}
      </div>
    )
  }

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

export { Cards, CardsSection, Deck, randomHand }
