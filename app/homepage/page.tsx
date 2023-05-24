"use client"
import Link from "next/link"
import { useEffect, useState } from "react";

type Props = {

}

export default function Homepage() {
    const liffId = "1661146958-M2X7n4Bx"
    const [profile, setprofile] = useState<any>();

    const liffInitial = async () => {
        const liff = (await import('@line/liff')).default
        try {
            await liff.init({ liffId });
            console.log('initially loaded liff');
        } catch (error: any) {
            console.error('liff init error', error.message)
        }
        if (liff.isLoggedIn()) {
            setprofile(await liff.getProfile());
        } else {
            liff.login({ redirectUri: "https://nextjs-test-git-dev-jiraporn404.vercel.app/homepage" });
        }

    }
    useEffect(() => {
        liffInitial();
    }, []);
    return (
        <>
            <p className="text-center text-2xl">Hello!!!</p>
            <p>{profile?.displayName}</p>
            <Link href="/users">
                Users
            </Link>
        </>

    )
}