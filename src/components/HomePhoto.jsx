import React from 'react'

function HomePhoto({ src, text }) {
  return (
    <div className="card bg-white dark:bg-black w-96">
      <figure className="px-10 pt-10">
        <img
          src={src}
          alt="Shoes"
          className="hover:scale-110 duration-500 rounded-sm" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-black dark:text-white">{text}</h2>
      </div>
    </div>
  )
}

export default HomePhoto
