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
        <SnapPageSection className='flex flex-col items-start justify-center px-20 py-20 text-left text-black'>
          <div className='flex w-full items-center justify-between'>
            <div className='mr-20 flex flex-col'>
              <h1 className='mb-4 text-5xl font-bold'>Guidance</h1>
              <p className='mb-4 text-8xl font-bold'>Learning made easy</p>
              <ul className='mb-8 text-4xl'>
                <li>Guides for all games</li>
                <li>All in one Solution</li>
                <li>Self Paced Learning</li>
              </ul>
              <Link href='/pages/signup'>
                <Button
                  className={cn(
                    buttonVariants({ size: 'xl' }),
                    'px-8 py-4 text-xl'
                  )}
                >
                  Sign Up
                </Button>
              </Link>
            </div>
            <div className='flex-shrink-0'>
              <Image
                src='/img/knight.jpg'
                alt='Knight'
                width={250}
                height={250}
                className='-translate-x-10 -translate-y-20 transform'
              />
              <Image
                src='/img/mahjong.jpg'
                alt='Mahjong'
                width={275}
                height={275}
                className='-translate-x-80 -translate-y-20 transform'
              />
            </div>
          </div>
        </SnapPageSection>

        <SnapPageSection>
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
