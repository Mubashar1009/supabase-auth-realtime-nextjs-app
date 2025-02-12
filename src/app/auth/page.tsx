import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Routes } from "@/routes/route"

export default function Auth() {
  return (
    <div className="flex  h-screen flex-col items-center justify-center space-y-4 bg-gray-100 w-full">
      <h1 className="text-4xl font-bold">Authentication Pages</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href={Routes.Signin}>Sign In</Link>
        </Button>
        <Button asChild>
          <Link href={Routes.Signup}>Sign Up</Link>
        </Button>
        <Button asChild>
          <Link href={Routes.ForgetPassword}>Forgot Password</Link>
        </Button>
        <Button asChild>
          <Link href={Routes.EnterOTP}>Enter OTP</Link>
        </Button>
      </div>
    </div>
  )
}

