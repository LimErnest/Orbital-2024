import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Navbar } from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'
import { SnapPage, SnapPageSection } from '@/components/ui/snap-page'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function LandingPage() {
  return (
    <>
      <Navbar className='fixed left-0 top-0 w-full' style={{ zIndex: '1' }} />
      <SnapPage>
        <SnapPageSection>
          <b>
            What is <br />
            Guidance?
          </b>
          <p style={{ marginLeft: 'auto', fontSize: '14px' }}>
            Guidance is a games-learning platform for people to explore
            different games and have concise guides on those games that they
            wish to learn. Our platform will provide all the information that a
            person would need to learn the game. We would also gamify learning
            by providing daily quizzes that give experience points and a test to
            allow users to test their knowledge about the things they had
            learned and collect badges.
          </p>
        </SnapPageSection>

        <SnapPageSection
          className='custom-section'
          style={{
            backgroundImage: 'url(/img/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative'
          }}
        >
          <b>Games Available</b>
        </SnapPageSection>

        <SnapPageSection>
          <b>
            What is <br />
            Guidance?
          </b>
          <p style={{ marginLeft: 'auto', fontSize: '14px' }}>
            Guidance is a games-learning platform for people to explore
            different games and have concise guides on those games that they
            wish to learn. Our platform will provide all the information that a
            person would need to learn the game. We would also gamify learning
            by providing daily quizzes that give experience points and a test to
            allow users to test their knowledge about the things they had
            learned and collect badges.
          </p>
        </SnapPageSection>

        <SnapPageSection>
          <b>Features</b>
          <p>ejiejifwefijeijfwejfwijfwjfwejewojwijfij</p>
        </SnapPageSection>
      </SnapPage>
    </>
  )
}
