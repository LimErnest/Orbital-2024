'use client'

import * as React from 'react'
import { Chessboard } from 'react-chessboard'
import Image from 'next/image'
import {
  createPokerHand,
  getDescription,
  handToString,
  getEvaluatedScore,
  getRank,
  updateHand,
  compareTo
} from 'poker-hand-utils'
import { Card, CardSection } from '@/components/ui/poker-components/card'

const Chapter1 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Hands in Poker</StyledH1>
      <StyledLi>
        No matter what type of poker you play, the hands will always be the
        same. To start familiarizing yourself with the different hands, print
        out a "cheat sheet" and study it. Then, memorize the different hands so
        you can easily recognize them. Here are the winning poker hands, from
        highest to lowest:
      </StyledLi>
      <StyledH1>Royal Flush</StyledH1>
      <StyledLi>
        The highest-ranking hand is a royal flush (the royal straight flush).
        This hand includes a 10, Jack, Queen, King, and Ace of the same suit,
        one kind (all clubs, diamonds, hearts or spades). It can only be tied
        but not beaten by the royal flush of another suit.
      </StyledLi>
      <Board>
        <Card community={false} cards={'AS KS QS JS TS'} />
      </Board>
      <StyledH1>Straight Flush</StyledH1>
      <StyledLi>
        A straight flush is made up of 5 consecutive cards of the same suit.
      </StyledLi>
      <Board>
        <Card community={false} cards={'9D 8D 7D 6D 5D'} />
      </Board>
      <StyledH1>Four of a kind</StyledH1>
      <StyledLi>
        Four of a kind means you have 4 cards of the same rank (but different
        suits, of course) and a fifth card of any rank (such as 4 aces and a 9).
        If you have 4 aces, then no one can have any hand with an ace, so no
        royal flush is available.
      </StyledLi>
      <Board>
        <Card community={false} cards={'8D 8H 8C 8S JD'} />
      </Board>
      <StyledH1>Full house</StyledH1>
      <StyledLi>
        A full house contains 3 matching cards of 1 rank and 2 matching cards of
        another rank.
      </StyledLi>
      <Board>
        <Card community={false} cards={'7D 7H 7C 3H 3D'} />
      </Board>
      <StyledH1>Flush</StyledH1>
      <StyledLi>
        A flush contains any 5 cards of the same suit. These skip around in rank
        or sequence, but are from the same suit.
      </StyledLi>
      <Board>
        <Card community={false} cards={'AH JH 7H 6H 2H'} />
      </Board>
      <StyledH1>Straight</StyledH1>
      <StyledLi>
        A straight contains 5 cards of consecutive rank but from more than one
        suit.
      </StyledLi>
      <Board>
        <Card community={false} cards={'TC 9C 8C 7C 6C'} />
      </Board>
      <StyledH1>Three of a kind</StyledH1>
      <StyledLi>
        Three of a kind means you have three cards of the same rank, plus two
        unmatched cards.
      </StyledLi>
      <Board>
        <Card community={false} cards={'7D 7C 7S AS JS'} />
      </Board>
      <StyledH1>Two pairs</StyledH1>
      <StyledLi>
        Two pairs is made up of two cards of one rank, plus two cards of another
        rank (different from the first pair), plus one unmatched card.
      </StyledLi>
      <Board>
        <Card community={false} cards={'JH JD 5S 5S 2S'} />
      </Board>
      <StyledH1>Pair</StyledH1>
      <StyledLi>
        Pair means you have 2 cards of the same rank, plus 3 other unmatched
        cards.
      </StyledLi>
      <Board>
        <Card community={false} cards={'AS AD 8S 4D 3H'} />
      </Board>
      <StyledH1>High card</StyledH1>
      <StyledLi>
        High card is the lowest-ranking (called a "nothing") hand, when no two
        cards have the same rank, the five cards are not consecutive, and they
        are not all from the same suit.
      </StyledLi>
      <Board>
        <Card community={false} cards={'KD QC 7H 5S 2H'} />
      </Board>
      <StyledH1>Conclusion</StyledH1>
      <StyledLi>
        Keep in mind that if two people face off with the same type of hand, the
        hand with the higher-ranking cards wins. If the hands have the exact
        same ranks of cards (suit does not matter), it is a tie and the prize,
        if any, is split evenly.
      </StyledLi>
      <StyledLi>
        For easy reference, here is a list of the poker hands in order of
        strength:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>Royal flush</StyledLi>
        <StyledLi>Straight flush</StyledLi>
        <StyledLi>Four of a kind</StyledLi>
        <StyledLi>Full house</StyledLi>
        <StyledLi>Flush</StyledLi>
        <StyledLi>Straight</StyledLi>
        <StyledLi>Three of a kind</StyledLi>
        <StyledLi>Two pairs</StyledLi>
        <StyledLi>Pair</StyledLi>
        <StyledLi>High card</StyledLi>
      </ul>
    </div>
  )
}

