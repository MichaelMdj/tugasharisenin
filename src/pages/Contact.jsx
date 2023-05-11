import React from 'react'
import ig from '../assets/image/imgcontact/imgig.png'
import mail from '../assets/image/imgcontact/imgmail.png'
import wa from '../assets/image/imgcontact/imgwa.png'
import Foot from '../components/card/Foot'

function Contact() {
  return (
    <div>
      <div className='my-40 mx-28 text-xl h-60 items-center justify-center flex bg-gradient-to-br from-black to-blue-950'>
        <div className='flex justify-around gap-10 items-center'>
          <div className='animate-pulse hover:animate-none hover:underline hover:underline-offset-8'>
            <figure className='justify-center flex'><a target='_blank' href="https://www.instagram.com/michaelmdj"><img className='h-20 opacity-50' src={ig} alt="instagram" /></a></figure>
            @michaelmdj
          </div>
          <div className='animate-pulse hover:animate-none hover:underline hover:underline-offset-8'>
            <figure className='flex justify-center'><a target='_blank' href="mailto:michael.david2203@gmail.com"><img className='h-20' src={mail} alt="gmail" /></a></figure>
            michael.david2203@gmail.com
          </div>
          <div className='animate-pulse hover:animate-none hover:underline hover:underline-offset-8'>
            <figure className='flex justify-center'><a target='_blank' href="https://wa.me/6282229413283"><img className='h-20' src={wa} alt="whatsapp" /></a></figure>
            +62 822-2941-3283
          </div>
        </div>
      </div>
      <div className='bottom-0'>
        <Foot />
      </div>
    </div>
  )
}

export default Contact