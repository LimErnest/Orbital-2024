import Image from 'next/image'
import Link from 'next/link'

const Dashboard = () => {
    return (
        <>
            <div className='h-screen flex justify-center flex-col items-center'>
                <div className='text-6xl'>Lets get started, pick a game!</div>

                <div className='flex flex-row p-8'>
                    <div className='px-4'>
                        <Link
                            href='/pages/chess-guide'
                            className='flex items-center justify-start whitespace-nowrap border-2 rounded-sm px-4 py-1 text-2xl font-medium border-black hover:bg-blue-300'
                        >
                            <Image
                                src='/img/pawn_icon.jpg'
                                alt='Chess'
                                width={30}
                                height={30}
                                className='mr-2'
                                style={{ height: 'auto' }}
                            />
                            Chess
                        </Link>
                    </div>

                    <div className='px-4'>
                        <Link
                            href='/pages/poker-guide'
                            className='flex items-center justify-start whitespace-nowrap border-2 rounded-sm px-4 py-1 text-2xl font-medium border-black hover:bg-blue-300'
                        >
                            <Image
                                src='/img/poker_icon.jpg'
                                alt='Poker'
                                width={30}
                                height={30}
                                className='mr-2'
                                style={{ height: 'auto' }}
                            />
                            Poker
                        </Link>
                    </div>

                    <div className='px-4'>
                        <Link
                            href='/pages/coming-soon'
                            className='flex items-center justify-start whitespace-nowrap border-2 rounded-sm px-4 py-1 text-2xl font-medium border-black hover:bg-blue-300'
                        >
                            <Image
                                src='/img/mahjong_icon.jpg'
                                alt='Mahjong'
                                width={30}
                                height={30}
                                className='mr-2'
                                style={{ height: 'auto' }}
                            />
                            Mahjong
                        </Link>
                    </div>
                </div>

            </div>

        </>
    )
}

export { Dashboard }