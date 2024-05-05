'use client';

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';

const Test = () => {
  return (
      // <div className="grid grid-cols-1 mx-20 mt-20">
      //   <div className="inner-container flex bg-red-200 rounded-xl shadow-2xl gap-8 min-h-[300]">
      //       <Image
      //         className='w-[200px] md:w-[300px] h-auto rounded-t-xl rounded-b-xl'
      //         src="/products/cinnamon-roll.jpeg"
      //         alt='sx'
      //         width={400}
      //         height={266}
      //       />
      //   <div className='bg-gray-400 w-full flex flex-col items-center '>
      //     <h1 className='text-4xl'>Title Placeholder</h1>
      //     <p className='text-center mx-36 justify-center'>8 Rolls rellenos de queso mozzarella y nuestra exquisita masa fresca. Elígelos rellenos con Pepperoni o Jamón.</p>
      //   </div>
      //   </div>
      // </div>
    //   <div className="bg-white rounded-lg overflow-hidden shadow-xl w-4/5 mx-auto h-[300px] min-w-[452px]">
    //   <div className="flex">
    //     <div className="w-2/3 bg-red-200">
    //       <Image src="/products/pink-cake-wide.jpeg" alt="Imagen"
    //       className="object-cover h-full w-[300px] sm:w-[350px] md:w-[400px]"
    //         width={300} height={420} />
    //     </div>
    //     <div className="w-1/3">
    //       <h2 className="text-center font-bold text-xl mb-2">Título</h2>
    //       <p className="text-center">Descripción de la tarjeta</p>
    //     </div>
    //   </div>
    // </div>

    <div className="h-screen bg-blue-400 flex justify-center items-center">
      <motion.div className='bg-red-200'
        transition={{duration:2}}
        animate={{
          scale:[1,1.5,2],
          rotate:[0,45,90]

        }}
      >
          <Image src="/icons/building.svg" alt='logo' width={40} height={40}/>
        </motion.div>
    </div>

  )
}

export default Test


 {/* <motion.div className='bg-red-400 w-48 h-48'
        initial={{ x:-100}}
        animate={{ x:150, y:-100, opacity:0.3,}}
        transition={{delay:1,duration:2}}
        >
            SOMETHINGS
        </motion.div> */}
        {/* <div className='h-[350px] w-[400px] border rounded-xl shadow'>
          <div className="img-container w-1/2">
            <Image alt="prod-img" src="/products/cinnamon-roll.jpeg" fill
            style={{maxWidth: '20%'}}/>
          </div>
          <div className="text-container"></div>
        </div> */}