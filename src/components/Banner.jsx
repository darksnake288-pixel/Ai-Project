import React from 'react'
// 1. تصليح خطأ استيراد الأيقونات من مكتباتها
import { LuBrainCircuit } from "react-icons/lu";
import { FiMessageSquare, FiMail } from "react-icons/fi";

const Banner = () => {
    const cardsData = [
    {
      id: 1,
      title: "Machine Learning",
      description: "Systems that learn and improve from experience without being explicitly programmed.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=600",
      icon: <LuBrainCircuit className="text-indigo-600 text-xl" />,
      iconBg: "bg-indigo-50",
      tags: ["Predictive", "Adaptive"]
    },
    {
      id: 2,
      title: "Natural Language Processing",
      description: "Enabling machines to understand, interpret, and generate human language naturally.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600",
      icon: <FiMessageSquare className="text-purple-600 text-xl" />,
      iconBg: "bg-purple-50",
      tags: ["Chatbots", "Translation"]
    },
    {
      id: 3,
      title: "Neural Networks",
      description: "Biologically inspired networks that simulate human brain functions for pattern recognition.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=600",
      icon: <FiMail className="text-indigo-500 text-xl" />,
      iconBg: "bg-indigo-50",
      tags: ["Deep Learning", "Complex Data"]
    }
  ];

  return (
    // 2. جعلنا الحاوية الكبيرة مرنة وتتوسط تلقائياً في الشاشة
    <div className='w-full max-w-7xl mx-auto px-6 pt-16 flex flex-col items-center justify-center'>
      
      {/* حاوية النصوص العلوية متناسقة وموسّطة بالكامل */}
      <div data-aos="fade-up" className='flex flex-col items-center text-center gap-4 mb-12 max-w-3xl'>
        {/** 3. مسحنا الـ pl-[200px] العشوائي واستبدلناه بـ text-center ونظفنا المسافات */}
        <h2 className='text-indigo-600 text-sm font-bold tracking-wider uppercase bg-indigo-50 px-4 py-1.5 rounded-full'>
          AI Technologies
        </h2>
        
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight flex flex-wrap justify-center gap-x-2'>
          Different Types of 
          {/* 4. تصليح كلاس التدرج من bg-linear لـ bg-gradient */}
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Artificial Intelligence
          </span>
        </h1>
        
        <p className='text-slate-500 text-base sm:text-lg font-medium max-w-2xl'>
          Explore the diverse landscape of AI technologies that are shaping our future.
        </p>
      </div>

      {/* شبكة الكروت (Responsive Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {cardsData.map((card) => (
          <div data-aos='flip-left' 
            key={card.id} 
            className="bg-white rounded-[24px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            {/* حاوية الصورة */}
            <div className="h-48 overflow-hidden relative">
              <img 
                src={card.image} 
                alt={card.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* محتوى الكارت */}
            <div className="p-6 flex flex-col gap-4">
              
              {/* الأيقونة والعنوان الرئيسي */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${card.iconBg} flex items-center justify-center`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                  {card.title}
                </h3>
              </div>

              {/* الوصف القصير */}
              <p className="text-slate-500 text-sm leading-relaxed min-h-[48px]">
                {card.description}
              </p>

              {/* الـ Badges / Tags التحتية */}
              <div className="flex flex-wrap gap-2 pt-2">
                {card.tags.map((tag, index) => {
                  const isPink = tag === "Translation" || tag === "Complex Data";
                  return (
                    <span 
                      key={index} 
                      className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors duration-200
                        ${isPink 
                          ? 'bg-pink-50 text-pink-500 hover:bg-pink-100' 
                          : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                        }`}
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Banner