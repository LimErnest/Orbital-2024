import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Navbar } from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'
import { SnapPage, SnapPageSection } from '@/components/ui/snap-page'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function LandingPage() {
  return (
    <>
      <Navbar
        className='fixed left-0 top-0 w-full'
        style={{ zIndex: '1', height: '60px' }}
      />
      <SnapPage>
        <SnapPageSection
          className='flex flex-col items-start justify-center px-20 py-20 text-left text-black'
          style={{
            backgroundImage: 'url(/img/nicebackground1.gif)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            zIndex: -1
          }}
        >
          <div className='transform-relative flex w-full items-center justify-between'>
            <div className='mr-20 flex flex-col'>
              <h1 className='mb-4 text-6xl font-bold'>Guidance</h1>
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
            <div className='flex-shrink-0 lg:translate-y-5 lg:translate-x-5'>
              <Image
                src='/img/icon.jpg'
                alt='Knight'
                width={500}
                height={500}
                style={{ transform: 'translateX(-30%)' }}
              />
            </div>
          </div>
        </SnapPageSection>

        <SnapPageSection>
          <div
            className='relative h-full'
            style={{
              backgroundImage: 'url(/img/nicebackground1.gif)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              zIndex: -1
            }}
          >
            <div
              style={{
                paddingTop: '20vh',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <h1 className='mb-4 text-center text-6xl font-bold'>
                Games Available
              </h1>
              <div
                style={{
                  flex: 'auto',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  padding: '2vh 10vw'
                }}
              >
                <Card className='m-2 flex w-full flex-col'>
                  <CardHeader className='ml-5 mt-2'>
                    <CardTitle className='text-5xl font-bold'>Chess</CardTitle>
                    <CardDescription className='text-3xl font-bold'>
                      Classic game for the ages
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src='/img/chess1.jpg'
                      alt='Chess'
                      width={400}
                      height={400}
                      className='mx-auto mb-4 block rounded-md border-2 border-black'
                    />
                  </CardContent>
                </Card>

                <Card className='m-2 flex w-full flex-col'>
                  <CardHeader className='ml-5 mt-2'>
                    <CardTitle className='text-5xl font-bold'>
                      Mahjong
                    </CardTitle>
                    <CardDescription className='text-3xl font-bold'>
                      Great game for celebrations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src='/img/mahjongs.jpg'
                      alt='Chess'
                      width={400}
                      height={400}
                      className='mx-auto mb-4 block rounded-md border-2 border-black'
                    />
                  </CardContent>
                </Card>

                <Card className='m-2 flex w-full flex-col'>
                  <CardHeader className='ml-5 mt-2'>
                    <CardTitle className='text-5xl font-bold'>Poker</CardTitle>
                    <CardDescription className='text-3xl font-bold'>
                      A game of chance and skill
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src='/img/poker.jpg'
                      alt='Chess'
                      width={400}
                      height={400}
                      className='mx-auto mb-4 block rounded-md border-2 border-black'
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </SnapPageSection>

        <SnapPageSection>
          <div
            className='flex items-center justify-center flex-col lg:flex-row h-full p-4'
            style={{
              backgroundImage: 'url(/img/nicebackground1.gif)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              zIndex: -1
            }}
          >
            <div className='transform -translate-y-20 lg:translate-y-0 relative flex pl-3 md:pl-5 lg:pl-6 xl:pl-14'>
              <b className="text-7xl md:text-9xl lg:text-8xl xl:text-9xl">
                What is <br/> Guidance?
              </b>
            </div>

            <div className='transform -translate-y-20 lg:translate-y-0 relative flex flex-col p-3 md:p-5 lg:p-6 xl:p-14'>
              <p className="text-base md:text-lg lg:text-xl xl:text-2xl">
                Guidance is a games-learning platform for people to explore
                different games and have concise guides on those games that they
                wish to learn. Our platform will provide all the information
                that a person would need to learn the game. We would also gamify
                learning by providing daily quizzes that give experience points
                and a test to allow users to test their knowledge about the
                things they had learned and collect badges.
              </p>
              <Link 
                href='/img/poster.jpg'
                target='_blank'
                className='py-4'
              >
                <Button
                  className={cn(
                    buttonVariants({ size: 'xl' }),
                    'px-8 py-4 text-xl'
                  )}
                >
                  Learn More
                </Button>
              </Link>  
            </div>
          </div>
        </SnapPageSection>

        <SnapPageSection>
          <div 
            className='flex items-center flex-col justify-center h-full p-4'
            style={{
              backgroundImage: 'url(/img/nicebackground1.gif)',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              backgroundPosition: 'center',
              zIndex: -1
            }}
          >
            <div>
              <b className ='text-8xl'>
                Features
              </b>
            </div>

            <div>
              <b className='text-8xl'>
                Coming Soon...
              </b>
            </div>
          </div>
        </SnapPageSection>
      </SnapPage>
    </>
  )
}
