"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Registration from "./registration/page";
import Homepage from "./homepage/page";


export default function Home() {
  const liffId = "1661146958-M2X7n4Bx"
  const [profile, setprofile] = useState<any>();
  const [runningInLine, setrunningInLine] = useState<boolean>();
  const [displayName, setdisplayName] = useState<string>('');
  const liffInitial = async () => {
    const liff = (await import('@line/liff')).default
    try {
      await liff.init({ liffId });
      console.log('initially loaded liff');
    } catch (error: any) {
      console.error('liff init error', error.message)
    }
    if (liff.isInClient()) {
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
      <Registration />
    }

  }
  const loginLine = async () => {
    const liff = (await import('@line/liff')).default
    await liff.init({ liffId });
    liff.login({ redirectUri: "https://nextjs-test-git-dev-jiraporn404.vercel.app/about" });
    const profile = await liff.getProfile();
    setdisplayName(profile.displayName);
    console.log('login')
    return <Homepage />
  }
  useEffect(() => { liffInitial() }, [])
  return (
    <main>
      <p className="text-center text-2xl">Welcome U-Work</p>
      {runningInLine ?
        <Homepage />
        :
        <>
          <button className="btn btn-block my-4" onClick={loginLine}>ลงทะเบียนผ่าน Line</button>
          <Link href="/registration" className="btn btn-block my-4">ลงทะเบียน</Link>

        </>}
    </main>
  )
}