const Chapter2 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'></div>
  )
}

const Chapter3 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Knights</StyledH1>
      <StyledLi>
        Knights are often the trickiest pieces for beginners to master. Instead
        of moving in straight lines like the other pieces, the knight has a
        unique L-shaped move. The knight also has the ability to jump over other
        pieces in its path. While all the other pieces can find their route
        blocked by friendly and enemy units, the knight suffers no such
        obstruction. Because of this jumping ability, the knight is often the
        first piece into the action, and even experienced players can be
        bamboozled by its hopping manoeuvers! Each player starts the game with
        two knights.
      </StyledLi>
      <StyledH1>The Movement</StyledH1>
      <StyledLi>
        The knight moves in an L-shape, either two squares vertically and one
        square horizontally, or two squares horizontally and one square
        vertically. This means the knight has, at most, eight possible squares
        it can jump to, as illustrated on the board below:
      </StyledLi>

      <StyledLi>
        It doesn't matter if any of the intervening squares are occupied, the
        knight jumps over everything in its path to land at its chosen
        destination
      </StyledLi>
      <StyledH1>Capturing</StyledH1>
      <StyledLi>The knight captures the same way as it moves.</StyledLi>
    </div>
  )
}

const Chapter4 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Bishops</StyledH1>
      <StyledLi>
        The Bishop is a long range piece that can be very powerful, but it has a
        significant weakness - it can only ever move on squares of one colour.
        Each player starts the game with two bishops - one that moves on light
        squares, and one that moves on dark squares - so between them, the two
        bishops can cover all the squares on the board.
      </StyledLi>

      <StyledH1>The Movement</StyledH1>
      <StyledLi>
        The bishop can move any number of squares in a straight diagonal line,
        so long as the squares between the bishop and its destination are
        unoccupied. The diagram below shows the legal moves for a bishop.
      </StyledLi>

      <StyledLi>
        Unlike the knight, the bishop cannot jump over obstacles, so if
        something is blocking its path, the bishop can go no further.
      </StyledLi>

      <StyledH1>Capturing</StyledH1>
      <StyledLi>The bishop captures the same way as it moves.</StyledLi>
    </div>
  )
}

