import React from 'react';
// استيراد الأيقونات المناسبة للشكل
import { FiMic, FiDollarSign, FiShield, FiZap, FiCloud, FiBookOpen } from 'react-icons/fi';

const AIBenefits = () => {
  // مصفوفة البيانات بـ 6 كروت والألوان المخصصة لكل أيقونة
  const benefitsData = [
    {
      id: 1,
      title: "Healthcare Advancements",
      description: "AI enables faster diagnosis, personalized treatment plans, and drug discovery, saving countless lives.",
      icon: <FiMic />,
      iconColor: "text-indigo-400",
      iconBg: "bg-indigo-500/10"
    },
    {
      id: 2,
      title: "Economic Growth",
      description: "AI-driven automation and insights contribute to increased productivity and economic expansion.",
      icon: <FiDollarSign />,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10"
    },
    {
      id: 3,
      title: "Enhanced Security",
      description: "AI-powered systems detect and prevent cyber threats and fraud more effectively than traditional methods.",
      icon: <FiShield />,
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/10"
    },
    {
      id: 4,
      title: "Energy Efficiency",
      description: "AI optimizes energy consumption in industries and homes, reducing waste and environmental impact.",
      icon: <FiZap />,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/10"
    },
    {
      id: 5,
      title: "Climate Solutions",
      description: "AI models help predict climate patterns and develop strategies to combat climate change.",
      icon: <FiCloud />,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/10"
    },
    {
      id: 6,
      title: "Education Access",
      description: "AI-powered platforms provide personalized learning experiences to students worldwide.",
      icon: <FiBookOpen />,
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/10"
    }
  ];

  return (
    <section data-aos="zoom-in" className="w-full bg-[#0B132A] text-white py-20 px-6 rounded-[32px] max-w-7xl mx-auto my-12">
      
      {/* الجزء العلوي (Header Section) */}
      <div className="text-center flex flex-col items-center gap-3 mb-16">
        <span className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">
          AI Benefits
        </span>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight max-w-3xl leading-tight">
          How AI is{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Transforming Our World
          </span>
        </h1>
        
        <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-2">
          Discover the positive impact of AI across various sectors and industries.
        </p>
      </div>

      {/* شبكة كروت الخدمات الـ 6 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefitsData.map((benefit) => (
          <div 
            key={benefit.id}
            className="bg-[#1C2541]/40 border border-slate-800 rounded-2xl p-8 hover:bg-[#1C2541]/70 transition-all duration-300 hover:border-slate-700 group cursor-pointer flex flex-col gap-4"
          >
            {/* حاوية الأيقونة النيون */}
            <div className={`w-10 h-10 rounded-xl ${benefit.iconBg} ${benefit.iconColor} flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110`}>
              {benefit.icon}
            </div>

            {/* نصوص الكارت */}
            <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-200">
              {benefit.title}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AIBenefits;