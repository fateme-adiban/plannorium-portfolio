"use client"
import { useEffect } from "react"
import Landing from "../components/Landing"
import About from "../components/About"

export default function Home() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      const locomotiveScroll = new LocomotiveScroll()
    })()
  }, [])

  return (
    <main>
      <Landing />
      <About />
    </main>
  )
}
