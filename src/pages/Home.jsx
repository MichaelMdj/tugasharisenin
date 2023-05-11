// rfce tag kluarin template
import React from 'react'
import imghome1 from '../assets/image/imghome/imghome.jpeg'
import image1 from '../assets/image/imgportofolio/img1.jpg'
import image2 from '../assets/image/imgportofolio/img2.jpg'
import Foot from '../components/card/Foot'
import { Link } from 'react-router-dom'
import Name from '../components/card/Name'

function Home() {
  return (
    <main >
      <div className='mt-32 mx-28  gap-8 bg-gradient-to-br from-black to-blue-950 flex items-center text-justify text-xl'>
        <div className='pl-8 text-2xl'>
          HI! Saya <span className='uppercase font-bold text-2xl'>Michael David. </span><br />
          {<Name />}
          Saya seorang 'fullstack Website Developer student
          <span className='text-2xl font-bold animate-pulse'><a href="https://harisenin.com/"> harisenin.com' </a></span>
          dengan kemauan untuk belajar lebih dalam mengenai Website Developer yang kreatif dan menarik.
        </div>
        <figure>
          <img className='' src={imghome1} alt="FotoSaya" />
        </figure>
      </div>

      <div className='my-20 mx-28 py-10 px-20 bg-gradient-to-br from-black to-blue-950 flex-col flex gap-10 items-start'>
        <h1 className='text-3xl font-bold'>What i do</h1>
        <div className='flex justify-between w-full items-start text-justify'>
          <div className='flex flex-col gap-2 w-96'>
            <h2 className='text-2xl font-bold'>Purchasing Staff</h2>
            <ul className='list-disc mx-5'>
              <li>Karyawan salah satu PT di Surabaya.</li>
              <li>Purchasing admin & pengadaan barang 
                  tunai maupun tempo.</li>
            </ul>
          </div>
          <div className='w-96 flex flex-col gap-2'>
            <h2 className='text-2xl font-bold'> Harisenin.com Student</h2>
            <ul className='list-disc mx-5'>
              <li>Fullstack web develop student.</li>
              <li>Belajar & praktek pembuatan website.</li>
              <li>mengerjakan tugas materi dan pembuatan project akhir 
                  secara individu maupun kelompok.</li>
            </ul>
          </div>
        </div>
      </div>
      {/* footer */}
      <div>
        <Foot />
      </div>
    </main>
  )
}

export default Home