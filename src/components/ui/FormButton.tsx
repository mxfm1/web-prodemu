"use client";

import React from 'react'
import { useFormStatus } from 'react-dom'

const FormButton = () => {
    const{pending} = useFormStatus();
  return (
    <button className='bg-blue-500 rounded px-4 py-2 text-white font-semibold'>
      {pending ? 'Adding todo...':'Add'}
    </button>
  )
}

export default FormButton
