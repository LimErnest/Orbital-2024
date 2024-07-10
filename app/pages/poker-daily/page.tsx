import { Metadata } from 'next'
import { PokerSidebar } from '@/components/ui/poker-components/poker-sidebar'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function pokerDaily() {
  return (
    <>
      <div className='flex'>
        <PokerSidebar highlightedLink={'quiz'} />
        <div className='h-screen w-full overflow-hidden p-20'></div>
      </div>
    </>
  )
}
