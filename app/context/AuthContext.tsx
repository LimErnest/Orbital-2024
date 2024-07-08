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
  reauthenticateWithCredential,
  getAuth
} from 'firebase/auth'
import { auth, db } from '../../firebase/firebase'
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  collection,
  query,
  orderBy,
  limit,
  getDocs
} from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

interface UserType {
  email: string | null
  uid: string | null
  username: string | null
  session: true | false | null
  profilePicture: string | null
  xp: number | null
}

interface UserXP {
  xp: number
  username: string
}

type Rating = '400' | '500' | '600' | '700' | '800' | '900' | '1000' | '1100'

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
        updateDoc(docRef, {
          username: user.displayName
        })

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
        latestDate: new Date().toLocaleDateString(),
        threePuzzleCorrect: false
      })
      const xpDoc = setDoc(doc(db, 'xp', user.uid), {
        xp: 0,
        username: ""
      })
      const chessGuideDoc = setDoc(doc(db, 'chessguide', user.uid), {
        lastChapter: 1
      })
      const finalQuestDoc = setDoc(doc(db, 'finalQuest', user.uid), {
        finalQuestPuzzleID: 1,
        isCompleted: false
      })
      await Promise.all([badgesDoc, ratingDoc, xpDoc, chessGuideDoc, finalQuestDoc])
    }
  }

  const updateUsername = async (username: string) => {

    if (currentUser) {
      await updateProfile(currentUser, { displayName: username }).catch(err =>
        console.log(err)
      )
      const docRef = doc(db, 'xp', currentUser.uid)
      updateDoc(docRef, {
        username: username
      })
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
      await updateDoc(docRef, { xp: newXP })
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
      await updateDoc(docRef, { [updatedBadge]: true })
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

  const updateAttempt = async (newAttempt: number) => {
    if (currentUser) {
      const docRef = doc(db, 'rating', currentUser.uid)
      await updateDoc(docRef, { attempts: newAttempt })
    }
  }

  const updateUserTries = async (date: string) => {
    if (currentUser) {
      const docRef = doc(db, 'rating', currentUser.uid)
      await updateDoc(docRef, { attempts: 3, threePuzzleCorrect: false, latestDate: date })
    }
  }

  const updatePuzzle = async (newPuzzleID: number) => {
    if (currentUser) {
      const docRef = doc(db, 'rating', currentUser.uid)
      await updateDoc(docRef, { puzzleID: newPuzzleID })
    }
  }

  const updateRating = async (newRating: Rating) => {
    if (currentUser) {
      const docRef = doc(db, 'rating', currentUser.uid)
      await updateDoc(docRef, { chessRating: newRating })
    }
  }

  const updateCorrectCount = async (newCorrectCount: number, completedThreePuzzle: boolean) => {
    if (currentUser) {
      const docRef = doc(db, 'rating', currentUser.uid)
      await updateDoc(docRef, { noOfCorrect: newCorrectCount, threePuzzleCorrect: completedThreePuzzle })
    }
  }

  const fetchUserRating = async () => {
    if (currentUser) {
      const docRef = doc(db, 'rating', currentUser.uid)
      const docSnap = await getDoc(docRef)
      const data = docSnap.data()

      if (data) {
        return {
          chessRating: data.chessRating,
          attempts: data.attempts,
          puzzleID: data.puzzleID,
          noOfCorrect: data.noOfCorrect,
          latestDate: data.latestDate,
          threePuzzleCorrect: data.threePuzzleCorrect
        }
      } else {
        console.log('No such document!')
        return {
          chessRating: '400',
          attempts: 0,
          puzzleID: 1,
          noOfCorrect: 0,
          lastestDate: new Date().toLocaleDateString(),
          threePuzzleCorrect: false
        }
      }
    }
  }

  const updateFinalPuzzle = async (newPuzzleID: number) => {
    if (currentUser) {
      const docRef = doc(db, 'finalQuest', currentUser.uid)
      await updateDoc(docRef, { finalQuestPuzzleID: newPuzzleID })
    }
  }

  const updateFinalQuestStatus = async () => {
    if (currentUser) {
      const docRef = doc(db, 'finalQuest', currentUser.uid)
      await updateDoc(docRef, { isCompleted: true })
    }
  }

  const fetchFinalQuest = async (uid: string) => {
    const docRef = doc(db, 'finalQuest', uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {

      const data = docSnap.data();
      console.log('exists', data)
      return {
        finalQuestPuzzleID: data.finalQuestPuzzleID,
        isCompleted: data.isCompleted
      }
    } else {
      console.log("No such document!")
      return {
        finalQuestPuzzleID: 1,
        isCompleted: false
      }
    }

  }

  const queryCollection = async () => {
    const xpRef = collection(db, 'xp')
    const q = await query(xpRef, orderBy("xp", "desc"), limit(20));
    const users = await getDocs(q)
    const arrayOfUsers: UserXP[] = []
    users.forEach(user => {
      const player = user.data()
      arrayOfUsers.push({ xp: player.xp, username: player.username })
      console.log(player.xp, player.username)
    })
    return arrayOfUsers
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
        checkGuide,
        updateAttempt,
        updateUserTries,
        updatePuzzle,
        updateRating,
        updateCorrectCount,
        fetchUserRating,
        updateFinalPuzzle,
        updateFinalQuestStatus,
        fetchFinalQuest,
        queryCollection
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
