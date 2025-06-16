import { useState } from 'react';
import logo from '../assets/images/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);

  return (
    <nav className="bg-[#0D1117] text-white px-6 py-3 shadow-md relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10" />
          <span className="font-bold text-sm md:text-base">
            Ramsha, Romania, Shepherd & Foundation
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 relative">
          <a href="#" className="hover:bg-yellow-500 px-3 py-2 rounded-md">Home</a>

          {/* Aboutus Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="hover:bg-yellow-500 px-3 py-2 rounded-md flex items-center gap-1">
              Aboutus
              <span className={`transition-transform duration-300 ${aboutOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {aboutOpen && (
              <div className="absolute bg-[#1A1F2B] mt-2 rounded shadow-lg w-40">
                <a href="#" className="block px-4 py-2 hover:bg-yellow-600">Our Team</a>
                <a href="#" className="block px-4 py-2 hover:bg-yellow-600">Vision</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:bg-yellow-500 px-3 py-2 rounded-md">Services</a>

          {/* Articles Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setArticlesOpen(true)}
            onMouseLeave={() => setArticlesOpen(false)}
          >
            <button className="hover:bg-yellow-500 px-3 py-2 rounded-md flex items-center gap-1">
              Articles
              <span className={`transition-transform duration-300 ${articlesOpen ? 'rotate-180' : ''}`}>
                ▼
              </span>
            </button>
            {articlesOpen && (
              <div className="absolute bg-[#1A1F2B] mt-2 rounded shadow-lg w-40">
                <a href="#" className="block px-4 py-2 hover:bg-yellow-600">Legal Insights</a>
                <a href="#" className="block px-4 py-2 hover:bg-yellow-600">Case Studies</a>
              </div>
            )}
          </div>

          <a href="#" className="hover:bg-yellow-500 px-3 py-2 rounded-md">Contact</a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-xl" onClick={() => setOpen(true)}>☰</button>
      </div>

      {/* Offcanvas Mobile Menu */}
     <div className={`fixed top-0 right-0 h-full bg-[#0D1117] w-full z-50 p-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} text-center`}>

        <button className="text-white text-3xl mb-4" onClick={() => setOpen(false)}>×</button>
        <div className="flex flex-col gap-4">
          <a href="#">Home</a>
          <a href="#">Aboutus</a>
          <a href="#">Services</a>
          <a href="#">Articles</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}
