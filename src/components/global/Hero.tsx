import React from 'react'
import Image from 'next/image'
import Button from '../ui/button'

type Props = {}

function Hero({}: Props) {
  return (
    // <div className="max-w-[84rem] w-full mx-auto relative">
    //     <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 pb-40 mt-20 mx-20">
    //         <div className="flex flex-col items-start xl:px-0 px-8">
    //             <h1 className='text-3xl md:text-7xl font-bold mb-6 relative text-left dark:text-zinc-700 max-w-4xl'>
    //                 Make your website looks
    //                 <br/>
    //                 De tus sueños
    //             </h1>
    //         </div>
    //         <div className="hidden xl:block w-full h-full relative">
              
    //         </div>
    //     </div>
    // </div>
    // IMAGE CONTAINER
    // text CONTAIONER
    <div className='h-full flex flex-col lg:flex-row pb-12 padding-hero-section mt-20 items-center'>
      <div className="h-1/2 lg:h-full lg:w-1/2 relative mb-12">
        <Image src="/bonnet-hero.jpeg" alt='HeroImage' width={390} height={492} className='object-contain hero-img'/>
      </div>
      {/* TEXT CONTAINER */}
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className='text-4xl md:text-6xl font-bold text-brown'>Nosotros creamos amor</h1>
        {/* Description */}
        <p className="md:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nisi unde rerum alias quisquam delectus voluptate soluta beatae nam iste.
        </p>
        <div className="flex gap-4">
          <Button type="button" title="Conócenos" variant="btn_about_us"/>
          <Button type='button' title='Realizar un pedido' variant='btn_contact_us'/>
        </div>
      </div>
    </div>
  )
}

export default Hero