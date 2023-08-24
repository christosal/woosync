import { UserButton } from "@clerk/nextjs/app-beta"

export default function OnBoardingPage() {
    return (
        
            
        
      <main className="flex min-h-screen flex-col items-center justify-between p-16">
        
          <h1>OnBoarding</h1>
          <UserButton afterSignOutUrl="/"/>
      </main>
    )
  }
  