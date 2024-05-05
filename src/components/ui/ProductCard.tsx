import React from 'react'
import Image from 'next/image'
import Button from './button'
import Link from 'next/link'

type ProductCardProps = {
    image: string,
    title: string,
    description: string,
    className?: string,
    href: string
}

const ProductCard = ({image,title,description,className, href}:ProductCardProps) => {
  return (
    <div className={`${className} bg-gradient-to-tl from-red-900 to-white h-[392px] w-64 rounded-xl shadow-xl hover:scale-110 duration-300`}>
        <div className="img-container flex items-center justify-center h-1/3 overflow-hidden rounded-t-xl">
            <Image src={image} width={200} height={80} alt="cinnamon-roll" className='h-auto w-full'/>
        </div>
        <div className="text-center h-2/3 mt-6">
            <h1 className="text-4xl text-brown font-roboto">{title}</h1>
            <p className='text-lg mt-2 mx-6 text-white min-h-[130px]'>{description}</p>
            <div className="flex justify-center">
              <Link href={href}>
                <Button type="button" title='Ver más' variant='btn_hero_products' icon=''/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
