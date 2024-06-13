'use client'

import { db } from '../../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'

import React, { useEffect, useState } from 'react'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { useAuth } from '../../app/context/AuthContext'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



async function fetchUserBadge(uid: string) {
    const docRef = doc(db, "badges", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        // Convert the badge data to an object with boolean values
        return {
            chess50Guide: data.chess50Guide, // Convert to boolean
            chess100Guide: data.chess100Guide, // Convert to boolean
            chessFinalQuest: data.chessFinalQuest, // Convert to boolean
            mahjong50Guide: data.mahjong50Guide,
            mahjong100Guide: data.mahjong100Guide,
            mahjongFinalQuest: data.mahjongFinalQuest,
            poker50Guide: data.poker50Guide,
            poker100Guide: data.mahjong100Guide,
            pokerFinalQuest: data.pokerFinalQuest,
        };
    } else {
        console.log("No such document!");
        return {
            chess50Guide: false,
            chess100Guide: false,
            chessFinalQuest: false,
            mahjong50Guide: false,
            mahjong100Guide: false,
            mahjongFinalQuest: false,
            poker50Guide: false,
            poker100Guide: false,
            pokerFinalQuest: false
        };
    }
}

export function Badges() {
    const { user } = useAuth();
    const [badges, setBadges] = useState({
        chess50Guide: false,
        chess100Guide: false,
        chessFinalQuest: false,
        mahjong50Guide: false,
        mahjong100Guide: false,
        mahjongFinalQuest: false,
        poker50Guide: false,
        poker100Guide: false,
        pokerFinalQuest: false
    });


    if (user) {
        console.log("User:", user);
        fetchUserBadge(user.uid)
            .then(data => {
                console.log("Fetched badge data:", data);
                setBadges(data);
            })
            .catch(error => console.error("Error fetching user badge:", error));
    }


    return (
        <div className='h-full w-full flex flex-col'>

            <div className='flex flex row p-4 gap-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>Chess 50%</CardTitle>
                        <CardDescription>Complete 50% of Chess Guide</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.chess50Guide ? (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/knightbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/noknightbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Chess 100%</CardTitle>
                        <CardDescription>Complete 100% of Chess Guide</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.chess100Guide ? (
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="/img/rookbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/norookbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Chess Final Quest</CardTitle>
                        <CardDescription>Complete Chess Final Quest</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.chessFinalQuest ? (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/queenbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/noqueenbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>
            </div>

            <div className='flex flex row gap-4 p-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>Mahjong 50%</CardTitle>
                        <CardDescription>Complete 50% of Mahjong Guide</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.mahjong50Guide ? (
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="/img/baibanbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/nobaibanbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Mahjong 100%</CardTitle>
                        <CardDescription>Complete 100% of Mahjong Guide</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.mahjong100Guide ? (
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="/img/zhongbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/nozhongbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Mahjong Final Quest</CardTitle>
                        <CardDescription>Complete Mahjong Final Quest</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.mahjongFinalQuest ? (
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="/img/fabadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/nofabadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>
            </div>


            <div className='flex flex row gap-4 p-4'>
                <Card>
                    <CardHeader>
                        <CardTitle>Poker 50%</CardTitle>
                        <CardDescription>Complete 50% of Poker Guide</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.poker50Guide ? (
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="/img/queencardbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/noqueencardbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Poker 100%</CardTitle>
                        <CardDescription>Complete 100% of Poker Guide</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.poker100Guide ? (
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="/img/kingbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/nokingbadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Poker Final Quest</CardTitle>
                        <CardDescription>Complete Poker Final Quest</CardDescription>
                    </CardHeader>
                    <CardContent>
                        {badges.pokerFinalQuest ? (
                            <Avatar className='w-24 h-24' >
                                <AvatarImage src="/img/acebadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        ) : (
                            <Avatar className='w-24 h-24'>
                                <AvatarImage src="/img/noacebadge.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
