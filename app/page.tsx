"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Registration from "./registration/page";


export default function Home() {
  const liffId = "1661146958-M2X7n4Bx"
  const [profile, setprofile] = useState<any>();
  const [runningInLine, setrunningInLine] = useState<boolean>();


  const liffInitial = async () => {
    const liff = (await import('@line/liff')).default
    try {
      await liff.init({ liffId });
      console.log('initially loaded liff');
    } catch (error: any) {
      console.error('liff init error', error.message)
    }
    if (/*liff.isInClient()*/liff.getOS() === "ios" || liff.getOS() === "android") {
      setrunningInLine(true);
      if (!liff.isLoggedIn()) {
        liff.login();
      } else {
        const profile = await liff.getProfile();
        setprofile(profile);
        console.log('already logged in')
      }
    } else {
      setrunningInLine(false);
    }

  }
  useEffect(() => { liffInitial() }, [])
  return (
    <main>
      {runningInLine ?
        <div>
          <h1>Home Page</h1>
          <h1>{profile?.displayName}</h1>
          <p>
            <Link href="/users">
              Users
            </Link>
          </p>
        </div>

        : <Registration />}
    </main>
  )
}
