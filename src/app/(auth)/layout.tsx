import React from "react";
import { cn } from "../../lib/utils";

export default function AuthLayout({ children } : { children: React.ReactNode }) {
  return (
    <main className={cn("bg-background h-full w-full flex justify-center items-center")}>
        {children}
    </main>
  )
}
