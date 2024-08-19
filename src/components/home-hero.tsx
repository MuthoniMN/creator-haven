import React from "react";
import StaticNavbar from "./static-nav";
import { cn } from "../lib/utils";

export default function HomeHero () {
  return (
    <section className={cn(`flex flex-col justify-between h-[100vh] bg-gradient-to-r from-[#97b8d9] to-[#675c91]`)}>
      <StaticNavbar />
      <section className={cn("w-full h-full flex items-center justify-center")}>
      </section>
    </section>
  )
}
