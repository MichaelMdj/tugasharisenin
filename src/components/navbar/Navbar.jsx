import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className='fixed z-50 top-0 w-full'>
    <div className='flex w-full bg-gradient-to-br from-black to-blue-950 justify-between items-center px-24'>
        <h1 className='text-4xl font-extrabold font-serif uppercase text-white animate-pulse hover:animate-none'><Link to='/contact'>Michael David</Link></h1>
        <ul className='flex gap-20 items-center justify-center h-16 text-xl '>
            <li className='hover:opacity-50 hover:duration-300 hover:underline underline-offset-8'><Link to='/'>Home</Link></li>
            <li className='hover:opacity-50 hover:duration-300 hover:underline underline-offset-8'><Link to='/portfolio'>Portfolio</Link></li>
            <li className='hover:opacity-50 hover:duration-300 hover:underline underline-offset-8'><Link to='/contact'>Contact</Link></li>
        </ul>
    </div>
    </header>
  )
}

export default Navbar