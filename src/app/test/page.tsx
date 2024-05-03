'use client';

import React from 'react'
import { motion } from 'framer-motion';

const Test = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      <motion.div className='bg-red-400 w-48 h-48'
        initial={{ x:-100}}
        animate={{ x:150, y:-100, opacity:0.3,}}
        transition={{delay:1,duration:2}}
        >
            SOMETHINGS
        </motion.div>
    </div>
  )
}

export default Test