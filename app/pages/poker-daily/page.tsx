import { Metadata } from 'next'
import { PokerSidebar } from '@/components/ui/poker-components/poker-sidebar'
import { CompareHandsPuzzle } from '@/components/ui/poker-components/card'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function pokerDaily() {
  return (
    <>
      <div className='flex'>
        <PokerSidebar highlightedLink={'quiz'} />
        <CompareHandsPuzzle />
      </div>
    </>
  )
}
