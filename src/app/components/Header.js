'use client'
import Link from "next/link"
import Image from "next/image"
import logo from "../assets/images/logo.jpg"
import MobileMenu from "./MobileMenu"
import { HiMenuAlt1 } from 'react-icons/hi'
import { useState } from "react"

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <header className={`font-extrabold text-gray-600`}>
      <div className="contain flex items-center justify-between overflow-hidden pt-3">
        <Link href={"/"} className="flex title-font font-medium items-center md:justify-start justify-center text-black">
          <Image alt="logo" className="rounded-full" src={logo} width={40} height={40} />
          <span className="ml-3 text-xl">Suditya Kumar</span>
        </Link>

        <HiMenuAlt1 onClick={() => setOpen(!open)} className="bg-white text-2xl md:hidden cursor-pointer " />

        <MobileMenu  data={[open, setOpen]}/>
        {/* Desktop navigation */}
        <nav className={`hidden font-medium md:ml-auto md:mr-auto flex-wrap items-center text-base justify-center md:flex`}>
          <Link href={"/portfolio"} className="hover:scale-[0.9] transition-all mr-5 hover:text-gray-900">Portfolio</Link>
          <Link href={"/blog"} className="hover:scale-[0.9] transition-all mr-5 hover:text-gray-900">Blog</Link>
          <Link href={"/about"} className="hover:scale-[0.9] transition-all mr-5 hover:text-gray-900">About</Link>
          <Link href={"/contact"} className="hover:scale-[0.9] transition-all mr-5 hover:text-gray-900">Contact</Link>
        </nav>



        <button className='border p-1 px-5 rounded-sm font-medium text-secondary bg-green-400 hover:border-black hover:text-black hover:bg-secondary hidden md:block'>Resume</button>
      </div>
    </header>
  );
}

export default Header