const Chapter5 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Rooks</StyledH1>
      <StyledLi>
        The rooks, which are also sometimes known as 'castles', are the second
        most powerful piece after the queen. Like the bishop they are long range
        pieces, but they do not share the bishop's weakness and can reach every
        square on the board. Because they start in the corners, rooks often
        don't join in the battle until after the knights and bishops, but that
        also means they often survive much deeper into the game. In fact, the
        most commonly occurring endgames in chess are endgames involving rooks!
        Each player starts the game with two rooks.
      </StyledLi>
      <Board>
        <Chessboard
          position='r6r/8/8/8/8/8/8/R6R'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledH1>The Movement</StyledH1>
      <StyledLi>
        The rook can move any number of squares in a straight line horizontally
        or vertically, so long as none of the squares it passes through are
        occupied. The board below shows the legal moves for a rook:
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/4R3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e8'],
            ['e5', 'e1'],
            ['e5', 'a5'],
            ['e5', 'h5']
          ]}
        />
      </Board>
      <StyledLi>
        Like the bishop, the rook can be blocked if other pieces get in its way.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/P3R1p1/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e8'],
            ['e5', 'e1'],
            ['e5', 'b5'],
            ['e5', 'g5']
          ]}
        />
      </Board>
      <StyledH1>Capturing</StyledH1>
      <StyledLi>Rooks captures the same way they move.</StyledLi>
      <Board>
        <Chessboard
          position='4p3/8/8/p3R1p1/8/8/4p3/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e8'],
            ['e5', 'e2'],
            ['e5', 'a5'],
            ['e5', 'g5']
          ]}
        />
      </Board>
      <StyledLi>
        That's not quite all there is to know about rooks - there is a special
        move called castling which involves a king and a rook, but that will
        have a page to itself later on.
      </StyledLi>
    </div>
  )
}

const Chapter6 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>The Queen</StyledH1>
      <StyledLi>
        The mighty queen is the most powerful piece on the chessboard, combining
        the powers of the rook and bishop. Such is the queen's power, that the
        player who loses his or her queen is almost sure to lose the game as
        well. No other piece rivals the speed and manoeuverability of the queen.
        Each player starts the game with one queen.
      </StyledLi>
      <Board>
        <Chessboard
          position='3q4/8/8/8/8/8/8/3Q4'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledH1>The Movement</StyledH1>
      <StyledLi>
        The queen can move any number of squares in a straight line
        horizontally, vertically, or diagonally. In this way, she combines the
        powers of the rook and bishop in a single piece. The legal moves of the
        queen are displayed on the board below:
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/4Q3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e8'],
            ['e5', 'e1'],
            ['e5', 'a5'],
            ['e5', 'h5'],
            ['e5', 'b8'],
            ['e5', 'a1'],
            ['e5', 'h8'],
            ['e5', 'h2']
          ]}
        />
      </Board>
      <StyledLi>
        It might seem that the queen can do almost anything that another piece
        can, but there are limits to the queen's prowess. Like the rook and
        bishop, she lacks the knight's ability to jump over obstacles, and so
        her routes must always be clear of obstruction.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/4p3/8/4Q3/8/6P1/1p6/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e7'],
            ['e5', 'e1'],
            ['e5', 'a5'],
            ['e5', 'h5'],
            ['e5', 'b8'],
            ['e5', 'b2'],
            ['e5', 'h8'],
            ['e5', 'f4']
          ]}
        />
      </Board>
      <StyledH1>Capturing</StyledH1>
      <StyledLi>The queen captures the same way they move.</StyledLi>
      <Board>
        <Chessboard
          position='8/4p3/8/4Q3/8/8/1p6/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e7'],
            ['e5', 'e1'],
            ['e5', 'b5'],
            ['e5', 'h5'],
            ['e5', 'b8'],
            ['e5', 'b2'],
            ['e5', 'h8'],
            ['e5', 'g3']
          ]}
        />
      </Board>
    </div>
  )
}

