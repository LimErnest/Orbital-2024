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
          style={{ height: 'auto' }}
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
          style={{ height: 'auto' }}
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
      <StyledH1>What is C-Betting?</StyledH1>
      <StyledLi>
        First of all, let's define what a continuation bet (C-bet) actually is:
        an opening bet on the flop after having raised pre-flop. The
        'continuation' in the name refers to the continued aggression being
        displayed at every available opportunity.
      </StyledLi>
      <StyledLi>
        Whether or not to make a post-flop continuation bet after you have been
        the pre-flop aggressor is one of the first multi-layered decisions poker
        players are faced with. Several factors should come into play when
        deciding whether to make a C-bet:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>the board texture</StyledLi>
        <StyledLi>your position</StyledLi>
        <StyledLi>how many players are in the hand</StyledLi>
        <StyledLi>whether or not you hit the flop</StyledLi>
        <StyledLi>your opponents' tendencies</StyledLi>
      </ul>
      <StyledLi>
        Ironically, perhaps the least important of these factors is whether or
        not you hit the flop. A good C-bet can win you a hand when you miss the
        board because you are capitalizing on the perception of strength created
        with your pre-flop raise. A C-bet is generally intended to take down the
        pot right then, although a secondary consideration is to build up a pot
        when you have a really strong hand.
      </StyledLi>
      <StyledLi>
        A good C-bet strategy is really predicated for a heads-up confrontation.
        If there are three players in the pot, position becomes very important
        when deciding whether to C-bet. If there are more than three players in
        the pot, your C-bet frequency should be very low, and should be based
        solely on whether or not you connected with the flop.
      </StyledLi>
      <StyledH1>Good Board, Bad Board</StyledH1>
      <StyledLi>
        Dry boards - those without obvious draws - are ideal for making C-bets.
        Any rainbow board (i.e. three different suits represented) with no ace
        and only one Broadway card means any opponent playing a speculative hand
        (such as any two suited cards, or something like an 8-9 or J-T) likely
        missed the flop and will need to hit runner-runner cards - two perfect
        cards in a row - to make a strong hand. They will likely bail at the
        first sign of pressure. Below is an example of a dry board:
      </StyledLi>
      <Board>
        <Card community={true} cards={'JS 7D 4C'} />
      </Board>
      <StyledLi>
        The same goes for rainbow boards with an ace. Since you raised pre-flop,
        your opponents will be more inclined to believe you have an ace if you
        follow up with a strong C-bet. Again, a C-bet here should eliminate
        players with speculative hands, and it may also chase away timid players
        with middle pair or pocket pairs.
      </StyledLi>
      <Board>
        <Card community={true} cards={'AD 7C 6S'} />
      </Board>
      <StyledLi>
        Note that if your C- bet is called, it may be wise to slow down on the
        turn. Opponents with strong, disguised hands (sets, two pair), are
        likely to slow-play a dry flop, hoping to encourage you to make another
        stab at the pot on the turn. Also be wary of check-raises, as they are
        generally an indicator of a strong hand.
      </StyledLi>
      <StyledLi>
        Conversely, wet flops (dangerous boards with lots of potential draws or
        strong hands) are not ideal for C-betting, especially if you missed.
        Boards with flush draws and straight draws, or two Broadway cards,
        should be treated with caution when you fail to connect. A player with a
        flush or straight draw, or who has hit top pair, is most likely not
        going away.
      </StyledLi>
      <Board>
        <Card community={true} cards={'QD 8D 2D'} />
      </Board>
      <Board>
        <Card community={true} cards={'9D 8C 7S'} />
      </Board>
      <Board>
        <Card community={true} cards={'KS KH 8S'} />
      </Board>
      <StyledLi>
        If you flop a set or two pair, making a C-bet is standard, especially if
        you are in position. You want to extract maximum value from your strong
        hand, and you don't want to make it cheap for a player to suck out on
        you. Many players will tell you a C- bet should also be automatic if you
        flop a flush or an open-ended straight draw, but this play is really
        dependent on position. If you are first to act, it may be wiser to check
        and see if you can get a turn card for free, especially if there are
        more than two players in the pot. You don't want to put chips into a pot
        when playing a speculative hand if you can avoid it, and you also open
        yourself up to a raise.
      </StyledLi>
      <StyledLi>
        If you have position, and your opponents have shown the tendency to fold
        to C-bets, then betting may enable you to take the pot down right there.
        If not, it will likely allow you to see the turn and river cards without
        any more bets, especially if your opponents are passive. Again, this is
        where you want to be wary of check-raises.
      </StyledLi>
    </div>
  )
}

