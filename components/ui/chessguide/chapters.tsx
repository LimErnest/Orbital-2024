'use client'

import * as React from 'react'
import { Chessboard } from 'react-chessboard'
import Image from 'next/image'

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

const Chapter2 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Pawns</StyledH1>
      <StyledLi>
        The pawn appears, at first glance, to be the weakest and least important member of
        the chess army. However, looks can be deceiving, and the humble pawn can be very
        important, as we will discover in later tutorials.
        Each player starts the game with eight pawns.
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='8/pppppppp/8/8/8/8/PPPPPPPP/8'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </div>
      <StyledH1>The Movement</StyledH1>
      <StyledLi>
        Except on its first move, the pawn is only allowed to move one square forwards,
        and never backwards. On its very first move, a pawn has the choice of moving
        one or two squares, although both squares must be unoccupied to do this.
        On all subsequent moves, the pawn can move one square only, even if it only moved
        one square on its first turn - it only has one chance to move two
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='8/2p5/8/8/8/1P6/P7/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['a2', 'a4'], ['b3', 'b4'], ['c7', 'c6']]}
        />
      </div>
      <StyledH1>Capturing</StyledH1>
      <StyledLi>
        If the square directly in front of a pawn is occupied, the pawn is blocked
        and cannot move forwards. Unlike all the other pieces, a pawn does not capture
        the same way it moves. Instead, a pawn captures by moving one square diagonally
        forward. In the diagram below, the white pawn cannot capture the black pawn
        directly in front of it, but it may capture the black queen by moving one
        square diagonally forward.
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='8/8/8/8/1pq5/1P6/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['b3', 'c4']]}
        />
      </div>
      <StyledH1>Promotion</StyledH1>
      <StyledLi>
        The most important feature of pawns is their ability to promote when they reach
        the opposite side of the board. If your pawn gets all the way to the opponent's
        back rank, it is immediately promoted to a more powerful piece - take the pawn
        off the board, and replace it with a new piece of your choice.
        The only restriction is that you cannot promote to a king or another pawn.
        Usually, a pawn is promoted to a queen, as the queen is the most powerful piece,
        but sometimes there is a good reason to promote to a different piece such as a
        knight. It doesn't matter if you have all your pieces still on the board, you can
        still promote to whatever piece you want, even if this means you have two or
        three queens on the board at once.
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Image
          src='/img/chessPromotion.jpg'
          alt='Chess'
          width={500}
          height={500}
        />
      </div>
      <StyledLi>
        Pawns also have a special move called 'en passant',
        but we will look at that in detail later on.
      </StyledLi>
    </div>
  )
}

const Chapter3 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Knights</StyledH1>
      <StyledLi>
        Knights are often the trickiest pieces for beginners to master.
        Instead of moving in straight lines like the other pieces, the knight
        has a unique L-shaped move. The knight also has the ability to jump over
        other pieces in its path. While all the other pieces can find their route
        blocked by friendly and enemy units, the knight suffers no such obstruction.
        Because of this jumping ability, the knight is often the first piece into the
        action, and even experienced players can be bamboozled by its hopping manoeuvers!
        Each player starts the game with two knights.
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='1n4n1/8/8/8/8/8/8/1N4N1'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </div>
      <StyledH1>The Movement</StyledH1>
      <StyledLi>
      The knight moves in an L-shape, either two squares vertically 
      and one square horizontally, or two squares horizontally and one 
      square vertically. This means the knight has, at most, eight possible 
      squares it can jump to, as illustrated on the board below:
      </StyledLi>

      <StyledLi>
        It doesn't matter if any of the intervening squares are occupied, 
        the knight jumps over everything in its path to land at its chosen destination
      </StyledLi>

      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='8/8/8/2ppp3/3N4/2PPP3/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['d4', 'b5'], ['d4', 'c6'], ['d4', 'e6'],
          ['d4', 'f5'],['d4', 'f3'],['d4', 'e2'],['d4', 'c2'],['d4', 'b3']]}
        />
      </div>
      
      <StyledH1>Capturing</StyledH1>
      <StyledLi>
        The knight captures the same way as it moves.
      </StyledLi>
      <div className='mx-auto mb-4 mt-2'>
        <Chessboard
          position='8/8/4q3/8/3N4/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['d4', 'e6']]}
        />
      </div>
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

export { Chapter1, Chapter2, Chapter3 }
