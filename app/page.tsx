import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { Navbar } from '@/components/ui/navbar'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function LandingPage() {
  return (
    <>
      <div 
        className='container relative hidden h-[4000px] flex-col items-center justify-center rounded-md border border-gray-300 md:grid lg:max-w-none lg:px-0'
        style = {{
          overflowY:'auto',
          overflowX: 'hidden'
        }}>
        <Navbar className='fixed top-0 left-0 w-full z-10'/>
        <div className='flex items-center justify-center lg:p-8'>
          <div className ='segment-container'
            style={{ 
              textAlign: 'center' 
            }}>
            <div
              style= {{
                fontSize: '200px' 
              }}>
              <b>Guidance</b>
            </div>
            <Button style = {{
              backgroundColor: 'white',
              color: 'black',
              padding: '5px 10px',
              textAlign:'center',
              marginTop: '20px'
            }} >
              <div className='flex flex-col space-y-2 text-center'>
                <Link
                  href='/pages/signup'
                  className='text-2xl font-semibold tracking-tight'
                >
                  Create an account
                </Link>
              </div>
            </Button>
          </div>
        </div>
        

        <div  
          style = {{
            backgroundImage: 'url(/img/background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100vw',
            height:'600px',
            position:'relative',
            left: '0',
            padding: '2px 20px'
          }}
        >
          <b>Games Available</b>
        </div>

        <div
          style = {{
            position: 'relative',
            padding: '2px 20px',
            textAlign: 'left',
            left: '0',
            fontSize: '50px',
            flexDirection: 'column',
            display: 'flex',
            marginTop: '0',
            marginBottom: '0',
          }}
        >
          <b>What is <br/> 
             Guidance?</b>
          <p
            style = {{
              marginLeft:'auto',
              fontSize:'14px'

            }}>
            Guidance is a games-learning platform for people to explore different games 
            and have concise guides on those games that they wish to learn. 
            Our platform will provide all the information that a person would need to learn the game. 
            We would also gamify learning by providing daily quizzes that give experience points 
            and a test to allow users to test their knowledge about the things they had learned and collect badges. 

          </p>  

        </div>

        <div style={{ borderTop: '1px solid #ccc', margin: '20px 0' }}></div>

        <div
          style ={{
            position: 'relative',
            padding: '2px 20px',
            textAlign: 'left',
            left: '0',
            fontSize: '50px',
            flexDirection: 'column',
            display: 'flex',
            marginTop: '0',
            marginBottom: '0'
          }}
        >
          <b>Features</b>
          <p>
            ejiejifwefijeijfwejfwijfwjfwejewojwijfij
          </p>
        </div>
      </div>
    </>
  )
}