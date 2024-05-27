'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icon'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'

import { useAuth } from '../../app/context/AuthContext'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function SignInForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [password, setPassword] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [isInvalidDialogOpen, setIsInvalidDialogOpen] =React.useState<boolean>(false)
  const [errorType, setErrorType] = React.useState<string>('')
  const { user, logIn } = useAuth()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    try {
      setIsLoading(true)
      await logIn(email, password)
      console.log(user)
    } catch (error: any) {
      if (error.code == 'auth/invalid-login-credentials') {
        setErrorType('wrong credentials')
        setIsInvalidDialogOpen(true)
      } else if (error.code == 'auth/too-many-requests') {
        setErrorType('too many request')
        setIsInvalidDialogOpen(true)
      } else {
        console.log(error.message)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Label className='sr-only' htmlFor='password'>
              Password
            </Label>
            <Input
              id='password'
              placeholder='Password'
              type='password'
              autoCapitalize='none'
              autoComplete='password'
              autoCorrect='off'
              disabled={isLoading}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Log in with Email
          </Button>
        </div>
      </form>

      <AlertDialog
        open={isInvalidDialogOpen}
        onOpenChange={setIsInvalidDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {errorType == 'wrong credentials'
                ? 'Invalid email or password'
                : 'Too many wrong attempts'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {errorType == 'wrong credentials'
                ? 'Please ensure that the email or password you have entered is correct.'
                : 'There are too many wrong attempts please try again later'}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
