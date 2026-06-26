import React from 'react';
// استيراد الأيقونات المطلوبة من مكتبة react-icons
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-gray-300 font-sans px-6 py-12 md:px-16 w-full select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* القسم العلوي: شبكة الأعمدة (4 أعمدة) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-10 text-left" dir="ltr">
          
          {/* العمود الأول: صندوق الاشتراك */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-3 tracking-wide">Be Ready To Grow</h2>
            <p className="text-gray-400 text-sm mb-4">
              Get Exclusive <span class="text-white font-semibold">Update</span>straigt to your inbox.
            </p>
            <div className="flex items-center max-w-xs">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-transparent border border-gray-600 px-3 py-2 text-sm text-white focus:outline-none focus:border-blue-500 rounded-l"
              />
              <button className="bg-[#5897fb] hover:bg-blue-600 text-white font-medium px-4 py-2 text-sm rounded-r transition-colors cursor-pointer">
                OK
              </button>
            </div>
          </div>

          {/* العمود الثاني: روابط سريعة 1 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#login" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* العمود الثالث: روابط سريعة 2 */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#login" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* العمود الرابع: بيانات الاتصال */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-3">
                <IoLocationSharp className="text-gray-300 text-base" />
                <span>Noida, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-gray-300 text-sm" />
                <a href="mailto:abc@gmail.com" className="hover:text-white transition-colors">abc@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-gray-300 text-sm" />
                <a href="tel:+91123456789" className="hover:text-white transition-colors">+91 123456789</a>
              </li>
            </ul>
          </div>

        </div>

        {/* الخط الفاصل الأفقي */}
        <hr className="border-gray-700 my-6" />

        {/* القسم السفلي: الحقوق، السوشيال ميديا، والسياسات */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500" dir="ltr">
          
          {/* حقوق النشر */}
          <div className="tracking-wide">
            copyright © 2024 by TCJ
          </div>

          {/* أزرار وسائل التواصل الاجتماعي */}
          <div className="flex items-center gap-5 text-xl text-white">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <FaFacebookF />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-400 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>

          {/* روابط السياسة والشروط */}
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;