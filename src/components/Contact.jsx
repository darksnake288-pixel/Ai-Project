import React from 'react';
// استيراد أيقونات الاتصال المناسبة من lucide أو feather
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
  return (
    <section className="w-full bg-white py-20 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* ⬅️ الجزء الأيسر: معلومات الاتصال (Get in Touch) */}
        <div data-aos="zoom-in-right" className="flex flex-col gap-6 max-w-xl">
          <span className="text-indigo-600 text-sm font-semibold tracking-wider uppercase">
            Get in Touch
          </span>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Ready to{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Transform
            </span>{' '}
            Your Business with AI?
          </h1>
          
          <p className="text-slate-500 text-base leading-relaxed mb-4">
            Our team of AI experts is ready to help you implement cutting-edge solutions tailored to your specific needs. Contact us today to schedule a consultation.
          </p>

          {/* قائمة قنوات الاتصال */}
          <div data-aos="zoom-in-right" className="flex flex-col gap-6">
            {/* الهاتف */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl transition-colors duration-300 group-hover:bg-indigo-100">
                <FiPhone />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">Phone</h4>
                <p className="text-slate-500">+1 (555) 123-4567</p>
              </div>
            </div>

            {/* البريد الإلكتروني */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl transition-colors duration-300 group-hover:bg-purple-100">
                <FiMail />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">Email</h4>
                <p className="text-slate-500">contact@airevolution.com</p>
              </div>
            </div>

            {/* العنوان */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl transition-colors duration-300 group-hover:bg-blue-100">
                <FiMapPin />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-800">Office</h4>
                <p className="text-slate-500">123 AI Boulevard, Tech City, TC 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* ➡️ الجزء الأيمن: فورمة التواصل (Contact Form) */}
        <div data-aos="zoom-in-right" className="bg-white rounded-3xl border border-slate-100 shadow-[0_10px_50px_rgba(0,0,0,0.04)] p-8 sm:p-10">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
            
            {/* حقل الاسم */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <input 
                type="text" 
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-200 text-sm"
              />
            </div>

            {/* حقل الإيميل */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <input 
                type="email" 
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-200 text-sm"
              />
            </div>

            {/* حقل الموضوع */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help you?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-200 text-sm"
              />
            </div>

            {/* حقل الرسالة */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Message</label>
              <textarea 
                rows="4" 
                placeholder="Your message here..."
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-slate-800 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all duration-200 text-sm resize-none"
              ></textarea>
            </div>

            {/* زر الإرسال المتناسق جداً مع الصورة */}
            <button 
              type="submit" 
              className="w-full bg-[#5D5FEF] hover:bg-[#4D4FDF] text-white font-semibold py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-indigo-600/10 hover:shadow-xl hover:translate-y-[-1px] cursor-pointer text-center mt-2"
            >
              Send Message
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;