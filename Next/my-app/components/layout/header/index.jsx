"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Header = () => {
    const pathname = usePathname()
    console.log(pathname);
    
  return (
    <header>
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link href={"/"} className={`${pathname === "/" ? "text-blue-500 bg-blue-200" : ""} flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}>
            Home</Link>
        </li>
        <li>
          <Link href={"/about"} className={`${pathname === "/about" ? "text-blue-500 bg-blue-200" : ""} flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >About</Link>
        </li>
        <li>
          <Link href={"/products"} className={`${pathname === "/products" ? "text-blue-500 bg-blue-200" : ""} flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >Products</Link>
        </li>
        <li>
          <Link href={"/blogs"} className={`${pathname === "/blogs" ? "text-blue-500 bg-blue-200" : ""} flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >Blogs</Link>
        </li>
      </ul>
    </nav>
  </header>
  )
}

export default Header