"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import React, { useState } from 'react'

export default function Header() {
    
    const [active, setActive] = useState('Home')
    console.log(active);

    const pathname = usePathname();

    console.log(pathname);

  return (
      <>
        <header className="w-3/5 h-fit py-3 px-8 bg-white/70 fixed z-30 top-8 backdrop-blur-sm rounded-full shadow-2xl mx-auto">
          <nav>
            <ul className="flex justify-around">
              {navs.map(
                  (navItem, idx) => (
                      <Link key={idx}
                          href={`${navItem.url}`} scroll={true}>
                        <li 
                            onClick= {()=> setActive(navItem.title)}
                            className={`${active === navItem.title? 'bg-white shadow-lx text-black' : ' ' } py-2 px-6 rounded-full text-lg text-gray-600 hover:bg-white hover:text-black hover:shadow-lx duration:300 cursor-pointer`}>
                        {navItem.title}
                            </li>
                          </Link>
                  ))}
            </ul>
          </nav>
        </header>
      </>
  )
}

const navs = [
    {url: '/#home', title:'Home'},
    {url: '/#about', title:'About'},
    {url: '/#experience', title:'Experiences'},
    {url: '/#projects', title:'Projects'},
    {url: '/#socials', title:'Socials'},
    {url: '/#contact', title:'Contact'},
  ];