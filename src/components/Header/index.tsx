"use client"

import { useEffect, useState } from "react"
import { navLinks } from "../../constants/navLinks"

// import { navLinks, socialLinks } from "@/constants";
// import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [effectScroll, setEffectScroll] = useState<boolean>(false)

  const scrollHeader = () => {
    if (window.scrollY >= 20) {
      setEffectScroll(true)
    } else {
      setEffectScroll(false)
    }
  }

  useEffect(() => {
    return window.addEventListener('scroll', scrollHeader)
  }, [])

  return (
    <header
      className={
        effectScroll
          ? "z-50 fixed h-20 w-full flex items-center justify-between lg:justify-center transition-colors duration-500 backdrop-blur-sm bg-opacity-15 bg-pink-300 shadow-sm shadow-pink-200"
          : "z-50 fixed h-20 w-full flex items-center justify-between lg:justify-center transition-colors duration-500 bg-transparent text-white"
      }>
      <a href={"/"}>
        <span className="text-sm text-black font-semibold uppercase">Evelyn Make</span>
      </a>
      <nav className="hidden max-w-6xl lg:flex lg:flex-1 lg:items-center lg:justify-center gap-8">
        <ul className="flex items-center gap-4">
          {navLinks.map((link, index) => (
            <li key={index} className="duration-200 hover:text-pink-500 uppercase">
              <a href={link.url}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {/* <Link href={"/contact"} className="flex items-center gap-2 text-xl text-slate-50 hover:text-slate-300 font-semibold bg-amber-600 hover:bg-amber-700 border border-amber-600 hover:border-amber-700 rounded-sm py-1 px-2">
                    Fale conosco
                </Link> */}
      </nav>
      <nav className="hidden lg:flex">
        <ul className="flex items-center justify-center gap-2">
          {/* {socialLinks.map((link) => (
            <li key={link.id} className="duration-200 hover:text-amber-600">
              <a href={link.url} target="_blank">
                {link.icon && <link.icon />}
              </a>
            </li>
          ))} */}
        </ul>
      </nav>
      {/* <MobileMenu /> */}
    </header>
  )
}
