import { Metadata } from 'next'
import { ChessGuide } from '@/components/ui/chessguide'
import { ChessSidebar } from '@/components/ui/chess-sidebar'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function GuidePage() {
  return (
    <>
      <div className='flex'>
        <ChessSidebar highlightedLink={'guide'} />
        <div className='h-screen w-full overflow-hidden p-20'>
          <ChessGuide />
        </div>
      </div>
    </>
  )
}
