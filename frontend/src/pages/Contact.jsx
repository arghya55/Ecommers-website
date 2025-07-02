import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
    };
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6 w-full md:w-1/2'>
         <p className="font-semibold text-xl text-gray-600">Get in Touch</p>
         {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <input
                className="p-3 border border-gray-300 rounded-md"
                type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                required
              />
              <input
                className="p-3 border border-gray-300 rounded-md"
                type="email"
                placeholder="Your Email"
                id="email"
                name="email"
                required
              />
              <textarea
                className="p-3 border border-gray-300 rounded-md h-36 resize-none"
                placeholder="Your Message"
                id="message"
                name="message"
                required
              ></textarea>
              <button
                className="bg-black text-white py-3 px-6 rounded-md border border-transparent hover:bg-white hover:text-black hover:border-black transition duration-300"
                type="submit"
              >
                Submit
              </button>
            </form>
          ) : (
            <div className="text-green-600 border border-green-400 bg-green-100 p-4 rounded w-full">
              Thank you! Your message has been successfully submitted.
            </div>
          )}
        </div>
      </div>

      <NewsletterBox/>
    </div>
  )
}

export default Contact
