'use client'

import * as React from 'react'
import { useAuth } from '../../app/context/AuthContext'
import { Button } from './button'

export function TestXp() {
    const { addXp } = useAuth()

    return (
        <Button onClick={() => addXp(45)}>
            <h1>add xp</h1>
        </Button>
    )
}