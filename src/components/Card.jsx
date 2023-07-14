import React from 'react'
import marca from '../assets/marcas/starbucks.jpeg'

const Card = () => {
  return (
    <div className='w-80 bg-white sombra rounded-md cursor-pointer'>
        <img src={marca} alt="Marca" className='w-full h-40 object-cover rounded-t-md'/>
        <h6 className='font-bold text-lg p-3 '>Starbucks <span className='text-[#FFB234]'>-</span> Plaza Ambar</h6>
    </div>
  )
}

export default Card