const Chapter10 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Continuation Bet Sizing</StyledH1>
      <StyledLi>
        The size of a C-bet is also an important consideration. In general, the
        size of a continuation bet should be between half and full pot. Various
        factors will decide where on the spectrum your bet should fall.
      </StyledLi>
      <StyledLi>
        If you have connected with the flop on a coordinated board, bet closer
        to full pot for two reasons:
      </StyledLi>
      <ul className='list-disc pl-10'>
        <StyledLi>
          a coordinated board increases the likelihood you will get callers, and
          you want callers because of your pot equity.
        </StyledLi>
        <StyledLi>
          you want the people who are playing draws to pay through the nose to
          hit them. Don't make it cheap or easy to chase a straight or flush,
          and keep the pressure up on the turn.
        </StyledLi>
      </ul>
      <Board>
        <Card community={true} cards={'QD 8D 2D'} />
        <div className='mr-40 flex flex-row items-center gap-20'>
          <StyledH1>Your hand</StyledH1>
          <Card community={false} cards={'7D 6D'} />
        </div>
      </Board>
      <StyledLi>
        If you hit the flop on a dry board, you likely want to bet closer to
        half the pot. Most players will likely fold, but if you get a caller, it
        could be an indication they have connected in a big way. An overpair or
        top pair with top kicker could get you in serious trouble in these
        situations.
      </StyledLi>
      <Board>
        <Card community={true} cards={'KS 8H 7C'} />
        <div className='mr-40 flex flex-row items-center gap-20'>
          <StyledH1>Your hand</StyledH1>
          <Card community={false} cards={'6S 5S'} />
        </div>
      </Board>
      <StyledLi>
        If you miss the flop on a coordinated board, it's probably not a good
        idea to C-bet, even if you have position. However, if you miss the flop
        on a dry board, C-betting is a good play.
      </StyledLi>
      <StyledH1>
        Continuation Betting Based On Your Opponent's Tendencies
      </StyledH1>
      <StyledLi>
        As always, it is important to get a feel for how your opponents play.
      </StyledLi>
      <StyledLi>
        Passive players (those whose primary move is a check-call) are generally
        not going to fold, so if you miss the flop, a C-bet will not serve its
        intended purpose in getting them to fold. Therefore, you may want to see
        as many cards as possible for free, hope that you eventually hit
        something, and then bet. Remember, if a passive player comes out firing,
        it is generally an indication they have hit something. Conversely, if
        you have hit the flop, C-betting should help build the pot, as the
        player has shown they are unlikely to fold.
      </StyledLi>
      <StyledLi>
        Aggressive players require a different strategy. One of the best ways to
        counter aggression is with aggression. If an aggressive player takes
        away your C-bet by leading out after the flop, don't be afraid to raise.
        Again, the strength of your hand is often not important, as you are
        betting against your opponent's tendencies (aggressive players have a
        much greater bluff frequency).
      </StyledLi>
      <StyledLi>
        If you are first to act against an aggressive player and hit the flop,
        check-raising to take advantage of their proclivity to bet is also a
        good play.
      </StyledLi>
      <StyledLi>
        Developing a good C-betting strategy is critical. But like everything in
        poker, you can't become predictable. Following the strategies outlined
        above should improve your win-rate and add yet another arrow to your
        quiver.
      </StyledLi>
    </div>
  )
}

