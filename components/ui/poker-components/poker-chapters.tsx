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
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Poker Positions at the Table</StyledH1>
      <StyledLi>
        The second thing you should familiarize your self with before we jump
        into how to play a basic poker round is the poker positions at the
        table. Because poker can traditionally be be played by anywhere from
        2-10 players at a single table, it also means that seating's come with
        disadvantages and advantages. The poker positions at a table will change
        according to where the button and blinds are (they rotate clockwise
        after each round). But here is the gist:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>The first seat belongs to the Small Blind (SB)</StyledLi>
        <StyledLi>The second seat is the Big Blind (BB)</StyledLi>
        <StyledLi>
          The third seat is known as being Under-the-Gun (UTG)
        </StyledLi>
        <StyledLi>
          The fourth seat , which is the one following UTG is known simply as
          UTG+1
        </StyledLi>
        <StyledLi>The fifth seat is UTG+2</StyledLi>
        <StyledLi>The sixth seat is UTG+3</StyledLi>
        <StyledLi>The seventh seat is the lojack (LJ)</StyledLi>
        <StyledLi>The eighth seat is the hijack (HJ)</StyledLi>
        <StyledLi>The ninth seat is the cutoff (CO)</StyledLi>
        <StyledLi>
          The tenth seat is the dealer, also known as the Button (B)
        </StyledLi>
      </ul>
      <Board>
        <Image
          src='/img/poker-position.png'
          alt='Poker Positions'
          width={800}
          height={800}
          className='mt-4'
        />
      </Board>
      <StyledLi>
        If you are in a game with less than 10 players, you can simply remove
        the positions starting with UTG+3, followed by UTG+2 then UTG+1. If
        there are still empty spots, you can remove the lojack, hijack, and
        cutoff positions.
      </StyledLi>
      <StyledLi>
        Now that we've got the seating down, let's move on to how betting
        occurs!
      </StyledLi>
    </div>
  )
}

const Chapter3 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Know Your Betting Options</StyledH1>
      <StyledLi>
        When playing poker, you only ever have five options. Familiarize
        yourself with these so you can always make the right decision at the
        right time. You should know when to:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>
          CHECK: Stay in the hand without betting your money (provided nobody
          else bets).
        </StyledLi>
        <StyledLi>
          FOLD: Discard your cards, giving up any chance to continue in the hand
          and win the pot.
        </StyledLi>
        <StyledLi>
          BET: The first player to put money in the pot starts off the betting.
          Other players must then decide whether to call, fold or raise.
        </StyledLi>
        <StyledLi>
          CALL: Match the full amount that has been bet by another player in
          order to stay in the hand.
        </StyledLi>
        <StyledLi>
          RAISE: Increase the amount of the existing bet. Other players will
          then have to fold, call, or raise your bet.
        </StyledLi>
      </ul>
      <StyledH1>Betting Vs. Calling</StyledH1>
      <StyledLi>
        There is a big difference between calling and raising. The former is a
        more passive move, while the latter uses aggression to put the decision
        back on your opponents.
      </StyledLi>
      <StyledLi>
        When you call an existing bet, you are not putting any pressure on your
        opponent. Remember that, on average, 3/4 of all hands are won when
        somebody bets and everybody else folds. Nobody folds to a call.
      </StyledLi>
      <StyledLi>
        When you are the aggressor, either by making an initial bet or raising
        the existing one, you are forcing your opponents to react and giving
        yourself a chance to win the pot before it gets to showdown. This should
        reinforce the importance of aggression in poker.
      </StyledLi>
      <StyledH1>Betting As A Bluff</StyledH1>
      <StyledLi>
        You can't always rely on having the best cards to win. That's why
        learning to bluff is so important. A few rules to remember for betting
        as a bluff are:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>
          Figure out when your opponents are not particularly strong. This will
          make them more susceptible to a bluff. Look for signs of weakness and
          up the aggression.
        </StyledLi>
        <StyledLi>
          Recognize and exploit threats on the board. You may have raised
          pre-flop with K-Q suited and then completely missed the A-7-5 flop.
          However, your opponents are going to be inclined to believe you have a
          strong hand so a continuation bet may take down the pot, even against
          good players with middle pocket pairs.
        </StyledLi>
      </ul>
      <StyledH1>When to fold</StyledH1>
      <StyledLi>
        Recognising when to fold is just as important as knowing when to bet.
        There is the standard decisions of folding bad hands like 7-2 offsuit,
        but there are also times when you should fold good hands. Here are a few
        examples:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>When your preflop hand isn't strong after the flop</StyledLi>
        <StyledLi>When a player who never bluffs is betting big</StyledLi>
        <StyledLi>
          When you have no pair or drawing potential with your hand post-flop
        </StyledLi>
        <StyledLi>When a very tight player is betting or raising big</StyledLi>
      </ul>
      <StyledLi>
        Now that we've got the basics of betting down, lets get into how the
        game of Poker is played!
      </StyledLi>
    </div>
  )
}

