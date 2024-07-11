"use client"

import { useEffect, useState } from "react"

import { MobileMenu } from "../MobileMenu"

import { navLinks } from "../../constants/navLinks"
import { socialLinks } from "../../constants/socialLinks"

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
    <>
      <header
        className={
          effectScroll
            ? "z-50 fixed h-20 w-full flex flex-col items-center justify-center transition-colors duration-300 backdrop-blur-md bg-opacity-15 text-amber-900 shadow-lg"
            : "z-50 fixed h-20 w-full flex flex-col items-center justify-center transition-colors duration-300 bg-transparent text-amber-900"
        }>
        {/* <div className="bg-sr-2 w-full">
          <nav className="max-w-6xl m-auto flex items-center justify-between px-4 py-1 font-robotoSlab">
            <div></div>
            <p className="">Oque está esperando, irei esinar tudo que eu sei presencialmente!</p>
            <ul className="flex items-center justify-end gap-3">
              {socialLinks.map((link) => (
                <li key={link.id} className="list-none">
                  <link.icon />
                </li>
              ))}
            </ul>
          </nav>
        </div> */}
        <div className="w-full max-w-6xl px-4 flex justify-between gap-2">
          <a href={"#"}>
            <span className="text-amber-900 font-bold uppercase shadow-custom hover:text-white">Evelyn Make</span>
          </a>
          <nav className="hidden max-w-6xl lg:flex lg:flex-1 lg:items-center lg:justify-center gap-8">
            <ul className="flex items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.id} className="font-robotoSlab font-bold tracking-wide duration-300 uppercase hover:text-white">
                  <a href={link.url}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="hidden lg:flex">
            <ul className="flex items-center justify-center gap-2">
              {socialLinks.map((link) => (
                <li key={link.id} className="duration-300 rounded-full border border-pr-1 bg-pr-1 p-1 hover:opacity-70 hover:border-pr-2">
                  <a href={link.url} target="_blank">
                    {link.icon && <link.icon size={20} />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </>
  )
}
