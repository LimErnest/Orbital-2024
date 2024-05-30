'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

interface UserType {
  email: string | null
  uid: string | null
  username: string | null
}

const AuthContext = createContext({})

export const useAuth = () => useContext<any>(AuthContext)

export const AuthContextProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<UserType>({
    email: null,
    uid: null,
    username: null
  })
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const docRef = doc(db, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setUser({
            email: user.email,
            uid: user.uid,
            username: docSnap.data().username
          })
        } else {
          setUser({
            email: user.email,
            uid: user.uid,
            username: ''
          })
        }
      } else {
        setUser({ email: null, uid: null, username: '' })
      }
    })
    return () => unsubscribe()
  }, [])

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    setUser({ email: null, uid: null, username: '' })
    return await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut}}>
      {children}
    </AuthContext.Provider>
  )
}