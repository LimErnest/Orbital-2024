'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'


interface UserType {
  email: string | null
  uid: string | null
  username: string | null
  session: true | false | null
  profilePicture: string | null
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
    session: null,
    profilePicture: null
  })
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        setUser({
          email: user.email,
          uid: user.uid,
          username: user.displayName,
          session: true,
          profilePicture: user.photoURL
        })
      } else {
        setUser({
          email: null,
          uid: null,
          username: null,
          session: false,
          profilePicture: null
        })
      }
    })
    return () => unsubscribe()
  }, [])

  const currentUser = auth.currentUser
  const storage = getStorage()

  const signUp = async (
    email: string,
    password: string
  ) => {
    await createUserWithEmailAndPassword(auth, email, password)
    if (currentUser) {
      await setDoc(doc(db, "badges", currentUser.uid), {
        chess50Guide: false,
        chess100Guide: false,
        chessFinalQuest: false,
        mahjong50Guide: false,
        mahjong100Guide: false,
        mahjongFinalQuest: false,
        poker50Guide: false,
        poker100Guide: false,
        pokerFinalQuest: false
      })
    }
  }

  const updateUsername = async (username: string) => {
    if (currentUser) {
      await updateProfile(currentUser, { displayName: username }).catch(err =>
        console.log(err)
      )
      setUser({
        email: user.email,
        uid: user.uid,
        username: username,
        session: true,
        profilePicture: user.profilePicture
      })
    }
  }

  const changePassword = async (current: string, password: string) => {
    if (currentUser && user.email) {
      const credential = EmailAuthProvider.credential(user.email, current)
      await reauthenticateWithCredential(currentUser, credential)
      await updatePassword(currentUser, password).catch(err => console.log(err))
    }
  }

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    return await signOut(auth)
  }

  const upload = async (file: File) => {
    if (currentUser) {
      const fileRef = ref(storage, 'profilePicture/' + currentUser.uid + '.jpg')
      const snapshot = await uploadBytes(fileRef, file)
      const URL = await getDownloadURL(fileRef)
      updateProfile(currentUser, { photoURL: URL })
      setUser({
        email: user.email,
        uid: user.uid,
        username: user.username,
        session: true,
        profilePicture: URL
      })
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, signUp, logIn, logOut, updateUsername, changePassword, upload }}
    >
      {children}
    </AuthContext.Provider>
  )
}
