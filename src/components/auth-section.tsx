import React from "react";
import { cn } from "../lib/utils";

export default function AuthSection (props: { children?: React.ReactNode, quote: string }) {
  const { children, quote } = props;
  return (
   <section className={cn("h-3/4 w-4/5")}>
      <section className={cn("")}>
          {children}
      </section>
      <section className={cn("")}>
        <p className={cn("text-xl text-bold text-white")}>
          {quote}
        </p>
      </section>
   </section>
  )
}
