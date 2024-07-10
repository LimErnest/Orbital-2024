'use client'

import * as React from 'react'
import { useAuth } from '../../app/context/AuthContext'
import { Button } from './button'

export function CheckUser() {
  const { user } = useAuth()

  return (
    <Button onClick={() => console.log(user)}>
      <h1>Check User</h1>
    </Button>
  )
}
