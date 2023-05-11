import React from 'react'
import Card from '../components/card/Card'
import image1 from '../assets/image/imgportofolio/img1.jpg'
import image2 from '../assets/image/imgportofolio/img2.jpg'
import image3 from '../assets/image/imgportofolio/img3.jpg'
import image4 from '../assets/image/imgportofolio/img4.jpg'
import Foot from '../components/card/Foot'


function Portfolio() {
  return (
    <main className='mt-32'>
      <div className='mx-28 p-16 flex flex-col gap-20'> 
        <Card name='landing page harisenin.com' desc='ini adalah tugas pertama saya' image={image1}  alt='imageharisenin' />
        <Card name='website jual beli buket' desc='ini adalah tugas kedua saya' image={image2} alt='imagebuffalo'  />
        <Card name='' desc='' image={image3} alt='imagebuffalo'  />
        <Card name='' desc='' image={image4} alt='imagebuffalo'  />
      </div>
      <div className=''>
        <Foot />
      </div>
     </main>
  )
}

export default Portfolio