const Chapter4 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Dealing of Cards</StyledH1>
      <StyledLi>
        Each player in a poker game is dealt two hole cards. The dealer begins
        each game by distributing these cards one at a time to each player,
        starting with the player in the small blind position. Hole cards are
        kept face down throughout the game, and can only be seen by the player
        holding them.
      </StyledLi>
      <StyledLi>
        After every player has two hole cards, the first of four betting rounds
        begin. Poker betting rounds are known as preflop, flop, turn, and river.
      </StyledLi>
      <StyledH1>Pre-flop</StyledH1>
      <Board>
        <Card community={false} cards={'back back'} />
      </Board>
      <StyledLi>
        When everyone has their two hole cards, the preflop betting round begins
        with the player directly to the left of the big blind. This player has
        three options:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>
          Call (matching the big blind amount or the most recent raise)
        </StyledLi>
        <StyledLi>
          Raise (betting at least 2x the big blind or most recent raise, which
          any subsequent players must at least match to stay in).
        </StyledLi>
        <StyledLi>
          Fold (pushing their cards into the middle and surrendering any chance
          to win the hand).
        </StyledLi>
      </ul>
      <StyledH1>Example of Poker hand</StyledH1>
      <StyledLi>
        For this example, we'll go over a hand from a $1/$2 cash game. The
        “$1/$2” denotes a $1 small blind and $2 big blind. After the blinds are
        posted, the dealer begins dealing one card at a time to each player,
        starting with the small blind position.
      </StyledLi>
      <Board>
        <Image
          src='/img/preflop.png'
          alt='Poker Positions'
          width={800}
          height={800}
          className='mt-4'
        />
      </Board>
      <StyledLi>
        So, in our $1/$2 example, the first player can either call the $2 big
        blind amount, raise to at least $4, or fold.
      </StyledLi>
      <StyledLi>
        Suppose the first player raises to $6. The action then moves one player
        to the left, and this player can either call the $6 bet, or fold.
        Suppose this player chooses to fold, and the next four players,
        clockwise around the table, all fold as well.
      </StyledLi>
      <StyledLi>
        This brings the action to the player directly to the right of the small
        blind. The player in this position, known as the “button”, chooses to
        call the $6 bet.
      </StyledLi>
      <StyledLi>
        The small blind folds, surrendering their $1 forced bet into the pot.
        The big blind, who already has a $2 forced bet in play, makes the call
        by putting $4 more in the pot to match the $6 raise.
      </StyledLi>
      <StyledLi>
        Note that if any of the players decided to re-raise more than $6, the
        action goes back around to the first player, who can then call the
        raise, or re-raise again (known as a four-bet). This continues until
        everyone at the table has either folded or called the current bet.
      </StyledLi>
    </div>
  )
}

const Chapter5 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Flop</StyledH1>
      <StyledLi>
        With the preflop betting round closed, the dealer burns a card, taking
        the top card off the deck and putting it face-down on the table.
      </StyledLi>
      <StyledLi>
        The dealer then deals the first three of five community cards, known as
        the “flop”. In our example game, the dealer puts these three cards face
        up for the flop:
      </StyledLi>
      <Board>
        <Card community={true} cards={'AH 7S TH'} />
      </Board>
      <StyledLi>
        The small blind is first to act in all betting rounds after the flop. If
        the small blind isn't still in the hand, the next live player to the
        left of the small blind begins the action.
      </StyledLi>
      <StyledLi>
        In our example hand, the big blind, to the small blind's direct left, is
        first to act on the flop. The big blind player has the option to check,
        putting no money in the pot, or bet at least $2, the amount of the big
        blind.
      </StyledLi>
      <StyledLi>
        Let's suppose the big blind checks. The under-the-gun player now has the
        same option to check or bet. In this game, the under-the-gun player also
        checks, moving the action to the player on the button.
      </StyledLi>
      <StyledLi>
        The button bets $10, and the action goes back to the big blind player.
        The big blind calls, and the under-the-gun player folds. The pot is now
        $37.
      </StyledLi>
    </div>
  )
}

