import React from 'react'
// penggunaan props ada name,desc dll
function Card({name,desc,image,alt}) {
  return (
    <div className="first-letter:capitalize bg-gradient-to-br from-black to-blue-950 shadow-2xl shadow-gray-800">
      <h1 className='text-4xl'>{name}</h1>
      <p>{desc}</p>
      <img className='' src={image} alt={alt} />
    </div>
  )
  };

  export default Card