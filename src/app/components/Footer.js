"use client"
import { useState } from 'react'


const Footer = () => {
  const [show, setShow] = useState(true);
  setTimeout(()=>{
    setShow(false)
  }, 800)
  return (
    <div className={`h-screen w-screen fixed top-0 left-0 right-0 bottom-0 bg-orange-300 flex text-2xl items-center justify-center font-bold text-bolder ${show ? "flex" : "hidden"}`}>Created with ❤️ by Suditya Shrivastav</div>
  )
}

export default Footer