'use client'

import * as React from 'react'
import { Chessboard } from 'react-chessboard'

const Chapter1 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>The Game of Chess</StyledH1>
      <StyledLi>
        Chess is a game of strategy and tactics for two players, played on an
        8x8 chequered board. Although chess sets come in many varieties and
        colours, the traditional colours are white and black, and that is how we
        will be referring to the two players on this website. The aim of the
        game is to trap your opponent's king, which is called Checkmate. A game
        can also be won if your opponent gives up (in chess, we call this
        'resigning'), and there are a variety of ways a game can end in a draw,
        in which case neither player wins. We'll look at these in more detail
        later on.
      </StyledLi>
      <StyledH1>The Chess Pieces</StyledH1>
      <StyledLi>
        Each player has an army consisting of a king, a queen, two rooks, two
        bishops, and two knights, and eight pawns.
      </StyledLi>
      <StyledLi>
        Each turn, you must move one piece to a new square. The player with the
        white pieces goes first, and after that the players take it in turns to
        move a piece. There are no dice in chess - every piece has its own way
        of moving, and it's up to you which one you want to move. Each piece
        also has the ability to capture, or 'take', an enemy piece. To do this,
        you simply move your piece or pawn onto the square occupied by the enemy
        piece, and remove it from the board.
      </StyledLi>
      <StyledH1>Setting up the board</StyledH1>
      <StyledLi>
        The board must always be placed so that each player has a light coloured
        square in their bottom right hand corner. Placing the board the wrong
        way round is a very common mistake - even TV shows get it wrong
        sometimes. Once you have the board the right way round, you're ready to
        start adding the pieces. Each player's pieces start on the first rank
        (in chess, we call horizontal rows 'ranks') on that player's side of the
        board.
      </StyledLi>
      <StyledH2>Rooks</StyledH2>
      <StyledLi>
        First, we put the rooks in the four corners of the board, like so:
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='r6r/8/8/8/8/8/8/R6R'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </div>
      <StyledH2>Bishops and Knights</StyledH2>
      <StyledLi>
        Next, we place the knights next to the rooks, and the bishops next to
        the knights:
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='rnb2bnr/8/8/8/8/8/8/RNB2BNR'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </div>
      <StyledH2>King and Queen</StyledH2>
      <StyledLi>
        The king and queen go on the two central squares. There's an easy way to
        remember which way round they go - the queen always starts on a square
        of her own colour, so the white queen starts on the light central
        square, and the black queen starts on the dark central square:
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='rnbqkbnr/8/8/8/8/8/8/RNBQKBNR'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </div>
      <StyledH2>Pawns</StyledH2>
      <StyledLi>
        Finally, place all your pawns on the second rank, so that all the other
        pieces have a pawn in front of them:
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </div>
      <StyledLi>
        And that's it, all ready to start a new game! But first, you'll need to
        know how the pieces move, which is covered in the next six parts of the
        tutorial.
      </StyledLi>
    </div>
  )
}

const StyledLi = ({ children }: { children: React.ReactNode }) => (
  <li className='text-rg mb-2 font-medium'>{children}</li>
)

const StyledH1 = ({ children }: { children: React.ReactNode }) => (
  <h1 className='mb-2 text-xl font-bold'>{children}</h1>
)

const StyledH2 = ({ children }: { children: React.ReactNode }) => (
  <h1 className='mb-2 text-lg font-semibold'>{children}</h1>
)

export { Chapter1 }
