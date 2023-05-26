"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import Registration from "./registration/page";
import Homepage from "./homepage/page";


export default function Home() {
  const liffId = "1661222710-neKLQNNZ"
  const [profile, setprofile] = useState<any>();
  const [isInClient, setisInClient] = useState<boolean>();
  const [loading, setloading] = useState(true);

  const liffInitial = async () => {
    const liff = (await import('@line/liff')).default
    try {
      await liff.init({ liffId });
      setloading(false);
      console.log('initially loaded liff');
    } catch (error: any) {
      console.error('liff init error', error.message)
    }
    if (liff.isInClient()) {
      setisInClient(true);
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: "https://nextjs-test-git-dev-jiraporn404.vercel.app/homepage" });
      } else {
        console.log('already logged in');
      }
    } else {
      setisInClient(false);

    }

  }
  const loginLine = async () => {
    const liff = (await import('@line/liff')).default
    await liff.init({ liffId });
    liff.login({ redirectUri: "https://nextjs-test-git-dev-jiraporn404.vercel.app/homepage" });
  }
  useEffect(() => { liffInitial() }, [])
  return (
    <main>
      {
        loading ?
          <div className="flex justify-center h-screen">
            <progress className="progress w-56 m-auto"></progress>
          </div>
          :
          isInClient ?
            <Homepage />
            :
            <>
              <p className="text-center text-2xl font-thin">Welcome U-Work</p>
              <button className="btn btn-block my-4" onClick={loginLine}>ลงทะเบียนผ่าน Line</button>
              <Link href="/registration" className="btn btn-block my-4">ลงทะเบียน</Link>
            </>

      }
    </main>
  )
}
