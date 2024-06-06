'use client'

import * as React from 'react'
import { useAuth } from '../../app/context/AuthContext'
import { Button } from './button'

export function UpdateUser() {
    const { user, updateUsername } = useAuth()

    return (
        <Button onClick={() => updateUsername('newawdajiwdbirname')}>
            <h1>Update username</h1>
        </Button>
    )
}
