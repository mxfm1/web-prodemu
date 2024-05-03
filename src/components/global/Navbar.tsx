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
      <nav className="flex items-center justify-between px-6 lg:px-20 xl:px-24 relative z-100 py-5 shadow-md bg-primary">
        <Link href="/">
          <Image src="/welding-logo-new.png" alt="logo" width={74} height={29} />
        </Link>

        <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="uppercase hover:border-b text-md regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all">
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
              variant='btn_dark_green'/>
          </Link>
        </div>
        <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ?
          <Image src="/close.svg"
            alt='menu'
            width={32}
            height={32}
            className='inline-block cursor-pointer lg:hidden'/>
          :
          <Image src="/menu.svg"
            alt='menu'
            width={36}
            height={36}
            className='inline-block cursor-pointer lg:hidden'
            style={{ filter: 'invert(1)'}}
            />}
        </button>
      </nav>
      {/* La logica del contenedor del navbar esta aplicada asi para aplicar el delay lateral */}
      <div className={`${isOpen ? '' : 'transform -translate-x-full'} absolute top-0 left-0 h-full pb-20 bg-zinc-400 ease-in-out transition-transform duration-500 delay-75 w-10/12 sm:w-[400px] lg:hidden z-[10] overflow-y-auto transform right-shadow`}>
        <MobileNavbar Header1='Ofertas de Trabajo' Header2='Empresas' Header3='Mi cuenta'/>
      </div>
    </>
  )
}

export default Navbar