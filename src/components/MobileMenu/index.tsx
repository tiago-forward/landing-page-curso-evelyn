"use cliente"

import { useState } from "react"
import { Menu, X } from "lucide-react"

import { navLinks } from "../../constants/navLinks"
import { socialLinks } from "../../constants/socialLinks"

export const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleNavLinkMenu = () => {
        if (isOpen) {
            setIsOpen(false)
        }
    }

    return (
        <div className="lg:hidden">
            <button onClick={handleToggleMenu} className="hover:text-amber-600">
                <Menu />
            </button>

            {isOpen && (
                <div
                    className="absolute h-screen inset-0 bg-black opacity-50 z-40"
                    onClick={handleToggleMenu}
                ></div>
            )}

            <div className={`z-50 w-9/12 h-screen flex flex-col absolute right-0 top-0 bg-pr-2 transition-all duration-300 ease-in-out transform
                ${isOpen ? "translate-y-0 animate-openMenu" : "-translate-y-full"}`}>

                <header className="w-full flex items-center justify-between h-20 border-b border-sr-2">
                    <a onClick={handleNavLinkMenu} href={"#"}>
                        <span className="pl-2 text-amber-900 font-bold uppercase shadow-custom hover:text-white">Evelin Make</span>
                    </a>

                    <button
                        onClick={handleToggleMenu}
                        className="hover:text-amber-600 px-4"
                    >
                        <X />
                    </button>
                </header>

                <nav className="flex flex-col flex-1 items-end justify-center gap-8 pr-4">
                    <ul className="flex flex-col items-end gap-8">
                        {navLinks.map((link) => (
                            <li key={link.id} className="font-robotoSlab font-bold tracking-wider duration-300 uppercase text-lg hover:text-white">
                                <a href={link.url}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    {/* <Link onClick={handleNavLinkMenu} href={"/contact"} className="flex items-center gap-2 text-md text-slate-50 hover:text-slate-300 font-semibold bg-amber-600 hover:bg-amber-700 border border-amber-600 hover:border-amber-700 rounded-sm py-1 px-2">
                        Fale conosco
                    </Link> */}
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
            </div>
        </div>
    )
}
