import React from 'react'
import background from '../assets/AI-background.jpg'
const Hero = () => {
  return (
    <section className='pt-24 pl-16' >
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
            <div data-aos="fade-up" className='space-y-6'>
                <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl leading-tight'>
                    <span className='font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>Artificial Intelligence</span>
                    <br/>
                    for a Smarter Future
                </h1>
                <p className='font-semibold'>Discover how AI is transforming industries and improving lives worldwide. Our cutting-edge solutions harness the power of machine learning to solve complex problems.</p>
                <div className='flex gap-6'>
                    {/**Buttons */}
                <button className='bg-indigo-600 text-white font-semibold rounded-xl px-5 py-2.5 hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/20 cursor-pointer'>Explore AI Solutions</button>
                <button className='border rounded-xl px-5 cursor-pointer hover:border-indigo-500 hover:text-indigo-500 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/20'>Learn More</button>
                </div>
                <div>
                    {/**icons */}
                <div class="flex items-center space-x-2 text-base">
                <h4 class="font-semibold text-slate-900">Contributors</h4>
                <span class="bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 ...">204</span>
                </div>
                <div class="mt-3 flex -space-x-2 overflow-hidden">
                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div class="mt-3 text-sm font-medium">
                <a href="#" class="text-blue-500">+ 198 others</a>
                </div>
                
                </div>
            </div>
             <div data-aos="fade-up-left" className='relative w-full h-80 md:h-150 right-3 '>
                {/**image */}
                <img className='w-full h-full object-cover rounded-4xl' src={background}/>
            </div>
        </div>
    </section>
)}

export default Hero
