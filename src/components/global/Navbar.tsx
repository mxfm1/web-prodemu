"use client";

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Button from '../ui/button'
import { useEffect } from 'react'
import MobileNavbar from './MobileNavbar';

type Props = {}

function Navbar({}: Props) {

  const[isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between px-6 lg:px-20 xl:px-24 relative z-100 py-5 shadow-2xl bg-gradient-to-r from-brown to-white">
        <Link href="/">
          <Image src="/bonnet-hero-new.png" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex mr-60">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="hover:border-b font-roboto text-lg regular-16 text-gray-100 flexCenter cursor-pointer pb-1.5 transition-all">
            {link.label}
          </Link>
        ))}
        </ul>
          <div className='hidden lg:flex items-center justify-center'>
          <Link href="/login">
            <Button
              type='button'
              title='Inicia sesion'
              icon="/user.svg"
              variant='btn_login'/>
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ?
          <Image src="/close.svg"
            alt='menu'
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'
            style={{ filter: 'invert(1)'}}
            />
          :
          <Image src="/menu.svg"
            alt='menu'
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden text-brown'
            />}
        </button>
      </nav>
      {/* La logica del contenedor del navbar esta aplicada asi para aplicar el delay lateral */}
      {/* TEXTSIDEBAR clase para el color del texto */}
      <div className={`${isOpen ? '' : 'transform -translate-x-full'} absolute top-0 left-0 h-full pb-20 bg-gradient-to-t from-white to-brown ease-in-out transition-transform duration-500 delay-75 w-10/12 sm:w-[400px] lg:hidden z-[10] overflow-y-auto transform right-shadow text-sidebar`}>
        <MobileNavbar Header1='Servicios' Header2='Productos' Header3='Mi cuenta'/>
      </div>
    </>
  )
}

export default Navbar