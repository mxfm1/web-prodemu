"use client"

import React from 'react'
import Button from '../ui/button'
import { useState } from 'react'


const TestForm = () => {
  const [errorMessages, setErrorMessages] = useState({
    nombre: '',
    apellido: '',
    direccion: '',
    numero: '',
    correo: ''
  });
  return (
    <div className='w-full h-[70vh] mt-8 contact-form'>
      <div className="flex justify-center">
      <div className=" bg-white rounded-xl shadow-xl w-[600px] h-[450px] pt-8">
          <h1 className='text-center text-4xl text-brown'>Datos de contacto</h1>
          <p className='text-center mx-8 text-lg mt-2'>Llena nuestro formulario de contacto para ordernar uno de nuestros productos</p>
        <form className='flex flex-wrap mt-8'>
          <div className="w-full md:w-1/2 pl-4">
            <div className='input-wrapper'>
              <label htmlFor="" className='name-label'>Nombre</label>
              <input type="text" name='nombre'/>
              <p className={`text-red-500 error-msg ${errorMessages.nombre ? '' : 'hidden'}`}>{errorMessages.nombre}</p>
            </div>
           <div className='input-wrapper'>
              <label htmlFor="">Apellido</label>
              <input type="text" name='apellido'/>
              <p className={`text-red-500 error-msg ${errorMessages.apellido ? '' : 'hidden'}`}>{errorMessages.apellido}</p>
           </div>
            <div className='input-wrapper'>
              <label htmlFor="">Direccion</label>
              <input type="text" name='direccion'/>
              <p className={`text-red-500 error-msg ${errorMessages.direccion ? '' : 'hidden'}`}>{errorMessages.direccion}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
          <div className='input-wrapper'>
              <label htmlFor="">Numero</label>
              <input type="text" name='numero'/>
              <p className={`text-red-500 error-msg ${errorMessages.numero ? '' : 'hidden'}`}>{errorMessages.numero}</p>
          </div>
          <div className='input-wrapper'>
            <label htmlFor="">Correo</label>
            <input type="text" name='correo'/>
            <p className={`text-red-500 error-msg ${errorMessages.correo ? '' : 'hidden'}`}>{errorMessages.correo}</p>
          </div>
          </div>
          <div className="w-full flex justify-center mt-4"> {/* Contenedor para centrar el botón */}
              <Button type='submit' title='Enviar' variant='btn_login'/>
            </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default TestForm
