import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  community?: boolean
  cards: string
}

const Card: React.FC<CardProps> = ({
  children,
  className,
  community,
  cards,
  ...props
}) => {
  const cardArray = cards.split(' ')
  const frontCards = cardArray.map((cardChar, index) => (
    <CardSection key={index} imageString={cardChar} />
  ))
  if (community) {
    const backCards = Array.from(
      { length: 5 - cardArray.length },
      (_, index) => <CardSection key={index} imageString='back' />
    )
    return (
      <div className='flex flex-row justify-center gap-10'>
        {frontCards}
        {backCards}
      </div>
    )
  }

  return <div className='flex flex-row justify-center gap-10'>{frontCards}</div>
}

export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  imageString: string
}

const CardSection: React.FC<CardSectionProps> = ({
  className,
  style,
  imageString,
  ...props
}) => {
  const imagePath = `/cards/${imageString}.png`
  return (
    <div className={cn('h-full', className)} style={style} {...props}>
      <Image
        src={imagePath}
        alt={imageString}
        width={150}
        height={150}
        style={{ height: 'auto' }}
      />
    </div>
  )
}

export { Card, CardSection }
