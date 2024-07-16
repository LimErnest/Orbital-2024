'use client'

import * as React from 'react'
import { useAuth } from '../../app/context/AuthContext'
import { Button } from './button'
import { Deck, randomHand, Card } from './poker-components/card'
import {
  createPokerHand,
  getDescription,
  handToString,
  getEvaluatedScore,
  getRank,
  updateHand,
  compareTo
} from 'poker-hand-utils'

export function CheckUser() {
  const { user } = useAuth()

  return (
    <Button
      onClick={() => {
        const randomCard = randomHand(5, 1)
        const pokerHand = createPokerHand(randomCard[0])
        console.log(pokerHand)
        return (
          <Card cards={randomCard[0]} />
        )
      }}
    >
      <h1>Check deck</h1>
    </Button>
  )
}
