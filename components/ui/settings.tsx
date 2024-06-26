import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { useAuth } from '../../app/context/AuthContext'
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
import { useState } from 'react'

export function Settings() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [username, setUsername] = React.useState<string>('')
  const [isInvalidDialogOpen, setIsInvalidDialogOpen] =
    React.useState<boolean>(false)
  const [errorType, setErrorType] = React.useState<string>('')
  const { updateUsername, changePassword, upload, logOut, user, logIn } = useAuth()
  const [currPassword, setCurrPassword] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  const [image, setImage] = useState<File | null>(null)
  const [fileName, setFileName] = useState<string | null>('No file selected')

  async function handleUsername(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    const valid = checkUsername()
    if (valid) {
      await updateUsername(username)
      setUsername('')
      successDialog()
    }
    setIsLoading(false)
  }

  function checkUsername() {
    if (username.length < 1) {
      setErrorType('username')
      setIsInvalidDialogOpen(true)
      return false
    }
    return true
  }

  async function handlePassword(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    try {
      const userEmail = user.email
      console.log('i have not login')
      await logIn(userEmail, currPassword)
      console.log('i have login')

      const isValid = checkPassword()
      if (isValid) {
        await changePassword(currPassword, password)
        logOut()
      }
    } catch (error: any) {
      console.log(error.code)
      if (error.code == 'auth/invalid-login-credentials') {
        console.log('isvalid returns an error')
        setErrorType('wrong credentials')
        setIsInvalidDialogOpen(true)
      }

    } finally {
      setIsLoading(false)
    }
  }

  function checkPassword() {
    let error = ''
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>_\-+=\[\]\\\/]/


    if (password !== confirmPassword) {
      error = 'mismatch'
    } else if (password === currPassword) {
      error = 'same'
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

  function handleFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files && event.target.files[0].size > 1 * 1024 * 1024) {
      setErrorType('size')
      setIsInvalidDialogOpen(true)
      event.target.value = ''
      setFileName('No file selected')
      return
    }

    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0])
      setFileName(event.target.files[0].name)
      event.target.value = ''
    }
  }

  function handleUpload(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)
    try {
      upload(image)
      setFileName('No file selected')
      successDialog()
    } catch (error: any) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const clearFile = () => {
    setImage(null)
    setFileName('No file selected')
  }

  function successDialog() {
    setErrorType('success')
    setIsInvalidDialogOpen(true)
  }

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className={cn(
              buttonVariants({
                variant: 'ghost',
                className:
                  'flex w-full justify-start rounded-sm bg-transparent text-black shadow-none hover:bg-blue-300'
              })
            )}
          >
            <Image
              src='/img/settings_icon.jpg'
              alt='Settings'
              width={20}
              height={5}
              className='mr-2'
            />
            Settings
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Update username</SheetTitle>
            <SheetDescription>
              Username must be at least 1 character long.
            </SheetDescription>
          </SheetHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid w-full grid-cols-4 items-center gap-4'>
              <Input
                id='username'
                placeholder='Username'
                type='username'
                autoCapitalize='none'
                autoComplete='username'
                autoCorrect='off'
                disabled={isLoading}
                value={username}
                onChange={e => setUsername(e.target.value)}
                className='col-span-4'
                required={true}
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit' onClick={handleUsername}>
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
          <div className='mb-2 mt-4 border-t border-gray-300'></div>
          <SheetHeader>
            <SheetTitle>Update password</SheetTitle>
            <SheetDescription>
              Password must be at least 8 characters long, including 1 number,
              and 1 special character.
              <br />
              <br />
              You will be logged out if successful.
            </SheetDescription>
          </SheetHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Input
                id='Current Password'
                placeholder='Current Password'
                type='password'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                disabled={isLoading}
                value={currPassword}
                onChange={e => setCurrPassword(e.target.value)}
                className='col-span-4'
                required
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Input
                id='New Password'
                placeholder='New Password'
                type='password'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                disabled={isLoading}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className='col-span-4'
                required
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Input
                id='Confirm password'
                placeholder='Confirm Password'
                type='password'
                autoCapitalize='none'
                autoComplete='off'
                autoCorrect='off'
                disabled={isLoading}
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className='col-span-4'
                required
              />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit' onClick={handlePassword}>
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
          <div className='mb-2 mt-4 border-t border-gray-300'></div>
          <SheetHeader>
            <SheetTitle>Update profile picture</SheetTitle>
            <SheetDescription>
              Please upload valid image files only.
            </SheetDescription>
          </SheetHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid w-full grid-cols-5 items-center gap-4'>
              <div className='col-span-2'>
                <input
                  type='file'
                  id='fileInput'
                  onChange={handleFile}
                  accept='.jpg,.png'
                  style={{ display: 'none' }}
                />
                <label
                  htmlFor='fileInput'
                  className='cursor-pointer rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-gray-300'
                >
                  Choose File
                </label>
              </div>
              <div className='flex flex-row col-span-3 items-center'>
                <Label>{fileName}</Label>
                <Button
                  onClick={clearFile}
                  className={cn(
                    buttonVariants({
                      variant: 'ghost',
                      className:
                        'flex items-center justify-center rounded-full bg-white text-black shadow-none hover:text-red-500 ml-2'
                    })
                  )}
                >
                  X
                </Button>
              </div>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type='submit' onClick={handleUpload}>
                Save changes
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      <AlertDialog
        open={isInvalidDialogOpen}
        onOpenChange={setIsInvalidDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {errorType === 'success' && 'Success!'}
              {errorType === 'username' &&
                'Username does not meet requirements'}
              {errorType === 'size' &&
                'File uploaded does not meet requirements'}
              {errorType !== 'username' &&
                errorType !== 'success' &&
                errorType !== 'size' &&
                'Password does not meet requirements'}
            </AlertDialogTitle>
            <AlertDialogDescription>
              {errorType === 'username' &&
                'Username must be at least 1 character long.'}
              {errorType === 'mismatch' &&
                'Please ensure that the passwords you entered match before continuing.'}
              {errorType === 'length' &&
                'New Password must be at least 8 characters long.'}
              {errorType === 'number' &&
                'New Password must include at least 1 number.'}
              {errorType === 'special' &&
                'New Password must include at least 1 special character.'}
              {errorType === 'both' &&
                'New Password must include at least 1 number and 1 special character.'}
              {errorType === 'same' &&
                'Current password and new password cannot be the same.'}
              {errorType === 'wrong credentials' &&
                'Please ensure that the current password you have entered is correct.'}
              {errorType === 'size' &&
                'Please ensure that the file you have uploaded is less than 1MB.'}
              {errorType === 'success' && 'Your changes have been saved.'}
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
