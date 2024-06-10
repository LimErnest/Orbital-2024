'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'

interface UserType {
  email: string | null
  uid: string | null
  username: string | null
  session : true | false | null
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
    username: null,
    session: null
  })
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
          setUser({
            email: user.email,
            uid: user.uid,
            username: user.displayName,
            session: true
          })
        } else {
          setUser({
            email: null,
            uid: null,
            username: null,
            session: false
          })
        }
    })
    return () => unsubscribe()
  }, [])

  const signUp = async (email: string, password: string, displayName: string) => {
    await createUserWithEmailAndPassword(auth, email, password);
    const currentUser = auth.currentUser;
    if (currentUser) {
      await updateProfile(currentUser, { displayName: displayName });
    }
  };


  const updateUsername = async (username: string) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      await updateProfile(currentUser, { displayName: username}).catch(
        (err) => console.log(err)
      );
      setUser({
        email: user.email,
        uid: user.uid,
        username: username,
        session: true
      })
    }
  }
  
  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    setUser({ email: null, uid: null, username: null, session: false })
    return await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, signUp, logIn, logOut, updateUsername}}>
      {children}
    </AuthContext.Provider>
  )
}