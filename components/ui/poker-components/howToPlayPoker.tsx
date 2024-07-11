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
    <Dialog>
      <DialogTrigger>
        <Button
          variant={'ghost'}
          size={'lg'}
          className='border border-2 border-gray-300 py-0 text-lg font-semibold hover:bg-blue-300'
        >
          How to play?
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
                To determine which hand is better.
              </div>
            </div>

            <div className='mt-6 text-2xl'>
              What to do:
              <div className='mt-6 text-xl'>
                1. Look at the two hands <br />
                2. Determine which hand is better <br />
                3. Click the button that corresponds to the hand you think is
                better <br />
                4. If you are correct, you will earn xp and the button will turn
                green <br />
                5. If you are incorrect, the button will turn red <br />
                6. You can only click one button per question <br />
                7. You can choose to continue by pressing the next button only
                after you have made a selection <br />
                8. You have 5 attempts every day <br />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
