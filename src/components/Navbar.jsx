import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5"; // أيقونة القفل لإغلاق المنيو

const Navbar = () => {
    // 1. Hook لإدارة حالة فتح وقفل المنيو في الموبايل
    const [isOpen, setIsOpen] = useState(false);

    const ServiceDATA=[
        { id:1, title:"Home", Link:'#' },
        { id:2, title:"AI Types", Link:'#' },
        { id:3, title:"Benefits", Link:"#" },
        { id:4, title:"Contact", Link:"#" }
    ]

    return (
        <nav data-aos="fade-down" className='w-full h-18 backdrop-blur-lg border-b flex items-center sticky top-0 z-50 bg-white/80'>
            <div className='w-full max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between relative'>
                
                {/* اللوجو */}
                <div>
                    <h1 className='text-2xl sm:text-3xl font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer'>
                        AI Revolution
                    </h1>
                </div>

                {/* القائمة الأساسية (للكمبيوتر فقط md) */}
                <div className='hidden md:block'>
                    <ul className='flex gap-8 font-medium text-gray-600'>
                        {ServiceDATA.map((services)=>(
                            <li className='hover:text-purple-700 transition-colors duration-200 cursor-pointer' key={services.id}>
                                <a href={services.Link}>{services.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* زرار الكمبيوتر فقط md */}
                <div className='hidden md:block'>
                    <button className='bg-indigo-600 text-white font-semibold rounded-xl px-5 py-2.5 hover:bg-indigo-700 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/20 cursor-pointer'>
                        Get Started
                    </button>
                </div>

                {/* زر البرجر للموبايل (يتبدل لأيقونة X عند الفتح) */}
                <div 
                    onClick={() => setIsOpen(!isOpen)} 
                    className='block md:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer text-2xl transition-colors duration-200 z-50'
                >
                    {isOpen ? <IoClose /> : <CiMenuBurger />}
                </div>

                {/* ⬇️ الـ Dropdown Menu للموبايل ⬇️ */}
                <div className={`
                    absolute top-20 left-0 w-full bg-white border-b p-6 flex flex-col gap-6 shadow-xl transition-all duration-300 ease-in-out md:hidden z-40
                    ${isOpen ? 'opacity-100 transform translate-y-0 visible' : 'opacity-0 transform -translate-y-4 invisible'}
                `}>
                    <ul className='flex flex-col gap-4 font-semibold text-gray-700 text-lg'>
                        {ServiceDATA.map((services)=>(
                            <li 
                                onClick={() => setIsOpen(false)} // تقفل المنيو لو ضغط على أي لينك
                                className='hover:text-purple-700 transition-colors duration-200 cursor-pointer border-b border-gray-50 pb-2' 
                                key={services.id}
                            >
                                <a href={services.Link}>{services.title}</a>
                            </li>
                        ))}
                    </ul>
                    
                    {/* زرار الموبايل جوه المنيو */}
                    <button className='w-full bg-indigo-600 text-white font-semibold rounded-xl py-3 hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-600/10 cursor-pointer text-center'>
                        Get Started
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar