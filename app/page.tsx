"use client"

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const liffId = "1661146958-M2X7n4Bx"

  const liffInitial = async () => {
    const liff = (await import('@line/liff')).default
    try {
      await liff.init({ liffId });
      console.log('initially loaded liff');
    } catch (error: any) {
      console.error('liff init error', error.message)
    }
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      console.log('already logged in')
    }
  }
  useEffect(() => { liffInitial() })
  return (
    <main>
      <h1>Home Page 2</h1>
      <p>
        <Link href="/users">
          Users
        </Link>
      </p>
    </main>
  )
}
