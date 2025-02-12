import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Routes } from "@/routes/route"

export default function SignIn() {
  return (
    <div className="mx-4 md:mx-16 my-4 space-y-6 w-full lg:w-3/5 xl:w-3/6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign In</h1>
        <p className="text-gray-500">Enter your email and password to sign in</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
      <div className="text-center text-sm">
        <Link className="underline" href={Routes.ForgetPassword}>
          Forgot password?
        </Link>
      </div>
      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link className="underline" href={Routes.Signup}>
          Sign up
        </Link>
      </div>
    </div>
  )
}

