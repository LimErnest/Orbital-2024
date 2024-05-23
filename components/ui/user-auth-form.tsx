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

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  const [isInvalidDialogOpen, setIsInvalidDialogOpen] =
    React.useState<boolean>(false)
  const [errorType, setErrorType] = React.useState<string>('')

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    const isValid = checkPassword()
    
    if (isValid) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
  }

  function checkPassword() {
    let error = ''
    const specialCharRegex = /[!@#$%^&*()-_=+\[{]};:'",<.>\/?\\|]/;

    if (password !== confirmPassword) {
      error = 'mismatch'
    } else if (password.length < 8) {
      error = 'length'
    } else if (!/\d/.test(password) && !specialCharRegex.test(password)) {
      error = 'both'
    } else if (!/\d/.test(password)) {
      error = 'number'
    } else if (!specialCharRegex.test(password)) {
      error = 'special'
    }

    if (error) {
      setErrorType(error)
      setIsInvalidDialogOpen(true)
      return false
    }

    return true
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
              autoComplete='off'
              autoCorrect='off'
              disabled={isLoading}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <Label className='sr-only' htmlFor='password'>
              Confirm Password
            </Label>
            <div className='p-3 text-sm'>
              Password must be at least 8 characters long, including 1 number
              and 1 special character.
            </div>
            <Input
              id='password'
              placeholder='Confirm Password'
              type='password'
              autoCapitalize='none'
              autoComplete='off'
              autoCorrect='off'
              disabled={isLoading}
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Sign Up with Email
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
              Passwords do not meet requiments.
            </AlertDialogTitle>
            <AlertDialogDescription>
              {errorType === 'mismatch' &&
                'Please ensure that the passwords you entered match before continuing.'}
              {errorType === 'length' &&
                'Password must be at least 8 characters long.'}
              {errorType === 'number' &&
                'Password must include at least 1 number.'}
              {errorType === 'special' &&
                'Password must include at least 1 special character.'}
              {errorType === 'both' &&
                'Password must include at least 1 number and 1 special character.'}
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