const Chapter7 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>The King</StyledH1>
      <StyledLi>
        The king is the most important piece in the game. You must keep your
        king safe at all costs, because if your opponent traps your king, it's
        checkmate and you lose the game. Don't worry though, the king is not
        completely helpless and he has an army of loyal pieces and pawns to
        protect him! Each player starts the game with one king, and unlike the
        other pieces and pawns, the king is never captured and stays on the
        board for the whole game.
      </StyledLi>
      <Board>
        <Chessboard
          position='4k3/8/8/8/8/8/8/4K3'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledH1>The Movement</StyledH1>
      <StyledLi>
        The king's movement is limited to one square in any direction, so he's
        not the fastest piece in the box. Still, he is more powerful than a
        pawn, and he can give bishops and knights a run for their money too! The
        king's legal moves are displayed on the board below:
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/4K3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e4'],
            ['e5', 'e6'],
            ['e5', 'd5'],
            ['e5', 'f5'],
            ['e5', 'd6'],
            ['e5', 'd4'],
            ['e5', 'f6'],
            ['e5', 'f4']
          ]}
        />
      </Board>
      <StyledLi>
        Despite his limited mobility, the king can still capture an enemy piece
        if he can catch up with them!
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/4p3/4K3/3p4/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e5', 'e6'],
            ['e5', 'd4']
          ]}
        />
      </Board>
      <StyledLi>
        Because the king is so important, you must never move him onto a square
        where he could be captured. This is called moving into check, and is
        against the rules. If an enemy piece could move onto a square next turn,
        then that square is off limits to the king.
      </StyledLi>
      <Board>
        <Chessboard
          position='3r4/8/r7/4K3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['a6', 'h6'],
            ['d8', 'd1'],
            ['e5', 'e4'],
            ['e5', 'f4'],
            ['e5', 'f5']
          ]}
        />
      </Board>
      <StyledLi>
        This also applies when the king is capturing a piece. If capturing an
        enemy piece would put him into check, then that piece is off limits. In
        the example below, the king can capture the rook, but he cannot capture
        the pawn, because the rook will put the king in check.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/3r4/4K3/3p4/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['d6', 'd4'],
            ['e5', 'd6']
          ]}
        />
      </Board>
      <StyledLi>
        Note that because the king can never move into check, this means that
        the two kings may never stand next to each other - then both of them
        would be in check. The position on the board below is illegal:
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/3kK3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledLi>
        That's not quite all there is to know about the king - he has a special
        move called castling, which we will look at later on.
      </StyledLi>
    </div>
  )
}

const Chapter8 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Check and Checkmate</StyledH1>
      <StyledLi>
        We looked at check briefly in the last part, when we looked at the king.
        Now it's time to look at this important concept in more detail.
        Incidentally, some people announce 'Check' when they put their
        opponent's king in check, but you really don't have to.
      </StyledLi>
      <StyledH1>Check</StyledH1>
      <StyledLi>
        As we learned previously, the king cannot move onto a square threatened
        by an enemy piece or pawn, as that would be moving into check. But what
        if your opponent moves a piece or pawn to threaten your king directly?
        In that case, the king is in check, and you must get him out of check
        immediately.
      </StyledLi>
      <StyledLi>
        On the board below, white's king is in check from black's rook. White
        must get his king out of check, or else black could capture it next
        turn, which is something that must never be allowed to happen.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/8/6P1/7P/5P2/1r4K1'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['g1', 'g2'],
            ['g1', 'h2']
          ]}
        />
      </Board>
      <StyledLi>
        Sometimes, your king has no safe squares it can escape to. All is not
        lost, however, as there are other ways of getting out of check. You can
        also capture the piece that is giving check, either with your king or
        with another piece. Remember, though, if you're capturing with your king
        you need to make sure that by doing so you aren't putting your king in
        check from another piece!
      </StyledLi>
      <StyledLi>
        On the board below, the white king is once again in check from a black
        rook, but this time he has no squares to escape to. The black rook must
        be captured to get out of check.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/6B1/8/1R6/1P6/5PPP/1r4K1'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['g6', 'b1']]}
        />
      </Board>
      <StyledLi>
        There is a third way to get out of check, if your king has no escape
        squares and you cannot capture the piece giving check. You can move one
        of your own pieces to block the path of the enemy piece, and get out of
        check that way. Watch out for knights though, as their jumping ability
        means they cannot be blocked this way, so if your king is in check from
        a knight then this method won't work.
      </StyledLi>
      <StyledLi>
        On the board below, black's king is in check from the white queen. The
        black rook must move in order to bring the king out of check.
      </StyledLi>
      <Board>
        <Chessboard
          position='4n1rk/6p1/1r6/8/7Q/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['b6', 'h6']]}
        />
      </Board>
      <StyledH1>Double Check</StyledH1>
      <StyledLi>
        It may seem unlikely, but it's actually possible for a king to be in
        check from two different pieces at once. This happens when a player
        moves a piece to give check, and also opens up a line from a different
        piece to give check from that piece also.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/4k3/8/8/8/4B3/4R3/8'
          boardWidth={300}
          arePiecesDraggable={false}
          customArrows={[['e3', 'c5']]}
        />
        <Chessboard
          position='8/4k3/8/2B5/8/8/4R3/8'
          boardWidth={300}
          arePiecesDraggable={false}
          customArrows={[
            ['c5', 'e7'],
            ['e2', 'e7']
          ]}
        />
      </Board>
      <StyledLi>
        By moving, the bishop has opened a line from the rook to the king, so
        the king is in check from both pieces at once! Double check can be a
        powerful attack, because it isn't possible to block both checks with one
        move. The only way to escape from a double check is to move the king.
      </StyledLi>
      <StyledH1>Checkmate</StyledH1>
      <StyledLi>
        So what happens if a king is in check, and cannot use any of the above
        described methods to escape from check? In that case, he is in
        checkmate, and the game ends. In the example below, the black king is in
        check from the white bishop, and has no way to escape. Black is in
        checkmate, and white has won the game!
      </StyledLi>
      <Board>
        <Chessboard
          position='7k/4N2p/8/4B3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['e7', 'g8'],
            ['e5', 'h8']
          ]}
        />
      </Board>
    </div>
  )
}

