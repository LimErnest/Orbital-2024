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
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

interface UserType {
  email: string | null
  uid: string | null
  username: string | null
  session: true | false | null
  profilePicture: string | null
  xp: number | null
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
    profilePicture: null,
    xp: null
  })
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        const docRef = doc(db, 'xp', user.uid)
        const docSnap = await getDoc(docRef)
        const data = docSnap.data()
        setUser({
          email: user.email,
          uid: user.uid,
          username: user.displayName,
          session: true,
          profilePicture: user.photoURL,
          xp: data?.xp
        })
      } else {
        setUser({
          email: null,
          uid: null,
          username: null,
          session: false,
          profilePicture: null,
          xp: null
        })
      }
    })
    return () => unsubscribe()
  }, [])

  const currentUser = auth.currentUser
  const storage = getStorage()

  const signUp = async (email: string, password: string) => {
    const userCreden = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )
    const user = userCreden.user
    if (user) {
      const badgesDoc = setDoc(doc(db, 'badges', user.uid), {
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
      const ratingDoc = setDoc(doc(db, 'rating', user.uid), {
        chessRating: '400',
        attempts: 3,
        puzzleID: 1,
        noOfCorrect: 0,
        latestDate: new Date().toLocaleDateString()
      })
      const xpDoc = setDoc(doc(db, 'xp', user.uid), {
        xp: 0
      })
      const chessGuideDoc = setDoc(doc(db, 'chessguide', user.uid), {
        lastChapter: 1
      })
      await Promise.all([badgesDoc, ratingDoc, xpDoc, chessGuideDoc])
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
        profilePicture: user.profilePicture,
        xp: user.xp
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
        profilePicture: URL,
        xp: user.xp
      })
    }
  }

  const addXp = async (xp: number) => {
    if (currentUser) {
      const docRef = doc(db, 'xp', currentUser.uid)
      const docSnap = await getDoc(docRef)
      const data = docSnap.data()
      const newXP = data?.xp + xp
      await setDoc(docRef, { xp: newXP })
      setUser({
        email: user.email,
        uid: user.uid,
        username: user.username,
        session: true,
        profilePicture: user.profilePicture,
        xp: newXP
      })
    }
  }

  const updateChessChapter = async (chapter: number) => {
    if (currentUser) {
      const docRef = doc(db, 'chessguide', currentUser.uid)
      const docSnap = await getDoc(docRef)
      const data = docSnap.data()
      if (data) {
        if (data.lastChapter > chapter) {
          return data.lastChapter
        } else {
          await setDoc(docRef, { lastChapter: chapter })
          return chapter
        }
      } else {
        await setDoc(docRef, { lastChapter: chapter })
      }
    }
  }

  const updateBadge = async (updatedBadge: string) => {
    if (currentUser) {
      const docRef = doc(db, 'badges', currentUser.uid)
      await updateDoc(docRef, {
        [updatedBadge]: true
      })
    }
  }

  const checkGuide = async () => {
    if (currentUser) {
      const docRef = doc(db, 'badges', currentUser.uid)
      const docSnap = await getDoc(docRef)
      const data = docSnap.data()
      if (data) {
        return data.chess100Guide
      }
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        logIn,
        logOut,
        updateUsername,
        changePassword,
        upload,
        addXp,
        updateChessChapter,
        updateBadge,
        checkGuide
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