const Chapter11 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Three Betting</StyledH1>
      <StyledLi>
        Three betting is the act of re-raising a raise. It is a powerful tool to
        add to your poker arsenal, and can be used to win pots pre-flop,
        post-flop, and on the turn. The key to three betting is to be aggressive
        and to use it selectively. You don't want to three bet every time you
        have a strong hand, as your opponents will quickly catch on and start
        folding to your three bets. You also don't want to three bet every time
        you have a weak hand, as your opponents will catch on to that as well
        and start four betting you. The key is to three bet when you have a
        strong hand, but also to mix in some bluffs to keep your opponents
        guessing.
      </StyledLi>
      <StyledH1>Optimal 3-Bet Percentage</StyledH1>
      <StyledLi>
        An optimal 3-bet percentage is roughly the same in position and out of
        position. Some say you should 3-bet more in position than out of
        position, and many would agree it's wise to skew your ranges slightly in
        this direction. However, in today's games, as more players are aware of
        the recommended 3-bet percentage from each position, if you 3-bet too
        frequently from the button or cutoff positions, you will get exploited.
      </StyledLi>
      <StyledH1>3-Betting Against Good Players</StyledH1>
      <StyledLi>
        Let's imagine a standard 6-Max player who's a regular in the game. It's
        not uncommon for them to fold 65% of the time when 3-bet from the blinds
        vs their raise from the cutoff. However, take the same player but you
        are in the cutoff and they are UTG+1. In this position they are likely
        to fold 75-85% of the time to your 3-bet. And the times when they do
        play back, they are most likely 4-betting for value/bluff and flatting a
        very small percentage of the time.
      </StyledLi>
      <StyledLi>
        For that reason, you should be 3-betting a range consisting of hands you
        want to get all-in preflop. In this spot it might be JJ+, for example.
        And you should also 3-bet a range of hands that you cannot flat call
        profitably so decide to re-raise.
      </StyledLi>
      <StyledH1>3-Bet Bluff Hands</StyledH1>
      <StyledLi>
        You should 3-bet bluff using the best hands for which you cannot flat
        call profitably. For example, if you cannot flat hands as strong as QJo
        and ATo in position, add those to your bluff 3-betting range. They will
        have more post-flop equity than hands like off-suit connectors, even if
        they are dominated a portion of the time.
      </StyledLi>
      <StyledLi>
        Note that you are not looking to 3-bet JQo or ATo and automatically
        stack off when you make a pair in position. Most likely your hand will
        fall into the medium strength category and you will be looking to
        control the size of the pot depending on the board and possibly get one
        or two streets of value.
      </StyledLi>
      <StyledH1>3-Betting Against Bad Players</StyledH1>
      <StyledLi>
        All of the advice and strategy above applies to players of a decent
        standard. Everything changes when it comes to weaker and less
        experienced players.
      </StyledLi>
      <StyledLi>
        The reason you should not polarize when playing these weaker players is
        because, in general, they will call a lot more 3-bets, even out of
        position. Against them you need to open up your value 3-betting range,
        and never 3-bet with bluff hands.
      </StyledLi>
      <StyledLi>
        Basically, what you are doing is getting to the weaker players before
        anyone else can, i.e. isolating them with your AT, QJ, KJ, KQ, and AJ
        hands (any two Broadway cards) instead of flatting and allowing another
        player to do the same. You can also try 3-betting them to a smaller
        amount to induce even more calls from weaker hands out of position.
      </StyledLi>
    </div>
  )
}

