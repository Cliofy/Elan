import React, { useState, useRef } from 'react';
import StyledImage from './styled-image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './button';

export default function Header() {
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };
  const menus = [
    "home",
    "showcase",
    "about",
    "contact",
    "read-more",
  ];

  return (
    <nav className="absolute top-0 z-10 h-16 pt-6 w-full flex justify-between items-center">
      <div className='flex sm:hidden'>
        <a href="/">
          <StyledImage size="h-16 w-22 md:h-[60px] md:w-[140px]" />
        </a>
      </div>
      <div className="hidden sm:flex z-50 sm:absolute sm:top-0 left-0 right-0  w-full justify-center">
        <div className="flex flex-row w-full justify-between items-center px-3 text-sm font-medium">
          <div>
            <a href="/">
              <StyledImage size="h-16 w-22 md:h-[60px] md:w-[140px]" />
            </a>
          </div>
          <div className="flex flex-row">
            {menus.map((menu, index) => {
              return (
                <Link key={index} href={`/${menu}`} className={`relative block p-3 transition hover:text-primary-hover ${pathname === `/${menu}` ? 'text-yellow-500' : 'text-white'}`}>
                  <p className="capitalize font-semibold tracking-tight">
                    {menu.replace("-", " ")}
                  </p>
                </Link>
              )
            })}
          </div>
          <div>
            <Button size={"md"}>
              <Link href="/" className='text-zinc-800 font-semibold'>
                Contact us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <nav className={`inset-0 w-full sm:w-fit sm:hidden ${isMenuVisible && 'bg-white fixed'}`}>
          <ul ref={menuRef} className={`absolute ${isMenuVisible ? '' : 'hidden'} w-full px-10 py-16`} onClick={closeMenu}>

            {menus.map((menu, index) => {
              return (
                <li className={`border-b border-gray-300 py-5 ${isMenuVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <Link className={`flex w-full font-semibold capitalize hover:text-primary-hover ${pathname === `/${menu}` ? 'text-primary' : 'text-zinc-800'}`} href={`${menu}`}>
                    {menu.replace("-", " ")}
                  </Link>
                </li>
              )
            })}
          </ul>
          <button className="pointer-events-auto absolute top-8 right-6" onClick={toggleMenu}>
            <span className="sr-only">Open Menu</span>
            {!isMenuVisible ? (
              <svg width="23" height="23" viewBox="0 0 23 23">
                <path fill="transparent" strokeWidth="2" stroke="hsl(37, 46%, 57%, 1)" strokeLinecap="round" d="M 2 2.5 L 20 2.5"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(37, 46%, 57%, 1)" strokeLinecap="round" d="M 2 9.423 L 20 9.423" opacity="1"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(37, 46%, 57%, 1)" strokeLinecap="round" d="M 2 16.346 L 20 16.346"></path>
              </svg>
            ) : (
              <svg width="23" height="23" viewBox="0 0 23 23">
                <path fill="transparent" strokeWidth="2" stroke="hsl(37, 46%, 57%, 1)" strokeLinecap="round" d="M 3 16.5 L 17 2.5"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(37, 46%, 57%, 1)" strokeLinecap="round" d="M 2 9.423 L 20 9.423" opacity="0"></path>
                <path fill="transparent" strokeWidth="2" stroke="hsl(37, 46%, 57%, 1)" strokeLinecap="round" d="M 3 2.5 L 17 16.346"></path>
              </svg>
            )}
          </button>
        </nav>
      </div>
    </nav>
  );
}

