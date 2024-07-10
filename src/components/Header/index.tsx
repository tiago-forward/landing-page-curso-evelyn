"use client"

import { useEffect, useState } from "react"
import { navLinks } from "../../constants/navLinks"
// import { socialLinks } from "../../constants/socialLinks"

// import { navLinks, socialLinks } from "@/constants";
// import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  const [effectScroll, setEffectScroll] = useState<boolean>(false)

  const scrollHeader = () => {
    if (window.scrollY >= 40) {
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
          ? "z-50 fixed h-20 w-full flex flex-col items-center justify-center transition-colors duration-300 backdrop-blur-sm bg-opacity-15 text-amber-900 shadow-sm shadow-pr-1"
          : "z-50 fixed h-20 w-full flex flex-col items-center justify-center transition-colors duration-300 bg-transparent text-amber-900"
      }>
      <div className="bg-sr-2 w-full">
        {/* <nav className="max-w-6xl m-auto flex items-center justify-between px-4 py-1 font-robotoSlab">
          <div></div>
          <p className="">Oque está esperando, irei esinar tudo que eu sei presencialmente!</p>
          <ul className="flex items-center justify-end gap-3">
            {socialLinks.map((link) => (
              <li key={link.id} className="list-none">
                <link.icon />
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
      <div className="w-full max-w-6xl px-4 flex justify-between gap-2">
        <a href={"/"}>
          <span className="text-amber-900 font-bold uppercase shadow-custom hover:text-white">Evelyn Make</span>
        </a>
        <nav className="hidden max-w-6xl lg:flex lg:flex-1 lg:items-center lg:justify-center gap-8">
          <ul className="flex items-center gap-4">
            {navLinks.map((link, index) => (
              <li key={index} className="font-robotoSlab font-bold tracking-wide duration-200 uppercase hover:text-white">
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
      </div>
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
