'use client'

import * as React from 'react'
import { Progress } from '@/components/ui/progressbar'
import { useState } from 'react'
import { useAuth } from '../../app/context/AuthContext'
import { useEffect } from 'react'


export function XpBar() {
  const { user } = useAuth()
  const [progress, setProgress] = useState({
    xp: 0,
    level: 1
  })

  useEffect(() => {
    if (user) {
      setProgress({
        xp: user.xp % 100,
        level: 1 + Math.floor(user.xp/100)
      })
    }
  }, [user])

  return (
    <div className=' flex flex-row items-center justify-center px-4 pb-2'>
      <span className='whitespace-nowrap text-sm text-black'>
        Level {progress.level}
      </span>
      <Progress
        value={progress.xp}
        className='ml-4 w-full border border-black shadow-lg'
      />
    </div>
  )
}
