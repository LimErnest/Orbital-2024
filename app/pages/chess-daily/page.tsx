'use client'

import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ChessPuzzle } from '@react-chess-tools/react-chess-puzzle'
import { useState } from 'react'

export default function ChessDailyPage() {
  const puzzles = [
    {
      fen: '2r2rk1/6pp/p1q5/1pn2p2/1B1pPP2/3Pn1QB/1PP2R1P/6RK b - - 3 24',
      moves: ['f8f6', 'g3g7'],
      makeFirstMove: true
    }
  ]

  const [puzzleIndex, setPuzzleIndex] = useState(0)
  const puzzle = puzzles[puzzleIndex]

  return (
    <div>
      <div className='flex justify-center items-center w-1/2 h-1/2'>
      <ChessPuzzle.Root puzzle={puzzle}>
        <ChessPuzzle.Board />
        <ChessPuzzle.Reset asChild>
          <button>restart</button>
        </ChessPuzzle.Reset>
        <ChessPuzzle.Reset
          asChild
          puzzle={puzzles[(puzzleIndex + 1) % puzzles.length]}
          onReset={() => setPuzzleIndex((puzzleIndex + 1) % puzzles.length)}
        >
          <button>next</button>
        </ChessPuzzle.Reset>
        <ChessPuzzle.Hint>hint</ChessPuzzle.Hint>
      </ChessPuzzle.Root>
      </div>
    </div>
  )
}
