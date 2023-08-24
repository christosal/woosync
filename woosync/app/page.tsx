import Image from 'next/image'
import { UserButton } from '@clerk/nextjs/app-beta/client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <UserButton afterSignOutUrl="/sign-in"/>
        <h1> Home</h1>
      </div>
    </main>
  )
}