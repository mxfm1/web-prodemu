import React from 'react'
import Image from 'next/image'

type ProductCardProps = {
    image: string,
    title: string,
    description: string
}

const ProductCard = ({image,title,description}:ProductCardProps) => {
  return (
    <div className="bg-gradient-to-tl from-brown to-white h-[392px] w-64 rounded-xl shadow-xl hover:scale-110 duration-300">
        <div className="img-container flex items-center justify-center py-8">
            <Image src={image} width={90} height={90} alt="cinnamon-roll"/>
        </div>
        <div className="text-container">
            <div className="text-3xl">{title}</div>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ProductCard