const Chapter9 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Castling</StyledH1>
      <StyledLi>
        If you haven't yet moved your king and rook, you have the option of
        making a special move called castling. Because the king is such a
        valuable piece, we often want to hide him away in the corner where the
        opponent can't get at him. We also want to bring our rooks into play
        from the corner. The beauty of castling is that it allows us to
        accomplish both these goals in a single move, but it is only possible to
        castle once per game.
      </StyledLi>
      <StyledH1>How to castle</StyledH1>
      <StyledLi>
        First, let's divide the board vertically into two halves. In chess, we
        call the two halves of the board the Kingside, which is the half of the
        board where the king starts, and the Queenside, which is the half of the
        board where the queen starts. See the diagram below for an illustration
        of this:
      </StyledLi>
      <Board>
        <StyledH1>Queenside</StyledH1>
        <Chessboard
          position='3qk3/8/8/8/8/8/8/3QK3'
          boardWidth={400}
          arePiecesDraggable={false}
        />
        <StyledH1>Kingside</StyledH1>
      </Board>
      <StyledLi>
        You can castle on the kingside (also known as short castling) or the
        queenside (also known as long castling), but the king and the rook on
        the side you want to castle must both be on their starting square, and
        the squares between them must all be empty. If you have moved your king,
        you cannot castle, even if you move him back to his starting square. The
        same goes for the rooks.
      </StyledLi>
      <StyledLi>
        To castle, you first move your king two squares towards the rook. Then
        you jump the rook to the square on the other side of the king. It's the
        only time in a game of chess that a piece other than the knight is
        allowed to jump, and the only time that you are allowed to move two
        pieces at once.
      </StyledLi>
      <Board>
        <Chessboard
          position='r3k3/8/8/8/8/8/8/4K2R'
          boardWidth={300}
          arePiecesDraggable={false}
        />
        <Chessboard
          position='2kr4/8/8/8/8/8/8/5RK1'
          boardWidth={300}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledLi>
        You cannot castle if there are pieces between the king and rook. On the
        board below, white cannot castle to either side.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/8/8/8/8/Rb2K1NR'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledLi>
        You cannot castle if your king is in check. If you are in check, you
        cannot get out of check by castling. However, if you can get out of
        check without moving your king (such as by blocking or by capturing the
        checking piece), then you can still castle later. Some people think that
        you have to forfeit castling rights if you have previously been in
        check, but this is not true so long as your king remains unmoved on his
        starting square. On the board below, black is currently in check so
        cannot castle.
      </StyledLi>
      <Board>
        <Chessboard
          position='4k2r/8/8/1Q6/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledLi>
        You cannot castle if, at the end of castling, your king would be in
        check. You also cannot castle if the square that you would need to move
        your king across is threatened by an enemy piece - that is, if your king
        would be in check if he stood on that square. In the diagram below, the
        white king cannot castle queenside, because he would end up in check
        from the black knight, and he cannot castle kingside because he would
        have to cross a square threatened by the black rook.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/5r2/8/1n6/8/R3K2R'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['b3', 'c1'],
            ['f5', 'f1']
          ]}
        />
      </Board>
    </div>
  )
}

