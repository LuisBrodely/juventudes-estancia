import React from 'react'

const Button = ({text, color = true}) => {
  return (
    <button className={`${color ? 'bg-[#2CA3DC]' : 'bg-[#BD2683]'} text-white py-2.5 px-5 font-medium rounded`}>{text}</button>
  )
}

export default Button