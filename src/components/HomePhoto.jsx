import React from 'react'

function HomePhoto({src,text}) {
  return (
    <div className='p-5'>
      <img src={src} alt="" width='300px' height='300px' className='rounded-md transform transition-transform duration-500 hover:scale-110'/>
      <div className='text-center mt-10 text-2xl italic text-gray-600'>{text}</div>
    </div>
  )
}

export default HomePhoto