const Chapter12 = () => {
  return (
    <div className='flex list-none flex-col justify-center font-medium'>
      <StyledH1>Essential Tips for Betting on the River</StyledH1>
      <StyledLi>
        When it comes to poker, how to play on the river is both a complex topic
        and a simple one.
      </StyledLi>
      <StyledLi>
        It's complex because developing a plan over multiple betting rounds
        including flop, turn and river is tough to get right. It involves taking
        into account bet sizing across those streets, relative to stack depth,
        as well as considering how your opponents' actions across those streets
        define their range.
      </StyledLi>
      <StyledLi>
        That is to say: how can you narrow their possible range of holdings,
        based on their actions across this specific runout, and also based on
        any other information we have (such as their tendencies, their view of
        us, our relative positions, stack depths, and the stage of the
        tournament)?
      </StyledLi>
      <StyledLi>
        In this sense, betting or checking river with the right frequency can be
        considered one of the toughest things to get right in poker.
      </StyledLi>
      <StyledH1>It All Comes Down To This</StyledH1>
      <StyledLi>
        In another sense, river decisions can be simpler than decisions on
        earlier streets.
      </StyledLi>
      <StyledLi>
        This is because when betting on the river you don't need to consider
        implied odds on future streets, as there are no future streets! You
        don't have to consider what cards might come up, or your chances of
        hitting one of your outs. It's all about this moment.
      </StyledLi>
      <StyledH1>Understand Your Strategy for How to Play the River</StyledH1>
      <StyledLi>
        As such, several reasons we might have for betting on earlier streets go
        out of the window on the river.
      </StyledLi>
      <StyledLi>
        We no longer care about charging equity, that is to say, we don't care
        about folding out (or at least charging a high price to continue) those
        hands in our opponents' range which might hit a card on later streets.
        We only care about either getting value from worse hands or folding out
        better hands, depending on whether we are betting for value or bluffing.
        Semi-bluffing is no longer a part of the game on the river.
      </StyledLi>
      <StyledH1>Reasons for Betting on Flop & Turn:</StyledH1>
      <ul className='list-disc pl-10'>
        <StyledLi>
          Value & Protection - protecting your hand against bad cards which can
          improve on future streets
        </StyledLi>
        <StyledLi>
          Airball Bluff - bluffing with no equity for future streets
        </StyledLi>
        <StyledLi>
          Semi-bluff - bluffing with a drawing hand which might hit on later
          streets
        </StyledLi>
        <StyledLi>
          Charging Your Opponent - to realize their equity on future streets
        </StyledLi>
        <StyledLi>Maintaining Initiative</StyledLi>
      </ul>
      <StyledH1>Reasons for Betting on the River:</StyledH1>
      <ul className='list-disc pl-10'>
        <StyledLi>Value (either fat or thin - see below)</StyledLi>
        <StyledLi>As a bluff</StyledLi>
      </ul>
      <StyledH1>
        If Better Hands Will Call and Worse Ones Will Fold, Why Bet?
      </StyledH1>
      <StyledLi>Let's look at an example:</StyledLi>
      <Board>
        <Card community={true} cards={'AC TC 8C 6H 6C'} />
        <div className='mr-40 flex flex-row items-center gap-20'>
          <StyledH1>Your hand</StyledH1>
          <Card community={false} cards={'6D 9D'} />
        </div>
      </Board>
      <StyledLi>You're heads-up, it's checked to you. Do you bet?</StyledLi>
      <StyledLi>
        Against somewhat decent competition, the answer is “no”. A worse hand
        will not call here, and a better hand will not fold. You also have
        showdown value, meaning that it is still reasonably possible that you
        can win at showdown once you check back.
      </StyledLi>
      <StyledLi>
        Of course, it's possible that you might get called by some opponents
        with something like Ax because they want to “keep you honest”, but don't
        count on it. It's possible you could occasionally get called by a worse
        6x hand, but it's unlikely.
      </StyledLi>
      <StyledH1>Fat and Thin Value</StyledH1>
      <StyledLi>
        Against so-called 'Calling Stations' (players who are very passive
        post-flop and will call down with any piece of the board) you should be
        much more inclined to bet the river with decent hands. The answer to the
        question “will they call with worse hands?” so often comes up as “yes”
        that it becomes worth it to bet for value with mediocre hands. This is
        the concept of betting for thin value.
      </StyledLi>
      <StyledLi>
        Betting for fat value is betting in any spot where it is easy to see
        many worse hands calling you. Betting for thin value is betting for
        value in a spot where you judge that your opponent will call with worse
        holdings just often enough to make it an overall profitable value bet.
      </StyledLi>
      <Board>
        <Card community={true} cards={'QC 5H 7S 2D 2H'} />
        <div className='mr-40 flex flex-row items-center gap-20'>
          <StyledH1>Your hand</StyledH1>
          <Card community={false} cards={'QD JC'} />
        </div>
      </Board>
      <StyledLi>
        Your opponent is a competent regular and you started the hand UTG+3 vs.
        BB, continuation-bet half pot on the flop and got called, before the
        turn went check/check and your opponent checked to you on the river.
      </StyledLi>
      <StyledLi>
        You decide that they will call with several worse combinations of Qx
        including QTs and Q9s, probably Q8s. You think they will sometimes call
        with a worse pair such as 99 or A7s, and that they likely would have led
        out on the river with most of their two pair combos or better (those
        which beat the 2s on the table), and with a better Qx, at least the
        majority of the time.
      </StyledLi>
      <StyledLi>
        For those reasons you feel that they will be calling with worse hands
        more often than they call with better hands, and you will therefore not
        be value owning yourself when betting for value.
      </StyledLi>
      <StyledH1>Remember, on the river:</StyledH1>
      <ul className='list-disc pl-10'>
        <StyledLi>
          You're either betting for value (you want a call), or as a bluff (you
          want a fold)
        </StyledLi>
        <StyledLi>If for value, which worse hands are calling you?</StyledLi>
        <StyledLi>
          If as a bluff, which better hands are folding to the bet?
        </StyledLi>
        <StyledLi>Don't miss out on value by not going thin enough</StyledLi>
        <StyledLi>
          How does the villain perceive your range? Are they even thinking in
          ranges?
        </StyledLi>
        <StyledLi>
          With what range of hands does the villain get to the river?
        </StyledLi>
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