const Chapter10 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>En Passant</StyledH1>
      <StyledLi>
        En Passant is a french expression that means 'in passing'. It is a
        special type of capture that pawns can make under very specific
        circumstances. It's not a very difficult rule to understand, but many
        people never learn it and may accuse you of cheating when your pawn
        suddenly makes a move they weren't expecting! However, if you want to
        improve at chess, and especially if you want to play in leagues and
        tournaments, then it's vital that you know all the rules of chess and
        not just the easy ones!
      </StyledLi>
      <StyledH1>How the En Passant rule works</StyledH1>
      <StyledLi>Take a look at the board below.</StyledLi>
      <Board>
        <Chessboard
          position='8/3p4/8/4P3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
        />
      </Board>
      <StyledLi>
        If the black pawn moves one square, then the white pawn can capture it
        on the next move. So, black may decide to move it two squares instead,
        to try and rush past white's pawn without being taken. Then the board
        would look like this:
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/8/3pP3/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['d7', 'd5']]}
        />
      </Board>
      <StyledLi>
        However, en passant is a special rule designed to stop players from
        being able to sneak their pawns past like this. White is able to capture
        the pawn as if it had only moved one square. The white pawn moves
        diagonally forward as if the enemy pawn had only moved one square, and
        the black pawn is removed from the board. See the result below:
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/3P4/8/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['e5', 'd6']]}
        />
      </Board>
      <StyledLi>
        In order to do an en passant capture, your pawn must be on the fifth
        rank from your side of the board (we refer to horizontal rows as 'ranks'
        in chess), the enemy pawn must be on an adjacent file (a 'file' is what
        we call a vertical column), and it must move two squares in one go.
        Then, on the very next move, you can capture the enemy pawn en passant,
        but if you don't do it immediately, then you lose the right.
      </StyledLi>
      <StyledLi>
        On the following board, en passant is not possible because the white
        pawn is on the sixth rank. Your pawn must be on the fifth rank only in
        order to capture en passant.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/4P3/3p4/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['d7', 'd5']]}
        />
      </Board>
      <StyledLi>
        On the board below, en passant is not possible either, because the black
        pawn has only moved one square.
      </StyledLi>
      <Board>
        <Chessboard
          position='8/8/4P3/3p4/8/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[['d6', 'd5']]}
        />
      </Board>
    </div>
  )
}

