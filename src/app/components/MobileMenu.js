"use client"
import Link from 'next/link';
import { useState } from 'react';
import { HiMenuAlt1 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'


const MobileMenu = ({data}) => {
     console.log(data);
     const open = data[0];
     const setOpen = data[1];
    return (
        <div className={`z-50 fixed top-0 left-0 bg-transparent h-screen w-screen bg-slate-500 md:hidden ${open ? "block" : "hidden"}`}>
            {open ? <IoMdClose onClick={() => setOpen(!open)} className="bg-white text-2xl md:hidden right-8 top-7 absolute cursor-pointer z-50 " /> :
            <HiMenuAlt1 onClick={() => setOpen(!open)} className="bg-white text-2xl right-8 top-7 absolute cursor-pointer " />}
            <nav className={`${open ? "flex" : "hidden"} z-10 md:hidden absolute top-0 right-0 w-screen bg-white h-screen text-2xl flex-col items-center  justify-center `} >
                <Link onClick={()=> setOpen(false)} href={"/portfolio"} className='rounded-full  w-3/4 px-5 py-3 text-base border-red-600 border-2 mb-3 font-medium  text-center text-red-600 transition duration-200 hover:text-white active:text-white hover:bg-red-600 active:bg-red-700 active:scale-[0.9] hover:scale-[0.9]'>Portfolio</Link>

                <Link onClick={()=> setOpen(false)} href={"/blog"} className='rounded-full  w-3/4 px-5 py-3 text-base border-yellow-600 border-2 mb-3 font-medium  text-center text-yellow-600 transition duration-200 hover:text-white active:text-white hover:bg-yellow-600 active:bg-yellow-700 active:scale-[0.9] hover:scale-[0.9]'>Blog</Link>

                <Link onClick={()=> setOpen(false)} href={"/about"} className='rounded-full  w-3/4 px-5 py-3 text-base border-green-600 border-2 mb-3 font-medium  text-center text-green-600 transition duration-200 hover:text-white active:text-white hover:bg-green-600 active:bg-green-700 active:scale-[0.9] hover:scale-[0.9]'>About</Link>

                <Link onClick={()=> setOpen(false)} href={"/contact"} className='rounded-full  w-3/4 px-5 py-3 text-base border-blue-600 border-2 mb-3 font-medium  text-center text-blue-600 transition duration-200 hover:text-white active:text-white hover:bg-blue-600 active:bg-blue-700 active:scale-[0.9] hover:scale-[0.9]'>Contact</Link>
            </nav >
        </div>
    )
}

export default MobileMenu