const Chapter6 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Turn</StyledH1>
      <StyledLi>
        The big blind and the button then advance to the turn.
      </StyledLi>
      <StyledLi>
        Also known as “fourth street”, the turn is the fourth community card
        dealt to the board. In our example, the dealer burns another card and
        deals the turn. The board now looks like this:
      </StyledLi>
      <Board>
        <Card community={true} cards={'AH 7S TH 3S'} />
      </Board>
      <StyledLi>
        The big blind checks, and the button bets $20 into the $37 pot. The big
        blind raises to $60, and the button calls, putting in $40 more to match
        the $60 raise. The big blind's move of checking, then raising when the
        opponent bets, is known as a “check-raise”.
      </StyledLi>
      <StyledLi>
        The pot is now $157, and the two players advance to the river.
      </StyledLi>
    </div>
  )
}

const Chapter7 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>River</StyledH1>
      <StyledLi>
        The dealer burns another card and puts the fifth and final community
        card on the board.
      </StyledLi>
      <StyledLi>
        This card is known as the river, or “fifth street”. In our example hand,
        the river is dealt to the board, and the five community cards look like
        this:
      </StyledLi>
      <Board>
        <Card community={true} cards={'AH 7S TH 3S JH'} />
      </Board>
      <StyledLi>
        The big blind checks, and the button checks back, keeping the pot at
        $157. The player who made the last aggressive move (a bet or raise)
        generally turns over their cards first, and this part of the hand is
        called the showdown.
      </StyledLi>
      <StyledLi>
        The big blind turns over his/her hole cars, revealing:
      </StyledLi>
      <Board>
        <Card community={false} cards={'AC 3C'} />
      </Board>
      <StyledLi>
        This hand makes two pair, aces and threes, for the big blind. Using hole
        cards and community cards to make the best possible five-card hand, the
        big blind holds A♣ A♥ 3♣ 3♠ J♥.
      </StyledLi>
      <StyledLi>
        The button doesn't have to turn over their cards at showdown, as they
        have the option to "muck" without showing and surrender the pot to the
        opponent. In this case though the button shows this hand:
      </StyledLi>
      <Board>
        <Card community={false} cards={'TS 9S'} />
      </Board>
      <StyledLi>
        The best possible five-card hand with these hole cards is T♠ T♥ A♥
        J♥ 9♠. This gives the button a pair of tens, having missed a chance at
        both a straight and a flush.
      </StyledLi>
      <StyledLi>
        The big blind wins this hand, as two pair beats one pair in the poker
        hand rankings.
      </StyledLi>
      <StyledLi>
        The player in the big blind collects the $157 pot. The button and blinds
        shift one player to the left and a new hand begins.
      </StyledLi>
    </div>
  )
}

const Chapter8 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>What if a Hand Doesn't Go to Showdown?</StyledH1>
      <StyledLi>
        Many Texas Hold'em hands end without anyone even showing their cards. In
        any betting round, the hand ends when one player bets or raises, and all
        other players fold. The player that didn't fold wins the pot without a
        showdown.
      </StyledLi>
      <StyledLi>
        In the preflop betting round, the big blind wins the pot automatically
        if all other players fold before the big blind player gets to act. This
        is known as giving the big blind a "walk".
      </StyledLi>
      <StyledH1>In the Event of a Tie (Chopped Pots)</StyledH1>
      <StyledLi>
        When two or more players turn over hands of equal hand strength at
        showdown, the hand results in a chop, aka chopped pot. All chips in the
        pot are divided equally among the players that have the strongest hand.
      </StyledLi>
      <StyledH1>Starting a New Game</StyledH1>
      <StyledLi>
        When a new game starts, the initial position of the button and blinds is
        determined by dealing each player one card. Whoever has the
        highest-value card, with ace being the high and two as the low, starts
        the game with the button.
      </StyledLi>
      <StyledLi>
        In the case of a tie, the suit of the card determines the winner. The
        tiebreaker order for suits goes spades, hearts, diamonds, clubs.
      </StyledLi>
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