const Chapter11 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Draws</StyledH1>
      <StyledLi>
        Sometimes, it can become impossible for either player to win the game,
        and in these situations, the game ends in a draw. At the very highest
        levels of competitive chess, over half of all games end in a draw
        because the players make so few mistakes. Don't worry, though - at lower
        levels, draws are much less common, although they do still happen from
        time to time. Here you will learn about the different ways a game can
        end in a draw.
      </StyledLi>
      <StyledH1>Draw by mutual agreement</StyledH1>
      <StyledLi>
        The two players can agree to end a game in a draw at any time,
        regardless of the position on the board or how many moves have been
        made. Usually this happens when neither player can see a way to make
        progress, or both players realise that the game will eventually end in a
        draw anyway so there is no point carrying on.
      </StyledLi>
      <StyledH1>Insufficient material</StyledH1>
      <StyledLi>
        In chess, 'material' refers to all the pieces a player has on the board.
        If so many pieces get captured that neither player has enough left to
        checkmate the enemy king, the game is drawn due to insufficient
        material. How little material does there need to be, in order to draw a
        game this way? The following four combinations of pieces all result in
        an automatic draw:
      </StyledLi>
      <ul className='list-disc pl-5'>
        <StyledLi>King vs king with no other pieces.</StyledLi>
        <StyledLi>King and bishop vs king.</StyledLi>
        <StyledLi>King and knight vs king.</StyledLi>
        <StyledLi>
          King and bishop vs king and bishop of the same coloured square.
        </StyledLi>
      </ul>
      <StyledH1>Stalemate</StyledH1>
      <StyledLi>
        Perhaps the most famous type of draw, stalemate is in fact very rare in
        practice. It occurs when the player whose turn it is to move is not in
        check, but has no legal moves. You can't skip a turn in chess, so if you
        have no moves and it isn't checkmate, then the game ends in a draw. When
        you're winning a game and your opponent has few pieces left, it's best
        to take care that you don't accidentally cause a stalemate. On the board
        below, it is black's turn, but there are no legal moves available, so it
        is stalemate.
      </StyledLi>
      <Board>
        <Chessboard
          position='7k/8/7K/8/6R1/8/8/8'
          boardWidth={400}
          arePiecesDraggable={false}
          customArrows={[
            ['h6', 'h7'],
            ['g4', 'g8']
          ]}
        />
      </Board>
      <StyledH1>Threefold repetition</StyledH1>
      <StyledLi>
        If the exact same position occurs three times, with the same player to
        move, then either player can claim a draw by threefold repetition. The
        game doesn't end in a draw automatically, so you can carry on if you
        want to, but if either player claims the draw, then the game ends
        immediately even if the other player wants to carry on. A common type of
        threefold repetition is known as 'perpetual check', in which one player
        checks the other repeatedly. This is sometimes used to force a draw when
        the player giving the checks would otherwise lose.
      </StyledLi>
      <StyledH1>The 50 move rule</StyledH1>
      <StyledLi>
        If 50 moves have passed since the last pawn move or capture, then either
        player can claim a draw by the 50 move rule. Like threefold repetition,
        it isn't an automatic draw, so if a player wants the draw then they have
        to claim it. Of course, this means keeping count of moves, but in
        tournament chess the players are normally required to record their moves
        in case of disputes so this normally isn't a problem. This rule is
        necessary to stop a game going on forever if neither side is making
        progress. The players may be happy to shuffle their pieces around until
        kingdom come, but tournament arbiters want to go home to bed at the end
        of the day! Thanks to the 50 move rule, even if your opponent insists on
        playing on in a position that neither of you can win, you can rest
        assured the game will be drawn eventually.
      </StyledLi>
      <StyledLi>
        Now we've covered all the rules of chess! In the final part, we'll
        summarise what you've just learned, and then you'll be ready to play
        your first game of chess!
      </StyledLi>
    </div>
  )
}

