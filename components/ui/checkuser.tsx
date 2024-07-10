'use client'

import * as React from 'react'
import { useAuth } from '../../app/context/AuthContext'
import { Button } from './button'
import { Deck, randomHand } from './poker-components/card'

export function CheckUser() {
  const { user } = useAuth()

  return (
    <Button onClick={() => console.log(randomHand(5, 1))}>
      <h1>Check deck</h1>
    </Button>
  )
}
