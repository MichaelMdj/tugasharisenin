import React from 'react'
import { Link } from 'react-router-dom'

function Foot() {
  return (
    <footer class="sticky w-screen bottom-0 m-0 p-0 bg-gradient-to-br from-black to-blue-950">
        <ul className='flex gap-20 items-center justify-center h-16 text-xl '>
            <li className='hover:opacity-50 hover:duration-300 hover:underline underline-offset-8'><Link to='/'> Home </Link></li>
            <li className='hover:opacity-50 hover:duration-300 hover:underline underline-offset-8'><Link to='/portfolio'> Portfolio </Link></li>
            <li className='hover:opacity-50 hover:duration-300 hover:underline underline-offset-8'><Link to='/contact'> Contact </Link></li>
        </ul>
        <div class="flex justify-center bg-gradient-to-t from-[#5f5e5eae] to-[#000000a0]">
            <h1 class="text-xs">© Copyright 2023, MDJ Industry. All Rights Reserved. </h1>
        </div>
    </footer>    
  )
}

export default Foot