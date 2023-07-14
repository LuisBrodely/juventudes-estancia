import React from 'react'

const CardB = ({color, img, title, text}) => {
  return (
    <div className='w-72 h-28 rounded-md sombra flex items-center'>
        <div className={`bg-[#${color}] flex justify-center w-28 h-full rounded-l-md`}>
            <img src={img} alt="" className='w-6' />
        </div>
        <div className='px-2'>
            <h5 className='font-semibold'>{title}</h5>
            <div className={`w-12 h-1 bg-[#${color}] my-2 rounded-lg`}></div>
            <p className=' text-sm'>{text}</p>
        </div>
    </div>
  )
}

export default CardB