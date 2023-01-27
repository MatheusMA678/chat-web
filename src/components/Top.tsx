

import { X } from 'phosphor-react'
import avatar from '../assets/images/avatar.png'

export function Top() {
  return (
    <div className='w-full h-fit flex justify-between items-center '>
      <img className='w-12 h-12' src={avatar} alt="Foto de Cecilia Sassaki" />
      <div className='justify-self-start ml-4 flex-1'>
        <h1 className='font-bold'>Cecilia Sassaki</h1>
        <p className='text-[#00B37E] text-xs flex items-center gap-1'>
          <div className='w-2 h-2 rounded-full bg-[#00B37E]' /> Online
        </p>
      </div>
      <button className='transition-opacity hover:opacity-70 active:opacity-50' >
        <X size={20} color="white" weight="bold" />
      </button>
    </div>
  )
}