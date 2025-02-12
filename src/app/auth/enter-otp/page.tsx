import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Routes } from "@/routes/route"

export default function EnterOTP() {
  return (
    <div className="mx-4 md:mx-16 my-4 space-y-6 w-full lg:w-3/5 xl:w-3/6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Enter OTP</h1>
        <p className="text-gray-500">Enter the one-time password sent to your email</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="otp">One-Time Password</Label>
          <Input id="otp" placeholder="000000" required />
        </div>
        <Button className="w-full" type="submit">
          Verify OTP
        </Button>
      </form>
      <div className="text-center text-sm">
        Didn't receive the code?{" "}
        <Button className="p-0 text-sm font-normal text-blue-500 underline" variant="link">
          Resend OTP
        </Button>
      </div>
      <div className="text-center text-sm">
        <Link className="underline" href={Routes.Signin}>
          Back to Sign In
        </Link>
      </div>
    </div>
  )
}

