'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderNavLink {
  name: string,
  href: string
}

export default function HeaderNav() {
  const headerNavLinks: Array<HeaderNavLink> = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: '/about-me'
    },
    {
      name: 'Portfolio',
      href: '/portfolio'
    },
    {
      name: 'Contact',
      href: '/contact-me'
    }
  ];
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const openMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav className='sticky z-[1000] top-0 right-0 left-0 min-h-full bg-emerald-700'>
      <div className={`md:hidden ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[calc(100%+4rem)] opacity-0'} absolute z-inherit text-center top-16 w-full bg-emerald-800 transition-all duration-300 ease-in-out`} id='mobile-menu'>
        {headerNavLinks.map((element) => {
          return (
            <Link
              key={element.name}
              href={element.href}
              className={`block px-3 py-3 text-base font-medium ${pathname === element.href ? 'bg-emerald-900 text-white' : 'text-gray-300 transition duration-100 ease-in-out hover:bg-emerald-600 hover:text-white'}`}
              onClick={openMobileMenu}
            >
              {element.name}
            </Link>
          )
        })}
      </div>
      <div className='sticky z-inherit mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-emerald-700'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='shrink-0'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 1000 1000'
                className='size-8 fill-white'
              >
                <path
                  id='logo'
                  d='M 0.00,0.00 C 0.00,0.00 192.00,0.00 192.00,0.00 192.00,0.00 192.00,64.00 192.00,64.00 192.00,64.00 256.00,64.00 256.00,64.00 256.00,64.00 256.00,0.00 256.00,0.00 256.00,0.00 448.00,0.00 448.00,0.00 448.00,0.00 448.00,64.00 448.00,64.00 448.00,64.00 256.00,64.00 256.00,64.00 256.00,64.00 256.00,936.00 256.00,936.00 256.00,936.00 448.00,936.00 448.00,936.00 448.00,936.00 448.00,1000.00 448.00,1000.00 448.00,1000.00 256.00,1000.00 256.00,1000.00 256.00,1000.00 256.00,936.00 256.00,936.00 256.00,936.00 192.00,936.00 192.00,936.00 192.00,936.00 192.00,1000.00 192.00,1000.00 192.00,1000.00 0.00,1000.00 0.00,1000.00 0.00,1000.00 0.00,936.00 0.00,936.00 0.00,936.00 192.00,936.00 192.00,936.00 192.00,936.00 192.00,64.00 192.00,64.00 192.00,64.00 0.00,64.00 0.00,64.00 0.00,64.00 0.00,0.00 0.00,0.00 Z M 1000.00,0.00 C 1000.00,0.00 1000.00,96.00 1000.00,96.00 1000.00,96.00 544.00,500.00 544.00,500.00 544.00,500.00 1000.00,904.00 1000.00,904.00 1000.00,904.00 1000.00,1000.00 1000.00,1000.00 1000.00,1000.00 448.00,500.00 448.00,500.00 448.00,500.00 1000.00,0.00 1000.00,0.00 Z' />
              </svg>
            </div>
          </div>
          <div className='hidden md:block h-full'>
            <div className='ml-10 flex h-full items-center'>
              {headerNavLinks.map((element) => {
                return (
                  <Link
                    key={element.name}
                    href={element.href}
                    className={`${pathname === element.href ? 'bg-emerald-900 text-white border-dotted border-y-4 border-transparent border-b-emerald-600 hover:border-solid' : 'text-gray-300 hover:bg-emerald-600 hover:text-white'} transition duration-100 ease-in-out h-full content-center px-4 text-sm font-medium`}
                  >
                    {element.name}
                  </Link>
                )
              })}
            </div>
          </div>
          <div className='-mr-2 flex md:hidden'>
            <button type='button' className='relative inline-flex items-center justify-center rounded-md bg-emerald-900 p-2 text-white transition duration-100 ease-in-out hover:bg-emerald-500 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden' aria-controls='mobile-menu' aria-expanded='false' onClick={openMobileMenu}>
              <span className='absolute -inset-0.5'></span>
              <span className='sr-only'>Open main menu</span>
              <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} size-6`} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true' data-slot='icon'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
              </svg>
              <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} size-6`} fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' aria-hidden='true' data-slot='icon'>
                <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}