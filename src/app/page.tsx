import { Routes } from "@/routes/route";
import Image from "next/image";
import { redirect } from "next/navigation";
import dynamic from 'next/dynamic'
import Link from "next/link";
 
export default function Home() {
  redirect(Routes.Signin)

}
