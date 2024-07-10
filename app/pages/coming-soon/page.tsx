import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guidance',
  description: 'Authentication forms built using the components.'
}

export default function ComingSoon() {
  return (
    <>
      <div
        className='h-screen'
        style={{
          backgroundImage: 'url(/img/coming-soon.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          zIndex: -1
        }}
      ></div>
    </>
  )
}