const Chapter12 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Summary</StyledH1>
      <StyledLi>
        We've covered all the rules of chess in this series, so you should be
        ready to go out and start playing. Just in case you need reminding, on
        this page is a quick summary of all the rules we've looked at in the
        previous parts.
      </StyledLi>
      <StyledH1>The Pieces</StyledH1>
      <ul className='list-disc pl-5'>
        <StyledLi>
          Pawns - move one square forwards. Have the option of moving one or two
          squares on their first move. Capture by moving one square diagonally
          forwards. Promoted to another piece if they reach the far end of the
          board.
        </StyledLi>
        <StyledLi>
          Knights - move in an L-shape - one square vertically and two squares
          horizontally, or one square horizontally and two squares vertically.
          Can jump over any pieces in its path.
        </StyledLi>
        <StyledLi>
          Bishops - move any number of squares diagonally in a straight line.
          May not jump over other pieces.
        </StyledLi>
        <StyledLi>
          Rooks - move any number of squares vertically or horizontally in a
          straight line. May not jump over other pieces.
        </StyledLi>
        <StyledLi>
          The Queen - moves any number of squares vertically, horizontally, or
          diagonally in a straight line. May not jump over other pieces.
        </StyledLi>
        <StyledLi>
          The King - moves one square in any direction. May not move onto a
          square threatened by an enemy piece.
        </StyledLi>
      </ul>
      <StyledH1>Check and Checkmate</StyledH1>
      <ul className='list-disc pl-5'>
        <StyledLi>
          Check - if the king is threatened by an enemy piece, he is in 'check',
          and must escape from check. This can be done by moving the king,
          capturing the checking piece, or blocking the checking piece (so long
          as it isn't a knight).
        </StyledLi>
        <StyledLi>
          Checkmate - if the king is in check and can't get out of check, he is
          in checkmate and the game is lost.
        </StyledLi>
      </ul>
      <StyledH1>Castling</StyledH1>
      <ul className='list-disc pl-5'>
        <StyledLi>
          Castling - move the king two squares towards the rook, and jump the
          rook to the square on the other side of the king.
        </StyledLi>
        <StyledLi>You cannot castle if...</StyledLi>
        <ul className='ml-5 list-disc pl-5'>
          <StyledLi>
            The king or rook has moved previously in the game.
          </StyledLi>
          <StyledLi>There are pieces between your king and rook.</StyledLi>
          <StyledLi>Your king in check.</StyledLi>
          <StyledLi>
            Your king would be in check at the end of the move.
          </StyledLi>
          <StyledLi>
            Your king would cross a square that is threatened by an enemy piece.
          </StyledLi>
        </ul>
      </ul>
      <StyledH1>En Passant</StyledH1>
      <ul className='list-disc pl-5'>
        <StyledLi>
          En Passant - if you have a pawn on the fifth rank, and your opponent
          moves an adjacent pawn two squares, you can capture the pawn as if it
          had only moved one square.
        </StyledLi>
        <StyledLi>You cannot capture en passant if...</StyledLi>
        <ul className='ml-5 list-disc pl-5'>
          <StyledLi>Your pawn is not on the fifth rank.</StyledLi>
          <StyledLi>
            The enemy pawn did not move two squares on the previous move.
          </StyledLi>
        </ul>
      </ul>
      <StyledH1>Draws</StyledH1>
      <ul className='list-disc pl-5'>
        <StyledLi>
          Mutual agreement - the players can agree to a draw at any time.
        </StyledLi>
        <StyledLi>
          Insufficient material - the game is drawn if there aren't enough
          pieces left on the board for checkmate to occur.
        </StyledLi>
        <StyledLi>
          Stalemate - if the player whose turn it is has no legal moves, but is
          not in checkmate, then the game is drawn.
        </StyledLi>
        <StyledLi>
          Threefold repetition - if the same position is repeated three times,
          with the same player to move each time, either player may claim a
          draw.
        </StyledLi>
        <StyledLi>
          The 50 move rule - if 50 moves have passed without either side making
          a pawn move or capture, either player may claim a draw.
        </StyledLi>
      </ul>
      <StyledH1>Other rules</StyledH1>
      <ul className='list-disc pl-5'>
        <StyledLi>
          The board - place it so that each player has a light square in their
          bottom right hand corner
        </StyledLi>
        <StyledLi>The players - white always moves first.</StyledLi>
      </ul>
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

const Board = ({ children }: { children: React.ReactNode }) => (
  <div className='mx-auto mb-4 mt-2 flex flex-col items-center gap-10'>
    {children}
  </div>
)

export {
  Chapter1,
  Chapter2,
  Chapter3,
  Chapter4,
  Chapter5,
  Chapter6,
  Chapter7,
  Chapter8,
  Chapter9,
  Chapter10,
  Chapter11,
  Chapter12
}
