'use client'

import { Metadata } from 'next'
import { CompareHandsPuzzle } from '@/components/ui/poker-components/card'

export const metadata: Metadata = {
    title: 'Guidance',
    description: 'Authentication forms built using the components.'
}

const PokerDailyQuiz = () => {
    return (
        <>
            <div className='flex'>
                <CompareHandsPuzzle />
            </div>
        </>
    )
}

export { PokerDailyQuiz }