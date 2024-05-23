import React from 'react'
import ProductCard from '../ui/ProductCard'
import { HERO_PRODUCTS } from '@/constants'


export const ProductCards = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-t from-brown to-white pt-20 mb-12'>
        <div className="flex items-center justify-center">
            <h1 className='text-6xl text-brown text-center'>¿Que estás buscando?</h1>
        </div>
        <div className="grid md:grid-cols-2 place-items-center lg:flex mx-auto mt-20 gap-6 items-center justify-center">
          {HERO_PRODUCTS.map((product,key) => (
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              href={product.href}
              key={key}
            />
          ))}
        </div>
    </div>
  )
}

