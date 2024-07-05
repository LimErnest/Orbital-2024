import { Metadata } from 'next'
import { PokerSidebar } from '@/components/ui/poker-components/poker-sidebar'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function pokerFinal() {
  return (
    <div className='flex'>
      <PokerSidebar highlightedLink='final' />
    </div>
  )
}