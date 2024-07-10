import { Metadata } from 'next'
import { PokerSidebar } from '@/components/ui/poker-components/poker-sidebar'
import { CompareHandsPuzzle } from '@/components/ui/poker-components/card'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function pokerDaily() {
  return (
    <>
      <div className='flex'>
        <PokerSidebar highlightedLink={'quiz'} />
        <div className='flex h-screen w-full flex-row overflow-hidden p-20'>
          <CompareHandsPuzzle />
          <Card className='justify-center'>
            <CardHeader>
              <CardTitle className='flex justify-center text-4xl'>
                Daily Quiz #1
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex flex-row justify-center'>
                <CardDescription>
                  <li>
                    You are dealt the following hand: <br />
                    <br />
                    <strong>♠️ A♠️ 10♠️ 9♠️ 8♠️ 7</strong>
                  </li>
                  <li>
                    The board is: <br />
                    <br />
                    <strong>♦️ 10♦️ 9♦️ 8♦️ 7♦️</strong>
                  </li>
                  <li>
                    What is the best hand you can make?
                  </li>
                </CardDescription>
              </div>
            </CardContent>
            <CardFooter>
              <button className='bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded'>
                Submit Answer
              </button>
            </CardFooter>
            </Card>
        </div>
      </div>
    </>
  )
}
