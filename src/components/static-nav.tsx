"use client"
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

import { cn } from "../lib/utils";

export default function StaticNavbar() {
  return (
    <header className={cn("flex justify-between items-center mt-4 px-2")}>
      <nav className={cn("flex gap-2 p-2 rounded-md border-[1px] border-white/60 ")}>
        <ul className={cn("flex gap-2 text-white")}>
          <li className={cn("hover:font-bold transition-all")}>
            <Link href="">How It works</Link>
          </li>
          <li className={cn("hover:font-bold transition-all")}>
            <Link href="">Pricing</Link>
          </li>
          <li className={cn("hover:font-bold transition-all")}>
            <Link href="">About</Link>
          </li>
        </ul>
      </nav>
      <h1 className={cn("text-xl font-bold text-white hover:underline")}>
        <Link href="/">CreatorHaven</Link>
      </h1>
      <div className={cn("flex gap-4")} >
        <Button variant="outline">Login</Button>
        <Button variant="white">Join the Community</Button>
      </div>
    </header>
  )
}
