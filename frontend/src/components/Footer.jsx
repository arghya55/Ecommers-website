import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.chlothyzy_img} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>
           Chlothzy Fashion brings bold elegance to your wardrobe. From bodycon dresses to chic essentials, we redefine style. Perfect fits, premium fabrics — confidence in every thread. Step into the spotlight with Chlothzy — where fashion speaks.
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>

        <div className='text-center'>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Phone: 8505835814</li>
                <li>Email: contact@chlothzy.shop</li>
            </ul>
            <p className='text-lg font-medium mt-5'>Address</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Unit-113, Malabar Hill</li>
                <li>Maharashtra - 400006</li>
                </ul>
        </div>
        

      </div>

        <div>
  <hr />
  <p className='py-5 text-sm text-center'>
    Copyright 2025@ chlothzy.shop - All Rights Reserved.
  </p>
  <div className='flex flex-col items-center gap-2 pb-10'>
    <p className='text-gray-700 font-medium'>
      Follow us on Instagram for daily style inspo
    </p>
    <a
      href="https://www.instagram.com/chlothzy/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* Instagram SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="text-3xl text-pink-600 hover:text-pink-800 transition duration-300" height="1em" width="1em"
      >
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
    </a>
  </div>
</div>

        </div>
  )
}

export default Footer
