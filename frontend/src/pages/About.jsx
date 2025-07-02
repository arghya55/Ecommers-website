import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p> <b>Chlothzy</b> is your go-to destination for premium fashion that speaks elegance, confidence, and modern style. We believe in celebrating every body type through bold and beautiful silhouettes—especially our signature <b>bodycon</b> <b>dresses</b>designed to turn heads.</p>
              <p>Our curated collections reflect the latest trends while maintaining timeless quality. Whether you're dressing up for a party or owning your everyday look, <b>Chlothzy </b></p>
              <b className='text-gray-800'>Our Mission</b>
              <p>At <b>Chlothzy</b>our mission is to empower individuals through style. We aim to offer easy access to high-quality, trendsetting apparel that makes you feel confident in your own skin—especially with our standout bodycon range.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Flattering Fits:</b>
            <p className=' text-gray-600'>Our bodycon dresses are crafted to enhance every curve with premium stretchable fabrics.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Effortless Shopping:</b>
            <p className=' text-gray-600'>Browse, choose, and flaunt – our site makes fashion accessible and seamless to shop.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Fashion that Empowers:</b>
            <p className=' text-gray-600'>At Chlothzy, we’re all about bold confidence—each dress is designed to make a statement.

</p>
          </div>
      </div>

      <NewsletterBox/>
      
    </div>
  )
}

export default About
