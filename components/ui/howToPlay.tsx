import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function HowToPlay() {
  return (
    <div>
      <div className='px-4'>
        <Dialog>
          <DialogTrigger className='w-full'>
            <Button
              className={cn(
                buttonVariants({ size: 'xl' }),
                'px-8 py-4 text-xl'
              )}
            >
              How To Play?
            </Button>
          </DialogTrigger>
          <DialogContent className='h-auto w-full max-w-screen-md p-6 md:h-4/5'>
            <DialogHeader>
              <DialogTitle className='text-center text-3xl'>
                How To Play?
              </DialogTitle>
              <DialogDescription>
                <div className='mt-2 text-2xl'>
                  Objective:
                  <div className='mt-6 text-xl'>
                    1. To checkmate your opponent after a series of moves
                    <br />
                    2. To gain material advantage over your opponents by winning
                    their pieces
                    <br />
                  </div>
                </div>

                <div className='mt-6 text-2xl'>
                  What to do:
                  <div className='mt-6 text-xl'>
                    1. Look at the move the AI play, <br />
                    - the piece whose box is highlighted yellow is the piece
                    that is moved <br />
                    - the empty box that is highlighted yellow was its previous
                    position <br />
                    <br />
                    2. Look at the color of the piece being moved, <br />- if it
                    is <b>black</b> then you will be playing as <b>white</b>
                    <br />- if it is <b>white</b> then you will be playing as{' '}
                    <b>black</b>
                    <br />
                    <br />
                    3. According to what you are playing as, <br />
                    - find the best move possible such that it meets the
                    objective
                    <br />
                    - move the corresponding color piece to the desired square
                    <br />
                    <br />
                    4. After a series of moves, <br />- if the Restart button
                    changes to the <b>Next</b> button, you have successfully{' '}
                    <b>solved</b> the puzzle
                    <br />- if the Restart button changes to the{' '}
                    <b>Try Again</b> button, you have played a <b>wrong</b> move
                    <br />
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
