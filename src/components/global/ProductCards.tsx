import React from 'react'
import ProductCard from '../ui/ProductCard'

export const ProductCards = () => {
  return (
    <div className='h-screen w-screen bg-gradient-to-t from-brown to-white pt-20'>
        <div className="flex items-center justify-center">
            <h1 className='text-5xl text-brown'>¿Que estás buscando?</h1>
        </div>
        <div className="mx-20 mt-20">
            <ProductCard image="/products/cinnamon-roll.jpeg" title='Cinnamon Rolls' description='Ricos rollos de canela con azucar glass'/>
        </div>
    </div>
  )
}

