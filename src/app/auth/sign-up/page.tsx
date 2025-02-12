import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Routes } from "@/routes/route"

export default function SignUp() {
  return (
    <div className="mx-4 md:mx-16 my-4 space-y-6 w-full lg:w-3/5 xl:w-3/6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Sign Up</h1>
        <p className="text-gray-500">Create an account to get started</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="John Doe" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Sign Up
        </Button>
      </form>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link className="underline" href={Routes.Signin}>
          Sign in
        </Link>
      </div>
    </div>
  )
}

