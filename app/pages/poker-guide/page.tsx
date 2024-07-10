import { Metadata } from 'next'
import { PokerSidebar } from '@/components/ui/poker-components/poker-sidebar'
import { PokerGuide } from '@/components/ui/poker-components/pokerguide'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function pokerGuide() {
  return (
    <div className='flex'>
      <PokerSidebar highlightedLink='guide' />
      <div className='h-screen w-full overflow-hidden p-20'>
        <PokerGuide />
      </div>
    </div>
  )
}
